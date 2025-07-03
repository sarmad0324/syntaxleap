"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Brain, Smartphone, Users, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServiceDetails() {
  const [expandedService, setExpandedService] = useState<number | null>(0)

  const services = [
    {
      icon: Brain,
      title: "AI-Driven Web Development",
      description:
        "Custom web applications powered by ML models for personalization, recommendation engines, and data insights.",
      tech: ["React/Next.js", "Node.js", "Python ML microservices", "TensorFlow/PyTorch", "Cloud AI Services"],
      features: [
        "Intelligent recommendation systems",
        "Real-time data analytics dashboards",
        "Automated content personalization",
        "Predictive user behavior analysis",
        "Smart search and filtering",
        "AI-powered chatbots and assistants",
      ],
      useCases: [
        "E-commerce platforms with smart recommendations",
        "Content management systems with auto-tagging",
        "Business intelligence dashboards",
        "Customer support portals with AI assistance",
      ],
    },
    {
      icon: Smartphone,
      title: "Intelligent Mobile Solutions",
      description: "Native-quality apps with on-device inference, conversational UIs, and predictive analytics.",
      tech: ["React Native", "Flutter", "TensorFlow Lite", "Core ML", "Expo"],
      features: [
        "On-device AI processing",
        "Voice and image recognition",
        "Offline-capable smart features",
        "Push notification optimization",
        "Biometric authentication",
        "AR/VR integration capabilities",
      ],
      useCases: [
        "Health and fitness apps with AI coaching",
        "Photo editing apps with intelligent filters",
        "Language learning apps with speech recognition",
        "Financial apps with fraud detection",
      ],
    },
    {
      icon: Users,
      title: "Augmented Remote Teams",
      description: "Scale your dev capacity with our vetted AI engineers, data scientists, and full-stack experts.",
      tech: ["Dedicated Teams", "Flexible Engagement", "Rapid Onboarding", "Cross-timezone Support"],
      features: [
        "Vetted AI specialists and engineers",
        "Seamless integration with your team",
        "Agile development methodologies",
        "Regular progress reporting",
        "Knowledge transfer sessions",
        "24/7 development coverage",
      ],
      useCases: [
        "Startups needing rapid scaling",
        "Enterprises requiring AI expertise",
        "Companies with tight deadlines",
        "Organizations exploring AI transformation",
      ],
    },
  ]

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/80 border-slate-700 rounded-2xl overflow-hidden">
                <div className="p-8 cursor-pointer" onClick={() => toggleExpanded(index)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-plus-jakarta text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 max-w-2xl">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedService === index ? (
                        <ChevronUp className="w-6 h-6 text-indigo-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-indigo-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-slate-700">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Use Cases */}
                      <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold text-white mb-4">Use Cases</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.useCases.map((useCase) => (
                            <div key={useCase} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                              <p className="text-gray-300 text-sm">{useCase}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-plus-jakarta text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored proposal.
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              onClick={() => {
                const modal = document.createElement("div")
                modal.innerHTML = `
                  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div class="bg-slate-900 rounded-2xl p-8 max-w-md w-full">
                      <h3 class="text-xl font-bold text-white mb-4">Request Custom Proposal</h3>
                      <p class="text-gray-300 mb-6">We'll get back to you within 24 hours with a detailed proposal.</p>
                      <button onclick="this.closest('div').remove()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl">
                        Contact Us
                      </button>
                    </div>
                  </div>
                `
                document.body.appendChild(modal)
              }}
            >
              Request a Customized Proposal
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
