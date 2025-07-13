// components/structured-data.tsx
export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SyntaxLeap",
    url: "https://www.syntaxleap.info",
    logo: "https://www.syntaxleap.info/logo.svg",
    description: "Leading AI development agency specializing in neural networks, deep learning, intelligent automation, and cutting-edge artificial intelligence solutions that transform businesses.",
    foundingDate: "2022-01-01",
    industry: "Artificial Intelligence and Machine Learning Development",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Neural Networks",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Edge AI",
      "MLOps",
      "AI Automation",
      "Data Engineering"
    ],
    serviceType: [
      "Neural Network Development",
      "Intelligent Automation",
      "AI Data Engineering",
      "Edge AI Solutions",
      "Machine Learning Consulting",
      "AI Model Development"
    ],
    founders: [
      { "@type": "Person", name: "Sarmad Irfan", jobTitle: "CEO & AI Strategist" },
      { "@type": "Person", name: "Abdullah Khan", jobTitle: "CTO & ML Engineer" },
    ],
    sameAs: [
      "https://linkedin.com/company/syntax-leap",
      "https://github.com/syntaxleap",
      "https://twitter.com/SyntaxLeap",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+92 336 8486356",
        contactType: "customer service",
        email: "hello@syntaxleap.com",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
        serviceType: "AI Development Consultation"
      }
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SyntaxLeap",
    url: "https://www.syntaxleap.info",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.syntaxleap.info/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.syntaxleap.info/" },
      { "@type": "ListItem", position: 2, name: "AI Services", item: "https://www.syntaxleap.info/services" },
      { "@type": "ListItem", position: 3, name: "About AI Team", item: "https://www.syntaxleap.info/about" },
      { "@type": "ListItem", position: 4, name: "AI Consultation", item: "https://www.syntaxleap.info/contact" },
    ],
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Development Services",
    provider: {
      "@type": "Organization",
      name: "SyntaxLeap",
      url: "https://www.syntaxleap.info"
    },
    serviceType: "Artificial Intelligence Development",
    description: "Comprehensive AI development services including neural networks, machine learning, and intelligent automation solutions.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Neural Network Development",
            description: "Custom neural network architectures and deep learning solutions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intelligent Automation",
            description: "AI-powered automation systems and workflow optimization"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Data Engineering",
            description: "Machine learning operations and data pipeline solutions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Edge AI Solutions",
            description: "High-performance AI applications for edge computing and IoT"
          }
        }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
    </>
  );
}