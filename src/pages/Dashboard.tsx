
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import SimpleLayout from '@/components/layout/SimpleLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Crown, Coins, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <SimpleLayout title="Dashboard">
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-xl mb-4">Please log in to view your dashboard</h2>
          <Link to="/login">
            <Button variant="default">Login</Button>
          </Link>
        </div>
      </SimpleLayout>
    );
  }
  
  return (
    <SimpleLayout title="Royal Dashboard">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <Card className="lg:col-span-3 glass-morphism border-royal-gold/30">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Crown className="mr-2 h-5 w-5 text-royal-gold" />
              Welcome back, {user.displayName || user.username}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your current rank is <span className="font-bold text-royal-gold">#{user.rank || '??'}</span></p>
            <div className="flex gap-4 mt-4">
              <Link to="/leaderboard">
                <Button variant="outline">View Leaderboard</Button>
              </Link>
              <Link to="/wallet">
                <Button variant="default">Make Deposit</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        {/* Stats Grid */}
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
              Your Rank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">#{user.rank || 'N/A'}</div>
            <p className="text-sm text-muted-foreground">Out of all nobles</p>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Coins className="mr-2 h-5 w-5 text-royal-gold" />
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${user.totalSpent?.toFixed(2) || '0.00'}</div>
            <p className="text-sm text-muted-foreground">Lifetime spending</p>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Users className="mr-2 h-5 w-5 text-royal-gold" />
              Team Rank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">#{user.teamRank || 'N/A'}</div>
            <p className="text-sm text-muted-foreground">Among your team</p>
          </CardContent>
        </Card>
        
        {/* Quick Actions */}
        <Card className="lg:col-span-3 glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/profile">
                <Button variant="outline" className="w-full">View Profile</Button>
              </Link>
              <Link to="/wallet">
                <Button variant="outline" className="w-full">Deposit Funds</Button>
              </Link>
              <Link to="/leaderboard">
                <Button variant="outline" className="w-full">Leaderboard</Button>
              </Link>
              <Link to="/status">
                <Button variant="outline" className="w-full">Status Center</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </SimpleLayout>
  );
};

export default Dashboard;
