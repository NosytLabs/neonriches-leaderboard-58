
// Team types
export type TeamColor = 'red' | 'green' | 'blue';

export interface Team {
  id: TeamColor;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  members: number;
  rank: number;
}

export const teamData: Record<TeamColor, Team> = {
  red: {
    id: 'red',
    name: 'Red Team',
    description: 'The fiery warriors of the neon flame',
    icon: '🔥',
    color: '#FF4560',
    bgColor: 'rgba(255, 69, 96, 0.2)',
    members: 1205,
    rank: 2
  },
  green: {
    id: 'green',
    name: 'Green Team',
    description: 'The electrifying force of the lime zap',
    icon: '⚡',
    color: '#00E396',
    bgColor: 'rgba(0, 227, 150, 0.2)',
    members: 983,
    rank: 3
  },
  blue: {
    id: 'blue',
    name: 'Blue Team',
    description: 'The mesmerizing flow of the cool pulse',
    icon: '💧',
    color: '#008FFB',
    bgColor: 'rgba(0, 143, 251, 0.2)',
    members: 1347,
    rank: 1
  }
};
