import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

import { ThemeProvider } from "@/components/ui/theme-provider"

const alphaLyra = localFont({
  src: "../public/fonts/AlphaLyrae-Medium.woff2",
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://joindojo.co"),
  title: {
    default: "Dojo - Master Any Skill",
    template: "%s | Dojo",
  },
  description:
    "The first marketplace powered by cognitive scaffolding. Turn your expertise into income or master any skill in minutes a day.",
  keywords: [
    "micro-learning",
    "online courses",
    "skill development",
    "creator economy",
    "AI learning",
    "cognitive scaffolding",
    "education marketplace",
  ],
  authors: [{ name: "Dojo" }],
  creator: "Dojo",
  publisher: "Dojo",
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
    siteName: "Dojo",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@joindojo",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${geistMono.variable} ${alphaLyra.variable} antialiased  font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
