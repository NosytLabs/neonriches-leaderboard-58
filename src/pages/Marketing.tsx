
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Megaphone, TrendingUp, Users, BarChart3, Sparkles } from 'lucide-react';
import MarketingDashboard from '@/components/marketing/MarketingDashboard';
import MarketingHub from '@/components/marketing/MarketingHub';
import ProfileMarketingFeatures from '@/components/profile/ProfileMarketingFeatures';
import { useAuth } from '@/hooks/useAuth';
import usePageTracking from '@/hooks/usePageTracking';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Marketing = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Track page view
  usePageTracking();
  
  const handleBoostProfile = () => {
    // Implementation would handle the boost action
    toast({
      title: "Profile Visibility Boosted",
      description: "Your profile will receive enhanced visibility for the next 24 hours.",
      variant: "success"
    });
    console.log('Boosting profile visibility');
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Royal Marketing Studio" 
          description="Amplify your presence and elevate your status with strategic visibility campaigns"
          icon={<Megaphone className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs defaultValue="dashboard" className="w-full mt-6">
          <TabsList className="w-full grid grid-cols-4 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Profile Marketing
            </TabsTrigger>
            <TabsTrigger value="boost" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Visibility Boost
            </TabsTrigger>
            <TabsTrigger value="strategies" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Growth Strategies
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <MarketingDashboard user={user} />
          </TabsContent>
          
          <TabsContent value="profile">
            <MarketingHub />
          </TabsContent>
          
          <TabsContent value="boost">
            <Card className="glass-morphism border-white/10 p-6 rounded-lg">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-royal-gold" />
                  Royal Visibility Boost
                </h2>
                
                <p className="text-white/70 mb-6">
                  Instantly increase your profile visibility across the kingdom with strategic boosts.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="glass-morphism border-white/10 p-4 rounded-lg hover:border-royal-gold/30 transition-colors">
                    <h3 className="font-bold mb-2">24-Hour Spotlight</h3>
                    <p className="text-sm text-white/70 mb-4">
                      Feature your profile prominently in the leaderboard and kingdom feed for 24 hours.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-royal-gold font-bold">$19.99</span>
                      <Button size="sm" onClick={handleBoostProfile}>Activate</Button>
                    </div>
                  </div>
                  
                  <div className="glass-morphism border-white/10 p-4 rounded-lg hover:border-royal-gold/30 transition-colors">
                    <h3 className="font-bold mb-2">Weekend Royalty</h3>
                    <p className="text-sm text-white/70 mb-4">
                      Dominate the weekend with premium placement and visual enhancements for 48 hours.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-royal-gold font-bold">$29.99</span>
                      <Button size="sm" onClick={handleBoostProfile}>Activate</Button>
                    </div>
                  </div>
                  
                  <div className="glass-morphism border-white/10 p-4 rounded-lg hover:border-royal-gold/30 transition-colors">
                    <h3 className="font-bold mb-2">Royal Presence</h3>
                    <p className="text-sm text-white/70 mb-4">
                      Full week of enhanced visibility with golden profile effects and priority placement.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-royal-gold font-bold">$49.99</span>
                      <Button size="sm" onClick={handleBoostProfile}>Activate</Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-lg border border-purple-500/30">
                  <h3 className="text-lg font-semibold mb-2">Boost Performance Analytics</h3>
                  <p className="text-white/70 mb-4">
                    Track the impact of your visibility boosts with detailed analytics and insights. See who viewed your profile and measure engagement metrics.
                  </p>
                  <Button variant="outline" className="border-purple-500/50 hover:bg-purple-900/20">
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="strategies">
            <div className="glass-morphism border-white/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-royal-gold" />
                Royal Visibility Strategies
              </h2>
              
              <p className="text-white/70 mb-6">
                Strategic approaches to maximize your visibility and standing in the kingdom.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Strategic Timing</h3>
                  <p className="text-sm text-white/70">
                    Time your spending during peak activity hours (8PM-11PM) for maximum visibility impact.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Royal Alliances</h3>
                  <p className="text-sm text-white/70">
                    Form strategic alliances with other nobles to pool resources and amplify your presence.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Cross-Platform Promotion</h3>
                  <p className="text-sm text-white/70">
                    Share your profile across your social networks to increase visitors and engagement.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Consistent Presence</h3>
                  <p className="text-sm text-white/70">
                    Regular small deposits maintain steady visibility better than sporadic large ones.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Event Targeting</h3>
                  <p className="text-sm text-white/70">
                    Focus your spending during official kingdom events to capture the attention of other active nobles.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Engagement Optimization</h3>
                  <p className="text-sm text-white/70">
                    Interact with other nobles' profiles to increase reciprocal visibility and recognition.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Marketing;
