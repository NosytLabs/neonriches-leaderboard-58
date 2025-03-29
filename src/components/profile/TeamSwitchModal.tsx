
import React, { useState } from 'react';
import { Shield, Info, Check, CreditCard, Scroll, Flame, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuth } from '@/contexts/auth';
import { UserProfile } from '@/contexts/AuthContext';
import { Separator } from '@/components/ui/separator';
import { getTeamMotto, getTeamBenefit } from '@/utils/teamUtils';

// Define team color type
export type TeamColor = 'red' | 'green' | 'blue';

// Define team data
const teamData = [
  {
    id: 'red',
    name: 'Royal Order of Reckless Spending',
    shortName: 'RORS',
    motto: 'Buy First, Think Never',
    color: 'text-team-red',
    bgColor: 'bg-team-red/10',
    icon: <Flame className="h-5 w-5 text-team-red" />,
    description: 'Masters of mindless monetary mayhem, the RORS believe that one must spend with reckless abandon to assert digital dominance.',
    members: 423,
    rank: 1
  },
  {
    id: 'green',
    name: 'Emerald Exchequer Cabaret',
    shortName: 'EEC',
    motto: 'Wealth So Strategic, It\'s Almost Pathetic',
    color: 'text-team-green',
    bgColor: 'bg-team-green/10',
    icon: <Coins className="h-5 w-5 text-team-green" />,
    description: 'The calculating gold-hoarders of the EEC believe that strategic spending is the key to digital nobility.',
    members: 387,
    rank: 2
  },
  {
    id: 'blue',
    name: 'Cobalt Credit Cartel',
    shortName: 'CCC',
    motto: 'Patience in Spending, Unbridled in Pretending',
    color: 'text-team-blue',
    bgColor: 'bg-team-blue/10',
    icon: <CreditCard className="h-5 w-5 text-team-blue" />,
    description: 'The intellectual elite of digital aristocracy, the CCC members pride themselves on timing their purchases for maximum social impact.',
    members: 341,
    rank: 3
  }
];

export interface TeamSwitchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: UserProfile;
  onTeamChange: (team: TeamColor) => Promise<void>;
  trigger?: React.ReactNode;
}

const TeamSwitchModal: React.FC<TeamSwitchModalProps> = ({ 
  open, 
  onOpenChange,
  user,
  onTeamChange,
  trigger
}) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamColor | null>(user?.team as TeamColor || null);
  const [isChanging, setIsChanging] = useState(false);
  
  const handleTeamSelect = (teamId: TeamColor) => {
    setSelectedTeam(teamId);
  };
  
  const handleTeamChange = async () => {
    if (!selectedTeam || selectedTeam === user?.team) return;
    
    setIsChanging(true);
    try {
      await onTeamChange(selectedTeam);
      onOpenChange(false);
    } catch (error) {
      console.error('Error changing team:', error);
    } finally {
      setIsChanging(false);
    }
  };

  // Get absurd benefits for each team
  const getTeamBenefits = (teamId: TeamColor): string[] => {
    return getTeamBenefit(teamId);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <div onClick={() => onOpenChange(true)}>{trigger}</div>}
      <DialogContent className="sm:max-w-[500px] glass-morphism">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Choose Your Financial Allegiance</DialogTitle>
          <DialogDescription>
            Select the spending faction that best represents your fiscal philosophy. Or, more realistically, whichever one has the funniest name.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          {teamData.map((team) => (
            <div 
              key={team.id} 
              className={`rounded-lg p-4 border transition-all cursor-pointer ${
                selectedTeam === team.id 
                  ? `border-${team.id} ${team.bgColor}` 
                  : 'border-white/10 hover:border-white/20'
              }`}
              onClick={() => handleTeamSelect(team.id as TeamColor)}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  {team.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold ${team.color}`}>{team.name}</h3>
                  <p className="text-xs text-white/60 mt-0.5 italic">"{getTeamMotto(team.id as TeamColor)}"</p>
                  <p className="text-sm text-white/70 mt-1">{team.description}</p>
                </div>
                {selectedTeam === team.id && (
                  <div className="ml-2">
                    <Check className={`h-5 w-5 ${team.color}`} />
                  </div>
                )}
              </div>
              
              <div className="mt-3 space-y-1">
                <p className="text-xs font-medium text-white/80">Alleged "Benefits":</p>
                <ul className="text-xs text-white/60 space-y-1">
                  {getTeamBenefits(team.id as TeamColor).slice(0, 1).map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-xs mr-1 mt-1">•</span> {benefit}
                    </li>
                  ))}
                  <li className="flex items-start">
                    <span className="text-xs mr-1 mt-1">•</span> <span className="italic">...and other equally ludicrous "advantages"</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-between mt-3 text-xs text-white/50">
                <span>Members: {team.members}</span>
                <span>Rank: #{team.rank}</span>
              </div>
            </div>
          ))}
        </div>
        
        <Separator className="my-2" />
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-sm flex items-start">
          <Info className="h-4 w-4 text-blue-400 mr-2 mt-0.5" />
          <p className="text-white/80">
            All of these teams are equally meaningless. Your choice is purely aesthetic and will have no actual impact on your experience, apart from the color scheme.
          </p>
        </div>
        
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleTeamChange}
            disabled={!selectedTeam || selectedTeam === user?.team || isChanging}
            className={selectedTeam ? `bg-team-${selectedTeam} hover:bg-team-${selectedTeam}/80` : ''}
          >
            {isChanging ? 'Changing...' : 'Pledge Financial Allegiance'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSwitchModal;
