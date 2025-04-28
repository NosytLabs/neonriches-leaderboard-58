
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StandardUserProfile } from '@/types/user-consolidated';
import { formatCurrency } from '@/utils/formatters';

interface DashboardWelcomeProps {
  user: StandardUserProfile;
}

export const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ user }) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome, {user.displayName}!</h2>
            <p className="text-white/70 mt-1">
              Your current rank: <span className="font-semibold">#{user.rank || 'N/A'}</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-sm text-white/70">Wallet Balance</p>
            <p className="text-2xl font-bold text-royal-gold">
              {formatCurrency(user.walletBalance || 0)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
