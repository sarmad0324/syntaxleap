"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Rocket } from "lucide-react"

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
      icon: TestTube,
      title: "Testing",
      description: "We rigorously test every component to ensure quality, performance, and reliability before launch."
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "We launch your AI solution and provide ongoing support to ensure optimal performance."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 text-text">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
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
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4 shadow-lg shadow-primary/30">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-text rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </motion.div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter mb-4 text-text">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-text-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Animated Illustration */}
              <motion.div 
                className="w-48 h-48 sm:w-64 sm:h-64 bg-white border border-border rounded-xl flex items-center justify-center shadow-md"
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
                  <step.icon className="w-20 h-20 sm:w-24 sm:h-24 text-primary/20" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
