
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Filter, Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { UserProfile } from '@/types/user-types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import LeaderboardList from './components/LeaderboardList';

// Create some mock data that conforms to UserProfile
const mockUsers: UserProfile[] = [
  {
    id: '1',
    username: 'RoyalSpender',
    displayName: 'Royal Spender',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=RoyalSpender',
    tier: 'founder',
    team: 'red',
    totalSpent: 10000,
    rank: 1,
    email: 'royal@spendthrone.com',
    bio: 'Always spending for the throne',
    joinDate: '2023-01-01T00:00:00Z',
    isVerified: true,
    isFounder: true
  },
  {
    id: '2',
    username: 'CrownCollector',
    displayName: 'Crown Collector',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=CrownCollector',
    tier: 'founder',
    team: 'blue',
    totalSpent: 8500,
    rank: 2,
    email: 'crown@spendthrone.com',
    bio: 'Collecting crowns since day one',
    joinDate: '2023-01-05T00:00:00Z',
    isVerified: true,
    isFounder: true
  },
  {
    id: '3',
    username: 'ThroneSeeker',
    displayName: 'Throne Seeker',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=ThroneSeeker',
    tier: 'basic',
    team: 'green',
    totalSpent: 6000,
    rank: 3,
    email: 'throne@spendthrone.com',
    bio: 'Seeking the throne through spending',
    joinDate: '2023-01-10T00:00:00Z',
    isVerified: true,
    isFounder: false
  },
  {
    id: '4',
    username: 'RegalDonor',
    displayName: 'Regal Donor',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=RegalDonor',
    tier: 'basic',
    team: 'red',
    totalSpent: 4500,
    rank: 4,
    email: 'regal@spendthrone.com',
    bio: 'Donating regally every day',
    joinDate: '2023-01-15T00:00:00Z',
    isVerified: true,
    isFounder: false
  },
  {
    id: '5',
    username: 'NobleCash',
    displayName: 'Noble Cash',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=NobleCash',
    tier: 'basic',
    team: 'blue',
    totalSpent: 3200,
    rank: 5,
    email: 'noble@spendthrone.com',
    bio: 'Cash is king, and I am noble',
    joinDate: '2023-01-20T00:00:00Z',
    isVerified: true,
    isFounder: false
  }
];

const CombinedLeaderboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>(mockUsers);
  
  // Filter users on search query change
  useEffect(() => {
    if (!searchQuery) {
      setFilteredUsers(mockUsers);
      return;
    }
    
    const lowercaseQuery = searchQuery.toLowerCase();
    const filtered = mockUsers.filter(user => 
      user.username.toLowerCase().includes(lowercaseQuery)
    );
    
    setFilteredUsers(filtered);
  }, [searchQuery]);
  
  const handleProfileClick = (userId: string, username: string) => {
    navigate(`/profile/${username}`);
  };
  
  const handleShameUser = (user: UserProfile, action: string) => {
    console.log(`Applied ${action} to user ${user.username}`);
    // Show toast or notification
  };
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Spending Leaderboard
          </CardTitle>
          <CardDescription>
            Where nobles compete for rank and glory through monetary sacrifice
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input
                  placeholder="Search nobles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 glass-morphism border-white/10"
                />
              </div>
              
              <Button variant="outline" size="icon" className="glass-morphism border-white/10">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="sm" className="gap-1 glass-morphism border-white/10">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Teams</span>
              </Button>
            </div>
          </div>
          
          <LeaderboardList
            users={filteredUsers}
            loading={isLoading}
            limit={10}
            currentUserId={user?.id}
            onProfileClick={handleProfileClick}
            onShameUser={handleShameUser}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CombinedLeaderboard;
