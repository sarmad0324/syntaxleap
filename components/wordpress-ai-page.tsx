"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Sparkles, Zap, CheckCircle, ArrowLeft, MessageSquare, TrendingUp, Search } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function WordPressAIPage() {
  const features = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent chatbots that understand your business and provide 24/7 customer support.",
      benefits: ["Automated customer service", "Lead qualification", "Multi-language support"]
    },
    {
      icon: Sparkles,
      title: "Content Generation",
      description: "AI-powered content creation tools that generate blog posts, product descriptions, and marketing copy.",
      benefits: ["SEO-optimized content", "Consistent brand voice", "Time-saving automation"]
    },
    {
      icon: TrendingUp,
      title: "Personalization Engine",
      description: "Dynamic content recommendations based on user behavior and preferences.",
      benefits: ["Increased engagement", "Higher conversion rates", "Improved user experience"]
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Advanced search functionality with natural language processing and smart suggestions.",
      benefits: ["Better search results", "Voice search capability", "Contextual recommendations"]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "AI Strategy Planning",
      description: "We analyze your business needs and identify the best AI solutions for your WordPress site."
    },
    {
      step: "02",
      title: "Custom Integration",
      description: "Our team develops and integrates AI features tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Training & Optimization",
      description: "We train the AI models with your data and continuously optimize for better performance."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Regular maintenance, updates, and performance monitoring to ensure optimal AI functionality."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/services" className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full text-white">
              <Bot className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            WordPress <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">AI Integration</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Transform your WordPress website with cutting-edge AI capabilities. From intelligent chatbots to automated content generation, we bring the power of artificial intelligence to your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:border-blue-600 hover:text-blue-600">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            AI-Powered Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover how our AI integrations can revolutionize your WordPress website
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg text-white mr-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our AI Integration Process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From strategy to implementation, we ensure your AI features deliver maximum value
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start mb-8 last:mb-0"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <Zap className="h-12 w-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4">Ready to Add AI to Your WordPress Site?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and give your website the intelligent features your visitors expect. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/contact">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
