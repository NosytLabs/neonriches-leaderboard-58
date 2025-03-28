
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Coins, Shield, Calendar } from 'lucide-react';
import MedievalIcon from '@/components/ui/medieval-icon';
import { formatCurrency } from '@/lib/utils';

interface RoyalDashboardSummaryProps {
  username: string;
  rank: number;
  totalSpent: number;
  tier: string;
  team: string;
}

const RoyalDashboardSummary: React.FC<RoyalDashboardSummaryProps> = ({ 
  username, 
  rank, 
  totalSpent, 
  tier, 
  team 
}) => {
  return (
    <Card className="bg-gradient-to-r from-black/40 to-black/60 border-royal-gold/30 overflow-hidden rounded-lg">
      <CardContent className="p-0">
        <div className="relative">
          {/* Background patterns */}
          <div 
            className="absolute inset-0 opacity-5 mix-blend-overlay" 
            style={{ 
              backgroundImage: "url('/throne-assets/medieval-patterns.svg')",
              backgroundSize: '150px',
              backgroundRepeat: 'repeat'
            }}
          ></div>
          
          <div className="flex flex-col md:flex-row p-6">
            <div className="mb-4 md:mb-0 md:mr-6 flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-royal-gold/80 to-royal-gold/20 flex items-center justify-center">
                <Crown className="h-8 w-8 text-black" />
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold font-medieval mb-1">
                {username}'s Royal Court
              </h1>
              
              <p className="text-white/70 mb-4">
                Welcome back to your kingdom, noble spender. Review your royal status and recent activities.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <div className="flex items-center">
                  <MedievalIcon name="crown" color="gold" size="md" className="mr-2" />
                  <div>
                    <div className="text-sm text-white/60">Rank</div>
                    <div className="text-lg font-bold">#{rank}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MedievalIcon name="coins" color="gold" size="md" className="mr-2" />
                  <div>
                    <div className="text-sm text-white/60">Total Spent</div>
                    <div className="text-lg font-bold">{formatCurrency(totalSpent)}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MedievalIcon name="seal" color="gold" size="md" className="mr-2" />
                  <div>
                    <div className="text-sm text-white/60">Nobility Tier</div>
                    <div className="text-lg font-bold capitalize">{tier}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MedievalIcon name="shield" color={
                    team === 'red' ? 'crimson' : 
                    team === 'green' ? 'emerald' : 
                    team === 'blue' ? 'navy' : 'gold'
                  } size="md" className="mr-2" />
                  <div>
                    <div className="text-sm text-white/60">Royal House</div>
                    <div className="text-lg font-bold capitalize">{team}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalDashboardSummary;
