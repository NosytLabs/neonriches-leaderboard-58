
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getMockeryTierColor } from '@/components/mockery/utils/mockeryUtils';
import { formatDistanceToNow } from 'date-fns';

export interface ShameRecord {
  id: string;
  targetUser: {
    id: string;
    username: string;
    profileImage?: string;
  };
  appliedBy: {
    id: string;
    username: string;
    profileImage?: string;
  };
  mockeryType: string;
  tier: string;
  timestamp: string;
  expiresAt: string;
}

export interface HallOfShameProps {
  shameRecords: ShameRecord[];
}

const HallOfShame: React.FC<HallOfShameProps> = ({ shameRecords }) => {
  if (shameRecords.length === 0) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="text-base flex items-center">
            <Flame className="h-5 w-5 text-royal-crimson/80 mr-2" />
            Hall of Shame
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-white/60 italic p-4">
            No mockeries are currently active. The hall of shame is empty.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center">
          <Flame className="h-5 w-5 text-royal-crimson/80 mr-2" />
          Hall of Shame
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 pt-0">
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-2">
            {shameRecords.map((record) => (
              <div key={record.id} className="glass-morphism-subtle rounded-lg p-2 flex items-center justify-between">
                <div className="flex items-center">
                  {record.targetUser.profileImage ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                      <img 
                        src={record.targetUser.profileImage} 
                        alt={record.targetUser.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0" />
                  )}
                  <div className="ml-2">
                    <div className="text-sm font-medium">{record.targetUser.username}</div>
                    <div className="text-xs text-white/60 flex items-center">
                      <Badge variant="outline" className="text-[10px] py-0 h-4 px-1">
                        {record.mockeryType}
                      </Badge>
                      <span className="ml-1">
                        by {record.appliedBy.username}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  {formatDistanceToNow(new Date(record.timestamp), { addSuffix: true })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default HallOfShame;
