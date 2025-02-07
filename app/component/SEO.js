import Head from 'next/head';

const SEO = ({ 
  title = 'KMWebDesign',
  description = 'KMWebDesign is a web design and development agency.',
  keywords = 'web design, web development, responsive design, SEO optimization',
  ogImage = 'https://kmwebdesign.netlify.app/og-image.jpg',
  noindex = false,
  nofollow = false
}) => {
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="google-site-verification" content="t9vpJzCd2qiV3XzW9p-X5shEmIhOfW3xYq4k" />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kmwebdesign.netlify.app" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://kmwebdesign.netlify.app" />
      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;