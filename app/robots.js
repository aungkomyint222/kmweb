

  export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://kmwebdesign.netlify.com/sitemap.xml',
    }
  }