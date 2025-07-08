"use client"

import { motion } from "framer-motion"
import { Palette, Check, ArrowRight, Users, Zap, Target } from "lucide-react"
import Link from "next/link"

export function UIUXDesignPage() {
  const features = [
    "AI-First Design Principles",
    "User Experience Optimization", 
    "Accessibility Focus",
    "Intelligent Interface Design",
    "Data-Driven Design Decisions",
    "Adaptive User Interfaces"
  ]

  const benefits = [
    { title: "50% Better Usability", description: "AI-optimized interfaces improve user experience" },
    { title: "35% More Engagement", description: "Intelligent design keeps users active longer" },
    { title: "Seamless AI Integration", description: "Complex AI features made simple and intuitive" }
  ]

  const designServices = [
    {
      icon: Users,
      title: "User Research & AI",
      description: "AI-powered user research and behavior analysis for data-driven design decisions"
    },
    {
      icon: Palette,
      title: "Interface Design",
      description: "Beautiful, intuitive interfaces that make AI features accessible to everyone"
    },
    {
      icon: Target,
      title: "UX Optimization",
      description: "Continuous optimization using AI insights and user feedback loops"
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
                  <Palette className="w-8 h-8 text-teal" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold font-plus-jakarta text-navy">
                  UI/UX & AI Design
                </h1>
              </div>
              <p className="text-xl text-charcoal mb-8 leading-relaxed">
                Design intelligent user experiences that make AI accessible and engaging. We create interfaces that bridge the gap between complex AI capabilities and intuitive human interaction.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Design Project <ArrowRight className="ml-2 w-5 h-5" />
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
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Palette className="w-32 h-32 text-navy/20" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-plus-jakarta text-navy text-center mb-16"
          >
            Design Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {designServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover-lift text-center"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-charcoal">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Features Grid */}
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
            Design Impact
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

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-plus-jakarta text-navy text-center mb-16"
          >
            Our Design Process
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {[
              { step: "1", title: "Research & Analysis", description: "AI-powered user research and competitive analysis" },
              { step: "2", title: "Wireframing & Prototyping", description: "Interactive prototypes with AI integration planning" },
              { step: "3", title: "Visual Design", description: "Beautiful interfaces optimized for AI features" },
              { step: "4", title: "Testing & Optimization", description: "Continuous improvement using data and user feedback" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-4">{phase.title}</h3>
                  <p className="text-lg text-charcoal">{phase.description}</p>
                </div>
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {phase.step}
                </div>
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
              Ready to Design Your AI Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create user experiences that make AI feel natural, intuitive, and delightful.
            </p>
            <Link href="/contact" className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Design Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
