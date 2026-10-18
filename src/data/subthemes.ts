export interface Subtheme {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export const subthemes: Subtheme[] = [
  {
    id: "tech-edu",
    title: "Technology & Educational Innovation",
    description: "Integrating AI, digital platforms, and immersive technology in higher education.",
    topics: ["Artificial Intelligence in Education", "Distance & Hybrid Learning", "Educational Software Solutions"],
  },
  {
    id: "science-stem",
    title: "Science, Technology, Engineering & Math (STEM)",
    description: "Advances in physical, biological, and computational scientific domains.",
    topics: ["Data Science & Analytics", "Sustainable Engineering", "Interdisciplinary Sciences"],
  },
  {
    id: "social-humanities",
    title: "Social Sciences & Humanities",
    description: "Exploring societal trends, policy framework, communication, and human behavior.",
    topics: ["Global Higher Education Policy", "Sociological Dynamics", "Ethics & Culture in Modern Education"],
  },
];
