
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { TeamColor } from '@/types/team';
import { useToast } from '@/hooks/use-toast';

interface TeamJoinButtonProps {
  team: TeamColor;
}

const TeamJoinButton: React.FC<TeamJoinButtonProps> = ({ team }) => {
  const [isJoining, setIsJoining] = useState(false);
  const { toast } = useToast();

  const handleJoin = async () => {
    setIsJoining(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Team Joined",
      description: `You have successfully joined the ${team.charAt(0).toUpperCase() + team.slice(1)} Team!`,
      variant: "default",
    });
    
    setIsJoining(false);
  };

  const getBgColor = (teamColor: TeamColor): string => {
    switch (teamColor) {
      case 'red': return 'bg-red-600 hover:bg-red-700';
      case 'blue': return 'bg-blue-600 hover:bg-blue-700';
      case 'green': return 'bg-green-600 hover:bg-green-700';
      case 'gold': return 'bg-amber-600 hover:bg-amber-700';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700';
      case 'silver': return 'bg-gray-400 hover:bg-gray-500';
      case 'bronze': return 'bg-amber-800 hover:bg-amber-900';
      case 'crimson': return 'bg-rose-700 hover:bg-rose-800';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div className="mt-6 flex justify-center">
      <Button 
        className={`${getBgColor(team)} px-6 py-2 flex items-center gap-2`}
        size="lg"
        disabled={isJoining}
        onClick={handleJoin}
      >
        <Shield className="h-5 w-5" />
        {isJoining ? 'Joining...' : `Join the ${team.charAt(0).toUpperCase() + team.slice(1)} Team`}
      </Button>
    </div>
  );
};

export default TeamJoinButton;
