
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Link, Zap, TrendingUp, Eye, MousePointer } from 'lucide-react';
import useProfileAnalytics from '@/hooks/useProfileAnalytics';
import TopReferrers from './TopReferrers';

interface ProfileAnalyticsProps {
  profileId: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ProfileAnalytics: React.FC<ProfileAnalyticsProps> = ({ profileId }) => {
  const { 
    loading, 
    error, 
    analyticsData,
    getViewsData,
    getClicksData,
    getSourcesData,
    getReferrersData
  } = useProfileAnalytics(profileId);

  if (loading) {
    return (
      <Card className="glass-morphism border-white/10 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-gold"></div>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="glass-morphism border-white/10 p-8">
        <div className="text-center text-red-400">
          <p>Failed to load analytics data</p>
        </div>
      </Card>
    );
  }

  const viewsData = getViewsData();
  const clicksData = getClicksData();
  const sourcesData = getSourcesData();
  const referrersData = getReferrersData();
  
  // Calculate click-through rate
  const calculateCTR = () => {
    if (analyticsData.views === 0) return 0;
    return ((analyticsData.clicks / analyticsData.views) * 100).toFixed(1);
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="mr-2 h-5 w-5 text-royal-gold" />
          Profile Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-morphism rounded-lg p-4 border border-white/10">
            <div className="flex items-center">
              <Eye className="h-5 w-5 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Profile Views</span>
            </div>
            <div className="mt-2 text-2xl font-bold">{analyticsData.views.toLocaleString()}</div>
          </div>
          
          <div className="glass-morphism rounded-lg p-4 border border-white/10">
            <div className="flex items-center">
              <MousePointer className="h-5 w-5 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Total Clicks</span>
            </div>
            <div className="mt-2 text-2xl font-bold">{analyticsData.clicks.toLocaleString()}</div>
          </div>
          
          <div className="glass-morphism rounded-lg p-4 border border-white/10">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Click Rate</span>
            </div>
            <div className="mt-2 text-2xl font-bold">{calculateCTR()}%</div>
          </div>
          
          <div className="glass-morphism rounded-lg p-4 border border-white/10">
            <div className="flex items-center">
              <Link className="h-5 w-5 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Shares</span>
            </div>
            <div className="mt-2 text-2xl font-bold">{analyticsData.shareCount.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-morphism p-4 rounded-lg border border-white/10">
            <h3 className="text-sm font-medium mb-4">Views Over Time</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={viewsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    stroke="#D4AF37" 
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="glass-morphism p-4 rounded-lg border border-white/10">
            <h3 className="text-sm font-medium mb-4">Link Clicks</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={clicksData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    stroke="#9B87F5" 
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-morphism p-4 rounded-lg border border-white/10">
            <h3 className="text-sm font-medium mb-4">Traffic Sources</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourcesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {sourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <TopReferrers data={referrersData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileAnalytics;
