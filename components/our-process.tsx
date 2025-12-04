"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, Rocket } from "lucide-react"

export function OurProcess() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your business needs and identify AI opportunities that can drive real value."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Our team creates intuitive interfaces and user experiences optimized for AI-powered features."
    },
    {
      icon: Code,
      title: "Development",
      description: "We build robust, scalable solutions using cutting-edge AI technologies and best practices."
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "We launch your AI solution and provide ongoing support to ensure optimal performance."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 text-white">
            Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology to deliver AI solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 mb-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Step Content */}
              <div className="flex-1">
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-blue-500/50">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </motion.div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Animated Illustration */}
              <motion.div 
                className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-slate-700 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <step.icon className="w-20 h-20 sm:w-24 sm:h-24 text-blue-400/30" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
