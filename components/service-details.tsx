"use client"

import { motion } from "framer-motion"
import { Zap, Rocket, Bot, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServiceDetails() {
  const services = [
    {
      id: "dedicated-development",
      icon: Zap,
      title: "Dedicated Product Development",
      tagline: "For startups & SMEs who need ongoing development",
      description: "Your extended development team. We work with you continuously to build, ship, and scale your product through sprint-based development.",
      problem: "Growing teams need reliable development capacity without the overhead of hiring full-time developers.",
      solution: "Get a dedicated team that works on your product consistently, delivering features every sprint while maintaining code quality and scalability.",
      features: [
        "React / Next.js / React Native development",
        "Backend development (Node.js, APIs, databases)",
        "CI/CD, infrastructure support, bug fixes",
        "Continuous feature delivery (sprint-based)",
        "Ongoing maintenance & optimization"
      ],
      pricing: "$2,000 – $4,000/month",
      timeline: "Ongoing partnership",
      bestFor: "Early-stage startups, growing SMEs, product-led companies"
    },
    {
      id: "mvp-build",
      icon: Rocket,
      title: "MVP Build / Product Rebuild",
      tagline: "Launch fast with a scalable foundation",
      description: "Turn your idea into a production-ready product in weeks, not months. Whether you're starting from scratch or rebuilding an existing product, we deliver clean, scalable code.",
      problem: "Founders need to validate ideas quickly with a product that's built to scale, not just a prototype.",
      solution: "We build your MVP or rebuild your existing product with clean architecture, modern stack, and production-quality code from day one.",
      features: [
        "MVP from scratch OR rebuild of existing product",
        "Clean architecture & scalable foundation",
        "React, Next.js, React Native stack",
        "Launch-ready, production-quality codebase",
        "Documentation & handoff"
      ],
      pricing: "$3,000 – $6,000 one-time",
      timeline: "2–4 weeks fixed scope",
      bestFor: "Early-stage founders, companies pivoting, startups needing rebuild"
    },
    {
      id: "ai-automation",
      icon: Bot,
      title: "AI Automation & Internal Tools",
      tagline: "Stop wasting time on manual workflows",
      description: "Automate repetitive tasks and build internal tools that save hours every week. From AI-powered workflows to custom admin dashboards.",
      problem: "Teams waste valuable time on manual processes, data entry, and repetitive administrative tasks.",
      solution: "We build AI-powered automations and internal tools that streamline your operations and boost team productivity.",
      features: [
        "AI-powered workflow automation",
        "Custom admin dashboards",
        "Internal tools & productivity apps",
        "Process optimization & automation",
        "Integration with existing systems"
      ],
      pricing: "$1,000 – $2,000",
      timeline: "Project-based or add-on",
      bestFor: "Growing teams, operations-heavy businesses, product teams"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-border"
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mb-1">
                      {service.title}
                    </h2>
                    <p className="text-primary font-semibold">{service.tagline}</p>
                  </div>
                </div>
                <p className="text-lg text-text-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Problem → Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-xl">
                <div>
                  <h3 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Problem</h3>
                  <p className="text-text-body">{service.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Solution</h3>
                  <p className="text-text-body">{service.solution}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text mb-4">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Timeline */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 bg-primary/5 p-6 rounded-xl">
                <div>
                  <h3 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Pricing</h3>
                  <p className="text-xl font-bold text-primary">{service.pricing}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Timeline</h3>
                  <p className="text-lg font-semibold text-text">{service.timeline}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Best For</h3>
                  <p className="text-sm text-text-body">{service.bestFor}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <Link 
                  href="/contact"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
