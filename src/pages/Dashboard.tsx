
import React, { useState } from 'react';
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
import { Crown, ChevronsUp, TrendingUp } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [suggestedAmount, setSuggestedAmount] = useState(100);

  if (!user) {
    // Redirect to login if not authenticated
    navigate('/auth');
    return null;
  }

  const handlePaymentSuccess = (amount: number) => {
    // In a real app, this would update the user's state with the new amount spent
    console.log(`Royal Tribute of $${amount} successfully added to your coffers!`);
    toast({
      title: "Royal Treasury Expanded!",
      description: `Your tribute of $${amount} has been graciously accepted by the crown.`,
      duration: 5000,
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
              <Crown size={28} className="text-royal-gold mr-3 animate-crown-glow" />
              <h1 className="text-3xl font-bold text-gradient">Your Royal Treasury</h1>
            </div>
            <p className="text-white/70 italic ml-10">
              "Where commoners' money transforms into digital nobility."
            </p>
          </div>
          
          <RoyalTreasury user={user} />
          
          <RoyalDivider variant="crown" label="FINANCIAL KINGDOM" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <SpendingChart data={mockSpendingData} />
            <PrizePool onBoostClick={setSuggestedAmount} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <TeamDistribution data={mockTeamDistribution} />
            <RankTrajectory data={mockRankHistory} />
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
          
          <div className="mt-8 glass-morphism border border-royal-gold/20 rounded-xl p-6 text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="flex flex-col items-center space-y-2">
              <div className="relative">
                <ChevronsUp size={24} className="text-royal-gold" />
                <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-md"></div>
              </div>
              <h3 className="text-lg font-royal">Remember, Noble One</h3>
              <p className="text-white/70 italic max-w-2xl">
                "Every dollar paid is another step up the digital hierarchy. The more you spend, the more impressive your completely meaningless rank becomes!"
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
