
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
import { mockSpendingData, mockTeamDistribution, mockRankHistory } from '@/components/dashboard/data';
import ThroneBackground from '@/components/ui/throne-background';

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
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6 relative">
        <div className="absolute inset-0 -z-10">
          <ThroneBackground variant="purple" density="low" animate={true} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">Your Royal Treasury</h1>
            <p className="text-white/70">
              Where your money disappears and your digital ego expands. Track your "investments" in social climbing!
            </p>
          </div>
          
          <RoyalTreasury user={user} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <SpendingChart data={mockSpendingData} />
            <PrizePool onBoostClick={setSuggestedAmount} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <TeamDistribution data={mockTeamDistribution} />
            <RankTrajectory data={mockRankHistory} />
            <CashThroneUpgrade 
              user={user} 
              onPaymentSuccess={handlePaymentSuccess} 
            />
          </div>
          
          <BriberyBanner onPaymentSuccess={handlePaymentSuccess} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
