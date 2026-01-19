"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Calendar } from "lucide-react"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how AI can accelerate your growth. Book a free consultation or send us a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/80 border-slate-700 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl font-bold font-plus-jakarta text-white">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="bg-slate-800 border-slate-600 text-white rounded-xl"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      type="text"
                      className="bg-slate-800 border-slate-600 text-white rounded-xl"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-slate-800 border-slate-600 text-white rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Brief
                  </label>
                  <Textarea
                    id="project"
                    rows={4}
                    required
                    className="bg-slate-800 border-slate-600 text-white rounded-xl resize-none"
                    placeholder="Tell us about your project and how AI can help..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Scheduling Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/80 border-slate-700 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl font-bold font-plus-jakarta text-white">Book a Free AI Strategy Call</h3>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Schedule a 30-minute consultation to discuss your project requirements, explore AI opportunities, and
                get a customized roadmap for your digital transformation.
              </p>

              {/* Placeholder for Calendly embed */}
              <div className="bg-slate-800 rounded-xl p-8 text-center border-2 border-dashed border-slate-600">
                <Calendar className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">Calendly scheduling widget would be embedded here</p>
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-semibold"
                  onClick={() => window.open("https://calendly.com/sarmadirfan78/30min", "_blank")}
                >
                  Schedule Call
                </Button>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-gray-300">30-minute strategy session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-gray-300">AI opportunity assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-gray-300">Custom project roadmap</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
