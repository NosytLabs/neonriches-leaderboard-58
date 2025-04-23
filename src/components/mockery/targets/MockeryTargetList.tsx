
import React from 'react';
import { Target } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface MockeryTarget {
  id: string;
  username: string;
  displayName: string;
  rank: number;
  profileImage?: string;
  tier: string;
}

interface MockeryTargetListProps {
  targets: MockeryTarget[];
  selectedTarget: MockeryTarget | null;
  onSelectTarget: (target: MockeryTarget) => void;
}

const MockeryTargetList: React.FC<MockeryTargetListProps> = ({
  targets,
  selectedTarget,
  onSelectTarget
}) => {
  return (
    <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
      {targets.length > 0 ? (
        targets.map((target) => (
          <div 
            key={target.id}
            className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
              selectedTarget?.id === target.id 
                ? 'bg-royal-crimson/20 border-royal-crimson/40' 
                : 'bg-background/50 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20'
            }`}
            onClick={() => onSelectTarget(target)}
          >
            <Avatar className="h-10 w-10 mr-3 border border-white/20">
              <AvatarImage src={target.profileImage} alt={target.username} />
              <AvatarFallback>{target.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center">
                <h4 className="font-medium">{target.displayName}</h4>
                {target.tier === 'royal' && (
                  <Badge className="ml-2 bg-royal-gold/20 text-royal-gold border-royal-gold/30">
                    Royal
                  </Badge>
                )}
              </div>
              <p className="text-xs text-white/60">@{target.username} • Rank #{target.rank}</p>
            </div>
            {selectedTarget?.id === target.id && (
              <Target className="h-5 w-5 text-royal-crimson" />
            )}
          </div>
        ))
      ) : (
        <div className="text-center py-4 text-white/60">
          No targets found with that name
        </div>
      )}
    </div>
  );
};

export default MockeryTargetList;
