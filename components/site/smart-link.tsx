import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"

import { isExternal } from "@/content/links"
import { cn } from "@/lib/utils"

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string
  children: ReactNode
  /** Append the "(opens in a new tab)" hint for other domains (default true) */
  announceNewTab?: boolean
  /** "auto" adds the ↗ mark after links to other domains; "none" (default) leaves icons to the caller */
  arrow?: "auto" | "none"
  /** Size, colour and spacing of that mark */
  arrowClassName?: string
}

/**
 * Keeps in-page anchors native, routes site paths through next/link, opens
 * other domains in a new tab (with an sr-only hint), and leaves albuhaira.com,
 * tel: and mailto: links as normal navigation.
 */
export function SmartLink({
  href,
  children,
  className,
  announceNewTab = true,
  arrow = "none",
  arrowClassName,
  ...props
}: SmartLinkProps) {
  // In-page anchors stay native so the browser scrolls instantly and moves focus to the section.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  const external = isExternal(href)
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external && arrow === "auto" && (
        <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className={cn("size-3.5 shrink-0", arrowClassName)} />
      )}
      {external && announceNewTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
