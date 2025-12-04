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
    <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6 text-white">
            Get Your <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Free Consultation</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your business with AI? Tell us about your project and we'll get back to you within 24 hours with a tailored solution.
          </p>
        </motion.div>

        {message ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/10 text-green-400 p-6 sm:p-8 rounded-xl text-center max-w-md mx-auto border border-green-500/20"
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
              <label className="block text-base sm:text-lg font-bold text-white mb-4">
                What service are you interested in?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleChange("service", service)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-semibold ${
                      formData.service === service
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-slate-700 text-gray-300 hover:border-blue-500 bg-slate-800/50"
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
                <label htmlFor="name" className="block text-base sm:text-lg font-bold text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-800/50 text-white placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base sm:text-lg font-bold text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-800/50 text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="project" className="block text-base sm:text-lg font-bold text-white mb-2">
                Tell us about your project *
              </label>
              <textarea
                id="project"
                value={formData.project}
                onChange={(e) => handleChange("project", e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-800/50 text-white placeholder-gray-500 resize-none"
                placeholder="Describe your project, goals, and any specific requirements..."
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-base sm:text-lg font-bold text-white mb-4">
                Budget Range (Optional)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => handleChange("budget", budget)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-semibold ${formData.budget === budget
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-slate-700 text-gray-300 hover:border-blue-500 bg-slate-800/50"
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
                className="btn-primary text-base sm:text-lg px-10 sm:px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Request..." : "Get Free Consultation"}
              </button>
            </div>
          </motion.form>
        )}

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">24hrs</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Privacy Guaranteed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
