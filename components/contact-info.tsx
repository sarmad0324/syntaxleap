"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Linkedin, Clock, CheckCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Scheduling Widget */}
      <Card className="bg-slate-900/80 border-slate-700 p-8 rounded-2xl">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar className="w-6 h-6 text-indigo-400" />
          <h3 className="text-2xl font-bold font-plus-jakarta text-white">Book a Free AI Strategy Call</h3>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Schedule a 30-minute consultation to discuss your project requirements, explore AI opportunities, and get a
          customized roadmap for your digital transformation.
        </p>

        {/* Placeholder for Calendly embed */}
        <div className="bg-slate-800 rounded-xl p-6 text-center border-2 border-dashed border-slate-600 mb-6">
          <Calendar className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4 text-sm">Calendly scheduling widget would be embedded here</p>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-semibold"
            onClick={() => window.open("https://calendly.com/syntaxleap", "_blank")}
          >
            Schedule Call
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">30-minute strategy session</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">AI opportunity assessment</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">Custom project roadmap</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">No commitment required</span>
          </div>
        </div>
      </Card>

      {/* Contact Information */}
      <Card className="bg-slate-900/80 border-slate-700 p-8 rounded-2xl">
        <h3 className="text-xl font-bold font-plus-jakarta text-white mb-6">Other Ways to Reach Us</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:hello@syntaxleap.info"
                className="text-white hover:text-indigo-400 transition-colors duration-200 font-medium"
              >
                hello@syntaxleap.info
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <a
                href="https://linkedin.com/company/syntax-leap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-400 transition-colors duration-200 font-medium"
              >
                /company/syntax-leap
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Response Time</p>
              <p className="text-white font-medium">Within 24 hours</p>
            </div>
          </div>
        </div>
      </Card>

      {/* FAQ */}
      <Card className="bg-slate-900/80 border-slate-700 p-8 rounded-2xl">
        <h3 className="text-xl font-bold font-plus-jakarta text-white mb-6">Frequently Asked Questions</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-2">How long does a typical project take?</h4>
            <p className="text-gray-300 text-sm">
              Most projects range from 2-6 months depending on complexity and scope.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Do you work with startups?</h4>
            <p className="text-gray-300 text-sm">
              Yes! We love working with startups and offer flexible engagement models.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">What's included in the free consultation?</h4>
            <p className="text-gray-300 text-sm">
              AI opportunity assessment, project roadmap, and technology recommendations.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
