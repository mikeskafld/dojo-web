import type { Metadata } from "next"
import { getURL } from "@/lib/utils"

const baseUrl = getURL()

export const metadata: Metadata = {
  title: "About - Building the Future of Learning",
  description:
    "Meet the team behind Dojo. Learn about our mission to democratize education through cognitive science, AI technology, and creator economics. Founded by Jack Modesett.",
  keywords: [
    "about dojo",
    "dojo team",
    "Jack Modesett",
    "learning platform",
    "education technology",
    "edtech startup",
  ],
  openGraph: {
    title: "About - Building the Future of Learning | Dojo",
    description:
      "Meet the team behind Dojo. Learn about our mission to democratize education through cognitive science, AI technology, and creator economics.",
    url: `${baseUrl}about`,
    images: [
      {
        url: `${baseUrl}og?title=${encodeURIComponent("About Dojo - Building the Future of Learning")}`,
        width: 1200,
        height: 630,
        alt: "About Dojo",
      },
    ],
  },
  twitter: {
    title: "About - Building the Future of Learning | Dojo",
    description:
      "Meet the team behind Dojo. Learn about our mission to democratize education through cognitive science, AI technology, and creator economics.",
    images: [
      `${baseUrl}og?title=${encodeURIComponent("About Dojo - Building the Future of Learning")}`,
    ],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
