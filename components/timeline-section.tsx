"use client"

import { motion } from "framer-motion"

export function TimelineSection() {
  const milestones = [
    { year: "2022", title: "Founded", description: "SyntaxLeap was born with a vision to democratize AI" },
    { year: "2023", title: "First AI Projects", description: "Delivered 20+ successful AI implementations" },
    { year: "2024", title: "Rapid Growth", description: "Expanded team and served 50+ clients globally" },
    { year: "2025", title: "Innovation Hub", description: "Leading AI transformation for SMEs worldwide" }
  ]

  return (
    <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-teal-50 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-navy rounded-full opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-20 text-navy text-center drop-shadow-sm"
        >
          Our Journey
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 via-blue-200 to-navy/10 rounded-full opacity-40 z-0" style={{transform: 'translateX(-50%)'}} />
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center gap-8 mb-16 z-10 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="bg-white/80 shadow-lg rounded-2xl p-8 border border-teal/10">
                  <h3 className="text-3xl font-bold text-teal mb-2">{milestone.year}</h3>
                  <h4 className="text-xl font-bold text-navy mb-2">{milestone.title}</h4>
                  <p className="text-charcoal text-lg">{milestone.description}</p>
                </div>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white z-20">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
