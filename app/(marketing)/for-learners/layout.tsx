import type { Metadata } from "next"
import { getURL } from "@/lib/utils"

const baseUrl = getURL()

export const metadata: Metadata = {
  title: "For Learners - Master Any Skill, One Swipe at a Time",
  description:
    "Learn from real practitioners with bite-sized micro-lessons. Peer-reviewed quality, free path to mastery, and track your progress. Join the Dojo waitlist today.",
  keywords: [
    "micro-learning",
    "skill development",
    "bite-sized lessons",
    "learn new skills",
    "online learning",
    "educational platform",
    "self improvement",
  ],
  openGraph: {
    title: "For Learners - Master Any Skill, One Swipe at a Time | Dojo",
    description:
      "Learn from real practitioners with bite-sized micro-lessons. Peer-reviewed quality, free path to mastery.",
    url: `${baseUrl}for-learners`,
    images: [
      {
        url: `${baseUrl}og?title=${encodeURIComponent("For Learners - Master Any Skill in Minutes a Day")}`,
        width: 1200,
        height: 630,
        alt: "Dojo for Learners",
      },
    ],
  },
  twitter: {
    title: "For Learners - Master Any Skill, One Swipe at a Time | Dojo",
    description:
      "Learn from real practitioners with bite-sized micro-lessons. Peer-reviewed quality, free path to mastery.",
    images: [
      `${baseUrl}og?title=${encodeURIComponent("For Learners - Master Any Skill in Minutes a Day")}`,
    ],
  },
}

export default function ForLearnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
