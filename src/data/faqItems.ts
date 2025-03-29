
import React from 'react';
import { Image, Link, Crown, MessageSquare, Lock, Shield, DollarSign } from 'lucide-react';
import { FAQItem } from '@/components/royal/RoyalFAQ';

export const profileFAQItems: FAQItem[] = [
  {
    question: "How do I enhance my profile cosmetics?",
    answer: (
      <div className="space-y-2">
        <p>Purchase a higher tier to unlock additional profile decorations. The Pro tier ($25+) grants access to animated borders, custom colors, and multiple images. The Royal tier ($100+) unlocks the most ostentatious visual effects.</p>
        <p className="text-royal-gold/80 italic mt-1">Remember: The more thou spendest, the gaudier thy profile becomes!</p>
      </div>
    ),
    icon: <Image size={16} className="text-royal-gold" />
  },
  {
    question: "Can I use my profile as a marketing billboard?",
    answer: (
      <div className="space-y-2">
        <p>Indeed! Pro tier nobility ($25+) can add up to 5 external links to their profiles, essentially turning them into personal billboards. We even provide analytics on how many peasants click thy links!</p>
        <p className="text-royal-gold/80 italic mt-1">Nothing says "I've made poor financial decisions" like paying to advertise on a satirical platform.</p>
      </div>
    ),
    icon: <Link size={16} className="text-royal-gold" />
  },
  {
    question: "What is the Founder's Pass and how do I get it?",
    answer: (
      <div className="space-y-2">
        <p>The Founder's Pass is an exclusive status reserved for the first 100 nobles who spend at least $50 in our realm. It grants special cosmetics, reduced mockery fees, and an on-chain certificate documenting thy questionable financial decision.</p>
        <p className="text-royal-gold/80 italic mt-1">Hurry! Once 100 people waste their money, this opportunity to waste thine will be gone forever!</p>
      </div>
    ),
    icon: <Crown size={16} className="text-royal-gold" />
  },
  {
    question: "Can other users comment on my profile?",
    answer: (
      <div className="space-y-2">
        <p>Pro tier ($25+) and Royal tier ($100+) nobles can enable comments on their profiles. This allows other users to leave messages praising thy wasteful spending habits and questionable life choices.</p>
        <p className="text-royal-gold/80 italic mt-1">Fear not, we moderate comments to ensure they remain appropriately sycophantic.</p>
      </div>
    ),
    icon: <MessageSquare size={16} className="text-royal-gold" />
  },
  {
    question: "Is my profile information secure?",
    answer: (
      <div className="space-y-2">
        <p>We guard thy profile data with the same vigilance as medieval castle guards protect their treasuries - which is to say, our defenses are impressive by ancient standards but woefully inadequate by modern ones.</p>
        <p className="text-royal-gold/80 italic mt-1">Just as castle moats and drawbridges eventually gave way to cannons, our security measures are but a theatrical display against determined dragons of the digital realm.</p>
      </div>
    ),
    icon: <Lock size={16} className="text-royal-gold" />
  }
];

export const teamFAQItems: FAQItem[] = [
  {
    question: "How do I join a team?",
    answer: (
      <div className="space-y-2">
        <p>Visit the Teams page to pledge thy allegiance to House Red, Green, or Blue. Thou may only join one house at a time, but can switch allegiance for a modest fee of $5 (which, naturally, adds to thy personal spending total).</p>
      </div>
    ),
    icon: <Shield size={16} className="text-royal-gold" />
  },
  {
    question: "What benefits do I get from team membership?",
    answer: (
      <div className="space-y-2">
        <p>Team membership grants access to exclusive team chat, team-specific cosmetics for thy profile, and the satisfaction of contributing to a collective leaderboard position. Teams compete weekly for meaningless bragging rights.</p>
      </div>
    ),
    icon: <Crown size={16} className="text-royal-gold" />
  }
];

export const mockeryFAQItems: FAQItem[] = [
  {
    question: "What is the Mockery system?",
    answer: (
      <div className="space-y-2">
        <p>The Mockery system allows nobles to spend additional real money to temporarily shame, ridicule, or taunt other users. These visual effects appear on the target's profile for a limited time, creating a truly authentic medieval social experience.</p>
      </div>
    ),
    icon: <Crown size={16} className="text-royal-gold" />
  },
  {
    question: "Can I protect myself from mockery?",
    answer: (
      <div className="space-y-2">
        <p>Yes! For a small fee, thou can purchase Protection or Immunity shields that prevent others from mocking thee. Naturally, these protections are temporary, ensuring our treasury continues to grow.</p>
      </div>
    ),
    icon: <Shield size={16} className="text-royal-gold" />
  }
];

export const paymentFAQItems: FAQItem[] = [
  {
    question: "What payment methods are accepted?",
    answer: (
      <div className="space-y-2">
        <p>We accept credit cards, PayPal, and cryptocurrency payments via Solana. All payments contribute to thy rank on the leaderboard, regardless of method. Each $1 spent equals 1 unit of rank.</p>
      </div>
    ),
    icon: <DollarSign size={16} className="text-royal-gold" />
  },
  {
    question: "Can I get a refund?",
    answer: (
      <div className="space-y-2">
        <p>Refunds? HAHAHA! Thou jest most admirably! The entire premise of our kingdom is meaningless spending for digital status. Requesting a refund would contradict the very nature of thy noble sacrifice.</p>
        <p className="text-royal-gold/80 italic mt-1">In the words of our royal treasurer: "No backsies, peasant."</p>
      </div>
    ),
    icon: <Crown size={16} className="text-royal-gold" />
  }
];

export const generalFAQItems: FAQItem[] = [
  {
    question: "What is SpendThrone exactly?",
    answer: (
      <div className="space-y-2">
        <p>SpendThrone is a satirical social experiment exploring the human desire for status and recognition. Users spend real money to climb a meaningless leaderboard, receiving absolutely no practical benefits beyond digital cosmetics and bragging rights.</p>
        <p className="text-royal-gold/80 italic mt-1">It's a mirror reflecting society's obsession with materialism and status, albeit with better medieval theming.</p>
      </div>
    ),
    icon: <Crown size={16} className="text-royal-gold" />
  },
  {
    question: "Is this a joke or a real business?",
    answer: (
      <div className="space-y-2">
        <p>The delightful answer is: both! We're genuinely satirizing status-seeking behavior while simultaneously profiting from it. The true joke is that despite openly acknowledging the pointlessness of spending money here, people do it anyway.</p>
        <p className="text-royal-gold/80 italic mt-1">The royal treasury grows fat with irony and actual currency.</p>
      </div>
    ),
    icon: <DollarSign size={16} className="text-royal-gold" />
  }
];
