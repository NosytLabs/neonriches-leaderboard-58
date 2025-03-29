
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Clock, AlertTriangle, Shield, Coins } from 'lucide-react';

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
              <Coins className="h-4 w-4 text-royal-gold" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Pay to Play</h3>
            <p>Each mockery costs money. Want to be meaner? Pay more.</p>
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
            <p>After being mocked, users enter a grace period where they can't be mocked again. You'll have to wait to continue your reign of terror.</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="h-4 w-4 text-purple-500" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Royal Protection</h3>
            <p>Users can buy protection from mockery. Yes, it's basically a digital protection racket. We're not even subtle about it.</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Keep It Playful</h3>
            <p>Mockery should be fun, not harmful. Break the rules and we'll banish you from the kingdom.</p>
          </div>
        </div>
        
        <div className="p-3 rounded-md bg-black/20 text-white/80 text-xs italic">
          "All are equal targets in the court of mockery. Today's jester may be tomorrow's mocker."
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryRules;
