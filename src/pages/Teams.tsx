
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamSelector from '@/components/teams/TeamSelector';
import TeamOverview from '@/components/teams/TeamOverview';
import { useAuth } from '@/contexts/auth';
import { Shield, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Teams: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Royal Houses | SpendThrone</title>
        <meta name="description" content="Join a royal house and compete for glory in the SpendThrone kingdom." />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        <div className="flex items-center mb-8">
          <Shield className="mr-3 h-8 w-8 text-royal-gold" />
          <h1 className="text-3xl font-bold font-medieval">Royal Houses</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-royal-gold" />
                  House Selection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">
                  Choose your allegiance wisely. Your royal house defines your place in the kingdom's power struggle.
                </p>
                <TeamSelector 
                  team={user?.team || null} 
                  onTeamChange={() => {}}
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
                  House Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList className="glass-morphism border-white/10 bg-transparent w-full">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-white/10">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="members" className="data-[state=active]:bg-white/10">
                      Members
                    </TabsTrigger>
                    <TabsTrigger value="challenges" className="data-[state=active]:bg-white/10">
                      Challenges
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-4">
                    <TeamOverview />
                  </TabsContent>
                  
                  <TabsContent value="members" className="mt-4">
                    <div className="text-center p-8">
                      <p className="text-white/70">Team members listing coming soon...</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="challenges" className="mt-4">
                    <div className="text-center p-8">
                      <p className="text-white/70">Royal house challenges coming soon...</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;
