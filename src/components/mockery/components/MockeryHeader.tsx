
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Target } from 'lucide-react';

const MockeryHeader: React.FC = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Target className="h-5 w-5 text-royal-crimson" />
        Royal Mockery Festival
      </CardTitle>
      <CardDescription>
        Engage in the medieval tradition of mockery and status games
      </CardDescription>
    </CardHeader>
  );
};

export default MockeryHeader;
