"use client"

import { motion } from "framer-motion"
import { Lightbulb, Code, Rocket, BarChart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function OurProcess() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business needs, analyze your market, and identify AI opportunities that will drive real value.",
      duration: "1-2 weeks",
    },
    {
      icon: Code,
      title: "Design & Development",
      description:
        "Our team creates intelligent solutions using cutting-edge AI technologies, ensuring scalability and performance.",
      duration: "4-12 weeks",
    },
    {
      icon: Rocket,
      title: "Launch & Integration",
      description:
        "We deploy your AI-powered solution with seamless integration into your existing systems and workflows.",
      duration: "1-2 weeks",
    },
    {
      icon: BarChart,
      title: "Optimize & Scale",
      description:
        "Continuous monitoring, optimization, and scaling to ensure your AI solution evolves with your business.",
      duration: "Ongoing",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-plus-jakarta mb-6 text-gray-900">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we follow a proven methodology that ensures your AI project delivers exceptional
            results.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-900 via-teal-500 to-blue-900 hidden lg:block"></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-white border-4 border-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-blue-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-900 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <Card className="bg-white p-8 rounded-3xl card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold font-plus-jakarta text-gray-900">{step.title}</h3>
                      <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
