export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  topic?: string;
  image?: string;
}

export const speakers: Speaker[] = [
  {
    id: "keynote-1",
    name: "Keynote Speakers",
    role: "To Be Announced",
    institution: "AMCWU 2026 Committee",
    topic: "Detailed announcements regarding keynote speakers will follow.",
  },
];
