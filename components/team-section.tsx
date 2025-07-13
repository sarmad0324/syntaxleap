"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Sarmad Irfan",
      role: "CEO & AI Strategy Lead",
      image: "/sarmad.png"
    },
    {
      name: "Abdullah Tasawwar",
      role: "CTO & AI Solutions Architect",
      image: "/abdullah.jpeg"
    },
    {
      name: "Emma Clarke",
      role: "AI Research Engineer",
      image: "/EmmaClarke.jpeg"
    },
    {
      name: "David Morgan",
      role: "Sales & Business Development Manager",
      image: "/davidmorgan.jpeg"
    }
  ]

  return (
    <section className="py-28 bg-gradient-to-b from-teal-50 via-blue-50 to-white relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-navy rounded-full opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-20 text-navy text-center drop-shadow-sm"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div 
                className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-navy mb-2 drop-shadow-sm">{member.name}</h3>
              <p className="text-teal font-semibold text-lg">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
