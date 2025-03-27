
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BadgePercent, Award, Zap } from 'lucide-react';

interface PrizePoolProps {
  onBoostClick: (amount: number) => void;
}

const PrizePool = ({ onBoostClick }: PrizePoolProps) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Weekly Prize Pool</CardTitle>
        <CardDescription>Current prize: $12,450</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <BadgePercent size={18} className="mr-2 text-team-green" />
                <span className="font-medium">Sustenance Fund</span>
              </div>
              <span className="font-bold">$6,225</span>
            </div>
            <div className="text-sm text-white/70">
              <p>Your potential share: $145</p>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-team-green to-team-blue" 
                  style={{ width: '28%' }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Award size={18} className="mr-2 text-team-red" />
                <span className="font-medium">Whale Endowment</span>
              </div>
              <span className="font-bold">$6,225</span>
            </div>
            <div className="text-sm text-white/70">
              <p>Current position: Not in Top 3</p>
              <div className="mt-2 grid grid-cols-3 gap-1">
                <div className="glass-morphism border-white/10 rounded p-2 text-center">
                  <div className="text-xs text-white/50">1st</div>
                  <div className="font-mono">$3,735</div>
                </div>
                <div className="glass-morphism border-white/10 rounded p-2 text-center">
                  <div className="text-xs text-white/50">2nd</div>
                  <div className="font-mono">$1,867</div>
                </div>
                <div className="glass-morphism border-white/10 rounded p-2 text-center">
                  <div className="text-xs text-white/50">3rd</div>
                  <div className="font-mono">$622</div>
                </div>
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
            onClick={() => onBoostClick(250)}
          >
            <Zap size={16} className="mr-2" />
            Boost Your Chances
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrizePool;
