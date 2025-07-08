"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FeaturedProjects() {
  const projects = [
    {
      title: "E-commerce Recommendation Engine",
      result: "Increased conversion by 30% with AI-powered product recommendations",
      image: "/placeholder.jpg"
    },
    {
      title: "Healthcare Data Analytics Platform",
      result: "Reduced diagnosis time by 40% using machine learning algorithms",
      image: "/placeholder.jpg"
    },
    {
      title: "Financial Risk Assessment Tool",
      result: "Improved risk prediction accuracy by 25% with neural networks",
      image: "/placeholder.jpg"
    },
    {
      title: "Smart Content Management System",
      result: "Automated content categorization saved 15 hours per week",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <section id="featured-projects" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-6 text-navy">
            Featured Projects
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses transform with AI-driven solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-plus-jakarta mb-4 text-navy">
                    {project.title}
                  </h3>
                  <p className="text-lg text-teal font-semibold">
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
