
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProfileAnalytics } from '@/services/walletService';
import { UserProfile } from '@/types/user';
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart as ReBarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  PieLabelRenderProps
} from 'recharts';

interface ProfileAnalyticsProps {
  user: UserProfile;
}

const COLORS = ['#D4AF37', '#9B87F5', '#FF6B6B', '#4ECDC4', '#556FB5'];

const ProfileAnalytics: React.FC<ProfileAnalyticsProps> = ({ user }) => {
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchAnalytics = async () => {
      if (user) {
        setLoading(true);
        try {
          const data = await getProfileAnalytics(user.id);
          setAnalytics(data);
        } catch (error) {
          console.error("Error fetching profile analytics:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchAnalytics();
    
    const interval = setInterval(fetchAnalytics, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [user]);
  
  const prepareViewsData = () => {
    if (!analytics || !analytics.history) return [];
    
    const viewsByDay: Record<string, number> = {};
    
    analytics.history.forEach((item: any) => {
      if (item.type === 'view') {
        const date = new Date(item.timestamp);
        const dayKey = date.toISOString().split('T')[0];
        
        viewsByDay[dayKey] = (viewsByDay[dayKey] || 0) + 1;
      }
    });
    
    return Object.entries(viewsByDay).map(([date, count]) => ({
      date: date.split('-').slice(1).join('/'),
      views: count
    }));
  };
  
  const prepareClicksData = () => {
    if (!analytics || !analytics.history) return [];
    
    const clicksByDay: Record<string, number> = {};
    
    analytics.history.forEach((item: any) => {
      if (item.type === 'click') {
        const date = new Date(item.timestamp);
        const dayKey = date.toISOString().split('T')[0];
        
        clicksByDay[dayKey] = (clicksByDay[dayKey] || 0) + 1;
      }
    });
    
    return Object.entries(clicksByDay).map(([date, count]) => ({
      date: date.split('-').slice(1).join('/'),
      clicks: count
    }));
  };
  
  const prepareSourcesData = () => {
    if (!analytics || !analytics.sources) return [];
    
    return Object.entries(analytics.sources).map(([source, count]) => ({
      name: source,
      value: count
    }));
  };
  
  const prepareReferrersData = () => {
    if (!analytics || !analytics.referrers) return [];
    
    return Object.entries(analytics.referrers)
      .map(([referrer, count]) => ({
        name: referrer || 'Direct',
        value: count
      }))
      .sort((a, b) => (b.value as number) - (a.value as number))
      .slice(0, 5);
  };
  
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
  
  // Custom label render function for the pie chart with proper typing
  const renderPieLabel = ({ name, percent }: PieLabelRenderProps) => {
    if (!name) return null;
    return `${name}: ${(Number(percent) * 100).toFixed(0)}%`;
  };
  
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
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="glass-morphism rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-royal-gold">{analytics.views}</div>
            <div className="text-xs text-white/50">Total Views</div>
          </div>
          <div className="glass-morphism rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-royal-gold">{analytics.clicks}</div>
            <div className="text-xs text-white/50">Total Clicks</div>
          </div>
          <div className="glass-morphism rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-royal-gold">
              {analytics.clicks > 0 ? `${Math.round((analytics.clicks / analytics.views) * 100)}%` : '0%'}
            </div>
            <div className="text-xs text-white/50">CTR</div>
          </div>
        </div>
        
        <Tabs defaultValue="views">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="views">Views</TabsTrigger>
            <TabsTrigger value="clicks">Clicks</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="views">
            <div className="h-72 glass-morphism rounded-lg p-4">
              {viewsData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: '1px solid rgba(212,175,55,0.3)',
                        borderRadius: '4px'
                      }} 
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="views" 
                      stroke="#D4AF37" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                  </ReLineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-white/50">No view data available yet</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="clicks">
            <div className="h-72 glass-morphism rounded-lg p-4">
              {clicksData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <ReBarChart data={clicksData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: '1px solid rgba(212,175,55,0.3)',
                        borderRadius: '4px'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="clicks" fill="#9B87F5" />
                  </ReBarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-white/50">No click data available yet</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="sources">
            <div className="h-72 glass-morphism rounded-lg p-4">
              {sourcesData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={sourcesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={renderPieLabel}
                    >
                      {sourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: '1px solid rgba(212,175,55,0.3)',
                        borderRadius: '4px'
                      }} 
                    />
                    <Legend />
                  </RePieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-white/50">No source data available yet</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 p-3 bg-black/20 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Top Referrers</h3>
          {referrersData.length > 0 ? (
            <div className="space-y-2">
              {referrersData.map((referrer, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-white/70">{referrer.name}</span>
                  <span className="text-sm font-medium">{referrer.value}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-white/50">No referrer data available yet</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileAnalytics;
