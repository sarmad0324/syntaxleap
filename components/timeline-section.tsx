"use client"

import { motion } from "framer-motion"
import { Calendar, Rocket, Trophy, Target } from "lucide-react"

export function TimelineSection() {
  const timelineEvents = [
    {
      year: "2022",
      title: "Founding",
      description: "SyntaxLeap was founded with a vision to make AI accessible to every business.",
      icon: Calendar,
    },
    {
      year: "2023",
      title: "First Major Projects",
      description: "Delivered AI-powered solutions for 10+ clients across e-commerce and fintech.",
      icon: Rocket,
    },
    {
      year: "2024",
      title: "Recognition & Growth",
      description: "Expanded team to 15+ specialists and received industry recognition for innovation.",
      icon: Trophy,
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Scaling to serve 100+ businesses with cutting-edge AI solutions.",
      icon: Target,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a small startup to a recognized AI development partner.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className="ml-20 bg-slate-900/60 border border-slate-700 rounded-2xl p-6 card-hover">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                      <event.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-400 font-plus-jakarta">{event.year}</div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
