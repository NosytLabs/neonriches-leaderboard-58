
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string; // Make category optional
  icon?: React.ReactNode; // Make icon optional
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is SpendThrone?",
    answer: "SpendThrone is a satirical platform where your rank is determined solely by how much money you spend. The more you spend, the higher your rank on our leaderboard."
  },
  {
    id: "faq-2",
    question: "Is this a real service?",
    answer: "Yes! SpendThrone is a functioning platform, albeit one that satirizes digital status economies. Your contributions are real, and your rank truly reflects your spending."
  },
  {
    id: "faq-3",
    question: "What do I get for my money?",
    answer: "You receive a higher position on our leaderboard, which is persistent and never resets. You also gain access to profile customization options based on your spending tier."
  },
  {
    id: "faq-4",
    question: "Can I get a refund?",
    answer: "No. SpendThrone operates on a no-refund policy. All contributions are permanent, much like purchases in many digital platforms."
  },
  {
    id: "faq-5",
    question: "How do teams work?",
    answer: "You can join one of three teams: Red, Green, or Blue. Your spending contributes to your team's total score, and teams compete for dominance on the team leaderboard."
  }
];
