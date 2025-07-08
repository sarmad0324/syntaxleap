"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setMessage("Thank you for subscribing!")
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-6 text-navy">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-charcoal mb-8 leading-relaxed">
            Get the latest AI trends, case studies, and insights delivered to your inbox.
          </p>
          
          {message ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-teal/10 text-teal p-4 rounded-lg mb-8"
            >
              {message}
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-6 py-3 whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
