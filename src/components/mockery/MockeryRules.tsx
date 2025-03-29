
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Clock, AlertTriangle, Shield, Coins, ThumbsDown, CreditCard } from 'lucide-react';

const MockeryRules = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Info className="mr-2 h-5 w-5 text-blue-500" />
          How to Be Mean (For Money)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-white/70">
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <CreditCard className="h-4 w-4 text-royal-gold" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Monetized Meanness</h3>
            <p>Like buying bottle service to flex on the table next to you, but without leaving your couch. The more you pay, the meaner you can be.</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Clock className="h-4 w-4 text-blue-500" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Cooldown Periods</h3>
            <p>Everyone gets a break between mockeries. Even TikTok bullies need to recharge.</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="h-4 w-4 text-purple-500" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">VIP Protection</h3>
            <p>Buy your way out of mockery. It's basically a digital bouncer for your ego. Exactly like paying for verified status on certain platforms we won't name.</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <ThumbsDown className="h-4 w-4 text-amber-500" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Playful Shade Only</h3>
            <p>Keep it fun, not harmful. We're going for "Real Housewives" drama, not actual cyberbullying.</p>
          </div>
        </div>
        
        <div className="p-3 rounded-md bg-black/20 text-white/80 text-xs italic">
          "In the court of mockery, today's victim is tomorrow's bully. Just like how the intern who fetched your coffee yesterday is your boss's kid."
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryRules;
