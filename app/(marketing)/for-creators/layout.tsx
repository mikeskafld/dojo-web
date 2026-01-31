import type { Metadata } from "next"
import { getURL } from "@/lib/utils"

const baseUrl = getURL()

export const metadata: Metadata = {
  title: "For Creators - Turn Your Expertise Into Scalable Income",
  description:
    "Join Dojo as a creator. Get 70% revenue share, AI-powered course creation, reach 10K+ learners through our feed, and track your impact with real-time analytics.",
  keywords: [
    "creator platform",
    "monetize expertise",
    "online course creation",
    "AI course builder",
    "creator economy",
    "passive income",
    "content monetization",
  ],
  openGraph: {
    title: "For Creators - Turn Your Expertise Into Scalable Income | Dojo",
    description:
      "Join Dojo as a creator. Get 70% revenue share, AI-powered course creation, reach 10K+ learners through our feed.",
    url: `${baseUrl}for-creators`,
    images: [
      {
        url: `${baseUrl}og?title=${encodeURIComponent("For Creators - Turn Your Expertise Into Scalable Income")}`,
        width: 1200,
        height: 630,
        alt: "Dojo for Creators",
      },
    ],
  },
  twitter: {
    title: "For Creators - Turn Your Expertise Into Scalable Income | Dojo",
    description:
      "Join Dojo as a creator. Get 70% revenue share, AI-powered course creation, reach 10K+ learners.",
    images: [
      `${baseUrl}og?title=${encodeURIComponent("For Creators - Turn Your Expertise Into Scalable Income")}`,
    ],
  },
}

export default function ForCreatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
