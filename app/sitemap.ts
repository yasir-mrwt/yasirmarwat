import type { MetadataRoute } from "next";
import { profileData } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profileData.socials.website,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${profileData.socials.website}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
