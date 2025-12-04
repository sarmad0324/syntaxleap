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
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
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
    className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800"
    style={{overflow: 'visible'}}
  >
    <nav className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
      <div className="flex items-center justify-between h-20 transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative flex items-center"
            >
              <Image src="/logo.svg" alt="SyntaxLeap - AI-Powered Web & Mobile Development" width={180} height={60} priority className=" brightness-0 invert" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => {
              if (item.name === "Services") {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200 tracking-wide px-3 py-2">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <>
                          {/* Backdrop to prevent content interaction */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99]"
                            onClick={() => setIsServicesOpen(false)}
                          />
                          {/* Dropdown Menu */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="fixed left-0 top-20 sm:top-24 w-full z-[100]"
                          >
                            <div className="relative w-full bg-slate-900 shadow-2xl border-t border-slate-700 py-12 px-4 sm:px-8 flex justify-center">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 w-full max-w-7xl">
                                {serviceItems.map((service, idx) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="group bg-slate-800/80 rounded-xl shadow-lg border border-slate-700 p-6 sm:p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300"
                                  >
                                    <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                                      <service.icon className="w-10 h-10 text-blue-400" />
                                    </div>
                                    <div className="font-semibold text-base sm:text-lg text-white mb-2">{service.name}</div>
                                    <div className="text-gray-400 text-sm">{service.description}</div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200 tracking-wide px-3 py-2"
                >
                  {item.name}
                </Link>
              )
            })}
            {/* CTA Button */}
            <Link href="/contact" className="ml-4 sm:ml-8">
              <Button size="lg" variant="default" className="px-6 sm:px-8 py-2.5 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white border-none rounded-lg shadow-lg shadow-blue-500/50">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
              <div className="px-4 pt-4 pb-4 space-y-2 bg-slate-800 border-t border-slate-700">
                {navItems.filter(item => item.name !== "Services").map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-gray-300 font-medium hover:text-white transition-colors duration-200 border-b border-slate-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 pb-2">
                  <div className="text-white font-semibold text-sm mb-2 px-2">Services</div>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-2 pl-6 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4">
                  <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white w-full text-center block py-3 rounded-lg font-semibold transition-colors" onClick={() => setIsOpen(false)}>
                    Get Free Consultation
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
