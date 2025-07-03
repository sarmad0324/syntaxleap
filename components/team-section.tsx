"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Linkedin, Github } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Sarmad Irfan",
      role: "CEO & AI Enthusiast",
      bio: "Former AI researcher with 8+ years in machine learning and business strategy.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Abdullah Khan",
      role: "CTO & ML Engineer",
      bio: "Full-stack developer and ML specialist with expertise in scalable AI systems.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Sarah Chen",
      role: "Lead Data Scientist",
      bio: "PhD in Computer Science, specializing in NLP and computer vision applications.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Frontend Engineer",
      bio: "React specialist with a passion for creating intuitive AI-powered user interfaces.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse group of AI experts, engineers, and innovators working together to build the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/60 border-slate-700 rounded-2xl overflow-hidden card-hover group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-plus-jakarta text-white mb-1">{member.name}</h3>
                  <p className="text-indigo-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-lg transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
