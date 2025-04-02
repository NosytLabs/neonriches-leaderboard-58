
import React, { useState } from 'react';
import { Shell } from '@/components/ui/Shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import TeamBadge from '@/components/ui/team/TeamBadge';
import { TeamData, TeamColor } from '@/types/team';
import { createTeamData } from '@/utils/teamUtils';
import { UserProfile, UserCosmetics } from '@/types/user-consolidated';
import TeamSelector from '@/components/teams/TeamSelector';

const Teams = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  
  // Create team data
  const redTeam = createTeamData('red', 'The Red Order', 'Warriors of flame and passion, standing strong against the rising tide of mediocrity. Join us to rise to glory!', 1250, 245000, 1);
  
  // Create other teams
  const blueTeam = createTeamData('blue', 'The Blue Guardians', 'Defenders of the realm, masters of strategy and loyalty. We stand together as one unbreakable shield.', 980, 198000, 2);
  const greenTeam = createTeamData('green', 'The Green Sentinels', 'Guardians of growth and prosperity. Our wealth grows like the mighty forest, and so does our influence.', 765, 156000, 3);
  const goldTeam = createTeamData('gold', 'The Gold Dynasty', 'The royal bloodline, destined to rule with generosity and wisdom. Our legacy will shine for generations.', 540, 129000, 4);
  const purpleTeam = createTeamData('purple', 'The Purple Reign', 'Masters of the arcane, wielding the power of mystery and secrets. Join us to unlock your hidden potential.', 320, 87000, 5);

  const teams = [redTeam, blueTeam, greenTeam, goldTeam, purpleTeam];
  
  // Mock user
  const currentUser: UserProfile = {
    id: "user123",
    username: "royalspender",
    displayName: "Royal Spender",
    profileImage: "/images/avatars/crowned-user.jpg",
    joinedDate: "2023-01-15T10:30:00Z",
    team: 'blue' as TeamColor,
    tier: "premium",
    rank: 42,
    previousRank: 45,
    totalSpent: 12500,
    amountSpent: 12500,
    walletBalance: 2800,
    spendStreak: 7,
    profileBoosts: [],
    cosmetics: {} as UserCosmetics,
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'royal',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true,
    }
  };

  return (
    <Shell>
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-2">Royal Teams</h1>
        <p className="text-muted-foreground mb-8">
          Join forces with like-minded spenders and rise through the ranks together
        </p>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Teams</TabsTrigger>
            <TabsTrigger value="my-team">My Team</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teams.map((team) => (
                <Card key={team.id} className={
                  `overflow-hidden transition-all hover:shadow-md ${team.color === currentUser.team ? 'ring-2 ring-primary' : ''}`
                }>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8 rounded">
                          <AvatarImage src={team.logo} alt={team.name} />
                          <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg">{team.name}</CardTitle>
                      </div>
                      <TeamBadge team={team.color} size="sm" />
                    </div>
                    <CardDescription>Rank #{team.rank} • {team.memberCount.toLocaleString()} members</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-2">
                    <p className="text-sm">{team.description}</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Spent:</span>
                        <span className="font-medium">{team.totalSpent.toLocaleString()} coins</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Leader:</span>
                        <span className="font-medium">{team.leaderUsername}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant={team.color === currentUser.team ? "outline" : "default"}
                      className="w-full"
                      onClick={() => setSelectedTeam(team.id)}
                      disabled={team.color === currentUser.team}
                    >
                      {team.color === currentUser.team ? "Current Team" : "Join Team"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="my-team">
            {/* Current team view would go here */}
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <h3 className="text-xl font-semibold mb-2">You are part of {teams.find(t => t.color === currentUser.team)?.name}</h3>
              <p className="text-muted-foreground mb-4">
                Work with your team to rise through the ranks and earn exclusive rewards!
              </p>
              <TeamSelector currentTeam={currentUser.team} onTeamSelect={(team) => console.log("Selected team", team)} />
            </div>
          </TabsContent>
          
          <TabsContent value="leaderboard">
            {/* Team leaderboard would go here */}
            <div className="space-y-4">
              {teams.sort((a, b) => a.rank - b.rank).map((team, idx) => (
                <Card key={team.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="font-bold text-xl w-8 text-center">{idx + 1}</div>
                      <Avatar className="h-12 w-12 rounded-md">
                        <AvatarImage src={team.logo} alt={team.name} />
                        <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">{team.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>{team.memberCount.toLocaleString()} members</span>
                          <span className="mx-1">•</span>
                          <TeamBadge team={team.color} size="sm" />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{team.totalSpent.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Total coins</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default Teams;
