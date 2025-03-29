
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
    question: "What exactly is SpendThrone?",
    answer: "It's a digital hierarchy where your wallet determines your worth - like social media but without pretending otherwise. Each dollar spent equals one rank point. Think of it as the honest version of Instagram.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How do I climb the ranks?",
    answer: "Spend money. That's it. One dollar = one point. It's like buying followers, except we don't even pretend they're real people.",
    category: "ranks"
  },
  {
    id: "faq-3",
    question: "What do I get for my money?",
    answer: "A higher rank, customization options, and the ability to look down on those who've spent less. Basically, a digital version of wearing Gucci to the grocery store.",
    category: "benefits"
  },
  {
    id: "faq-4",
    question: "What's with the teams?",
    answer: "Choose Red, Green, or Blue to join the digital equivalent of high school cliques, but for adults with disposable income. Your team contribution affects the collective ranking - like a designer brand loyalty program.",
    category: "teams"
  },
  {
    id: "faq-5",
    question: "Can I get my money back?",
    answer: "No. Much like those Supreme drops you waited in line for, all sales are final. Consider it an investment in your digital social capital.",
    category: "payment"
  },
  {
    id: "faq-6",
    question: "Is my data secure?",
    answer: "Absolutely. We protect your data better than you protect your credit score. Bank-level encryption, regular security audits, and zero tolerance for breaches. We joke about everything except security.",
    category: "security"
  },
  {
    id: "faq-7",
    question: "Is this better than buying NFTs?",
    answer: "Yes, because we're honest about selling you nothing. No vague promises about 'utility' or 'community access' - just pure, unapologetic status flexing.",
    category: "general"
  },
  {
    id: "faq-8",
    question: "Do you have a blockchain/token/DAO?",
    answer: "No buzzwords, just straightforward wealth hierarchy. We've eliminated the middleman between your poor financial decisions and our profit margin.",
    category: "crypto"
  },
  {
    id: "faq-9",
    question: "What happens if I become #1?",
    answer: "You're crowned the Supreme Flexer and featured prominently. Your profile becomes a shrine to conspicuous consumption. Plus, you'll have undeniable proof you have more money than sense.",
    category: "ranks"
  },
  {
    id: "faq-10",
    question: "Is this satire or serious?",
    answer: "Yes. We're satirizing the digital status economy while simultaneously participating in it. Like how you post about consumerism being toxic from your brand new iPhone.",
    category: "general"
  }
];

export default faqItems;
