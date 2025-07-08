"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Sarmad Irfan",
      role: "CEO & AI Strategist",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Abdullah Khan", 
      role: "CTO & ML Engineer",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Sarah Ahmed",
      role: "Lead Data Scientist",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Michael Chen",
      role: "AI Research Director",
      image: "/placeholder-user.jpg"
    }
  ]

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-16 text-navy text-center"
        >
          Meet Our Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center hover-lift"
            >
              <motion.div 
                className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
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
              <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
              <p className="text-teal font-semibold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
