import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Book a Call or Send a Message | SyntaxLeap",
  description:
    "Ready to start your project? Book a 30-min intro call or send us a message. We respond within 24 hours. WhatsApp, email, and Calendly available.",
  keywords: [
    "contact SyntaxLeap",
    "startup development consultation",
    "book development call",
    "React development inquiry",
    "MVP development contact",
    "product development consultation",
    "hire React developers",
  ],
  openGraph: {
    title: "Contact | Book a Call with SyntaxLeap",
    description:
      "Book a call or send a message. We respond within 24 hours.",
    url: "https://www.syntaxleap.com/contact",
    images: [
      {
        url: "https://www.syntaxleap.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SyntaxLeap",
      },
    ],
  },
  alternates: {
    canonical: "https://www.syntaxleap.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      
    </>
  )
}
