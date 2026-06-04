import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Feduski — Portfolio",
  description:
    "Python developer building clean, fast web experiences with Next.js and modern tooling. Available for hire.",
  generator: "Next.js",
  applicationName: "Fede Garcia Portfolio",
  keywords: ["Fede Garcia", "Python Developer", "Next.js", "JavaScript", "Portfolio", "Back-end Developer"],
  authors: [{ name: "Fede Garcia", url: "https://feduski.dev" }],
  creator: "Fede Garcia",
  publisher: "Feduski",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://feduski.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fede Garcia — Portfolio",
    description: "Back-end developer building your next solution.",
    url: "https://feduski.dev",
    siteName: "Feduski Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Feduski - Back-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feduski — Portfolio",
    description: "Back-end developer building your next solution.",
    creator: "@feduski",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon2.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
