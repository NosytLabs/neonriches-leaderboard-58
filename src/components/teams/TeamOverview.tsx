
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, ArrowRight, Scroll, CreditCard, Flame, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import TeamSwitchModal, { TeamColor } from '@/components/profile/TeamSwitchModal';
import { useAuth } from '@/contexts/auth';

interface TeamOverviewProps {
  user: UserProfile;
}

const TeamOverview: React.FC<TeamOverviewProps> = ({ user }) => {
  const { updateUserProfile } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userTeam = user?.team || 'none';
  
  // Define team colors
  const teamColors = {
    red: 'bg-red-500/20 text-red-400 border-red-500/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    none: 'bg-white/10 text-white/70 border-white/20'
  };
  
  // Define team names
  const teamNames = {
    red: 'Royal Order of Reckless Spending',
    green: 'Emerald Exchequer Cabaret',
    blue: 'Cobalt Credit Cartel',
    none: 'Unaffiliated Cheapskate'
  };

  // Define team short names
  const teamShortNames = {
    red: 'RORS',
    green: 'EEC',
    blue: 'CCC',
    none: 'Unaffiliated'
  };

  // Define team icons
  const getTeamIcon = (team: string) => {
    switch (team) {
      case 'red': return <Flame className="h-5 w-5 text-red-400" />;
      case 'green': return <Coins className="h-5 w-5 text-green-400" />;
      case 'blue': return <CreditCard className="h-5 w-5 text-blue-400" />;
      default: return <Users className="h-5 w-5 text-white/70" />;
    }
  };
  
  // Define team benefits
  const getTeamBenefits = (team: string): string[] => {
    switch (team) {
      case 'red':
        return [
          "Priority placement in the 'Most Impulsive Spenders' section",
          "Special 'Money to Burn' profile badge",
          "Access to exclusive higher-priced vanity items"
        ];
      case 'green':
        return [
          "'Fiscal Mastermind' title despite evidence to the contrary",
          "Detailed analytics on money wasted vs. rivals",
          "Access to the 'How to Justify Your Spending' guidebook"
        ];
      case 'blue':
        return [
          "Premium 'Calculated Spender' badge (extra fee applies)",
          "Timing algorithms to maximize spending visibility",
          "Exclusive 'I Spent More Than You' notification options"
        ];
      default:
        return [
          "Ability to silently judge the other houses",
          "Retention of actual money in your bank account",
          "Freedom from team-based spending pressure"
        ];
    }
  };

  const handleTeamChange = async (team: TeamColor): Promise<void> => {
    try {
      await updateUserProfile({ team });
    } catch (error) {
      console.error("Error updating team:", error);
    }
  };
  
  return (
    <Card className="glass-morphism border-purple-400/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal flex items-center">
          <Users className="mr-2 h-5 w-5 text-purple-400" />
          Financial Faction Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/70">Current Faction:</span>
            <Badge variant="outline" className={teamColors[userTeam as keyof typeof teamColors]}>
              {teamShortNames[userTeam as keyof typeof teamShortNames]}
            </Badge>
          </div>
          
          <div className="p-3 border border-royal-gold/20 bg-black/30 rounded-lg">
            <div className="flex items-start">
              <Scroll className="text-royal-gold h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white/80 italic">
                "The Scribes of the Scroll have recorded your allegiance to {teamNames[userTeam as keyof typeof teamNames]} in the Great Ledger of Vanity."
              </p>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-sm font-medium">Dubious Faction Perks</span>
            </div>
            <ul className="text-xs text-white/70 space-y-2">
              {getTeamBenefits(userTeam).map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1 text-purple-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full glass-morphism border-purple-400/20 hover:bg-purple-400/10"
            onClick={() => setIsModalOpen(true)}
          >
            Switch Financial Allegiance
          </Button>
          
          <TeamSwitchModal 
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
            user={user}
            onTeamChange={handleTeamChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamOverview;
