
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { getMockeryName, getMockeryDescription } from '@/utils/mockeryUtils';
import { MockeryAction } from '@/types/mockery-types';

export interface ShameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  targetUser?: {
    userId: string;
    username: string;
    profileImage: string;
    totalSpent: number;
    rank: number;
    team: string;
    tier: string;
    spendStreak: number;
  };
  shameType?: MockeryAction;
  hasDiscount?: boolean;
  userId?: string; // For backward compatibility
  onComplete?: () => void;
}

const ShameModal: React.FC<ShameModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  targetUser,
  shameType = 'mock',
  hasDiscount = false,
  onComplete
}) => {
  const handleConfirm = () => {
    onConfirm();
    if (onComplete) {
      onComplete();
    }
  };

  if (!targetUser && isOpen) {
    console.error('ShameModal: targetUser is required when modal is open');
    return null;
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Flame className="text-red-500 h-5 w-5" />
            <span>Confirm Mockery Action</span>
          </DialogTitle>
        </DialogHeader>
        
        {targetUser && (
          <div className="py-4">
            <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-background/50">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
                <AvatarFallback>{targetUser.username.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{targetUser.username}</p>
                <p className="text-sm text-muted-foreground">Rank #{targetUser.rank}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">
                <span className="mr-2">{getMockeryName(shameType)}</span>
                <Badge variant="outline" className="bg-red-500/10 text-red-400">
                  Cost: 50 coins
                </Badge>
              </h3>
              <p className="text-muted-foreground text-sm">
                {getMockeryDescription(shameType)}
              </p>
            </div>
            
            {hasDiscount && (
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 mb-4">
                <p className="text-green-400 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span>Special discount: 50% off this mockery action!</span>
                </p>
              </div>
            )}
            
            <div className="text-amber-400 text-sm mb-4">
              <p>This action will be visible to other users.</p>
            </div>
          </div>
        )}
        
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleConfirm} 
            className={cn(
              "bg-red-600 hover:bg-red-700"
            )}
          >
            Confirm Mockery
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShameModal;
