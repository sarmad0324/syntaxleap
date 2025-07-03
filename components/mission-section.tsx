"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Globe, Rocket } from "lucide-react"

export function MissionSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay at the forefront of AI technology to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      icon: Globe,
      title: "Accessible AI",
      description:
        "Making advanced AI capabilities accessible to businesses of all sizes, not just tech giants with unlimited budgets.",
    },
    {
      icon: Rocket,
      title: "Results Driven",
      description:
        "Every project is measured by real business impact - increased revenue, improved efficiency, and enhanced user experience.",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To democratize AI for every business, big or small. We believe that intelligent technology should be
            accessible to all, not just the privileged few.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/60 border-slate-700 p-8 rounded-2xl text-center card-hover group">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600/30 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold font-plus-jakarta mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border-indigo-500/20 p-8 lg:p-12 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold font-plus-jakarta mb-6 text-white">
                Why We Started SyntaxLeap
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We witnessed too many businesses struggle with outdated technology while AI remained locked away in
                research labs and big tech companies. Our founders, with backgrounds in both AI research and practical
                software development, saw an opportunity to bridge this gap.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, we're proud to have helped dozens of companies transform their operations with intelligent
                software that actually works in the real world.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
