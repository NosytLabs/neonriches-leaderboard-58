
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MockeryAction, TeamColor } from '@/types/mockery-types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, ShieldCheck, Coins } from 'lucide-react';
import { 
  getMockeryName, 
  getMockeryDescription,
  getMockeryActionPrice
} from '@/utils/mockeryUtils';
import { getDiscountedShamePrice } from '@/utils/shameUtils';
import { getInitials } from '@/utils/formatters/stringFormatters';

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
  const regularPrice = getMockeryActionPrice(shameType);
  const finalPrice = hasDiscount 
    ? getDiscountedShamePrice(shameType) 
    : regularPrice;
  
  return (
    <DialogContent className="sm:max-w-md glass-morphism border-white/10">
      <DialogHeader>
        <DialogTitle>Confirm Royal Mockery</DialogTitle>
      </DialogHeader>
      
      <div className="grid gap-6 py-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 ring-2 ring-white/20">
            <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
            <AvatarFallback>{getInitials(targetUser.username, 1)}</AvatarFallback>
          </Avatar>
          
          <div>
            <p className="font-medium">{targetUser.username}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Crown className="mr-1 h-3.5 w-3.5 text-royal-gold" />
              <span>Rank #{targetUser.rank}</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-white/10 p-4">
          <h3 className="font-medium mb-2">{getMockeryName(shameType)}</h3>
          <p className="text-sm text-white/70">{getMockeryDescription(shameType)}</p>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Coins className="mr-1.5 h-4 w-4 text-royal-gold" />
              <span className="font-medium">
                {hasDiscount ? (
                  <span className="flex items-center">
                    <span className="line-through text-white/50 mr-2">${regularPrice}</span>
                    <span className="text-emerald-400">${finalPrice}</span>
                  </span>
                ) : (
                  <span>${finalPrice}</span>
                )}
              </span>
            </div>
            
            {hasDiscount && (
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded">
                50% OFF
              </span>
            )}
          </div>
        </div>
        
        <div className="rounded-lg border border-white/10 p-4 bg-black/30">
          <div className="flex items-start">
            <ShieldCheck className="h-5 w-5 mr-2 text-indigo-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Purely Cosmetic Effect</h4>
              <p className="text-xs text-white/60 mt-1">
                This mockery is for entertainment purposes only and has no impact on the user's actual rank or standing.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <DialogFooter className="flex justify-between sm:justify-between">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button 
          className="bg-gradient-to-r from-royal-crimson to-royal-purple"
          onClick={() => onConfirm(targetUser.userId)}
        >
          Apply Mockery
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
