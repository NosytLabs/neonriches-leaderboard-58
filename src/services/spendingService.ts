
import { toast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';

// Mock database for user spending (in a real app, this would be in Supabase)
let spendingRecords: SpendingRecord[] = [];

export interface SpendingRecord {
  id: string;
  userId: string;
  amount: number;
  timestamp: Date;
  type: 'contribution' | 'poke' | 'event' | 'subscription';
  description?: string;
  metadata?: Record<string, any>;
}

export interface UserRankData {
  userId: string;
  username: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: 'red' | 'green' | 'blue' | null;
  tier: 'free' | 'pro';
  spendStreak: number;
}

// This would be a database query in a real app
export const getUserRanking = (): UserRankData[] => {
  // Get mock data from localStorage if available
  const storedRankings = localStorage.getItem('p2w_rankings');
  let rankings: UserRankData[] = [];
  
  if (storedRankings) {
    try {
      rankings = JSON.parse(storedRankings);
    } catch (error) {
      console.error('Error parsing stored rankings:', error);
    }
  }
  
  // If no stored data, use mock data
  if (rankings.length === 0) {
    rankings = [
      {
        userId: '1',
        username: 'NeonBoss',
        profileImage: 'https://i.pravatar.cc/150?img=1',
        totalSpent: 1500,
        rank: 1,
        team: 'red',
        tier: 'pro',
        spendStreak: 4
      },
      {
        userId: '2',
        username: 'CryptoQueen',
        profileImage: 'https://i.pravatar.cc/150?img=2',
        totalSpent: 1200,
        rank: 2,
        team: 'blue',
        tier: 'pro',
        spendStreak: 6
      },
      {
        userId: '3',
        username: 'DigitalWhale',
        profileImage: 'https://i.pravatar.cc/150?img=3',
        totalSpent: 980,
        rank: 3,
        team: 'green',
        tier: 'pro',
        spendStreak: 3
      },
      {
        userId: '4',
        username: 'NeonNinja',
        profileImage: 'https://i.pravatar.cc/150?img=4',
        totalSpent: 750,
        rank: 4,
        team: 'red',
        tier: 'pro',
        spendStreak: 2
      },
      {
        userId: '5',
        username: 'CyberSamurai',
        profileImage: 'https://i.pravatar.cc/150?img=5',
        totalSpent: 600,
        rank: 5,
        team: 'green',
        tier: 'free',
        spendStreak: 1
      },
      {
        userId: '6',
        username: 'PixelPirate',
        profileImage: 'https://i.pravatar.cc/150?img=6',
        totalSpent: 450,
        rank: 6,
        team: 'blue',
        tier: 'free',
        spendStreak: 0
      },
      {
        userId: '7',
        username: 'VirtualViking',
        profileImage: 'https://i.pravatar.cc/150?img=7',
        totalSpent: 300,
        rank: 7,
        team: 'red',
        tier: 'free',
        spendStreak: 1
      },
      {
        userId: '8',
        username: 'TechTitan',
        profileImage: 'https://i.pravatar.cc/150?img=8',
        totalSpent: 200,
        rank: 8,
        team: 'green',
        tier: 'free',
        spendStreak: 0
      },
      {
        userId: '9',
        username: 'BitBaron',
        profileImage: 'https://i.pravatar.cc/150?img=9',
        totalSpent: 100,
        rank: 9,
        team: 'blue',
        tier: 'free',
        spendStreak: 0
      },
      {
        userId: '10',
        username: 'TokenTycoon',
        profileImage: 'https://i.pravatar.cc/150?img=10',
        totalSpent: 50,
        rank: 10,
        team: 'red',
        tier: 'free',
        spendStreak: 0
      },
    ];
  }
  
  return rankings;
};

// Add a spending record
export const addSpendingRecord = async (
  userId: string, 
  amount: number, 
  type: SpendingRecord['type'],
  description?: string,
  metadata?: Record<string, any>
): Promise<boolean> => {
  try {
    // Create the spending record
    const record: SpendingRecord = {
      id: Math.random().toString(36).substring(2, 9),
      userId,
      amount,
      timestamp: new Date(),
      type,
      description,
      metadata
    };
    
    // In a real app, this would be a database operation
    spendingRecords.push(record);
    
    // Update the user's rank data
    const rankings = getUserRanking();
    const userIndex = rankings.findIndex(r => r.userId === userId);
    
    if (userIndex >= 0) {
      // Update existing user
      rankings[userIndex].totalSpent += amount;
      
      // Update streak if contribution
      if (type === 'contribution') {
        const lastContribution = spendingRecords
          .filter(r => r.userId === userId && r.type === 'contribution')
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[1]; // Get second-to-last
        
        if (lastContribution) {
          const daysSinceLastContribution = Math.floor(
            (new Date().getTime() - new Date(lastContribution.timestamp).getTime()) / (1000 * 60 * 60 * 24)
          );
          
          if (daysSinceLastContribution <= 7) {
            rankings[userIndex].spendStreak += 1;
          } else {
            rankings[userIndex].spendStreak = 1;
          }
        } else {
          rankings[userIndex].spendStreak = 1;
        }
      }
    } else {
      // Add new user
      rankings.push({
        userId,
        username: `User${userId}`,
        totalSpent: amount,
        rank: rankings.length + 1,
        team: null,
        tier: 'free',
        spendStreak: type === 'contribution' ? 1 : 0
      });
    }
    
    // Re-sort and assign ranks
    rankings.sort((a, b) => b.totalSpent - a.totalSpent);
    rankings.forEach((user, idx) => {
      user.rank = idx + 1;
    });
    
    // Save to localStorage for persistence
    localStorage.setItem('p2w_rankings', JSON.stringify(rankings));
    
    toast({
      title: "Spending Recorded",
      description: `$${amount.toFixed(2)} has been added to your spending total.`,
    });
    
    return true;
  } catch (error) {
    console.error('Error recording spending:', error);
    toast({
      title: "Error",
      description: "Failed to record your spending. Please try again.",
      variant: "destructive"
    });
    return false;
  }
};

// Get total pool amount - this would be calculated from database in a real app
export const getTotalPool = (): number => {
  const allSpending = spendingRecords.reduce((total, record) => total + record.amount, 0);
  return allSpending * 0.15; // 15% goes to prize pool
};

// Get team totals
export const getTeamTotals = (): Record<'red' | 'green' | 'blue', number> => {
  const rankings = getUserRanking();
  
  return {
    red: rankings.filter(r => r.team === 'red').reduce((total, user) => total + user.totalSpent, 0),
    green: rankings.filter(r => r.team === 'green').reduce((total, user) => total + user.totalSpent, 0),
    blue: rankings.filter(r => r.team === 'blue').reduce((total, user) => total + user.totalSpent, 0)
  };
};

// Get user spending history
export const getUserSpendingHistory = (userId: string): SpendingRecord[] => {
  return spendingRecords
    .filter(record => record.userId === userId)
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

// Apply user spending for rank increase
export const applyUserSpending = async (
  user: UserProfile, 
  amount: number, 
  description: string = "Leaderboard contribution"
): Promise<boolean> => {
  try {
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }
    
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
    
    // Record the spending
    const success = await addSpendingRecord(
      user.id, 
      amount, 
      'contribution',
      description
    );
    
    if (success) {
      // In a real app, we would also update the user's profile
      // Here we're just using local state from AuthContext
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error applying spending:', error);
    toast({
      title: "Payment Error",
      description: error.message || "Failed to process your contribution",
      variant: "destructive"
    });
    return false;
  }
};
