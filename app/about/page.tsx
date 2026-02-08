import type { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { TimelineSection } from "@/components/timeline-section"
import { TeamSection } from "@/components/team-section"

export const metadata: Metadata = {
  title: "About | SyntaxLeap - Product Development for Startups",
  description:
    "We're a founder-led development agency building scalable products for startups. Small, senior-driven team focused on quality and long-term partnerships.",
  keywords: [
    "product development agency",
    "startup development team",
    "React development agency",
    "Next.js developers",
    "React Native team",
    "SyntaxLeap about",
    "founder-led development",
    "startup agency",
  ],
  openGraph: {
    title: "About | SyntaxLeap - Product Development for Startups",
    description:
      "Founder-led development agency building scalable products. Small team, big results.",
    url: "https://www.syntaxleap.info/about",
    images: [
      {
        url: "https://www.syntaxleap.info/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About SyntaxLeap Team",
      },
    ],
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
    </>
  )
}
