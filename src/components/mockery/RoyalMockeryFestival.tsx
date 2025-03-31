
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; 
import { Crown, Target, Info, Users } from 'lucide-react';

const RoyalMockeryFestival = () => {
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Target className="mr-2 h-5 w-5 text-royal-crimson" />
            <span>Royal Mockery Festival</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              Participate in the royal tradition of mockery! Use coins to mock other nobles and climb the ranks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                <div className="flex items-center mb-2">
                  <Crown className="h-5 w-5 text-royal-gold mr-2" />
                  <h3 className="font-medium">Premium Mockery</h3>
                </div>
                <p className="text-sm text-white/70">
                  Special mockery options are available for royal supporters. Upgrade your status to unlock more ways to shame your rivals.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                <div className="flex items-center mb-2">
                  <Info className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="font-medium">Mockery Rules</h3>
                </div>
                <p className="text-sm text-white/70">
                  Mockery is visible to all users. The more you spend, the more powerful your mockery becomes. Choose your targets wisely!
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-black/40 border border-white/10">
              <div className="flex items-center mb-3">
                <Users className="h-5 w-5 text-indigo-400 mr-2" />
                <h3 className="font-medium">Top Nobles to Mock</h3>
              </div>
              
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-md bg-black/20 border border-white/5">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-royal-gold to-royal-crimson mr-3"></div>
                      <div>
                        <p className="font-medium">Noble #{i}</p>
                        <p className="text-xs text-white/50">Rank #{i}</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm rounded-md bg-royal-crimson/20 border border-royal-crimson/40 text-royal-crimson hover:bg-royal-crimson/30 transition-colors">
                      Mock
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center text-sm text-white/50">
                The festival is currently in preparation. Check back soon for the full mockery experience!
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoyalMockeryFestival;
