
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';
import { formatCurrency } from '@/utils/formatters/currencyFormatters';

interface SpotlightSectionProps {
  spotlightUsers: LeaderboardUser[];
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({ spotlightUsers }) => {
  if (!spotlightUsers || spotlightUsers.length === 0) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Crown className="mr-2 h-6 w-6 text-royal-gold" />
            Nobility Spotlight
          </h2>
          <Link to="/leaderboard" className="text-royal-gold hover:underline flex items-center">
            View Full Leaderboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlightUsers.map((user, index) => (
            <Card key={user.id} className="glass-morphism border-royal-gold/30 overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-royal-gold/5 rounded-full blur-2xl"></div>
              
              {/* Position badge */}
              <div className="absolute top-3 right-3">
                <Badge className={`
                  ${index === 0 ? 'bg-royal-gold text-black' : 
                    index === 1 ? 'bg-gray-300 text-gray-900' : 
                    'bg-amber-600 text-black'}
                `}>
                  #{index + 1}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <Link to={`/profile/${user.username}`}>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3 border-2 border-royal-gold/50">
                      <AvatarImage src={user.profileImage || user.avatarUrl} alt={user.username} />
                      <AvatarFallback>
                        {user.displayName?.substring(0, 2) || user.username.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <CardTitle className="text-lg flex items-center">
                        {user.displayName || user.username}
                        {user.isVerified && (
                          <Sparkles className="h-4 w-4 ml-2 text-royal-gold" />
                        )}
                      </CardTitle>
                      <p className="text-sm text-white/60">@{user.username}</p>
                    </div>
                  </div>
                </Link>
              </CardHeader>
              
              <CardContent>
                <div className="mt-2 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-white/60">Total Spent</p>
                    <p className="text-xl font-bold text-royal-gold">
                      ${formatCurrency(user.totalSpent)}
                    </p>
                  </div>
                  
                  <Link to={`/profile/${user.username}`}>
                    <Button variant="outline" className="border-royal-gold/30 hover:bg-royal-gold/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
