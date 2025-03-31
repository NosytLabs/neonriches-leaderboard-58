
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Trophy, Shield, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import usePageTracking from '@/hooks/usePageTracking';

const Teams = () => {
  // Track page view
  usePageTracking();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Royal Alliances" 
          description="Form powerful alliances with other nobles to increase your collective influence"
          icon={<Users className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs defaultValue="leaderboard" className="w-full mt-6">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Team Rankings
            </TabsTrigger>
            <TabsTrigger value="myteam" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              My Alliance
            </TabsTrigger>
            <TabsTrigger value="create" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Form Alliance
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaderboard">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Top Royal Alliances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center p-3 rounded-md bg-background/50 border border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal-gold to-royal-crimson mr-3 flex items-center justify-center text-black font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">The {['Golden', 'Ruby', 'Diamond', 'Emerald', 'Sapphire'][i]} Order</h3>
                        <p className="text-xs text-white/60">
                          {10 - i} members • ${(1000 * (5 - i)).toLocaleString()} collective spending
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">${(200 * (5 - i)).toLocaleString()}</p>
                        <p className="text-xs text-white/60">per member avg</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="myteam">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card className="glass-morphism border-white/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Your Alliance: The Royal Court</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-royal-gold/20 to-royal-crimson/20 border border-white/10">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-royal-gold to-royal-crimson mr-4 flex items-center justify-center">
                            <Shield className="h-8 w-8 text-black" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">The Royal Court</h2>
                            <p className="text-sm text-white/70">Founded 3 months ago • Rank #3</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-black/30">
                            <p className="text-sm text-white/70">Total Spending</p>
                            <p className="text-2xl font-bold">$8,450</p>
                          </div>
                          <div className="p-3 rounded-lg bg-black/30">
                            <p className="text-sm text-white/70">Members</p>
                            <p className="text-2xl font-bold">7</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-white/70 mb-4">
                          "United in our pursuit of status and recognition, we pool our resources to ascend the leaderboard together."
                        </p>
                      </div>
                      
                      <h3 className="font-bold mt-6 mb-3">Members</h3>
                      <div className="space-y-2">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <div key={i} className="flex items-center p-3 rounded-md bg-background/50 border border-white/10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal-gold/70 to-royal-crimson/70 mr-3 flex items-center justify-center">
                              {String.fromCharCode(65 + i)}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Noble {String.fromCharCode(65 + i)}</h4>
                              <p className="text-xs text-white/60">
                                ${(200 + i * 100).toLocaleString()} contributed
                              </p>
                            </div>
                            <div className="text-xs text-white/60">
                              {i === 0 ? 'Leader' : 'Member'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="glass-morphism border-white/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Alliance Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-royal-gold/20 flex items-center justify-center mr-2 mt-0.5">
                          <Trophy className="h-3 w-3 text-royal-gold" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Collective Power</p>
                          <p className="text-white/60">Combined spending power for higher team ranking</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-royal-gold/20 flex items-center justify-center mr-2 mt-0.5">
                          <Users className="h-3 w-3 text-royal-gold" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Visibility Boost</p>
                          <p className="text-white/60">Increased profile visibility for all members</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-royal-gold/20 flex items-center justify-center mr-2 mt-0.5">
                          <Shield className="h-3 w-3 text-royal-gold" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Alliance Protection</p>
                          <p className="text-white/60">Reduced mockery impact from non-allied users</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">Alliance Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                        <p className="font-medium">Weekend War</p>
                        <p className="text-xs text-white/60 mb-2">Starts in 2 days</p>
                        <Button size="sm" className="w-full">Prepare</Button>
                      </div>
                      <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                        <p className="font-medium">Royal Tournament</p>
                        <p className="text-xs text-white/60 mb-2">Next month</p>
                        <Button size="sm" variant="outline" className="w-full">Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="create">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Form a New Royal Alliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-6">
                  Create a new alliance and invite other nobles to join forces. Combined spending power will help you rise through the ranks faster.
                </p>
                
                <div className="glass-morphism border-white/10 p-6 rounded-lg mb-6">
                  <h3 className="font-bold mb-4">Alliance Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Minimum Rank</p>
                        <p className="text-sm text-white/70">Must be within top 1000 to form an alliance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Alliance Fee</p>
                        <p className="text-sm text-white/70">$50 to establish an alliance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Member Commitment</p>
                        <p className="text-sm text-white/70">All members must contribute minimum $10/month</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-royal-gold to-royal-crimson text-black">
                  Form New Alliance
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Teams;
