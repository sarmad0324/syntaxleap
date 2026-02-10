"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MessageCircle, Calendar } from "lucide-react"
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
                src="/SyntaxLeap.png"
                alt="SyntaxLeap"
                width={150}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Building scalable, production-ready web and mobile products for startups and growing businesses.
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
                <Link href="/services#dedicated-development" className="text-white/60 hover:text-primary transition-colors duration-200">
                  Dedicated Product Development
                </Link>
              </li>
              <li>
                <Link href="/services#mvp-build" className="text-white/60 hover:text-primary transition-colors duration-200">
                  MVP Build / Product Rebuild
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation" className="text-white/60 hover:text-primary transition-colors duration-200">
                  AI Automation & Internal Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@syntaxleap.com" className="text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@syntaxleap.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923368486356" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://calendly.com/sarmadirfan78/30min" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} SyntaxLeap. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                From MVP to Scale — Web, Mobile & AI Development
              </p>
            </div>
            <div className="flex gap-4 text-white/60 text-sm">
              <Link href="/contact" className="hover:text-primary transition-colors duration-200">
                Contact
              </Link>
              <span>•</span>
              <Link href="/services" className="hover:text-primary transition-colors duration-200">
                Services
              </Link>
              <span>•</span>
              <Link href="/about" className="hover:text-primary transition-colors duration-200">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
