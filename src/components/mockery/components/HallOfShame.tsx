
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, Crown, Target, Users } from 'lucide-react';
import { MockeryAction } from '../hooks/useMockery';
import { getMockeryActionIcon } from '../utils/mockeryUtils';
import RoyalDivider from '@/components/ui/royal-divider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistance } from 'date-fns';

interface MockeryHistoryEntry {
  id: number;
  targetId: number;
  targetName: string;
  actionType: MockeryAction;
  price: number;
  timestamp: number;
  purchaserId?: number;
}

interface HallOfShameProps {
  mostMockedUsers: Array<{ id: number, count: number, name: string }>;
  recentMockeries: MockeryHistoryEntry[];
  className?: string;
}

const HallOfShame: React.FC<HallOfShameProps> = ({
  mostMockedUsers,
  recentMockeries,
  className
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-royal-crimson" />
          Hall of Shame
        </CardTitle>
        <CardDescription>
          The kingdom's most mocked nobles and recent acts of mockery
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium flex items-center mb-3">
            <Target className="h-4 w-4 mr-2 text-royal-crimson" />
            Most Mocked Nobles
          </h3>
          
          <div className="space-y-2">
            {mostMockedUsers.length > 0 ? (
              mostMockedUsers.map((user, index) => (
                <div 
                  key={user.id}
                  className="flex items-center justify-between p-2 glass-morphism border-white/10 rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="text-royal-crimson font-bold">
                    {user.count} {user.count === 1 ? 'mockery' : 'mockeries'}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white/60 py-4">
                No mockeries recorded yet
              </div>
            )}
          </div>
        </div>
        
        <RoyalDivider variant="line" />
        
        <div>
          <h3 className="text-sm font-medium flex items-center mb-3">
            <ScrollText className="h-4 w-4 mr-2 text-royal-gold" />
            Recent Mockeries
          </h3>
          
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
            {recentMockeries.length > 0 ? (
              recentMockeries.map((mockery) => (
                <div 
                  key={mockery.id}
                  className="p-2 glass-morphism border-white/10 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-lg">
                      {getMockeryActionIcon(mockery.actionType)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <strong>{mockery.targetName}</strong> was mocked with{' '}
                        <span className="text-royal-gold">{getMockeryActionIcon(mockery.actionType)}</span>
                      </p>
                      <p className="text-xs text-white/60">
                        {formatDistance(mockery.timestamp, new Date(), { addSuffix: true })}
                      </p>
                    </div>
                    <div className="text-royal-gold text-sm font-medium">
                      ${mockery.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white/60 py-4">
                No recent mockeries
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HallOfShame;
