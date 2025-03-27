
import React, { useState, useEffect } from 'react';
import RoyalTreasury from '@/components/dashboard/RoyalTreasury';
import SpendingChart from '@/components/dashboard/SpendingChart';
import TeamDistribution from '@/components/dashboard/TeamDistribution';
import RankTrajectory from '@/components/dashboard/RankTrajectory';
import GenderSelection from '@/components/dashboard/GenderSelection';
import InteractiveLeaderboard from '@/components/dashboard/InteractiveLeaderboard';
import CashThroneUpgrade from '@/components/dashboard/CashThroneUpgrade';
import RoyalDecrees from '@/components/dashboard/RoyalDecrees';
import BriberyBanner from '@/components/dashboard/BriberyBanner';
import SpendingVisualizer from '@/components/dashboard/SpendingVisualizer';
import UserWallet from '@/components/wallet/UserWallet';
import AdvertisementBanner from '@/components/profile/AdvertisementBanner';
import { mockSpendingData, mockTeamDistribution, mockRankHistory } from '@/components/dashboard/data';
import RoyalDivider from '@/components/ui/royal-divider';
import { UserProfile } from '@/contexts/AuthContext';
import RoyalThrone from '@/components/3d/RoyalThrone';
import { useToast } from "@/hooks/use-toast";
import { Coins, Trophy, InfoIcon } from 'lucide-react';
import { addFundsToWallet } from '@/services/walletService';
import { applyUserSpending } from '@/services/spendingService';
import { useNavigate } from 'react-router-dom';

interface DashboardMainProps {
  user: UserProfile;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}

