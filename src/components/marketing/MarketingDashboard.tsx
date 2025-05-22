
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Users, Link as LinkIcon, Eye, TrendingUp, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface MarketingDashboardProps {
  user?: any;
  className?: string;
}

const MarketingDashboard: React.FC<MarketingDashboardProps> = ({ user, className }) => {
  const { toast } = useToast();
  
  // Marketing metrics - would come from API in a real implementation
  const metrics = {
    profileViews: 1245,
    clickThroughRate: '3.2%',
    conversionRate: '0.8%',
    averageEngagement: '1.5m',
    rankBoost: '+15%',
    visibilityScore: 82
  };
  
  const handleBoostProfile = () => {
    toast({
      title: "Profile Boost Activated",
      description: "Your profile visibility has been increased for the next 24 hours!",
      variant: "success",
    });
  };
  
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold">Marketing Dashboard</h2>
          <p className="text-muted-foreground">
            Boost your visibility and track your marketing performance
          </p>
        </div>
        <Button onClick={handleBoostProfile} className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
          <TrendingUp className="mr-2 h-4 w-4" />
          Boost Profile
        </Button>
      </div>
      
      {/* Key metrics cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="glass-morphism border-white/10">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-2 rounded-full mb-2">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">{metrics.profileViews}</div>
              <p className="text-xs text-muted-foreground">Profile Views</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-500/10 p-2 rounded-full mb-2">
                <TrendingUp className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="text-2xl font-bold">{metrics.visibilityScore}</div>
              <p className="text-xs text-muted-foreground">Visibility Score</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="bg-amber-500/10 p-2 rounded-full mb-2">
                <Target className="h-6 w-6 text-amber-500" />
              </div>
              <div className="text-2xl font-bold">{metrics.clickThroughRate}</div>
              <p className="text-xs text-muted-foreground">Click-Through Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">
            <BarChart className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="promotion">
            <TrendingUp className="h-4 w-4 mr-2" />
            Promotion
          </TabsTrigger>
          <TabsTrigger value="links">
            <LinkIcon className="h-4 w-4 mr-2" />
            Links
          </TabsTrigger>
          <TabsTrigger value="audience">
            <Users className="h-4 w-4 mr-2" />
            Audience
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Marketing Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-6 rounded-lg border border-pink-500/20">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">PRO TIP</Badge>
                    Maximize Your Visibility
                  </h3>
                  <p className="text-white/70 mb-4">
                    Higher ranks get exponentially more visibility. Users ranked in the top 10 receive 
                    20x more profile views than average users. Focus your spending strategy during peak hours.
                  </p>
                  <Button variant="outline" className="border-pink-500/50 hover:bg-pink-950/30">
                    Learn More
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Current Rank Benefits</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Featured in "Rising Stars" section
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Profile shown to 2x more visitors
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                        Priority in search results
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Available Upgrades</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        Premium placement (+$50)
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        Weekend spotlight boost (+$25)
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        Analytics dashboard upgrade (+$15)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="promotion" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Promotional Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Boost your visibility with targeted promotional campaigns.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-black/40">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Weekend Spotlight</h3>
                    <p className="text-sm text-white/70 mb-4">
                      Get featured prominently for 48 hours during peak weekend activity.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$25</span>
                      <Button size="sm">Purchase</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/40">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Featured Profile</h3>
                    <p className="text-sm text-white/70 mb-4">
                      Appear in the "Featured Members" section for 7 days.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$50</span>
                      <Button size="sm">Purchase</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="links" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Promotional Links</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Add links to your profile to drive traffic to your other platforms.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Your Links</h3>
                    <p className="text-xs text-muted-foreground">3 of 5 used</p>
                  </div>
                  <Button size="sm">Add Link</Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-black/20 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                        <LinkIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Website</div>
                        <div className="text-xs text-blue-400">example.com</div>
                      </div>
                    </div>
                    <div className="text-xs">124 clicks</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-black/20 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                        <LinkIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Twitter</div>
                        <div className="text-xs text-blue-400">twitter.com/username</div>
                      </div>
                    </div>
                    <div className="text-xs">89 clicks</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-black/20 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center mr-3">
                        <LinkIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Instagram</div>
                        <div className="text-xs text-blue-400">instagram.com/username</div>
                      </div>
                    </div>
                    <div className="text-xs">217 clicks</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="audience" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Audience Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Understand who's viewing your profile and how they engage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Top Visitors</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-black/20 rounded-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">RoyalSpender</div>
                          <div className="text-xs text-muted-foreground">Rank #3</div>
                        </div>
                      </div>
                      <div className="text-xs">24 views</div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-black/20 rounded-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">CrownCollector</div>
                          <div className="text-xs text-muted-foreground">Rank #12</div>
                        </div>
                      </div>
                      <div className="text-xs">18 views</div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-black/20 rounded-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">GoldThrower</div>
                          <div className="text-xs text-muted-foreground">Rank #7</div>
                        </div>
                      </div>
                      <div className="text-xs">15 views</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Traffic Sources</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Leaderboard</span>
                        <span className="text-sm">45%</span>
                      </div>
                      <div className="w-full bg-black/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Search Results</span>
                        <span className="text-sm">30%</span>
                      </div>
                      <div className="w-full bg-black/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Featured Section</span>
                        <span className="text-sm">15%</span>
                      </div>
                      <div className="w-full bg-black/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Direct</span>
                        <span className="text-sm">10%</span>
                      </div>
                      <div className="w-full bg-black/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingDashboard;
