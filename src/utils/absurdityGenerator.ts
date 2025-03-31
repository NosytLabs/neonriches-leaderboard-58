
// Fixed content for CTAs, quotes, team facts, etc.

// Fixed CTA for the hero section
export const generateAbsurdCTA = (): string => {
  return "Increase Your Status"; // Fixed CTA for all users
};

// Fixed team names for the royal orders
export const royalOrderNames = [
  "Royal Order of Status Seekers",
  "Knights of the Digital Realm",
  "Order of the Empty Wallet",
  "Brotherhood of the Burning Credit Card"
];

// Fixed team descriptions that explain their satirical "mission"
export const royalOrderDescriptions = [
  "Dedicated to the proposition that all dollars are created to be spent for status.",
  "Boldly going where no wallet has gone before — usually empty.",
  "Proving that the more you spend, the more you're worth (to our shareholders)."
];

// Fixed fact about status and wealth
export const absurdFacts = [
  "The Emperor's New Clothes were very expensive indeed - but at least we're honest about selling you nothing but status."
];

// Always return the first fact
export const getRandomAbsurdFact = (): string => {
  return absurdFacts[0];
};

// Fixed quotes about status and wealth
export const statusQuotes = [
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
