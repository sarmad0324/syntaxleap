import type { Metadata } from "next"
import { WordPressAIPage } from "@/components/wordpress-ai-page"

export const metadata: Metadata = {
  title: "WordPress AI Integrations | SyntaxLeap",
  description:
    "Transform your WordPress site with AI capabilities. We integrate machine learning features like content recommendations, chatbots, and automated content generation to enhance your website's functionality.",
  openGraph: {
    title: "WordPress AI Integrations | SyntaxLeap",
    description:
      "Transform your WordPress site with AI capabilities and intelligent automation features.",
    url: "https://www.syntaxleap.info/services/wordpress-ai",
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/services/wordpress-ai",
  },
}

export default function Page() {
  return <WordPressAIPage />
}
