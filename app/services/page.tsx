import type { Metadata } from "next"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"

export const metadata: Metadata = {
  title: "Our Services | Dedicated Development, MVP Build & AI Automation | SyntaxLeap",
  description:
    "Dedicated product development, MVP builds, and AI automation for startups. From $2k/month ongoing development to $3-6k fixed-scope MVPs. React, Next.js, React Native.",
  keywords: [
    "dedicated product development",
    "MVP development services",
    "startup development agency",
    "React development services",
    "Next.js development",
    "React Native apps",
    "AI automation tools",
    "internal tools development",
    "product development agency",
  ],
  openGraph: {
    title: "Our Services | Dedicated Development, MVP Build & AI Automation",
    description:
      "Dedicated teams, MVP builds, and AI automation for startups. React, Next.js, React Native development services.",
    url: "https://www.syntaxleap.info/services",
    images: [
      {
        url: "https://www.syntaxleap.info/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
    </>
  )
}
