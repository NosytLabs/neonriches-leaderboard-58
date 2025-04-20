
import React from 'react';
import { Crown, Trophy, Gift, DollarSign, Shield, Users, MessageSquare, Heart } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  category?: string;
  icon?: React.ReactNode;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is SpendThrone?',
    answer: 'SpendThrone is a satirical social platform that explores the dynamics of wealth, status, and digital prestige through gamification.',
    category: 'general',
    icon: <Crown size={16} />
  },
  {
    id: '2',
    question: 'How do I rank up on the leaderboard?',
    answer: 'Your rank is determined by the total amount deposited. Every dollar equals one ranking point.',
    category: 'rankings',
    icon: <Trophy size={16} />
  },
  {
    id: '3',
    question: 'What are Noble Houses (teams)?',
    answer: 'Noble Houses are teams you can join to compete collectively. Your spending contributes to your team\'s overall ranking.',
    category: 'teams',
    icon: <Users size={16} />
  },
  {
    id: '4',
    question: 'How do I purchase profile enhancements?',
    answer: 'Profile enhancements can be purchased in the Royal Boutique using your wallet balance.',
    category: 'cosmetics',
    icon: <Gift size={16} />
  },
  {
    id: '5',
    question: 'Is my payment information secure?',
    answer: 'Yes, we use industry-standard encryption and never store your full payment details on our servers.',
    category: 'payments',
    icon: <Shield size={16} />
  },
  {
    id: '6',
    question: 'How does mockery work?',
    answer: 'Mockery allows you to apply visual effects to other users\' profiles for a limited time as a form of playful teasing.',
    category: 'mockery',
    icon: <MessageSquare size={16} />
  },
  {
    id: '7',
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, PayPal, and selected cryptocurrencies.',
    category: 'payments',
    icon: <DollarSign size={16} />
  },
  {
    id: '8',
    question: 'Is SpendThrone a real social network?',
    answer: 'SpendThrone is a satirical experiment exploring the dynamics of social status through the lens of wealth. All "spending" is purely for entertainment purposes.',
    category: 'general',
    icon: <Heart size={16} />
  }
];
