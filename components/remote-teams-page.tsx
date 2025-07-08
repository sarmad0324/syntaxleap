"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Globe, Zap, CheckCircle, ArrowLeft, MessageSquare, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function RemoteTeamsPage() {
  const teamTypes = [
    {
      icon: Users,
      title: "Full-Stack Development Teams",
      description: "Complete development teams with frontend, backend, and DevOps specialists.",
      skills: ["React/Next.js", "Node.js/Python", "AWS/Azure", "Database Design"],
      pricing: "Starting at $4,000/month per developer"
    },
    {
      icon: Globe,
      title: "AI Specialists",
      description: "Expert AI engineers and data scientists to build intelligent solutions.",
      skills: ["Machine Learning", "LLMs Integration", "Computer Vision", "NLP"],
      pricing: "Starting at $5,000/month per specialist"
    },
    {
      icon: Zap,
      title: "Design Teams",
      description: "Creative teams combining UI/UX design with AI-powered design tools.",
      skills: ["UI/UX Design", "AI Design Tools", "Figma", "Prototyping"],
      pricing: "Starting at $3,500/month per designer"
    },
    {
      icon: Shield,
      title: "QA & Testing Teams",
      description: "Quality assurance specialists with automated testing expertise.",
      skills: ["Test Automation", "AI Testing", "Performance Testing", "Security Testing"],
      pricing: "Starting at $3,000/month per tester"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Faster Time to Market",
      description: "Get your projects delivered 40% faster with our experienced teams"
    },
    {
      icon: Shield,
      title: "Pre-vetted Talent",
      description: "All team members go through rigorous screening and skill assessments"
    },
    {
      icon: Star,
      title: "Flexible Scaling",
      description: "Scale your team up or down based on project requirements"
    },
    {
      icon: Globe,
      title: "Global Talent Pool",
      description: "Access to the best developers from around the world"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We understand your project needs, tech stack, and team requirements to find the perfect match."
    },
    {
      step: "02",
      title: "Team Assembly",
      description: "We carefully select and assemble your dedicated team based on your specific requirements."
    },
    {
      step: "03",
      title: "Integration & Onboarding",
      description: "Seamless integration with your existing processes and tools with comprehensive onboarding."
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Continuous project management, performance monitoring, and team optimization."
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
              <Users className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Augmented <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Remote Teams</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Scale your development capacity with our world-class remote teams. Get dedicated developers, designers, and AI specialists who work as an extension of your in-house team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" asChild>
              <Link href="/contact">
                Build Your Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:border-blue-600 hover:text-blue-600">
              View Success Stories
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Team Types Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Team Specializations
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from our specialized teams or create a custom team mix for your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamTypes.map((team, index) => (
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
                      <team.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">{team.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    {team.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-sm font-semibold text-slate-900">{team.pricing}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Our Remote Teams?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the advantages of working with our carefully curated remote development teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="p-3 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full text-white w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Team Building Process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From requirements to deployment, we ensure your remote team integrates seamlessly
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
            <Users className="h-12 w-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Team?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stop worrying about hiring and focus on building great products. Let us provide you with the 
              skilled remote team you need to accelerate your development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/contact">
                  Get Your Team Today
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
