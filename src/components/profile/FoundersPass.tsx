
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Gift, Diamond, Award, Star, Clock } from 'lucide-react';
import ThroneChair from '@/components/logos/ThroneChair';

interface FoundersPassProps {
  isFounder?: boolean;
  joinDate?: string;
}

const FoundersPass: React.FC<FoundersPassProps> = ({ isFounder = false, joinDate }) => {
  // Calculate days since launch (mocked for now)
  const launchDate = new Date('2023-01-01');
  const daysSinceLaunch = Math.floor((new Date().getTime() - launchDate.getTime()) / (1000 * 3600 * 24));
  
  return (
    <Card className="glass-morphism border-royal-gold/20 overflow-hidden">
      <div className="absolute -top-10 -right-10 opacity-10">
        <ThroneChair size={100} animate={isFounder} />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-royal flex items-center">
            <Crown className="h-5 w-5 text-royal-gold mr-2" />
            Noble Founders Pass
          </CardTitle>
          
          {isFounder ? (
            <Badge className="bg-royal-gold text-black">Acquired</Badge>
          ) : (
            <Badge variant="outline" className="border-white/20 text-white/60">Unavailable</Badge>
          )}
        </div>
        <CardDescription>
          Exclusive privileges for the realm's earliest supporters
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="glass-morphism p-3 rounded-lg flex items-center">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-royal-gold/20 mr-3">
              <Diamond className="h-4 w-4 text-royal-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Limited Royal Edition</h4>
              <p className="text-xs text-white/70">Only the first 100 nobles to spend at least $50 receive this title</p>
            </div>
          </div>
          
          <div className="glass-morphism p-3 rounded-lg flex items-center">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-royal-gold/20 mr-3">
              <Gift className="h-4 w-4 text-royal-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Exclusive Benefits</h4>
              <p className="text-xs text-white/70">Special cosmetics, reduced mockery fees, and priority customer support</p>
            </div>
          </div>
          
          <div className="glass-morphism p-3 rounded-lg flex items-center">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-royal-gold/20 mr-3">
              <Award className="h-4 w-4 text-royal-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Founder's Certificate</h4>
              <p className="text-xs text-white/70">On-chain certification of your wise investment in meaningless status</p>
            </div>
          </div>
          
          {isFounder ? (
            <div className="mt-4 p-3 rounded-lg border border-royal-gold/40 bg-royal-gold/10">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-royal-gold mr-2" />
                <span className="font-semibold">Thy Noble Status Secured</span>
              </div>
              <p className="text-sm text-white/70 mt-1">
                You are among the enlightened few who exchanged real currency for digital exclusivity when our kingdom was but a humble hamlet.
              </p>
              {joinDate && (
                <div className="flex items-center mt-2 text-xs text-royal-gold">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Joined the nobility on {new Date(joinDate).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-4 p-3 rounded-lg border border-white/10 bg-white/5">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-white/60 mr-2" />
                <span className="font-semibold">Opportunity Expired</span>
              </div>
              <p className="text-sm text-white/70 mt-1">
                The realm has existed for {daysSinceLaunch} days, and the window to claim this prestigious status has closed. The early nobles have already staked their claims.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FoundersPass;
