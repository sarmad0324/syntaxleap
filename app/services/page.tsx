// app/services/page.tsx
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services-hero";
import { ServiceDetails } from "@/components/service-details";
import { ContactSection } from "@/components/contact-section";

export const config = { amp: "hybrid" };

export const metadata: Metadata = {
  title: "AI Development Services – Web Apps, Mobile Solutions & Remote Teams | SyntaxLeap",
  description:
    "Comprehensive AI development services including intelligent web applications, smart mobile solutions, and dedicated remote teams. From ideation to launch with cutting-edge machine learning technology.",
  keywords: [
    "AI web development",
    "smart mobile apps",
    "remote AI teams",
    "machine learning services",
    "custom AI solutions",
    "React development services",
    "Next.js development",
    "AI consulting",
  ],
  openGraph: {
    title: "AI Development Services – SyntaxLeap",
    description:
      "Custom AI-driven web & mobile apps, intelligent solutions, and remote development teams with machine learning expertise.",
    url: "https://syntaxleap.info/services",
    images: [
      {
        url: "https://syntaxleap.info/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap AI Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SyntaxLeap",
    title: "AI Development Services – SyntaxLeap",
    description:
      "Custom AI-driven web & mobile apps, intelligent solutions, and remote development teams with machine learning expertise.",
    images: ["https://syntaxleap.info/og-services.jpg"],
  },
  alternates: {
    canonical: "https://syntaxleap.info/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <ContactSection />
    </>
  );
}
