
import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { User } from '@/types/user-types';
import { MockeryAction, TeamColor } from '@/types/mockery';
import ShameModal from '@/components/dashboard/leaderboard/ShameModal';

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

  // Convert undefined team to null to avoid the TeamType error
  const team = selectedUser.team || null;
  // Make sure team is one of the allowed values or provide a fallback
  const validTeam = (team === 'red' || team === 'blue' || team === 'green' || team === 'gold' || team === 'purple' || team === 'none' || team === 'neutral') 
    ? team as TeamColor 
    : 'red' as TeamColor;

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
        hasDiscount={hasDiscount}
      />
    </Dialog>
  );
};

export default ShameModalWrapper;
