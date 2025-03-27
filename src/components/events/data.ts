
// Mock events data
import { getTeamColor as getTeamColorUtil } from '@/components/leaderboard/TeamUtils';

export const currentEvent = {
  id: 1,
  name: 'Poke Party',
  description: 'Pay $0.50 to visually drop another user down one rank for 24 hours. This is purely cosmetic and doesn\'t affect actual rankings - your $1 = 1 rank is always preserved.',
  startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  endDate: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),   // 4 days from now
  progress: 65,
  image: 'https://picsum.photos/id/430/800/400',
  participantCount: 243
};

export const upcomingEvents = [
  {
    id: 2,
    name: 'Exclusive Titles',
    description: 'Participate to unlock rare cosmetic titles for your profile. Earn titles like "Royal Jester" or "Court Wizard" to display on your profile. Remember: these are cosmetic only and don\'t affect your rank.',
    startDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),   // 5 days from now
    endDate: new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000),     // 6 days from now
    image: 'https://picsum.photos/id/431/800/400',
    participantCount: 0
  },
  {
    id: 3,
    name: 'Team Badge Showcase',
    description: 'The team with the most participants this week gets a special cosmetic badge. Show your team pride with unique profile flair. All badges are purely cosmetic and don\'t alter the $1 = 1 rank system.',
    startDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),   // 7 days from now
    endDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),    // 14 days from now
    image: 'https://picsum.photos/id/452/800/400',
    participantCount: 0
  }
];

// Mock top users for the "Poke" target list
export const topUsers = [
  { id: 1, username: 'NeonBoss', amountSpent: 1500, rank: 1, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, username: 'DigitalWhale', amountSpent: 1200, rank: 2, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, username: 'CryptoKing', amountSpent: 950, rank: 3, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, username: 'BlockchainQueen', amountSpent: 800, rank: 4, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, username: 'MetaverseRuler', amountSpent: 750, rank: 5, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=5' },
];

// Use the utility from TeamUtils for consistency across the app
export const getTeamColor = getTeamColorUtil;
