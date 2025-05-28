
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user-consolidated';
import { Badge } from '@/components/ui/badge';
import { Megaphone, Eye, Users, TrendingUp, Sparkles } from 'lucide-react';
import { getMarketingPotentialText } from '@/lib/marketingHelpers';

export interface ProfileMarketingFeaturesProps {
  user: UserProfile;
  onBoostProfile: () => void;
}

const ProfileMarketingFeatures: React.FC<ProfileMarketingFeaturesProps> = ({ 
  user, 
  onBoostProfile 
}) => {
  const marketingMetrics = {
    impressions: user.profileViews || 0,
    clickRate: user.profileClicks && user.profileViews ? 
      Math.round((user.profileClicks / user.profileViews) * 100) : 0,
    followers: user.followers?.length || 0,
    engagement: "4.5%"
  };
  
  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-xl font-bold flex items-center">
              <Megaphone className="h-5 w-5 text-royal-gold mr-2" />
              Royal Profile Marketing
            </h2>
            <p className="text-white/70">{getMarketingPotentialText(user)}</p>
          </div>
          
          <Button 
            className="mt-3 md:mt-0 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            onClick={onBoostProfile}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Boost Your Profile
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 glass-morphism border-white/10 rounded-lg">
            <div className="flex items-center mb-1">
              <Eye className="h-4 w-4 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Profile Views</span>
            </div>
            <div className="text-2xl font-bold">{marketingMetrics.impressions.toLocaleString()}</div>
          </div>
          
          <div className="p-4 glass-morphism border-white/10 rounded-lg">
            <div className="flex items-center mb-1">
              <TrendingUp className="h-4 w-4 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Click Rate</span>
            </div>
            <div className="text-2xl font-bold">{marketingMetrics.clickRate}%</div>
          </div>
          
          <div className="p-4 glass-morphism border-white/10 rounded-lg">
            <div className="flex items-center mb-1">
              <Users className="h-4 w-4 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Followers</span>
            </div>
            <div className="text-2xl font-bold">{marketingMetrics.followers}</div>
          </div>
          
          <div className="p-4 glass-morphism border-white/10 rounded-lg">
            <div className="flex items-center mb-1">
              <Sparkles className="h-4 w-4 text-royal-gold mr-2" />
              <span className="text-sm text-white/70">Engagement</span>
            </div>
            <div className="text-2xl font-bold">{marketingMetrics.engagement}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileMarketingFeatures;
