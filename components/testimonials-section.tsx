"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "SyntaxLeap delivered our AI dashboard in record time. Their expertise in machine learning transformed our data into actionable insights.",
      author: "Jennifer Walsh",
      company: "TechFlow Solutions",
      role: "CTO",
      rating: 5,
    },
    {
      quote:
        "Their team seamlessly integrated with ours across time zones. The AI-powered features they built increased our user engagement by 300%.",
      author: "David Park",
      company: "InnovateLab",
      role: "Founder",
      rating: 5,
    },
    {
      quote:
        "Working with SyntaxLeap was a game-changer. They didn't just build software – they built an intelligent system that grows with our business.",
      author: "Maria Rodriguez",
      company: "DataSync Corp",
      role: "Head of Product",
      rating: 5,
    },
    {
      quote:
        "The AI recommendation engine they developed boosted our sales by 40%. Their attention to detail and technical expertise is unmatched.",
      author: "Alex Thompson",
      company: "E-Commerce Plus",
      role: "CEO",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-plus-jakarta mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped transform.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-slate-900/80 border-slate-700 p-8 lg:p-12 rounded-2xl text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="space-y-2">
                <div className="text-xl font-bold text-white font-plus-jakarta">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-indigo-400 font-semibold">{testimonials[currentTestimonial].role}</div>
                <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-slate-600 text-gray-300 hover:text-white hover:border-indigo-500 rounded-xl bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-indigo-500" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-slate-600 text-gray-300 hover:text-white hover:border-indigo-500 rounded-xl bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
