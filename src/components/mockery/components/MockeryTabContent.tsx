
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import MockeryCard from './MockeryCard';
import MockeryUserCard from './MockeryUserCard';
import { UserProfile } from '@/types/user';

interface MockeryTabContentProps {
  user: UserProfile | null;
  targetUser: string;
  selectedAction: MockeryAction | null;
  onSelectAction: (action: MockeryAction) => boolean;
  mockedUsers: any[];
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  isUserProtected: (username: string) => boolean;
  getActiveMockery: (username: string) => any;
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
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-3 glass-morphism border-royal-gold/30 p-4 rounded-lg shadow-gold">
          <div className="flex items-center">
            <Badge className="bg-royal-gold text-black font-bold">NEW!</Badge>
            <h3 className="ml-2 font-medium">Premium Mockery Effect</h3>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="col-span-2">
              <p className="text-white/80">
                Deploy our exclusive Royal Smoke Bomb effect! Completely shroud a user's profile in thick, dramatic smoke for 8 hours.
              </p>
              <p className="text-sm text-white/60 mt-2">
                The profile remains accessible, but visitors must peer through the royal fog to see it!
              </p>
            </div>
            <div className="col-span-1">
              <MockeryCard 
                action="smokeBomb" 
                tier="legendary"
                username={targetUser}
                onSelect={onSelectAction}
                selected={selectedAction === 'smokeBomb'}
                className=""
              />
            </div>
          </div>
        </div>
        
        <MockeryCard 
          action="tomatoes" 
          tier="common"
          username={targetUser}
          onSelect={onSelectAction} 
          selected={selectedAction === 'tomatoes'}
          className=""
        />
        
        <MockeryCard 
          action="putridEggs" 
          tier="uncommon"
          username={targetUser}
          onSelect={onSelectAction}
          selected={selectedAction === 'putridEggs'}
          className=""
        />
        
        <MockeryCard 
          action="stocks" 
          tier="rare"
          username={targetUser}
          onSelect={onSelectAction}
          selected={selectedAction === 'stocks'}
          className=""
        />
      </div>
      
      <div className="mt-6">
        {user && (
          <MockeryUserCard 
            user={user}
            isMocked={false}
            isOnCooldown={false}
            mockeryCount={getUserMockeryCount(user.username)}
            mockedOthersCount={getUserMockedOthersCount(user.username)}
            isProtected={isUserProtected(user.username)}
            activeMockery={getActiveMockery(user.username)?.action as MockeryAction}
            onMockery={onMockery}
          />
        )}
      </div>
      
      <div className="mt-4 p-4 glass-morphism border-white/10 rounded-lg">
        <div className="flex items-center mb-3">
          <User className="h-5 w-5 text-white/60 mr-2" />
          <h3 className="font-medium">Mockery Counts & Statistics</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-morphism border-white/10 p-3 rounded">
            <div className="text-2xl font-bold text-center text-royal-crimson">
              {mockedUsers.length}
            </div>
            <div className="text-center text-sm text-white/70">
              Active Mocked Users
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-3 rounded">
            <div className="text-2xl font-bold text-center text-royal-gold">
              {user ? getUserMockedOthersCount(user.username) : 0}
            </div>
            <div className="text-center text-sm text-white/70">
              Users You've Mocked
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-3 rounded">
            <div className="text-2xl font-bold text-center text-royal-purple">
              {user ? getUserMockeryCount(user.username) : 0}
            </div>
            <div className="text-center text-sm text-white/70">
              Times You've Been Mocked
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockeryTabContent;
