// next-sitemap.js

module.exports = {
  siteUrl: 'https://kmwebdesign.netlify.app',
  generateRobotsTxt: true,  // Optional: Automatically generates robots.txt
  changefreq: 'monthly',
  priority: 0.8,
  sitemapSize: 50000, // Set a very high number to avoid splitting into multiple files
  additionalPaths: async (config) => [
    '/about',
    '/services',
    '/contact',
    // Add any other static paths
  ].map((path) => ({
    loc: `https://kmwebdesign.netlify.app${path}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  })),
  transform: async (config, path) => {
    return {
      loc: `https://kmwebdesign.netlify.app${path}`, // Full URL for each path
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    };
  },
};
