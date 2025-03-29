
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
    answer: "SpendThrone is a satirical social experiment where your rank is determined solely by how much money you spend. The more you spend, the higher your rank. It's digital aristocracy where your wallet determines your status - like social media, but more honest about it.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How do I improve my rank?",
    answer: "Spend money. That's it. Each dollar equals one rank point. The leaderboard never resets, so your contributions are permanent. It's like buying NFTs, except you don't even get a JPEG to right-click and save.",
    category: "ranks"
  },
  {
    id: "faq-3",
    question: "What do I get for spending money?",
    answer: "Besides watching your rank improve, you unlock profile customization options, special titles, and analytics. Think of it as a battle pass, but with no actual game to play.",
    category: "benefits"
  },
  {
    id: "faq-4",
    question: "What are teams?",
    answer: "Join Red, Green, or Blue teams to compete for collective glory. Team rankings are based on total member spending. Choose wisely, or don't - it's purely cosmetic with absolutely no functional impact, much like expensive profile frames on other platforms.",
    category: "teams"
  },
  {
    id: "faq-5",
    question: "Can I withdraw my money later?",
    answer: "No! This is a royal competition of excess, not a sensible investment. All contributions are non-refundable. Think of it as buying a coffee, except instead of a coffee, you get a number on a leaderboard.",
    category: "payment"
  },
  {
    id: "faq-6",
    question: "How secure is my data?",
    answer: "We take security seriously. Your data is protected with industry-standard encryption and security protocols. We like to joke about 'encryption moats and authentication drawbridges,' but our actual security measures are thoroughly modern and robust. Your sensitive information is genuinely secure.",
    category: "security"
  },
  {
    id: "faq-7",
    question: "Is this like buying NFTs?",
    answer: "It's more honest than NFTs. When you spend money here, you know exactly what you're getting: absolutely nothing of tangible value except digital status. No promises of 'future utility' or 'community access' - just pure, unadulterated vanity. At least we're upfront about it!",
    category: "general"
  },
  {
    id: "faq-8",
    question: "Do you have a blockchain/token/DAO?",
    answer: "No, we've cut out the middleman! You give us money directly, and we give you a higher number on a centralized database. It's blockchain without the transaction fees or environmental damage!",
    category: "crypto"
  },
  {
    id: "faq-9",
    question: "What happens if I become the top spender?",
    answer: "You'll be crowned the reigning monarch of financially questionable decisions! Your profile will be featured prominently, your name immortalized, and you'll receive our most exclusive customizations. Plus, you'll get space to promote whatever you want - even your collection of digital pet rocks.",
    category: "ranks"
  },
  {
    id: "faq-10",
    question: "Is this whole website satire?",
    answer: "Yes and no. The concept is satirical - we're poking fun at digital status symbols and pay-to-win mechanics. But the platform itself is real, the ranks are real, and the money you spend is definitely real. Think of it as performance art where you're both the audience and the exhibit.",
    category: "general"
  }
];

export default faqItems;
