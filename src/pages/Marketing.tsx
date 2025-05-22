
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Megaphone, TrendingUp, Users, BarChart3 } from 'lucide-react';
import MarketingDashboard from '@/components/marketing/MarketingDashboard';
import ProfileMarketingFeatures from '@/components/profile/ProfileMarketingFeatures';
import { useAuth } from '@/hooks/useAuth';
import usePageTracking from '@/hooks/usePageTracking';

const Marketing = () => {
  const { user } = useAuth();
  
  // Track page view
  usePageTracking();
  
  const handleBoostProfile = () => {
    // Implementation would handle the boost action
    console.log('Boosting profile visibility');
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Royal Marketing Dashboard" 
          description="Expand your reach and enhance your status through strategic visibility"
          icon={<Megaphone className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs defaultValue="dashboard" className="w-full mt-6">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Profile Marketing
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
            {user && (
              <ProfileMarketingFeatures 
                user={user} 
                onBoostProfile={handleBoostProfile} 
              />
            )}
          </TabsContent>
          
          <TabsContent value="strategies">
            <div className="glass-morphism border-white/10 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-royal-gold" />
                Royal Visibility Strategies
              </h2>
              
              <p className="text-white/70 mb-6">
                Strategic ways to increase your visibility and standing in the kingdom.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Weekend Spending Boosts</h3>
                  <p className="text-sm text-white/70">
                    Strategically time your spending during weekend events for maximum visibility boost.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Royal Alliances</h3>
                  <p className="text-sm text-white/70">
                    Form teams with other nobles to pool resources and amplify your collective presence.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Social Amplification</h3>
                  <p className="text-sm text-white/70">
                    Share your profile across your networks to increase visitors and engagement.
                  </p>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Consistent Presence</h3>
                  <p className="text-sm text-white/70">
                    Regular small deposits maintain your visibility better than sporadic large ones.
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
