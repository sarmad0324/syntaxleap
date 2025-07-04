// components/structured-data.tsx
export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SyntaxLeap",
    url: "https://syntaxleap.info",
    logo: "https://syntaxleap.info/logo.svg",
    description: "AI-driven digital product development agency specializing in custom web & mobile applications powered by machine learning.",
    foundingDate: "2022-01-01",
    founders: [
      { "@type": "Person", name: "Sarmad Irfan", jobTitle: "CEO" },
      { "@type": "Person", name: "Abdullah Khan", jobTitle: "CTO" },
    ],
    sameAs: [
      "https://linkedin.com/company/syntax-leap",
      "https://github.com/syntaxleap",
      "https://twitter.com/SyntaxLeap",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+92-123-4567890",
        contactType: "customer service",
        email: "hello@syntaxleap.info",
        availableLanguage: ["English"],
      }
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SyntaxLeap",
    url: "https://syntaxleap.info",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://syntaxleap.info/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://syntaxleap.info" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://syntaxleap.info/services" },
      { "@type": "ListItem", position: 3, name: "About", item: "https://syntaxleap.info/about" },
      { "@type": "ListItem", position: 4, name: "Contact", item: "https://syntaxleap.info/contact" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
    </>
  );
}