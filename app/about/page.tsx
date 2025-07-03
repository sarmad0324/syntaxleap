import type { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { TimelineSection } from "@/components/timeline-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "About SyntaxLeap | AI Development Team & Company Mission",
  description:
    "Learn about SyntaxLeap's mission to democratize AI for every business. Meet our team of AI engineers, data scientists, and full-stack developers who build intelligent digital products.",
  keywords: [
    "AI development team",
    "machine learning experts",
    "software development company",
    "AI engineers",
    "data scientists",
    "startup technology partner",
  ],
  openGraph: {
    title: "About SyntaxLeap | AI Development Team & Mission",
    description: "Our mission to democratize AI for every business. Meet our team of AI engineers and data scientists.",
    url: "https://syntaxleap.info/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap Team - AI Development Experts",
      },
    ],
  },
  alternates: {
    canonical: "https://syntaxleap.info/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  )
}
