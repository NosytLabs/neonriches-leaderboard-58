
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Trophy, Users, ArrowRight, CircleHelp, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpendingExplanation: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 royal-gradient">How Spending Works</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          At SpendThrone, your leaderboard rank is determined solely by how much money you spend.
          It's refreshingly honest and straightforward.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-full bg-green-500/20">
                <DollarSign className="h-5 w-5 text-green-400" />
              </div>
              <CardTitle className="text-xl">Dollar = Rank</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Every dollar you spend adds 1 point to your total. Your position on the leaderboard is determined 
              by your total spending.
            </p>
            <div className="bg-white/5 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-white/60">Spend:</span>
                <span className="font-mono">$100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Points:</span>
                <div className="flex items-center">
                  <span className="font-mono mr-1">+100</span>
                  <ArrowRight className="h-3 w-3 text-green-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-full bg-purple-500/20">
                <Trophy className="h-5 w-5 text-purple-400" />
              </div>
              <CardTitle className="text-xl">Permanent Ranking</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Your leaderboard score never resets. Once you've spent money, those points are permanently 
              attributed to your profile.
            </p>
            <div className="bg-white/5 p-3 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-mono text-purple-300">$500 spent = #43 rank forever</div>
                <div className="text-xs text-white/50 mt-1">
                  (unless someone outspends you)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-full bg-blue-500/20">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <CardTitle className="text-xl">Team Competition</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Join a team and your spending contributes to your team's total. Compete with other teams 
              to reach the top of the team leaderboard.
            </p>
            <div className="bg-white/5 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-white/60">Your Spend:</span>
                <span className="font-mono">$200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Team Total:</span>
                <div className="flex items-center">
                  <span className="font-mono">+200</span>
                  <ArrowRight className="h-3 w-3 text-blue-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="glass-morphism border-white/10 p-6 rounded-lg mb-12">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-amber-500/20 flex-shrink-0">
            <CircleHelp className="h-6 w-6 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Important Distinction: Subscriptions vs. Spending</h3>
            <p className="text-white/80 mb-4">
              There are two separate ways to enhance your experience:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="h-5 w-5 text-purple-400" />
                  <h4 className="font-bold">Subscriptions</h4>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  Subscriptions provide <span className="font-bold text-purple-300">cosmetic benefits</span> like 
                  profile customization, RGB borders, analytics, and more.
                </p>
                <div className="text-xs text-white/50 bg-white/10 p-2 rounded">
                  Subscriptions do NOT affect your leaderboard rank directly.
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-green-400" />
                  <h4 className="font-bold">Direct Spending</h4>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  Direct contributions <span className="font-bold text-green-300">increase your rank</span> on 
                  the leaderboard at a 1:1 ratio ($1 = 1 point).
                </p>
                <div className="text-xs text-white/50 bg-white/10 p-2 rounded">
                  This is the ONLY way to improve your position on the leaderboard.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <Link to="/deposit">
          <Button className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:opacity-90 text-white">
            <DollarSign className="h-4 w-4 mr-2" />
            Increase Your Rank
          </Button>
        </Link>
        
        <Link to="/profile-enhancements">
          <Button variant="outline" className="w-full md:w-auto border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
            <Crown className="h-4 w-4 mr-2" />
            View Subscription Options
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SpendingExplanation;
