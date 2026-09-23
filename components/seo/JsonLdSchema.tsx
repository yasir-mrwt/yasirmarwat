import { profileData } from "@/data/profile";
import { projects } from "@/data/projects";
import { SITE_HOME_URL, SITE_URL } from "@/data/site";

export function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profile-page`,
    url: SITE_HOME_URL,
    name: `${profileData.fullName} — ${profileData.displayTitle}`,
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: project.links.live,
      image: `${SITE_URL}${project.images.web}`,
    })),
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profileData.fullName,
      alternateName: profileData.alternateName,
      jobTitle: profileData.title,
      address: {
        "@type": "PostalAddress",
        addressLocality: profileData.locality,
        addressCountry: profileData.countryCode,
      },
      url: SITE_HOME_URL,
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
