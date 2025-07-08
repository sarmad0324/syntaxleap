"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceItems = [
    { name: "AI Web Development", href: "/services/ai-web-development" },
    { name: "Intelligent Mobile Apps", href: "/services/mobile-apps" },
    { name: "UI/UX & AI Design", href: "/services/ui-ux-design" },
    { name: "WordPress AI Integrations", href: "/services/wordpress-ai" },
    { name: "Augmented Remote Teams", href: "/services/remote-teams" },
  ]

  return (
  <motion.header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-100 shadow-teal/10" 
        : "bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-sm shadow-md shadow-teal/5"
    }`}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
  >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.3))" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <Image src="/logo.svg" alt="SyntaxLeap" width={250} height={100} priority className="h-32 w-auto drop-shadow-sm" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-teal transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-charcoal hover:text-teal transition-colors duration-200 font-medium">
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-charcoal hover:bg-light-gray hover:text-teal transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/contact" className="btn-primary">
              Let's Talk Business
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-charcoal hover:text-teal transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-4 pb-4 space-y-2 bg-white border-t border-gray-100">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-charcoal hover:text-teal transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block py-2 pl-4 text-charcoal hover:text-teal transition-colors duration-200 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
                    Let's Talk Business
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
