
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
    analytics,
    loading,
    prepareViewsData,
    prepareClicksData,
    prepareSourcesData,
    prepareReferrersData,
    calculateCTR
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
  
  if (!analytics) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardContent className="py-6">
          <p className="text-center text-white/60">No analytics data available</p>
        </CardContent>
      </Card>
    );
  }
  
  const viewsData = prepareViewsData();
  const clicksData = prepareClicksData();
  const sourcesData = prepareSourcesData();
  const referrersData = prepareReferrersData();
  const ctr = calculateCTR();
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <BarChart size={18} className="text-royal-gold mr-2" />
          Profile Analytics
        </CardTitle>
        <CardDescription>
          Track your profile's engagement and performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnalyticsMetricsOverview analytics={analytics} ctr={ctr} />
        
        <Tabs defaultValue="views">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="views">Views</TabsTrigger>
            <TabsTrigger value="clicks">Clicks</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="views">
            <div className="h-72 glass-morphism rounded-lg p-4">
              <ViewsChart data={viewsData} />
            </div>
          </TabsContent>
          
          <TabsContent value="clicks">
            <div className="h-72 glass-morphism rounded-lg p-4">
              <ClicksChart data={clicksData} />
            </div>
          </TabsContent>
          
          <TabsContent value="sources">
            <div className="h-72 glass-morphism rounded-lg p-4">
              <SourcesChart data={sourcesData} />
            </div>
          </TabsContent>
        </Tabs>
        
        <TopReferrers data={referrersData} />
      </CardContent>
    </Card>
  );
};

export default ProfileAnalytics;
