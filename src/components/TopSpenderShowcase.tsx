
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, ArrowUp, DollarSign } from 'lucide-react';

interface TopSpender {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
}

const TopSpenderShowcase: React.FC<{ topSpenders?: TopSpender[] }> = ({ topSpenders = [] }) => {
  // Ensure topSpenders is always an array and check its length
  const hasTopSpenders = Array.isArray(topSpenders) && topSpenders.length > 0;
  
  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <Crown className="mr-2 h-5 w-5 text-yellow-500" />
          Top Spenders
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {hasTopSpenders ? (
          <div className="divide-y divide-white/10">
            {topSpenders.map((spender, index) => (
              <div 
                key={spender.id} 
                className="flex items-center p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 mr-3 text-sm font-semibold">
                  {index + 1}
                </div>
                <Avatar className="h-10 w-10 border border-white/10 mr-3">
                  <AvatarImage src={spender.profileImage} alt={spender.username} />
                  <AvatarFallback>{spender.displayName?.charAt(0) || spender.username.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">
                    {spender.displayName || spender.username}
                  </p>
                  <div className="flex items-center text-xs text-white/60">
                    <Badge variant="outline" className="mr-1.5">
                      #{spender.rank}
                    </Badge>
                    <DollarSign className="h-3 w-3 mr-1" />
                    {spender.totalSpent.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-white/60">
            No top spenders to display yet
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TopSpenderShowcase;