const DashboardMain: React.FC<DashboardMainProps> = ({ user, updateProfile }) => {
  const [suggestedAmount, setSuggestedAmount] = useState(100);
  const [showTermsPrompt, setShowTermsPrompt] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check if user has accepted terms
  useEffect(() => {
    const hasAcceptedTerms = user.acceptedTerms || localStorage.getItem('acceptedTerms') === 'true';
    if (!hasAcceptedTerms) {
      setShowTermsPrompt(true);
      
      toast({
        title: "Royal Decree Required",
        description: "You must accept the terms of service to fully participate in the kingdom.",
        action: (
          <Button 
            variant="default" 
            size="sm" 
            onClick={() => navigate('/terms')}
            className="bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy"
          >
            View Terms
          </Button>
        ),
        duration: 10000,
      });
    }
  }, [user, navigate]);

  const handlePaymentSuccess = async (amount: number) => {
    try {
      // Update the user's amount spent
      const newAmountSpent = user.amountSpent + amount;
      // Strictly calculate rank based on spending with 1:1 ratio
      const newRank = Math.max(1, user.rank - Math.floor(amount / 100)); // Simple mock calculation
      
      await updateProfile({
        amountSpent: newAmountSpent,
        rank: newRank,
        lastSpendDate: new Date()
      });
      
      // Add to spending service for leaderboard tracking
      await applyUserSpending(user, amount);
      
      // Determine what fancy title to give based on amount
      let toastTitle = "Royal Treasury Expanded!";
      let description = `Your tribute of $${amount} has been graciously accepted by the crown.`;
      
      if (amount >= 500) {
        toastTitle = "MAGNIFICENT LARGESSE!";
        description = `Your extravagant tribute of $${amount} has the royal accountants weeping with joy!`;
      } else if (amount >= 250) {
        toastTitle = "Exemplary Generosity!";
        description = `Your tribute of $${amount} has earned you the Crown's distinguished favor!`;
      } else if (amount >= 100) {
        toastTitle = "Noble Contribution!";
        description = `The royal coffers grow by $${amount}. Your loyalty shall be remembered!`;
      }
      
      toast({
        title: toastTitle,
        description: description,
        duration: 5000,
      });
      
      return true;
    } catch (error) {
      console.error("Failed to update profile after payment:", error);
      toast({
        title: "Treasury Error",
        description: "Your payment was processed but your profile couldn't be updated. Please refresh.",
        variant: "destructive"
      });
      return false;
    }
  };

  const handleFundWallet = async (amount: number) => {
    try {
      const success = await addFundsToWallet(user, amount);
      
      if (success) {
        // Update user profile with new balance
        const newBalance = (user.walletBalance || 0) + amount;
        await updateProfile({ walletBalance: newBalance });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Failed to fund wallet:", error);
      toast({
        title: "Funding Error",
        description: "Failed to add funds to your wallet. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const handleGenderChange = async (gender: 'king' | 'queen' | 'jester' | null) => {
    try {
      await updateProfile({ gender });
      
      const genderText = gender === 'king' ? 'King' : 
                        gender === 'queen' ? 'Queen' : 
                        gender === 'jester' ? 'Jester' : 'Noble';
      
      toast({
        title: "Royal Title Updated",
        description: `You shall now be addressed as ${genderText} throughout the realm.`,
        duration: 3000,
      });
    } catch (error) {
      console.error("Failed to update gender preference:", error);
      toast({
        title: "Update Failed",
        description: "Could not update your royal title preference.",
        variant: "destructive",
      });
    }
  };

  const handleThroneClick = () => {
    toast({
      title: "The Throne Awaits",
      description: "Continue your generous contributions to claim your rightful place upon the royal throne!",
    });
  };

  const handleAdvertisementUpdate = () => {
    // Refresh dashboard components if needed
  };

  return (
    <>
      <RoyalTreasury user={user} />
      
      {showTermsPrompt && (
        <div className="mb-6 glass-morphism border border-royal-gold/30 rounded-lg p-4 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="bg-royal-gold/20 p-2 rounded-full">
              <InfoIcon className="h-6 w-6 text-royal-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Royal Decree Requires Your Attention</h3>
              <p className="text-white/70 text-sm">Before fully participating in the kingdom's activities, you must acknowledge the royal terms of service.</p>
            </div>
            <Button 
              onClick={() => navigate('/terms')}
              className="whitespace-nowrap bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy"
            >
              View Terms
            </Button>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="lg:col-span-2">
          <SpendingVisualizer 
            user={user} 
            onSpend={handlePaymentSuccess} 
          />
        </div>
        <UserWallet 
          user={user}
          onFundWallet={handleFundWallet}
        />
      </div>
      
      <RoyalDivider variant="crown" label="FINANCIAL KINGDOM" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="lg:col-span-2">
          <SpendingChart data={mockSpendingData} />
        </div>
        <div className="glass-morphism rounded-lg border border-white/10 p-6 flex flex-col">
          <h3 className="text-lg font-bold mb-4 royal-gradient">Your Royal Throne</h3>
          <div className="flex-grow">
            <RoyalThrone 
              size="medium" 
              color={user.team === 'red' ? '#9B26AF' : user.team === 'green' ? '#FFD700' : '#0055A4'} 
              animate={true}
              onThroneClick={handleThroneClick}
            />
          </div>
          <p className="text-sm text-white/70 mt-3 italic text-center">
            Behold your throne's magnificence, a reflection of your status in the realm.
          </p>
        </div>
      </div>
      
      <AdvertisementBanner 
        user={user}
        onUpdate={handleAdvertisementUpdate}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="lg:col-span-2">
          <GenderSelection userProfile={user} onGenderChange={handleGenderChange} />
        </div>
        <TeamDistribution data={mockTeamDistribution} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <RankTrajectory data={mockRankHistory} />
        <div className="lg:col-span-2">
          <InteractiveLeaderboard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <CashThroneUpgrade 
          user={user} 
          onPaymentSuccess={handlePaymentSuccess} 
        />
        <div className="lg:col-span-2">
          <RoyalDecrees />
        </div>
      </div>
      
      <div className="mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <BriberyBanner onPaymentSuccess={handlePaymentSuccess} />
      </div>
      
      {/* Royal Motivation */}
      <div className="mt-8 glass-morphism border border-royal-gold/20 rounded-xl p-6 text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            <Trophy size={28} className="text-royal-gold" />
            <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-md"></div>
          </div>
          <h3 className="text-lg font-royal royal-gradient">The Crown Reminds You</h3>
          <p className="text-white/70 italic max-w-2xl">
            "Every dollar spent is another jewel in your digital crown. The more you contribute, the more meaningless your impressive rank becomes! Remember, in this kingdom, your worth is measured not by your character, but by your credit card limit."
          </p>
          
          <div className="flex items-center mt-2 text-xs text-white/50">
            <Coins size={12} className="text-royal-gold mr-1" />
            <span>Current Top Spender: Duke VanishingFunds — $12,450 this week</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
