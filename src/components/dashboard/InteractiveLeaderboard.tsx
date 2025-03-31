
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Scroll } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { mockLeaderboardData, LeaderboardUser as LeaderboardUserType } from './leaderboard/LeaderboardUtils';
import LeaderboardItem from './leaderboard/LeaderboardItem';
import ShameModal from './leaderboard/ShameModal';
import LeaderboardActions from './leaderboard/LeaderboardActions';
import { getShameActionPrice } from '@/components/events/utils/shameUtils';
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import { MockeryAction } from '@/types/mockery';

const InteractiveLeaderboard: React.FC = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUserType[]>(mockLeaderboardData);
  const [showShameModal, setShowShameModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<LeaderboardUserType | null>(null);
  const [isOnCooldown, setIsOnCooldown] = useState<boolean>(false);
  const [shameType, setShameType] = useState<ShameAction>('tomatoes');
  const [shameAmount, setShameAmount] = useState<number>(getShameActionPrice('tomatoes'));
  const [modalType, setModalType] = useState<string | null>(null);

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

  const handleShameUser = (user: LeaderboardUserType, type: string = 'tomatoes') => {
    setSelectedUser(user);
    setShameType(type as ShameAction);
    setShameAmount(getShameActionPrice(type as ShameAction));
    setShowShameModal(true);
    
    // Play subtle royal sound effect
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-fairy-arcade-sparkle-866.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio playback error:', e));
  };

  const handleShameConfirm = () => {
    if (!selectedUser || isOnCooldown) return;
    
    // Get shame emoji based on type
    const getShameEmoji = () => {
      switch (shameType) {
        case 'tomatoes': return '🍅';
        case 'eggs': return '🥚';
        case 'stocks': return '🪵';
        default: return '📜';
      }
    };
    
    // Get title based on type
    const getShameTitle = () => {
      switch (shameType) {
        case 'tomatoes': return 'Throw Tomatoes';
        case 'eggs': return 'Throw Rotten Eggs';
        case 'stocks': return 'Place in Stocks';
        default: return 'Public Shaming';
      }
    };
    
    // Simulate API call for shame action
    setTimeout(() => {
      toast({
        title: "Royal Shaming Complete!",
        description: `You spent $${shameAmount} to ${getShameTitle().toLowerCase()} at ${selectedUser.username}. ${getShameEmoji()} How delightfully medieval!`,
      });
      
      // Update shame count
      const userShameKey = `user_shame_count_${selectedUser.id}`;
      const currentCount = parseInt(localStorage.getItem(userShameKey) || '0');
      localStorage.setItem(userShameKey, (currentCount + 1).toString());
      
      // Store last shame time
      localStorage.setItem(`lastShame_${selectedUser.id}`, Date.now().toString());
      
      setShowShameModal(false);
      setSelectedUser(null);
      setIsOnCooldown(true);
      
      // Set cooldown for shame action
      setTimeout(() => {
        setIsOnCooldown(false);
        toast({
          title: "Royal Mischief Ready",
          description: "Your ability to shame other nobles has been replenished!",
          duration: 2000,
        });
      }, 30000); // 30-second cooldown for demo
    }, 1000);
  };

  const openShameModal = (user: LeaderboardUserType) => {
    setSelectedUser(user);
    setModalType('shame');
  };

  return (
    <div>
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
              isOnCooldown={isOnCooldown}
              onProfileClick={handleProfileClick}
              onShameUser={handleShameUser}
            />
          ))}
          
          <LeaderboardActions />
          
          {modalType === 'shame' && selectedUser && (
            <ShameModal
              targetUser={{
                userId: selectedUser.userId,
                username: selectedUser.username,
                profileImage: selectedUser.profileImage,
                totalSpent: selectedUser.totalSpent,
                rank: selectedUser.rank,
                team: selectedUser.team,
                tier: selectedUser.tier,
                spendStreak: selectedUser.spendStreak
              }}
              shameAmount={shameAmount}
              shameType={shameType as MockeryAction}
              onClose={() => setModalType(null)}
              onConfirm={handleShameConfirm}
              onCancel={() => setModalType(null)}
              hasDiscount={false}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveLeaderboard;
