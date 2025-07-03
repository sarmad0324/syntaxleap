"use client"

import { motion } from "framer-motion"
import { Award, Zap, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

export function WhySyntaxLeap() {
  const pillars = [
    {
      icon: Award,
      title: "Expertise",
      description: "Our team combines deep AI knowledge with proven development experience across industries.",
    },
    {
      icon: Zap,
      title: "Speed & Scale",
      description: "Rapid prototyping and agile development processes that get your product to market faster.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security practices and transparent communication throughout your project.",
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
            Why Choose <span className="gradient-text">SyntaxLeap</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just build software – we craft intelligent solutions that evolve with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/60 border-slate-700 p-8 rounded-2xl text-center card-hover group">
                <div className="w-20 h-20 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600/30 transition-colors duration-300">
                  <pillar.icon className="w-10 h-10 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold font-plus-jakarta mb-4 text-white">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
