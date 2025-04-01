
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTeam } from '@/hooks/useTeam';
import { TeamColor } from '@/types/team';
import { Shield, Users, Crown, Sparkles, Scroll, Trophy, AlertTriangle } from 'lucide-react';
import TeamBadge from './TeamBadge';
import { getTeamNFTJoke, getTeamCryptoRoast } from '@/utils/team/teamJokes';

interface TeamDetailsProps {
  team: TeamColor;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ team }) => {
  const { getTeam, getTeamTheme } = useTeam();
  
  const teamData = getTeam(team);
  const teamTheme = getTeamTheme(team);
  
  if (!teamData) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-6 text-center">
          <AlertTriangle className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">No Team Selected</h3>
          <p className="text-white/70">
            You have not joined a team yet. Please select a team from the Join Team tab.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      <Card 
        className="glass-morphism overflow-hidden"
        style={{ 
          borderColor: `${teamTheme.primaryColor}40`, 
          borderWidth: '1px' 
        }}
      >
        <div 
          className="h-40 w-full relative" 
          style={{ 
            background: `linear-gradient(135deg, ${teamTheme.primaryColor}20, ${teamTheme.accentColor}40)` 
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Crown className="h-20 w-20" style={{ color: teamTheme.primaryColor }} />
          </div>
        </div>
        
        <CardContent className="p-6 -mt-10">
          <div className="flex flex-col items-center">
            <TeamBadge team={team} size="lg" showName={true} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2" style={{ color: teamTheme.primaryColor }}>
              {teamData.name}
            </h2>
            <p className="text-white/70 mb-4 text-center italic">"{teamData.motto}"</p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/60 mb-6">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{teamData.members} members</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-4 w-4 mr-1" />
                <span>Rank #{teamData.rank}</span>
              </div>
            </div>
            
            <p className="text-white/80 text-center mb-6">
              {teamData.description}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-royal-gold" />
              Team Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teamData.benefits?.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Sparkles className="h-4 w-4 text-royal-gold mr-2 mt-1" />
                <p className="text-sm text-white/80">{benefit}</p>
              </div>
            ))}
            
            <div className="p-3 bg-white/5 rounded-lg mt-4">
              <p className="text-sm text-white/70 flex items-center">
                <Shield className="h-4 w-4 mr-2 text-royal-gold" />
                {teamData.securityGuarantee}
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scroll className="h-5 w-5 mr-2 text-royal-gold" />
              Team Lore
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-sm text-white/80">
                <span className="font-bold">Historical Note:</span> {teamData.historicalNote}
              </p>
            </div>
            
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-sm text-white/80">
                <span className="font-bold">Absurd Stat:</span> {teamData.absurdStat}
              </p>
            </div>
            
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-sm italic text-white/80">
                {getTeamNFTJoke(team)}
              </p>
            </div>
            
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-sm italic text-white/80">
                {getTeamCryptoRoast(team)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamDetails;
