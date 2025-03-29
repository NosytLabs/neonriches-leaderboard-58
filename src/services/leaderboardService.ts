import { faker } from '@faker-js/faker';
import { User } from '@/types/user';

/**
 * Generates a random integer between min and max (inclusive)
 * @param min The minimum value
 * @param max The maximum value
 * @returns A random integer
 */
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates a mock leaderboard
 * @param count The number of users to generate
 * @returns An array of mock users
 */
export const generateMockLeaderboard = (count: number = 50): User[] => {
  const leaderboard: User[] = [];
  
  for (let i = 0; i < count; i++) {
    const userTeam = faker.helpers.arrayElement(['red', 'green', 'blue', null]);
    const userTier = faker.helpers.arrayElement(['basic', 'premium', 'royal']);
    const totalSpent = getRandomInt(10, 5000);
    
    leaderboard.push({
      id: `user-${getRandomInt(1000, 9999)}`,
      username: faker.internet.userName(),
      displayName: faker.name.fullName(),
      team: userTeam,
      tier: userTier,
      rank: i + 1,
      totalSpent: totalSpent,
      amountSpent: totalSpent,
      profileImage: faker.image.avatar(),
      joinDate: faker.date.past().toISOString(),
      walletBalance: Math.floor(Math.random() * 1000),
      email: faker.internet.email(),
      socialLinks: [],
      profileBoosts: [],
      createdAt: faker.date.past().toISOString()
    });
  }
  
  return leaderboard;
};

/**
 * Gets a user ranking
 * @returns An array of mock users
 */
export const getUserRanking = (): User[] => {
  return generateMockLeaderboard(25);
};
