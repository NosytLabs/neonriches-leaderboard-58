import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionIcon, getMockeryName, mockeryDescriptions, getMockeryCost } from '@/utils/mockeryUtils';

interface MockeryModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUser: UserProfile;
  shameType: MockeryAction;
  onConfirm: () => void;
  onCancel: () => void;
  hasDiscount?: boolean;
}

const MockeryModal: React.FC<MockeryModalProps> = ({
  isOpen,
  onClose,
  targetUser,
  shameType,
  onConfirm,
  onCancel,
  hasDiscount = false
}) => {
  const ActionIcon = getMockeryActionIcon(shameType);
  const mockeryName = getMockeryName(shameType);
  const mockeryDescription = mockeryDescriptions[shameType] || 'Mock the target';
  const mockeryCost = getMockeryCost(shameType);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Mockery</DialogTitle>
          <DialogDescription>
            Are you sure you want to deploy this mockery?
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex items-center space-x-2 text-center">
            {ActionIcon && <ActionIcon className="h-8 w-8 text-muted-foreground" />}
            <h4 className="text-lg font-semibold">{mockeryName}</h4>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{mockeryDescription}</p>
          
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span>Target:</span>
              <div className="flex items-center">
                <Badge variant="secondary" className="mr-2">
                  {targetUser.displayName}
                </Badge>
                <img
                  src={targetUser.profileImage}
                  alt={targetUser.username}
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Cost:</span>
              <span className="font-semibold">
                ${mockeryCost}
                {hasDiscount && <span className="text-sm text-green-500"> (Discount Applied)</span>}
              </span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="button" onClick={onConfirm}>
            Confirm Mockery
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MockeryModal;
