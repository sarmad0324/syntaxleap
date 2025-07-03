"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-slate-900/80 border-slate-700 p-8 rounded-2xl text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold font-plus-jakarta text-white mb-4">Message Sent Successfully!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-indigo-500 text-indigo-400 hover:text-white hover:bg-indigo-600 rounded-xl"
          >
            Send Another Message
          </Button>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
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
                Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                className="bg-slate-800 border-slate-600 text-white rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
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
                className="bg-slate-800 border-slate-600 text-white rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your company"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              required
              className="bg-slate-800 border-slate-600 text-white rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
              Project Budget
            </label>
            <select
              id="budget"
              className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select budget range</option>
              <option value="10k-25k">$10k - $25k</option>
              <option value="25k-50k">$25k - $50k</option>
              <option value="50k-100k">$50k - $100k</option>
              <option value="100k+">$100k+</option>
            </select>
          </div>

          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
              Project Brief *
            </label>
            <Textarea
              id="project"
              rows={4}
              required
              className="bg-slate-800 border-slate-600 text-white rounded-xl resize-none focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Tell us about your project, goals, and how AI can help transform your business..."
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
              Timeline
            </label>
            <select
              id="timeline"
              className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6months+">6+ months</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          We'll respond within 24 hours with a detailed proposal.
        </p>
      </Card>
    </motion.div>
  )
}
