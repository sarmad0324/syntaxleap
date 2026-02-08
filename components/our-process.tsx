"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Rocket } from "lucide-react"

export function OurProcess() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We kick off with a deep dive into your product vision, target users, and technical requirements."
    },
    {
      icon: Palette,
      title: "Design",
      description: "We create clean, intuitive interfaces focused on user experience and conversion."
    },
    {
      icon: Code,
      title: "Development",
      description: "Sprint-based development with React, Next.js, or React Native. Clean code, scalable architecture."
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Rigorous testing for quality, performance, and reliability before every release."
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We deploy to production and provide ongoing support, bug fixes, and feature development."
    }
  ]

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 text-text">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            A proven process that delivers results. From initial discovery to ongoing support.
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
