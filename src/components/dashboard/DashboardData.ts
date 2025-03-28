
import { RoyalActivity } from '@/types/activity';

// Generate mock activities for the dashboard
export const getMockActivities = (): RoyalActivity[] => {
  return [
    {
      id: 'act1',
      type: 'spend',
      title: 'Royal Expenditure',
      description: 'You spent $50 to boost your ranking',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      amount: 50,
      isPositive: true
    },
    {
      id: 'act2',
      type: 'rank',
      title: 'Rank Ascension',
      description: 'You climbed 3 ranks on the leaderboard',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      rankChange: 3,
      isPositive: true
    },
    {
      id: 'act3',
      type: 'team',
      title: 'Team Contribution',
      description: 'Your team gained 120 points from your spending',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      team: 'blue',
      isPositive: true
    },
    {
      id: 'act4',
      type: 'profile',
      title: 'Profile Views',
      description: 'Your profile was viewed 12 times today',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 10), // 10 hours ago
      isPositive: true
    },
    {
      id: 'act5',
      type: 'cosmetic',
      title: 'Royal Enhancement',
      description: 'You acquired the "Golden Aura" cosmetic',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      isPositive: true
    }
  ];
};
