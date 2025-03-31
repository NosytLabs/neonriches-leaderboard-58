
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MockedUser } from '@/types/mockery';
import { formatDistanceToNow } from 'date-fns';

interface MockeryHistoryProps {
  mockedUsers: MockedUser[];
}

const MockeryHistory: React.FC<MockeryHistoryProps> = ({ mockedUsers }) => {
  // Sort by most recent first
  const sortedUsers = [...mockedUsers].sort((a, b) => {
    const dateA = new Date(a.appliedAt || a.mockedTimestamp || '');
    const dateB = new Date(b.appliedAt || b.mockedTimestamp || '');
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">Mockery History</CardTitle>
      </CardHeader>
      <CardContent>
        {sortedUsers.length > 0 ? (
          <div className="space-y-3">
            {sortedUsers.map((user, index) => (
              <div key={`${user.id}-${index}`} className="p-3 bg-black/30 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{user.username}</h3>
                    <p className="text-xs text-white/60">
                      {user.mockedAction || user.action} by {user.mockedBy || (user.appliedBy?.username || 'Unknown')}
                    </p>
                  </div>
                  <div className="text-xs text-white/60">
                    {formatDistanceToNow(new Date(user.appliedAt || user.mockedTimestamp || ''), { addSuffix: true })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-white/60">
            <p>No mockery history available.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MockeryHistory;
