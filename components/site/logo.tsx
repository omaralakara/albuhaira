import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

/**
 * The official Al Buhaira National Insurance logo, unchanged. Light surfaces only.
 */
export function Logo({ className, preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 rounded-md", className)}>
      <Image
        src="/brand/al-buhaira-logo.svg"
        alt="Al Buhaira National Insurance Company, home"
        width={685}
        height={169}
        preload={preload}
        className="h-full w-auto"
      />
    </Link>
  )
}
