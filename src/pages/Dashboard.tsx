
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UserWallet from '@/components/wallet/UserWallet';
import RankStatusCard from '@/components/dashboard/RankStatusCard';
import MarketingProfile from '@/components/profile/MarketingProfile';
import RoyalBoutique from '@/components/cosmetics/RoyalBoutique';
import TeamOverview from '@/components/teams/TeamOverview';
import UserStats from '@/components/dashboard/UserStats';
import { depositToWallet, spendFromWallet } from '@/services/walletService';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';

const Dashboard = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  const [isLoading, setIsLoading] = useState(false);
  
  if (!user) {
    navigate('/auth');
    return null;
  }
  
  const handleFundWallet = async (amount: number) => {
    setIsLoading(true);
    const success = await depositToWallet(user, amount, "Wallet deposit", updateUserProfile);
    setIsLoading(false);
    
    if (success) {
      playSound('success');
    }
    
    return success;
  };
  
  const handleBoostProfile = async () => {
    const boostCost = 15;
    
    // Check if user has enough funds
    if (user.walletBalance < boostCost) {
      toast({
        title: "Insufficient Funds",
        description: `You need $${boostCost} to boost your profile.`,
        variant: "destructive"
      });
      return;
    }
    
    // Process the transaction
    const success = await spendFromWallet(
      user,
      boostCost,
      'advertisement',
      'Profile boost',
      { feature: 'profile_boost' }
    );
    
    if (success) {
      // Update user profile stats
      const currentViews = user.profileViews || 0;
      const currentClicks = user.profileClicks || 0;
      const currentFollowers = user.followers || 0;
      
      await updateUserProfile({
        ...user,
        profileViews: currentViews + 50, // Add 50 views
        profileClicks: currentClicks + 10, // Add 10 clicks
        followers: currentFollowers + 5, // Add 5 followers
      });
      
      playSound('success');
      
      toast({
        title: "Profile Boosted!",
        description: "Your profile visibility has been enhanced.",
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold font-medieval royal-gradient mb-8">Royal Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="md:col-span-8 space-y-6">
              <RankStatusCard user={user} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <UserWallet 
                  user={user} 
                  onFundWallet={handleFundWallet} 
                />
                
                <MarketingProfile 
                  user={user}
                  onBoostProfile={handleBoostProfile}
                />
              </div>
              
              <UserStats user={user} />
            </div>
            
            {/* Right Column */}
            <div className="md:col-span-4 space-y-6">
              <TeamOverview user={user} />
              <RoyalBoutique />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
