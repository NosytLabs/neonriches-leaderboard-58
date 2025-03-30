
import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import ShameModal from '@/components/events/components/ShameModal';
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import { User } from '@/types/user';

interface ShameModalWrapperProps {
  showModal: boolean;
  selectedUser: User | null;
  shameAction: ShameAction;
  onOpenChange: (open: boolean) => void;
  onConfirm: (userId: string, type: ShameAction) => void;
}

const ShameModalWrapper: React.FC<ShameModalWrapperProps> = ({
  showModal,
  selectedUser,
  shameAction,
  onOpenChange,
  onConfirm
}) => {
  if (!selectedUser) return null;

  // Convert undefined team to null to avoid the TeamType error
  const team = selectedUser.team || null;

  return (
    <Dialog open={showModal} onOpenChange={onOpenChange}>
      <ShameModal
        targetUser={{
          userId: selectedUser.id.toString(),
          username: selectedUser.username,
          profileImage: selectedUser.profileImage || '/placeholder.svg',
          totalSpent: selectedUser.amountSpent || 0,
          rank: selectedUser.rank || 0,
          team: team,
          tier: selectedUser.tier || 'free',
          spendStreak: selectedUser.spendStreak || 0
        }}
        shameType={shameAction}
        onConfirm={() => onConfirm(selectedUser.id, shameAction)}
        onCancel={() => onOpenChange(false)}
        hasDiscount={false}
      />
    </Dialog>
  );
};

export default ShameModalWrapper;
