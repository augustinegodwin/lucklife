import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import localFont from 'next/font/local';
import Footer from "./components/Sections/footer";

const recoleta = localFont({
  src: '../public/fonts/recoleta/Recoleta.otf',
  display: 'swap',
  variable: "--font-recoleta",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Highly optimized SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Luck Life | Premium Lifestyle & Wellness Products",
    template: "%s | Luck Life"
  },
  description: "Discover Luck Life's exclusive collection of premium products crafted for your elevated lifestyle and wellness needs. Shop our curated selection today.",
  keywords: [
    // Brand Variations
    "Luck Life", 
    "Luck Life Products", 
    "LuckLife", 
    "LuckLife Products",
    
    // Core E-Commerce & Retail
    "online shopping", 
    "buy premium products online", 
    "luxury essentials", 
    "high-quality lifestyle products",
    
    // Lifestyle & Wellness (Highly likely fit for "Luck Life")
    "holistic wellness", 
    "healthy lifestyle essentials", 
    "daily wellness products", 
    "premium self-care", 
    "mindful living items",
    
    // Home, Comfort & Vitality
    "luxury home essentials", 
    "modern lifestyle brands", 
    "organic wellness solutions", 
    "premium health supplements", // Add if selling vitamins/herbs
    "eco-friendly luxury goods"   // Add if focus is sustainable
  ],
  authors: [{ name: "Luck Life Team" }],
  metadataBase: new URL("https://lucklifeproducts.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luck Life | Premium Lifestyle & Wellness Products",
    description: "Discover Luck Life's exclusive collection of premium products crafted for your elevated lifestyle and wellness needs.",
    url: "https://lucklifeproducts.com",
    siteName: "Luck Life",
    images: [
      {
        url: "/baackground.png", // Place a 1200x630px image in your /public folder
        width: 1200,
        height: 630,
        alt: "Luck Life Premium Products Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luck Life | Premium Lifestyle & Wellness Products",
    description: "Discover Luck Life's exclusive collection of premium products crafted for your elevated lifestyle and wellness needs.",
    images: ["/baackground.png"], // Reuses the same high-quality preview image
    // creator: "@your_twitter_handle", // Optional: add your X handle here
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Recommended for premium iOS bookmarking feel
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${recoleta.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}