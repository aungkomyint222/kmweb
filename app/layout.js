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
  title: "KMWebDesign",
  description: "KMWebDesign is a web design and development agency.",
  verification: {
    google: "t9vpJzCd4NXXfGd2qiV3XzW9p-X5shEmIhOfW3xYq4k",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
