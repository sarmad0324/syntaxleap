import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://syntaxleap.info"),
  title: {
    default: "SyntaxLeap | Leading AI-Driven Digital Product Development Agency",
    template: "%s | SyntaxLeap",
  },
  description:
    "SyntaxLeap helps startups, enterprises and SMEs accelerate their technology lifecycle by building AI-driven digital products. Custom web & mobile apps powered by machine learning that deliver measurable results.",
  keywords: [
    "AI development agency",
    "machine learning development",
    "custom web applications",
    "mobile app development",
    "AI-powered solutions",
    "React development",
    "Next.js development",
    "digital transformation",
    "startup technology partner",
    "enterprise AI solutions",
  ],
  authors: [{ name: "SyntaxLeap", url: "https://syntaxleap.info" }],
  creator: "SyntaxLeap",
  publisher: "SyntaxLeap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syntaxleap.info",
    siteName: "SyntaxLeap",
    title: "SyntaxLeap | Leading AI-Driven Digital Product Development Agency",
    description:
      "We help startups and enterprises build AI-driven digital products that transform businesses. Custom web & mobile apps powered by machine learning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap - AI-Driven Digital Products",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyntaxLeap | Leading AI-Driven Digital Product Development Agency",
    description: "We help startups and enterprises build AI-driven digital products that transform businesses.",
    images: ["/og-image.jpg"],
    creator: "@syntaxleap",
    site: "@syntaxleap",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "u_7bVNsFUzr4vrugz7yNh4M5sVlS9YvW8c-4z0q4QiM",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://syntaxleap.info",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/plus-jakarta-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" href="/logo.svg" type="image/png" />
        <meta name="application-name" content="SyntaxLeap" />
        <meta name="apple-mobile-web-app-title" content="SyntaxLeap" />
        <meta name="msapplication-TileColor" content="#12a5ad" />
        <meta name="theme-color" content="#12a5ad" />
        <meta name="site_name" content="SyntaxLeap" />
        <meta name="organization" content="SyntaxLeap" />
        <meta name="copyright" content="SyntaxLeap" />
        <meta name="author" content="SyntaxLeap" />
        <meta name="google-site-verification" content="u_7bVNsFUzr4vrugz7yNh4M5sVlS9YvW8c-4z0q4QiM" />
      </head>
      <body className="bg-white text-gray-900 font-inter antialiased">
        <StructuredData />
        <Navigation />
        <main className="min-h-screen page-transition">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
