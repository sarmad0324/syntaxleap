"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-text border-t border-border text-text-body py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/Logo.svg"
                alt="SyntaxLeap"
                width={150}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Building AI-driven digital products that help startups and SMEs accelerate their growth through machine learning.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/syntaxleap"
                className="text-white/60 hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/syntaxleap"
                className="text-white/60 hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/company/syntax-leap"
                className="text-white/60 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-web-development" className="text-white/60 hover:text-primary transition-colors duration-200">
                  AI Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Intelligent Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-white/60 hover:text-primary transition-colors duration-200">
                  UI/UX & AI Design
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-ai" className="text-white/60 hover:text-primary transition-colors duration-200">
                  WordPress AI Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/remote-teams" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Augmented Remote Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/60 mb-2">
                <span className="text-primary font-semibold">Email:</span>{' '}
                <a
                  href="mailto:hello@syntaxleap.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  hello@syntaxleap.com
                </a>
              </p>
              <p className="text-white/60">
                <span className="text-primary font-semibold">Phone:</span>{' '}
                <a
                  href="tel:+923368486356"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +92 336 8486356
                </a>
              </p>
            </div>
            <p className="text-white/60">
              © {new Date().getFullYear()} SyntaxLeap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
