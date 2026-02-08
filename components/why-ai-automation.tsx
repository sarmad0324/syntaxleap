"use client"

import { motion } from "framer-motion"
import { Code2, Rocket, Shield, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WhyAIAutomation() {
  const benefits = [
    {
      icon: Code2,
      title: "Production-Ready Code",
      description: "Clean architecture, scalable infrastructure, and best practices from day one. No shortcuts, no technical debt.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "2-4 week MVP launches. Sprint-based development for ongoing projects. We ship quality code quickly.",
    },
    {
      icon: Shield,
      title: "Long-Term Partnership",
      description: "We're not just a dev shop. We build lasting relationships with founders and product teams.",
    },
    {
      icon: Users,
      title: "Senior Team",
      description: "Small, experienced team. No juniors, no outsourcing. Just senior developers who care about your product.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-text mb-6">
            Why Choose <span className="text-primary">SyntaxLeap</span>?
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            We're not the biggest agency, but we're focused on what matters: quality code, reliable delivery, 
            and building products that last.
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
              className="bg-white border border-border p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg hover:border-primary transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-inter text-text mb-4">
                {benefit.title}
              </h3>
              <p className="text-text-light leading-relaxed">
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
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 shadow-lg shadow-primary/30"
            >
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

