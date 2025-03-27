
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, DollarSign, Award, Eye, Heart, Ban, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import PaymentModal from '@/components/PaymentModal';

interface LeaderboardUser {
  id: string;
  username: string;
  amountSpent: number;
  rank: number;
  team: 'red' | 'green' | 'blue' | null;
  profileImage?: string;
  gender?: 'king' | 'queen' | 'jester' | null;
}

const mockLeaderboardData: LeaderboardUser[] = [
  { id: '1', username: 'RoyalOverlord', amountSpent: 2500, rank: 1, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=11', gender: 'king' },
  { id: '2', username: 'GoldenThrone', amountSpent: 2200, rank: 2, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=12', gender: 'queen' },
  { id: '3', username: 'WealthyNoble', amountSpent: 1900, rank: 3, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=13', gender: 'jester' },
  { id: '4', username: 'RegalSpender', amountSpent: 1650, rank: 4, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=14', gender: 'king' },
  { id: '5', username: 'PurpleDuke', amountSpent: 1480, rank: 5, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=15', gender: 'jester' },
];

const getTeamColor = (team: string | null) => {
  switch (team) {
    case 'red': return 'text-royal-purple';
    case 'green': return 'text-royal-gold';
    case 'blue': return 'text-royal-blue';
    default: return 'text-white/70';
  }
};

const getTeamBorderColor = (team: string | null) => {
  switch (team) {
    case 'red': return 'border-royal-purple';
    case 'green': return 'border-royal-gold';
    case 'blue': return 'border-royal-blue';
    default: return 'border-white/20';
  }
};

const getGenderTitle = (gender: string | null) => {
  switch (gender) {
    case 'king': return 'His Majesty';
    case 'queen': return 'Her Majesty';
    case 'jester': return 'Court Jester';
    default: return 'Noble';
  }
};

const getGenderEmoji = (gender: string | null) => {
  switch (gender) {
    case 'king': return '👑';
    case 'queen': return '👸';
    case 'jester': return '🃏';
    default: return '⚜️';
  }
};

const InteractiveLeaderboard: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
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

  const getInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown size={16} className="text-royal-gold" />;
    if (rank === 2) return <Award size={16} className="text-[#C0C0C0]" />;
    if (rank === 3) return <Award size={16} className="text-[#CD7F32]" />;
    return null;
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
          <div 
            key={userData.id} 
            className={`flex items-center justify-between p-3 rounded-lg mb-2 animate-fade-in ${
              index % 2 === 0 ? 'bg-white/5' : ''
            } hover:bg-white/10 transition-colors`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center justify-center w-8">
                <span className="text-lg font-bold">{userData.rank}</span>
                {getRankIcon(userData.rank)}
              </div>
              
              <Avatar className={`border-2 ${userData.team ? getTeamBorderColor(userData.team) : 'border-white/20'}`}>
                <AvatarImage src={userData.profileImage} alt={userData.username} />
                <AvatarFallback>{getInitials(userData.username)}</AvatarFallback>
              </Avatar>
              
              <div>
                <div className="font-medium flex items-center">
                  {userData.username}
                  {index < 3 && <div className="ml-1.5">{getGenderEmoji(userData.gender)}</div>}
                </div>
                <div className={`text-xs ${getTeamColor(userData.team)}`}>
                  {getGenderTitle(userData.gender || null)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="text-right mr-4">
                <div className="font-mono font-bold">${userData.amountSpent}</div>
                <div className="text-xs text-white/50">Total Spent</div>
              </div>
              
              <div className="flex space-x-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
                  onClick={() => handleProfileClick(userData.id)}
                >
                  <Eye size={14} />
                </Button>
                
                {user?.id !== userData.id && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
                    onClick={() => handlePokeUser(userData)}
                    disabled={isPokeCooldown}
                  >
                    {isPokeCooldown ? (
                      <Ban size={14} className="text-white/40" />
                    ) : (
                      <Heart size={14} className="text-team-red" />
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-4 flex justify-between items-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="glass-morphism border-white/10 text-white hover:bg-white/10"
            onClick={() => navigate('/leaderboard')}
          >
            <Users size={14} className="mr-1.5" />
            View Full Court
          </Button>
          
          <PaymentModal 
            title="Accelerate Your Ascension"
            description="Make a direct contribution to your status to rise through the royal ranks faster."
            amount={100}
            trigger={
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
              >
                <DollarSign size={14} className="mr-1.5" />
                Boost Rank
              </Button>
            }
          />
        </div>
        
        {showPokeOptions && selectedUser && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <Card className="w-full max-w-md glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Poke {selectedUser.username}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Spend ${pokeAmount} to temporarily drop {selectedUser.username} down one rank in the standings.
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      className="glass-morphism border-white/10"
                      onClick={() => setShowPokeOptions(false)}
                    >
                      Cancel
                    </Button>
                    
                    <PaymentModal 
                      title={`Poke ${selectedUser.username}`}
                      description={`Drop ${selectedUser.username} down one rank for 24 hours.`}
                      amount={pokeAmount}
                      onSuccess={confirmPoke}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveLeaderboard;
