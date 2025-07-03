"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, Instagram } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/syntax-leap/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/syntaxleap",
      color: "hover:text-gray-900",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/syntaxleap",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/syntaxleap",
      color: "hover:text-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-plus-jakarta mb-6 text-gray-900">
            Follow Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay connected with us on social media for behind-the-scenes content, tech insights, and company updates.
          </p>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${link.color} magnetic-button`}
              >
                <link.icon className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
