
import React from 'react';
import { UserProfile } from '@/types/user';
import { MockeryAction, MockedUser } from '@/types/mockery-types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getMockeryName } from '@/utils/mockeryUtils';

interface MockeryTabContentProps {
  user: UserProfile | null;
  targetUser: string;
  selectedAction: MockeryAction | null;
  onSelectAction: (action: MockeryAction) => boolean;
  mockedUsers: MockedUser[];
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  isUserProtected: (username: string) => boolean;
  getActiveMockery: (username: string) => MockeryAction | null;
  onMockery: (username: string, action: string, amount: number) => boolean;
}

const MockeryTabContent: React.FC<MockeryTabContentProps> = ({
  user,
  targetUser,
  selectedAction,
  onSelectAction,
  mockedUsers,
  isUserProtected,
  onMockery
}) => {
  const mockeryActions: MockeryAction[] = ['tomatoes', 'eggs', 'crown', 'stocks'];
  
  return (
    <Card className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {mockeryActions.map((action) => (
          <Button
            key={action}
            variant={selectedAction === action ? "default" : "outline"}
            className="justify-start"
            onClick={() => onSelectAction(action)}
          >
            {getMockeryName(action)}
          </Button>
        ))}
      </div>
      
      <div className="flex justify-end mt-4">
        <Button
          disabled={!selectedAction || !targetUser}
          onClick={() => selectedAction && onMockery(targetUser, selectedAction, 0.25)}
        >
          Apply Mockery
        </Button>
      </div>
    </Card>
  );
};

export default MockeryTabContent;
