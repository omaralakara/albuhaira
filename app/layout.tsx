import type { Metadata, Viewport } from "next"
import { Instrument_Sans, Newsreader } from "next/font/google"

import { MotionProvider } from "@/components/providers/motion-provider"
import "./globals.css"

// Upright Newsreader is preloaded for the headlines. The italic is only used for
// short emphasis, so it loads when first needed instead of competing with the hero
// photo. Both calls declare the same "Newsreader" family, so italic text picks up
// the italic file without extra CSS.
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
})

const newsreaderItalic = Newsreader({
  subsets: ["latin"],
  style: "italic",
  axes: ["opsz"],
  variable: "--font-newsreader-italic",
  display: "swap",
  preload: false,
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Al Buhaira National Insurance | Life moves. Stay protected.",
  description:
    "Motor, medical, travel, home and business insurance from Al Buhaira National Insurance Company in Sharjah. Get a quote, start a claim or find a medical provider.",
}

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${newsreader.variable} ${newsreaderItalic.variable} ${instrumentSans.variable}`}
    >
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-brand px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3 focus:shadow-soft"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <noscript>
          <style>{`[data-animated-content]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  )
}
