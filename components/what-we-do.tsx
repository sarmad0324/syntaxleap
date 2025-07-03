"use client"

import { motion } from "framer-motion"
import { Brain, Smartphone, Users, Code } from "lucide-react"
import { Card } from "@/components/ui/card"

export function WhatWeDo() {
  const services = [
    {
      icon: Brain,
      title: "AI-Enhanced Web Apps",
      description:
        "Intelligent web applications with machine learning capabilities, recommendation engines, and predictive analytics.",
      features: ["Smart Recommendations", "Real-time Analytics", "Automated Insights"],
    },
    {
      icon: Smartphone,
      title: "Smart Mobile Solutions",
      description:
        "Native mobile apps with AI features, voice recognition, and on-device machine learning capabilities.",
      features: ["Voice Recognition", "Image Processing", "Offline AI"],
    },
    {
      icon: Users,
      title: "Remote AI Teams",
      description: "Dedicated AI engineers and data scientists to augment your in-house development capabilities.",
      features: ["Vetted Specialists", "Flexible Engagement", "24/7 Support"],
    },
    {
      icon: Code,
      title: "Custom AI Solutions",
      description:
        "Tailored artificial intelligence solutions designed specifically for your business needs and challenges.",
      features: ["Custom Models", "API Integration", "Scalable Architecture"],
    },
  ]

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-plus-jakarta mb-6 text-gray-900">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating intelligent digital solutions that transform how businesses operate and engage
            with their customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stagger-item"
            >
              <Card className="bg-white p-8 rounded-3xl card-hover group h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900/10 to-teal-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-900/20 group-hover:to-teal-500/20 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold font-plus-jakarta mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
