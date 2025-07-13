import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | AI Development Consultation",
  description:
    "Get in touch with SyntaxLeap for your AI development needs. Free consultation for startups and SMEs looking to implement machine learning solutions.",
  keywords: [
    "AI consultation",
    "machine learning consultation",
    "AI development contact",
    "artificial intelligence services",
    "SyntaxLeap contact",
    "AI project consultation",
    "ML development inquiry",
  ],
  openGraph: {
    title: "Contact SyntaxLeap | AI Development Consultation",
    description:
      "Get in touch with SyntaxLeap for your AI development needs. Free consultation available.",
    url: "https://www.syntaxleap.info/contact",
    images: [
      {
        url: "https://www.syntaxleap.info/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SyntaxLeap AI Team",
      },
    ],
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/contact",
  },
}

export default function ContactPage() {
  return <ContactForm />
}
