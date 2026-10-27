import type { StaticImageData } from "next/image"

import bizPeople from "@/assets/images/biz-people.jpg"
import bizProperty from "@/assets/images/biz-property.jpg"
import bizSpecialist from "@/assets/images/biz-specialist.jpg"
import bizTransport from "@/assets/images/biz-transport.jpg"
import cardJetski from "@/assets/images/card-jetski.jpg"
import cardYacht from "@/assets/images/card-yacht.jpg"
import heroEveryday from "@/assets/images/hero-everyday.jpg"
import heroHome from "@/assets/images/hero-home.jpg"
import heroMedical from "@/assets/images/hero-medical.jpg"
import heroMotor from "@/assets/images/hero-motor.jpg"
import heroTravel from "@/assets/images/hero-travel.jpg"
import trustArchitecture from "@/assets/images/trust-architecture.jpg"

/**
 * Photography manifest. Static imports give Next.js the intrinsic size and a
 * blur placeholder; files are optimised to ≤ 2400px on the long edge.
 * All photos are openly licensed stand-ins (credits in docs/image-credits.md);
 * replace them with commissioned brand photography before launch.
 */
export type SiteImage = {
  src: StaticImageData
  alt: string
  /** CSS object-position for crops, e.g. "50% 40%" */
  position?: string
}

export const images = {
  heroEveryday: {
    src: heroEveryday,
    alt: "People walking and cycling along the beach promenade at Kite Beach, Dubai, at sunset",
    position: "50% 62%",
  },
  heroMotor: {
    src: heroMotor,
    alt: "Evening traffic on a Dubai highway heading towards Burj Khalifa at sunset",
    // Keeps sky above the Burj Khalifa spire in the wide Motor card
    position: "50% 55%",
  },
  heroMedical: {
    src: heroMedical,
    alt: "A smiling young girl high-fives her doctor during a check-up in a bright clinic room",
    position: "45% 50%",
  },
  heroTravel: {
    src: heroTravel,
    alt: "Travellers on moving walkways beneath rows of date palms in Terminal 3 at Dubai International Airport",
    position: "62% 50%",
  },
  heroHome: {
    src: heroHome,
    alt: "Parents cradling their newborn baby by a sunlit window at home",
    position: "50% 42%",
  },
  cardYacht: {
    src: cardYacht,
    alt: "A motor yacht with passengers cruising off Dubai Marina",
    position: "45% 55%",
  },
  cardJetski: {
    src: cardJetski,
    alt: "Jet skis carving spray trails across green water beside a wooded shore",
    position: "42% 58%",
  },
  bizPeople: {
    src: bizPeople,
    alt: "Colleagues around a meeting table planning work on a wall of sticky notes",
    position: "40% 50%",
  },
  bizProperty: {
    src: bizProperty,
    alt: "Tower cranes over high-rise buildings under construction at Jumeirah Lake Towers, Dubai",
    position: "50% 8%",
  },
  bizTransport: {
    src: bizTransport,
    alt: "Cargo dhows moored at the Deira dhow wharf in Dubai, with goods stacked along the quay",
    position: "55% 50%",
  },
  bizSpecialist: {
    src: bizSpecialist,
    alt: "A high-voltage electricity pylon carrying power lines across red sand dunes outside Dubai",
    position: "66% 50%",
  },
  trustArchitecture: {
    src: trustArchitecture,
    alt: "The Al Buhaira Corniche skyline in Sharjah reflected in Khalid Lagoon, where Al Buhaira's head office stands",
    position: "50% 50%",
  },
} satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof images
