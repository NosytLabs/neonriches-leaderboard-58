
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, TrendingUp, Target, Users, Clock } from 'lucide-react';

const ProfileBillboardGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-amber-500/20 rounded-full mt-0.5">
          <Lightbulb className="h-5 w-5 text-amber-400" />
        </div>
        <div>
          <h3 className="text-lg font-medium">How the Visibility System Works</h3>
          <p className="text-white/70">
            SpendThrone's marketing system gives you visibility based on your rank.
            The higher your rank, the more exposure your profile receives across the platform.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 mr-2 text-royal-gold" />
              <h3 className="font-medium">Rank-Based Visibility</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                <span className="text-sm">Top 10 ranks: 20x visibility multiplier</span>
              </li>
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                <span className="text-sm">Ranks 11-50: 10x visibility multiplier</span>
              </li>
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                <span className="text-sm">Ranks 51-100: 5x visibility multiplier</span>
              </li>
              <li className="flex items-start">
                <span className="bg-royal-gold/20 text-royal-gold h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                <span className="text-sm">Ranks 101-500: 2x visibility multiplier</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center mb-2">
              <Target className="h-5 w-5 mr-2 text-blue-400" />
              <h3 className="font-medium">Premium Placement Areas</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-blue-500/20 text-blue-400 h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                <span className="text-sm">Homepage Featured Section</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500/20 text-blue-400 h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                <span className="text-sm">Top of Leaderboard Showcase</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500/20 text-blue-400 h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                <span className="text-sm">Search Results Priority</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500/20 text-blue-400 h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                <span className="text-sm">User Discovery Feed</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-500/20">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium flex items-center">
            <Clock className="h-5 w-5 mr-2 text-indigo-400" />
            Strategic Timing Tips
          </h3>
          
          <p className="text-white/70 text-sm">
            Maximize your visibility by strategically timing your spending and profile updates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Weekend Peaks</h4>
              <p className="text-xs text-white/70">
                Weekends see 40% higher platform activity. Spend on Friday to maximize weekend visibility.
              </p>
            </div>
            
            <div className="bg-black/30 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Event Boosts</h4>
              <p className="text-xs text-white/70">
                Spending during official events gives a 2x multiplier to your visibility gains.
              </p>
            </div>
            
            <div className="bg-black/30 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Team Coordination</h4>
              <p className="text-xs text-white/70">
                Coordinated team spending creates additional visibility for all team members.
              </p>
            </div>
            
            <div className="bg-black/30 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Content Refreshes</h4>
              <p className="text-xs text-white/70">
                Update your profile weekly to maintain algorithm relevance and stay in feeds.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <Button variant="outline" className="border-indigo-500/50 hover:bg-indigo-950/30">
              <Users className="h-4 w-4 mr-2" />
              See Advanced Strategies
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileBillboardGuide;
