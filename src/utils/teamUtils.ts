
import { TeamType, UserGender, UserTeam } from '@/types/user';

export const getTeamColor = (team: string): string => {
  switch (team) {
    case 'red':
      return 'bg-red-500 text-white';
    case 'blue':
      return 'bg-blue-500 text-white';
    case 'green':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export const getTeamName = (team: string): string => {
  switch (team) {
    case 'red':
      return 'Purple Dynasty';
    case 'blue':
      return 'Azure Order';
    case 'green':
      return 'Gold Dominion';
    default:
      return 'Unaffiliated';
  }
};

export const getGenderTitle = (gender: UserGender): string => {
  switch (gender) {
    case 'king':
      return 'His Majesty';
    case 'queen':
      return 'Her Majesty';
    default:
      return 'Their Excellency';
  }
};

export const mockTeams: UserTeam[] = [
  {
    id: 'red',
    name: 'Purple Dynasty',
    description: 'The prestigious Purple Dynasty values tradition, wealth, and status above all else.',
    color: 'purple',
    members: 342,
    totalSpent: 78500,
    rank: 1
  },
  {
    id: 'blue',
    name: 'Azure Order',
    description: 'The Azure Order believes in cold, calculated spending to demonstrate true power.',
    color: 'blue',
    members: 286,
    totalSpent: 65200,
    rank: 2
  },
  {
    id: 'green',
    name: 'Gold Dominion',
    description: 'The Gold Dominion promotes financial abundance and ostentatious displays of wealth.',
    color: 'amber',
    members: 198,
    totalSpent: 43800,
    rank: 3
  }
];
