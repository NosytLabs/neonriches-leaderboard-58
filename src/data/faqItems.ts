
import React from 'react';
import { FAQItem } from '@/components/royal/RoyalFAQ';
import { DollarSign, Crown, Shield, Image, Link, MessageSquare, Coins, Lock, PiggyBank, User, Hearts, AlertTriangle } from 'lucide-react';

// Profile FAQ Items
export const profileFAQItems: FAQItem[] = [
  {
    question: "How do I increase my rank?",
    answer: (
      <p>
        Simple economics: spend more money! Every dollar spent increases your rank by one unit. The more you pay, the higher you climb in our leaderboard – a digital Everest where the summit is only limited by your credit limit. Just like real-world social hierarchies, your value is determined entirely by your spending power!
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What benefits do I get from a higher rank?",
    answer: (
      <p>
        Higher ranks grant you bragging rights and access to premium profile features such as animated borders, more images, longer biographies, and the ability to showcase your wealth in increasingly ostentatious ways – essentially digital peacocking at its finest. Plus, you'll receive the most coveted reward of all: the judgmental envy of those ranked below you. Just like our ancestral nobles who spent fortunes on meaningless titles, you too can buy your way to digital aristocracy!
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How do the different tiers work?",
    answer: (
      <p>
        Our hierarchy is based purely on monetary sacrifice! Bronze tier begins at $5, Silver at $25, Gold at $100, Platinum at $250, and the coveted Royal tier at $1000. Each tier unlocks more ways to flaunt your digital status – like Instagram but with price tags instead of filters. The higher tiers grant exclusive marketing abilities, letting your profile become a virtual billboard seen by all who dare to gaze upon your splendor. Don't worry about providing value – just like nepotism in corporate America, you can simply buy your way to the top!
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What are Teams?",
    answer: (
      <p>
        Join one of our three houses: House Red (aggressive spenders), House Green (strategic investors), or House Blue (calculated contributors). Team rankings are determined by the collective spending of all members – think of it as a multiplayer credit card statement competition. Just like political parties, each team vies for dominance through sheer financial might rather than merit! Your team choice grants special cosmetic enhancements and mockery privileges – because nothing says "team spirit" like collective financial hubris.
      </p>
    ),
    icon: <Shield className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How do I customize my profile?",
    answer: (
      <p>
        Visit your profile settings to edit your biography, upload images (quantity dependent on your tier), add links to other digital domains, and select from various cosmetic enhancements that reflect your spending status – it's like decorating a virtual mansion where the square footage is determined by your expenditure. The higher your tier, the more extravagant your profile can be – because nothing says "I'm important" like paying extra for digital ornaments that serve no functional purpose whatsoever!
      </p>
    ),
    icon: <User className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What is a Founders Pass?",
    answer: (
      <p>
        The Founders Pass is an exclusive badge of honor, bestowed upon early supporters who contributed $100 or more during our initial launch period. It grants permanent access to Royal Tier features – consider it a digital aristocratic title that doesn't require maintaining a centuries-old estate. Your funds directly support our developers' exotic vacations and premium coffee habits – after all, even satirical platforms need funding! Think of it as getting in on the ground floor of a pyramid scheme, except everyone knows it's a pyramid scheme!
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How can I use my profile for marketing?",
    answer: (
      <p>
        Gold tier and above may use their profile as a digital billboard! Add business links, display advertisements, and showcase your products. The higher your rank, the more visibility your promotions receive – like a Facebook ad but with rank-based targeting instead of algorithms. Your expensive profile becomes a beacon of attention in our digital kingdom – where others are forced to gaze upon your marketing materials simply because you paid more than they did. It's like buying a Super Bowl ad spot, but for people who think digital status matters!
      </p>
    ),
    icon: <MessageSquare className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Are my profile analytics available?",
    answer: (
      <p>
        Indeed! Silver tier users and above can view profile visitor counts. Gold tier and above receive detailed analytics on link clicks and interaction patterns. Track your influence across the digital realm like a social media manager whose KPI is directly tied to expenditure! Watch in real-time as users click your links, proving once and for all that attention can indeed be purchased – just like corporate influence in politics! The more you spend, the more data we provide – monetizing both your vanity and curiosity simultaneously.
      </p>
    ),
    icon: <PiggyBank className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Where does my money actually go?",
    answer: (
      <p>
        Your generous contributions are funneled directly into our developers' avocado toast fund and exotic mechanical keyboard collection! Just kidding... partially. Your payments sustain this social experiment, server costs, and yes, the team behind it. Consider it patronage for performance art that comments on digital status – like buying a Banksy, but with less spray paint and more server maintenance. Unlike other digital platforms that secretly sell your data while pretending to be free, we're transparently taking your money upfront!
      </p>
    ),
    icon: <AlertTriangle className="h-4 w-4 text-royal-gold" />
  },
];

// Team FAQ Items
export const teamFAQItems: FAQItem[] = [
  {
    question: "How do team rankings work?",
    answer: (
      <p>
        Team rankings are determined by the combined wealth sacrificed by all members. Every dollar spent by a team member contributes to the collective standing. The team with the highest total expenditure rules the leaderboard – imagine a corporate expense account competition but everyone's using personal funds. It's like political parties competing for donations, except without even the pretense of serving a greater good – just pure, unadulterated status competition!
      </p>
    ),
    icon: <Shield className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Can I change my team?",
    answer: (
      <p>
        Yes, but loyalty has a price! Changing allegiance requires a fee of $5, which naturally contributes to your personal rank. Choose your team wisely to avoid unnecessary expenditure – it's like changing political parties but with an actual price tag attached. Your team-switching funds help maintain our digital kingdom's moat and drawbridge system, while teaching a valuable lesson about the cost of inconsistency – in our realm, even fickle loyalty is monetized!
      </p>
    ),
    icon: <Coins className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What benefits do winning teams receive?",
    answer: (
      <p>
        The dominant team enjoys exclusive cosmetic enhancements, team-specific profile features, and most importantly, the right to mock inferior teams with special shame animations. Victory brings both material and psychological rewards – like winning the Super Bowl but the trophy is the ability to digitally taunt others. Your team's success grants each member enhanced profile visibility and interaction rates – collective spending creates a rising tide that lifts all profiles, an economic theory we've named "trickle-up visibility." 
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "How often are team contests held?",
    answer: (
      <p>
        Team competitions occur weekly, with special seasonal tournaments quarterly. Each contest has different objectives, though they all inevitably require spending more money than your rivals – like a fantasy sports league where the draft picks are dollar amounts. These regular competitions create a perpetual spending cycle, ensuring our developers never miss a mortgage payment. While real sports require skill and practice, our contests only require a functioning payment method and questionable financial judgment!
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
        We accept traditional currency (credit/debit cards) as well as cryptocurrency. All transactions are secured with enterprise-grade encryption – our digital moat and drawbridge system would make medieval castle architects jealous of our security setup. While your financial information is protected by state-of-the-art technology, your reputation for spending money on digital status is entirely self-inflicted and we take no responsibility for the social consequences!
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Are my payments secure?",
    answer: (
      <p>
        Your payments are protected by state-of-the-art encryption – our digital fortress is guarded by algorithms more complex than the most elaborate maze. Though remember, while our moat is deep and our drawbridge sturdy, no digital castle is completely impenetrable in today's cyber landscape. Rest assured, we protect your payment details with the same fervor that dragons guard their treasure hoards – your financial data is safe, even if your dignity while using our platform isn't!
      </p>
    ),
    icon: <Lock className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Can I withdraw my funds?",
    answer: (
      <p>
        Funds contributed to the platform cannot be withdrawn – that's what makes this a satirical commentary on digital consumption rather than an investment. However, Solana blockchain integration allows withdrawal of certain promotional rewards – like a casino where the chips can only be cashed in under very specific circumstances. Just as you can't unring a bell or unsend an embarrassing text message, you cannot retrieve your digital status investments – they've already been converted into developer sustenance and server electricity!
      </p>
    ),
    icon: <Coins className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "What is the minimum deposit?",
    answer: (
      <p>
        The minimum contribution to begin your ascent is a mere $1. However, true status begins at $5 with our Bronze tier. Greater financial commitment brings greater recognition – it's like a cover charge that increases depending on which VIP section you want to access. Just like the real-world economy, the more you pay, the more seriously people take you, regardless of whether you have anything worthwhile to say! Our tiered pricing ensures even the smallest wallets can participate in our grand social experiment.
      </p>
    ),
    icon: <DollarSign className="h-4 w-4 text-royal-gold" />
  },
  {
    question: "Can I get a tax deduction for my contributions?",
    answer: (
      <p>
        Unfortunately not! Your payments to SpendThrone are considered "digital entertainment expenses" rather than charitable donations – despite how much they benefit our developers' quality of life. Unlike political donations that buy influence while being tax-deductible, our influence-purchasing system is refreshingly honest about its purely recreational nature. Consider your expenditures here as an investment in satirical performance art that comments on society's obsession with status – just don't tell your accountant that's where the money went!
      </p>
    ),
    icon: <AlertTriangle className="h-4 w-4 text-royal-gold" />
  },
];
