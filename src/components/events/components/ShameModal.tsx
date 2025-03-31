
import React from 'react';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MockeryAction } from '@/types/mockery';
import { UserProfile } from '@/types/user';
import { Coins } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { 
  getShameActionIcon, 
  getShameActionTitle, 
  getShameActionDescription,
  getShameActionPrice,
  getDiscountedShamePrice
} from '@/components/events/utils/shameUtils';

interface ShameModalProps {
  targetUser: {
    userId: string;
    username: string;
    profileImage?: string;
    totalSpent?: number;
    rank?: number;
    team?: string;
    tier?: string;
    spendStreak?: number;
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
  const ShameIcon = getShameActionIcon(shameType);
  const shameTitle = getShameActionTitle(shameType);
  const shameDescription = getShameActionDescription(shameType);
  
  const regularPrice = getShameActionPrice(shameType);
  const discountedPrice = hasDiscount ? getDiscountedShamePrice(shameType) : regularPrice;
  const discountPercentage = hasDiscount 
    ? Math.round((1 - discountedPrice / regularPrice) * 100) 
    : 0;
  
  return (
    <DialogContent className="glass-morphism border-white/10 max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          {ShameIcon && <ShameIcon size={18} className="text-royal-crimson" />}
          {shameTitle}
        </DialogTitle>
        <DialogDescription>
          {shameDescription}
        </DialogDescription>
      </DialogHeader>
      
      <div className="p-4 bg-black/20 rounded-lg flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-white/20">
          <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
          <AvatarFallback>{targetUser.username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div>
          <h3 className="font-semibold">{targetUser.username}</h3>
          {targetUser.rank && <p className="text-sm text-white/70">Rank #{targetUser.rank}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-white/80">
          This mockery will be visible to everyone visiting the leaderboard for 24 hours.
        </p>
        
        <div className="flex justify-between items-center p-2 bg-black/20 rounded-lg">
          <span className="text-sm">Cost</span>
          <div className="flex items-center">
            <Coins className="h-4 w-4 mr-1 text-royal-gold" />
            {hasDiscount ? (
              <div className="flex items-center">
                <span className="line-through text-white/50 mr-1">${regularPrice.toFixed(2)}</span>
                <span className="text-royal-gold font-bold">${discountedPrice.toFixed(2)}</span>
                <span className="ml-1 text-xs px-1.5 py-0.5 bg-royal-gold/20 text-royal-gold rounded-full">
                  {discountPercentage}% OFF
                </span>
              </div>
            ) : (
              <span className="font-bold">${regularPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        <p className="text-xs text-white/50 italic">
          All mockery effects are purely cosmetic and do not affect a user's actual rank or standing.
        </p>
      </div>
      
      <DialogFooter className="gap-2 sm:gap-0">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button 
          className="bg-royal-crimson hover:bg-royal-crimson/90"
          onClick={() => onConfirm(targetUser.userId)}
        >
          Confirm Mockery
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
