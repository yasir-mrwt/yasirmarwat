import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { profileData } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profileData.socials.website),
  title: `${profileData.fullName} | ${profileData.displayTitle}`,
  description: profileData.aiSummary,
  keywords: [
    profileData.fullName,
    "Yasir Marwat Software Engineer",
    "Full-Stack Engineer Peshawar",
    "Backend Developer Peshawar",
    "Node.js developer portfolio",
    "Next.js full-stack portfolio",
    "TypeScript developer portfolio",
    "PostgreSQL Node.js developer",
    "Redis caching API validation portfolio",
  ],
  authors: [{ name: profileData.fullName, url: profileData.socials.website }],
  creator: profileData.fullName,
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
  alternates: { canonical: profileData.socials.website },
  openGraph: {
    type: "profile",
    url: profileData.socials.website,
    title: `${profileData.fullName} | ${profileData.displayTitle}`,
    description: profileData.aiSummary,
    siteName: `${profileData.fullName} Portfolio`,
    locale: "en_US",
    firstName: "Yasir",
    lastName: "Marwat",
    username: "yasirmarwat",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.fullName} | ${profileData.displayTitle}`,
    description: profileData.aiSummary,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0A0C0F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        {children}
        <JsonLdSchema />
      </body>
    </html>
  );
}
