"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Globe } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarmad Irfan",
      role: "CEO & Founder",
      image: "/sarmad.png",
      website: "https://sarmad.com",
      bio: "Leading SyntaxLeap's vision and product strategy. Focused on building long-term partnerships with startups."
    },
    
    {
      name: "Abdullah",
      role: "Technical Lead",
      image: "/abdullah.jpeg",
      bio: "Leading technical architecture and development. Expert in React, Next.js, and scalable system design."
    },
    {
      name: "Natiq Ali",
      role: "Senior Developer",
      image: "/Natiq.png",
      bio: "Senior developer building scalable solutions with modern technologies. Expertise in full-stack development."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold font-inter mb-4 text-text text-center"
        >
          Meet the <span className="text-primary">Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-light text-center max-w-2xl mx-auto mb-16"
        >
          A small, senior-driven team focused on building quality products for startups.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary transition-all duration-300 group"
            >
              <motion.div 
                className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary/20 group-hover:border-primary group-hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-text mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-base mb-4">{member.role}</p>
              <p className="text-text-light text-sm leading-relaxed mb-4">{member.bio}</p>
              {member.website && (
                <a 
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
