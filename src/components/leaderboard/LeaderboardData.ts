
export interface LeaderboardUser {
  id: number;
  username: string;
  amountSpent: number;
  rank: number;
  team: string;
  profileImage: string;
  title: string;
}

export const mockLeaderboardData: LeaderboardUser[] = [
  { id: 1, username: 'MoneyBags', amountSpent: 1500, rank: 1, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=1', title: 'High King of Expenditure' },
  { id: 2, username: 'CashCrusader', amountSpent: 1200, rank: 2, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=2', title: 'Grand Duke of Debt' },
  { id: 3, username: 'PlatinumPrince', amountSpent: 950, rank: 3, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=3', title: 'Archduke of Auto-Pay' },
  { id: 4, username: 'CreditQueen', amountSpent: 800, rank: 4, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=4', title: 'Marquess of Mastercard' },
  { id: 5, username: 'WealthWaster', amountSpent: 750, rank: 5, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=5', title: 'Earl of Excessive Spending' },
  { id: 6, username: 'GildedGleam', amountSpent: 600, rank: 6, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=6', title: 'Viscount of Venmo' },
  { id: 7, username: 'FortuneFlaunter', amountSpent: 550, rank: 7, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=7', title: 'Baron of Bank Transfer' },
  { id: 8, username: 'RichesRuler', amountSpent: 480, rank: 8, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=8', title: 'Baronet of Bitcoin' },
  { id: 9, username: 'LavishLord', amountSpent: 420, rank: 9, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=9', title: 'Knight of Needless Purchases' },
  { id: 10, username: 'WasteWizard', amountSpent: 350, rank: 10, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=10', title: 'Squire of Squandered Savings' },
];

export const getRandomSatiricalTitle = () => {
  const titles = [
    "Sultan of Spending",
    "Duchess of Debt",
    "Baron of Bank Accounts",
    "Emperor of Empty Wallets",
    "Countess of Credit Cards",
    "Lord of Lavish Luxury",
    "Regent of Riches",
    "Sovereign of Superficial Status",
    "Chancellor of Cha-Ching",
    "Prince of Pointless Purchases",
    "Minister of Monetary Madness",
    "Archduke of Affluence"
  ];
  
  return titles[Math.floor(Math.random() * titles.length)];
};

export const getMotivationalQuote = () => {
  const quotes = [
    "In the digital aristocracy, your value is measured by your donations.",
    "Why earn respect when you can buy rank?",
    "Remember: it's not a waste if it improves your standing.",
    "Dignity is temporary, leaderboard position is forever.",
    "The quickest path to nobility is through your wallet.",
    "Your bank account may suffer, but your ego will thrive.",
    "A fool and their money are soon elevated in rank.",
    "Nothing says 'I matter' like spending money on virtual status.",
    "When in doubt, just pay more.",
    "The real treasure was the money we spent along the way."
  ];
  
  return quotes[Math.floor(Math.random() * quotes.length)];
};
