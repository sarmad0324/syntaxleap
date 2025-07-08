export const revalidate = 3600; // cache for 1h

const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://syntaxleap.info/</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/services</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/services/ai-web-development</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/services/mobile-apps</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/services/ui-ux-design</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/services/wordpress-ai</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/services/ar-remote-team</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/about</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://syntaxleap.info/contact</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

export function GET() {
  return new Response(SITEMAP, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
