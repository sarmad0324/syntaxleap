"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Palette, Users, Bot } from "lucide-react"

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
    {
      name: "AI Web Development",
      href: "/services/ai-web-development",
      icon: Globe,
      image: "/exact.png",
      description: "Custom AI-powered websites and platforms."
    },
    {
      name: "Intelligent Mobile Apps",
      href: "/services/mobile-apps",
      icon: Smartphone,
      image: "/genius.png",
      description: "Smart mobile apps that learn and adapt."
    },
    {
      name: "UI/UX & AI Design",
      href: "/services/ui-ux-design",
      icon: Palette,
      image: "/little lemon.png",
      description: "Beautiful, intuitive interfaces for AI products."
    },
    {
      name: "WordPress AI Integrations",
      href: "/services/wordpress-ai",
      icon: Bot,
      image: "/ezrecova.png",
      description: "AI features for your WordPress site."
    },
    {
      name: "Augmented Remote Teams",
      href: "/services/remote-teams",
      icon: Users,
      image: "/truck.png",
      description: "Scale with dedicated AI specialists."
    }
  ]

  return (
  <motion.header
    className="fixed top-0 left-0 right-0 z-50 border border-teal/20 shadow-lg bg-white/80 backdrop-blur-xl px-8 py-2 m-4 rounded-2xl"
    style={{overflow: 'visible'}}
  >
    <nav className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex items-center justify-between h-24 transition-all duration-300">
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
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy font-semibold text-lg hover:text-teal transition-colors duration-200 tracking-wide px-2"
              >
                {item.name}
              </Link>
            ))}
            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-navy font-semibold text-lg hover:text-teal transition-colors duration-200 tracking-wide px-2">
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed left-0 top-24 w-full z-40"
                  >
                    <div className="relative w-full bg-gradient-to-br from-white/95 via-blue-50/95 to-teal-50/95 backdrop-blur-2xl shadow-2xl border-t border-teal/10 py-12 px-8 flex justify-center">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-7xl">
                        {serviceItems.map((service, idx) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="group bg-white/90 rounded-2xl shadow-lg border border-teal/10 p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                          >
                            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300">
                              <service.icon className="w-10 h-10 text-teal" />
                            </div>
                            <div className="font-bold text-lg text-navy mb-2">{service.name}</div>
                            <div className="text-charcoal text-sm opacity-80">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Single Teal Button */}
            <Link href="/contact" className="ml-8">
              <Button size="lg" variant="default" className="px-8 py-3 text-base font-semibold shadow-md bg-teal text-white hover:bg-teal/90 border-none">
                Get a Free Consultation
              </Button>
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
