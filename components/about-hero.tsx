"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Creative Badge/Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-full mb-8 font-semibold shadow-md"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 bg-primary rounded-full mr-3"
          />
          Founder-led, hands-on execution
        </motion.div>
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-inter mb-6 text-text leading-tight"
        >
          We Build Products <br />
          <span className="text-primary">That Scale</span>
        </motion.h1>
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl lg:text-2xl text-text-light leading-relaxed max-w-3xl mx-auto mb-12"
        >
          SyntaxLeap partners with startups and growing businesses to build production-ready products. We focus on quality, scalability, and long-term partnerships — not short-term gigs.
        </motion.p>
        {/* Animated Company Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { number: "Senior", label: "Development Team" },
            { number: "2-4 Week", label: "MVP Delivery" },
            { number: "Long-term", label: "Partnerships" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-text mb-2">{stat.number}</div>
              <div className="text-text-light text-base lg:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
