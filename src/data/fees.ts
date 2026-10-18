export interface FeeCategory {
  category: string;
  earlyBird: string;
  regular: string;
}

export const registrationFees: FeeCategory[] = [
  {
    category: "Academic / Faculty",
    earlyBird: "$250",
    regular: "$350",
  },
  {
    category: "Student Presenter",
    earlyBird: "$150",
    regular: "$200",
  },
  {
    category: "Industry Delegate",
    earlyBird: "$400",
    regular: "$500",
  },
  {
    category: "Virtual Listener",
    earlyBird: "$80",
    regular: "$100",
  },
];
