import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | SyntaxLeap",
  description:
    "Explore our portfolio of successful AI-powered web and mobile projects. See how we've helped businesses and startups transform with intelligent solutions, reduced delivery times, and achieved remarkable success rates.",
  keywords: [
    "AI development portfolio",
    "case studies",
    "AI web app projects",
    "mobile app development portfolio",
    "successful AI implementations",
    "startup projects",
    "SME digital transformation",
    "AI project examples",
  ],
  openGraph: {
    title: "Portfolio & Case Studies | SyntaxLeap",
    description:
      "Explore our successful AI-powered projects and see how we've transformed businesses with intelligent solutions.",
    url: "https://www.syntaxleap.info/portfolio",
    images: [
      {
        url: "https://www.syntaxleap.info/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap Portfolio & Case Studies",
      },
    ],
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/portfolio",
  },
}

const caseStudies = [
  {
    id: 1,
    title: "HomeBites - Chef-to-Consumer Platform",
    client: "FoodTech Startup",
    category: "AI Web Development",
    image: "/homebites.png",
    summary: "Built a modern food delivery platform connecting food lovers with passionate local chefs. Features real-time order tracking, group ordering, bill splitting, and community reviews for authentic home-cooked meals.",
    metrics: {
      deliveryTime: "45% faster",
      users: "25K+",
      successRate: "98%",
      rating: "4.9★",
    },
    technologies: ["Next.js", "React", "TypeScript", "Real-time APIs"],
    results: [
      "25,000+ happy customers",
      "1,200+ active chefs",
      "4.9★ average rating",
      "Seamless group ordering experience",
    ],
    link: "https://homebites1.netlify.app/",
  },
  {
    id: 2,
    title: "AdOdyss - Marketplace Growth Platform",
    client: "E-commerce Growth Agency",
    category: "AI Web Development",
    image: "/adodyss.png",
    summary: "Developed a comprehensive marketplace management platform for Amazon & Walmart brands. Features PPC management, DSP advertising, listing optimization, brand protection, and profit recovery tools.",
    metrics: {
      deliveryTime: "50% faster",
      users: "2K+",
      successRate: "99%",
      revenue: "8-figure",
    },
    technologies: ["Next.js", "Analytics", "API Integration", "Dashboard"],
    results: [
      "2,000+ brands served",
      "8-figure revenue influenced",
      "+38% ROAS improvement",
      "90+ listings optimized",
    ],
    link: "https://adodyss.com/",
  },
  {
    id: 3,
    title: "AI-Powered E-Commerce Platform",
    client: "RetailTech Startup",
    category: "AI Web Development",
    image: "/exact.png",
    summary: "Built an intelligent e-commerce platform with AI-powered product recommendations, automated inventory management, and personalized shopping experiences.",
    metrics: {
      deliveryTime: "40% faster",
      users: "50K+",
      successRate: "98%",
      revenueIncrease: "35%",
    },
    technologies: ["Next.js", "AI/ML", "TypeScript", "PostgreSQL"],
    results: [
      "40% reduction in delivery time",
      "50,000+ active users",
      "98% customer satisfaction",
      "35% increase in revenue",
    ],
  },
  {
    id: 7,
    title: "Intelligent Mobile Health App",
    client: "HealthTech Company",
    category: "Mobile Apps",
    image: "/genius.png",
    summary: "Developed a mobile health application with AI-driven symptom analysis, medication reminders, and telemedicine integration for better patient care.",
    metrics: {
      deliveryTime: "30% faster",
      users: "25K+",
      successRate: "95%",
      engagement: "4.2x",
    },
    technologies: ["React Native", "AI/ML", "Firebase", "Node.js"],
    results: [
      "30% faster development cycle",
      "25,000+ active users",
      "95% app store rating",
      "4.2x user engagement increase",
    ],
  },
  {
    id: 8,
    title: "AI-Enhanced WordPress Platform",
    client: "Content Agency",
    category: "WordPress AI",
    image: "/ezrecova.png",
    summary: "Integrated advanced AI features into WordPress including automated content generation, SEO optimization, and intelligent content recommendations.",
    metrics: {
      deliveryTime: "50% faster",
      users: "100K+",
      successRate: "99%",
      trafficIncrease: "60%",
    },
    technologies: ["WordPress", "AI Integration", "PHP", "MySQL"],
    results: [
      "50% faster content creation",
      "100,000+ monthly visitors",
      "99% uptime",
      "60% increase in organic traffic",
    ],
  },
  {
    id: 4,
    title: "Restaurant Management System",
    client: "Restaurant Chain",
    category: "AI Web Development",
    image: "/little lemon.png",
    summary: "Created a comprehensive restaurant management system with AI-powered inventory management, predictive ordering, and customer behavior analysis.",
    metrics: {
      deliveryTime: "45% faster",
      users: "200+",
      successRate: "97%",
      costReduction: "25%",
    },
    technologies: ["React", "AI/ML", "Python", "MongoDB"],
    results: [
      "45% reduction in operational costs",
      "200+ restaurant locations",
      "97% system reliability",
      "25% cost reduction in inventory",
    ],
  },
  {
    id: 5,
    title: "Logistics & Fleet Management",
    client: "Truckwise Transport LLC",
    category: "Mobile App",
    image: "/truck.png",
    summary: "Built an intelligent logistics platform with route optimization, real-time tracking, and predictive maintenance using AI and machine learning.",
    metrics: {
      deliveryTime: "35% faster",
      users: "500+",
      successRate: "96%",
      efficiency: "40%",
    },
    technologies: ["Vue.js", "AI/ML", "Node.js", "PostgreSQL"],
    results: [
      "35% faster delivery times",
      "500+ fleet vehicles",
      "96% on-time delivery rate",
      "40% improvement in route efficiency",
    ],
  },
  {
    id: 6,
    title: "Entertainment Streaming Platform",
    client: "Media Startup",
    category: "AI Web Development",
    image: "/movies.png",
    summary: "Developed a streaming platform with AI-powered content recommendations, personalized playlists, and intelligent search capabilities.",
    metrics: {
      deliveryTime: "42% faster",
      users: "75K+",
      successRate: "94%",
      retention: "3.5x",
    },
    technologies: ["React Native", "AI/ML", "GraphQL", "AWS"],
    results: [
      "42% faster time to market",
      "75,000+ active subscribers",
      "94% user satisfaction",
      "3.5x increase in user retention",
    ],
  },
  {
    id: 9,
    title: "Triangle Wallets - Blockchain Digital Wallet",
    client: "FinTech Startup",
    category: "Mobile App",
    image: "/triangle.png",
    summary: "A blockchain-based digital wallet App used for financial transactions, asset management, and transfers. Focused on user security and scalability with advanced encryption and decentralized architecture.",
    metrics: {
      deliveryTime: "40% faster",
      users: "5K+",
      successRate: "99%",
      transactions: "10,000+",
    },
    technologies: ["React Native", "Blockchain", "Web3", "Smart Contracts"],
    results: [
      "10,000+ secured transactions",
      "5,000+ active users",
      "99% security rating",
      "Blockchain-based architecture",
    ],
    link: "https://github.com/mohammadfahad112/triangle-app",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 sm:pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
            Explore our successful AI-powered projects. See how we've helped businesses and startups 
            transform with intelligent solutions, reduced delivery times, and achieved remarkable results.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.client}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-700">
                  {project.metrics.deliveryTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <div>
                        <div className="text-xs text-gray-400">Delivery</div>
                        <div className="text-sm font-bold text-white">{project.metrics.deliveryTime}</div>
                      </div>
                    </div>
                  )}
                  {project.metrics.users && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      <div>
                        <div className="text-xs text-gray-400">Users</div>
                        <div className="text-sm font-bold text-white">{project.metrics.users}</div>
                      </div>
                    </div>
                  )}
                  {project.metrics.successRate && (
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <div>
                        <div className="text-xs text-gray-400">Success</div>
                        <div className="text-sm font-bold text-white">{project.metrics.successRate}</div>
                      </div>
                    </div>
                  )}
                  {(project.metrics.rating || project.metrics.revenue || project.metrics.revenueIncrease || project.metrics.engagement || project.metrics.efficiency || project.metrics.retention) && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <div>
                        <div className="text-xs text-gray-400">Results</div>
                        <div className="text-sm font-bold text-white">
                          {project.metrics.rating || project.metrics.revenue || project.metrics.revenueIncrease || project.metrics.engagement || project.metrics.efficiency || project.metrics.retention || "High"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-xs text-gray-400 mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-700/50 text-gray-300 text-xs px-2 py-1 rounded border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div className="mb-6">
                  <div className="text-xs text-gray-400 mb-2 font-semibold">Key Results:</div>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      Visit Website
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                ) : (
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border-t border-b border-slate-700 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-400">
            Let's discuss how we can transform your business with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-6">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800/50 hover:border-blue-500 font-bold px-8 py-6">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

