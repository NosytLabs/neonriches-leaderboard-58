
import React from 'react';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Shield, DollarSign, AlertTriangle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RoyalButton from '@/components/ui/royal-button';
import { MockeryAction } from '../hooks/useMockeryEffect';
import { 
  getMockeryActionTitle, 
  getMockeryActionDescription, 
  getMockeryActionIcon, 
  getMockeryActionPrice, 
  getDiscountedMockeryPrice 
} from '../utils/mockeryUtils';
import { getTeamColor } from '@/lib/colors';
import { Badge } from '@/components/ui/badge';

interface TargetUser {
  userId: string;
  username: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: string;
  tier?: string;
  spendStreak?: number;
}

interface MockeryModalProps {
  targetUser: TargetUser;
  mockeryType: MockeryAction;
  onConfirm: (userId: string, mockeryType: MockeryAction) => void;
  onCancel: () => void;
  hasDiscount: boolean;
}

const MockeryModal: React.FC<MockeryModalProps> = ({
  targetUser,
  mockeryType,
  onConfirm,
  onCancel,
  hasDiscount
}) => {
  const [isProcessing, setIsProcessing] = React.useState(false);
  const basePrice = getMockeryActionPrice(mockeryType);
  const discountedPrice = hasDiscount ? getDiscountedMockeryPrice(mockeryType) : basePrice;
  const finalPrice = discountedPrice;
  const teamColor = targetUser.team ? getTeamColor(targetUser.team) : '';
  
  const handleConfirm = () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      onConfirm(targetUser.userId, mockeryType);
      setIsProcessing(false);
    }, 1500);
  };
  
  const actionTitle = getMockeryActionTitle(mockeryType);
  const actionDescription = getMockeryActionDescription(mockeryType, targetUser.username);
  const actionIcon = getMockeryActionIcon(mockeryType);
  
  return (
    <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <span className="text-2xl">{actionIcon}</span>
          <span>{actionTitle}</span>
        </DialogTitle>
        <DialogDescription>
          {actionDescription}
        </DialogDescription>
      </DialogHeader>
      
      <div className="flex items-center gap-4 my-4 p-3 glass-morphism border-white/10 rounded-lg">
        <Avatar className="h-12 w-12">
          {targetUser.profileImage ? (
            <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
          ) : (
            <AvatarFallback className="bg-gradient-to-br from-royal-purple to-royal-navy">
              {targetUser.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div>
          <div className="font-medium">{targetUser.username}</div>
          <div className="flex items-center gap-2 text-sm">
            <Badge variant="outline" className="font-medium text-xs">
              <Crown size={10} className="mr-1" /> Rank #{targetUser.rank}
            </Badge>
            
            {targetUser.team && (
              <Badge 
                variant="outline" 
                className={`text-xs ${teamColor}`}
              >
                {targetUser.team.toUpperCase()}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="p-3 glass-morphism border-white/10 rounded-lg">
          <div className="text-sm font-medium mb-1">Mockery Details</div>
          <div className="text-sm text-white/70 flex flex-col gap-1">
            <div className="flex justify-between">
              <span>Effect Type:</span>
              <span className="font-medium">{actionTitle}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="font-medium">24 hours</span>
            </div>
            <div className="flex justify-between">
              <span>Base Price:</span>
              <span className={hasDiscount ? 'line-through text-white/50' : 'font-medium'}>
                ${basePrice.toFixed(2)}
              </span>
            </div>
            {hasDiscount && (
              <div className="flex justify-between text-royal-gold">
                <span>Discounted Price:</span>
                <span className="font-medium">${discountedPrice.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-white/10 mt-1 pt-1 flex justify-between font-medium">
              <span>Total:</span>
              <span className="text-royal-gold">${finalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-sm text-white/70">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          <p>Mockery is purely visual and does not affect leaderboard rankings.</p>
        </div>
      </div>
      
      <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <Button 
          variant="outline" 
          onClick={onCancel}
          disabled={isProcessing}
          className="glass-morphism border-white/10"
        >
          Cancel
        </Button>
        
        <RoyalButton
          variant="royal"
          onClick={handleConfirm}
          disabled={isProcessing}
          className="relative"
          shimmer={!isProcessing}
          glow={!isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center">
              <span className="animate-spin mr-2">⟳</span> Processing...
            </span>
          ) : (
            <span className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" /> 
              Confirm Mockery (${finalPrice.toFixed(2)})
            </span>
          )}
        </RoyalButton>
      </DialogFooter>
    </DialogContent>
  );
};

export default MockeryModal;
