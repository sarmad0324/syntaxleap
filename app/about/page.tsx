import type { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { TimelineSection } from "@/components/timeline-section"
import { TeamSection } from "@/components/team-section"

export const metadata: Metadata = {
  title: "About | AI Development Team",
  description:
    "Learn about SyntaxLeap's mission to democratize AI for businesses. Meet our team of AI specialists who help startups and SMEs transform with machine learning solutions.",
  keywords: [
    "AI development team",
    "machine learning experts",
    "artificial intelligence specialists",
    "SyntaxLeap about",
    "AI company mission",
    "ML development agency",
    "AI consulting team",
    "startup AI solutions",
  ],
  openGraph: {
    title: "About | AI Development Team",
    description:
      "Learn about SyntaxLeap's mission to democratize AI for businesses and meet our expert team.",
    url: "https://www.syntaxleap.info/about",
    images: [
      {
        url: "https://www.syntaxleap.info/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About SyntaxLeap AI Team",
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
