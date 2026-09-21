import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Résumé | ${profileData.fullName}`,
  description: `${profileData.fullName} — ${profileData.displayTitle}`,
};

export default function ResumePage() {
  redirect(profileData.resumeUrl);
}
