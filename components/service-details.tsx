"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Palette, Wordpress, Users } from "lucide-react"

export function ServiceDetails() {
  const services = [
    {
      id: "ai-web",
      icon: Globe,
      title: "AI Web Development",
      description: "We build intelligent web applications that learn from user behavior and optimize performance automatically. Our AI-powered websites adapt to provide personalized experiences that increase engagement and conversions.",
      features: ["Machine Learning Integration", "Personalized User Experiences", "Automated Optimization"]
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Intelligent Mobile Apps",
      description: "Native and cross-platform mobile applications with built-in AI capabilities. From image recognition to natural language processing, we create apps that understand and respond to user needs intelligently.",
      features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"]
    },
    {
      id: "design",
      icon: Palette,
      title: "UI/UX & AI Design",
      description: "User interface and experience design optimized for AI-powered applications. We create intuitive designs that make complex AI features accessible and engaging for end users.",
      features: ["AI-First Design", "User Experience Optimization", "Accessibility Focus"]
    },
    {
      id: "wordpress",
      icon: Wordpress,
      title: "WordPress AI Integrations",
      description: "Transform your WordPress site with AI capabilities. We integrate machine learning features like content recommendations, chatbots, and automated content generation to enhance your website's functionality.",
      features: ["Content Automation", "AI Chatbots", "Smart Recommendations"]
    },
    {
      id: "teams",
      icon: Users,
      title: "Augmented Remote Teams",
      description: "Dedicated AI specialists who work as an extension of your team. Our remote developers, data scientists, and ML engineers collaborate seamlessly with your in-house team to deliver exceptional results.",
      features: ["Vetted AI Specialists", "Seamless Integration", "Agile Methodology"]
    }
  ]

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 lg:p-12 hover-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-teal" />
                    </div>
                    <h2 className="text-3xl font-bold font-plus-jakarta text-navy">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-charcoal mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
                        <span className="text-charcoal font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-secondary">
                    Learn More
                  </button>
                </div>
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-navy/5 to-teal/5 rounded-xl flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-navy/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
