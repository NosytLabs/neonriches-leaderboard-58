
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Crown, Medal, Rocket, Trophy, Users } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { cn } from '@/lib/utils';

// Sample data for demonstration (in a real app, this would come from an API)
const topUsers = [
  {
    id: '1',
    username: 'EliteSpender',
    displayName: 'Elite Spender',
    profileImage: '/path/to/profile1.jpg',
    amountSpent: 15000,
    followers: 156,
    joinedAt: '2023-01-15T00:00:00Z', // Use string instead of Date
  },
  {
    id: '2',
    username: 'RoyalThrower',
    displayName: 'Royal Thrower',
    profileImage: '/path/to/profile2.jpg',
    amountSpent: 10500,
    followers: 78,
    joinedAt: '2023-04-20T00:00:00Z', // Use string instead of Date
  },
  {
    id: '3',
    username: 'MoneyKing',
    displayName: 'Money King',
    profileImage: '/path/to/profile3.jpg',
    amountSpent: 8750,
    followers: 92,
    joinedAt: '2023-03-10T00:00:00Z', // Use string instead of Date
  }
];

interface RoyalShowcaseProps {
  user?: UserProfile | null;
  className?: string;
}

const RoyalShowcase: React.FC<RoyalShowcaseProps> = ({ user, className }) => {
  return (
    <Card className={cn("glass-morphism bg-gradient-to-br from-royal-dark/60 to-black shadow-xl border-royal-gold/20", className)}>
      <CardHeader className="border-b border-royal-gold/10 pb-3">
        <div className="flex items-center space-x-2">
          <Crown className="text-royal-gold h-5 w-5" />
          <CardTitle className="text-lg font-royal royal-gradient">Top Spenders</CardTitle>
        </div>
        <CardDescription>
          The most elite members of the SpendThrone nobility
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="space-y-4">
          {topUsers.map((topUser, index) => (
            <div key={topUser.id} className="flex items-center gap-4 p-3 rounded-lg glass-morphism border border-white/5 hover:border-royal-gold/20 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 flex items-center justify-center border border-royal-gold/20">
                {index === 0 ? (
                  <Trophy className="h-6 w-6 text-royal-gold" />
                ) : index === 1 ? (
                  <Medal className="h-6 w-6 text-royal-silver" />
                ) : (
                  <Medal className="h-6 w-6 text-royal-bronze" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-white truncate">{topUser.displayName}</h3>
                    <p className="text-gray-400 text-sm">@{topUser.username}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold royal-gradient">{formatCurrency(topUser.amountSpent)}</div>
                    <div className="text-xs text-gray-400 flex items-center justify-end gap-1">
                      <Users className="h-3 w-3" />
                      <span>{topUser.followers} followers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" className="border-royal-gold/20 text-royal-gold hover:bg-royal-gold/10 w-full">
            <Rocket className="h-4 w-4 mr-2" />
            View Full Leaderboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalShowcase;
