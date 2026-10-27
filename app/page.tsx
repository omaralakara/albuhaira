import { BusinessInsurance } from "@/components/sections/business/business-insurance"
import { Claims } from "@/components/sections/claims"
import { DigitalServices } from "@/components/sections/digital-services"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { Hero } from "@/components/sections/hero/hero"
import { MedicalNetwork } from "@/components/sections/medical-network"
import { PersonalInsurance } from "@/components/sections/personal-insurance"
import { QuickAccess } from "@/components/sections/quick-access"
import { Trust } from "@/components/sections/trust"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header/site-header"

/**
 * Homepage: "Life moves. Stay protected."
 * Ordered around three questions: what can I get (hero, personal, business),
 * where do I go for help (quick access, claims, medical network), and why
 * Al Buhaira (trust, digital services), then answers and a way to talk to us.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <QuickAccess />
        <PersonalInsurance />
        <BusinessInsurance />
        {/* Medical network opens with the line that continues from the claims band */}
        <Claims />
        <MedicalNetwork />
        <Trust />
        <DigitalServices />
        <Faq />
        {/* Renders #find-cover and the #contact section */}
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
