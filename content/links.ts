/** The live Al Buhaira website; prototype actions link to its verified pages. */
export const SITE = "https://www.albuhaira.com"

/** Absolute URL for a page on the live site, e.g. site("/claims"). */
export const site = (path: string) => `${SITE}${path.startsWith("/") ? path : `/${path}`}`

/**
 * Pages on www.albuhaira.com stand in for this site's own pages and open in
 * the same tab. Anything else (portals on subdomains, app stores, TPA sites,
 * social networks) is external and opens in a new tab.
 */
export function isExternal(href: string) {
  if (!/^https?:\/\//i.test(href)) return false
  try {
    const { hostname } = new URL(href)
    return hostname !== "www.albuhaira.com" && hostname !== "albuhaira.com"
  } catch {
    return false
  }
}
