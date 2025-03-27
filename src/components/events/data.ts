
// Mock events data
export const currentEvent = {
  id: 1,
  name: 'Poke Party',
  description: 'Pay $0.50 to drop another user down one rank for 24 hours',
  startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  endDate: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),   // 4 days from now
  progress: 65,
  image: 'https://picsum.photos/id/430/800/400',
  participantCount: 243
};

export const upcomingEvents = [
  {
    id: 2,
    name: 'Rank Multiplier',
    description: 'All contributions count double towards rank for 24 hours',
    startDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),   // 5 days from now
    endDate: new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000),     // 6 days from now
    image: 'https://picsum.photos/id/431/800/400',
    participantCount: 0
  },
  {
    id: 3,
    name: 'Team Takeover',
    description: 'The team with the most contributions this week gets a special badge',
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

export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const getTeamColor = (team: string) => {
  switch (team) {
    case 'red': return 'team-red';
    case 'green': return 'team-green';
    case 'blue': return 'team-blue';
    default: return 'white';
  }
};

// Calculate time left from now to a target date
export const getTimeLeft = (targetDate: Date) => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

