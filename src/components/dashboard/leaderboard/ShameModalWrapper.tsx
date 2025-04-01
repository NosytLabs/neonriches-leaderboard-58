
import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { User } from '@/types/user';
import { MockeryAction, TeamColor } from '@/types/mockery';
import { safeToString } from '@/utils/stringUtils';
import ShameModal from '@/components/events/components/ShameModal';

interface ShameModalWrapperProps {
  showModal: boolean;
  selectedUser: User | null;
  shameAction: MockeryAction;
  onOpenChange: (open: boolean) => void;
  onConfirm: (userId: string, type: MockeryAction) => void;
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
  const validTeam = (team === 'red' || team === 'blue' || team === 'green' || team === 'gold' || team === 'purple' || team === 'none' || team === 'neutral') 
    ? team as TeamColor 
    : 'red' as TeamColor;

  // Fix for the string | number error - convert IDs to string
  const userId = safeToString(selectedUser.id);

  return (
    <Dialog open={showModal} onOpenChange={onOpenChange}>
      <ShameModal
        targetUser={{
          userId: userId,
          username: selectedUser.username,
          profileImage: selectedUser.profileImage || '/placeholder.svg',
          totalSpent: selectedUser.totalSpent || selectedUser.amountSpent || 0,
          rank: selectedUser.rank || 0,
          team: validTeam,
          tier: selectedUser.tier || 'free',
          spendStreak: selectedUser.spendStreak || 0
        }}
        shameType={shameAction}
        onConfirm={() => onConfirm(userId, shameAction)}
        onCancel={() => onOpenChange(false)}
        hasDiscount={false}
      />
    </Dialog>
  );
};

export default ShameModalWrapper;
