
import { ReactNode } from 'react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  icon?: ReactNode;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is SpendThrone?",
    answer: "SpendThrone is a satirical social experiment where your rank is determined solely by how much money you spend. The more you spend, the higher your rank. It's a digital aristocracy where your wallet determines your status.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How do I improve my rank?",
    answer: "Simple! Just spend more money. Each dollar spent equals one rank point. The leaderboard never resets, so your contributions are permanent.",
    category: "ranks"
  },
  {
    id: "faq-3",
    question: "What do I get for spending money?",
    answer: "Besides the immense satisfaction of watching your rank improve, you'll unlock various profile customization options, special titles, and the ability to view detailed analytics. The higher your tier, the more features you unlock.",
    category: "benefits"
  },
  {
    id: "faq-4",
    question: "What are teams?",
    answer: "You can join one of three teams: Red, Green, or Blue. Teams compete for collective glory, with team rankings based on the total amount spent by all team members. Choose wisely!",
    category: "teams"
  },
  {
    id: "faq-5",
    question: "Can I withdraw my money later?",
    answer: "Of course not! This is a royal competition of excess, not a sensible investment. All contributions are non-refundable, fueling the eternal aristocratic hierarchy.",
    category: "payment"
  }
];

export default faqItems;
