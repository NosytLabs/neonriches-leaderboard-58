
import { TeamColor } from '@/types/team';

export interface TeamData {
  id: TeamColor;
  name: string;
  description: string;
  color: string;
  members: number;
  totalSpent: number;
  rank: number;
  icon: string;
}

export const teams: TeamData[] = [
  {
    id: 'red',
    name: 'Red Team',
    description: 'The aggressive and competitive team focused on dominance.',
    color: 'red',
    members: 1245,
    totalSpent: 2345000,
    rank: 2,
    icon: 'fire'
  },
  {
    id: 'blue',
    name: 'Blue Team',
    description: 'The strategic and loyal team focused on consistency.',
    color: 'blue',
    members: 1568,
    totalSpent: 1987000,
    rank: 3,
    icon: 'shield'
  },
  {
    id: 'green',
    name: 'Green Team',
    description: 'The resourceful and collaborative team focused on growth.',
    color: 'green',
    members: 987,
    totalSpent: 1456000,
    rank: 4,
    icon: 'leaf'
  },
  {
    id: 'gold',
    name: 'Gold Team',
    description: 'The elite and exclusive team for top spenders only.',
    color: 'gold',
    members: 345,
    totalSpent: 3678000,
    rank: 1,
    icon: 'crown'
  }
];

export default teams;
