
import React from 'react';
import { Crown, DollarSign, Trophy, Users, Zap, Eye, Sparkles, Paintbrush } from 'lucide-react';

export interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
  category: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'what-is-spend-throne',
    question: 'What is SpendThrone?',
    answer: (
      <div className="space-y-2">
        <p>
          SpendThrone is a satirical social experiment where your rank is determined solely by how much money you spend. 
          $1 spent equals 1 rank point - it's a transparent meritocracy based purely on spending.
        </p>
        <p>
          The leaderboard never resets, creating a permanent record of conspicuous consumption.
        </p>
      </div>
    ),
    icon: <Crown />,
    category: 'general'
  },
  {
    id: 'how-does-ranking-work',
    question: 'How does the leaderboard ranking system work?',
    answer: (
      <div className="space-y-2">
        <p>
          The ranking system is extremely straightforward: $1 spent = 1 rank point. The more you spend, the higher your rank.
        </p>
        <p>
          Your rank is determined by your total spending compared to other users. If you've spent more than someone else, you'll be ranked higher.
        </p>
        <p>
          The leaderboard is persistent and never resets, creating a permanent hierarchy based solely on financial contributions.
        </p>
      </div>
    ),
    icon: <Trophy />,
    category: 'rankings'
  },
  {
    id: 'profile-vs-rank',
    question: 'What\'s the difference between profile enhancements and rank?',
    answer: (
      <div className="space-y-2">
        <p>
          Your <strong>rank</strong> on the leaderboard is determined solely by how much money you've deposited ($1 = 1 rank point). 
          This is the only way to climb the leaderboard.
        </p>
        <p>
          <strong>Profile enhancements</strong> are purely cosmetic features that make your profile and leaderboard entry more visually appealing. 
          These can be purchased through subscriptions or as temporary boosts, but they do not affect your actual ranking.
        </p>
        <p>
          Think of rank as your actual status, while profile enhancements are just how you present that status.
        </p>
      </div>
    ),
    icon: <Eye />,
    category: 'profiles'
  },
  {
    id: 'what-are-profile-boosts',
    question: 'What are Profile Boosts?',
    answer: (
      <div className="space-y-2">
        <p>
          Profile Boosts are temporary visual enhancements you can purchase to make your profile and leaderboard entries more noticeable.
          These include visibility boosts, appearance enhancements, animations, and special effects.
        </p>
        <p>
          Boosts are purely cosmetic and do not affect your actual rank on the leaderboard. They're an affordable alternative
          to higher-tier subscriptions for users who want some visual flair without the commitment.
        </p>
        <p>
          Each boost lasts for a specific duration (typically 3-14 days) and can be renewed or changed when expired.
        </p>
      </div>
    ),
    icon: <Zap />,
    category: 'boosts'
  },
  {
    id: 'boost-vs-subscription',
    question: 'What\'s the difference between Boosts and Subscriptions?',
    answer: (
      <div className="space-y-2">
        <p>
          <strong>Profile Boosts</strong> are temporary, one-time purchases that enhance your profile's appearance for a limited time (typically 3-14 days).
          They're affordable and focused on specific visual effects.
        </p>
        <p>
          <strong>Subscriptions</strong> (Premium and Royal tiers) provide ongoing benefits including enhanced profile customization, 
          analytics, and permanent visual enhancements. They also include discounts on boosts and some exclusive boost effects.
        </p>
        <p>
          Boosts are ideal for occasional enhancement, while subscriptions are better for users seeking continuous premium features.
        </p>
      </div>
    ),
    icon: <Sparkles />,
    category: 'boosts'
  },
  {
    id: 'deposit-vs-subscription',
    question: 'What\'s the difference between deposits and subscriptions?',
    answer: (
      <div className="space-y-2">
        <p>
          <strong>Deposits</strong> directly increase your rank on the leaderboard ($1 = 1 rank point). This is the only way to climb
          the leaderboard hierarchy. Deposits are permanent contributions that never expire.
        </p>
        <p>
          <strong>Subscriptions</strong> provide enhanced profile features, visual enhancements, and marketing tools, but they do not
          affect your leaderboard rank. Subscription benefits last only as long as your subscription is active.
        </p>
        <p>
          For maximum impact, many users both make deposits (for rank) and maintain subscriptions (for features).
        </p>
      </div>
    ),
    icon: <DollarSign />,
    category: 'payments'
  },
  {
    id: 'team-visual-effects',
    question: 'Do teams get special visual effects?',
    answer: (
      <div className="space-y-2">
        <p>
          Yes! Each team (Red, Green, and Blue) has its own distinct visual styling that's applied to members' profiles and leaderboard entries.
        </p>
        <p>
          Team Red features fiery red accents and warm-toned effects.
          Team Green showcases electric lime highlights and nature-inspired visuals.
          Team Blue displays cool pulse effects and ocean-themed elements.
        </p>
        <p>
          These team-specific visual elements are automatically applied based on your team affiliation and combine with any boosts or subscription effects you have.
        </p>
      </div>
    ),
    icon: <Users />,
    category: 'teams'
  },
  {
    id: 'custom-visual-effects',
    question: 'Can I customize my visual effects?',
    answer: (
      <div className="space-y-2">
        <p>
          Basic users can purchase temporary boosts with preset visual effects, but customization is limited.
        </p>
        <p>
          Premium subscribers can adjust some aspects of their visual effects, including RGB color selection, animation speed, and effect intensity.
        </p>
        <p>
          Royal subscribers have full customization options for their visual effects, including the ability to create custom color palettes,
          animation sequences, and combined effects for a truly unique presentation.
        </p>
      </div>
    ),
    icon: <Paintbrush />,
    category: 'customization'
  }
];
