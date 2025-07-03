"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ClientLogos() {
  const logos = [
    { name: "TechCorp", src: "/placeholder.svg?height=60&width=120" },
    { name: "InnovateLab", src: "/placeholder.svg?height=60&width=120" },
    { name: "DataFlow", src: "/placeholder.svg?height=60&width=120" },
    { name: "CloudSync", src: "/placeholder.svg?height=60&width=120" },
    { name: "AIVentures", src: "/placeholder.svg?height=60&width=120" },
    { name: "NextGen", src: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold font-plus-jakarta mb-4 text-gray-400">
            Trusted by Forward-Thinking Companies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-marquee space-x-12">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
