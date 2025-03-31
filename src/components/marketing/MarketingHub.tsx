
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollText, Megaphone, BarChart3, Users, Link } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import MarketingFeatureShop from './MarketingFeatureShop';
import MarketingEvents from './MarketingEvents';
import ProfileBillboardGuide from './ProfileBillboardGuide';
import { MarketingEvent } from '@/types/marketing'; 

const MarketingHub: React.FC = () => {
  const { user } = useAuth();
  const { isUserPro } = useFeatureAccess();
  
  const userTier = user?.tier || 'basic';
  const userSubscription = user?.subscription;
  
  // Sample marketing events data
  const marketingEvents: MarketingEvent[] = [
    {
      id: "event-1",
      title: "Royal Tournament",
      description: "Compete for the crown in this exclusive royal tournament.",
      type: "tournament",
      startDate: "2023-12-01",
      endDate: "2023-12-15",
      imageUrl: "/assets/events/tournament.jpg",
      participants: 128,
      rewards: "Crown Jewels"
    },
    {
      id: "event-2",
      title: "Golden Giveaway",
      description: "Participate in our golden ticket giveaway for a chance to win exclusive cosmetics.",
      type: "giveaway",
      startDate: "2023-12-10",
      endDate: "2023-12-20",
      participants: 356,
      rewards: "Premium Cosmetics"
    },
    {
      id: "event-3",
      title: "Holiday Promotion",
      description: "Special holiday discounts on all Royal tier upgrades.",
      type: "promotion",
      startDate: "2023-12-15",
      endDate: "2023-12-31",
      participants: 203,
      rewards: "Discounted Upgrades"
    }
  ];
  
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
              <MarketingEvents events={marketingEvents} />
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
