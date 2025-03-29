
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Users, Eye, BarChart, Share2, Crown, Target, Globe, LineChart, ExternalLink, PieChart, TrendingDown, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
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
  
  return (
    <div className="space-y-6 animate-royal-entrance">
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-royal-gold/10 rounded-full blur-3xl"></div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold flex items-center">
              <Target className="h-5 w-5 text-royal-gold mr-2 animate-pulse" />
              Your Marketing Dashboard
            </CardTitle>
            <Badge variant="outline" className="bg-royal-gold/20 text-royal-gold border-royal-gold/30">
              {user.tier === 'premium' ? 'Premium' : user.tier === 'royal' ? 'Royal' : 'Basic'}
            </Badge>
          </div>
          <CardDescription>
            Track your profile's marketing performance and convert your status into real-world value
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
                  {user.rank ? `Rank #${user.rank} - Marketing Power: ${Math.floor(1000 / Math.max(user.rank, 10))}x` : 'Needs rank data'}
                </div>
              </div>
              
              <p className="text-sm text-white/70 mb-3">
                Higher rank = more visibility. Every dollar spent increases your rank and marketing reach permanently.
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                <div className="flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                  <span>Rank in top 100: 8x more views</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                  <span>Rank in top 10: 20x more views</span>
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-amber-400 mr-1" />
                  <span>15% higher click rates</span>
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-amber-400 mr-1" />
                  <span>Front page visibility</span>
                </div>
              </div>
            </div>
            
            {/* Marketing Benefits by Tier */}
            <div className="glass-morphism-highlight rounded-lg p-4 my-4">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Globe className="h-5 w-5 text-royal-gold mr-2" />
                Marketing Benefits
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Users className="h-4 w-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Audience Reach</p>
                    <p className="text-xs text-white/70">
                      {user.tier === 'royal' ? 
                        "Your profile appears in premium spots across the entire platform." : 
                        user.tier === 'premium' ? 
                        "Increased visibility in search results and team pages." :
                        "Basic visibility based on your current rank."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <LineChart className="h-4 w-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Conversion Tracking</p>
                    <p className="text-xs text-white/70">
                      {user.tier === 'premium' || user.tier === 'royal' ? 
                        "Full funnel tracking for all external links with conversion data." : 
                        "Upgrade to Premium or Royal to unlock detailed conversion analytics."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PieChart className="h-4 w-4 text-royal-gold mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Audience Demographics</p>
                    <p className="text-xs text-white/70">
                      {user.tier === 'royal' ? 
                        "Detailed demographic breakdown of your profile visitors." : 
                        "Upgrade to Royal tier to access visitor demographics."}
                    </p>
                  </div>
                </div>
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
            
            {/* Weekly Marketing Events */}
            <div className="glass-morphism border-royal-crimson/20 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <TrendingUp className="h-5 w-5 text-royal-crimson mr-2" />
                Weekly Marketing Events
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <Crown className="h-4 w-4 text-royal-crimson mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Weekend Spotlight</p>
                    <p className="text-xs text-white/70">
                      Top 3 spenders each weekend get featured on the homepage (20x visibility boost)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Sparkles className="h-4 w-4 text-royal-crimson mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Tuesday Traffic Rush</p>
                    <p className="text-xs text-white/70">
                      Profiles with recent spending get priority during peak hours (3x more views)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-3">
                <Button 
                  onClick={onBoostProfile}
                  variant="outline" 
                  size="sm"
                  className="w-full border-royal-crimson/30 text-royal-crimson hover:bg-royal-crimson/10"
                >
                  View Upcoming Events
                </Button>
              </div>
            </div>
            
            {/* Premium Features Teaser */}
            {user.tier !== 'premium' && user.tier !== 'royal' && (
              <div className="relative rounded-lg border border-dashed border-royal-gold/40 p-4 animate-border-glow">
                <h4 className="font-semibold flex items-center">
                  <Sparkles className="h-4 w-4 text-royal-gold mr-2" />
                  <span className="animate-text-shimmer">Unlock Full Marketing Power</span>
                </h4>
                <p className="text-sm text-white/70 mt-1 mb-3">
                  Upgrade to Premium ($15/month) or Royal ($30/month) to transform your profile into a powerful 
                  marketing platform with complete analytics, audience demographics, and priority placement.
                </p>
                <Button 
                  onClick={onBoostProfile}
                  variant="outline" 
                  className="w-full border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
                >
                  View Marketing Benefits
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileMarketingFeatures;
