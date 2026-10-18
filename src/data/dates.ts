export interface ImportantDate {
  id: string;
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
    description: "Online registration opens for presenters and attendees.",
  },
  {
    id: "abstract-submission-deadline",
    event: "Abstract Submission Deadline",
    date: "31st August 2026",
    description: "Deadline for submitting paper and presentation abstracts.",
  },
  {
    id: "notification-of-acceptance",
    event: "Notification of Acceptance",
    date: "15th September 2026",
    description: "Notifications issued to authors of accepted abstracts.",
  },
  {
    id: "early-bird-deadline",
    event: "Early Bird Registration Deadline",
    date: "30th September 2026",
    description: "Discounted registration deadline for early registrants.",
  },
  {
    id: "closing-date-registration",
    event: "Closing Date of Registration",
    date: "31st October 2026",
    description: "Final registration deadline for all conference participants.",
  },
  {
    id: "post-conference-proceedings",
    event: "Post-Conference Proceedings Submission",
    date: "15th December 2026",
    description: "Deadline for submitting full camera-ready papers for proceedings.",
  },
  {
    id: "proceedings-publication",
    event: "Proceedings Publication",
    date: "31st January 2027",
    description: "Official publication date of conference proceedings.",
  },
];
