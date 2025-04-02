
import React from 'react';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { TeamColor, MockeryAction, UserTier } from '@/types/mockery-types';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { getMockeryActionName, getMockeryDescription } from '@/utils/mockeryUtils';
import { mockeryActionIcons } from '@/utils/mockeryActionUtils';

export interface TargetUserType {
  userId: string;
  username: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  team: TeamColor;
  tier: string | UserTier;
  spendStreak: number;
}

export interface ShameModalProps {
  targetUser: TargetUserType;
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
  const IconComponent = mockeryActionIcons[shameType] || mockeryActionIcons.mock;
  const actionName = getMockeryActionName(shameType);
  const actionDescription = getMockeryDescription(shameType);
  
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <IconComponent className="h-5 w-5" />
          <span>{actionName}</span>
        </DialogTitle>
      </DialogHeader>
      
      <div className="mt-4 space-y-4">
        <div className="flex items-center space-x-3 p-4 border rounded-lg bg-background/50">
          <Avatar className="h-12 w-12">
            <AvatarImage src={targetUser.profileImage} alt={targetUser.username} />
            <AvatarFallback>{targetUser.username.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{targetUser.username}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>Rank #{targetUser.rank}</span>
              <span className="mx-1">•</span>
              <Badge variant="outline" className="h-5 text-xs">{targetUser.team}</Badge>
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-lg bg-muted/50">
          <p className="text-sm">{actionDescription}</p>
          
          {hasDiscount && (
            <p className="mt-2 text-sm text-emerald-600 font-medium">
              You have a special discount on this action!
            </p>
          )}
        </div>
      </div>
      
      <DialogFooter className="gap-2 sm:gap-0">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button 
          variant="default" 
          className="bg-primary hover:bg-primary/90"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShameModal;
