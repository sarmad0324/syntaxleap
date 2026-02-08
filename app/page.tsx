import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDo } from "@/components/what-we-do"
import { WhyAIAutomation } from "@/components/why-ai-automation"
import { RemoteTeamsSection } from "@/components/remote-teams-section"
import { OurProcess } from "@/components/our-process"
import { ShowcaseSection } from "@/components/showcase-section"
import { Newsletter } from "@/components/newsletter"

export const metadata: Metadata = {
  title: "SyntaxLeap - From MVP to Scale | Web, Mobile & AI Development",
  description:
    "We build scalable, production-ready web and mobile products for startups and growing businesses using React, React Native, Next.js, and AI-powered Node.js backends.",
  keywords: [
    "React development agency",
    "Next.js development",
    "React Native mobile apps",
    "startup MVP development",
    "product development agency",
    "web app development",
    "mobile app development",
    "Node.js backend",
    "Supabase development",
    "startup development services",
  ],
  openGraph: {
    title: "SyntaxLeap - From MVP to Scale | Web, Mobile & AI Development",
    description:
      "Build scalable, production-ready products with React, React Native, and Next.js. We partner with startups and growing businesses.",
    url: "https://www.syntaxleap.info/",
    images: [
      {
        url: "https://www.syntaxleap.info/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap Product Development Agency",
      },
    ],
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Services Overview */}
      <WhatWeDo />
      {/* Why AI & Automation */}
      <WhyAIAutomation />
      {/* Remote Teams Section */}
      <RemoteTeamsSection />
      {/* Our Process */}
      <OurProcess />
      {/* Showcase Section */}
      <ShowcaseSection />
      {/* Newsletter */}
      <Newsletter />
    </>
  )
}
