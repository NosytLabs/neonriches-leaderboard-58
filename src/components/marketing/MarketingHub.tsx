
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Users, BarChart3, Sparkles, Crown } from 'lucide-react';
import ProfileBillboardGuide from './ProfileBillboardGuide';
import MarketingEvents from './MarketingEvents';
import MarketingFeatureShop from './MarketingFeatureShop';
import { MarketingEvent } from '@/types/marketing';

const MarketingHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('billboard');

  const mockEvents: MarketingEvent[] = [
    {
      id: '1',
      title: 'Royal Visibility Weekend',
      description: 'Double profile views and enhanced leaderboard placement for all royal tier members.',
      type: 'visibility',
      startDate: '2024-02-15',
      endDate: '2024-02-17',
      participants: 156,
      rewards: 'Enhanced visibility + exclusive badge'
    },
    {
      id: '2',
      title: 'Profile Makeover Contest',
      description: 'Submit your best profile design for a chance to win premium features.',
      type: 'contest',
      startDate: '2024-02-20',
      endDate: '2024-02-27',
      participants: 89,
      rewards: '1 year premium + custom features'
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="billboard">Profile Guide</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="billboard" className="mt-6">
          <ProfileBillboardGuide />
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <MarketingEvents events={mockEvents} />
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <MarketingFeatureShop />
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card className="glass-morphism border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Advanced Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2 text-royal-gold" />
                    Audience Insights
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Peak viewing hours:</span>
                      <span className="text-royal-gold">8-10 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Most active day:</span>
                      <span className="text-royal-gold">Saturday</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. session time:</span>
                      <span className="text-royal-gold">4.2 min</span>
                    </div>
                  </div>
                </div>

                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-royal-gold" />
                    Conversion Metrics
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Profile to follow:</span>
                      <span className="text-royal-gold">12.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>View to interaction:</span>
                      <span className="text-royal-gold">8.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Referral rate:</span>
                      <span className="text-royal-gold">3.1%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
                <h4 className="font-medium mb-2 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-royal-gold" />
                  Unlock Premium Analytics
                </h4>
                <p className="text-sm text-white/70 mb-3">
                  Get detailed demographic insights, competitor analysis, and advanced performance tracking.
                </p>
                <Button size="sm">
                  <Crown className="h-3 w-3 mr-2" />
                  Upgrade to Royal
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingHub;
