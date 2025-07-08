import type { Metadata } from "next"
import { MobileAppsPage } from "@/components/mobile-apps-page"

export const metadata: Metadata = {
  title: "Intelligent Mobile Apps Development | SyntaxLeap",
  description:
    "Professional AI-powered mobile app development services. We build intelligent iOS and Android applications with machine learning capabilities, computer vision, and natural language processing.",
  openGraph: {
    title: "Intelligent Mobile Apps Development | SyntaxLeap",
    description:
      "Professional AI-powered mobile app development with machine learning integration and intelligent features.",
    url: "https://syntaxleap.info/services/mobile-apps",
  },
  alternates: {
    canonical: "https://syntaxleap.info/services/mobile-apps",
  },
}

export default function Page() {
  return <MobileAppsPage />
}
