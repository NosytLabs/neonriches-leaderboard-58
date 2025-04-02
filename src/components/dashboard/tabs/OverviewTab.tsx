
import React from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { ProfileBoost } from '@/types/user';
import { Card } from '@/components/ui/card';

export interface OverviewTabProps {
  user: UserProfile;
  onSpend?: () => void;
  onPaymentSuccess?: () => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ 
  user,
  onSpend,
  onPaymentSuccess
}) => {
  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4">User Overview</h2>
        <div className="space-y-2">
          <p>Username: {user.username}</p>
          <p>Display Name: {user.displayName}</p>
          <p>Rank: #{user.rank}</p>
          <p>Tier: {user.tier}</p>
          <p>Team: {user.team}</p>
          <p>Total Spent: ${user.totalSpent.toLocaleString()}</p>
        </div>
        
        {onSpend && (
          <button 
            onClick={onSpend}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Simulate Spend
          </button>
        )}
        
        {onPaymentSuccess && (
          <button 
            onClick={onPaymentSuccess}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Simulate Payment Success
          </button>
        )}
      </Card>
    </div>
  );
};

export default OverviewTab;
