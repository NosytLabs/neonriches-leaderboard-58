
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '@/types/user-consolidated';

interface OverviewTabProps {
  user: UserProfile;
  onSpend: () => void;
  onPaymentSuccess: () => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Welcome, {user.displayName}!</p>
        <p className="mt-4">This is a placeholder for the dashboard overview tab.</p>
      </CardContent>
    </Card>
  );
};

export default OverviewTab;
