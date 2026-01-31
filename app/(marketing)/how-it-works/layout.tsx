import type { Metadata } from "next"
import { getURL } from "@/lib/utils"

const baseUrl = getURL()

export const metadata: Metadata = {
  title: "How It Works - The Dojo Platform",
  description:
    "Discover how Dojo transforms long-form content into bite-sized micro-lessons using AI-powered cognitive scaffolding. Learn about the Dojo Engine, creator workflow, and learner experience.",
  keywords: [
    "how dojo works",
    "cognitive scaffolding",
    "AI learning platform",
    "content transformation",
    "micro-lesson creation",
    "learning technology",
  ],
  openGraph: {
    title: "How It Works - The Dojo Platform",
    description:
      "Discover how Dojo transforms long-form content into bite-sized micro-lessons using AI-powered cognitive scaffolding.",
    url: `${baseUrl}how-it-works`,
    images: [
      {
        url: `${baseUrl}og?title=${encodeURIComponent("How It Works - The Dojo Platform")}`,
        width: 1200,
        height: 630,
        alt: "How Dojo Works",
      },
    ],
  },
  twitter: {
    title: "How It Works - The Dojo Platform",
    description:
      "Discover how Dojo transforms long-form content into bite-sized micro-lessons using AI-powered cognitive scaffolding.",
    images: [
      `${baseUrl}og?title=${encodeURIComponent("How It Works - The Dojo Platform")}`,
    ],
  },
}

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
