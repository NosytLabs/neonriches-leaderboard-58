
import React from 'react';
import { FAQItem } from '@/components/royal/RoyalFAQ';
import { DollarSign, Crown, Shield, Image, Link, MessageSquare, Coins, Lock, PiggyBank, User, Hearts } from 'lucide-react';

// Profile FAQ Items
export const profileFAQItems: FAQItem[] = [
  {
    question: "How do I increase my rank?",
    answer: (
      <p>
        Simple economics: spend more money! Every dollar spent increases your rank by one unit. The more you pay, the higher you climb in our leaderboard – a digital Everest where the summit is only limited by your credit limit.
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What benefits do I get from a higher rank?",
    answer: (
      <p>
        Higher ranks grant you bragging rights and access to premium profile features such as animated borders, more images, longer biographies, and the ability to showcase your wealth in increasingly ostentatious ways – essentially digital peacocking at its finest.
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How do the different tiers work?",
    answer: (
      <p>
        Our hierarchy is based purely on monetary sacrifice! Bronze tier begins at $5, Silver at $25, Gold at $100, Platinum at $250, and the coveted Royal tier at $1000. Each tier unlocks more ways to flaunt your digital status – like Instagram but with price tags instead of filters.
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What are Teams?",
    answer: (
      <p>
        Join one of our three houses: House Red (aggressive spenders), House Green (strategic investors), or House Blue (calculated contributors). Team rankings are determined by the collective spending of all members – think of it as a multiplayer credit card statement competition.
      </p>
    ),
    icon: <Shield className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How do I customize my profile?",
    answer: (
      <p>
        Visit your profile settings to edit your biography, upload images (quantity dependent on your tier), add links to other digital domains, and select from various cosmetic enhancements that reflect your spending status – it's like decorating a virtual mansion where the square footage is determined by your expenditure.
      </p>
    ),
    icon: <User className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What is a Founders Pass?",
    answer: (
      <p>
        The Founders Pass is an exclusive badge of honor, bestowed upon early supporters who contributed $50 or more during our initial launch period. It grants permanent access to Royal Tier features – consider it a digital aristocratic title that doesn't require maintaining a centuries-old estate.
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How can I use my profile for marketing?",
    answer: (
      <p>
        Gold tier and above may use their profile as a digital billboard! Add business links, display advertisements, and showcase your products. The higher your rank, the more visibility your promotions receive – like a Facebook ad but with rank-based targeting instead of algorithms.
      </p>
    ),
    icon: <MessageSquare className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Are my profile analytics available?",
    answer: (
      <p>
        Indeed! Silver tier users and above can view profile visitor counts. Gold tier and above receive detailed analytics on link clicks and interaction patterns. Track your influence across the digital realm like a social media manager whose KPI is directly tied to expenditure!
      </p>
    ),
    icon: <PiggyBank className="h-4 w-4 text-royal-gold" />
  },
];

// Team FAQ Items
export const teamFAQItems: FAQItem[] = [
  {
    question: "How do team rankings work?",
    answer: (
      <p>
        Team rankings are determined by the combined wealth sacrificed by all members. Every dollar spent by a team member contributes to the collective standing. The team with the highest total expenditure rules the leaderboard – imagine a corporate expense account competition but everyone's using personal funds.
      </p>
    ),
    icon: <Shield className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Can I change my team?",
    answer: (
      <p>
        Yes, but loyalty has a price! Changing allegiance requires a fee of $5, which naturally contributes to your personal rank. Choose your team wisely to avoid unnecessary expenditure – it's like changing political parties but with an actual price tag attached.
      </p>
    ),
    icon: <Coins className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What benefits do winning teams receive?",
    answer: (
      <p>
        The dominant team enjoys exclusive cosmetic enhancements, team-specific profile features, and most importantly, the right to mock inferior teams with special shame animations. Victory brings both material and psychological rewards – like winning the Super Bowl but the trophy is the ability to digitally taunt others.
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How often are team contests held?",
    answer: (
      <p>
        Team competitions occur weekly, with special seasonal tournaments quarterly. Each contest has different objectives, though they all inevitably require spending more money than your rivals – like a fantasy sports league where the draft picks are dollar amounts.
      </p>
    ),
    icon: <Hearts className="h-4 w-4 text-royal-gold" />
  },
];

// Payment FAQ Items
export const paymentFAQItems: FAQItem[] = [
  {
    question: "What payment methods are accepted?",
    answer: (
      <p>
        We accept traditional currency (credit/debit cards) as well as cryptocurrency. All transactions are secured with enterprise-grade encryption – our digital moat and drawbridge system would make medieval castle architects jealous of our security setup.
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Are my payments secure?",
    answer: (
      <p>
        Your payments are protected by state-of-the-art encryption – our digital fortress is guarded by algorithms more complex than the most elaborate maze. Though remember, while our moat is deep and our drawbridge sturdy, no digital castle is completely impenetrable in today's cyber landscape.
      </p>
    ),
    icon: <Lock className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Can I withdraw my funds?",
    answer: (
      <p>
        Funds contributed to the platform cannot be withdrawn – that's what makes this a satirical commentary on digital consumption rather than an investment. However, Solana blockchain integration allows withdrawal of certain promotional rewards – like a casino where the chips can only be cashed in under very specific circumstances.
      </p>
    ),
    icon: <Coins className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What is the minimum deposit?",
    answer: (
      <p>
        The minimum contribution to begin your ascent is a mere $1. However, true status begins at $5 with our Bronze tier. Greater financial commitment brings greater recognition – it's like a cover charge that increases depending on which VIP section you want to access.
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
];
