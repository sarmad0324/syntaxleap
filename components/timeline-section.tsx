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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-16 text-navy text-center"
        >
          Our Journey
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-teal mb-2">{milestone.year}</h3>
                <h4 className="text-xl font-bold text-navy mb-2">{milestone.title}</h4>
                <p className="text-charcoal text-lg">{milestone.description}</p>
              </div>
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
