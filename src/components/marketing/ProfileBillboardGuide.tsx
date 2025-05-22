
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollText, Sparkles, Target, TrendingUp, Users } from 'lucide-react';

const ProfileBillboardGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Profile Billboard Guide</h3>
      
      <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 p-6 rounded-lg border border-indigo-500/20 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="md:w-3/5">
            <h2 className="text-xl font-semibold mb-3">Maximize Your Royal Presence</h2>
            <p className="text-white/70 mb-4">
              Your profile is your billboard in the royal kingdom. Learn how to optimize your presence, attract more visitors, 
              and climb the ranks through strategic visibility management.
            </p>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <Target className="h-4 w-4 text-royal-gold mr-2" />
                <span>Higher ranks receive exponentially more profile views</span>
              </li>
              <li className="flex items-center">
                <TrendingUp className="h-4 w-4 text-royal-gold mr-2" />
                <span>Strategic spending during peak hours boosts visibility</span>
              </li>
              <li className="flex items-center">
                <Users className="h-4 w-4 text-royal-gold mr-2" />
                <span>Team participation increases your exposure</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 text-royal-gold mr-2" />
                <span>Premium features enhance your profile's appeal</span>
              </li>
            </ul>
            
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              <TrendingUp className="h-4 w-4 mr-2" />
              Boost Your Visibility
            </Button>
          </div>
          
          <div className="md:w-2/5 glass-morphism border-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-3 flex items-center">
              <ScrollText className="h-4 w-4 mr-2 text-royal-gold" />
              Did You Know?
            </h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="font-semibold text-royal-gold">Top 10 ranked profiles</span> receive 
                <span className="text-royal-gold font-bold"> 20x</span> more views than average.
              </li>
              <li className="text-sm">
                Profiles with <span className="font-semibold text-royal-gold">premium visuals</span> get 
                <span className="text-royal-gold font-bold"> 45%</span> more engagement.
              </li>
              <li className="text-sm">
                Weekend activity generates <span className="text-royal-gold font-bold">3x</span> more 
                profile interactions than weekdays.
              </li>
              <li className="text-sm">
                Adding <span className="font-semibold text-royal-gold">social links</span> to your profile 
                increases cross-platform visibility by <span className="text-royal-gold font-bold">70%</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <h3 className="font-bold mb-2">Profile Optimization Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-black mt-0.5 mr-2 font-bold">1</div>
                <p className="text-sm">Use a distinctive profile image that stands out in the leaderboard</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-black mt-0.5 mr-2 font-bold">2</div>
                <p className="text-sm">Craft an engaging bio that showcases your royal ambitions</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-black mt-0.5 mr-2 font-bold">3</div>
                <p className="text-sm">Update your status regularly to maintain engagement</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-black mt-0.5 mr-2 font-bold">4</div>
                <p className="text-sm">Add custom links to your other platforms for cross-promotion</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <h3 className="font-bold mb-2">Visibility Strategy Timeline</h3>
            <ul className="space-y-3">
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold">Initial Launch</span>
                  <span className="text-xs text-white/60">Week 1</span>
                </div>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-xs mt-1 text-white/70">Focus on establishing your presence with consistent activity</p>
              </li>
              
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold">Growth Phase</span>
                  <span className="text-xs text-white/60">Weeks 2-4</span>
                </div>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs mt-1 text-white/70">Strategic spending during peak hours to climb ranks</p>
              </li>
              
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold">Engagement Focus</span>
                  <span className="text-xs text-white/60">Month 2</span>
                </div>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs mt-1 text-white/70">Interact with other profiles to increase reciprocal visibility</p>
              </li>
              
              <li>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold">Royal Status</span>
                  <span className="text-xs text-white/60">Month 3+</span>
                </div>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-royal-gold to-yellow-500 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-xs mt-1 text-white/70">Maintain position with premium features and consistent presence</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileBillboardGuide;
