import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import { AppProvider } from "@/components/providers/app-provider";
import { personSchema, websiteSchema } from "@/data/schema";
import { siteConfig } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Chinmaya Kumar Das | AI Engineer • Full Stack Developer",
    template: "%s | Chinmaya Kumar Das",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  referrer: "origin-when-cross-origin",

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  category: "Technology",

  keywords: [
    "Chinmaya Kumar Das",
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Product Engineer",
    "Frontend Developer",
    "Web Developer",
    "Creative Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "GSAP",
    "Motion",
    "React Three Fiber",
    "Three.js",
    "Node.js",
    "REST API",
    "Portfolio",
    "Freelancer",
    "Technical Consultant",
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",

    locale: siteConfig.locale,

    url: siteConfig.url,

    siteName: siteConfig.name,

    title:
      "Chinmaya Kumar Das | AI Engineer • Full Stack Developer • Product Engineer",

    description:
      "Building AI-powered applications, scalable web platforms, automation systems, and modern digital experiences.",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    creator: siteConfig.twitter,

    title:
      "Chinmaya Kumar Das | AI Engineer • Full Stack Developer • Product Engineer",

    description:
      "AI Engineer • Full Stack Developer • Product Engineer",

    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleTagManager gtmId="GTM-KRK7ZQZC" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}