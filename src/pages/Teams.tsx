import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/Shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamOverview from '@/components/teams/TeamOverview';
import TeamSelection from '@/components/teams/TeamSelection';
import TeamLeaderboard from '@/components/teams/TeamLeaderboard';
import { TeamData } from '@/types/team-data';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from '@/utils/typeConverters';

const teamsData: TeamData[] = [
  {
    id: "red-team",
    name: "Red Royals",
    color: "red",
    description: "The Red Royals are known for their fiery passion and competitive spirit.",
    logoUrl: "/assets/teams/red-logo.png",
    benefits: [
      "Exclusive red name color in leaderboards",
      "10% bonus on all mockery actions",
      "Weekly team challenges with bonus rewards",
      "Special access to 'Royal Red' chat channel"
    ],
    members: 450,
    totalContribution: 25000,
    rank: 2,
    previousRank: 1,
    totalSpent: 25000
  },
  {
    id: "blue-team",
    name: "Blue Brigade",
    color: "blue",
    description: "The Blue Brigade represents calm strategy and loyal cooperation.",
    logoUrl: "/assets/teams/blue-logo.png",
    benefits: [
      "Exclusive blue name color in leaderboards",
      "15% discount on protection actions",
      "Team defense bonuses",
      "Special access to 'Blue Room' strategy forums"
    ],
    members: 380,
    totalContribution: 22000,
    rank: 3,
    previousRank: 3,
    totalSpent: 22000
  },
  {
    id: "green-team",
    name: "Green Giants",
    color: "green",
    description: "The Green Giants focus on growth, prosperity, and economic dominance.",
    logoUrl: "/assets/teams/green-logo.png",
    benefits: [
      "Exclusive green name color in leaderboards",
      "5% bonus on all spending activity",
      "Economic boosts for team members",
      "Special access to 'Green Growth' investment challenges"
    ],
    members: 320,
    totalContribution: 18500,
    rank: 4,
    previousRank: 5,
    totalSpent: 18500
  },
  {
    id: "gold-team",
    name: "Golden Throne",
    color: "gold",
    description: "The Golden Throne represents luxury, prestige, and royal excellence.",
    logoUrl: "/assets/teams/gold-logo.png",
    benefits: [
      "Exclusive gold name color in leaderboards",
      "Priority placement in royal events",
      "10% bonus on all royal challenges",
      "Special access to 'Golden Court' exclusive chat"
    ],
    members: 200,
    totalContribution: 30000,
    rank: 1,
    previousRank: 2,
    totalSpent: 30000
  },
  {
    id: "purple-team",
    name: "Purple Prestige",
    color: "purple",
    description: "The Purple Prestige team values creativity, mystery, and magical influence.",
    logoUrl: "/assets/teams/purple-logo.png",
    benefits: [
      "Exclusive purple name color in leaderboards",
      "20% discount on mockery cooldowns",
      "Special mystery boxes for active members",
      "Access to 'Purple Palace' exclusive events"
    ],
    members: 280,
    totalContribution: 15000,
    rank: 5,
    previousRank: 4,
    totalSpent: 15000
  }
];

const TeamsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTeam, setSelectedTeam] = useState<TeamData>(teamsData[0]);
  const [userTeam, setUserTeam] = useState<TeamColor>(toTeamColor('gold'));
  
  const handleSelectTeam = (teamId: string) => {
    const team = teamsData.find(t => t.id === teamId);
    if (team) {
      setSelectedTeam(team);
      setUserTeam(team.color as TeamColor);
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
              teams={teamsData} 
              selectedTeam={selectedTeam} 
              onSelectTeam={handleSelectTeam} 
            />
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <TeamLeaderboard teams={teamsData} userTeam={userTeam} />
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default TeamsPage;
