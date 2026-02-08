"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, MessageCircle, Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const services = [
    "Dedicated Product Development",
    "MVP Build / Product Rebuild", 
    "AI Automation & Internal Tools",
    "General Query / Other"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setIsSuccess(false)
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      
      if (res.ok) {
        setIsSuccess(true)
        setSubmitMessage("Thank you! We've received your message and will get back to you within 24 hours.")
        setFormData({ name: "", email: "", company: "", service: "", message: "" })
      } else {
        setIsSuccess(false)
        setSubmitMessage(data.error || "Something went wrong. Please try again or contact us directly.")
      }
    } catch (error) {
      setIsSuccess(false)
      setSubmitMessage("Something went wrong. Please try again or contact us directly.")
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6 text-text">
            Let's Build Something <span className="text-primary">Great</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-light leading-relaxed max-w-2xl mx-auto">
            Ready to start your project? Book a call or send us a message, and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Calendly CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 text-center"
        >
          <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text mb-3">Book a 30-Min Intro Call</h2>
          <p className="text-text-light mb-6">
            The fastest way to get started. Let's discuss your project and see how we can help.
          </p>
          <a
            href="https://calendly.com/sarmadirfan78/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule a Call
          </a>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-text-light font-medium">OR</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Success/Error Message */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mb-8 p-6 rounded-xl text-center ${
              isSuccess 
                ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                : "bg-red-500/10 text-red-600 border border-red-500/20"
            }`}
          >
            <p className="font-semibold">{submitMessage}</p>
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-border"
        >
          <h2 className="text-2xl font-bold text-text mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">
                What service are you interested in? *
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-text-body"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-text-body placeholder-text-light"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-text-body placeholder-text-light"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">
                Company / Project Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-text-body placeholder-text-light"
                placeholder="Your Company or Project"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-text mb-2 uppercase tracking-wider">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-text-body placeholder-text-light resize-none"
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {isSubmitting ? "Sending..." : "Request Intro Call"}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-text mb-6 text-center">Or Reach Us Directly</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href="mailto:hello@syntaxleap.com"
              className="bg-white rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center group"
            >
              <Mail className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-text mb-2">Email Us</h3>
              <p className="text-sm text-primary font-semibold">hello@syntaxleap.com</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923368486356"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center group"
            >
              <MessageCircle className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-text mb-2">WhatsApp</h3>
              <p className="text-sm text-primary font-semibold">+92 336 8486356</p>
            </a>

            
          </div>
        </motion.div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 sm:p-8 border border-primary/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">24 Hours</div>
              <div className="text-sm text-text-light">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Free</div>
              <div className="text-sm text-text-light">Consultation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-text-light">Privacy Guaranteed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
