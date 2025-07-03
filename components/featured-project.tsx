"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function FeaturedProject() {
  const metrics = [
    { icon: TrendingUp, value: "40%", label: "Sales Increase" },
    { icon: Users, value: "300%", label: "User Engagement" },
    { icon: Zap, value: "60%", label: "Faster Processing" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-plus-jakarta mb-6 text-gray-900">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we transformed a traditional e-commerce business with AI-driven personalization and intelligent
            automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-gray-50 to-white border-0 rounded-3xl overflow-hidden hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full min-h-[400px] bg-gradient-to-br from-blue-900/5 to-teal-500/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-900/20 to-teal-500/20 rounded-3xl flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-blue-900" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-teal-500/10" />
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 w-fit">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Success Story</span>
                </div>

                <h3 className="text-3xl font-bold font-plus-jakarta mb-4 text-gray-900">
                  AI-Powered E-commerce Platform
                </h3>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We built an intelligent e-commerce platform with personalized product recommendations, dynamic pricing
                  optimization, and predictive inventory management. The results speak for themselves.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-900/10 to-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <metric.icon className="w-6 h-6 text-blue-900" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-500">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                <Button className="btn-primary magnetic-button rounded-full font-semibold w-fit text-white">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
