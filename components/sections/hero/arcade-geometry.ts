/**
 * Geometry of the arcade, in viewBox units of a 1000 × 1040 box. The three
 * windows share one proportion (3:5) and shrink as they step back to the
 * left: their feet rise and their tops fall, so the row recedes like a
 * colonnade in perspective, and each moment travels forward through it.
 */
export const VIEW = { w: 1000, h: 1040 } as const

export type ArchBox = { x: number; y: number; w: number; h: number }

const PROPORTION = 0.6 // width / height

const box = (x: number, w: number, foot: number): ArchBox => {
  const h = w / PROPORTION
  return { x, y: foot - h, w, h }
}

/** [main, next, after next], front to back */
export const WINDOWS: ArchBox[] = [box(440, 540, 940), box(150, 330, 890), box(0, 200, 840)]

type Circle = { cx: number; cy: number; r: number }

const offsetCircle = ({ x, y, w }: ArchBox, offset: number): Circle => ({
  cx: x + w / 2,
  cy: y + w / 2,
  r: w / 2 + offset,
})

/** Upper crossing point of two circles (the one with the smaller y) */
function upperCrossing(a: Circle, b: Circle) {
  const dx = b.cx - a.cx
  const dy = b.cy - a.cy
  const d = Math.hypot(dx, dy)
  const along = (a.r * a.r - b.r * b.r + d * d) / (2 * d)
  const h = Math.sqrt(Math.max(a.r * a.r - along * along, 0))
  const mx = a.cx + (along * dx) / d
  const my = a.cy + (along * dy) / d
  const p1 = { x: mx + (h * dy) / d, y: my - (h * dx) / d }
  const p2 = { x: mx - (h * dy) / d, y: my + (h * dx) / d }
  return p1.y < p2.y ? p1 : p2
}

const n = (value: number) => Math.round(value * 10) / 10

/**
 * The brand line: it rises from below the smallest window, follows the
 * skyline of all three arches at a constant offset (passing from one arch to
 * the next where their outlines cross) and flows out to the right of the
 * main window, like the decorated band around the dome in the emblem.
 * `offset` is the gap between the windows and the line, in viewBox units.
 */
export function arcadeLinePath(offset = 22, windows: ArchBox[] = WINDOWS) {
  // Left to right: after next, next, main
  const arches = [...windows].reverse()
  const circles = arches.map((arch) => offsetCircle(arch, offset))
  const first = circles[0]
  const last = circles[circles.length - 1]
  const lastBox = arches[arches.length - 1]
  const firstBox = arches[0]

  const left = first.cx - first.r
  const foot = firstBox.y + firstBox.h
  const parts = [
    `M ${n(left - 64)} ${n(foot + 92)}`,
    `C ${n(left - 14)} ${n(foot + 70)} ${n(left)} ${n(foot + 20)} ${n(left)} ${n(foot - 60)}`,
    `L ${n(left)} ${n(first.cy)}`,
  ]

  for (let i = 0; i < circles.length - 1; i++) {
    const a = circles[i]
    const b = circles[i + 1]
    // Where the next outline's straight left side meets this arch's curve
    const side = b.cx - b.r
    const reach = a.r * a.r - (side - a.cx) ** 2
    const sideY = reach >= 0 ? a.cy - Math.sqrt(reach) : -Infinity
    if (sideY >= b.cy) {
      // The curve meets the next window's straight side below its springline: climb it
      parts.push(`A ${n(a.r)} ${n(a.r)} 0 0 1 ${n(side)} ${n(sideY)}`, `L ${n(side)} ${n(b.cy)}`)
    } else {
      const p = upperCrossing(a, b)
      parts.push(`A ${n(a.r)} ${n(a.r)} 0 0 1 ${n(p.x)} ${n(p.y)}`)
    }
  }

  const right = last.cx + last.r
  const exitY = last.cy + lastBox.h * 0.3
  parts.push(
    `A ${n(last.r)} ${n(last.r)} 0 0 1 ${n(right)} ${n(last.cy)}`,
    `L ${n(right)} ${n(exitY)}`,
    `C ${n(right)} ${n(exitY + 80)} ${n(right + 24)} ${n(exitY + 116)} ${n(right + 90)} ${n(exitY + 132)}`
  )
  return parts.join(" ")
}

/** CSS position of a box inside the arcade, as percentages */
export const place = ({ x, y, w, h }: ArchBox) => ({
  left: `${(x / VIEW.w) * 100}%`,
  top: `${(y / VIEW.h) * 100}%`,
  width: `${(w / VIEW.w) * 100}%`,
  height: `${(h / VIEW.h) * 100}%`,
})

/** --arch-rise for a box: a true semicircle on top */
export const rise = ({ w, h }: ArchBox) => `${((w / 2 / h) * 100).toFixed(3)}%`
