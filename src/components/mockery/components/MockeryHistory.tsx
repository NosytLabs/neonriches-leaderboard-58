
import React from 'react';
import { Card } from '@/components/ui/card';
import { MockedUser } from '@/types/mockery';

interface MockeryHistoryProps {
  mockedUsers: MockedUser[];
}

const MockeryHistory: React.FC<MockeryHistoryProps> = ({ mockedUsers }) => {
  return (
    <Card className="p-4">
      <div className="text-center text-gray-400 py-8">
        {mockedUsers.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mockery History</h3>
            <p>You have mocked {mockedUsers.length} users.</p>
            <ul className="space-y-2">
              {mockedUsers.map(user => (
                <li key={user.id} className="p-2 border border-white/10 rounded-md">
                  {user.displayName} ({user.username})
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold">No Mockery History</h3>
            <p>You haven't mocked any users yet.</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MockeryHistory;
