
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; 
import { Badge } from '@/components/ui/badge';
import { MockeryAction, TeamColor } from '@/types/mockery';
import { getMockeryName, getMockeryDescription, getMockeryTier, getMockeryCost } from '@/utils/mockeryUtils';
import { Coins } from 'lucide-react';

export interface ShameModalProps {
  targetUser: {
    userId: string;
    username: string;
    profileImage: string;
    totalSpent: number;
    rank: number;
    team: TeamColor;
    tier: string;
    spendStreak: number;
  };
  shameType: MockeryAction;
  onConfirm: (userId: string) => void;
  onCancel: () => void;
  hasDiscount?: boolean;
}

const ShameModal: React.FC<ShameModalProps> = ({
  targetUser,
  shameType,
  onConfirm,
  onCancel,
  hasDiscount = false
}) => {
  const [isConfirming, setIsConfirming] = React.useState(false);
  
  const handleConfirm = () => {
    setIsConfirming(true);
    onConfirm(targetUser.userId);
  };
  
  const actionTier = getMockeryTier(shameType);
  const actionName = getMockeryName(shameType);
  const actionDescription = getMockeryDescription(shameType);
  const actionCost = getMockeryCost(shameType);
  const discountedCost = hasDiscount ? actionCost * 0.5 : actionCost;
  
  const getTierColorClass = (tier: string) => {
    switch (tier) {
      case 'legendary': return 'text-royal-gold';
      case 'epic': return 'text-purple-400';
      case 'rare': return 'text-blue-400';
      case 'uncommon': return 'text-green-400';
      default: return 'text-gray-300';
    }
  };
  
  return (
    <DialogContent className="sm:max-w-md glass-morphism border-white/20">
      <DialogHeader>
        <DialogTitle>Confirm Mockery</DialogTitle>
        <DialogDescription>
          You are about to subject {targetUser.username} to public mockery.
        </DialogDescription>
      </DialogHeader>
      
      <div className="flex flex-col items-center py-4">
        <div className="mb-3 relative">
          <div className={`absolute -inset-1 rounded-full ${
            actionTier === 'legendary'
              ? 'bg-royal-gold/30 animate-pulse-slow'
              : actionTier === 'epic'
                ? 'bg-purple-500/30 animate-pulse-slow'
                : actionTier === 'rare'
                  ? 'bg-blue-500/30 animate-pulse-slow'
                  : 'bg-white/20'
          }`}></div>
          <Avatar className="w-20 h-20 border-2 border-white/20 relative">
            <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
            <AvatarFallback className="text-xl">{targetUser.username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
        
        <h3 className="text-lg font-semibold mb-1">{targetUser.username}</h3>
        <Badge 
          variant="outline" 
          className={`mb-4 ${getTierColorClass(actionTier)} bg-black/20 border-0`}
        >
          {actionName}
        </Badge>
        
        <div className="glass-morphism border-white/10 p-4 rounded-md mb-4 text-sm text-center max-w-xs">
          <p>{actionDescription}</p>
        </div>
        
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5">
            <Badge
              variant="outline"
              className={`${getTierColorClass(actionTier)} border-0 bg-black/30`}
            >
              {actionTier.toUpperCase()}
            </Badge>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="text-white/60 text-sm">Cost:</span>
            {hasDiscount ? (
              <div className="flex flex-col">
                <span className="text-xs line-through text-white/50">${actionCost.toFixed(2)}</span>
                <span className="font-bold text-green-400">${discountedCost.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold">${actionCost.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        <p className="text-xs text-white/40 italic">
          This is a cosmetic mockery with no functional impact
        </p>
      </div>
      
      <DialogFooter>
        <Button
          variant="outline"
          onClick={onCancel}
          disabled={isConfirming}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={isConfirming}
          className={`${
            actionTier === 'legendary' 
              ? 'bg-royal-gold hover:bg-royal-gold/80 text-black'
              : actionTier === 'epic'
                ? 'bg-purple-500 hover:bg-purple-500/80'
                : actionTier === 'rare'
                  ? 'bg-blue-500 hover:bg-blue-500/80'
                  : 'bg-primary'
          }`}
        >
          {isConfirming ? (
            <>Processing...</>
          ) : (
            <>
              <Coins className="w-4 h-4 mr-2" />
              Pay ${discountedCost.toFixed(2)}
            </>
          )}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
