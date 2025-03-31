
import React from 'react';
import { User } from '@/types/user';
import RankStatusCard from '@/components/dashboard/RankStatusCard';
import UserStats from '@/components/dashboard/UserStats';
import SpendingVisualizer from '@/components/dashboard/SpendingVisualizer';
import BriberyBanner from '@/components/dashboard/BriberyBanner';

interface OverviewTabProps {
  user: User;
  onSpend: () => void;
  onPaymentSuccess: () => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ user, onSpend, onPaymentSuccess }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RankStatusCard user={user} />
        <UserStats user={user} />
      </div>
      
      <div className="space-y-6">
        <SpendingVisualizer user={user} onSpend={onSpend} />
        <BriberyBanner user={user} onPaymentSuccess={onPaymentSuccess} />
      </div>
    </div>
  );
};

export default React.memo(OverviewTab);
