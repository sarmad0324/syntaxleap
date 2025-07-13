import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDo } from "@/components/what-we-do"
import { OurProcess } from "@/components/our-process"
import { FeaturedProjects } from "@/components/featured-projects"
import { Newsletter } from "@/components/newsletter"

export const metadata: Metadata = {
  title: "SyntaxLeap - Expert in AI-Powered Web & Mobile Development",
  description:
    "SyntaxLeap builds AI-driven digital products for startups and SMEs. We create intelligent web apps, mobile solutions, and provide remote AI teams to accelerate your business growth.",
  keywords: [
    "AI development agency",
    "machine learning solutions",
    "artificial intelligence",
    "AI web apps",
    "intelligent mobile apps",
    "remote AI teams",
    "startup AI solutions",
    "SME digital transformation",
    "custom AI development",
    "AI-driven products",
  ],
  openGraph: {
    title: "SyntaxLeap - Expert in AI-Powered Web & Mobile Development",
    description:
      "SyntaxLeap builds AI-driven digital products for startups and SMEs. Accelerate your business growth with intelligent solutions.",
    url: "https://syntaxleap.info",
    images: [
      {
        url: "https://www.syntaxleap.info/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap AI Development Agency",
      },
    ],
  },
  alternates: {
    canonical: "https://syntaxleap.info",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <OurProcess />
      <FeaturedProjects />
      <Newsletter />
    </>
  )
}
