
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { LeaderboardUser, mockLeaderboardData } from './leaderboard/LeaderboardUtils';
import LeaderboardItem from './leaderboard/LeaderboardItem';
import PokeModal from './leaderboard/PokeModal';
import LeaderboardActions from './leaderboard/LeaderboardActions';

const InteractiveLeaderboard: React.FC = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>(mockLeaderboardData);
  const [pokeAmount, setPokeAmount] = useState<number>(0.5);
  const [showPokeOptions, setShowPokeOptions] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<LeaderboardUser | null>(null);
  const [isPokeCooldown, setIsPokeCooldown] = useState<boolean>(false);

  useEffect(() => {
    // In a real app, fetch leaderboard data from API
  }, []);

  const handleProfileClick = (userId: string) => {
    // In a real app, navigate to user profile
    console.log(`View profile of user ${userId}`);
    toast({
      title: "Royal Intelligence",
      description: `You are now spying on another noble's profile. How delightfully scandalous!`,
      duration: 2000,
    });
    // navigate(`/profile/${userId}`);
  };

  const handlePokeUser = (user: LeaderboardUser) => {
    setSelectedUser(user);
    setShowPokeOptions(true);
    
    // Play subtle royal sound effect
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-fairy-arcade-sparkle-866.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio playback error:', e));
  };

  const confirmPoke = () => {
    if (!selectedUser || isPokeCooldown) return;
    
    // Simulate API call for poke action
    setTimeout(() => {
      toast({
        title: "Royal Sabotage Complete!",
        description: `You spent $${pokeAmount} to push ${selectedUser.username} down the ranks. How delightfully petty!`,
      });
      
      // Update the leaderboard to reflect changes
      const updatedLeaderboard = [...leaderboardData];
      const pokedUserIndex = updatedLeaderboard.findIndex(u => u.id === selectedUser.id);
      
      if (pokedUserIndex > 0 && pokedUserIndex < updatedLeaderboard.length) {
        // Swap positions with the user below them
        const temp = { ...updatedLeaderboard[pokedUserIndex] };
        updatedLeaderboard[pokedUserIndex] = { ...updatedLeaderboard[pokedUserIndex + 1], rank: updatedLeaderboard[pokedUserIndex].rank };
        updatedLeaderboard[pokedUserIndex + 1] = { ...temp, rank: updatedLeaderboard[pokedUserIndex + 1].rank };
        
        setLeaderboardData(updatedLeaderboard);
      }
      
      setShowPokeOptions(false);
      setSelectedUser(null);
      setIsPokeCooldown(true);
      
      // Set cooldown for poke action
      setTimeout(() => {
        setIsPokeCooldown(false);
        toast({
          title: "Royal Mischief Ready",
          description: "Your ability to sabotage other nobles has been replenished!",
          duration: 2000,
        });
      }, 30000); // 30-second cooldown
    }, 1000);
  };

  const handleClosePokeModal = () => {
    setShowPokeOptions(false);
    setSelectedUser(null);
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal royal-gradient flex items-center">
          <Crown size={18} className="text-royal-gold mr-2" />
          Royal Court Standings
        </CardTitle>
      </CardHeader>
      <CardContent>
        {leaderboardData.map((userData, index) => (
          <LeaderboardItem
            key={userData.id}
            userData={userData}
            index={index}
            currentUserId={user?.id}
            isPokeCooldown={isPokeCooldown}
            onProfileClick={handleProfileClick}
            onPokeUser={handlePokeUser}
          />
        ))}
        
        <LeaderboardActions />
        
        {showPokeOptions && selectedUser && (
          <PokeModal
            selectedUser={selectedUser}
            pokeAmount={pokeAmount}
            onClose={handleClosePokeModal}
            onConfirm={confirmPoke}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveLeaderboard;
