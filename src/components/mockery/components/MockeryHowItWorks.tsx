
import React from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MockeryIconRenderer from '../MockeryIconRenderer';
import { getMockeryActionTitle, getMockeryTier, getMockeryActionDescription, getMockeryActionPrice } from '@/utils/mockery';

const availableActions: MockeryAction[] = [
  'tomatoes',
  'eggs',
  'stocks',
  'dunce',
  'jester',
  'troll',
  'peasant',
  'rat',
  'ghost',
  'skeleton',
  'zombie',
  'witch',
  'monster',
  'dragon'
];

const MockeryHowItWorks: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>How Mockery Works</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-white/70">
          <p>Mockery allows you to apply cosmetic effects to other users, giving their profile a visual "status" that others can see on the leaderboard.</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Available Mockery Actions:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {availableActions.map((action) => {
              const tier = getMockeryTier(action);
              
              return (
                <div key={action} className="p-2 bg-black/20 rounded flex items-center space-x-2">
                  <MockeryIconRenderer action={action} size="sm" />
                  <div>
                    <p className="text-xs font-medium">{getMockeryActionTitle(action)}</p>
                    <p className="text-xs text-white/60">${getMockeryActionPrice(action)} - {tier}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-sm text-white/70 mt-4">
          <p className="font-semibold">Important Note:</p>
          <p>All mockery effects are purely cosmetic and do not affect a user's actual rank or standing. These are visual entertainment features only.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryHowItWorks;
