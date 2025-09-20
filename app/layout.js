import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// Production-ready metadata
export const metadata = {
  title: {
    template: "%s | JustFind",
    default: "JustFind - Find What You Need, When You Need It",
  },
  description: "Discover local businesses, services, and everything you need in your area with JustFind. Your comprehensive local directory for finding the best businesses near you.",
  keywords: ["local business", "directory", "find services", "local search", "business finder"],
  authors: [{ name: "JustFind Team" }],
  creator: "JustFind",
  publisher: "JustFind",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName: "JustFind",
    title: "JustFind - Find What You Need, When You Need It",
    description: "Discover local businesses, services, and everything you need in your area with JustFind.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JustFind - Local Business Directory",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "JustFind - Find What You Need, When You Need It",
    description: "Discover local businesses, services, and everything you need in your area with JustFind.",
    images: ["/og-image.jpg"],
    creator: "@justfind",
  },

  // Additional meta tags
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

  // Verification
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },

  // Additional
  category: "business",
  classification: "Business Directory",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E30613" },
    { media: "(prefers-color-scheme: dark)", color: "#E30613" },
  ],

  // Manifest
  manifest: "/manifest.json",

  // App specific
  applicationName: "JustFind",
  appleWebApp: {
    capable: true,
    title: "JustFind",
    statusBarStyle: "default",
  },

  // Format detection
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },

  // Other
  generator: "Next.js",
};

// Viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E30613" },
    { media: "(prefers-color-scheme: dark)", color: "#E30613" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Prefetch DNS for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="antialiased font-sans">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="app-root" className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>

        {/* Performance monitoring script placeholder */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Add your analytics scripts here */}
            {/* Google Analytics, Google Tag Manager, etc. */}
          </>
        )}
      </body>
    </html>
  );
}
