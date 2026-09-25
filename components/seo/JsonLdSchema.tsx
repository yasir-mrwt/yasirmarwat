import { profileData } from "@/data/profile";
import { projects } from "@/data/projects";
import { SITE_HOME_URL, SITE_URL } from "@/data/site";

export function JsonLdSchema() {
  const projectEntities = projects.map((project) => ({
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#project-${project.slug}`,
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: "Web",
    description: project.summary,
    url: project.links.live,
    author: { "@id": `${SITE_URL}/#person` },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_HOME_URL,
        name: `${profileData.fullName} Portfolio`,
        description: profileData.aiSummary,
        author: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile-page`,
        url: SITE_HOME_URL,
        name: `${profileData.fullName} — ${profileData.displayTitle}`,
        description: profileData.aiSummary,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
        hasPart: projectEntities.map((project) => ({
          "@id": project["@id"],
        })),
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: profileData.fullName,
        givenName: "Yasir",
        familyName: "Marwat",
        additionalName: "Muhammad",
        alternateName: profileData.alternateNames,
        jobTitle: profileData.title,
        description: profileData.aiSummary,
        url: SITE_HOME_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: profileData.locality,
          addressCountry: profileData.countryCode,
        },
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
          "BullMQ",
          "Docker",
          "CI/CD",
        ],
      },
      ...projectEntities,
    ],
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
