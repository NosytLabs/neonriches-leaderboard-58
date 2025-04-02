
import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/Shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamOverview from '@/components/teams/TeamOverview';
import TeamSelection from '@/components/teams/TeamSelection';
import TeamLeaderboard from '@/components/teams/TeamLeaderboard';
import { TeamData } from '@/types/team-data';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from '@/utils/typeConverters';

// Sample team data
const mockTeams: TeamData[] = [
  {
    id: '1',
    name: 'Gold Monarchs',
    color: toTeamColor('gold'),
    description: 'The elite team of royal spenders',
    logoUrl: '/teams/gold-logo.png',
    members: 156,
    totalContribution: 250000,
    rank: 1,
    previousRank: 2,
    benefits: [
      'Royal protection',
      'Crown badge',
      'Extended mockery options',
      'VIP events access',
      'Golden cosmetics'
    ]
  },
  {
    id: '2',
    name: 'Crimson Cavaliers',
    color: toTeamColor('red'),
    description: 'Bold and aggressive spenders who stop at nothing',
    logoUrl: '/teams/red-logo.png',
    members: 230,
    totalContribution: 180000,
    rank: 2,
    previousRank: 1,
    benefits: [
      'Attack bonuses',
      'Mockery discounts',
      'Offensive boosts',
      'Comeback mechanics',
      'Aggressive cosmetics'
    ]
  },
  {
    id: '3',
    name: 'Azure Alliance',
    color: toTeamColor('blue'),
    description: 'Strategic and calculated contributors',
    logoUrl: '/teams/blue-logo.png',
    members: 185,
    totalContribution: 150000,
    rank: 3,
    previousRank: 4,
    benefits: [
      'Defense bonuses',
      'Protection discounts',
      'Strategic boosts',
      'Team shields',
      'Tactical cosmetics'
    ]
  },
  {
    id: '4',
    name: 'Emerald Empire',
    color: toTeamColor('green'),
    description: 'Growth-focused team with long-term vision',
    logoUrl: '/teams/green-logo.png',
    members: 320,
    totalContribution: 120000,
    rank: 4,
    previousRank: 3,
    benefits: [
      'Growth bonuses',
      'New member rewards',
      'Sustainability boosts',
      'Recruitment bonuses',
      'Nature-themed cosmetics'
    ]
  },
  {
    id: '5',
    name: 'Royal Majesty',
    color: toTeamColor('purple'),
    description: 'Elegant and prestigious spenders with refined taste',
    logoUrl: '/teams/purple-logo.png',
    members: 98,
    totalContribution: 110000,
    rank: 5,
    previousRank: 5,
    benefits: [
      'Prestige bonuses',
      'Exclusive cosmetics',
      'VIP access',
      'Special events',
      'Royal-adjacent privileges'
    ]
  }
];

const TeamsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTeam, setSelectedTeam] = useState<TeamData>(mockTeams[0]);
  const [userTeam, setUserTeam] = useState<TeamColor>(toTeamColor('gold'));
  
  const handleSelectTeam = (teamId: string) => {
    const team = mockTeams.find(t => t.id === teamId);
    if (team) {
      setSelectedTeam(team);
      setUserTeam(team.color as TeamColor); // Cast to TeamColor
    }
  };
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Teams</h1>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="selection">Selection</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <TeamOverview team={selectedTeam} />
          </TabsContent>
          
          <TabsContent value="selection">
            <TeamSelection 
              teams={mockTeams} 
              selectedTeam={selectedTeam} 
              onSelectTeam={handleSelectTeam} 
            />
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <TeamLeaderboard teams={mockTeams} userTeam={userTeam} />
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default TeamsPage;
