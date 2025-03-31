
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeaderboardUser } from '@/types/leaderboard';
import { User } from '@/types/user';
import LeaderboardRow from './LeaderboardRow';

export interface LeaderboardCardProps {
  title: string;
  users: LeaderboardUser[];
  currentUser: User;
  filter?: { tier: string; team: string; searchQuery: string }; // Added filter prop
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ 
  title, 
  users, 
  currentUser,
  filter = { tier: 'all', team: 'all', searchQuery: '' } // Default filter values
}) => {
  // Apply filters if provided
  const filteredUsers = users.filter(user => {
    // Filter by tier
    if (filter.tier !== 'all' && user.tier !== filter.tier) {
      return false;
    }
    
    // Filter by team
    if (filter.team !== 'all' && user.team !== filter.team) {
      return false;
    }
    
    // Filter by search query (username or displayName)
    if (filter.searchQuery && !user.username.toLowerCase().includes(filter.searchQuery.toLowerCase()) && 
        (!user.displayName || !user.displayName.toLowerCase().includes(filter.searchQuery.toLowerCase()))) {
      return false;
    }
    
    return true;
  });

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <LeaderboardRow 
                key={user.id} 
                user={user} 
                position={index + 1} 
                isCurrentUser={user.id === currentUser.id} 
              />
            ))
          ) : (
            <div className="py-4 text-center">
              <p className="text-white/60">No users match your filter criteria.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
