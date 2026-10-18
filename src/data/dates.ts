export interface ImportantDate {
  event: string;
  date: string;
  description?: string;
  isPassed?: boolean;
}

export const importantDates: ImportantDate[] = [
  {
    event: "Abstract Submission Deadline",
    date: "June 30, 2026",
    description: "Deadline for submitting paper abstracts",
  },
  {
    event: "Notification of Acceptance",
    date: "July 31, 2026",
    description: "Notification sent to authors regarding paper acceptance",
  },
  {
    event: "Full Paper Submission",
    date: "August 31, 2026",
    description: "Camera-ready full paper submission deadline",
  },
  {
    event: "Early Bird Registration Deadline",
    date: "August 15, 2026",
    description: "Discounted registration rate deadline",
  },
  {
    event: "Conference Dates",
    date: "October 15 - 17, 2026",
    description: "Main conference event days",
  },
];
