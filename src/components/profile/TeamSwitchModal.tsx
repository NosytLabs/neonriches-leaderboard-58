
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { TeamColor } from '@/types/teams';
import { Users, Clock, DollarSign, AlertCircle } from 'lucide-react';
import { switchUserTeam } from '@/services/teamService';
import { teamData } from '@/utils/teamUtils';
import PaymentModal from '@/components/PaymentModal';
import { useToastContext } from '@/contexts/ToastContext';

interface TeamSwitchModalProps {
  trigger?: React.ReactNode;
  onSuccess?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  user?: any;
  onTeamChange?: (team: TeamColor) => Promise<void>;
}

const TeamSwitchModal: React.FC<TeamSwitchModalProps> = ({
  trigger,
  onSuccess,
  open: controlledOpen,
  onOpenChange,
  user: providedUser,
  onTeamChange
}) => {
  const { user: authUser, updateUserProfile } = useAuth();
  const { addToast } = useToastContext();
  const [selectedTeam, setSelectedTeam] = useState<TeamColor | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [internalOpen, setInternalOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  
  const user = providedUser || authUser;
  
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  
  const handleTeamSelect = (team: TeamColor) => {
    setSelectedTeam(team);
    setError(null);
  };
  
  const isFirstTeamSelection = !user.team;

  const handleJoinTeam = async () => {
    if (!selectedTeam) {
      setError('Please select a team to join');
      return;
    }

    // Check if this is the first team selection (free) or switching teams ($1 fee)
    if (!isFirstTeamSelection) {
      setShowPayment(true);
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      if (onTeamChange) {
        await onTeamChange(selectedTeam);
        if (onSuccess) {
          onSuccess();
        }
        setOpen(false);
      } else {
        const result = await switchUserTeam(user, selectedTeam, updateUserProfile);
        
        if (result.success) {
          addToast({
            title: "Team Joined",
            description: `You've successfully joined ${teamData[selectedTeam].name}!`,
            variant: "royal"
          });

          if (onSuccess) {
            onSuccess();
          }
          setOpen(false);
        } else {
          setError(result.message);
        }
      }
    } catch (err) {
      setError('Failed to join team. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handlePaidTeamSwitch = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      if (selectedTeam) {
        const result = await switchUserTeam(user, selectedTeam, updateUserProfile);
        
        if (result.success) {
          addToast({
            title: "Team Switched",
            description: `You've successfully switched to ${teamData[selectedTeam].name}!`,
            variant: "royal"
          });

          if (onSuccess) {
            onSuccess();
          }
          setOpen(false);
        } else {
          setError(result.message);
        }
      }
    } catch (err) {
      setError('Failed to switch teams. Please try again.');
    } finally {
      setIsProcessing(false);
      setShowPayment(false);
    }
  };
  
  const getLastSwitchTime = () => {
    const lastTeamSwitchTime = localStorage.getItem('lastTeamSwitch');
    if (lastTeamSwitchTime) {
      const lastSwitch = parseInt(lastTeamSwitchTime, 10);
      const now = Date.now();
      const daysSinceLastSwitch = Math.floor((now - lastSwitch) / (24 * 60 * 60 * 1000));
      
      if (daysSinceLastSwitch < 1) {
        const hoursSinceLastSwitch = Math.floor((now - lastSwitch) / (60 * 60 * 1000));
        return `Last switched ${hoursSinceLastSwitch} hours ago`;
      } else if (daysSinceLastSwitch === 1) {
        return 'Last switched yesterday';
      } else {
        return `Last switched ${daysSinceLastSwitch} days ago`;
      }
    }
    
    return null;
  };
  
  const lastSwitchTime = getLastSwitchTime();
  
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || (
            <Button variant="outline" className="w-full glass-morphism border-white/10 hover:bg-white/10">
              <Users className="mr-2 h-4 w-4" />
              Switch Team
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join a Team</DialogTitle>
            <DialogDescription>
              {isFirstTeamSelection 
                ? "Select a team to join and compete for team prizes." 
                : "Select a new team to join. Switching teams requires a $1.00 fee."}
              {lastSwitchTime && (
                <div className="flex items-center mt-2 text-xs text-white/60">
                  <Clock className="h-3 w-3 mr-1" />
                  {lastSwitchTime}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 gap-4 py-4">
            {!isFirstTeamSelection && (
              <div className="glass-morphism border-royal-gold/20 p-3 rounded-lg bg-royal-gold/5 flex items-center">
                <DollarSign className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0" />
                <p className="text-sm text-white/80">
                  Your first team selection is free. Subsequent team changes require a $1.00 fee.
                </p>
              </div>
            )}

            {Object.values(teamData).map((team) => (
              <div 
                key={team.id}
                className={`glass-morphism rounded-lg p-4 cursor-pointer transition-all hover:border-${team.id} ${
                  selectedTeam === team.id 
                    ? `border-2 border-team-${team.id} bg-white/5` 
                    : 'border border-white/10'
                }`}
                style={{ borderColor: selectedTeam === team.id ? team.color : undefined }}
                onClick={() => handleTeamSelect(team.id)}
              >
                <div className="flex items-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl"
                    style={{ backgroundColor: team.bgColor }}
                  >
                    {team.icon}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: team.color }}>{team.name}</div>
                    <div className="text-sm text-white/70">{team.description}</div>
                  </div>
                </div>
                
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-white/60">
                  <div>Members: {team.members}</div>
                  <div>Rank: #{team.rank}</div>
                </div>
              </div>
            ))}
          </div>
          
          {error && (
            <div className="text-destructive text-sm mb-2 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1.5" />
              {error}
            </div>
          )}
          
          <div className="flex justify-end">
            <Button variant="outline" className="mr-2 glass-morphism border-white/10" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleJoinTeam}
              disabled={!selectedTeam || isProcessing}
              className={selectedTeam ? `bg-team-${selectedTeam} hover:bg-team-${selectedTeam}/90 text-white` : ''}
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin mr-2">⚙️</span> Processing...
                </>
              ) : (
                isFirstTeamSelection ? 'Join Team (Free)' : 'Continue ($1.00)'
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Payment modal for team switching */}
      {showPayment && selectedTeam && (
        <PaymentModal
          title="Team Switch Fee"
          description={`Switch to ${teamData[selectedTeam].name} for $1.00`}
          amount={1.00}
          onSuccess={handlePaidTeamSwitch}
          onCancel={() => setShowPayment(false)}
          open={showPayment}
          onOpenChange={setShowPayment}
        />
      )}
    </>
  );
};

export default TeamSwitchModal;
