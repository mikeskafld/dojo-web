import type { Metadata } from "next"
import { getURL } from "@/lib/utils"

const baseUrl = getURL()

export const metadata: Metadata = {
  title: "Pricing - Flexible Plans for Every Learner",
  description:
    "Choose the Dojo plan that fits your learning journey. Free tier available with premium options for unlimited access to micro-lessons and advanced features.",
  keywords: [
    "dojo pricing",
    "learning subscription",
    "education pricing",
    "micro-learning cost",
    "online learning plans",
  ],
  openGraph: {
    title: "Pricing - Flexible Plans for Every Learner | Dojo",
    description:
      "Choose the Dojo plan that fits your learning journey. Free tier available with premium options for unlimited access.",
    url: `${baseUrl}pricing`,
    images: [
      {
        url: `${baseUrl}og?title=${encodeURIComponent("Dojo Pricing - Flexible Plans for Every Learner")}`,
        width: 1200,
        height: 630,
        alt: "Dojo Pricing",
      },
    ],
  },
  twitter: {
    title: "Pricing - Flexible Plans for Every Learner | Dojo",
    description:
      "Choose the Dojo plan that fits your learning journey. Free tier available with premium options.",
    images: [
      `${baseUrl}og?title=${encodeURIComponent("Dojo Pricing - Flexible Plans for Every Learner")}`,
    ],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
