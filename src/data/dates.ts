export interface ImportantDate {
  id?: string;
  event: string;
  date: string;
  description?: string;
  isPassed?: boolean;
}

export const importantDates: ImportantDate[] = [
  {
    id: "registration-opens",
    event: "Registration Opens",
    date: "15th June 2026",
    description: "Online registration opens for presenters, participants, and students.",
    isPassed: true,
  },
  {
    id: "abstract-submission-deadline",
    event: "Abstract Submission Deadline",
    date: "31st August 2026",
    description: "Deadline for paper abstract submission.",
    isPassed: true,
  },
  {
    id: "notification-of-acceptance",
    event: "Notification of Acceptance",
    date: "15th September 2026",
    description: "Notifications issued to authors regarding abstract acceptance.",
    isPassed: true,
  },
  {
    id: "early-bird-deadline",
    event: "Early Bird Registration Deadline",
    date: "30th September 2026",
    description: "Discounted registration rates end.",
    isPassed: true,
  },
  {
    id: "closing-date-registration",
    event: "Closing Date of Registration",
    date: "31st October 2026",
    description: "Final deadline for all conference participant registrations.",
    isPassed: false,
  },
  {
    id: "conference-dates",
    event: "1st African Multidisciplinary Conference (AMCWU 2026)",
    date: "18th–19th November 2026",
    description: "Main conference event days held at Wigwe University, Isiokpo & Virtual.",
    isPassed: false,
  },
  {
    id: "post-conference-proceedings",
    event: "Post-Conference Proceedings Submission",
    date: "15th December 2026",
    description: "Camera-ready full manuscript submission deadline for proceedings.",
    isPassed: false,
  },
  {
    id: "proceedings-publication",
    event: "Proceedings Publication",
    date: "31st January 2027",
    description: "Official publication of conference proceedings.",
    isPassed: false,
  },
];
