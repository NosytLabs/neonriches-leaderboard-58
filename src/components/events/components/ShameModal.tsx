
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MockeryAction, TeamColor } from '@/types/mockery-types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, ShieldCheck, Coins } from 'lucide-react';
import { 
  getMockeryName, 
  mockeryDescriptions,
  getMockeryCost
} from '@/utils/mockeryUtils';
import { getDiscountedShamePrice } from '@/utils/shameUtils';
import { getInitials } from '@/utils/formatters/stringFormatters';
import { normalizeMockeryAction } from '@/utils/mockeryNormalizer';

interface ShameModalProps {
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
  onConfirm: () => void;
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
  const regularPrice = getMockeryCost(shameType);
  const finalPrice = hasDiscount 
    ? getDiscountedShamePrice(shameType) 
    : regularPrice;
  
  const getActionTitle = () => {
    const normalizedAction = normalizeMockeryAction(shameType);
    switch (normalizedAction) {
      case 'tomato': return 'Throw Tomatoes';
      case 'egg': return 'Throw Rotten Eggs';
      case 'stocks': return 'Place in Stocks';
      case 'jester': return 'Make a Jester';
      case 'crown': return 'Award Crown';
      case 'shame': return 'Public Shaming';
      case 'protection': return 'Royal Protection';
      default: return 'Royal Mockery';
    }
  };
  
  const getActionDescription = () => {
    const normalizedAction = normalizeMockeryAction(shameType);
    return mockeryDescriptions[normalizedAction] || "Apply mockery to this user.";
  };
  
  const getActionIcon = () => {
    const normalizedAction = normalizeMockeryAction(shameType);
    switch (normalizedAction) {
      case 'crown':
      case 'protection':
        return <ShieldCheck className="h-5 w-5 text-royal-gold" />;
      default:
        return <Coins className="h-5 w-5 text-red-500" />;
    }
  };
  
  return (
    <DialogContent className="glass-morphism border-white/10">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          {getActionIcon()}
          <span className="ml-2">{getActionTitle()}</span>
        </DialogTitle>
      </DialogHeader>
      
      <div className="flex items-center space-x-4 py-4">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-black/20">
          <AvatarImage 
            src={targetUser.profileImage || '/placeholder.svg'} 
            alt={targetUser.username}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div>
          <h3 className="font-medium">{targetUser.username}</h3>
          <div className="text-sm text-white/60">
            <span>Rank #{targetUser.rank}</span>
            <span className="mx-2">•</span>
            <span>${targetUser.totalSpent.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 p-4 rounded-md">
        <div className="flex justify-between items-center">
          <span>{getActionTitle()} Cost:</span>
          <span className="font-semibold">${finalPrice}</span>
        </div>
        {hasDiscount && (
          <div className="text-xs text-green-400 mt-1 text-right">
            25% Discount Applied
          </div>
        )}
      </div>
      
      <DialogFooter className="mt-4">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button 
          onClick={onConfirm} 
          className="bg-royal-gold hover:bg-royal-gold/90 text-black"
        >
          <Crown className="h-4 w-4 mr-2" />
          Confirm ({finalPrice} coins)
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
