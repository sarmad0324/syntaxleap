"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle, Sparkles } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-blue-900/5 to-teal-500/5 border-0 rounded-3xl p-8 lg:p-12 text-center hover-lift">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900/10 to-teal-500/10 border border-blue-900/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-5 h-5 text-teal-500" />
              <span className="text-sm font-medium text-blue-900">Stay Updated</span>
            </motion.div>

            <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6 text-gray-900">
              Get AI <span className="gradient-text">Insights</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest AI trends, case studies, and exclusive insights from our team.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center space-x-3 text-green-600"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 py-3 rounded-full border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary magnetic-button px-8 py-3 rounded-full font-semibold text-white"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
