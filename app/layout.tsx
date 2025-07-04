// app/layout.tsx
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syntaxleap.info"),
  title: {
    default: "SyntaxLeap – AI-Driven Digital Product Development Agency",
    template: "%s | SyntaxLeap",
  },
  description:
    "SyntaxLeap builds custom AI-driven web & mobile applications to help startups and SMEs accelerate their growth with machine learning.",
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
  openGraph: {
    type: "website",
    url: "https://syntaxleap.info",
    siteName: "SyntaxLeap",
    title: "SyntaxLeap – AI-Driven Digital Product Development Agency",
    description:
      "SyntaxLeap builds custom AI-driven web & mobile applications to help startups and SMEs accelerate their growth with machine learning.",
    images: [
      {
        url: "https://syntaxleap.info/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap – AI-Driven Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SyntaxLeap",
    title: "SyntaxLeap – AI-Driven Digital Product Development Agency",
    description:
      "SyntaxLeap builds custom AI-driven web & mobile applications for startups and SMEs.",
    images: ["https://syntaxleap.info/og-home.jpg"],
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
    yandex: "",
    yahoo: "",
  },
  alternates: {
    canonical: "https://syntaxleap.info",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        <StructuredData />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}