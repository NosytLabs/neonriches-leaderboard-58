
import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import ShameModal from '@/components/events/components/ShameModal';
import { User, TeamColor } from '@/types/user';
import { ShameAction } from '@/types/mockery';

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
  // Make sure team is one of the allowed values or provide a fallback
  const validTeam = (team === 'red' || team === 'blue' || team === 'green' || team === 'gold') ? team as TeamColor : 'red' as TeamColor;

  return (
    <Dialog open={showModal} onOpenChange={onOpenChange}>
      <ShameModal
        targetUser={{
          userId: selectedUser.id.toString(),
          username: selectedUser.username,
          profileImage: selectedUser.profileImage || '/placeholder.svg',
          totalSpent: selectedUser.totalSpent || selectedUser.amountSpent || 0,
          rank: selectedUser.rank || 0,
          team: validTeam,
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
