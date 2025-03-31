
import React from 'react';
import { MockedUser } from '@/types/mockery';
import { Card, CardContent } from '@/components/ui/card';

interface MockeryHistoryProps {
  mockedUsers: MockedUser[];
}

const MockeryHistory: React.FC<MockeryHistoryProps> = ({ mockedUsers }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-medium mb-4">Mockery History</h3>
        
        {mockedUsers.length === 0 ? (
          <p className="text-sm text-muted-foreground">No mockery history found.</p>
        ) : (
          <div className="space-y-2">
            {mockedUsers.map((user) => (
              <div
                key={user.id}
                className="p-2 rounded-md border border-gray-800 flex items-center justify-between"
              >
                <div>
                  <span className="font-medium">{user.username}</span>
                  <p className="text-xs text-muted-foreground">
                    {user.mockedReason || "Mockery applied"}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  {new Date(user.appliedAt || user.mockedTimestamp || Date.now()).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MockeryHistory;
