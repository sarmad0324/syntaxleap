"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-6xl font-bold font-plus-jakarta mb-6 text-navy">
            About SyntaxLeap
          </h1>
          <p className="text-xl lg:text-2xl text-charcoal leading-relaxed">
            We're on a mission to democratize artificial intelligence for businesses of all sizes. 
            Our team of AI specialists helps startups and SMEs harness the power of machine learning 
            to drive growth and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
