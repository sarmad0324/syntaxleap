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
    default: "SyntaxLeap - Expert in AI-Powered Web & Mobile Development",
    template: "%s | SyntaxLeap",
  },
  description:
    "SyntaxLeap builds AI-driven digital products for startups and SMEs. We create intelligent web apps, mobile solutions, and provide remote AI teams to accelerate your business growth.",
  keywords: [
    "AI development",
    "machine learning",
    "artificial intelligence",
    "AI web apps",
    "intelligent mobile apps",
    "remote AI teams",
    "startup AI solutions",
    "SME digital transformation",
    "custom AI development",
  ],
  authors: [{ name: "SyntaxLeap", url: "https://syntaxleap.info" }],
  openGraph: {
    type: "website",
    url: "https://syntaxleap.info",
    siteName: "SyntaxLeap",
    title: "SyntaxLeap -Expert in AI-Powered Web & Mobile Development",
    description:
      "SyntaxLeap builds AI-driven digital products for startups and SMEs. Accelerate your business growth with intelligent solutions.",
    images: [
      {
        url: "https://syntaxleap.info/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap AI Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SyntaxLeap",
    title: "SyntaxLeap - Expert in AI-Powered Web & Mobile Development",
    description:
      "SyntaxLeap builds AI-driven digital products for startups and SMEs. Accelerate your business growth with AI.",
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
  },
  alternates: {
    canonical: "https://syntaxleap.info",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "msapplication-TileColor": "#0f766e",
    "theme-color": "#0f766e",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f766e" />
        <meta name="msapplication-TileColor" content="#0f766e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <StructuredData />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
