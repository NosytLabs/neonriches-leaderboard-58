
import { UserProfile } from '@/types/user';
import { formatCurrency } from './formatters';

export const calculatePrizePool = (weeklySpending: number): number => {
  // 15% of weekly spending goes to the prize pool
  return weeklySpending * 0.15;
};

export const distributePrizePool = (
  prizePool: number,
  topSpenders: UserProfile[],
  consistentSpenders: UserProfile[]
): { 
  rewards: { user: UserProfile; amount: number }[];
  developerCut: number;
  charityDonation: number;
} => {
  // Initialize results
  const rewards: { user: UserProfile; amount: number }[] = [];
  let remainingPool = prizePool;
  
  // 20% goes to the developer
  const developerCut = prizePool * 0.2;
  remainingPool -= developerCut;
  
  // Allocate to The Whale Endowment (50% of remaining)
  const whaleEndowment = remainingPool * 0.5;
  
  // Top 3 whales get their share
  if (topSpenders.length > 0) {
    // #1 gets 60% of the whale endowment (minus 5% to "charity")
    const whale1Amount = whaleEndowment * 0.6 * 0.95;
    rewards.push({ user: topSpenders[0], amount: whale1Amount });
    
    if (topSpenders.length > 1) {
      // #2 gets 30% of the whale endowment (minus 5% to "charity")
      const whale2Amount = whaleEndowment * 0.3 * 0.95;
      rewards.push({ user: topSpenders[1], amount: whale2Amount });
      
      if (topSpenders.length > 2) {
        // #3 gets 10% of the whale endowment (minus 5% to "charity")
        const whale3Amount = whaleEndowment * 0.1 * 0.95;
        rewards.push({ user: topSpenders[2], amount: whale3Amount });
      }
    }
  }
  
  // 15% of the whale endowment goes to "charity" (5% from each whale)
  const charityDonation = whaleEndowment * 0.15;
  
  // Allocate to The Sustenance Fund (50% of remaining)
  const sustenanceFund = remainingPool * 0.5;
  
  // Distribute sustenance fund to consistent spenders
  // This is a simplified implementation - real logic would be more complex
  if (consistentSpenders.length > 0) {
    const baseAmount = sustenanceFund / consistentSpenders.length;
    
    consistentSpenders.forEach(user => {
      // Use properties that might affect reward amounts
      const streakMultiplier = user.profileBoosts?.length ? 1.5 : 1;
      const spendingBonus = (user.totalSpent || user.amountSpent || 0) > 1000 ? 1.1 : 1;
      
      const amount = baseAmount * streakMultiplier * spendingBonus;
      rewards.push({ user, amount });
    });
  }
  
  return { rewards, developerCut, charityDonation };
};

export const formatRewardAmount = (amount: number): string => {
  return formatCurrency(amount);
};

export const getWeeklySpending = (): number => {
  // This would normally come from a database
  // For demo purposes, we'll return a fixed amount
  return 10000;
};
