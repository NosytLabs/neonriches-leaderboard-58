
import React from 'react';
import { FAQItem } from '@/components/royal/RoyalFAQ';
import { DollarSign, Crown, Shield, Image, Link, MessageSquare, Coins, Lock, PiggyBank, User, Hearts } from 'lucide-react';

// Profile FAQ Items
export const profileFAQItems: FAQItem[] = [
  {
    question: "How do I increase my royal rank?",
    answer: (
      <p>
        Simple, dear noble: spend thy gold! Every dollar spent increases your rank by one unit. The more you pay, the higher you climb in our leaderboard of nobility.
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What benefits do I get from a higher rank?",
    answer: (
      <p>
        Higher ranks grant thee bragging rights and access to premium profile features such as animated borders, more images, longer biographies, and the ability to showcase thy wealth in increasingly ostentatious ways.
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How do the different tiers work?",
    answer: (
      <p>
        Our hierarchy of nobility is based purely on monetary sacrifice! Bronze tier begins at $5, Silver at $25, Gold at $100, Platinum at $250, and the coveted Royal tier at $1000. Each tier unlocks more ways to flaunt thy status.
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What are Royal Teams?",
    answer: (
      <p>
        Join one of our three noble houses: House Red (of fiery aggression), House Green (of abundant prosperity), or House Blue (of mystical wisdom). Team rankings are determined by the collective spending of all members. Choose wisely!
      </p>
    ),
    icon: <Shield className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How do I customize my profile?",
    answer: (
      <p>
        Visit thy profile settings, where thou may edit thy biography, upload images (quantity dependent on thy tier), add links to other digital domains, and select from various cosmetic enhancements that befit thy station.
      </p>
    ),
    icon: <User className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What is a Founders Pass?",
    answer: (
      <p>
        The Founders Pass is a most exclusive badge of honor, bestowed upon early supporters who contributed $50 or more during our initial coronation period. It grants permanent access to Royal Tier features regardless of future expenditures.
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How can I use my profile for marketing?",
    answer: (
      <p>
        Noble profiles of Gold tier and above may use their profile as a royal proclamation board! Add business links, display advertisements, and even showcase thy own products. The higher thy rank, the more visibility thy proclamations shall receive.
      </p>
    ),
    icon: <MessageSquare className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Are my profile analytics available?",
    answer: (
      <p>
        Indeed! Silver tier nobles and above can view how many peasants have gazed upon their profile. Gold tier and above receive detailed analytics on link clicks and interaction patterns. Track thy influence across the digital realm!
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
        Team rankings are determined by the combined wealth sacrificed by all members. Every dollar spent by a team member contributes to the collective glory of thy house. The team with the highest total expenditure rules the kingdom!
      </p>
    ),
    icon: <Shield className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Can I change my team?",
    answer: (
      <p>
        Yes, but loyalty is prized among nobility! Changing allegiance requires a modest fee of $5, which naturally contributes to thy personal rank. Choose thy house wisely to avoid unnecessary expenditure. Team changes are permitted once per fortnight.
      </p>
    ),
    icon: <Coins className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What benefits do winning teams receive?",
    answer: (
      <p>
        The dominant house enjoys exclusive cosmetic enhancements, team-specific profile features, and most importantly, the right to mock inferior houses with special shame animations. Victory brings both material and psychological rewards!
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How often are team contests held?",
    answer: (
      <p>
        Team competitions occur weekly, with special seasonal tournaments quarterly. Each contest has different objectives, though they all inevitably require spending more gold than thy rivals. The nobility's favorite pastime!
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
        We accept traditional peasant currency (credit/debit cards) as well as the more sophisticated digital currencies of the realm (cryptocurrency). All transactions are secured with the finest digital moats and drawbridges available.
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Are my payments secure?",
    answer: (
      <p>
        As secure as any noble's treasure vault! We employ state-of-the-art encryption, though as with any castle, no defense is impenetrable. Rest assured, we guard thy financial information with the same zeal as a dragon protects its hoard.
      </p>
    ),
    icon: <Lock className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Can I withdraw my funds?",
    answer: (
      <p>
        Noble funds, once contributed to the royal treasury, cannot be withdrawn. Such is the nature of nobility - generosity without expectation of return! However, Solana blockchain integration allows withdrawal of certain promotional rewards.
      </p>
    ),
    icon: <Coins className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What is the minimum deposit?",
    answer: (
      <p>
        The minimum contribution to begin thy ascent to nobility is a mere $1. However, true prestige begins at $5 with our Bronze tier. Greater sacrifice brings greater recognition, as is the natural order of hierarchy.
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
];
