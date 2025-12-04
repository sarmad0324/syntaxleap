"use client"

import { motion } from "framer-motion"
import { Users, Clock, Globe, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RemoteTeamsSection() {
  const advantages = [
    {
      icon: Users,
      title: "Dedicated AI Specialists",
      description: "Work with experienced AI developers and data scientists who integrate seamlessly with your team.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and development across different time zones for faster delivery.",
    },
    {
      icon: Globe,
      title: "Global Talent Pool",
      description: "Access to top-tier AI talent from around the world without geographical limitations.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "Successfully delivered 50+ projects with remote teams, maintaining 99% client satisfaction.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Scale with <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Remote AI Teams</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
              Build your AI capabilities faster with dedicated remote teams that work as an extension 
              of your in-house staff. Get access to specialized talent, reduce costs, and accelerate 
              your digital transformation.
            </p>

            <div className="space-y-6 mb-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/services/remote-teams">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 shadow-lg shadow-blue-500/50">
                Learn About Remote Teams
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 sm:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/meeting.jpg"
                alt="Remote AI team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/10"></div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 max-w-xs">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

