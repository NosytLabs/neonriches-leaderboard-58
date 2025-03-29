
import { UserProfile, TeamType, UserTier, UserGender } from '@/types/user';

export const generateMockUser = (): UserProfile => {
  const id = 'user_' + Date.now();
  const randomUsername = 'noble_' + Math.random().toString(36).substring(2, 8);
  const joinedAt = new Date().toISOString();
  
  // Generate random rank between 1 and 100
  const rank = Math.floor(Math.random() * 100) + 1;
  
  // Generate random spent amount between $1 and $1000
  const totalSpent = Math.floor(Math.random() * 1000) + 1;
  
  // Determine tier based on spending
  let tier: UserTier = 'bronze';
  if (totalSpent >= 500) tier = 'gold';
  else if (totalSpent >= 100) tier = 'silver';
  else if (totalSpent >= 50) tier = 'bronze';
  else tier = 'free';
  
  // Randomly assign to a team
  const teams: TeamType[] = ['red', 'green', 'blue', 'none'];
  const randomTeam = teams[Math.floor(Math.random() * teams.length)];
  
  // Generate wallet balance between $10 and $500
  const walletBalance = Math.floor(Math.random() * 490) + 10;
  
  return {
    id,
    username: randomUsername,
    displayName: randomUsername.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    email: `${randomUsername}@example.com`,
    profileImage: `https://api.dicebear.com/6.x/personas/svg?seed=${randomUsername}`,
    bio: 'A noble adventurer in the SpendThrone realm!',
    totalSpent,
    amountSpent: totalSpent,
    rank,
    previousRank: rank + Math.floor(Math.random() * 10) - 5,
    team: randomTeam,
    joinedAt,
    walletBalance,
    tier,
    gender: 'neutral' as UserGender,
    cosmetics: {
      badges: [],
      titles: ['newcomer'],
      borders: ['basic'],
      effects: [],
      emojis: []
    },
    activeTitle: 'newcomer'
  };
};

// Export the function
export default generateMockUser;
