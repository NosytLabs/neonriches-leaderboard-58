
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserProfile } from '@/types/user';
import { useProfileAnalytics } from '@/hooks/useProfileAnalytics';
import { Skeleton } from '@/components/ui/skeleton';
import ViewsChart from './charts/ViewsChart';
import ClicksChart from './charts/ClicksChart';
import SourcesChart from './charts/SourcesChart';
import AnalyticsMetricsOverview from './AnalyticsMetricsOverview';
import TopReferrers from './TopReferrers';

interface ProfileAnalyticsProps {
  user: UserProfile;
}

const ProfileAnalytics: React.FC<ProfileAnalyticsProps> = ({ user }) => {
  const {
    analyticsData,
    loading,
    getViewsData,
    getClicksData,
    getSourcesData,
    getReferrersData,
    error
  } = useProfileAnalytics(user.id);
  
  if (loading) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardContent className="py-6">
          <div className="flex items-center justify-center h-52">
            <div className="h-8 w-8 border-4 border-t-transparent border-royal-gold rounded-full animate-spin"></div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (!analyticsData) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardContent className="py-6">
          <p className="text-center text-white/60">No analytics data available</p>
        </CardContent>
      </Card>
    );
  }
  
  const viewsData = getViewsData();
  const clicksData = getClicksData();
  const sourcesData = getSourcesData();
  const referrersData = getReferrersData();
  const ctr = analyticsData.clicks > 0 && analyticsData.views > 0 
    ? (analyticsData.clicks / analyticsData.views * 100).toFixed(1) 
    : "0.0";
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <BarChart size={18} className="text-royal-gold mr-2" />
          Profile Analytics
        </CardTitle>
        <CardDescription>
          Track your profile performance and engagement
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <AnalyticsMetricsOverview 
          views={analyticsData.views}
          clicks={analyticsData.clicks}
          ctr={ctr}
        />
        
        <Tabs defaultValue="views" className="mt-6">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="views" className="flex items-center gap-2">
              <LineChart size={14} />
              <span>Views</span>
            </TabsTrigger>
            <TabsTrigger value="clicks" className="flex items-center gap-2">
              <BarChart size={14} />
              <span>Clicks</span>
            </TabsTrigger>
            <TabsTrigger value="sources" className="flex items-center gap-2">
              <PieChart size={14} />
              <span>Sources</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="views">
            <ViewsChart data={viewsData} />
          </TabsContent>
          
          <TabsContent value="clicks">
            <ClicksChart data={clicksData} />
          </TabsContent>
          
          <TabsContent value="sources">
            <SourcesChart data={sourcesData} />
          </TabsContent>
        </Tabs>
        
        <TopReferrers data={referrersData} />
      </CardContent>
    </Card>
  );
};

export default ProfileAnalytics;
