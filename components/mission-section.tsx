"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-lg border border-border shadow-lg rounded-3xl p-12 max-w-3xl w-full text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold font-inter mb-8 text-text"
          >
            What We <span className="text-primary">Stand For</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-text-light leading-relaxed font-normal"
          >
            We believe in building products the right way: scalable architecture, clean code, and long-term thinking. 
            As a small, senior-driven team, we work hands-on with founders and product teams to deliver production-ready 
            solutions. Quality over quantity. Partnerships over projects. We're here for the long run.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
