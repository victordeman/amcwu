export interface KeyFacts {
  dates: string;
  venue: string;
  format: string;
}

export interface ConferenceData {
  title: string;
  shortTitle: string;
  year: string;
  theme: string;
  fullThemeStatement: string;
  organizedBy: string;
  keyFacts: KeyFacts;
  goalsAndContext: string[];
}

export const conferenceDetails: ConferenceData = {
  title: "International Conference on Emerging Technologies for Green Economy Transition and Sustainable Development in Africa",
  shortTitle: "AICETSD 2026",
  year: "2026",
  theme: "Harnessing Emerging Technologies for Green Economy Transition and Sustainable Development in Africa",
  fullThemeStatement:
    "The International Conference on Emerging Technologies for Green Economy Transition and Sustainable Development in Africa brings together global experts, scholars, industry leaders, and policymakers to explore innovative technological solutions that accelerate Africa's transition to a sustainable green economy.",
  organizedBy: "Wigwe University, Isiokpo, Rivers State, Nigeria",
  keyFacts: {
    dates: "18th–19th November 2026",
    venue: "Main Auditorium, Wigwe University, Isiokpo, Rivers State, Nigeria",
    format: "Hybrid",
  },
  goalsAndContext: [
    "Promote interdisciplinary research and collaboration across technology, sustainability, and green economic development in Africa.",
    "Foster partnerships between academia, industry, research institutions, and policymakers to drive sustainable transition.",
    "Provide a platform for showcasing cutting-edge emerging technologies, green innovations, and practical case studies tailored to African contexts.",
    "Address key policy, financial, and infrastructural challenges in accelerating green growth across the continent.",
  ],
};
