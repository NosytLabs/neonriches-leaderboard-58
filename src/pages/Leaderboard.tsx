
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, Crown, ArrowUp } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const Leaderboard = () => {
  // Mock leaderboard data
  const leaderboardData = [
    { id: '1', username: 'KingSpender', displayName: 'King Spender', rank: 1, spent: 250000, image: '/placeholder.svg' },
    { id: '2', username: 'DuchessGold', displayName: 'Duchess Gold', rank: 2, spent: 175000, image: '/placeholder.svg' },
    { id: '3', username: 'BaronFortune', displayName: 'Baron Fortune', rank: 3, spent: 120000, image: '/placeholder.svg' },
    { id: '4', username: 'CountSilver', displayName: 'Count Silver', rank: 4, spent: 85000, image: '/placeholder.svg' },
    { id: '5', username: 'LadyWealth', displayName: 'Lady Wealth', rank: 5, spent: 65000, image: '/placeholder.svg' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <Trophy className="mr-2 h-7 w-7 text-royal-gold" />
          The Royal Leaderboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Where spending determines your status in the realm
        </p>
      </div>

      <Card className="bg-background/60 border-white/10">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Top Spenders</span>
            <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold">
              Updated Live
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {leaderboardData.map((user) => (
              <div 
                key={user.id}
                className="flex items-center p-4 rounded-lg bg-background/40 border border-white/5 hover:bg-background/60 transition-colors"
              >
                <div className="font-bold text-lg w-8 text-center mr-4">
                  {user.rank === 1 ? (
                    <Crown className="h-6 w-6 text-royal-gold mx-auto" />
                  ) : (
                    user.rank
                  )}
                </div>
                
                <Avatar className="h-10 w-10 mr-4 border border-white/20">
                  <AvatarImage src={user.image} alt={user.username} />
                  <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="font-medium">{user.displayName}</div>
                  <div className="text-xs text-muted-foreground">@{user.username}</div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-royal-gold">{formatCurrency(user.spent)}</div>
                  <div className="text-xs text-green-400 flex items-center justify-end">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    {formatCurrency(Math.floor(Math.random() * 1000) + 100)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
