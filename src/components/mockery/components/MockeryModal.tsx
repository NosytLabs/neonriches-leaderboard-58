
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { getMockeryName, getMockeryDescription, getMockeryCost, getMockeryTier } from '@/utils/mockery';
import { getMockeryActionIcon } from '@/utils/mockery/mockery-icons';

interface MockeryModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  avatarUrl?: string;
  action: MockeryAction;
  onConfirm: () => void;
  isConfirming?: boolean;
}

const MockeryModal: React.FC<MockeryModalProps> = ({
  isOpen,
  onClose,
  username,
  avatarUrl,
  action,
  onConfirm,
  isConfirming = false
}) => {
  const [confirmed, setConfirmed] = useState(false);
  
  const handleConfirm = () => {
    setConfirmed(true);
    onConfirm();
  };
  
  // Helper function to get tier color
  const getTierColor = (actionName: MockeryAction) => {
    const tier = getMockeryTier(actionName);
    const colorObj: Record<string, string> = {
      legendary: 'text-royal-gold',
      epic: 'text-purple-400',
      rare: 'text-blue-400',
      uncommon: 'text-green-400',
      common: 'text-gray-300'
    };
    
    return colorObj[tier] || 'text-gray-300';
  };
  
  const ActionIcon = getMockeryActionIcon(action);
  const actionTitle = getMockeryName(action);
  const actionDescription = getMockeryDescription(action);
  const actionPrice = getMockeryCost(action);
  const actionTier = getMockeryTier(action);
  
  return (
    <Dialog open={isOpen} onOpenChange={() => !isConfirming && onClose()}>
      <DialogContent className="sm:max-w-md glass-morphism border-white/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ActionIcon className={getTierColor(action)} />
            <span>Confirm Mockery</span>
          </DialogTitle>
          <DialogDescription>
            You are about to subject {username} to public mockery.
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
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback className="text-xl">{username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 rounded-full p-1.5 bg-black">
              <ActionIcon className={`h-5 w-5 ${getTierColor(action)}`} />
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-1">{username}</h3>
          <Badge 
            variant="outline" 
            className={`mb-4 ${getTierColor(action)} bg-black/20 border-0`}
          >
            {actionTitle}
          </Badge>
          
          <div className="glass-morphism border-white/10 p-4 rounded-md mb-4 text-sm text-center max-w-xs">
            <p>{actionDescription}</p>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1.5">
              <Badge
                variant="outline"
                className={`${getTierColor(action)} border-0 bg-black/30`}
              >
                {actionTier.toUpperCase()}
              </Badge>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span className="text-white/60 text-sm">Cost:</span>
              <span className="font-bold">${actionPrice}</span>
            </div>
          </div>
          
          <p className="text-xs text-white/40 italic">
            This is a cosmetic mockery with no functional impact
          </p>
        </div>
        
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isConfirming}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isConfirming || confirmed}
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
            {isConfirming ? 'Processing...' : confirmed ? 'Confirmed' : 'Confirm Mockery'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MockeryModal;
