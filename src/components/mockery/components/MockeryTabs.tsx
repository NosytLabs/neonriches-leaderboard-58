
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserProfile } from '@/types/user';
import { MockeryAction, MockedUser } from '@/types/mockery-types';
import MockeryTabContent from './MockeryTabContent';
import MockeryHistory from './MockeryHistory';
import MockeryProtection from './MockeryProtection';

interface MockeryTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
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
  onPurchaseProtection: () => boolean;
}

const MockeryTabs: React.FC<MockeryTabsProps> = ({
  activeTab,
  setActiveTab,
  user,
  targetUser,
  selectedAction,
  onSelectAction,
  mockedUsers,
  getUserMockeryCount,
  getUserMockedOthersCount,
  isUserProtected,
  getActiveMockery,
  onMockery,
  onPurchaseProtection
}) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="mockery" className="data-[state=active]:bg-royal-purple/20">
          Mockery
        </TabsTrigger>
        <TabsTrigger value="history" className="data-[state=active]:bg-royal-purple/20">
          History
        </TabsTrigger>
        <TabsTrigger value="protection" className="data-[state=active]:bg-royal-purple/20">
          Protection
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="mockery" className="mt-0">
        <MockeryTabContent
          user={user}
          targetUser={targetUser}
          selectedAction={selectedAction}
          onSelectAction={onSelectAction}
          mockedUsers={mockedUsers}
          getUserMockeryCount={getUserMockeryCount}
          getUserMockedOthersCount={getUserMockedOthersCount}
          isUserProtected={isUserProtected}
          getActiveMockery={getActiveMockery}
          onMockery={onMockery}
        />
      </TabsContent>
      
      <TabsContent value="history" className="mt-0">
        <MockeryHistory 
          mockedUsers={mockedUsers}
        />
      </TabsContent>
      
      <TabsContent value="protection" className="mt-0">
        <MockeryProtection 
          user={user}
          isProtected={user ? isUserProtected(user.username) : false}
          onPurchaseProtection={onPurchaseProtection}
        />
      </TabsContent>
    </Tabs>
  );
};

export default MockeryTabs;
