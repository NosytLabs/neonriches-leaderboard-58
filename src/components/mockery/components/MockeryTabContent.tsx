
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { MockeryAction, MockedUser } from '@/types/mockery';
import { getMockeryName, getMockeryDescription, getMockeryCost } from '@/utils/mockery';
import { getMockeryActionIcon } from '@/utils/mockery/index';

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
  getUserMockeryCount,
  getUserMockedOthersCount,
  isUserProtected,
  getActiveMockery,
  onMockery
}) => {
  const [targetUsername, setTargetUsername] = useState(targetUser || '');
  const [selectedMockeryAction, setSelectedMockeryAction] = useState<MockeryAction | null>(selectedAction);
  
  // Allowed mockery actions
  const mockeryActions: MockeryAction[] = [
    'tomatoes',
    'eggs',
    'stocks',
    'dunce',
    'jester',
    'troll'
  ];
  
  const handleSelectAction = (action: MockeryAction) => {
    const success = onSelectAction(action);
    if (success) {
      setSelectedMockeryAction(action);
    }
    return success;
  };
  
  const handleMockerySubmit = () => {
    if (!selectedMockeryAction) return;
    
    const cost = getMockeryCost(selectedMockeryAction);
    onMockery(targetUsername, selectedMockeryAction, cost);
  };
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Target a Noble</h3>
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Enter username to mock..."
                value={targetUsername}
                onChange={(e) => setTargetUsername(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {mockeryActions.map((action) => {
                const Icon = getMockeryActionIcon(action);
                const cost = getMockeryCost(action);
                
                return (
                  <Card 
                    key={action}
                    className={`p-3 cursor-pointer transition-all ${selectedMockeryAction === action ? 'bg-royal-purple/20 border-royal-purple' : 'glass-morphism hover:bg-white/5'}`}
                    onClick={() => handleSelectAction(action)}
                  >
                    <div className="flex items-center mb-2">
                      <div className="p-1 rounded-full bg-white/10 mr-2">
                        {Icon && <Icon size={16} className="text-white/70" />}
                      </div>
                      <h4 className="text-sm font-medium">{getMockeryName(action)}</h4>
                    </div>
                    <p className="text-xs text-white/60 mb-2">{getMockeryDescription(action).slice(0, 60)}...</p>
                    <div className="text-xs font-mono text-right">${cost}</div>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button 
                onClick={handleMockerySubmit}
                disabled={!targetUsername || !selectedMockeryAction || !user}
                className="bg-royal-purple hover:bg-royal-purple/90"
              >
                Execute Mockery
              </Button>
            </div>
          </div>
        </div>
        
        <div className="col-span-1">
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Your Mockery Stats</h3>
            {user ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span className="text-sm">Times Mocked</span>
                  <span className="font-mono font-bold">{getUserMockeryCount(user.username)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span className="text-sm">Mockeries Sent</span>
                  <span className="font-mono font-bold">{getUserMockedOthersCount(user.username)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span className="text-sm">Protection Status</span>
                  <span className={`font-medium ${isUserProtected(user.username) ? 'text-green-400' : 'text-red-400'}`}>
                    {isUserProtected(user.username) ? 'Active' : 'None'}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-white/60">Login to view your mockery statistics and send mockeries to other nobles.</p>
            )}
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6 mb-3">Recently Mocked Nobles</h3>
      {mockedUsers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {mockedUsers.slice(0, 6).map((mockedUser) => (
            <Card key={mockedUser.id} className="glass-morphism border-white/10 p-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  {mockedUser.profileImage ? (
                    <img src={mockedUser.profileImage} alt={mockedUser.username} className="w-full h-full rounded-full" />
                  ) : (
                    <span>{mockedUser.username.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{mockedUser.displayName || mockedUser.username}</h4>
                  <p className="text-xs text-white/60">{mockedUser.mockedReason || "Recently mocked"}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-white/60">No nobles have been mocked recently.</p>
      )}
    </div>
  );
};

export default React.memo(MockeryTabContent);
