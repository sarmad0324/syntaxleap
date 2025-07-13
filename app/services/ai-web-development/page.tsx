import type { Metadata } from "next"
import { AIWebDevelopmentPage } from "@/components/ai-web-development-page"

export const metadata: Metadata = {
  title: "AI Web Development Services | SyntaxLeap",
  description:
    "Professional AI web development services. We build intelligent web applications with machine learning capabilities, personalized user experiences, and automated optimization.",
  openGraph: {
    title: "AI Web Development Services | SyntaxLeap",
    description:
      "Professional AI web development services with machine learning integration and intelligent automation.",
    url: "https://www.syntaxleap.info/services/ai-web-development",
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/services/ai-web-development",
  },
}

export default function Page() {
  return <AIWebDevelopmentPage />
}
