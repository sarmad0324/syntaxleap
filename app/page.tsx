import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDo } from "@/components/what-we-do"
import { FeaturedProject } from "@/components/featured-project"
import { OurProcess } from "@/components/our-process"
import { Newsletter } from "@/components/newsletter"
import { SocialLinks } from "@/components/social-links"

export const metadata: Metadata = {
  title: "SyntaxLeap",
  description:
    "Transform your business with AI-powered digital solutions. SyntaxLeap builds custom web & mobile applications with machine learning capabilities for startups and SMEs. Get your free consultation today.",
  openGraph: {
    title: "SyntaxLeap",
    description:
      "Transform your business with AI-powered digital solutions. Custom web & mobile apps with machine learning capabilities.",
    url: "https://syntaxleap.info",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap AI-Driven Digital Products",
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
      <FeaturedProject />
      <OurProcess />
      <Newsletter />
      <SocialLinks />
    </>
  )
}
