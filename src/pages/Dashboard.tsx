
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoyalTreasury from '@/components/dashboard/RoyalTreasury';
import SpendingChart from '@/components/dashboard/SpendingChart';
import PrizePool from '@/components/dashboard/PrizePool';
import TeamDistribution from '@/components/dashboard/TeamDistribution';
import RankTrajectory from '@/components/dashboard/RankTrajectory';
import CashThroneUpgrade from '@/components/dashboard/CashThroneUpgrade';
import BriberyBanner from '@/components/dashboard/BriberyBanner';
import RoyalDecrees from '@/components/dashboard/RoyalDecrees';
import { mockSpendingData, mockTeamDistribution, mockRankHistory } from '@/components/dashboard/data';
import ThroneBackground from '@/components/ui/throne-background';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown, ChevronsUp, TrendingUp, Trophy, Coins } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import GenderSelection from '@/components/dashboard/GenderSelection';
import InteractiveLeaderboard from '@/components/dashboard/InteractiveLeaderboard';
import RoyalThrone from '@/components/3d/RoyalThrone';

const Dashboard = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [suggestedAmount, setSuggestedAmount] = useState(100);
  const [showRoyalWelcome, setShowRoyalWelcome] = useState(false);

  useEffect(() => {
    // Display a grand royal welcome after a short delay
    const timer = setTimeout(() => {
      setShowRoyalWelcome(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showRoyalWelcome && user) {
      const genderTitle = user.gender === 'king' ? 'King' : user.gender === 'queen' ? 'Queen' : 'Noble Jester';
      
      toast({
        title: `Royal Presence Detected`,
        description: `Welcome back to your kingdom, ${genderTitle} ${user.username}. Your coffers await your generosity!`,
        duration: 5000,
      });
    }
  }, [showRoyalWelcome, user]);

  if (!user) {
    // Redirect to login if not authenticated
    navigate('/auth');
    return null;
  }

  const handlePaymentSuccess = (amount: number) => {
    // In a real app, this would update the user's state with the new amount spent
    console.log(`Royal Tribute of $${amount} successfully added to your coffers!`);
    
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

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6 relative">
        <div className="absolute inset-0 -z-10">
          <ThroneBackground variant="purple" density="high" animate={true} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center mb-2">
              <div className="relative mr-3">
                <Crown size={32} className="text-royal-gold animate-crown-glow" />
                <div className="absolute -inset-2 bg-royal-gold/10 rounded-full blur-lg"></div>
              </div>
              <h1 className="text-3xl font-bold royal-gradient">Your Royal Treasury</h1>
            </div>
            <p className="text-white/70 italic ml-10">
              "Where commoners' money transforms into digital nobility, and wealth is measured in pixels."
            </p>
          </div>
          
          <RoyalTreasury user={user} />
          
          <RoyalDivider variant="crown" label="FINANCIAL KINGDOM" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <TeamDistribution data={mockTeamDistribution} />
            <RankTrajectory data={mockRankHistory} />
            <GenderSelection userProfile={user} onGenderChange={handleGenderChange} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="lg:col-span-2">
              <InteractiveLeaderboard />
            </div>
            <CashThroneUpgrade 
              user={user} 
              onPaymentSuccess={handlePaymentSuccess} 
            />
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <RoyalDecrees />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
