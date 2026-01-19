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
            className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-8 text-text"
          >
            Our <span className="text-primary">Mission</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-text-light leading-relaxed font-normal"
          >
            We democratize artificial intelligence for businesses of all sizes. Our mission is to make 
            cutting-edge AI technology accessible, practical, and profitable for startups and SMEs. 
            By bridging the gap between complex AI research and real-world business applications, 
            we empower companies to harness the transformative power of machine learning to drive 
            growth, efficiency, and innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
