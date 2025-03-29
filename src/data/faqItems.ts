
import React from 'react';
import { DollarSign, Users, Crown, Shield, Trophy, Zap, Gift, AlertTriangle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What exactly is SpendThrone?",
    answer: (
      <p>
        SpendThrone is a satirical social experiment where your rank is determined solely by how much money you spend. It's a tongue-in-cheek commentary on status-seeking behavior and digital prestige. Think of it as a leaderboard where your wallet does all the talking!
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />,
    category: "general"
  },
  {
    question: "How does the leaderboard work?",
    answer: (
      <p>
        It's beautifully simple: $1 = 1 point on the leaderboard. The more you spend, the higher you climb. No skill required whatsoever - just a functioning payment method and questionable financial priorities! Our leaderboard never resets, creating a permanent monument to conspicuous consumption.
      </p>
    ),
    icon: <Trophy className="h-4 w-4 text-royal-gold" />,
    category: "leaderboard"
  },
  {
    question: "What are the Teams about?",
    answer: (
      <p>
        Teams are our digital houses: Red (neon fire), Green (lime zap), and Blue (cool pulse). When you join a team, your spending contributes to both your personal rank AND your team's collective standing. It's like joining a sports fandom, but instead of cheering, you're spending!
      </p>
    ),
    icon: <Shield className="h-4 w-4 text-royal-gold" />,
    category: "teams"
  },
  {
    question: "What happens to the money I spend?",
    answer: (
      <p>
        Your generous contributions fund our developers' avocado toast habits and mechanical keyboard collections. We're not curing diseases - we're maintaining this bizarre social experiment and paying our hosting bills. We also invest in creating more ways for you to spend money with us. Capitalism at its finest!
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />,
    category: "money"
  },
  {
    question: "What benefits do I get from being highly ranked?",
    answer: (
      <p>
        The higher your rank, the more visible your profile becomes across the platform. Premium subscribers get enhanced profiles with RGB effects, marketing opportunities, and mockery protection. The Royal tier lets you advertise your business or personal brand to all visitors - turning your vanity spending into a potentially useful marketing channel!
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />,
    category: "benefits"
  },
  {
    question: "Is this serious or a joke?",
    answer: (
      <p>
        Yes! It's both a functioning platform where you can actually spend money for rank AND a satirical commentary on digital status. We've created a working parody of how social hierarchies form online, where spending often equals influence. Our tongue is firmly in cheek, but our payment processing is completely serious.
      </p>
    ),
    icon: <Zap className="h-4 w-4 text-royal-gold" />,
    category: "general"
  },
  {
    question: "What are Mockery features?",
    answer: (
      <p>
        Our Mockery features let you pay to apply hilarious visual effects to other users' profiles - like throwing digital tomatoes or putting someone in virtual stocks. It's social media shade-throwing, but monetized! All mockery is purely cosmetic and temporary, designed for laughs rather than actual harassment.
      </p>
    ),
    icon: <Users className="h-4 w-4 text-royal-gold" />,
    category: "mockery"
  },
  {
    question: "Can I get a refund if I regret my spending?",
    answer: (
      <p>
        Absolutely not! All payments to SpendThrone are final. Just like those impulse purchases sitting unused in your closet, your digital status is non-refundable. The difference is we're completely upfront about the worthlessness of what you're buying - it's literally just a number on a screen!
      </p>
    ),
    icon: <AlertTriangle className="h-4 w-4 text-royal-gold" />,
    category: "money"
  },
  {
    question: "How do I maximize my marketing reach?",
    answer: (
      <p>
        Royal tier members ($30/month) get premium advertising space visible to all users. Your profile becomes a billboard that others must view simply because you outspent them. We provide analytics on views and clicks so you can track your ROI. It's like buying a Times Square billboard, but for a much more specific audience of status-conscious digital citizens!
      </p>
    ),
    icon: <Gift className="h-4 w-4 text-royal-gold" />,
    category: "marketing"
  }
];
