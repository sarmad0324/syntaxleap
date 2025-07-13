"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    project: "",
    budget: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const services = [
    "Site from Scratch",
    "AI Web App", 
    "Mobile Application",
    "Custom Web App",
    "CRM Software",
    "AI Solution",
    "Remote Team"
  ]

  const budgets = [
    "$500-$1,000",
    "$1,000-$2,500", 
    "$2,500-$5,000",
    "$5,000+"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage("Thank you! We'll get back to you within 24 hours.")
        setFormData({ service: "", name: "", email: "", project: "", budget: "" })
      } else {
        setMessage(data.error || "Something went wrong. Please try again later.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.")
    }
    setIsSubmitting(false)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="pt-72 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold font-plus-jakarta mb-6 text-navy">
            Let's Talk Business
          </h1>
          <p className="text-xl text-charcoal leading-relaxed">
            Ready to transform your business with AI? Tell us about your project and we'll get back to you with a tailored solution.
          </p>
        </motion.div>

        {message ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-teal/10 text-teal p-8 rounded-xl text-center max-w-md mx-auto"
          >
            <h3 className="text-xl font-bold mb-4">Message Sent!</h3>
            <p>{message}</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Service Selection */}
            <div>
              <label className="block text-lg font-semibold text-navy mb-4">
                What service are you interested in?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleChange("service", service)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                      formData.service === service
                        ? "border-teal bg-teal text-white"
                        : "border-gray-300 text-charcoal hover:border-teal"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-navy mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-navy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="project" className="block text-lg font-semibold text-navy mb-2">
                Tell us about your project
              </label>
              <textarea
                id="project"
                value={formData.project}
                onChange={(e) => handleChange("project", e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg resize-none"
                placeholder="Describe your project, goals, and any specific requirements..."
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-lg font-semibold text-navy mb-4">
                Budget Range
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => handleChange("budget", budget)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${formData.budget === budget
                        ? "border-teal bg-teal text-white"
                        : "border-gray-300 text-charcoal hover:border-teal"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-xl px-12 py-4 disabled:opacity-50"
              >
                {isSubmitting ? "Sending Request..." : "Send Request"}
              </button>
            </div>
          </motion.form>
        )}

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal mb-2">
            Or email us directly at{" "}
            <a href="mailto:hello@syntaxleap.info" className="text-teal font-semibold">
              hello@syntaxleap.info
            </a>
          </p>
          <p className="text-gray-500">We'll get back to you within 24 hours.</p>
        </motion.div>
      </div>
    </section>
  )
}
