
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flame, Coins, CreditCard, Scroll, Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useResponsive } from '@/hooks/use-responsive';
import { RandomAbsurdFact } from '@/components/ui/random-absurd-fact';
import { TeamColor } from '@/types/team';
import { UserProfile } from '@/types/user-consolidated';

const getTeamMotto = (team: string) => {
  switch (team) {
    case 'red':
      return "Glory through Spending!";
    case 'green':
      return "Wealth is Power!";
    case 'blue':
      return "Strategic Extravagance!";
    default:
      return "Choose your path to glory!";
  }
};

const getTeamBenefit = (team: string): string[] => {
  const benefits: Record<string, string[]> = {
    red: [
      "20% bonus on direct deposits",
      "Exclusive crimson profile frames",
      "Access to special fire-themed effects"
    ],
    green: [
      "15% discount on profile boosts",
      "Nature-themed custom emojis",
      "Emerald crown cosmetic item"
    ],
    blue: [
      "5% royalty on team member spending",
      "Sapphire profile decorations",
      "Water-themed animation effects"
    ]
  };
  
  return benefits[team] || ["Unknown benefit"];
};

const getTeamAbsurdStat = (team: string) => {
  switch (team) {
    case 'red':
      return "Has collectively spent enough to buy 14,287 royal crowns";
    case 'green':
      return "Members have sacrificed the equivalent of 8,942 luxury vacations";
    case 'blue':
      return "Could have purchased 3 small islands with their combined spending";
    default:
      return "Teams have wasted enough money to fund a small nation";
  }
};

export interface TeamSelectionProps {
  selectedTeam?: TeamColor;
  teams?: TeamColor[];
  onTeamSelect: (team: TeamColor) => Promise<boolean>;
  user?: UserProfile;
}

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
        description: `You've joined the ${getTeamName(selectedTeam)}! This changes nothing but your profile color.`,
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

  const getTeamIcon = (team: TeamColor) => {
    switch(team) {
      case 'red': return <Flame className="h-8 w-8 text-red-400" />;
      case 'green': return <Coins className="h-8 w-8 text-green-400" />;
      case 'blue': return <CreditCard className="h-8 w-8 text-blue-400" />;
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
            "Choose your faction wisely, for it will determine... absolutely nothing of consequence. Your team allegiance is purely cosmetic and exists mainly to fuel our satirical narrative."
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
            <h4 className="text-sm font-medium text-red-400 mb-2">Alleged "Benefits":</h4>
            <ul className="text-xs text-white/70 space-y-1">
              {getTeamBenefit('red').map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
            <p className="text-xs text-white/50 italic mt-3 border-t border-white/10 pt-2">
              <span className="text-amber-400">*</span> These benefits are entirely fictional and satirical. Joining this team grants you nothing but a red color scheme.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-black/20 border border-red-500/10">
            <h4 className="text-sm font-medium text-red-400 mb-2">Absurd Faction Fact:</h4>
            <p className="text-xs text-white/70 italic">{getTeamAbsurdStat('red')}</p>
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
            <h4 className="text-sm font-medium text-green-400 mb-2">Alleged "Benefits":</h4>
            <ul className="text-xs text-white/70 space-y-1">
              {getTeamBenefit('green').map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
            <p className="text-xs text-white/50 italic mt-3 border-t border-white/10 pt-2">
              <span className="text-amber-400">*</span> These benefits are entirely fictional and satirical. Joining this team grants you nothing but a green color scheme.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-black/20 border border-green-500/10">
            <h4 className="text-sm font-medium text-green-400 mb-2">Absurd Faction Fact:</h4>
            <p className="text-xs text-white/70 italic">{getTeamAbsurdStat('green')}</p>
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
            <h4 className="text-sm font-medium text-blue-400 mb-2">Alleged "Benefits":</h4>
            <ul className="text-xs text-white/70 space-y-1">
              {getTeamBenefit('blue').map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
            <p className="text-xs text-white/50 italic mt-3 border-t border-white/10 pt-2">
              <span className="text-amber-400">*</span> These benefits are entirely fictional and satirical. Joining this team grants you nothing but a blue color scheme.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-black/20 border border-blue-500/10">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Absurd Faction Fact:</h4>
            <p className="text-xs text-white/70 italic">{getTeamAbsurdStat('blue')}</p>
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
      
      <div className="mt-8 text-center">
        <p className="text-white/50 text-xs italic">
          Disclaimer: Joining a team is purely cosmetic and grants no actual benefits whatsoever.
        </p>
      </div>
      
      <RandomAbsurdFact 
        className="mt-8" 
        variant="tooltip" 
      />
    </div>
  );
};

export default TeamSelection;
