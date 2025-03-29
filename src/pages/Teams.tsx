
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';
import TeamOverview from '@/components/teams/TeamOverview';
import TeamSelection from '@/components/teams/TeamSelection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Loading from '@/components/Loading';
import { TeamColor } from '@/types/teams';
import { Scroll, Crown, Coins, CreditCard, Flame, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Teams = () => {
  const { user, isLoading, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(user?.team ? 'overview' : 'selection');
  
  useEffect(() => {
    if (user?.team) {
      setActiveTab('overview');
    } else {
      setActiveTab('selection');
    }
  }, [user?.team]);
  
  const handleTeamSelect = async (team: TeamColor): Promise<boolean> => {
    try {
      await updateUserProfile({ team });
      toast({
        title: "Faction Joined!",
        description: `Your financial allegiance to the ${getTeamFullName(team)} has been recorded in our glorious ledger of paying customers!`,
      });
      setActiveTab('overview');
      return true;
    } catch (error) {
      console.error("Error updating team:", error);
      toast({
        title: "Failed to join faction",
        description: "We couldn't process your allegiance. Our payment processor is probably down.",
        variant: "destructive"
      });
      return false;
    }
  };
  
  const getTeamFullName = (team: TeamColor): string => {
    switch(team) {
      case 'red': return 'Royal Order of Reckless Spending';
      case 'green': return 'Emerald Exchequer Cabaret';
      case 'blue': return 'Cobalt Credit Cartel';
      default: return 'Unknown Faction';
    }
  }
  
  const getTeamShortName = (team: TeamColor): string => {
    switch(team) {
      case 'red': return 'RORS';
      case 'green': return 'EEC';
      case 'blue': return 'CCC';
      default: return 'Unknown';
    }
  }

  // Generate absurd team statistics
  const getAbsurdTeamStat = (team: string): string => {
    switch(team) {
      case 'red': 
        return 'Members have collectively clicked "Purchase" 8,742 times before checking their bank balance';
      case 'green': 
        return 'Spend an average of 3.7 hours per week creating spreadsheets to justify their spending';
      case 'blue': 
        return '97% claim to have a "system" for optimal spending, yet none can explain what it is';
      default: 
        return '';
    }
  };
  
  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>Financial Factions | SpendThrone</title>
      
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-medieval mb-4">Financial Factions of the Realm</h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Scroll className="h-5 w-5 text-royal-gold" />
              <span className="text-lg font-medium text-royal-gold">The Completely Meaningless Leaderboard</span>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join a spending faction and compete in a kingdom-wide competition for wealth, mockery, and digital significance that means absolutely nothing in the real world.
            </p>
          </div>
        
          <div className="p-4 glass-morphism border-royal-gold/20 rounded-lg mb-8">
            <div className="flex items-start">
              <Scroll className="text-royal-gold h-6 w-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-royal-gold text-lg font-medium mb-2">A Message from the Treasury</h3>
                <p className="text-white/80 italic">
                  "Every coin spent in this realm is meticulously recorded by our financial department. Your spending habits will be scrutinized, analyzed, and occasionally mocked for all eternity. Or at least until our next database purge."
                </p>
                <p className="text-white/60 text-sm mt-2">
                  <span className="text-amber-400">*</span> No actual benefits are provided for joining any team. This is purely for amusement.
                </p>
              </div>
            </div>
          </div>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-medieval">Choose Your Financial Folly</CardTitle>
              <CardDescription>
                Align yourself with one of the three factions competing for monetary supremacy and digital bragging rights. None of this matters in the slightest.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="glass-morphism mb-6">
                  <TabsTrigger value="overview" disabled={!user?.team}>Faction Overview</TabsTrigger>
                  <TabsTrigger value="selection">Choose Your Faction</TabsTrigger>
                  <TabsTrigger value="leaderboard">Faction Rankings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  {user && <TeamOverview user={user} />}
                </TabsContent>
                
                <TabsContent value="selection">
                  {user && (
                    <TeamSelection 
                      user={user}
                      onTeamSelect={handleTeamSelect}
                    />
                  )}
                </TabsContent>
                
                <TabsContent value="leaderboard">
                  <div className="text-center py-6">
                    <h3 className="text-xl font-medieval mb-2">Faction Spending Rankings</h3>
                    <p className="text-white/70 mb-6">The current standings in the battle for who can waste the most money on digital prestige</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* RORS */}
                      <Card className="glass-morphism border-team-red/30 bg-team-red/5">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-team-red flex items-center gap-2">
                              <Flame className="h-5 w-5" />
                              RORS
                            </CardTitle>
                            <Badge variant="outline" className="bg-red-500/10 border-red-500/30 text-red-400">
                              #1
                            </Badge>
                          </div>
                          <CardDescription>
                            Total Squandered: $254,387
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-white/60 italic mb-3">"Buy First, Think Never"</p>
                          <div className="text-sm text-white/80 glass-morphism border-white/5 p-3 rounded-lg">
                            <p className="mb-2">Absurd Faction Statistic:</p>
                            <p className="text-xs text-white/60 italic">
                              {getAbsurdTeamStat('red')}
                            </p>
                          </div>
                          <div className="text-sm text-white/60 mt-3">362 members</div>
                        </CardContent>
                      </Card>
                      
                      {/* EEC */}
                      <Card className="glass-morphism border-team-green/30 bg-team-green/5">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-team-green flex items-center gap-2">
                              <Coins className="h-5 w-5" />
                              EEC
                            </CardTitle>
                            <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400">
                              #2
                            </Badge>
                          </div>
                          <CardDescription>
                            Total Squandered: $196,502
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-white/60 italic mb-3">"Wealth So Strategic, It's Almost Pathetic"</p>
                          <div className="text-sm text-white/80 glass-morphism border-white/5 p-3 rounded-lg">
                            <p className="mb-2">Absurd Faction Statistic:</p>
                            <p className="text-xs text-white/60 italic">
                              {getAbsurdTeamStat('green')}
                            </p>
                          </div>
                          <div className="text-sm text-white/60 mt-3">285 members</div>
                        </CardContent>
                      </Card>
                      
                      {/* CCC */}
                      <Card className="glass-morphism border-team-blue/30 bg-team-blue/5">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-team-blue flex items-center gap-2">
                              <CreditCard className="h-5 w-5" />
                              CCC
                            </CardTitle>
                            <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400">
                              #3
                            </Badge>
                          </div>
                          <CardDescription>
                            Total Squandered: $167,935
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-white/60 italic mb-3">"Patience in Spending, Unbridled in Pretending"</p>
                          <div className="text-sm text-white/80 glass-morphism border-white/5 p-3 rounded-lg">
                            <p className="mb-2">Absurd Faction Statistic:</p>
                            <p className="text-xs text-white/60 italic">
                              {getAbsurdTeamStat('blue')}
                            </p>
                          </div>
                          <div className="text-sm text-white/60 mt-3">241 members</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mt-8 glass-morphism border-white/10 p-4 rounded-lg max-w-2xl mx-auto">
                      <p className="text-sm text-white/70 italic">
                        "The competition between factions is as fierce as it is meaningless. Members of each team regularly accuse the others of 'cheating' by spending more money, which is literally the only rule of the game."
                      </p>
                      <p className="text-xs text-white/50 mt-2">
                        — Anonymous Financial Historian
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;
