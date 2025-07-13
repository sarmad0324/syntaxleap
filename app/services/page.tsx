import type { Metadata } from "next"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"

export const metadata: Metadata = {
  title: "AI Development Services | SyntaxLeap",
  description:
    "Comprehensive AI development services including web applications, mobile apps, UI/UX design, WordPress integrations, and remote AI teams. Transform your business with SyntaxLeap's AI expertise.",
  keywords: [
    "AI development services",
    "machine learning services",
    "artificial intelligence consulting",
    "AI web development",
    "intelligent mobile apps",
    "AI UI/UX design",
    "WordPress AI integration",
    "remote AI teams",
    "custom AI solutions",
  ],
  openGraph: {
    title: "AI Development Services | SyntaxLeap",
    description:
      "Comprehensive AI development services to transform your business with artificial intelligence and machine learning solutions.",
    url: "https://www.syntaxleap.info/services",
    images: [
      {
        url: "https://www.syntaxleap.info/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap AI Development Services",
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
