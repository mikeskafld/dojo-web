import type { Metadata } from "next"
import Script from "next/script"

import { MarketingFooter } from "@/app/(marketing)/marketing-footer"
import { SiteHeader } from "@/app/(marketing)/marketing-header"
import { SmoothScroll } from "@/components/smooth-scroll"
import { getURL } from "@/lib/utils"

const baseUrl = getURL()

export const metadata: Metadata = {
  title: "Dojo - Master Any Skill",
  description:
    "The first marketplace powered by cognitive scaffolding. Turn your expertise into income or master any skill in minutes a day.",
  openGraph: {
    title: "Dojo - Master Any Skill",
    description:
      "The first marketplace powered by cognitive scaffolding. Turn your expertise into income or master any skill in minutes a day.",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}og?title=${encodeURIComponent("Dojo - Master Any Skill")}`,
        width: 1200,
        height: 630,
        alt: "Dojo - Master Any Skill",
      },
    ],
  },
  twitter: {
    title: "Dojo - Master Any Skill",
    description:
      "The first marketplace powered by cognitive scaffolding. Turn your expertise into income or master any skill in minutes a day.",
    images: [
      `${baseUrl}og?title=${encodeURIComponent("Dojo - Master Any Skill")}`,
    ],
  },
}

// Structured data for Organization and WebSite
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dojo",
  url: baseUrl,
  logo: `${baseUrl}logo.png`,
  description:
    "The first marketplace powered by cognitive scaffolding. Turn your expertise into income or master any skill in minutes a day.",
  sameAs: [
    "https://twitter.com/joindojo",
    "https://linkedin.com/company/joindojo",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@joindojo.co",
    contactType: "customer support",
  },
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dojo",
  url: baseUrl,
  description:
    "The first marketplace powered by cognitive scaffolding. Turn your expertise into income or master any skill in minutes a day.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="dojo min-h-screen bg-background">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <SmoothScroll />
      <SiteHeader />
      <div className="container mx-auto max-w-7xl pt-1 md:pt-1 px-1">
        {children}
        <MarketingFooter />
      </div>
    </main>
  )
}
