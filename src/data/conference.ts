export interface KeyFacts {
  dates: string;
  venue: string;
  format: string;
}

export interface ConferenceData {
  title: string;
  fullName: string;
  shortTitle: string;
  year: string;
  theme: string;
  fullThemeStatement: string;
  organizedBy: string;
  keyFacts: KeyFacts;
  location: string;
  dates: string;
  description: string;
  goalsAndContext: string[];
}

export const conferenceDetails: ConferenceData = {
  title: "1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026)",
  fullName: "1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026)",
  shortTitle: "AMCWU 2026",
  year: "2026",
  theme: "Harnessing Emerging Technologies for Green Economy Transition and Sustainable Development in Africa",
  fullThemeStatement:
    "The 1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026) brings together global academics, researchers, industry pioneers, and policymakers to showcase innovative technological solutions, foster interdisciplinary dialogue, and accelerate Africa's transition toward a sustainable green economy.",
  organizedBy: "Wigwe University",
  keyFacts: {
    dates: "18th–19th November 2026",
    venue: "Main Auditorium, Wigwe University, Isiokpo, Rivers State, Nigeria",
    format: "Hybrid",
  },
  location: "Main Auditorium, Wigwe University, Isiokpo, Rivers State, Nigeria & Virtual",
  dates: "18th–19th November 2026",
  description:
    "Harnessing Emerging Technologies for Green Economy Transition and Sustainable Development in Africa. Hosted by Wigwe University, Isiokpo, Rivers State, Nigeria.",
  goalsAndContext: [
    "Foster interdisciplinary research and international collaboration across green economy, emerging technologies, and sustainable development.",
    "Bridge academic research with practical industry and policy implementations across Sub-Saharan Africa.",
    "Provide a platform for showcasing cutting-edge technological innovations, renewable energy systems, climate-smart agriculture, and circular economy solutions.",
    "Empower African researchers, educators, and young scholars to address critical environmental and economic challenges.",
  ],
};
