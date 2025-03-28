
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useProfileAnalytics from '@/hooks/useProfileAnalytics';
import ViewsChart from './charts/ViewsChart';
import ClicksChart from './charts/ClicksChart';
import SourcesChart from './charts/SourcesChart';
import AnalyticsMetricsOverview from './AnalyticsMetricsOverview';
import TopReferrers from './TopReferrers';
import { CalendarDays, CheckCheck, Link, MousePointerClick, Users } from 'lucide-react';

interface ProfileAnalyticsProps {
  profileId: string;
}

const ProfileAnalytics: React.FC<ProfileAnalyticsProps> = ({ profileId }) => {
  const { analyticsData, loading, error, getViewsData, getClicksData, getSourcesData, getReferrersData } = useProfileAnalytics(profileId);

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading analytics data...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-white/70">Error loading analytics: {error.message}</div>;
  }

  // Calculate CTR
  const calculateCTR = () => {
    if (!analyticsData.views || analyticsData.views === 0) return '0%';
    const ctr = (analyticsData.clicks / analyticsData.views) * 100;
    return `${ctr.toFixed(1)}%`;
  };

  const viewsData = getViewsData();
  const clicksData = getClicksData();
  const sourcesData = getSourcesData();
  const referrersData = getReferrersData();

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CalendarDays className="mr-2 h-5 w-5 text-royal-gold" />
          Profile Analytics
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-royal-gold mr-2" />
                  <span className="text-sm font-medium">Profile Views</span>
                </div>
                <span className="text-lg font-bold">{analyticsData.views || 0}</span>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MousePointerClick className="h-5 w-5 text-royal-gold mr-2" />
                  <span className="text-sm font-medium">Link Clicks</span>
                </div>
                <span className="text-lg font-bold">{analyticsData.clicks || 0}</span>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCheck className="h-5 w-5 text-royal-gold mr-2" />
                  <span className="text-sm font-medium">Click Rate</span>
                </div>
                <span className="text-lg font-bold">{calculateCTR()}</span>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="views" className="space-y-4">
          <TabsList className="glass-morphism">
            <TabsTrigger value="views">Views</TabsTrigger>
            <TabsTrigger value="clicks">Clicks</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="views" className="space-y-4">
            <ViewsChart data={viewsData} />
          </TabsContent>
          
          <TabsContent value="clicks" className="space-y-4">
            <ClicksChart data={clicksData} />
          </TabsContent>
          
          <TabsContent value="sources" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <SourcesChart data={sourcesData} />
              <TopReferrers data={referrersData} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileAnalytics;
