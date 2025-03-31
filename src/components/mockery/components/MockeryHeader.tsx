
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Target } from 'lucide-react';

const MockeryHeader: React.FC = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center">
        <Target className="h-5 w-5 text-royal-crimson mr-2" />
        <span>Royal Mockery Festival</span>
      </CardTitle>
      <CardDescription>
        Engage in the time-honored tradition of publicly mocking other nobles
      </CardDescription>
    </CardHeader>
  );
};

export default MockeryHeader;
