
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Shield, Flame, Zap, Droplets, CreditCard, Coins, Scroll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { useResponsive } from '@/hooks/use-responsive';
import { TeamColor, TeamSelectionProps } from '@/types/teams';
import RandomAbsurdFact from '@/components/ui/random-absurd-fact';

const TeamSelection: React.FC<TeamSelectionProps> = ({ user, onTeamSelect }) => {
  const { updateUserProfile } = useAuth();
  const { toast } = useToast();
  const { isMobile } = useResponsive();
  const [selectedTeam, setSelectedTeam] = useState<TeamColor>(
    (user?.team as TeamColor) || 'red'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTeamSelection = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to join a team",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      if (onTeamSelect) {
        const success = await onTeamSelect(selectedTeam);
        if (!success) {
          throw new Error("Failed to update team");
        }
      } else {
        await updateUserProfile({ ...user, team: selectedTeam });
      }
      
      toast({
        title: "Team Updated",
        description: `You've joined the ${getTeamName(selectedTeam)}!`,
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update team selection",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTeamName = (team: TeamColor): string => {
    switch(team) {
      case 'red': return 'Royal Order of Reckless Spending';
      case 'green': return 'Emerald Exchequer Cabaret';
      case 'blue': return 'Cobalt Credit Cartel';
      default: return '';
    }
  }

  const getTeamMotto = (team: TeamColor): string => {
    switch(team) {
      case 'red': return '"Buy First, Think Never"';
      case 'green': return '"Wealth So Strategic, It\'s Almost Pathetic"';
      case 'blue': return '"Patience in Spending, Unbridled in Pretending"';
      default: return '';
    }
  }

  const getTeamIcon = (team: TeamColor) => {
    switch(team) {
      case 'red': return <Flame className="h-8 w-8 text-red-400" />;
      case 'green': return <CreditCard className="h-8 w-8 text-green-400" />;
      case 'blue': return <Scroll className="h-8 w-8 text-blue-400" />;
      default: return null;
    }
  }

  const teamDescription = {
    red: "Masters of mindless monetary mayhem, the RORS believe that one must spend with reckless abandon to assert digital dominance. Their wallets empty faster than a jester's goblet at a royal feast.",
    green: "The calculating gold-hoarders of the EEC believe that strategic spending is the key to digital nobility. They meticulously plan every transaction as if the fate of kingdoms depended on their leaderboard position.",
    blue: "The intellectual elite of digital aristocracy, the CCC members pride themselves on timing their extravagant purchases for maximum social impact. Their wallets open with precision, their status bought with cold calculation."
  };

  return (
    <div className="glass-morphism border-white/10 p-4 md:p-6 rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Choose Your Royal House of Fiscal Folly</h2>
      <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base">
        Align yourself with one of the three guilds of conspicuous consumption to compete for mockery and fleeting digital prestige.
      </p>

      <div className="mb-4 p-3 border border-royal-gold/20 bg-black/30 rounded-lg">
        <div className="flex items-start">
          <Scroll className="text-royal-gold h-5 w-5 mr-2 mt-1 flex-shrink-0" />
          <p className="text-sm text-white/80 italic">
            "Every coin spent in this realm is meticulously recorded by the esteemed Scribes of the Scroll at Nosyt Labs, keepers of the Great Ledger of Vanity. Their quills never rest, documenting each feeble attempt to purchase status and significance."
          </p>
        </div>
      </div>

      <Tabs defaultValue={selectedTeam || 'red'} onValueChange={(value) => setSelectedTeam(value as TeamColor)} className="w-full">
        <TabsList className={`grid w-full grid-cols-3 ${isMobile ? 'h-14' : 'h-12'}`}>
          <TabsTrigger value="red" className="flex items-center justify-center gap-2 data-[state=active]:bg-red-500/20">
            <Flame className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-red-400`} />
            <span className={isMobile ? "hidden sm:inline" : ""}>RORS</span>
          </TabsTrigger>
          <TabsTrigger value="green" className="flex items-center justify-center gap-2 data-[state=active]:bg-green-500/20">
            <Coins className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-green-400`} />
            <span className={isMobile ? "hidden sm:inline" : ""}>EEC</span>
          </TabsTrigger>
          <TabsTrigger value="blue" className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-500/20">
            <CreditCard className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-blue-400`} />
            <span className={isMobile ? "hidden sm:inline" : ""}>CCC</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="red" className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              {getTeamIcon('red')}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">Royal Order of Reckless Spending</h3>
              <p className="text-xs text-red-400/80 font-italic mb-2">{getTeamMotto('red')}</p>
              <p className="text-white/70 text-sm">{teamDescription.red}</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-black/20 border border-red-500/10">
            <h4 className="text-sm font-medium text-red-400 mb-2">Recorded in the Great Ledger of Vanity:</h4>
            <ul className="text-xs text-white/70 space-y-1">
              <li>• Most impulsive spending patterns in the realm</li>
              <li>• Highest rate of post-purchase regret (87%)</li>
              <li>• Record for most money spent in a single minute: $4,293</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="green" className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              {getTeamIcon('green')}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">Emerald Exchequer Cabaret</h3>
              <p className="text-xs text-green-400/80 font-italic mb-2">{getTeamMotto('green')}</p>
              <p className="text-white/70 text-sm">{teamDescription.green}</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-black/20 border border-green-500/10">
            <h4 className="text-sm font-medium text-green-400 mb-2">Recorded in the Great Ledger of Vanity:</h4>
            <ul className="text-xs text-white/70 space-y-1">
              <li>• Most spreadsheets created to justify spending</li>
              <li>• Average of 42 minutes spent deciding on a $5 purchase</li>
              <li>• Collectively hoarded 28,541 unused digital credits "just in case"</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="blue" className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              {getTeamIcon('blue')}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">Cobalt Credit Cartel</h3>
              <p className="text-xs text-blue-400/80 font-italic mb-2">{getTeamMotto('blue')}</p>
              <p className="text-white/70 text-sm">{teamDescription.blue}</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-black/20 border border-blue-500/10">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Recorded in the Great Ledger of Vanity:</h4>
            <ul className="text-xs text-white/70 space-y-1">
              <li>• Most purchases timed precisely to leapfrog rivals on the leaderboard</li>
              <li>• Longest average time spent staring at confirmation buttons (3.2 minutes)</li>
              <li>• 74% of members admit to purchasing status while pretending not to care</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-center">
        <Button
          onClick={handleTeamSelection}
          disabled={isSubmitting || !user}
          className={`w-full sm:w-auto ${
            selectedTeam === 'red' ? 'bg-red-600 hover:bg-red-700' :
            selectedTeam === 'green' ? 'bg-green-600 hover:bg-green-700' :
            'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          <Shield className="w-4 h-4 mr-2" />
          {user?.team === selectedTeam ? 'Confirm Financial Allegiance' : 'Pledge Your Credit Card'}
        </Button>
      </div>
      
      <RandomAbsurdFact 
        className="mt-8" 
        variant="tooltip" 
      />
    </div>
  );
};

export default TeamSelection;
