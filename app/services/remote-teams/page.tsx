import type { Metadata } from "next"
import { RemoteTeamsPage } from "@/components/remote-teams-page"

export const metadata: Metadata = {
  title: "Remote Teams | SyntaxLeap",
  description:
    "Scale your business with dedicated remote teams. Get expert developers, designers, and specialists who work as an extension of your in-house team.",
  openGraph: {
    title: "Remote Teams | SyntaxLeap",
    description:
      "Scale your business with dedicated remote teams. Access top talent for development, design, and more.",
    url: "https://www.syntaxleap.info/services/remote-teams",
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/services/remote-teams",
  },
}

export default function Page() {
  return <RemoteTeamsPage />
} 