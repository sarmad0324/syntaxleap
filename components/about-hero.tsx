"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative pt-72 pb-28 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-teal-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-navy/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal/5 rounded-full blur-2xl"
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
          className="inline-flex items-center bg-teal/10 text-teal px-6 py-3 rounded-full mb-8 font-semibold shadow-md"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 bg-teal rounded-full mr-3"
          />
          Creativity meets technology
        </motion.div>
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-plus-jakarta mb-6 text-navy leading-tight"
        >
          About SyntaxLeap
        </motion.h1>
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl lg:text-2xl text-charcoal leading-relaxed max-w-3xl mx-auto mb-12"
        >
          We're on a mission to democratize artificial intelligence for businesses of all sizes. Our team of AI specialists helps startups and SMEs harness the power of machine learning to drive growth and innovation.
        </motion.p>
        {/* Animated Company Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { number: "40+", label: "Team Members" },
            { number: "300+", label: "Projects Completed" },
            { number: "12", label: "Years of Experience" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-navy mb-2">{stat.number}</div>
              <div className="text-charcoal text-base lg:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
