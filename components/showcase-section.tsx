"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Sparkles, Zap, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

const showcaseItems = [
  {
    title: "AI-Powered Solutions",
    description: "Transform your business with intelligent automation and machine learning",
    image: "/meeting.jpg",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
    stats: "50+ Projects"
  },
  {
    title: "Lightning Fast Delivery",
    description: "Get your products to market faster with our agile development process",
    image: "/whiteboard.jpg",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    stats: "99% Success Rate"
  },
  {
    title: "Data-Driven Results",
    description: "Make informed decisions with analytics and insights built into every solution",
    image: "/meeting.jpg",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    stats: "300+ Clients"
  }
]

const features = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "We analyze your business needs and create a roadmap for success"
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Agile methodologies ensure fast delivery without compromising quality"
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Ongoing support and optimization to keep your business ahead"
  }
]

export function ShowcaseSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 text-white">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">SyntaxLeap</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge AI technology with proven development practices to deliver exceptional results
          </p>
        </motion.div>

        {/* Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Image Background */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 mix-blend-overlay`}></div>
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
                    <span className="text-white text-sm font-bold">{item.stats}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold font-inter mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 p-6 sm:p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold font-inter mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust SyntaxLeap for their AI development needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

