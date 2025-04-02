
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shell } from '@/components/ui/Shell'; // Fixed casing
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/Badge'; // Fixed casing
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import MockeryComponent from '@/components/mockery/MockeryComponent';
import { getMockeryActionName } from '@/utils/mockeryActionUtils';
import { getMockeryDescription } from '@/utils/mockeryUtils';
import { MockeryAction } from '@/types/mockery-types';

const MockeryPage = () => {
  const navigate = useNavigate();
  
  const mockeryActions: MockeryAction[] = [
    'tomato',
    'egg',
    'putridEgg',
    'crown',
    'thumbsDown',
    'mock',
    'stocks',
    'jester',
    'courtJester',
    'silence',
    'taunt',
    'smokeBomb',
    'protection',
    'flame',
    'heart',
    'skull',
    'laugh'
  ];

  return (
    <Shell>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Royal Mockery System</h1>
        <p className="text-muted-foreground mb-8">
          Choose a mockery action to unleash upon the kingdom's subjects.
        </p>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockeryActions.map(action => (
            <Card key={action} className="overflow-hidden">
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
          ))}
        </div>
      </div>
    </Shell>
  );
};

export default MockeryPage;
