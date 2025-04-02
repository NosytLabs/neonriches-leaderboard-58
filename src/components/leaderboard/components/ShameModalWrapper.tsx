
import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { User } from '@/types/user-types';
import { MockeryAction, TeamColor } from '@/types/mockery-types';
import ShameModal from '@/components/events/components/ShameModal';
import { toTeamColor } from '@/utils/teamUtils';

interface ShameModalWrapperProps {
  showModal: boolean;
  selectedUser: User | null;
  shameAction: MockeryAction;
  onOpenChange: (open: boolean) => void;
  onConfirm: (userId: string, type: MockeryAction) => void;
  hasDiscount?: boolean;
}

const ShameModalWrapper: React.FC<ShameModalWrapperProps> = ({
  showModal,
  selectedUser,
  shameAction,
  onOpenChange,
  onConfirm,
  hasDiscount = false
}) => {
  if (!selectedUser) return null;

  // Convert team to valid TeamColor
  const validTeam = toTeamColor(selectedUser.team as string);

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
          tier: selectedUser.tier || 'basic',
          spendStreak: selectedUser.spendStreak || 0
        }}
        shameType={shameAction}
        onConfirm={() => onConfirm(selectedUser.id, shameAction)}
        onCancel={() => onOpenChange(false)}
        hasDiscount={hasDiscount}
      />
    </Dialog>
  );
};

export default ShameModalWrapper;
