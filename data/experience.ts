export type Experience = {
  title: string;
  context: string;
  period: string;
  responsibilities: string[];
  systems: string[];
  technologies: string[];
  quality: string;
  collaboration: string;
  learning: string;
};

// Add factual roles only. An empty collection is preferable to invented history.
export const experience: readonly Experience[] = [];
