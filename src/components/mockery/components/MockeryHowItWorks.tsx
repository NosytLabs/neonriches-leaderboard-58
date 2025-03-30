
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getMockeryDescription, getMockeryName, getMockeryCost } from '@/utils/mockeryUtils';
import { MockeryAction } from '@/types/mockery';

const MOCKERY_TYPES: MockeryAction[] = [
  'tomatoes',
  'eggs',
  'putridEggs',
  'stocks',
  'dunce',
  'silence',
  'courtJester',
  'jest',
  'smokeBomb',
  'glitterBomb'
];

const MockeryHowItWorks: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>How Mockery Works</CardTitle>
        <CardDescription>
          Learn how to shame, ridicule, and humiliate your fellow nobles
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            <p className="text-white/70">
              Mockery is a way to express your disapproval of other users' spending habits in a fun, satirical way. 
              Choose from a variety of mockery actions to affect how others appear on the leaderboard.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Available Mockery Actions</h3>
            
            <div className="space-y-3">
              {MOCKERY_TYPES.map(type => (
                <div key={type} className="p-3 rounded-md bg-white/5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{getMockeryName(type)}</h4>
                    <span className="text-royal-gold text-sm">${getMockeryCost(type)}</span>
                  </div>
                  <p className="text-sm text-white/70 mt-1">
                    {getMockeryDescription(type)}
                  </p>
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-4">Mockery Rules</h3>
            
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Each mockery action costs money, which is added to the total spend of the person applying it.</li>
              <li>Mockery effects last for a limited time, depending on the type of mockery.</li>
              <li>Users can purchase protection to prevent being mocked for a period of time.</li>
              <li>Mockery is visible to all users on the leaderboard.</li>
              <li>Users can only have one active mockery effect at a time.</li>
            </ul>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MockeryHowItWorks;
