
import { User } from '@/types/user';

/**
 * Check if the current month is a FireSale month (e.g., seasonal sale)
 */
export const isFireSaleMonth = (): boolean => {
  const currentMonth = new Date().getMonth();
  // Returns true for December (11), July (6), and March (2)
  return [2, 6, 11].includes(currentMonth);
};

/**
 * Get the current FireSale discount percentage based on the current month
 */
export const getFireSaleDiscountPercentage = (): number => {
  if (!isFireSaleMonth()) return 0;
  
  const currentMonth = new Date().getMonth();
  
  // Different discount percentages for different months
  switch (currentMonth) {
    case 11: // December - Holiday Sale
      return 30;
    case 6: // July - Summer Sale
      return 25;
    case 2: // March - Spring Sale
      return 20;
    default:
      return 15;
  }
};

/**
 * Get a random set of users to be featured in shaming events
 * @param count Number of users to return
 * @param excludeUserId Optional user ID to exclude from results
 */
export const getRandomShameableUsers = (count: number, excludeUserId?: string): User[] => {
  // This would typically come from an API, but for demo, we'll generate them
  const mockUsers: User[] = [];
  
  for (let i = 0; i < count + (excludeUserId ? 1 : 0); i++) {
    const mockUser: User = {
      id: `user-${i + 100}`,
      email: `user${i + 100}@example.com`,
      username: `royal_subject_${i + 100}`,
      displayName: `Royal Subject #${i + 100}`,
      profileImage: `https://source.unsplash.com/random/300x300?portrait&sig=${i}`,
      createdAt: new Date().toISOString(),
      rank: i + 1,
      tier: i < 2 ? 'whale' : i < 5 ? 'shark' : i < 10 ? 'dolphin' : 'fish',
      team: ['red', 'green', 'blue'][i % 3] as any,
      totalSpent: 1000 - (i * 100),
      spentAmount: 1000 - (i * 100),
      amountSpent: 1000 - (i * 100),
      walletBalance: 50 + (i * 10),
    };
    
    mockUsers.push(mockUser);
  }
  
  // Filter out the excluded user if needed
  const filteredUsers = excludeUserId 
    ? mockUsers.filter(user => user.id !== excludeUserId)
    : mockUsers;
  
  // Return only the requested number of users
  return filteredUsers.slice(0, count);
};

export default {
  isFireSaleMonth,
  getFireSaleDiscountPercentage,
  getRandomShameableUsers
};
