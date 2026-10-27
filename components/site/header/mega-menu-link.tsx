"use client"

import { NavigationMenu } from "radix-ui"
import type { ReactNode } from "react"

import { SmartLink } from "@/components/site/smart-link"

/**
 * A link inside a desktop mega menu. Radix wires it into the menu's focus
 * group (arrow keys move between links) and closes the menu once it is chosen.
 */
export function MegaMenuLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <NavigationMenu.Link asChild>
      <SmartLink href={href} className={className}>
        {children}
      </SmartLink>
    </NavigationMenu.Link>
  )
}
