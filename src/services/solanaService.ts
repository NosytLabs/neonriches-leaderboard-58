
import { SolanaTreasuryInfo, SolanaTransaction, OnChainLeaderboardEntry, SolanaNftInfo } from "@/types/solana";
import { UserProfile } from "@/types/user";

// Get basic treasury info
export const getTreasuryInfo = async (): Promise<SolanaTreasuryInfo> => {
  // This would be an API call in a real application
  return {
    address: "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
    balance: 1250.75,
    totalDeposits: 3500.0,
    totalWithdrawals: 2249.25,
    lastUpdated: new Date().toISOString(),
    usdValue: 125075.0
  };
};

// Get recent treasury transactions
export const getTreasuryTransactions = async (limit = 10): Promise<SolanaTransaction[]> => {
  // This would be an API call in a real application
  const mockTransactions: SolanaTransaction[] = [
    {
      id: "solana-tx-1",
      signature: "5v54qzqHBQrA5dn1KFRwCKioVuGm7QD6UahLHFXvnTmrXm8fJK5rSaVqA7J8ZYnZMkP92UkDwPXJ9zKpWvQYpkMn",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      type: "deposit",
      amount: 25.5,
      sender: "8xg7D4ESuJLRJQvnJPw9Mqq9YBJBBe9c8Xu7Lm68cRJ7",
      recipient: "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
      status: "confirmed"
    },
    {
      id: "solana-tx-2",
      signature: "2vhFDtAfMN2A9MGHUFFAZXMZUWi9pLqY7UwDDz5ZhzUE97xYjgJZSS3QBYu1bwcgVLJb5KKd3pPivMC1jGHqAptP",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      type: "withdrawal",
      amount: 10.0,
      sender: "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
      recipient: "BQj1qLExCzeEMtZ9a6YEQWhrQfG7BrAsfHG1kPuCNCsC",
      status: "confirmed"
    }
  ];
  
  return mockTransactions.slice(0, limit);
};

// Subscribe to real-time treasury updates
export const subscribeToTreasuryUpdates = (callback: (transaction: SolanaTransaction) => void): (() => void) => {
  // In a real app, this would set up a websocket or polling mechanism
  // For demo purposes, simulate updates every 30 seconds
  const interval = setInterval(() => {
    const randomTx: SolanaTransaction = {
      id: `solana-tx-${Date.now()}`,
      signature: `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
      timestamp: new Date().toISOString(),
      type: Math.random() > 0.2 ? "deposit" : "withdrawal",
      amount: parseFloat((Math.random() * 20 + 0.5).toFixed(2)),
      sender: Math.random() > 0.2 
        ? `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
        : "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
      recipient: Math.random() > 0.8
        ? `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
        : "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
      status: "confirmed"
    };
    
    callback(randomTx);
  }, 30000);
  
  return () => clearInterval(interval);
};

// Generate NFT certificate metadata
export const generateCertificateMetadata = (user: UserProfile): any => {
  return {
    name: `Certificate of Nobility - ${user.username}`,
    symbol: "P2WCERT",
    description: `This certificate confirms that ${user.username} has achieved rank #${user.rank} in the P2W.FUN Royal Court.`,
    seller_fee_basis_points: 500,
    image: "https://example.com/certificate-image.png",
    external_url: "https://p2w.fun/certificate/" + user.id,
    attributes: [
      {
        trait_type: "Rank",
        value: user.rank
      },
      {
        trait_type: "Team",
        value: user.team || "Unaligned"
      },
      {
        trait_type: "Total Spent",
        value: user.amountSpent || 0
      },
      {
        trait_type: "Join Date",
        value: new Date(user.joinDate || Date.now()).toISOString().split('T')[0]
      },
      {
        trait_type: "Tier",
        value: user.tier || "basic"
      }
    ],
    properties: {
      files: [
        {
          uri: "https://example.com/certificate-image.png",
          type: "image/png"
        }
      ],
      creators: [
        {
          address: "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
          share: 100
        }
      ]
    }
  };
};
