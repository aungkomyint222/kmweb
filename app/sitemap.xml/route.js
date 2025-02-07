export async function GET() {
    const baseUrl = "https://kmwebdesign.netlify.app"; // Change this to your actual domain
  
    // List all your static pages manually
    const pages = [
      "/",
      "/about",
      "/services",
      "/contact",
     
    ];
  
    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }

  