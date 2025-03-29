
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Trophy } from 'lucide-react';
import { UserProfile } from '@/types/user';
import RoyalTrophyModel from './3d/RoyalTrophyModel';

interface RoyalShowcaseProps {
  user?: UserProfile;
  onPurchaseRoyal?: () => void;
}

const RoyalShowcase: React.FC<RoyalShowcaseProps> = ({ user, onPurchaseRoyal }) => {
  const handleUpgradeClick = () => {
    if (onPurchaseRoyal) {
      onPurchaseRoyal();
    }
  };
  
  const mockUser: UserProfile = {
    id: '123',
    username: 'RoyalSpender',
    email: 'royaluser@example.com',
    rank: 1,
    joinDate: '2023-05-01T00:00:00Z',
    joinedAt: '2023-05-01T00:00:00Z',
    displayName: 'Lord Spendington',
    gender: 'king',
    profileImage: 'https://i.pravatar.cc/300?img=12',
    amountSpent: 5000,
    totalSpent: 5000,
    spentAmount: 5000,
    tier: 'royal',
    team: 'red',
    spendStreak: 12
  };
  
  const royalUser = user || mockUser;
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-1">
            <Crown className="h-6 w-6 text-royal-gold" />
            <h2 className="text-xl font-bold text-royal-gold">Royal Status</h2>
            <Crown className="h-6 w-6 text-royal-gold" />
          </div>
          <p className="text-white/70 max-w-md mx-auto text-sm">
            Showcase your dominance with visual flair and premium status effects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center">
            <RoyalTrophyModel 
              username={royalUser.displayName}
              placement={royalUser.rank}
              spinSpeed={0.2}
              size="medium"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-royal-gold flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Royal Benefits
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 text-royal-gold">✦</div>
                <div>
                  <span className="font-medium">Premium Profile Effects</span>
                  <p className="text-sm text-white/60">Exclusive visual effects and animations for your profile</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 text-royal-gold">✦</div>
                <div>
                  <span className="font-medium">Unlimited Profile Boosts</span>
                  <p className="text-sm text-white/60">Apply multiple profile boosts simultaneously</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 text-royal-gold">✦</div>
                <div>
                  <span className="font-medium">75% Discount on Mockery</span>
                  <p className="text-sm text-white/60">Mock other users at a significant discount</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 text-royal-gold">✦</div>
                <div>
                  <span className="font-medium">Premium Chat Features</span>
                  <p className="text-sm text-white/60">Animated text effects and premium emojis in team chat</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 text-royal-gold">✦</div>
                <div>
                  <span className="font-medium">Exclusive Cosmetics</span>
                  <p className="text-sm text-white/60">Access to royal-tier cosmetic items for your profile</p>
                </div>
              </li>
            </ul>
            
            <Button
              onClick={handleUpgradeClick}
              className="w-full bg-gradient-to-r from-royal-gold to-amber-500 hover:from-amber-500 hover:to-royal-gold text-black font-semibold border border-royal-gold/50 shadow-lg"
            >
              <Crown className="mr-2 h-4 w-4" />
              Acquire Royal Status - $25/month
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalShowcase;
