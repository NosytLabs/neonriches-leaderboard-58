
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashboardStats from '@/components/dashboard/DashboardStats';
import SpendingChart from '@/components/dashboard/SpendingChart';
import PrizePool from '@/components/dashboard/PrizePool';
import TeamDistribution from '@/components/dashboard/TeamDistribution';
import RankTrajectory from '@/components/dashboard/RankTrajectory';
import SpendToRankUp from '@/components/dashboard/SpendToRankUp';
import PromotionBanner from '@/components/dashboard/PromotionBanner';
import { mockSpendingData, mockTeamDistribution, mockRankHistory } from '@/components/dashboard/data';

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
    console.log(`Payment of $${amount} successful!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">Your Dashboard</h1>
            <p className="text-white/70">
              Track your spending, rank, and team contribution.
            </p>
          </div>
          
          <DashboardStats user={user} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <SpendingChart data={mockSpendingData} />
            <PrizePool onBoostClick={setSuggestedAmount} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <TeamDistribution data={mockTeamDistribution} />
            <RankTrajectory data={mockRankHistory} />
            <SpendToRankUp 
              user={user} 
              onPaymentSuccess={handlePaymentSuccess} 
            />
          </div>
          
          <PromotionBanner onPaymentSuccess={handlePaymentSuccess} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
