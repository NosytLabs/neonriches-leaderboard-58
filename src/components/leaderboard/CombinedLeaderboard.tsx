
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Filter, Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { User } from '@/types/user';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import LeaderboardList from './components/LeaderboardList';

// Create some mock data
const mockUsers: User[] = [
  {
    id: '1',
    username: 'RoyalSpender',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=RoyalSpender',
    tier: 'founder',
    team: 'red',
    totalSpent: 10000,
    rank: 1
  },
  {
    id: '2',
    username: 'CrownCollector',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=CrownCollector',
    tier: 'founder',
    team: 'blue',
    totalSpent: 8500,
    rank: 2
  },
  {
    id: '3',
    username: 'ThroneSeeker',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=ThroneSeeker',
    tier: 'basic',
    team: 'green',
    totalSpent: 6000,
    rank: 3
  },
  {
    id: '4',
    username: 'RegalDonor',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=RegalDonor',
    tier: 'basic',
    team: 'red',
    totalSpent: 4500,
    rank: 4
  },
  {
    id: '5',
    username: 'NobleCash',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=NobleCash',
    tier: 'basic',
    team: 'blue',
    totalSpent: 3200,
    rank: 5
  }
];

const CombinedLeaderboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(mockUsers);
  
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
  
  const handleShameUser = (user: User, action: string) => {
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
