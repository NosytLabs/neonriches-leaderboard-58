
import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShameAction, MockeryAction } from '@/types/mockery'; 
import { getShameActionTitle, getShameActionDescription, getShameActionIcon } from '@/components/events/utils/shameUtils';
import { TeamColor, UserTier } from '@/types/user';

interface ShameModalProps {
  targetUser: {
    userId: string;
    username: string;
    profileImage?: string;
    totalSpent?: number;
    rank?: number;
    team?: TeamColor;
    tier?: UserTier;
    spendStreak?: number;
  };
  shameType: ShameAction | MockeryAction;
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
  // Get the action icon, title, description and price
  const actionIcon = getShameActionIcon(shameType);
  const actionTitle = getShameActionTitle(shameType);
  const actionDescription = getShameActionDescription(shameType).replace('the user', targetUser.username);
  const basePrice = 0.5; // Default price if not available
  const price = hasDiscount ? basePrice * 0.5 : basePrice;

  const handleConfirm = () => {
    onConfirm(targetUser.userId);
  };

  return (
    <DialogContent className="glass-morphism border-white/20 max-w-md mx-auto">
      <DialogTitle className="text-center flex flex-col items-center gap-2">
        <span className="text-3xl">{actionIcon}</span>
        <span>{actionTitle}</span>
      </DialogTitle>
      
      <div className="my-4 text-center">
        <Avatar className="h-16 w-16 mx-auto mb-2 border-2 border-white/20">
          <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
          <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-900">
            {targetUser.username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <h3 className="font-medium">@{targetUser.username}</h3>
        
        {targetUser.rank && (
          <p className="text-sm text-white/60">Rank #{targetUser.rank}</p>
        )}
      </div>
      
      <DialogDescription className="text-center">
        {actionDescription}
        {targetUser.username !== 'the user' && (
          <div className="mt-2 text-sm text-white/80">
            This effect is purely cosmetic and will last for 24 hours.
          </div>
        )}
      </DialogDescription>
      
      <div className="my-4 px-4 py-3 rounded-lg bg-black/20 text-center">
        <div className="font-semibold">
          {hasDiscount ? (
            <div className="flex items-center justify-center gap-2">
              <span className="line-through text-white/50">${basePrice.toFixed(2)}</span>
              <span className="text-royal-gold">${price.toFixed(2)}</span>
              <span className="text-xs px-2 py-0.5 bg-royal-gold/20 text-royal-gold rounded">50% OFF</span>
            </div>
          ) : (
            <span>${price.toFixed(2)}</span>
          )}
        </div>
        <div className="text-xs text-white/60 mt-1">
          This amount will be deducted from your wallet balance.
        </div>
      </div>
      
      <DialogFooter className="flex flex-col sm:flex-row gap-2">
        <Button
          variant="outline"
          className="w-full sm:w-auto glass-morphism border-white/10 hover:bg-white/5"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className="w-full sm:w-auto bg-royal-crimson hover:bg-royal-crimson/90"
          onClick={handleConfirm}
        >
          Confirm {actionTitle}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
