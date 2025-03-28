
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

const Teams = () => {
  const { user, isLoading } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(user?.team ? 'overview' : 'selection');
  
  // Update active tab when user team changes
  useEffect(() => {
    if (user?.team) {
      setActiveTab('overview');
    } else {
      setActiveTab('selection');
    }
  }, [user?.team]);
  
  // Handle team selection success
  const handleTeamSelection = (team: 'red' | 'green' | 'blue') => {
    toast({
      title: "Team Joined!",
      description: `You've successfully joined Team ${team.charAt(0).toUpperCase() + team.slice(1)}!`,
    });
    setActiveTab('overview');
  };
  
  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>Royal Houses | SpendThrone</title>
      
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        <div className="max-w-6xl mx-auto">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-medieval">Royal Houses</CardTitle>
              <CardDescription>
                Join a royal house and compete in the kingdom-wide competition for wealth and glory
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="glass-morphism mb-6">
                  <TabsTrigger value="overview" disabled={!user?.team}>House Overview</TabsTrigger>
                  <TabsTrigger value="selection">Choose Your House</TabsTrigger>
                  <TabsTrigger value="leaderboard">House Rankings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  {user && <TeamOverview user={user} />}
                </TabsContent>
                
                <TabsContent value="selection">
                  <TeamSelection onTeamSelected={handleTeamSelection} />
                </TabsContent>
                
                <TabsContent value="leaderboard">
                  <div className="text-center py-10">
                    <h3 className="text-xl font-medieval mb-2">Royal House Rankings</h3>
                    <p className="text-white/70 mb-6">The current standings in the battle for wealth and power</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* House Red */}
                      <Card className="glass-morphism border-team-red/30 bg-team-red/5">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-team-red">House Red</CardTitle>
                          <CardDescription>
                            Total: $254,387
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-medieval text-team-red mb-2">#1</div>
                          <div className="text-sm text-white/60">362 members</div>
                        </CardContent>
                      </Card>
                      
                      {/* House Blue */}
                      <Card className="glass-morphism border-team-blue/30 bg-team-blue/5">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-team-blue">House Blue</CardTitle>
                          <CardDescription>
                            Total: $196,502
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-medieval text-team-blue mb-2">#2</div>
                          <div className="text-sm text-white/60">285 members</div>
                        </CardContent>
                      </Card>
                      
                      {/* House Green */}
                      <Card className="glass-morphism border-team-green/30 bg-team-green/5">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-team-green">House Green</CardTitle>
                          <CardDescription>
                            Total: $167,935
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-4xl font-medieval text-team-green mb-2">#3</div>
                          <div className="text-sm text-white/60">241 members</div>
                        </CardContent>
                      </Card>
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
