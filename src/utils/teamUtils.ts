
export const getTeamColor = (team: 'red' | 'green' | 'blue' | null): string => {
  switch (team) {
    case 'red':
      return 'text-red-500';
    case 'green':
      return 'text-green-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-gray-400';
  }
};

export const getTeamBorderColor = (team: 'red' | 'green' | 'blue' | null): string => {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'green':
      return 'border-green-500';
    case 'blue':
      return 'border-blue-500';
    default:
      return 'border-gray-400';
  }
};

export const getTeamName = (team: 'red' | 'green' | 'blue' | null): string => {
  switch (team) {
    case 'red':
      return 'Red Team';
    case 'green':
      return 'Green Team';
    case 'blue':
      return 'Blue Team';
    default:
      return 'No Team';
  }
};

export const getGenderTitle = (gender: string | null | undefined): string => {
  switch (gender) {
    case 'king':
      return 'King';
    case 'queen':
      return 'Queen';
    case 'jester':
      return 'Jester';
    case 'noble':
      return 'Noble';
    default:
      return 'Citizen';
  }
};

export const getGenderEmoji = (gender: string | null | undefined): string => {
  switch (gender) {
    case 'king':
      return '👑';
    case 'queen':
      return '👸';
    case 'jester':
      return '🃏';
    case 'noble':
      return '🏰';
    default:
      return '👤';
  }
};

export const getInitials = (username: string): string => {
  return username
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
};
