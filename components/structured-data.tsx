/**
 * Injects JSON-LD structured data (Organization, WebSite, Breadcrumbs)
 * into the <head> for stronger SEO and rich-result eligibility.
 */
export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SyntaxLeap",
    url: "https://syntaxleap.info",
    logo: "https://syntaxleap.info/logo.svg",
    description:
      "Leading AI-driven digital product development agency specialising in custom web & mobile applications powered by machine learning.",
    foundingDate: "2022-01-01",
    founders: [
      { "@type": "Person", name: "Sarmad Irfan", jobTitle: "CEO" },
      { "@type": "Person", name: "Abdullah Khan", jobTitle: "CTO" },
    ],
    sameAs: [
      "https://linkedin.com/company/syntax-leap/",
      "https://github.com/syntaxleap",
      "https://twitter.com/syntaxleap",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-8900",
      contactType: "customer service",
      email: "hello@syntaxleap.info",
      availableLanguage: "English",
    },
  }

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SyntaxLeap",
    url: "https://syntaxleap.info",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://syntaxleap.info/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://syntaxleap.info" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://syntaxleap.info/services" },
      { "@type": "ListItem", position: 3, name: "About", item: "https://syntaxleap.info/about" },
      { "@type": "ListItem", position: 4, name: "Contact", item: "https://syntaxleap.info/contact" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  )
}
