
import React from 'react';
import { FAQItem } from '@/types/faq';

// Sample FAQ items
export const faqItems: FAQItem[] = [
  {
    id: "what-is-spendthrone",
    question: "What is SpendThrone?",
    answer: "SpendThrone is a satirical social platform that allows users to compete for status by spending money. It's a commentary on digital status symbols and conspicuous consumption in modern society.",
    category: "general",
    tags: ["about", "concept"]
  },
  {
    id: "how-ranks-work",
    question: "How do ranks work?",
    answer: "Ranks are determined by how much money you've spent on the platform. Higher spending leads to higher ranks. It's a straightforward reflection of financial commitment.",
    category: "ranks",
    tags: ["ranking", "status"]
  },
  {
    id: "what-are-mockeries",
    question: "What are mockeries?",
    answer: "Mockeries are interactive actions you can take to playfully tease other users. They range from throwing virtual eggs to bestowing crowns, each with different status implications.",
    category: "features",
    tags: ["interaction", "social"]
  },
  {
    id: "teams-explained",
    question: "How do teams work?",
    answer: "Teams allow users to pool their spending power and achieve collective status. Team members can collaborate on mockeries and enjoy shared benefits from their combined expenditures.",
    category: "teams",
    tags: ["collaboration", "groups"]
  },
  {
    id: "refund-policy",
    question: "What is your refund policy?",
    answer: "All purchases are final. Since the entire premise is spending money for status, refunds would defeat the purpose. Please spend responsibly!",
    category: "payment",
    tags: ["refunds", "policy"]
  }
];

export default faqItems;
