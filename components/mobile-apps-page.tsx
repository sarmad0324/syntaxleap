"use client"

import { motion } from "framer-motion"
import { Smartphone, Check, ArrowRight, Eye, MessageCircle, Zap } from "lucide-react"
import Link from "next/link"

export function MobileAppsPage() {
  const features = [
    "Computer Vision Integration",
    "Natural Language Processing", 
    "Predictive Analytics",
    "Real-time AI Processing",
    "Voice Recognition",
    "Intelligent Notifications"
  ]

  const benefits = [
    { title: "40% Better UX", description: "AI-powered interfaces adapt to user behavior" },
    { title: "60% Higher Retention", description: "Personalized experiences keep users engaged" },
    { title: "Smart Automation", description: "AI handles routine tasks automatically" }
  ]

  const aiFeatures = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual AI capabilities"
    },
    {
      icon: MessageCircle,
      title: "NLP Integration",
      description: "Chatbots, sentiment analysis, and language understanding"
    },
    {
      icon: Zap,
      title: "Real-time AI",
      description: "Instant AI processing and intelligent responses"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="w-8 h-8 text-teal" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold font-plus-jakarta text-navy">
                  Intelligent Mobile Apps
                </h1>
              </div>
              <p className="text-xl text-charcoal mb-8 leading-relaxed">
                Build next-generation mobile applications powered by artificial intelligence. Our smart apps understand users, predict behavior, and deliver personalized experiences that drive engagement and growth.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Build Your AI App <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 bg-gradient-to-br from-navy/5 to-teal/5 rounded-xl flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Smartphone className="w-32 h-32 text-navy/20" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-plus-jakarta text-navy text-center mb-16"
          >
            AI-Powered Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover-lift text-center"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{feature.title}</h3>
                <p className="text-charcoal">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Technical Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover-lift"
              >
                <Check className="w-8 h-8 text-teal mb-4" />
                <h3 className="text-lg font-bold text-navy">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-plus-jakarta text-navy text-center mb-16"
          >
            Proven Results
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-teal mb-4">{benefit.title}</h3>
                <p className="text-charcoal text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-plus-jakarta text-white mb-6">
              Ready to Build Your AI-Powered Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a mobile experience that learns, adapts, and grows with your users.
            </p>
            <Link href="/contact" className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
