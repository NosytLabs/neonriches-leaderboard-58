
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MockedUser } from '@/types/mockery';
import { formatTimeAgo } from '@/utils/formatTimeAgo';
import MockeryIconRenderer from './MockeryIconRenderer';

interface MockeryHistoryProps {
  mockedUsers: MockedUser[];
}

const MockeryHistory: React.FC<MockeryHistoryProps> = ({ mockedUsers }) => {
  const hasHistory = mockedUsers.length > 0;
  
  return (
    <Card className="p-4">
      {hasHistory ? (
        <div className="space-y-4">
          {mockedUsers.map((user, index) => (
            <div 
              key={`${user.id}-${index}`}
              className="p-3 bg-black/20 rounded-lg border border-white/10 flex items-center"
            >
              {user.action && (
                <MockeryIconRenderer 
                  action={user.action} 
                  size="md" 
                  className="mr-3" 
                />
              )}
              <div className="flex-1">
                <p className="text-sm font-medium">
                  <span className="text-white/90">{user.username}</span> was mocked with{' '}
                  <span className="text-royal-gold">{user.action}</span>
                </p>
                {user.appliedAt && (
                  <p className="text-xs text-white/60">
                    {formatTimeAgo(user.appliedAt)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CardContent className="text-center py-8">
          <p className="text-white/60">No mockery history found</p>
        </CardContent>
      )}
    </Card>
  );
};

export default MockeryHistory;
