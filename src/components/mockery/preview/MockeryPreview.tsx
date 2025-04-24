
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Info } from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import { mockeryDescriptions } from '@/utils/mockery/mockery-descriptions';
import { getMockeryCost } from '@/utils/mockeryUtils';

interface MockeryPreviewProps {
  selectedTarget: {
    displayName: string;
    rank: number;
  };
  selectedAction: MockeryAction;
}

const MockeryPreview: React.FC<MockeryPreviewProps> = ({
  selectedTarget,
  selectedAction
}) => {
  return (
    <div className="p-4 rounded-lg bg-black/20 border border-white/10 mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <Info className="h-5 w-5 mr-2 text-white/70" />
          <h3 className="font-medium">Mockery Details</h3>
        </div>
        <Badge variant="outline" className="bg-royal-crimson/20 text-royal-crimson border-royal-crimson/40">
          Preview
        </Badge>
      </div>
      
      <div className="flex items-center mb-3">
        <Avatar className="h-10 w-10 mr-3 border border-white/20">
          <AvatarFallback>{selectedTarget.displayName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{selectedTarget.displayName}</p>
          <p className="text-xs text-white/60">Rank #{selectedTarget.rank}</p>
        </div>
      </div>
      
      <div className="p-3 rounded bg-black/30 mb-3">
        <p className="text-sm">{mockeryDescriptions[selectedAction]}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <span>Cost</span>
        <span className="font-bold">${getMockeryCost(selectedAction)}</span>
      </div>
    </div>
  );
};

export default MockeryPreview;
