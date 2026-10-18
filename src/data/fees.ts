export interface FeePrice {
  naira: string;
  usd: string;
}

export interface FeeCategory {
  category: string;
  earlyBird: FeePrice;
  standard: FeePrice;
  notes?: string;
}

export interface CertificateOption {
  title: string;
  price: FeePrice;
  description: string;
}

export interface FeeData {
  categories: FeeCategory[];
  notes: string[];
  certificateOptions: CertificateOption[];
}

export const registrationFees: FeeCategory[] = [
  {
    category: "Local Presenters",
    earlyBird: { naira: "₦50,000", usd: "$100" },
    standard: { naira: "₦60,000", usd: "$120" },
    notes: "Applies to Nigerian academic and industry authors presenting accepted papers.",
  },
  {
    category: "International Presenters",
    earlyBird: { naira: "₦90,000", usd: "$150" },
    standard: { naira: "₦120,000", usd: "$200" },
    notes: "Applies to international authors presenting accepted papers.",
  },
  {
    category: "Local Participants / Non-Presenters",
    earlyBird: { naira: "₦30,000", usd: "$60" },
    standard: { naira: "₦40,000", usd: "$80" },
    notes: "Covers conference materials, sessions, and tea/lunch breaks.",
  },
  {
    category: "International Participants / Non-Presenters",
    earlyBird: { naira: "₦60,000", usd: "$100" },
    standard: { naira: "₦75,000", usd: "$120" },
    notes: "Covers full conference participation for non-presenting attendees.",
  },
  {
    category: "Local Students (Presenters/Attendees)",
    earlyBird: { naira: "₦20,000", usd: "$40" },
    standard: { naira: "₦25,000", usd: "$50" },
    notes: "Valid student ID required at registration.",
  },
  {
    category: "International Students",
    earlyBird: { naira: "₦48,000", usd: "$80" },
    standard: { naira: "₦60,000", usd: "$100" },
    notes: "Valid student ID required at registration.",
  },
];

export const feeNotes: string[] = [
  "Early Bird registration rates apply on or before 30th September 2026.",
  "Standard registration rates apply from 1st October 2026 to 31st October 2026.",
  "Registration fees cover admission to all technical sessions, conference kit, tea/coffee breaks, and conference lunches.",
  "At least one author per accepted paper must register at the presenter rate for the paper to be included in the proceedings.",
];

export const certificateOptions: CertificateOption[] = [
  {
    title: "Hardcopy Printed Certificate",
    price: { naira: "₦5,000", usd: "$10" },
    description: "Optional official printed certificate issued at the conference desk or mailed upon request.",
  },
  {
    title: "Digital Certificate of Participation / Presentation",
    price: { naira: "Included", usd: "Included" },
    description: "Complimentary digital PDF certificate provided to all registered participants and authors.",
  },
];

export const feeDetails: FeeData = {
  categories: registrationFees,
  notes: feeNotes,
  certificateOptions,
};
