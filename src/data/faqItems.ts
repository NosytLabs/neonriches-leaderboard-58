
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
    answer: "SpendThrone is a satirical social experiment where your rank is determined solely by how much money you spend. The more you spend, the higher your rank. It's a digital aristocracy where your wallet determines your status - like social media, but more honest about the whole thing.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How do I improve my rank?",
    answer: "Simple! Just spend more money. Each dollar spent equals one rank point. The leaderboard never resets, so your contributions are permanent. It's like buying NFTs, except you don't even get a JPEG to right-click and save.",
    category: "ranks"
  },
  {
    id: "faq-3",
    question: "What do I get for spending money?",
    answer: "Besides the immense satisfaction of watching your rank improve, you'll unlock various profile customization options, special titles, and the ability to view detailed analytics. The higher your tier, the more features you unlock. Think of it as a battle pass, but with no actual content to unlock.",
    category: "benefits"
  },
  {
    id: "faq-4",
    question: "What are teams?",
    answer: "You can join one of three teams: Red, Green, or Blue. Teams compete for collective glory, with team rankings based on the total amount spent by all team members. Choose wisely, or don't - it's purely cosmetic and has absolutely no functional impact whatsoever, much like those profile frames you pay for on other platforms.",
    category: "teams"
  },
  {
    id: "faq-5",
    question: "Can I withdraw my money later?",
    answer: "Of course not! This is a royal competition of excess, not a sensible investment. All contributions are non-refundable, fueling the eternal aristocratic hierarchy. Think of it as buying a coffee, except instead of a coffee, you get a number on a leaderboard.",
    category: "payment"
  },
  {
    id: "faq-6",
    question: "How secure is my data?",
    answer: "Your data is protected by our state-of-the-art digital moat and encryption drawbridge system. Our security knights stand vigilant at the firewall, monitoring for any peasant hackers attempting to breach our noble database. In other words, we use standard web security, which is about as effective as a medieval castle against modern artillery.",
    category: "security"
  },
  {
    id: "faq-7",
    question: "Is this like buying NFTs?",
    answer: "Great question! It's actually more honest than buying NFTs. When you spend money here, you know exactly what you're getting: absolutely nothing of tangible value except digital status. No promises of 'future utility' or 'community access' - just pure, unadulterated vanity. At least we're upfront about it!",
    category: "general"
  },
  {
    id: "faq-8",
    question: "Do you have a blockchain/token/DAO?",
    answer: "No, we've cut out the middleman! While we could create meaningless tokens for you to buy (and we've considered it), we decided to simplify the process: you give us money directly, and we give you a higher number on a centralized database. It's blockchain without the transaction fees or environmental damage!",
    category: "crypto"
  },
  {
    id: "faq-9",
    question: "What happens if I become the top spender?",
    answer: "You'll be crowned the reigning monarch of financial questionable decisions! Your profile will be featured prominently on our home page, your name will be written in our digital scroll of legends, and you'll receive our most exclusive profile customizations. Plus, you'll get advertising space to promote whatever you want - your social media, business, or collection of digital pet rocks.",
    category: "ranks"
  },
  {
    id: "faq-10",
    question: "Is this whole website satire?",
    answer: "Yes and no. The concept is definitely satirical - we're poking fun at digital status symbols, pay-to-win mechanics, and the general absurdity of spending money for intangible social status. But the platform itself is real, the ranks are real, and the money you spend is definitely real. Think of it as performance art where you're both the audience and the exhibit.",
    category: "general"
  }
];

export default faqItems;
