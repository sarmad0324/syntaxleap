"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import React from "react"

export function HeroSection() {
  const images = [
    "/meeting.jpg",
    "/whiteboard.jpg"
  ];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("featured-projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
      {/* Dynamic background image slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, idx) => (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === idx ? 0.25 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
          >
            <Image
              src={img}
              alt="Hero background"
              fill
              className="object-cover object-center w-full h-full transition-all duration-1000"
              priority={idx === 0}
            />
          </motion.div>
        ))}
      </div>
      {/* Animated floating images for extra depth */}
      <motion.div
        className="absolute left-0 top-1/3 w-40 h-40 z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Image src="/meeting.jpg" alt="Meeting" fill className="object-contain rounded-2xl shadow-2xl" />
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-10 w-40 h-40 z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <Image src="/whiteboard.jpg" alt="Whiteboard" fill className="object-contain rounded-2xl shadow-2xl" />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-teal/10 text-teal px-6 py-3 rounded-full mb-8 font-semibold"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-teal rounded-full mr-3"
            />
            AI-Powered Innovation
          </motion.div>
          
          {/* Main Headline with staggered animation */}
          <div className="mb-6">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-plus-jakarta text-navy leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block"
              >
                We Build{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-teal inline-block"
              >
                AI-Driven
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                Digital Products
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Subheadline */}
          <motion.p 
            className="text-xl lg:text-2xl text-charcoal mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            We help startups and SMEs accelerate their growth with machine learning. 
            Custom AI solutions that transform your business operations and drive results.
          </motion.p>
          
          {/* CTA Buttons with hover animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 shadow-lg">
                Let's Talk Business
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button 
                onClick={scrollToProjects}
                className="btn-secondary text-lg px-8 py-4"
              >
                Explore Our Work
              </button>
            </motion.div>
          </motion.div>
          
          {/* Floating stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { number: "50+", label: "AI Projects" },
              { number: "99%", label: "Success Rate" },
              { number: "24/7", label: "Support" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + (i * 0.1) }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-charcoal text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
