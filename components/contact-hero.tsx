"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900/10 to-teal-500/10 border border-blue-900/20 rounded-full px-6 py-3 mb-8"
          >
            <MessageSquare className="w-5 h-5 text-teal-500" />
            <span className="text-sm font-medium text-blue-900">Let's Talk</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta mb-6 leading-tight text-gray-900"
          >
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss how AI can accelerate your growth. Book a free consultation or send us a message.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
