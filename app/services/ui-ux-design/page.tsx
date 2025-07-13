import type { Metadata } from "next"
import { UIUXDesignPage } from "@/components/ui-ux-design-page"

export const metadata: Metadata = {
  title: "UI/UX & AI Design Services | SyntaxLeap",
  description:
    "Professional UI/UX design services with AI integration. We create intuitive interfaces and user experiences optimized for AI-powered applications and intelligent systems.",
  openGraph: {
    title: "UI/UX & AI Design Services | SyntaxLeap",
    description:
      "Professional UI/UX design services with AI integration and intelligent user experience optimization.",
    url: "https://www.syntaxleap.info/services/ui-ux-design",
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/services/ui-ux-design",
  },
}

export default function Page() {
  return <UIUXDesignPage />
}
