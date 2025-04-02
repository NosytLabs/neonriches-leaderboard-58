
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import MockeryComponent from '@/components/mockery/MockeryComponent';
import { getMockeryActionName } from '@/utils/mockeryActionUtils';
import { getMockeryDescription } from '@/utils/mockeryUtils';
import { MockeryAction } from '@/types/mockery-types';

interface MockeryCardProps {
  action: MockeryAction;
}

const MockeryCard: React.FC<MockeryCardProps> = ({ action }) => {
  const navigate = useNavigate();
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <MockeryComponent action={action} size={20} />
            {getMockeryActionName(action)}
          </CardTitle>
          <Badge variant="outline" className="font-normal">
            5-100 coins
          </Badge>
        </div>
        <CardDescription>
          {getMockeryDescription(action)}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className="pt-4">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => navigate(`/mockery/${action}`)}
        >
          Select
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MockeryCard;
