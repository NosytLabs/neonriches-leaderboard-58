
import React from 'react';
import { useAuth } from '@/contexts/auth';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Withdraw: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Withdraw Funds</h1>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Royal Treasury Withdrawal</CardTitle>
          <CardDescription>
            Convert your royal wealth to Solana
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This feature is coming soon. Stay tuned!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Withdraw;
