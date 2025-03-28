
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Clock, AlertTriangle, Shield, Coins } from 'lucide-react';

const MockeryRules = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Info className="mr-2 h-5 w-5 text-blue-500" />
          Royal Mockery Rules
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
            <h3 className="font-medium text-white mb-1">Payment Required</h3>
            <p>Each mockery action requires payment. The more impactful the mockery, the higher the cost.</p>
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
            <p>After being mocked, users enter a cooldown period where they cannot be mocked again. This varies by mockery type.</p>
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
            <p>Users can purchase royal protection to shield themselves from mockery for a limited time.</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Moderation</h3>
            <p>Mockery is meant to be playful. All content is still subject to community guidelines. Inappropriate mockery may result in account restrictions.</p>
          </div>
        </div>
        
        <div className="p-3 rounded-md bg-black/20 text-white/80 text-xs italic">
          "In the court of royal mockery, all are equal targets. The jester of today may be the mocker of tomorrow."
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryRules;
