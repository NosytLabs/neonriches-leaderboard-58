
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MockeryComponent from '@/components/mockery/MockeryComponent';
import { useMockery } from '@/hooks/use-mockery';
import { MockeryAction } from '@/types/mockery-types';
import { toTeamColor } from '@/utils/typeConverter';

const MockeryPage = () => {
  const [activeTab, setActiveTab] = useState('mockery');
  const { mockUser, costForAction } = useMockery();

  const handleMockUser = async (actionType: string, targetUserId: string) => {
    // In a real implementation, this would fetch the target user data
    // and then call mockUser
    console.log(`Mocking user ${targetUserId} with action ${actionType}`);
    
    // Mock user data for demonstration
    const mockTargetUser = {
      id: targetUserId,
      username: `user_${targetUserId}`,
      displayName: `User ${targetUserId}`,
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      team: toTeamColor("gold"),
      tier: "royal",
      rank: 1,
      previousRank: 2,
      amountSpent: 500,
      joinedDate: new Date().toISOString()
    };
    
    return mockUser(actionType as MockeryAction, mockTargetUser);
  };

  return (
    <Shell>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Royal Mockery</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="mockery">Mockery Actions</TabsTrigger>
            <TabsTrigger value="hall-of-shame">Hall of Shame</TabsTrigger>
            <TabsTrigger value="my-mockery">My Mockery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mockery">
            <MockeryComponent 
              onMockUser={handleMockUser} 
              costForAction={costForAction} 
            />
          </TabsContent>
          
          <TabsContent value="hall-of-shame">
            <div className="text-center p-8">
              <p className="text-white/60">
                The Hall of Shame will display users who have been mocked the most.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="my-mockery">
            <div className="text-center p-8">
              <p className="text-white/60">
                Your mockery history and status will appear here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default MockeryPage;
