"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function FeaturedCaseStudy() {
  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6">
            Featured <span className="gradient-text">Case Study</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we transformed a traditional e-commerce business with AI-driven personalization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-900/80 border-slate-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce AI Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2 mb-6 w-fit">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-300">40% Sales Increase</span>
                </div>

                <h3 className="text-3xl font-bold font-plus-jakarta mb-4 text-white">AI-Powered E-commerce Platform</h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Built an intelligent e-commerce app for Client X with personalized product recommendations, dynamic
                  pricing optimization, and predictive inventory management. The result? A 40% boost in sales and 60%
                  improvement in customer engagement.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-gray-300">Machine Learning Recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-gray-300">Real-time Analytics Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-gray-300">Automated Customer Segmentation</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-2 border-indigo-500 text-indigo-400 hover:text-white hover:bg-indigo-600 rounded-2xl font-semibold w-fit bg-transparent"
                >
                  Read Full Case Study
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
