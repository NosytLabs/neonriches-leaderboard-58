
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user-consolidated';

interface CashThroneUpgradeProps {
  user: UserProfile;
}

const CashThroneUpgrade: React.FC<CashThroneUpgradeProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upgrade Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Current account: <span className="font-semibold">{user.prestige ? 'Premium' : 'Free'}</span>
        </p>
        
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-royal-gold/30 bg-black/20">
            <h3 className="text-lg font-bold text-royal-gold">Royal Package</h3>
            <p className="text-white/70 mt-1">Get special royal privileges and boost your status!</p>
            <p className="text-lg font-bold mt-2">$99.99</p>
            <Button className="mt-3 w-full" variant="royal">
              Upgrade Now
            </Button>
          </div>
          
          <div className="p-4 rounded-lg border border-white/10 bg-black/20">
            <h3 className="text-lg font-bold">Noble Package</h3>
            <p className="text-white/70 mt-1">Basic privileges with access to exclusive features</p>
            <p className="text-lg font-bold mt-2">$49.99</p>
            <Button className="mt-3 w-full">
              Upgrade
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CashThroneUpgrade;
