
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Users, Eye, BarChart, Share2, Crown } from 'lucide-react';
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
            <CardTitle className="text-xl font-royal flex items-center">
              <Crown className="h-5 w-5 text-royal-gold mr-2 animate-royal-float" />
              Your Royal Billboard
            </CardTitle>
            <Badge variant="outline" className="bg-royal-gold/20 text-royal-gold border-royal-gold/30">
              {user.tier === 'pro' ? 'Premium' : 'Starter'}
            </Badge>
          </div>
          <CardDescription>
            Your profile is your walking billboard in the SpendThrone realm. Enhance it to attract more subjects.
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
                  <Users className="h-4 w-4 text-royal-gold" />
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
            
            {/* Marketing Tips */}
            <div className="glass-morphism-highlight rounded-lg p-4 my-4">
              <div className="flex items-start mb-2">
                <TrendingUp className="h-5 w-5 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Boost Your Royal Presence</h4>
                  <p className="text-sm text-white/70">
                    Your profile is viewed by {profileViews > 100 ? 'hundreds' : 'dozens'} of nobles. 
                    Enhance its appearance to attract more followers and climb the ranks faster.
                  </p>
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
                  Boost Profile
                </Button>
              </div>
            </div>
            
            {/* Premium Features Teaser */}
            {user.tier !== 'pro' && (
              <div className="relative rounded-lg border border-dashed border-royal-gold/40 p-4 animate-border-glow">
                <h4 className="font-semibold flex items-center">
                  <Sparkles className="h-4 w-4 text-royal-gold mr-2" />
                  <span className="animate-text-shimmer">Unlock Premium Features</span>
                </h4>
                <p className="text-sm text-white/70 mt-1 mb-3">
                  Upgrade to Pro Tier ($25+) to access enhanced profile editing, analytics, 
                  animations, and priority placement in the SpendThrone realm.
                </p>
                <Button 
                  onClick={onBoostProfile}
                  variant="outline" 
                  className="w-full border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
                >
                  View Premium Benefits
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
