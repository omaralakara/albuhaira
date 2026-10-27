import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

/*
 * One primary style across the site: the royal-blue pill (`default`).
 * Everything else is visibly secondary: outlined, tinted, ghost or a text link.
 * Sizes keep touch targets at 44px+ except `sm`, which is for dense menus.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 outline-hidden select-none focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-3 focus-visible:outline-brand active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.1em]",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_8px_20px_-10px_color-mix(in_srgb,var(--brand)_55%,transparent)] hover:bg-brand-strong",
        outline:
          "border-ink/20 bg-transparent text-ink hover:border-ink/45 hover:bg-ink/[0.03] aria-expanded:border-ink/45",
        secondary: "bg-brand-tint text-brand hover:bg-brand-tint-strong",
        ghost: "text-ink hover:bg-ink/[0.05] aria-expanded:bg-ink/[0.05]",
        link: "h-auto rounded-none px-0 text-brand underline decoration-brand/30 underline-offset-[0.3em] hover:decoration-brand",
        inverse: "bg-white text-brand-deep hover:bg-white/90",
        "outline-inverse": "border-white/35 bg-transparent text-white hover:border-white/70 hover:bg-white/10",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
