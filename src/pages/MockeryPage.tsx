
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; 
import { useMockery } from '@/hooks/use-mockery';
import MockeryComponent from '@/components/mockery/MockeryComponent';
import HallOfShame from '@/components/mockery/components/HallOfShame';
import { ensureMockeryAction } from '@/utils/mockeryNormalizer';
import { UserProfile } from '@/types/user';
import { MockeryResult } from '@/types/mockery-types';

// Mock data for the Hall of Shame
const mockShameUsers = [
  {
    username: "richSpender123",
    displayName: "Rich Spender",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    mockedReason: "Flaunting wealth in the town square",
    mockedTimestamp: new Date(Date.now() - 3600000).toISOString(),
    mockedBy: "kingmaker",
    mockedTier: "rare",
    mockeryCount: 3
  },
  {
    username: "royalWannabe",
    displayName: "Royal Wannabe",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    mockedReason: "Pretended to be of royal blood",
    mockedTimestamp: new Date(Date.now() - 86400000).toISOString(),
    mockedBy: "truthSeeker",
    mockedTier: "common",
    mockeryCount: 1
  }
];

const MockeryPage = () => {
  const navigate = useNavigate();
  const { targetUser, mockUser, isMocking, mockeryResult, costForAction, resetMockery } = useMockery();

  const handleMockUser = async (actionType: string, targetUserId: string): Promise<void> => {
    // Mock implementation: Replace with actual user retrieval logic
    const mockTargetUser: UserProfile = {
      id: targetUserId,
      username: `user_${targetUserId}`,
      displayName: `User ${targetUserId}`,
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      team: "gold",
      tier: "royal",
      rank: 1,
      previousRank: 2,
      amountSpent: 1000,
      joinedDate: new Date().toISOString(),
      totalSpent: 1000,
      walletBalance: 500
    };

    // Call mockUser but ignore the result to match the expected Promise<void> return type
    await mockUser(actionType, mockTargetUser);
  };

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  return (
    <Shell>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Royal Mockery Festival</h1>
        <p className="text-white/70 mb-4">
          Welcome to the Royal Mockery Festival, where nobles can playfully tease each other.
        </p>

        <div className="mb-4">
          <Button onClick={handleGoBack} variant="ghost">
            Back to Dashboard
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <MockeryComponent onMockUser={handleMockUser} costForAction={costForAction} />
          </div>
          <div>
            <HallOfShame mockedUsers={mockShameUsers} />
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default MockeryPage;
