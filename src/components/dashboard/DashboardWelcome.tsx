
import React from 'react';
import { UserProfile } from '@/types/user';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface DashboardWelcomeProps {
  user: UserProfile | any; // Make it accept any user type
}

export const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ user }) => {
  return (
    <Card className="glass-morphism border-royal-gold/20 mb-6">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome, {user.displayName || user.username}!
            </h1>
            <p className="text-white/70">
              Your current rank is <span className="text-royal-gold font-medium">#{user.rank || 'N/A'}</span>
            </p>
            <p className="text-white/70">
              Total spent: <span className="text-royal-gold font-medium">{formatCurrency(user.totalSpent || user.amountSpent || 0)}</span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal-gold to-royal-amber">
            <Crown className="h-6 w-6 text-black" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardWelcome;
