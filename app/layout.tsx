import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title:
    "Full-Stack Developer — Backend, TypeScript, APIs & Production Systems",
  description:
    "Backend-leaning full-stack engineering portfolio focused on typed APIs, validation, reliability, testing, deployment, performance, and thoughtful product UX.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Full-Stack Developer — Backend & Production Systems",
    description:
      "From interface to infrastructure: TypeScript, Node.js, APIs, reliability, testing, and deployment.",
    siteName: "Engineering Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer — Backend & Production Systems",
    description:
      "From interface to infrastructure: TypeScript, Node.js, APIs, reliability, testing, and deployment.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        url: siteUrl.toString(),
        description: "Backend-leaning full-stack engineering portfolio",
      },
      {
        "@type": "Person",
        jobTitle: "Backend-leaning full-stack engineer",
        knowsAbout: [
          "TypeScript",
          "Node.js",
          "REST APIs",
          "Validation",
          "Redis",
          "Testing",
          "Docker",
          "CI/CD",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
