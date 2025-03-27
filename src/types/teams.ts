
export type TeamColor = 'red' | 'green' | 'blue';

export interface Team {
  id: TeamColor;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  members: number;
  totalSpent: number;
  rank: number;
  icon: string;
}

export const teamData: Record<TeamColor, Team> = {
  red: {
    id: 'red',
    name: 'Neon Fire',
    description: 'Blazing spirits who spend with passion and intensity.',
    color: '#FF5555',
    bgColor: 'rgba(255, 85, 85, 0.2)',
    members: 28,
    totalSpent: 4250,
    rank: 1,
    icon: '🔥'
  },
  green: {
    id: 'green',
    name: 'Lime Zap',
    description: 'Energetic spenders who electrify the leaderboard.',
    color: '#55FF55',
    bgColor: 'rgba(85, 255, 85, 0.2)',
    members: 22,
    totalSpent: 3800,
    rank: 2,
    icon: '⚡'
  },
  blue: {
    id: 'blue',
    name: 'Cool Pulse',
    description: 'Calculated and strategic spenders who rise with steady rhythm.',
    color: '#5555FF',
    bgColor: 'rgba(85, 85, 255, 0.2)',
    members: 25,
    totalSpent: 3500,
    rank: 3,
    icon: '❄️'
  }
};
