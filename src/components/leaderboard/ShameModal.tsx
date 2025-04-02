
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/Badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Laugh, Skull, Target, AlertTriangle } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryName, getMockeryDescription, getMockeryTier, getMockeryCost } from '@/utils/mockeryUtils';
import { mockeryTierBadgeColors } from '@/utils/mockeryActionUtils';

interface ShameModalProps {
  isOpen: boolean;
  onClose: () => void;
  target: LeaderboardUser | null;
  onMockery: (action: MockeryAction) => void;
}

const ShameModal: React.FC<ShameModalProps> = ({
  isOpen,
  onClose,
  target,
  onMockery
}) => {
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  
  const mockeryActions: MockeryAction[] = [
    'tomato',
    'egg',
    'crown',
    'mock',
    'laugh',
    'shame',
  ];
  
  const handleMockery = () => {
    if (selectedAction && target) {
      onMockery(selectedAction);
      onClose();
    }
  };
  
  if (!target) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Skull className="h-5 w-5 text-royal-crimson" />
            Mock User
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex items-center p-3 rounded-lg bg-black/20 border border-white/10 mb-4">
          <Avatar className="h-10 w-10 mr-3 border border-white/20">
            <AvatarImage src={target.profileImage} alt={target.username} />
            <AvatarFallback>{target.displayName?.charAt(0) || target.username.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium">{target.displayName || target.username}</p>
            <p className="text-xs text-white/60">Rank #{target.rank} • ${target.totalSpent.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <h3 className="font-medium mb-2 flex items-center">
            <Target className="h-4 w-4 mr-2 text-royal-crimson" />
            Select Mockery
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {mockeryActions.map((action) => {
              const tier = getMockeryTier(action);
              const tierColorClass = mockeryTierBadgeColors[tier];
              
              return (
                <div 
                  key={action}
                  className={`p-3 rounded-md border cursor-pointer transition-colors ${
                    selectedAction === action 
                      ? 'bg-royal-crimson/20 border-royal-crimson/40' 
                      : 'bg-black/20 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20'
                  }`}
                  onClick={() => setSelectedAction(action)}
                >
                  <div className="flex items-center mb-2">
                    <Laugh className="h-4 w-4 mr-2" />
                    <p className="font-medium text-sm">{getMockeryName(action)}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className={tierColorClass}>
                      {tier}
                    </Badge>
                    <span className="text-sm font-medium">${getMockeryCost(action)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {selectedAction && (
          <div className="p-4 rounded-lg bg-black/20 border border-white/10 mb-4">
            <h3 className="font-medium mb-2 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
              Preview
            </h3>
            <p className="text-sm text-white/80">{getMockeryDescription(selectedAction)}</p>
            <p className="text-xs text-white/60 mt-2">Cost: ${getMockeryCost(selectedAction)}</p>
          </div>
        )}
        
        <DialogFooter>
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="default" 
            className="flex-1 bg-royal-crimson hover:bg-royal-crimson/90"
            onClick={handleMockery}
            disabled={!selectedAction}
          >
            Deploy Mockery
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShameModal;
