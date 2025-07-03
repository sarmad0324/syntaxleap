"use client"

import { motion } from "framer-motion"
import { Brain, Smartphone, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ServicesSnapshot() {
  const services = [
    {
      icon: Brain,
      title: "AI-Enhanced Web Apps",
      description: "React, Next.js, Node.js",
      details: "Custom web applications with intelligent features, recommendation engines, and data-driven insights.",
    },
    {
      icon: Smartphone,
      title: "Smart Mobile Apps",
      description: "React Native, Flutter",
      details: "Native-quality mobile apps with AI capabilities, conversational interfaces, and predictive analytics.",
    },
    {
      icon: Users,
      title: "Remote AI Teams",
      description: "Augment your in-house with our specialists",
      details: "Scale your development capacity with our vetted AI engineers and full-stack experts.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From ideation to launch, we deliver AI-powered solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/80 border-slate-700 p-8 rounded-2xl card-hover group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600/30 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-plus-jakarta mb-2 text-white">{service.title}</h3>
                  <p className="text-indigo-400 font-semibold mb-4">{service.description}</p>
                  <p className="text-gray-300 leading-relaxed">{service.details}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
