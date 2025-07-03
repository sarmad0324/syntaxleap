import type { Metadata } from "next"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact SyntaxLeap | Get Your Free AI Consultation & Project Quote",
  description:
    "Ready to transform your business with AI? Contact SyntaxLeap for a free consultation. Book a strategy call, get a custom project quote, or send us a message about your AI development needs.",
  keywords: [
    "AI consultation",
    "free AI strategy call",
    "custom project quote",
    "AI development contact",
    "machine learning consultation",
    "digital transformation consultation",
  ],
  openGraph: {
    title: "Contact SyntaxLeap | Free AI Consultation & Project Quote",
    description:
      "Get in touch for your free AI strategy consultation and custom project proposal. Transform your business with AI.",
    url: "https://syntaxleap.info/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SyntaxLeap for AI Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://syntaxleap.info/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}
