
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollText, Megaphone, BarChart3, Users, Link } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts';
import useFeatureAccess from '@/hooks/use-feature-access';
import MarketingFeatureShop from './MarketingFeatureShop';
import MarketingEvents from './MarketingEvents';
import ProfileBillboardGuide from './ProfileBillboardGuide';

const MarketingHub: React.FC = () => {
  const { user } = useAuth();
  const { isUserPro } = useFeatureAccess();
  
  const userTier = user?.tier || 'basic';
  const userSubscription = user?.subscription;
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Megaphone className="mr-2 h-5 w-5 text-royal-gold" />
            SpendThrone Marketing Hub
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="glass-morphism border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-royal-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Profile Views</h3>
                    <p className="text-3xl font-bold">{user?.profileViews || 0}</p>
                    <p className="text-sm text-white/60">Lifetime visibility</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center mr-4">
                    <Link className="h-5 w-5 text-royal-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Link Clicks</h3>
                    <p className="text-3xl font-bold">{user?.profileClicks || 0}</p>
                    <p className="text-sm text-white/60">Total engagement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center mr-4">
                    <BarChart3 className="h-5 w-5 text-royal-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Rank</h3>
                    <p className="text-3xl font-bold">#{user?.rank || 'N/A'}</p>
                    <p className="text-sm text-white/60">Current position</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="guide">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="guide">
                <ScrollText className="h-4 w-4 mr-2" />
                Billboard Guide
              </TabsTrigger>
              <TabsTrigger value="events">
                <Megaphone className="h-4 w-4 mr-2" />
                Marketing Events
              </TabsTrigger>
              <TabsTrigger value="shop">
                <Link className="h-4 w-4 mr-2" />
                Feature Shop
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="guide">
              <ProfileBillboardGuide />
            </TabsContent>
            
            <TabsContent value="events">
              <MarketingEvents />
            </TabsContent>
            
            <TabsContent value="shop">
              <MarketingFeatureShop />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingHub;
