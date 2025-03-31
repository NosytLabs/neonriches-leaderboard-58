
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Users, Eye, BarChart, Share2, Crown, Target, Globe, LineChart, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { getMarketingBenefitsByTier } from '@/data/tierData';
import '../../styles/animations/enhanced-animations.css';

interface ProfileMarketingFeaturesProps {
  user: UserProfile;
  onBoostProfile: () => void;
}

const ProfileMarketingFeatures: React.FC<ProfileMarketingFeaturesProps> = ({ 
  user,
  onBoostProfile
}) => {
  const { toast } = useToast();
  
  const handleShareProfile = () => {
    navigator.clipboard.writeText(`${window.location.origin}/profile/${user.username}`);
    toast({
      title: "Profile Link Copied",
      description: "Your profile URL has been copied to your clipboard. Share it to increase your visibility!",
      variant: "default"
    });
  };
  
  // Mock analytics data - would come from real analytics in production
  const profileViews = user.profileViews || 0;
  const profileClicks = user.profileClicks || 0;
  const conversionRate = profileViews > 0 ? Math.round((profileClicks / profileViews) * 100) : 0;
  const marketingBenefits = getMarketingBenefitsByTier(user.tier);
  
  return (
    <div className="space-y-6 animate-royal-entrance">
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-royal-gold/10 rounded-full blur-3xl"></div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold flex items-center">
              <Target className="h-5 w-5 text-royal-gold mr-2 animate-pulse" />
              Your Billboard Dashboard
            </CardTitle>
            <Badge variant="outline" className="bg-royal-gold/20 text-royal-gold border-royal-gold/30">
              {user.tier === 'premium' ? 'Premium' : 
               user.tier === 'royal' ? 'Royal' : 
               user.tier === 'gold' ? 'Royal Gold' :
               user.tier === 'silver' ? 'Silver' :
               user.tier === 'bronze' ? 'Bronze' : 'Basic'}
            </Badge>
          </div>
          <CardDescription>
            Track your profile's performance and convert your status into marketing value
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Profile Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-royal-gold/20 mb-2">
                  <Eye className="h-4 w-4 text-royal-gold" />
                </div>
                <div className="text-2xl font-bold">{profileViews.toLocaleString()}</div>
                <div className="text-xs text-white/60">Profile Views</div>
              </div>
              
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-royal-gold/20 mb-2">
                  <ExternalLink className="h-4 w-4 text-royal-gold" />
                </div>
                <div className="text-2xl font-bold">{profileClicks.toLocaleString()}</div>
                <div className="text-xs text-white/60">Link Clicks</div>
              </div>
              
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-royal-gold/20 mb-2">
                  <BarChart className="h-4 w-4 text-royal-gold" />
                </div>
                <div className="text-2xl font-bold">{conversionRate}%</div>
                <div className="text-xs text-white/60">Conversion Rate</div>
              </div>
            </div>
            
            {/* Rank Impact on Marketing */}
            <div className="glass-morphism-highlight rounded-lg p-4 my-4">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Crown className="h-5 w-5 text-royal-gold mr-2" />
                Rank-Based Marketing Power
              </h3>
              
              <div className="relative h-10 w-full bg-white/5 rounded-lg mb-4 overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-royal-gold/30 to-royal-gold" 
                     style={{ width: `${Math.min(user.rank ? 100 / (user.rank / 10) : 5, 100)}%` }}>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  {user.rank ? `Rank #${user.rank} - Spotlight Priority: ${Math.floor(1000 / Math.max(user.rank, 10))}x` : 'Needs rank data'}
                </div>
              </div>
              
              <p className="text-sm text-white/70 mb-3">
                Higher rank = more visibility. Every dollar spent increases your rank and spotlight priority permanently.
              </p>
            </div>
            
            {/* Marketing Benefits by Tier */}
            <div className="glass-morphism-highlight rounded-lg p-4 my-4">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Globe className="h-5 w-5 text-royal-gold mr-2" />
                Your Marketing Benefits
              </h3>
              
              <div className="space-y-3">
                {marketingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Sparkles className="h-4 w-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white/80">{benefit}</p>
                    </div>
                  </div>
                ))}
                
                {user.tier === 'basic' && (
                  <p className="text-sm text-white/60 mt-2">
                    Spend more to unlock additional marketing benefits. Top spenders receive priority spotlight placement.
                  </p>
                )}
              </div>
              
              <div className="mt-3 space-x-2 flex">
                <Button 
                  onClick={handleShareProfile}
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Profile
                </Button>
                
                <Button 
                  onClick={onBoostProfile}
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-bright text-black hover:opacity-90"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Boost Visibility
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileMarketingFeatures;
