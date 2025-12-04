"use client"

import { motion } from "framer-motion"
import { Bot, Zap, TrendingUp, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WhyAIAutomation() {
  const benefits = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Reduce manual work by up to 70% with AI-powered automation that learns and adapts to your business processes.",
    },
    {
      icon: Zap,
      title: "Faster Time to Market",
      description: "Accelerate development cycles and launch products 40% faster with AI-assisted development tools and workflows.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "Make smarter business decisions with AI analytics that provide real-time insights and predictive capabilities.",
    },
    {
      icon: Target,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with cutting-edge AI features that enhance user experience and operational efficiency.",
    },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why AI & <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Automation</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with intelligent automation that scales with your growth 
            and adapts to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-700 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 shadow-lg shadow-blue-500/50">
              Explore Our AI Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

