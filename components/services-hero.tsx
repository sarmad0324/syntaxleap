"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-bold font-plus-jakarta mb-6 text-navy">
            AI Development Services
          </h1>
          <p className="text-xl text-charcoal mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our comprehensive AI solutions. From intelligent web applications to remote AI teams, we deliver cutting-edge technology that drives results.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Let's Talk
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
