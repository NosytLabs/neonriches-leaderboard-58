
import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/Shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LeaderboardFilter } from '@/types/leaderboard';
import useSoundEffect from '@/hooks/useSoundEffect';
import { useLeaderboard } from '@/hooks/useLeaderboard';
import ShameModal from '@/components/events/components/ShameModal';
import { Dialog } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { toTeamColor } from '@/utils/teamUtils';
import { MockeryAction } from '@/types/mockery-types';

const Leaderboard = () => {
  const { toast } = useToast();
  const soundEffect = useSoundEffect({
    tab: '/sounds/tab-change.mp3',
    coin: '/sounds/coin-drop.mp3',
    shame: '/sounds/shame.mp3'
  });

  const {
    users,
    loading,
    filter,
    setFilter,
    updateFilter
  } = useLeaderboard();

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showShameModal, setShowShameModal] = useState(false);

  const playTabSound = () => {
    soundEffect.playSound('tab');
  };

  const handleTimeframeChange = (timeframe: string) => {
    playTabSound();
    setFilter((prev: any) => ({ ...prev, timeframe }));
  };

  const handleTeamChange = (team: string) => {
    playTabSound();
    setFilter((prev: any) => ({ ...prev, team }));
  };

  const handleTierChange = (tier: string) => {
    playTabSound();
    setFilter((prev: any) => ({ ...prev, tier }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilter({ search: e.target.value });
  };

  const handleShameUser = (userId: string) => {
    setSelectedUserId(userId);
    setShowShameModal(true);
  };

  const handleShameComplete = () => {
    setSelectedUserId(null);
    setShowShameModal(false);
    
    soundEffect.playSound('shame');
    
    toast({
      title: "Mockery Complete!",
      description: "Your mockery has been sent successfully.",
    });
  };

  const handleShameConfirm = () => {
    // Implement mockery action here
    handleShameComplete();
  };

  // Render leaderboard tables by team
  const renderTeamLeaderboard = (teamColor: string) => {
    const teamUsers = users.filter(user => 
      String(user.team).toLowerCase() === teamColor.toLowerCase()
    );
    
    return (
      <div className="space-y-4">
        {teamUsers.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No users found for this team
          </div>
        ) : (
          <div className="space-y-4">
            {teamUsers.map((user) => (
              <div key={user.id} className="flex items-center p-4 rounded-lg bg-card border">
                <div className="w-8 text-center font-bold">#{user.rank}</div>
                <div className="flex-1 ml-4">
                  <div className="font-medium">{user.displayName || user.username}</div>
                  <div className="text-sm text-muted-foreground">
                    {user.isVerified && '✓ '}{user.team} • {user.tier}
                  </div>
                </div>
                <div className="text-right mr-4">
                  <div className="font-medium">{user.totalSpent.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Coins</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShameUser(user.userId)}
                >
                  Mock
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Find selected user for shame modal
  const selectedUser = selectedUserId 
    ? users.find(user => user.userId === selectedUserId) 
    : null;

  return (
    <Shell>
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-2">Royal Leaderboard</h1>
        <p className="text-muted-foreground mb-8">
          Witness the greatest spenders in the kingdom and their magnificent achievements
        </p>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search users..."
              value={filter.search || ''}
              onChange={handleSearch}
            />
          </div>
          
          <div className="flex gap-2">
            <Select
              value={filter.timeframe || 'all'}
              onValueChange={handleTimeframeChange}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filter.team || 'all'}
              onValueChange={handleTeamChange}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="gold">Gold</SelectItem>
                <SelectItem value="purple">Purple</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filter.tier || 'all'}
              onValueChange={handleTierChange}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="royal">Royal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="all" onClick={() => playTabSound()}>All</TabsTrigger>
            <TabsTrigger value="red" onClick={() => playTabSound()}>Red Team</TabsTrigger>
            <TabsTrigger value="blue" onClick={() => playTabSound()}>Blue Team</TabsTrigger>
            <TabsTrigger value="green" onClick={() => playTabSound()}>Green Team</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">
                Loading leaderboard data...
              </div>
            ) : users.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No users found matching your filters
              </div>
            ) : (
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center p-4 rounded-lg bg-card border">
                    <div className="w-8 text-center font-bold">#{user.rank}</div>
                    <div className="flex-1 ml-4">
                      <div className="font-medium">{user.displayName || user.username}</div>
                      <div className="text-sm text-muted-foreground">
                        {user.isVerified && '✓ '}{user.team} • {user.tier}
                      </div>
                    </div>
                    <div className="text-right mr-4">
                      <div className="font-medium">{user.totalSpent.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Total Coins</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShameUser(user.userId)}
                    >
                      Mock
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="red">
            {renderTeamLeaderboard('red')}
          </TabsContent>
          
          <TabsContent value="blue">
            {renderTeamLeaderboard('blue')}
          </TabsContent>
          
          <TabsContent value="green">
            {renderTeamLeaderboard('green')}
          </TabsContent>
        </Tabs>
        
        {selectedUser && (
          <Dialog
            open={showShameModal}
            onOpenChange={setShowShameModal}
          >
            <ShameModal
              targetUser={{
                userId: selectedUser.userId,
                username: selectedUser.username,
                profileImage: selectedUser.profileImage,
                totalSpent: selectedUser.totalSpent,
                rank: selectedUser.rank,
                team: toTeamColor(selectedUser.team),
                tier: selectedUser.tier,
                spendStreak: selectedUser.spendStreak
              }}
              shameType="mock" as MockeryAction
              onConfirm={handleShameConfirm}
              onCancel={() => setShowShameModal(false)}
            />
          </Dialog>
        )}
      </div>
    </Shell>
  );
};

export default Leaderboard;
