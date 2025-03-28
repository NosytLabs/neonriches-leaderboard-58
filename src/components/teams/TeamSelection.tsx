import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { useToast } from '@/hooks/use-toast';
import { Shield, Flame, Zap, Waves } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { motion } from 'framer-motion';

interface TeamSelectionProps {
  user: UserProfile;
  onTeamSelect: (team: 'red' | 'green' | 'blue') => Promise<boolean>;
}

const TeamSelection: React.FC<TeamSelectionProps> = ({ user, onTeamSelect }) => {
  const [selectedTeam, setSelectedTeam] = useState<'red' | 'green' | 'blue' | null>(user.team);
  const [isChanging, setIsChanging] = useState(false);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  const handleTeamSelect = async (team: 'red' | 'green' | 'blue') => {
    // If user already selected this team, deselect it
    if (selectedTeam === team) {
      setSelectedTeam(null);
      return;
    }
    
    // Otherwise, select the new team
    setSelectedTeam(team);
  };
  
  const handleConfirm = async () => {
    if (!selectedTeam) {
      toast({
        title: "No Team Selected",
        description: "Please select a team to join.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedTeam === user.team) {
      toast({
        title: "Already in Team",
        description: `You are already a member of the ${getTeamName(selectedTeam)}.`,
      });
      return;
    }
    
    setIsChanging(true);
    try {
      const success = await onTeamSelect(selectedTeam);
      
      if (success) {
        playSound('success');
        toast({
          title: "Team Changed",
          description: `You are now a member of the ${getTeamName(selectedTeam)}.`,
        });
      } else {
        throw new Error("Failed to change team");
      }
    } catch (error) {
      playSound('error');
      toast({
        title: "Team Change Failed",
        description: "There was an error changing your team. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsChanging(false);
    }
  };
  
  const getTeamName = (team: 'red' | 'green' | 'blue'): string => {
    switch (team) {
      case 'red': return "Red Flames";
      case 'green': return "Green Lightning";
      case 'blue': return "Blue Waves";
      default: return "";
    }
  };
  
  const getTeamDescription = (team: 'red' | 'green' | 'blue'): string => {
    switch (team) {
      case 'red':
        return "The fierce Red Flames, known for their aggressive spending and competitive nature.";
      case 'green':
        return "The tactical Green Lightning, masters of strategic spending and calculated investments.";
      case 'blue':
        return "The composed Blue Waves, specialists in steady growth and consistent contributions.";
      default:
        return "";
    }
  };
  
  const getTeamIcon = (team: 'red' | 'green' | 'blue') => {
    switch (team) {
      case 'red': return <Flame className="h-6 w-6 text-red-500" />;
      case 'green': return <Zap className="h-6 w-6 text-green-500" />;
      case 'blue': return <Waves className="h-6 w-6 text-blue-500" />;
      default: return null;
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <div className="flex items-center">
          <Shield className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Choose Your Team</CardTitle>
        </div>
        <CardDescription>
          Select a faction to join in the battle for the throne
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['red', 'green', 'blue'] as const).map(team => (
            <motion.div
              key={team}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer relative rounded-lg p-4 border-2 ${
                selectedTeam === team 
                  ? `border-${team}-500 bg-${team}-500/20` 
                  : 'border-white/10 glass-morphism hover:border-white/30'
              }`}
              onClick={() => handleTeamSelect(team)}
            >
              <div className="flex items-center mb-3">
                {getTeamIcon(team)}
                <span className={`ml-2 font-bold text-${team}-500`}>
                  {getTeamName(team)}
                </span>
              </div>
              <p className="text-sm text-white/70">
                {getTeamDescription(team)}
              </p>
              {user.team === team && (
                <div className="absolute top-2 right-2 bg-white/10 rounded-full px-2 py-0.5 text-xs">
                  Current
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-end">
          <Button
            onClick={handleConfirm}
            disabled={!selectedTeam || isChanging || selectedTeam === user.team}
          >
            {isChanging ? "Changing..." : "Confirm Team"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamSelection;
