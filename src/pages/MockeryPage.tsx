import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Fixed casing
import { useMockery } from '@/hooks/use-mockery';
import MockeryComponent from '@/components/mockery/MockeryComponent';
import HallOfShame from '@/components/mockery/components/HallOfShame';

const MockeryPage = () => {
  const navigate = useNavigate();
  const { targetUser, mockUser, isMocking, mockeryResult, costForAction, resetMockery } = useMockery();

  const handleMockUser = async (actionType: string, targetUserId: string) => {
    // Mock implementation: Replace with actual user retrieval logic
    const targetUser = {
      id: targetUserId,
      username: `user_${targetUserId}`,
      displayName: `User ${targetUserId}`,
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      team: "gold",
      tier: "royal",
      rank: 1
    };

    await mockUser(actionType, targetUser);
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
            <HallOfShame />
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default MockeryPage;
