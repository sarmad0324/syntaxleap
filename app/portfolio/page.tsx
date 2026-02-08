import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | SyntaxLeap",
  description:
    "Explore our portfolio of successful web and mobile projects. See how we've helped startups build scalable products like Triangle Wallet, TruckWise, Exact Print, and more.",
  keywords: [
    "React development portfolio",
    "Next.js projects",
    "React Native apps",
    "startup case studies",
    "web app portfolio",
    "mobile app development",
    "product development examples",
    "MVP projects",
  ],
  openGraph: {
    title: "Portfolio & Case Studies | SyntaxLeap",
    description:
      "See how we've helped startups build scalable products with React, Next.js, and React Native.",
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
    id: 9,
    title: "Triangle Wallet - Blockchain Digital Wallet",
    client: "FinTech Startup",
    category: "React Native Mobile App",
    image: "/triangle.png",
    summary: "Built a secure blockchain-based digital wallet for cryptocurrency transactions and asset management. Features advanced encryption, multi-currency support, real-time exchange rates, and seamless peer-to-peer transfers with decentralized architecture.",
    challenge: "Create a user-friendly mobile wallet that handles complex blockchain operations while maintaining bank-level security.",
    solution: "Developed a React Native app with Web3 integration, smart contract support, and intuitive UX that abstracts technical complexity.",
    metrics: {
      deliveryTime: "8 weeks",
      users: "5K+",
      successRate: "99%",
      transactions: "10K+",
    },
    technologies: ["React Native", "Blockchain", "Web3.js", "Smart Contracts", "TypeScript"],
    results: [
      "10,000+ secured transactions processed",
      "5,000+ active wallet users",
      "99% security rating with zero breaches",
      "Multi-chain support (ETH, BSC, Polygon)",
      "Real-time portfolio tracking",
    ],
    link: "https://github.com/mohammadfahad112/triangle-app",
  },
  {
    id: 5,
    title: "TruckWise - Fleet Management Platform",
    client: "Truckwise Transport LLC",
    category: "Web & Mobile Platform",
    image: "/truck.png",
    summary: "Built an end-to-end logistics platform for fleet management with AI-powered route optimization, real-time GPS tracking, maintenance scheduling, driver management, and automated dispatch system.",
    challenge: "Transport company needed to optimize operations, reduce fuel costs, and improve on-time delivery rates across 500+ vehicles.",
    solution: "Created a comprehensive web dashboard and mobile app with real-time tracking, predictive maintenance alerts, and intelligent route planning.",
    metrics: {
      deliveryTime: "12 weeks",
      users: "500+",
      successRate: "96%",
      efficiency: "+40%",
    },
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    results: [
      "40% improvement in route efficiency",
      "500+ fleet vehicles managed",
      "96% on-time delivery rate",
      "35% reduction in fuel costs",
      "Automated dispatch reduced manual work by 60%",
    ],
  },
  {
    id: 1,
    title: "HomeBites - Chef-to-Consumer Platform",
    client: "FoodTech Startup",
    category: "Next.js Web Platform",
    image: "/homebites.png",
    summary: "Built a modern food delivery marketplace connecting food lovers with local home chefs. Features include real-time order tracking, group ordering, bill splitting, chef profiles, ratings & reviews, and payment integration.",
    challenge: "Create a platform that builds trust between customers and home chefs while handling complex order fulfillment logistics.",
    solution: "Developed a Next.js web app with real-time updates, secure payments, and community-driven chef verification system.",
    metrics: {
      deliveryTime: "10 weeks",
      users: "25K+",
      successRate: "98%",
      rating: "4.9★",
    },
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "Firebase", "Real-time APIs"],
    results: [
      "25,000+ happy customers onboarded",
      "1,200+ verified home chefs",
      "4.9★ average platform rating",
      "45% faster than traditional delivery",
      "Seamless group ordering and bill split features",
    ],
    link: "https://homebites1.netlify.app/",
  },
  {
    id: 2,
    title: "Adysis (AdOdyss) - Amazon Marketplace Growth Platform",
    client: "E-commerce Growth Agency",
    category: "Next.js SaaS Platform",
    image: "/adodyss.png",
    summary: "Developed a comprehensive SaaS platform for Amazon & Walmart sellers. Features include PPC campaign management, DSP advertising, listing optimization, brand protection monitoring, inventory forecasting, and profit recovery automation.",
    challenge: "E-commerce brands needed centralized tools to manage multiple marketplace channels, optimize ad spend, and protect their brand presence.",
    solution: "Built a data-driven dashboard with API integrations to Amazon, Walmart, and ad platforms. Automated workflows for optimization and alerts.",
    metrics: {
      deliveryTime: "14 weeks",
      users: "2K+",
      successRate: "99%",
      revenue: "8-figure",
    },
    technologies: ["Next.js", "TypeScript", "Analytics Dashboard", "AWS", "API Integration"],
    results: [
      "2,000+ brands actively using platform",
      "8-figure revenue influenced",
      "+38% average ROAS improvement",
      "90+ product listings optimized daily",
      "Automated brand protection saved $500K+",
    ],
    link: "https://adodyss.com/",
  },
  {
    id: 3,
    title: "Exact Print - Custom Print E-Commerce",
    client: "Print-on-Demand Business",
    category: "E-commerce Platform",
    image: "/exact.png",
    summary: "Built a custom print e-commerce platform with real-time design preview, bulk ordering, custom templates, and automated fulfillment integration. Customers can create and order custom printed materials with instant mockups.",
    challenge: "Traditional print ordering was complex and time-consuming. Needed a modern, user-friendly platform with instant previews and seamless ordering.",
    solution: "Developed a React-based platform with live design editor, template library, and integration with print fulfillment services.",
    metrics: {
      deliveryTime: "10 weeks",
      users: "50K+",
      successRate: "98%",
      revenueIncrease: "35%",
    },
    technologies: ["React", "Node.js", "Canvas API", "Stripe", "PostgreSQL"],
    results: [
      "50,000+ designs created by users",
      "98% customer satisfaction score",
      "35% increase in monthly revenue",
      "40% reduction in order processing time",
      "Automated fulfillment pipeline",
    ],
  },
  {
    id: 4,
    title: "EasyRecova (EzRecova) - Debt Recovery Platform",
    client: "FinTech SaaS Company",
    category: "Web Platform & CRM",
    image: "/ezrecova.png",
    summary: "Built a comprehensive debt recovery management platform with automated workflows, payment tracking, debtor communication tools, compliance management, and analytics dashboard for collection agencies.",
    challenge: "Debt collection agencies needed a modern system to manage thousands of cases, automate communications, and ensure regulatory compliance.",
    solution: "Created a full-stack platform with automated email/SMS campaigns, payment portal integration, and compliance tracking system.",
    metrics: {
      deliveryTime: "16 weeks",
      users: "100+",
      successRate: "99%",
      recovery: "+45%",
    },
    technologies: ["React", "Node.js", "PostgreSQL", "Twilio", "Stripe"],
    results: [
      "100+ collection agencies using platform",
      "45% improvement in recovery rates",
      "Automated 60% of routine communications",
      "99% compliance score maintained",
      "Processing 50K+ cases monthly",
    ],
  },
  {
    id: 7,
    title: "Genius Learning - EdTech Platform",
    client: "Education Technology Startup",
    category: "Mobile & Web App",
    image: "/genius.png",
    summary: "Developed an adaptive learning mobile app with AI-driven personalized curriculum, progress tracking, gamification, video lessons, and practice tests for K-12 students.",
    challenge: "Students needed personalized learning experiences that adapt to their pace and learning style.",
    solution: "Built a React Native app with AI algorithms that adjust content difficulty based on performance and engagement patterns.",
    metrics: {
      deliveryTime: "12 weeks",
      users: "25K+",
      successRate: "95%",
      engagement: "4.2x",
    },
    technologies: ["React Native", "AI/ML", "Firebase", "Node.js", "Video Streaming"],
    results: [
      "25,000+ active student users",
      "95% app store rating (4.7★)",
      "4.2x increase in daily engagement",
      "30% improvement in test scores",
      "Supports 15+ subjects and grade levels",
    ],
  },
  {
    id: 6,
    title: "Little Lemon - Restaurant Booking Platform",
    client: "Restaurant Chain",
    category: "Web Platform",
    image: "/little lemon.png",
    summary: "Created a modern restaurant reservation and table management system with online booking, menu management, customer profiles, loyalty program, and kitchen order management integration.",
    challenge: "Restaurant needed to reduce no-shows, manage reservations efficiently, and provide seamless customer experience.",
    solution: "Built a React web app with real-time table availability, automated reminders, and integrated POS system.",
    metrics: {
      deliveryTime: "8 weeks",
      users: "200+",
      successRate: "97%",
      costReduction: "25%",
    },
    technologies: ["React", "Node.js", "MongoDB", "Twilio", "Stripe"],
    results: [
      "200+ restaurant locations using system",
      "45% reduction in no-shows",
      "97% uptime and reliability",
      "25% increase in table turnover",
      "Integrated loyalty program boosted repeat visits by 30%",
    ],
  },
  {
    id: 8,
    title: "StreamHub - Entertainment Platform",
    client: "Media Startup",
    category: "Streaming Platform",
    image: "/movies.png",
    summary: "Developed a video streaming platform with content management, subscription handling, personalized recommendations, watch history, multi-device support, and HD streaming capabilities.",
    challenge: "Launch a competitive streaming service with smooth playback, personalized content discovery, and scalable infrastructure.",
    solution: "Built a full-stack platform with CDN integration, adaptive bitrate streaming, and recommendation engine.",
    metrics: {
      deliveryTime: "16 weeks",
      users: "75K+",
      successRate: "94%",
      retention: "3.5x",
    },
    technologies: ["Next.js", "React Native", "GraphQL", "AWS", "Video CDN"],
    results: [
      "75,000+ active subscribers",
      "94% user satisfaction rating",
      "3.5x increase in user retention",
      "99.9% streaming uptime",
      "Average watch time: 2.5 hours/day",
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-light mb-8 leading-relaxed">
            Real products built for real startups. From blockchain wallets to fleet management platforms,
            see how we've helped founders launch and scale with React, React Native, and Next.js.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-border rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group"
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
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 bg-white">
                <h3 className="text-xl sm:text-2xl font-bold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-text-light text-sm mb-4">
                  {project.client}
                </p>
                <p className="text-text-light mb-6 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                  {project.metrics.deliveryTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs text-text-light">Delivery</div>
                        <div className="text-sm font-bold text-text">{project.metrics.deliveryTime}</div>
                      </div>
                    </div>
                  )}
                  {project.metrics.users && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <div>
                        <div className="text-xs text-text-light">Users</div>
                        <div className="text-sm font-bold text-text">{project.metrics.users}</div>
                      </div>
                    </div>
                  )}
                  {project.metrics.successRate && (
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs text-text-light">Success</div>
                        <div className="text-sm font-bold text-text">{project.metrics.successRate}</div>
                      </div>
                    </div>
                  )}
                  {(project.metrics.rating || project.metrics.revenue || project.metrics.revenueIncrease || project.metrics.engagement || project.metrics.efficiency || project.metrics.retention) && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <div>
                        <div className="text-xs text-text-light">Results</div>
                        <div className="text-sm font-bold text-text">
                          {project.metrics.rating || project.metrics.revenue || project.metrics.revenueIncrease || project.metrics.engagement || project.metrics.efficiency || project.metrics.retention || "High"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-xs text-text-light mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-background text-text-body text-xs px-2 py-1 rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div className="mb-6">
                  <div className="text-xs text-text-light mb-2 font-semibold">Key Results:</div>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="text-sm text-text-light flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
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
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      Visit Website
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                ) : (
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
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
      <section className="bg-primary/5 border-t border-b border-border py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text">
            Ready to Build Your Product?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-text-light">
            Let's turn your idea into a production-ready product. Book a call to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-6">
                Book an Intro Call
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-border text-text-body hover:bg-background hover:border-primary font-bold px-8 py-6">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

