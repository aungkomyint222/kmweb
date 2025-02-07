import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'KM Web Design - Bangkok',
  description: 'KM Web Design offers professional web development, SEO optimization, and custom WordPress design services to help your business grow online.',
  openGraph: {
    title: 'KM Web Design - Bangkok',
    description: 'KM Web Design offers professional web development in Bangkok, SEO optimization, and custom WordPress design services.',
    url: 'https://kmwebdesign.netlify.com', // Update with your live site URL
    siteName: 'KM Web Design',
    locale: 'en_US',
    type: 'website',
    //image: 'https://kmwebdesign.netlify.com/images/og-image.jpg', // Update with an image URL for social sharing (make sure the image exists)
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KM Web Design - Bangkok ',
    description: 'KM Web Design offers professional web development and custom WordPress design services.',
   // image: 'https://kmwebdesign.netlify.com/images/og-image.jpg', // Update with the image URL
  },
  
  verification: {
    google: "VWwnIh938SNj8xJpvYciJmAuO2amGInxRW-GiLj93zM",
  },
  // Add additional metadata as needed
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <meta name="description" content="KM Web Design Bangkok offers professional web development, SEO optimization, and custom WordPress design services to help your business grow online." />
        <meta name="keywords" content="web design, WordPress,Bangkok, SEO, digital marketing, web development" />
        <meta name="robots" content="index, follow" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}