
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Vote, ThumbsUp, ThumbsDown, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';

const CommunityVoting: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleVote = (proposalId: string, vote: 'up' | 'down') => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to vote on proposals.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Vote Recorded",
      description: `Your ${vote === 'up' ? 'support' : 'opposition'} for this proposal has been recorded.`,
    });
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Vote className="mr-2 h-5 w-5 text-royal-gold" />
          Active Royal Proposals
        </CardTitle>
        <CardDescription>
          Vote on proposals that will shape the future of our kingdom
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Proposal 1 */}
        <div className="glass-morphism border-white/10 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-medieval mb-1">Weekly Team Competitions</h3>
              <p className="text-sm text-white/70 mb-2">
                Implement weekly team-based challenges with special rewards for the winning house.
              </p>
              <div className="flex items-center text-sm text-white/50">
                <Users className="h-3 w-3 mr-1" />
                <span>Proposed by: RoyalAdvisor</span>
                <span className="mx-2">•</span>
                <span>3 days left</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 rounded-full h-8 w-8 p-0" 
                onClick={() => handleVote('prop1', 'up')}
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 rounded-full h-8 w-8 p-0" 
                onClick={() => handleVote('prop1', 'down')}
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current votes: 73% in favor</span>
              <span>146 votes</span>
            </div>
            <Progress value={73} className="h-2 bg-white/10" />
          </div>
        </div>

        {/* Proposal 2 */}
        <div className="glass-morphism border-white/10 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-medieval mb-1">Royal Court Rankings</h3>
              <p className="text-sm text-white/70 mb-2">
                Create a separate leaderboard for users who contribute to community discussions.
              </p>
              <div className="flex items-center text-sm text-white/50">
                <Users className="h-3 w-3 mr-1" />
                <span>Proposed by: NobleWhale</span>
                <span className="mx-2">•</span>
                <span>5 days left</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 rounded-full h-8 w-8 p-0" 
                onClick={() => handleVote('prop2', 'up')}
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 rounded-full h-8 w-8 p-0" 
                onClick={() => handleVote('prop2', 'down')}
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current votes: 62% in favor</span>
              <span>108 votes</span>
            </div>
            <Progress value={62} className="h-2 bg-white/10" />
          </div>
        </div>

        {/* Proposal 3 */}
        <div className="glass-morphism border-white/10 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-medieval mb-1">Royal Token System</h3>
              <p className="text-sm text-white/70 mb-2">
                Implement a token-based reward system for active community members.
              </p>
              <div className="flex items-center text-sm text-white/50">
                <Crown className="h-3 w-3 mr-1 text-royal-gold" />
                <span className="text-royal-gold">Official Proposal</span>
                <span className="mx-2">•</span>
                <span>7 days left</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 rounded-full h-8 w-8 p-0" 
                onClick={() => handleVote('prop3', 'up')}
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 rounded-full h-8 w-8 p-0" 
                onClick={() => handleVote('prop3', 'down')}
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current votes: 89% in favor</span>
              <span>217 votes</span>
            </div>
            <Progress value={89} className="h-2 bg-white/10" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityVoting;
