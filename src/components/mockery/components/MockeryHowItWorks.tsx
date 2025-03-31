
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryName, getMockeryDescription, getMockeryCost } from '@/utils/mockery';

interface MockeryHowItWorksProps {
  className?: string;
}

const MockeryHowItWorks: React.FC<MockeryHowItWorksProps> = ({ className }) => {
  // Define a list of mockery actions to showcase
  const mockeryActions: MockeryAction[] = [
    'tomatoes',
    'eggs',
    'crown',
    'stocks',
    'jester',
    'protection',
    'shame'
  ];
  
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4 royal-gradient">How the Royal Mockery Festival Works</h2>
      
      <div className="space-y-6">
        <Card className="border-white/10 bg-black/40">
          <CardHeader>
            <CardTitle>Understanding Mockery</CardTitle>
            <CardDescription>
              The Royal Mockery Festival is a satirical feature designed to add a playful element to user interactions.
              It allows you to apply visual effects to other users' profiles for a limited time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Mockery effects are purely cosmetic and do not affect a user's actual rank or standing.
              Each mockery type has its own unique visual effect and duration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockeryActions.map((action) => (
                <div key={action} className="glass-morphism border-white/10 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{getMockeryName(action)}</h3>
                    <Badge variant="outline" className="font-mono">${Number(getMockeryCost(action)).toFixed(2)}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{getMockeryDescription(action)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-white/10 bg-black/40">
          <CardHeader>
            <CardTitle>Festival Rules</CardTitle>
            <CardDescription>
              Important guidelines for participating in the Royal Mockery Festival
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Mockery is purely for entertainment and has no impact on ranks or rewards</li>
              <li>All mockery effects expire after 24-72 hours</li>
              <li>Users can purchase Royal Protection to shield themselves from mockery</li>
              <li>The Court reserves the right to remove inappropriate mockery</li>
              <li>Mockery prices range from $0.25 to $5.00 based on effect type</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MockeryHowItWorks;
