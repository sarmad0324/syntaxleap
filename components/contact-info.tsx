"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Linkedin, Clock, CheckCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Scheduling Widget */}
          <Card className="bg-slate-800/50 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold font-inter text-white">Book a Free AI Strategy Call</h3>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Schedule a 30-minute consultation to discuss your project requirements, explore AI opportunities, and get a
              customized roadmap for your digital transformation.
            </p>

            {/* Placeholder for Calendly embed */}
            <div className="bg-slate-900/50 rounded-xl p-6 text-center border-2 border-dashed border-slate-700 mb-6">
              <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-4 text-sm">Calendly scheduling widget would be embedded here</p>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold"
                onClick={() => window.open("https://calendly.com/syntaxleap", "_blank")}
              >
                Schedule Call
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">30-minute strategy session</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">AI opportunity assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Custom project roadmap</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">No commitment required</span>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="bg-slate-800/50 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold font-inter text-white mb-6">Other Ways to Reach Us</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:hello@syntaxleap.info"
                    className="text-white hover:text-blue-400 transition-colors duration-200 font-bold"
                  >
                    hello@syntaxleap.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href="https://linkedin.com/company/syntax-leap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200 font-bold"
                  >
                    /company/syntax-leap
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                  <p className="text-white font-bold">Within 24 hours</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-slate-800/50 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold font-inter text-white mb-6">Frequently Asked Questions</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold mb-2">How long does a typical project take?</h4>
                <p className="text-gray-400 text-sm">
                  Most projects range from 2-6 months depending on complexity and scope.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">Do you work with startups?</h4>
                <p className="text-gray-400 text-sm">
                  Yes! We love working with startups and offer flexible engagement models.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">What's included in the free consultation?</h4>
                <p className="text-gray-400 text-sm">
                  AI opportunity assessment, project roadmap, and technology recommendations.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
