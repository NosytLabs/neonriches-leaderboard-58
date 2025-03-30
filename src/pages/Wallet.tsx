
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Wallet: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 royal-gradient">Royal Treasury</h1>
          
          <div className="glass-morphism border-white/10 p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-royal-gold/10 p-4 rounded-full mr-4">
                  <Coins className="h-8 w-8 text-royal-gold" />
                </div>
                <div>
                  <p className="text-white/70">Current Balance</p>
                  <h2 className="text-3xl font-bold">${user?.walletBalance || 0}</h2>
                </div>
              </div>
              
              <div className="space-x-3">
                <Button onClick={() => navigate('/deposit')} className="bg-royal-gold hover:bg-royal-gold/90 text-black">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Deposit
                </Button>
                <Button onClick={() => navigate('/withdraw')} variant="outline">
                  <ArrowDownLeft className="mr-2 h-4 w-4" />
                  Withdraw
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Ways to increase your royal status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-between">
                  Boost Your Rank
                  <span className="bg-white/10 px-2 py-1 rounded text-xs">+10 Rank</span>
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Purchase Profile Flair
                  <span className="bg-white/10 px-2 py-1 rounded text-xs">From $5</span>
                </Button>
                <Button className="w-full justify-between" variant="secondary">
                  Team Contribution
                  <span className="bg-white/10 px-2 py-1 rounded text-xs">Team Bonus</span>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your recent financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <History className="h-12 w-12 text-white/30 mx-auto mb-3" />
                  <p className="text-white/70">No transactions yet</p>
                  <p className="text-white/50 text-sm">Deposit funds to get started</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Financial Absurdities</CardTitle>
              <CardDescription>What your expenditure could have bought instead</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 italic mb-4">
                "The money you've spent on digital status so far could have bought you {user?.totalSpent ? (user.totalSpent / 5).toFixed(0) : 0} cups of premium coffee."
              </p>
              <p className="text-white/70 italic">
                "Or {user?.totalSpent ? (user.totalSpent / 15).toFixed(0) : 0} movie tickets. But digital prestige is forever, right?"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
