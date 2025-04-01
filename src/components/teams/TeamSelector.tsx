
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Crown } from 'lucide-react';
import { TeamType } from '@/types/user-types';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';

export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  mottoShort?: string;
  benefits?: string[];
}

// Added type definition for props
interface TeamSelectorProps {
  onTeamSelect: (team: TeamType) => void;
  currentTeam?: TeamType | null;
}

const teamData: TeamData[] = [
  {
    id: 'red',
    name: 'Crimson Court',
    description: 'A fierce band of nobles known for their passion and competitive spirit.',
    color: 'text-red-500',
    icon: <Shield className="h-6 w-6 text-red-500" />,
    mottoShort: 'Fiercer than fire',
    benefits: [
      'Exclusive red-themed cosmetics',
      'Access to Crimson Court events',
      'Special red team profile badge'
    ]
  },
  {
    id: 'blue',
    name: 'Azure Alliance',
    description: 'Strategic thinkers and loyal subjects dedicated to the royal cause.',
    color: 'text-blue-500',
    icon: <Crown className="h-6 w-6 text-blue-500" />,
    mottoShort: 'Loyal as the ocean is deep',
    benefits: [
      'Exclusive blue-themed cosmetics',
      'Access to Azure Alliance events',
      'Special blue team profile badge'
    ]
  },
  {
    id: 'green',
    name: 'Emerald Order',
    description: 'Wealth-focused nobles who believe in growth and prosperity for all.',
    color: 'text-green-500',
    icon: <Users className="h-6 w-6 text-green-500" />,
    mottoShort: 'Growing like the forest',
    benefits: [
      'Exclusive green-themed cosmetics',
      'Access to Emerald Order events',
      'Special green team profile badge'
    ]
  }
];

const TeamSelector: React.FC<TeamSelectorProps> = ({ onTeamSelect, currentTeam = null }) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamType | null>(currentTeam);
  const { toast } = useToast();
  const { playSound } = useSound();
  
  const handleTeamSelect = (team: TeamType) => {
    setSelectedTeam(team);
    playSound('click');
  };
  
  const handleConfirm = () => {
    if (!selectedTeam) {
      toast({
        title: 'Team Required',
        description: 'Please select a royal house to join.',
        variant: 'destructive'
      });
      return;
    }
    
    if (selectedTeam === currentTeam) {
      toast({
        description: `You are already a member of ${getTeamName(selectedTeam)}.`,
      });
      return;
    }
    
    playSound('success');
    toast({
      title: 'Team Joined',
      description: `Welcome to the ${getTeamName(selectedTeam)}!`,
      variant: 'success'
    });
    
    onTeamSelect(selectedTeam);
  };
  
  const getTeamName = (teamId: TeamType): string => {
    const team = teamData.find(t => t.id === teamId);
    return team ? team.name : 'Unknown Team';
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Choose Your Royal House</h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto">
          Align yourself with one of the royal houses. Each offers unique benefits and a chance to climb the ranks among like-minded nobles.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamData.map((team) => (
          <Card 
            key={team.id}
            className={`cursor-pointer transition-all ${
              selectedTeam === team.id ? 'border-2 border-' + team.id + '-500/70' : 'border border-white/10 hover:border-white/30'
            }`}
            onClick={() => handleTeamSelect(team.id as TeamType)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                {team.icon}
                <CardTitle className={team.color}>{team.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{team.description}</p>
              <div className="text-sm font-medium mb-2">{team.mottoShort}</div>
              
              <ul className="text-xs space-y-1 text-white/70">
                {team.benefits?.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant={selectedTeam === team.id ? "default" : "outline"} 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTeamSelect(team.id as TeamType);
                }}
              >
                {selectedTeam === team.id ? 'Selected' : 'Select'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button 
          size="lg" 
          className="px-8"
          disabled={!selectedTeam || selectedTeam === currentTeam}
          onClick={handleConfirm}
        >
          Confirm Selection
        </Button>
      </div>
    </div>
  );
};

export default TeamSelector;
