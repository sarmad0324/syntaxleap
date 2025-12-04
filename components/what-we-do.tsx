"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Users } from "lucide-react"

export function WhatWeDo() {
  const services = [
    {
      icon: Globe,
      title: "AI Web Applications",
      description: "Intelligent web platforms powered by machine learning algorithms that adapt to user behavior and drive business growth."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Smart mobile apps with AI features that provide personalized experiences and predictive capabilities for your users."
    },
    {
      icon: Users,
      title: "Remote AI Teams",
      description: "Dedicated AI specialists who integrate seamlessly with your team to accelerate development and deliver cutting-edge solutions."
    }
  ]

  return (
    <section id="what-we-do" className="py-16 sm:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 text-white">
            Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We create intelligent solutions that transform how businesses operate and engage with their customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-inter mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
