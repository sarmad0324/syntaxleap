import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Insights | SyntaxLeap",
  description:
    "Stay updated with the latest AI trends, case studies, industry insights, and best practices in web and mobile development. Learn from our experts about AI-powered solutions and digital transformation.",
  keywords: [
    "AI trends",
    "AI insights",
    "machine learning blog",
    "web development blog",
    "mobile app development",
    "AI case studies",
    "digital transformation",
    "tech insights",
    "AI best practices",
  ],
  openGraph: {
    title: "Blog & Insights | SyntaxLeap",
    description:
      "Stay updated with the latest AI trends, case studies, and industry insights from our expert team.",
    url: "https://www.syntaxleap.info/blog",
    images: [
      {
        url: "https://www.syntaxleap.info/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "SyntaxLeap Blog & Insights",
      },
    ],
  },
  alternates: {
    canonical: "https://www.syntaxleap.info/blog",
  },
}

// Placeholder blog posts - these would be replaced with actual content from a CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development: Trends to Watch in 2024",
    excerpt: "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.",
    author: "SyntaxLeap Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI Trends",
    image: "/meeting.jpg",
    tags: ["AI", "Web Development", "Trends"],
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps with AI: A Complete Guide",
    excerpt: "Learn how to integrate AI capabilities into mobile applications for better user experiences and intelligent automation.",
    author: "SyntaxLeap Team",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Mobile Development",
    image: "/whiteboard.jpg",
    tags: ["Mobile Apps", "AI", "Development"],
  },
  {
    id: 3,
    title: "How Remote AI Teams Are Transforming Business Operations",
    excerpt: "Discover the benefits of working with remote AI development teams and how they can accelerate your digital transformation.",
    author: "SyntaxLeap Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Remote Teams",
    image: "/meeting.jpg",
    tags: ["Remote Teams", "AI", "Business"],
  },
  {
    id: 4,
    title: "Case Study: Reducing Development Time by 40% with AI Automation",
    excerpt: "A detailed look at how we helped a startup reduce their development cycle and improve efficiency using AI-powered tools.",
    author: "SyntaxLeap Team",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Case Studies",
    image: "/whiteboard.jpg",
    tags: ["Case Study", "AI", "Automation"],
  },
  {
    id: 5,
    title: "UI/UX Design for AI-Powered Applications: Best Practices",
    excerpt: "Essential design principles and best practices for creating intuitive and user-friendly interfaces for AI applications.",
    author: "SyntaxLeap Team",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "UI/UX Design",
    image: "/meeting.jpg",
    tags: ["UI/UX", "Design", "AI"],
  },
  {
    id: 6,
    title: "WordPress AI Integration: Enhancing Your Website with Intelligence",
    excerpt: "Learn how to integrate AI features into WordPress sites to improve SEO, content generation, and user engagement.",
    author: "SyntaxLeap Team",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "WordPress",
    image: "/whiteboard.jpg",
    tags: ["WordPress", "AI", "Integration"],
  },
]

const categories = ["All", "AI Trends", "Mobile Development", "Remote Teams", "Case Studies", "UI/UX Design", "WordPress"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            Blog & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-light mb-8 leading-relaxed">
            Stay updated with the latest AI trends, case studies, industry insights, and best practices 
            in web and mobile development from our expert team.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white text-text-body font-semibold hover:bg-primary hover:text-white transition-colors duration-200 border border-border hover:border-primary"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-text-light mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-text-light mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <Link href={`/blog/${blogPosts[0].id}`}>
                <Button className="bg-primary hover:bg-primary-dark text-white w-full sm:w-auto">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white border border-border rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group"
            >
              {/* Post Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="flex items-center gap-4 text-xs text-text-light mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-light mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 bg-background text-text-body text-xs px-2 py-1 rounded border border-border"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary/5 border-t border-b border-border py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-text-light">
            Subscribe to our newsletter and get the latest AI trends, case studies, and development tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-border text-text-body placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-bold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

