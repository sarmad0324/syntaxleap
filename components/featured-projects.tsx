"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "HomeBites",
    result:
      "A modern food delivery platform connecting food lovers with passionate local chefs. Features real-time order tracking, group ordering, bill splitting, and community reviews for authentic home-cooked meals.",
    impact: "25,000+ happy customers and 1,200+ active chefs with 4.9★ average rating.",
    image: "/Screenshot 2025-12-04 at 4.46.00 PM.png",
    link: "https://homebites1.netlify.app/",
    widget: { label: "Happy Customers", value: "25K+" },
  },
  {
    title: "AdOdyss",
    result:
      "A comprehensive marketplace growth management platform for Amazon & Walmart brands. Features PPC management, DSP advertising, listing optimization, brand protection, and profit recovery tools.",
    impact: "2,000+ brands served with 8-figure revenue influenced and +38% ROAS improvement.",
    image: "/Screenshot 2025-12-04 at 4.45.51 PM.png",
    link: "https://adodyss.com/",
    widget: { label: "Brands Served", value: "2K+" },
  },
  {
    title: "Truckwise",
    result:
      "A logistics and fleet management App designed to optimize truck routes, manage drivers, track shipments, and handle finances. Built for both vendors and customers.",
    impact: "Optimized logistics for 50+ vendors, reducing delivery times by 20%.",
    image: "/truck.png",
    link: "https://github.com/sarmad0324/Truckwise",
    widget: { label: "Vendors", value: 52 },
  },
  {
    title: "Triangle Wallets",
    result:
      "A blockchain-based digital wallet App used for financial transactions, asset management, and transfers. Focused on user security and scalability.",
    impact: "Secured 10,000+ transactions with blockchain technology.",
    image: "/triangle.png",
    link: "https://github.com/mohammadfahad112/triangle-app",
    widget: { label: "Transactions", value: "10,000+" },
  },
  {
    title: "Genius Arena",
    result:
      "A color-based interactive game built with React, where users guess and match colors based on hints to advance through levels and earn rewards. Currently focused on front-end development only.",
    impact: "Engaged 2,000+ users in interactive color-based challenges.",
    image: "/genius.png",
    link: "#",
    widget: { label: "Active Players", value: "2,000+" },
  },
  {
    title: "Ezrecova",
    result:
      "A mental health and therapy booking platform designed for clients to connect with therapists, book sessions, and access resources online.",
    impact: "Connected 500+ clients with certified therapists online.",
    image: "/ezrecova.png",
    link: "https://ezrecova.com/",
    widget: { label: "Clients Helped", value: "500+" },
  },
  {
    title: "ExactPrinto",
    result:
      "An on-demand printing service platform for flyers, boxes, business cards, and custom products with real-time order tracking and quote generator.",
    impact: "Processed 1,000+ print orders with real-time tracking.",
    image: "/exact.png",
    link: "https://www.exactprinto.com/",
    widget: { label: "Orders Processed", value: "1,000+" },
  },
  {
    title: "Movies Website",
    result:
      "A sleek movie listing web app with trending, searching, and filtering functionality. Powered by Appwrite and a public movie API.",
    impact: "Showcased 10,000+ movies with real-time search.",
    image: "/movies.png",
    link: "https://slategrey-wolverine-828347.hostingersite.com/",
    widget: { label: "Movies Listed", value: "10,000+" },
  },
  {
    title: "Little Lemon Restaurant",
    result:
      "Little Lemon Website features a smooth booking process, real-time availability updates, and an easy-to-navigate interface.",
    impact: "Enabled 300+ online reservations monthly for a local restaurant.",
    image: "/little lemon.png",
    link: "https://litle-lemon.netlify.app/",
    widget: { label: "Reservations/mo", value: "300+" },
  },
]

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      bounce: 0.18,
      duration: 0.7,
    },
  },
};

const impactVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.4 } },
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.3 } },
}

const widgetVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.4 } },
}

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-16 sm:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses transform with AI-driven solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 group relative"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index}
              transition={{ delay: index * 0.08, type: 'spring', bounce: 0.18, duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col h-full justify-center">
                  {/* Impact */}
                  <motion.span
                    className="block mb-2 text-sm font-bold text-white bg-blue-500 px-4 py-1 rounded-full w-max shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={impactVariants}
                  >
                    Impact: {project.impact}
                  </motion.span>
                  {/* Title */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-bold font-inter mb-4 text-white hover:text-blue-400 transition-colors block underline underline-offset-4 decoration-blue-400"
                  >
                    {project.title}
                  </a>
                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-300 font-semibold mb-2">
                    {project.result}
                  </p>
                  {/* Link Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl transition-all duration-300 w-max"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={buttonVariants}
                  >
                    Visit Project ↗
                  </motion.a>
                  {/* Widget: Dynamic Stat */}
                  {project.widget && (
                    <motion.div
                      className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-blue-400 text-center text-base font-bold flex flex-col items-center"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={widgetVariants}
                    >
                      <span className="text-2xl">{project.widget.value}</span>
                      <span className="text-sm font-medium">{project.widget.label}</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
