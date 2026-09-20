import { profileData } from "@/data/profile";

export function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${profileData.socials.website}/#profile-page`,
    url: profileData.socials.website,
    name: `${profileData.fullName} (${profileData.alias}) — ${profileData.displayTitle}`,
    mainEntity: {
      "@type": "Person",
      "@id": `${profileData.socials.website}/#person`,
      name: profileData.fullName,
      alternateName: profileData.alias,
      jobTitle: profileData.title,
      address: {
        "@type": "PostalAddress",
        addressLocality: profileData.locality,
        addressCountry: profileData.countryCode,
      },
      url: profileData.socials.website,
      sameAs: [profileData.socials.linkedin, profileData.socials.github],
      knowsAbout: [
        "Software Engineering",
        "Full-Stack Web Development",
        "Backend Architecture",
        "TypeScript",
        "Node.js",
        "Next.js",
        "Express.js",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "API Validation",
        "Rate Limiting",
        "Caching",
        "Queues and Asynchronous Work",
        "Docker",
        "CI/CD",
        "API Testing",
        "Web Application Deployment",
      ],
      description: profileData.aiSummary,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
