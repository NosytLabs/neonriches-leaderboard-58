
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, DollarSign, Info } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  getMockeryActionTitle, 
  getMockeryActionDescription, 
  getMockeryActionIcon, 
  getMockeryActionPrice, 
  getDiscountedMockeryPrice 
} from '../utils/mockeryUtils';

interface TargetUser {
  userId: string;
  username: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: string;
  spendStreak?: number;
}

interface MockeryModalProps {
  targetUser: TargetUser;
  mockeryType: MockeryAction;
  onConfirm: (userId: string, action: MockeryAction) => void;
  onCancel: () => void;
  hasDiscount?: boolean;
}

const MockeryModal: React.FC<MockeryModalProps> = ({
  targetUser,
  mockeryType,
  onConfirm,
  onCancel,
  hasDiscount = false
}) => {
  const regularPrice = getMockeryActionPrice(mockeryType);
  const discountedPrice = hasDiscount ? getDiscountedMockeryPrice(mockeryType) : regularPrice;
  const finalPrice = hasDiscount ? discountedPrice : regularPrice;
  
  return (
    <DialogContent className="glass-morphism border-white/10 bg-black/70 backdrop-blur-md sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="royal-gradient font-medieval flex items-center">
          <span className="mr-2">{getMockeryActionIcon(mockeryType)}</span>
          <span className="ml-2">{getMockeryActionTitle(mockeryType)}</span>
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-4 my-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
            {targetUser.profileImage ? (
              <img 
                src={targetUser.profileImage} 
                alt={targetUser.username} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-lg">
                {targetUser.username[0]}
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-medium text-lg">{targetUser.username}</h4>
            <div className="flex items-center text-white/60 text-sm">
              <span className="mr-2">Rank #{targetUser.rank}</span>
              <span>${targetUser.totalSpent.toLocaleString()} spent</span>
            </div>
            {targetUser.spendStreak && targetUser.spendStreak > 0 && (
              <div className="text-royal-gold text-xs mt-1">
                {targetUser.spendStreak} week spending streak
              </div>
            )}
          </div>
        </div>
        
        <div className="glass-morphism border-white/10 p-4 rounded-lg text-sm">
          <p className="text-white/80">
            {getMockeryActionDescription(mockeryType, targetUser.username)}
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-white/70">
            The effect lasts for 24 hours
          </div>
          
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-royal-gold mr-1" />
            {hasDiscount && (
              <span className="line-through text-white/50 mr-2">${regularPrice.toFixed(2)}</span>
            )}
            <span className="font-bold text-royal-gold">${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
        <Button 
          variant="outline" 
          className="sm:flex-1"
          onClick={onCancel}
        >
          Cancel
        </Button>
        
        <Button 
          className="sm:flex-1 bg-royal-crimson hover:bg-royal-crimson/90"
          onClick={() => onConfirm(targetUser.userId, mockeryType)}
        >
          Confirm Mockery
        </Button>
      </DialogFooter>
      
      <div className="text-xs text-white/60 flex justify-center mt-2">
        <Tooltip>
          <TooltipTrigger className="flex items-center">
            <Info className="h-3 w-3 mr-1" />
            How does mockery work?
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>
              Mockery effects are purely visual and do not affect leaderboard rankings or status.
              The target will display the mockery effect for 24 hours.
              You can only mock a user once every 24 hours.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </DialogContent>
  );
};

export default MockeryModal;
