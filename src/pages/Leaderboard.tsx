
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PersistentLeaderboard from '@/components/leaderboard/PersistentLeaderboard';
import { getTeamTotals, getTotalPool } from '@/services/spendingService';
import { Button } from '@/components/ui/button';
import { Crown, DollarSign, Trophy, Users, PieChart, LineChart, Filter, Clock } from 'lucide-react';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamSection from '@/components/TeamSection';
import { Separator } from '@/components/ui/separator';
import RoyalDivider from '@/components/ui/royal-divider';
import PaymentModal from '@/components/PaymentModal';
import { applyUserSpending } from '@/services/spendingService';

const LeaderboardPage: React.FC = () => {
  const { user } = useAuth();
  const [view, setView] = useState<'personal' | 'team'>('personal');
  const [timeframe, setTimeframe] = useState<'all-time' | 'weekly' | 'monthly'>('all-time');
  
  // This would be calculated from real data in a production app
  const teamTotals = getTeamTotals();
  const winningTeam = Object.entries(teamTotals).reduce((a, b) => 
    b[1] > a[1] ? b : a
  , ['red', 0])[0] as 'red' | 'green' | 'blue';
  
  const teamColors = {
    red: 'text-team-red',
    green: 'text-team-green',
    blue: 'text-team-blue'
  };
  
  const teamNames = {
    red: 'Red Neon Fire',
    green: 'Green Lime Zap',
    blue: 'Blue Cool Pulse'
  };
  
  const prizePool = getTotalPool();
  
  const handleContributionSuccess = async (amount: number) => {
    if (user) {
      await applyUserSpending(user, amount, "Leaderboard contribution");
      // The leaderboard component will automatically refresh
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.8)_0%,transparent_65%)]"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto p-4">
        <header className="py-10 text-center">
          <h1 className="text-5xl font-bold font-royal royal-gradient mb-3">Global Rankings</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The P2W.FUN leaderboard never resets. Your status is eternal. $1 = 1 unit of rank.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Prize Pool Card */}
          <Card className="glass-morphism border-white/10 overflow-hidden lg:col-span-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal-purple/20 to-royal-gold/10 rounded-bl-full blur-xl"></div>
            
            <CardHeader>
              <div className="flex items-center">
                <Trophy className="mr-2 h-6 w-6 text-royal-gold" />
                <CardTitle>Current Prize Pool</CardTitle>
              </div>
              <CardDescription>
                15% of all spending goes to the prize pool
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold royal-gradient">${prizePool.toLocaleString()}</div>
                <p className="text-white/70 text-sm mt-1">Total accumulated</p>
              </div>
              
              <div className="glass-morphism border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">Sustenance Fund</span>
                  <span className="text-sm font-medium">${(prizePool * 0.5).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Whale Endowment</span>
                  <span className="text-sm font-medium">${(prizePool * 0.5).toLocaleString()}</span>
                </div>
              </div>
              
              <div className="text-center">
                <PaymentModal 
                  amount={25} 
                  onSuccess={handleContributionSuccess}
                  title="Contribute to Leaderboard"
                  description="Every dollar spent pushes you up the rankings. 15% goes to prize pool."
                  trigger={
                    <Button className="bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white">
                      <DollarSign size={16} className="mr-2" />
                      Contribute $25
                    </Button>
                  }
                />
                <p className="text-white/50 text-xs mt-2">See your rank rise in real-time</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Leaderboard Card */}
          <div className="lg:col-span-2">
            <PersistentLeaderboard limit={10} />
          </div>
        </div>
        
        <RoyalDivider variant="line" label="TEAM RANKINGS" color="royal" className="my-8" />
        
        <div className="mb-10">
          <Tabs defaultValue="rankings" className="w-full">
            <TabsList className="glass-morphism border-white/10 mb-4 w-full grid grid-cols-3">
              <TabsTrigger value="rankings">Rankings</TabsTrigger>
              <TabsTrigger value="distribution">Team Distribution</TabsTrigger>
              <TabsTrigger value="join">Join a Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rankings">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-morphism border-white/10 overflow-hidden">
                  <CardHeader className="bg-team-red/30">
                    <CardTitle className="text-team-red flex items-center">
                      <div className="w-3 h-3 rounded-full bg-team-red mr-2"></div>
                      Red Team
                    </CardTitle>
                    <CardDescription>Neon Fire</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold mb-2">${teamTotals.red.toLocaleString()}</div>
                    <div className="text-sm text-white/70 mb-4">Total Spent</div>
                    
                    <div className="glass-morphism border-white/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-white/70">Rank</span>
                        <span className="text-sm font-medium">
                          {teamTotals.red >= teamTotals.green && teamTotals.red >= teamTotals.blue ? '1st' : 
                           teamTotals.red >= teamTotals.green || teamTotals.red >= teamTotals.blue ? '2nd' : '3rd'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/70">Members</span>
                        <span className="text-sm font-medium">
                          {/* This would come from real data */}
                          {Math.floor(Math.random() * 20) + 10}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10 overflow-hidden">
                  <CardHeader className="bg-team-green/30">
                    <CardTitle className="text-team-green flex items-center">
                      <div className="w-3 h-3 rounded-full bg-team-green mr-2"></div>
                      Green Team
                    </CardTitle>
                    <CardDescription>Lime Zap</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold mb-2">${teamTotals.green.toLocaleString()}</div>
                    <div className="text-sm text-white/70 mb-4">Total Spent</div>
                    
                    <div className="glass-morphism border-white/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-white/70">Rank</span>
                        <span className="text-sm font-medium">
                          {teamTotals.green >= teamTotals.red && teamTotals.green >= teamTotals.blue ? '1st' : 
                           teamTotals.green >= teamTotals.red || teamTotals.green >= teamTotals.blue ? '2nd' : '3rd'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/70">Members</span>
                        <span className="text-sm font-medium">
                          {/* This would come from real data */}
                          {Math.floor(Math.random() * 20) + 10}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10 overflow-hidden">
                  <CardHeader className="bg-team-blue/30">
                    <CardTitle className="text-team-blue flex items-center">
                      <div className="w-3 h-3 rounded-full bg-team-blue mr-2"></div>
                      Blue Team
                    </CardTitle>
                    <CardDescription>Cool Pulse</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold mb-2">${teamTotals.blue.toLocaleString()}</div>
                    <div className="text-sm text-white/70 mb-4">Total Spent</div>
                    
                    <div className="glass-morphism border-white/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-white/70">Rank</span>
                        <span className="text-sm font-medium">
                          {teamTotals.blue >= teamTotals.red && teamTotals.blue >= teamTotals.green ? '1st' : 
                           teamTotals.blue >= teamTotals.red || teamTotals.blue >= teamTotals.green ? '2nd' : '3rd'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/70">Members</span>
                        <span className="text-sm font-medium">
                          {/* This would come from real data */}
                          {Math.floor(Math.random() * 20) + 10}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="distribution">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle>Team Distribution</CardTitle>
                      <CardDescription>
                        Contribution breakdown between teams
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 flex items-center justify-center">
                        {/* In a real app, this would be a chart component */}
                        <div className="relative w-40 h-40">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-medium">Team Split</span>
                          </div>
                          <svg viewBox="0 0 36 36" className="block">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="rgba(255, 80, 80, 0.7)"
                              strokeWidth="6"
                              strokeDasharray={`${(teamTotals.red / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100}, 100`}
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="rgba(80, 255, 80, 0.7)"
                              strokeWidth="6"
                              strokeDasharray={`${(teamTotals.green / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100}, 100`}
                              strokeDashoffset={`${-(teamTotals.red / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100}`}
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="rgba(80, 80, 255, 0.7)"
                              strokeWidth="6"
                              strokeDasharray={`${(teamTotals.blue / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100}, 100`}
                              strokeDashoffset={`${-((teamTotals.red + teamTotals.green) / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100}`}
                            />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-team-red mr-2"></div>
                            <span className="text-sm">Red Team</span>
                          </div>
                          <span className="text-sm font-medium">
                            {((teamTotals.red / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-team-green mr-2"></div>
                            <span className="text-sm">Green Team</span>
                          </div>
                          <span className="text-sm font-medium">
                            {((teamTotals.green / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-team-blue mr-2"></div>
                            <span className="text-sm">Blue Team</span>
                          </div>
                          <span className="text-sm font-medium">
                            {((teamTotals.blue / (teamTotals.red + teamTotals.green + teamTotals.blue)) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="glass-morphism border-white/10">
                    <CardHeader>
                      <CardTitle>Weekly Team Challenge</CardTitle>
                      <CardDescription>
                        The winning team gets bonus rank points
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="glass-morphism border-white/10 rounded-lg p-4 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-white/70 mr-2" />
                          <div className="text-sm">
                            Challenge ends in <span className="font-bold">2 days, 14 hours</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-4">
                        <div className="text-sm text-white/70 mb-1">Current Leader</div>
                        <div className={`text-xl font-bold ${teamColors[winningTeam]}`}>
                          {teamNames[winningTeam]}
                        </div>
                        <div className="text-sm text-white/70 mt-1">
                          With ${teamTotals[winningTeam].toLocaleString()} spent
                        </div>
                      </div>
                      
                      <div className="glass-morphism border-white/10 rounded-lg p-4">
                        <div className="text-sm font-medium mb-2">Prize Distribution</div>
                        <div className="text-sm text-white/70 space-y-1">
                          <div className="flex items-center justify-between">
                            <span>Winning Team Members</span>
                            <span>+10% Rank Boost</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Top Contributor</span>
                            <span>+5% Prize Pool Share</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="join">
              <TeamSection />
            </TabsContent>
          </Tabs>
        </div>
        
        <RoyalDivider variant="line" label="HOW IT WORKS" color="royal" className="my-8" />
        
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <DollarSign className="h-10 w-10 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Spend to Ascend</h3>
              <p className="text-white/70">
                Your rank is directly proportional to your spending. $1 = 1 unit of rank.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Trophy className="h-10 w-10 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prize Pool</h3>
              <p className="text-white/70">
                15% of all spending goes to the prize pool, distributed to top spenders.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Users className="h-10 w-10 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Team Competition</h3>
              <p className="text-white/70">
                Join a team and compete for weekly rewards and team glory.
              </p>
            </div>
          </div>
        </div>
        
        <RankingDisclaimer />
      </div>
    </div>
  );
};

export default LeaderboardPage;
