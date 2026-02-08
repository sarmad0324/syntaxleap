"use client"

import { motion } from "framer-motion"
import { Zap, Rocket, Bot } from "lucide-react"
import Link from "next/link"

export function WhatWeDo() {
  const services = [
    {
      icon: Zap,
      title: "Dedicated Product Development",
      description: "Your extended development team. Ongoing sprint-based development for startups who need consistent, reliable capacity.",
      pricing: "From $2k/month",
      link: "/services#dedicated-development"
    },
    {
      icon: Rocket,
      title: "MVP Build / Product Rebuild",
      description: "Launch in 2-4 weeks with a scalable foundation. Production-ready code from day one, built to grow with you.",
      pricing: "$3k-$6k fixed scope",
      link: "/services#mvp-build"
    },
    {
      icon: Bot,
      title: "AI Automation & Internal Tools",
      description: "Stop wasting time on manual workflows. We build AI-powered tools and automations that boost team productivity.",
      pricing: "From $1k",
      link: "/services#ai-automation"
    }
  ]

  return (
    <section id="what-we-do" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 text-text">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Three focused services designed for startups and growing businesses who need production-ready development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-border p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-inter mb-3 text-text">
                {service.title}
              </h3>
              <p className="text-text-light leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-bold text-primary">{service.pricing}</span>
                <Link 
                  href={service.link}
                  className="text-sm font-semibold text-text hover:text-primary transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
