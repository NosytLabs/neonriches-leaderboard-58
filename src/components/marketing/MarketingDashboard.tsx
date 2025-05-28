
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user-consolidated';
import { BarChart3, TrendingUp, Eye, Users, DollarSign, Target } from 'lucide-react';

interface MarketingDashboardProps {
  user?: UserProfile;
}

const MarketingDashboard: React.FC<MarketingDashboardProps> = ({ user }) => {
  const mockMetrics = {
    profileViews: user?.profileViews || 1247,
    impressions: 3456,
    clickThrough: 4.2,
    engagement: 6.8,
    followers: user?.followers?.length || 89,
    conversionRate: 2.1
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-royal-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.profileViews.toLocaleString()}</div>
            <p className="text-xs text-white/60">+12% from last week</p>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impressions</CardTitle>
            <BarChart3 className="h-4 w-4 text-royal-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.impressions.toLocaleString()}</div>
            <p className="text-xs text-white/60">+8% from last week</p>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CTR</CardTitle>
            <Target className="h-4 w-4 text-royal-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.clickThrough}%</div>
            <p className="text-xs text-white/60">+0.3% from last week</p>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement</CardTitle>
            <Users className="h-4 w-4 text-royal-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.engagement}%</div>
            <p className="text-xs text-white/60">+1.2% from last week</p>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Followers</CardTitle>
            <TrendingUp className="h-4 w-4 text-royal-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.followers}</div>
            <p className="text-xs text-white/60">+5 this week</p>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion</CardTitle>
            <DollarSign className="h-4 w-4 text-royal-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.conversionRate}%</div>
            <p className="text-xs text-white/60">+0.1% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Marketing Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Profile Visibility Score</span>
              <Badge className="bg-green-500/20 text-green-300">Excellent</Badge>
            </div>
            <div className="w-full bg-black/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-royal-gold to-amber-500 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Top Performing Content</h4>
                <ul className="space-y-1 text-sm text-white/70">
                  <li>• Profile updates (+23% engagement)</li>
                  <li>• Royal achievements (+18% views)</li>
                  <li>• Team activities (+15% clicks)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Optimization Opportunities</h4>
                <ul className="space-y-1 text-sm text-white/70">
                  <li>• Peak hour posting (8-10 PM)</li>
                  <li>• Cross-platform promotion</li>
                  <li>• Visual content enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingDashboard;
