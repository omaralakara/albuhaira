import { createCn } from "cn/config"

/**
 * Class merging aware of the site's custom tokens. Without this, merge logic
 * reads `text-display-1` as a colour and drops it next to `text-ink`.
 */
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-hero", "display-1", "display-2", "display-3", "lead"] }],
      shadow: [{ shadow: ["soft", "lift"] }],
      ease: [{ ease: ["out-quart", "out-expo"] }],
    },
  },
})
