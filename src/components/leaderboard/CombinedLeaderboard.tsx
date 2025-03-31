
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import LeaderboardEntry from '@/components/leaderboard/components/LeaderboardEntry';
import { Team } from '@/types/team';
import { UserProfile, User } from '@/types/user-types';
import { cn } from '@/lib/utils';

const dummyUsers: User[] = [
  {
    id: '1',
    username: 'RoyalThroneGuru',
    displayName: 'Royal Guru',
    email: 'guru@example.com',
    profileImage: '/throne-assets/crown-icon.svg',
    bio: 'Founder of SpendThrone',
    joinDate: '2023-01-01',
    tier: 'founder',
    team: 'red',
    totalSpent: 1000,
    rank: 1,
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      marketingEmails: true,
      soundEffects: true,
      showRank: true,
      showTeam: true,
      showBadges: true
    },
    isFounder: true,
    socialLinks: []
  },
  {
    id: '2',
    username: 'ThroneMaster',
    displayName: 'Throne Master',
    email: 'master@example.com',
    profileImage: '/throne-assets/throne-icon.svg',
    bio: 'Throne Master',
    joinDate: '2023-01-02',
    tier: 'founder',
    team: 'blue',
    totalSpent: 950,
    rank: 2,
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      marketingEmails: true,
      soundEffects: true,
      showRank: true,
      showTeam: true,
      showBadges: true
    },
    isFounder: true,
    socialLinks: []
  },
  {
    id: '3',
    username: 'RichGamer99',
    displayName: 'Rich Gamer',
    email: 'rich@example.com',
    profileImage: '/throne-assets/coin-stack.svg',
    bio: 'I just like spending money',
    joinDate: '2023-01-03',
    tier: 'basic',
    team: 'green',
    totalSpent: 800,
    rank: 3,
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      marketingEmails: true,
      soundEffects: true,
      showRank: true,
      showTeam: true,
      showBadges: true
    },
    isFounder: false,
    socialLinks: []
  },
  {
    id: '4',
    username: 'EpicWhaler',
    displayName: 'Epic Whaler',
    email: 'whale@example.com',
    profileImage: '/throne-assets/treasure-chest.svg',
    bio: 'Big whale, big heart',
    joinDate: '2023-01-04',
    tier: 'basic',
    team: 'red',
    totalSpent: 700,
    rank: 4,
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      marketingEmails: true,
      soundEffects: true,
      showRank: true,
      showTeam: true,
      showBadges: true
    },
    isFounder: false,
    socialLinks: []
  },
  {
    id: '5',
    username: 'MedievalSpender',
    displayName: 'Medieval Spender',
    email: 'medieval@example.com',
    profileImage: '/throne-assets/shield-emblem.svg',
    bio: 'I love medieval themes',
    joinDate: '2023-01-05',
    tier: 'basic',
    team: 'blue',
    totalSpent: 600,
    rank: 5,
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      marketingEmails: true,
      soundEffects: true,
      showRank: true,
      showTeam: true,
      showBadges: true
    },
    isFounder: false,
    socialLinks: []
  },
];

interface CombinedLeaderboardProps {
  limit?: number;
  className?: string;
  showHeader?: boolean;
  onUserClick?: (user: User, action: string) => void;
}

const CombinedLeaderboard: React.FC<CombinedLeaderboardProps> = ({
  limit = 5,
  className,
  showHeader = true,
  onUserClick
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    setUsers(dummyUsers.slice(0, limit));
    setLoading(false);
  }, [limit]);

  const handleUserClick = (user: UserProfile, action: string) => {
    if (onUserClick) {
      onUserClick(user as User, action);
    }
  };

  if (loading) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4">Loading leaderboard...</CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      {showHeader && (
        <CardHeader className="border-b border-white/10 pb-3">
          <CardTitle className="flex items-center text-xl">
            <Trophy className="w-5 h-5 mr-2 text-royal-gold" />
            Top Spenders
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-0">
        <div className="divide-y divide-white/10">
          {users.map((user, index) => (
            <LeaderboardEntry
              key={user.id}
              user={user}
              rank={index + 1}
              onClick={handleUserClick}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CombinedLeaderboard;
