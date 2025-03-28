
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import RoyalDivider from '@/components/ui/royal-divider';
import { useAuth } from '@/contexts/auth';  // Updated import path
import { useToastContext } from '@/contexts/ToastContext';
import { Crown, Gem, Shield, ArrowRight, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LUXURY_TEAMS = [
  {
    id: 'red',
    name: 'House Crimson Dynasty',
    description: 'Masters of opulent displays and lavish investments',
    icon: <Crown className="h-5 w-5 text-red-500" />,
    color: 'text-red-500',
    bgColor: 'bg-red-900/30',
    borderColor: 'border-red-500/30',
    members: 187,
    totalSpent: 32450,
    benefits: [
      'Royal Crimson profile effects',
      'Dynasty badges and titles',
      'Opulence-themed cosmetics'
    ]
  },
  {
    id: 'green',
    name: 'Emerald Empire Collective',
    description: 'Architects of wealth and strategic spending',
    icon: <Gem className="h-5 w-5 text-emerald-500" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-900/30',
    borderColor: 'border-emerald-500/30',
    members: 142,
    totalSpent: 28970,
    benefits: [
      'Emerald Empire profile effects',
      'Wealth architect badges',
      'Prosperity-themed cosmetics'
    ]
  },
  {
    id: 'blue',
    name: 'Sapphire Sovereign Alliance',
    description: 'Nobility through calculated financial dominance',
    icon: <Shield className="h-5 w-5 text-blue-500" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-900/30',
    borderColor: 'border-blue-500/30',
    members: 164,
    totalSpent: 30125,
    benefits: [
      'Sapphire Sovereign profile effects',
      'Alliance nobility badges',
      'Dominance-themed cosmetics'
    ]
  }
];

const TeamSection = () => {
  const { user } = useAuth();
  const { addToast } = useToastContext();
  
  const handleJoinTeam = (teamId: string) => {
    if (!user) {
      addToast({
        title: "Authentication Required",
        description: "You must be logged in to join a team.",
        variant: "destructive"
      });
      return;
    }
    
    addToast({
      title: `Team Joined!`,
      description: `You have joined the ${LUXURY_TEAMS.find(t => t.id === teamId)?.name}. Your spending will now contribute to their standings.`,
    });
  };
  
  // Calculate total spending across all teams
  const totalSpending = LUXURY_TEAMS.reduce((sum, team) => sum + team.totalSpent, 0);
  
  return (
    <div className="mb-16">
      <RoyalDivider variant="crown" label="LUXURY SPENDING FACTIONS" color="gold" className="mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {LUXURY_TEAMS.map((team) => {
          const spendingPercentage = (team.totalSpent / totalSpending) * 100;
          
          return (
            <Card 
              key={team.id} 
              className={`backdrop-blur-md border ${team.borderColor} overflow-hidden relative`}
            >
              <div className={`absolute inset-0 ${team.bgColor} opacity-20`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${team.bgColor} border ${team.borderColor}`}>
                    {team.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${team.color}`}>{team.name}</h3>
                    <p className="text-white/70 text-sm">{team.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 flex items-center">
                      <Trophy className="h-4 w-4 mr-1.5" />
                      Wealth Pool
                    </span>
                    <span className={`font-mono font-bold ${team.color}`}>${team.totalSpent.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 flex items-center">
                      <Users className="h-4 w-4 mr-1.5" />
                      Members
                    </span>
                    <span className={`font-mono font-bold ${team.color}`}>{team.members}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/70">Faction Standing</span>
                      <span className={team.color}>{Math.round(spendingPercentage)}%</span>
                    </div>
                    <Progress 
                      value={spendingPercentage} 
                      className="h-2 bg-white/10" 
                      indicatorClassName={team.bgColor.replace('bg-', 'bg-')}
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className={`text-sm font-medium ${team.color} flex items-center`}>
                    <Gem className="h-4 w-4 mr-1.5" />
                    Exclusive Benefits
                  </h4>
                  <ul className="space-y-1">
                    {team.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-white/70 flex items-start">
                        <span className="text-xs mr-1.5 mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className={`w-full border ${team.borderColor} ${team.color} bg-black/30 hover:bg-black/50`}
                  onClick={() => handleJoinTeam(team.id)}
                >
                  <Shield className="h-4 w-4 mr-1.5" />
                  Pledge Allegiance
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center text-white/60 text-sm italic">
        "Join a luxury spending faction to demonstrate your allegiance to a specific aesthetic of meaningless digital wealth."
      </div>
    </div>
  );
};

export default TeamSection;
