"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Zap, Shield, Clock, Globe, Headphones } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ARRemoteTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy to-navy/80 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-teal/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-teal/20 text-teal px-6 py-3 rounded-full mb-8 font-semibold"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-teal rounded-full mr-3"
              />
              Extended Team Solutions
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-plus-jakarta text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AR Remote Team
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Get access to a dedicated team of augmented reality specialists who work as an extension of your business to build immersive AR experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 shadow-lg">
                  Get Your AR Team
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="#ar-capabilities" className="btn-secondary-white text-lg px-8 py-4">
                  Explore Capabilities
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-plus-jakarta text-navy mb-6">
              What You Get
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              A complete AR development team that integrates seamlessly with your existing workflow
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "Complete AR Team",
                description: "AR developers, 3D artists, UX designers, and project managers working exclusively on your projects."
              },
              {
                icon: Globe,
                title: "Global Talent Pool",
                description: "Access to world-class AR specialists from around the globe, bringing diverse perspectives and expertise."
              },
              {
                icon: Clock,
                title: "Flexible Engagement",
                description: "Scale your team up or down based on project needs. From part-time to full-time dedicated resources."
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                description: "Get your AR team up and running in just 2 weeks. No lengthy hiring processes or onboarding delays."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes ensure your AR applications meet the highest standards."
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock support and communication to keep your projects moving forward across time zones."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{item.title}</h3>
                <p className="text-charcoal leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AR Capabilities */}
      <section id="ar-capabilities" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-plus-jakarta text-navy mb-6">
              AR Capabilities
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Our AR specialists deliver cutting-edge augmented reality solutions across multiple platforms
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {[
                {
                  title: "Mobile AR Applications",
                  description: "iOS and Android AR apps using ARKit, ARCore, and Unity 3D for immersive mobile experiences."
                },
                {
                  title: "WebAR Solutions",
                  description: "Browser-based AR experiences using WebXR and 8th Wall for universal accessibility."
                },
                {
                  title: "Industrial AR",
                  description: "Enterprise AR solutions for training, maintenance, and remote assistance using HoloLens and Magic Leap."
                },
                {
                  title: "AR Marketing & Retail",
                  description: "Interactive product visualization, virtual try-ons, and branded AR experiences."
                },
                {
                  title: "3D Content Creation",
                  description: "High-quality 3D models, animations, and interactive content optimized for AR platforms."
                },
                {
                  title: "AR Analytics & Optimization",
                  description: "Performance tracking and user behavior analysis to optimize AR engagement."
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{capability.title}</h3>
                    <p className="text-charcoal leading-relaxed">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-teal/20 to-navy/20 rounded-3xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal/10 to-navy/10 rounded-3xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🥽</div>
                    <h3 className="text-2xl font-bold text-navy mb-2">AR Expertise</h3>
                    <p className="text-charcoal">Immersive experiences that blend digital and physical worlds</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-plus-jakarta text-navy mb-6">
              How We Work
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              A streamlined process to get your AR team integrated and productive quickly
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We understand your AR requirements, technical constraints, and business objectives to assemble the perfect team."
              },
              {
                step: "02",
                title: "Team Assembly",
                description: "Within 2 weeks, we provide you with a dedicated AR team matched to your project needs and company culture."
              },
              {
                step: "03",
                title: "Integration & Kickoff",
                description: "Seamless integration with your existing workflows, tools, and communication processes."
              },
              {
                step: "04",
                title: "Continuous Delivery",
                description: "Regular sprints, demos, and iterative development to ensure your AR project stays on track."
              },
              {
                step: "05",
                title: "Scale & Optimize",
                description: "Flexible scaling based on project phases, with continuous optimization for performance and user experience."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center font-bold text-white text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-charcoal leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-teal/30 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-plus-jakarta text-white mb-6">
              Ready to Build Your AR Future?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Get a dedicated AR development team that delivers exceptional results and scales with your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 shadow-lg">
                Get Your AR Team Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
