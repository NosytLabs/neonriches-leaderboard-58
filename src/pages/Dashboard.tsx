
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { getUserRanking } from '@/services/spendingService';
import { formatCurrency } from '@/lib/utils';
import RoyalDashboardSummary from '@/components/dashboard/RoyalDashboardSummary';
import PersonalStats from '@/components/dashboard/PersonalStats';
import RecentActivity from '@/components/dashboard/RecentActivity';
import NextRankCard from '@/components/dashboard/NextRankCard';
import { RoyalActivity } from '@/types/activity';
import { getMockActivities } from '@/components/dashboard/DashboardData';

// Required to fix the TypeScript errors
interface RankingData {
  rank: number;
  username: string;
  userId: string;
  totalSpent: number;
  tier: string;
  team: string;
  spendStreak: number; 
  profileImage?: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [userRank, setUserRank] = useState<RankingData | null>(null);
  const [recentActivities, setRecentActivities] = useState<RoyalActivity[]>([]);
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (isAuthenticated === false) {
      navigate('/auth');
      return;
    }
    
    // Fetch user ranking
    const fetchRanking = () => {
      // Get all rankings
      const rankings = getUserRanking();
      
      // Find current user in rankings
      if (user) {
        const currentUserRank = rankings.find(r => r.userId === user.id);
        if (currentUserRank) {
          setUserRank(currentUserRank);
        }
      }
    };
    
    // Fetch recent activities
    const fetchActivities = () => {
      const activities = getMockActivities();
      setRecentActivities(activities);
    };
    
    fetchRanking();
    fetchActivities();
  }, [isAuthenticated, navigate, user]);
  
  const handleQuickBoost = (amount: string) => {
    // Convert the amount string to a number
    const numericAmount = parseFloat(amount);
    
    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid boost amount.",
        variant: "destructive"
      });
      return;
    }
    
    // Mock spend action
    toast({
      title: "Boost Successful!",
      description: `You have spent ${formatCurrency(numericAmount)} to boost your rank.`,
      variant: "default"
    });
    
    // Update user rank (mock)
    if (userRank) {
      setUserRank({
        ...userRank,
        totalSpent: userRank.totalSpent + numericAmount,
        rank: Math.max(1, userRank.rank - 1) // Simplistic rank improvement
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Royal Court | SpendThrone</title>
        <meta name="description" content="View your spending stats, recent activity, and current rank in the SpendThrone hierarchy." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 py-8 pt-24">
        <div className="container mx-auto px-4">
          {user && userRank ? (
            <>
              <RoyalDashboardSummary 
                username={user.username}
                rank={userRank.rank}
                totalSpent={userRank.totalSpent}
                tier={userRank.tier}
                team={userRank.team}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2 space-y-6">
                  <PersonalStats 
                    spendStreak={userRank.spendStreak} 
                    rank={userRank.rank}
                    totalSpent={userRank.totalSpent}
                  />
                  
                  <RecentActivity activities={recentActivities} />
                </div>
                
                <div className="space-y-6">
                  <NextRankCard 
                    currentRank={userRank.rank}
                    targetRank={Math.max(1, userRank.rank - 1)}
                    requiredSpend={100} // Mock value
                    onQuickBoost={handleQuickBoost}
                  />
                  
                  <div className="p-6 rounded-lg glass-morphism border-white/10">
                    <h3 className="text-lg font-bold mb-3">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start" 
                        onClick={() => navigate(`/profile/${user.username}`)}
                      >
                        View My Profile
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => navigate('/teams')}
                      >
                        Manage Team Membership
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => navigate('/certificate')}
                      >
                        View Certificate of Nobility
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl">Loading your royal status...</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
