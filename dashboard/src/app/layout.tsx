import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#10131a" },
    { media: "(prefers-color-scheme: light)", color: "#10131a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Luminal Pro — Analytics Dashboard",
    template: "%s | Luminal Pro",
  },
  description:
    "A premium analytics dashboard with real-time insights, revenue tracking, user metrics, and performance analytics. Powered by the Luminous Obsidian design system with glassmorphism and dark theme.",
  keywords: [
    "analytics dashboard",
    "real-time analytics",
    "revenue tracking",
    "KPI metrics",
    "data visualization",
    "dark theme dashboard",
    "admin panel",
    "business intelligence",
    "Next.js dashboard",
    "React dashboard",
  ],
  authors: [{ name: "YAGNI Infotech" }],
  creator: "YAGNI Infotech",
  publisher: "YAGNI Infotech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luminal Pro",
    title: "Luminal Pro — Premium Analytics Dashboard",
    description:
      "Real-time analytics dashboard with revenue tracking, user metrics, traffic insights, and transaction management. Built with Next.js and the Luminous Obsidian design system.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luminal Pro Analytics Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminal Pro — Premium Analytics Dashboard",
    description:
      "Real-time analytics dashboard with glassmorphism dark theme, interactive charts, and KPI tracking.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Luminal Pro",
  description:
    "A premium analytics dashboard with real-time insights, revenue tracking, and performance metrics.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "YAGNI Infotech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
