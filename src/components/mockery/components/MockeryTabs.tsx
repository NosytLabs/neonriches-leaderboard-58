
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Shield, Crown, Info } from 'lucide-react';
import { User } from '@/types/user';
import { MockeryAction, MockedUser } from '@/types/mockery';
import MockeryTabContent from './MockeryTabContent';
import MockeryProtectionCard from './MockeryProtectionCard';
import HallOfShame from './HallOfShame';
import MockeryHowToGuide from './MockeryHowToGuide';

interface MockeryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: User | null;
  targetUser: string;
  selectedAction: MockeryAction | null;
  onSelectAction: (action: MockeryAction) => boolean;
  mockedUsers: MockedUser[];
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  isUserProtected: (username: string) => boolean;
  getActiveMockery: (username: string) => MockeryAction;
  onMockery: (username: string, action: string, amount: number) => boolean;
  onPurchaseProtection: () => void;
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
    <Tabs defaultValue="mockery" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="glass-morphism border-white/10 grid grid-cols-4">
        <TabsTrigger value="mockery" className="flex items-center gap-2">
          <Target size={16} />
          <span>Mock Others</span>
        </TabsTrigger>
        <TabsTrigger value="protection" className="flex items-center gap-2">
          <Shield size={16} />
          <span>Protection</span>
        </TabsTrigger>
        <TabsTrigger value="hall" className="flex items-center gap-2">
          <Crown size={16} />
          <span>Hall of Shame</span>
        </TabsTrigger>
        <TabsTrigger value="howto" className="flex items-center gap-2">
          <Info size={16} />
          <span>How It Works</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="mockery" className="space-y-4 mt-4">
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
      
      <TabsContent value="protection" className="mt-4">
        <MockeryProtectionCard 
          isProtected={user ? isUserProtected(user.username) : false}
          onPurchase={onPurchaseProtection}
        />
      </TabsContent>
      
      <TabsContent value="hall" className="mt-4">
        <HallOfShame mockedUsers={mockedUsers} />
      </TabsContent>
      
      <TabsContent value="howto" className="mt-4">
        <MockeryHowToGuide />
      </TabsContent>
    </Tabs>
  );
};

export default React.memo(MockeryTabs);
