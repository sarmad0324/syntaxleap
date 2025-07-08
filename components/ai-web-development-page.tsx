"use client"

import { motion } from "framer-motion"
import { Globe, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AIWebDevelopmentPage() {
  const features = [
    "Machine Learning Integration",
    "Personalized User Experiences", 
    "Automated Performance Optimization",
    "Real-time Analytics",
    "Intelligent Content Management",
    "Predictive User Behavior Analysis"
  ]

  const benefits = [
    { title: "30% Higher Engagement", description: "AI-powered personalization increases user engagement" },
    { title: "50% Faster Loading", description: "Intelligent optimization reduces load times" },
    { title: "24/7 Automation", description: "AI handles routine tasks automatically" }
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
                  <Globe className="w-8 h-8 text-teal" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold font-plus-jakarta text-navy">
                  AI Web Development
                </h1>
              </div>
              <p className="text-xl text-charcoal mb-8 leading-relaxed">
                Transform your web presence with intelligent applications that learn, adapt, and optimize automatically. Our AI-powered websites deliver personalized experiences that drive engagement and conversions.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your AI Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 bg-gradient-to-br from-navy/5 to-teal/5 rounded-xl flex items-center justify-center"
            >
              <Globe className="w-32 h-32 text-navy/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-plus-jakarta text-navy text-center mb-16"
          >
            What You Get
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold text-navy mb-2">{feature}</h3>
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
                <p className="text-charcoal">{benefit.description}</p>
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
              Ready to Build Your AI-Powered Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your web presence and drive better results for your business.
            </p>
            <Link href="/contact" className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
