
export interface LeaderboardUser {
  id: number;
  username: string;
  amountSpent: number;
  rank: number;
  team: string;
  profileImage: string;
  title: string;
}

export const mockLeaderboardData: LeaderboardUser[] = [
  { id: 1, username: 'SupremeOverlord', amountSpent: 1500, rank: 1, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=1', title: 'High King' },
  { id: 2, username: 'WealthyPatron', amountSpent: 1200, rank: 2, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=2', title: 'Grand Duke' },
  { id: 3, username: 'RoyalBenefactor', amountSpent: 950, rank: 3, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=3', title: 'Archduke' },
  { id: 4, username: 'NobleQueen', amountSpent: 800, rank: 4, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=4', title: 'Marquess' },
  { id: 5, username: 'OpulentRuler', amountSpent: 750, rank: 5, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=5', title: 'Earl' },
  { id: 6, username: 'CoffersMaster', amountSpent: 600, rank: 6, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=6', title: 'Viscount' },
  { id: 7, username: 'RegalPatroness', amountSpent: 550, rank: 7, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=7', title: 'Baron' },
  { id: 8, username: 'TreasureKeeper', amountSpent: 480, rank: 8, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=8', title: 'Baronet' },
  { id: 9, username: 'CrownServant', amountSpent: 420, rank: 9, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=9', title: 'Knight' },
  { id: 10, username: 'RoyalMerchant', amountSpent: 350, rank: 10, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=10', title: 'Squire' },
];
