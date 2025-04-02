
import React from 'react';
import MockeryEffect from './MockeryEffect';
import { MockeryAction } from '@/types/mockery-types';
import { ensureMockeryAction } from '@/utils/typeUnifier';

interface MockeryEffectsShowcaseProps {
  // Props
}

const MockeryEffectsShowcase: React.FC<MockeryEffectsShowcaseProps> = () => {
  // Convert string literals to MockeryAction using our helper
  const mockeryActions: MockeryAction[] = [
    ensureMockeryAction('shame'),
    ensureMockeryAction('silence'),
    ensureMockeryAction('courtJester'),
    ensureMockeryAction('smokeBomb'),
    ensureMockeryAction('protection')
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mockery Effects</h2>
      <p className="text-white/70">
        See how different mockery actions appear on the target's profile.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {mockeryActions.map(action => (
          <div key={action} className="bg-black/20 border border-white/10 rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold capitalize">{action}</h3>
              <div className="h-40 flex items-center justify-center">
                <MockeryEffect actionType={action} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockeryEffectsShowcase;
