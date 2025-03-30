
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ShameAction } from '@/types/mockery';
import { getShameActionIcon, getShameActionTitle, getShameActionPrice, getShameActionDescription } from '@/components/events/utils/shameUtils';
import { Crown, ArrowRight } from 'lucide-react';
import { getTeamColor } from '@/utils/teamUtils';
import RoyalButton from '@/components/ui/royal-button';

interface ShameTargetUser {
  userId: string;
  username: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team: 'red' | 'green' | 'blue' | null;
  tier: string;
  spendStreak: number;
}

interface ShameModalProps {
  targetUser: ShameTargetUser;
  shameType: ShameAction;
  onConfirm: (userId: string, type: ShameAction) => void;
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
  const shameAmount = getShameActionPrice(shameType);
  const shameLabel = getShameActionTitle(shameType);
  const shameDescription = getShameActionDescription(shameType, targetUser.username);
  const finalPrice = hasDiscount ? shameAmount * 0.8 : shameAmount; // 20% discount if hasDiscount is true
  
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };
  
  return (
    <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          <span className="mr-2">{getShameActionIcon(shameType)}</span>
          {shameLabel}
        </DialogTitle>
        <DialogDescription>
          {shameDescription}
        </DialogDescription>
      </DialogHeader>
      
      <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-md">
        <Avatar className="h-12 w-12 border-2 border-white/20">
          {targetUser.profileImage ? (
            <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
          ) : (
            <AvatarFallback className={getTeamColor(targetUser.team)}>
              {getInitials(targetUser.username)}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div>
          <div className="flex items-center">
            <span className="font-medium text-lg">{targetUser.username}</span>
            {targetUser.rank <= 3 && (
              <Crown className="ml-1 h-4 w-4 text-royal-gold" />
            )}
          </div>
          <div className="text-white/60 text-sm">Rank #{targetUser.rank}</div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 bg-white/5 rounded">
          <span>Cost to shame:</span>
          <span className="font-bold">${finalPrice.toFixed(2)}</span>
        </div>
        
        {hasDiscount && (
          <div className="p-2 bg-green-500/10 border border-green-500/20 rounded text-center text-sm">
            <span className="text-green-400 font-medium">20% Festival Discount Applied!</span>
          </div>
        )}
        
        <div className="p-3 bg-gradient-to-r from-royal-crimson/20 to-royal-purple/20 rounded text-center text-sm italic">
          "In the royal court, shame is merely a commodity to be bought and sold."
        </div>
      </div>
      
      <DialogFooter className="sm:justify-between">
        <Button variant="outline" onClick={onCancel} className="glass-morphism border-white/10">
          Cancel
        </Button>
        <RoyalButton 
          variant="royal" 
          onClick={() => onConfirm(targetUser.userId, shameType)}
          icon={<ArrowRight className="h-4 w-4" />}
        >
          Confirm Shame (${finalPrice.toFixed(2)})
        </RoyalButton>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
