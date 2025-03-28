
// Fix getOnChainLeaderboard argument
const data = await getOnChainLeaderboard(); // No argument

// Fix OnChainLeaderboardEntry usage and properties
const updatedData = data.map((entry) => {
  const existingEntry = leaderboard.find((e) => e.id === entry.id);
  return {
    ...entry,
    previousRank: existingEntry?.rank || entry.rank
  };
});

// Fix mock data to match type
setLeaderboard([
  {
    id: "1",
    publicKey: "8YLKoCu5knFvCTSdSXe3xVQxA8xndGpAbqNWCtK9XkS9",
    username: "RoyalWhale",
    rank: 1,
    previousRank: 1,
    amountSpent: 5000,
    lastTransaction: new Date().toISOString(),
    isVerified: true
  },
  {
    id: "2",
    publicKey: "5yKLcpRxZU2S7uLkHRFNQZnSoNMm9ZUHsyVaaDXJHnEW",
    username: "CrownCollector",
    rank: 2,
    previousRank: 2,
    amountSpent: 3750,
    lastTransaction: new Date().toISOString(),
    isVerified: true
  }
]);

// Fix property access in transaction notification
toast({
  title: "New On-Chain Transaction",
  description: `Transaction received for ${transaction.amount.toFixed(2)} SOL!`,
  variant: "default"
});
