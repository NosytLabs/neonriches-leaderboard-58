
// Fixed content for CTAs, quotes, team facts, etc.

export type AbsurdityLevel = 'mild' | 'medium' | 'extreme' | 'ridiculous' | 'unhinged';

// Fixed CTA for the hero section
export const generateAbsurdCTA = (_level: AbsurdityLevel): string => {
  return "Increase Your Status"; // Fixed CTA for all users
};

// Fixed team names for the royal orders
export const royalOrderNames = [
  "Royal Order of Status Seekers",
  "Knights of the Digital Realm",
  "Order of the Empty Wallet",
  "Brotherhood of the Burning Credit Card",
  "Sisterhood of Spending Superiority"
];

// Fixed team descriptions that explain their satirical "mission"
export const royalOrderDescriptions = [
  "Dedicated to the proposition that all dollars are created to be spent for status.",
  "Boldly going where no wallet has gone before — usually empty.",
  "Proving that the more you spend, the more you're worth (to our shareholders)."
];

// Fixed fact about status and wealth
export const absurdFacts = [
  "A study found that 73% of social media users edit their vacation photos to look more expensive than they actually were.",
  "The average Instagram user spends 5.4 years of their life comparing themselves to wealthier people online.",
  "Researchers found that expensive wines taste better when people believe they cost more, even when it's the same wine.",
  "In one survey, 51% of luxury goods owners admitted they sometimes regretted their purchase within a week.",
  "The Emperor's New Clothes were very expensive indeed - but at least we're honest about selling you nothing but status."
];

// Always return the first fact
export const getRandomAbsurdFact = (): string => {
  return absurdFacts[0];
};

// Fixed quotes about status and wealth
export const statusQuotes = [
  { quote: "The Emperor's New Clothes were very expensive indeed - but at least we're honest about selling you nothing but status.", author: "SpendThrone Philosophy" },
  { quote: "When everyone is special, no one is. That's why we have a leaderboard.", author: "SpendThrone Design Team" },
  { quote: "Money can't buy happiness, but it can buy a higher position on our leaderboard, which is basically the same thing.", author: "Economic Wisdom" }
];

// Always return the first quote
export const getRandomStatusQuote = () => {
  return statusQuotes[0];
};

export default { 
  generateAbsurdCTA, 
  getRandomAbsurdFact,
  getRandomStatusQuote,
  royalOrderNames,
  royalOrderDescriptions
};
