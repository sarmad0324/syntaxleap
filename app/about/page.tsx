// app/about/page.tsx
import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { MissionSection } from "@/components/mission-section";
import { TimelineSection } from "@/components/timeline-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export const config = { amp: "hybrid" };

export const metadata: Metadata = {
  title: "About",
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
    title: "About SyntaxLeap – AI Development Team & Mission",
    description:
      "Learn about SyntaxLeap's mission to democratize AI for every business and meet our team of experts.",
    url: "https://syntaxleap.info/about",
    images: [
      {
        url: "https://syntaxleap.info/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap Team - AI Development Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SyntaxLeap",
    title: "About SyntaxLeap – AI Development Team & Mission",
    description:
      "Learn about SyntaxLeap's mission to democratize AI for every business and meet our team of experts.",
    images: ["https://syntaxleap.info/og-about.jpg"],
  },
  alternates: {
    canonical: "https://syntaxleap.info/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}
