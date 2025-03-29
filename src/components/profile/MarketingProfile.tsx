
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Zap, Award, Link as LinkIcon, Users, TrendingUp, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import { Link } from 'react-router-dom';

interface MarketingProfileProps {
  user: UserProfile;
  onBoostProfile: () => void;
}

const MarketingProfile: React.FC<MarketingProfileProps> = ({ user, onBoostProfile }) => {
  const { toast } = useToast();
  const { canAccessFeature } = useFeatureAccess();
  
  const viewCount = user.profileViews || 0;
  const clickCount = user.profileClicks || 0;
  const followerCount = user.followers || 0;
  
  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/profile/${user.username}`);
    toast({
      title: "Profile Link Copied",
      description: "Your profile link has been copied to clipboard",
    });
  };
  
  const hasAdvancedMarketing = canAccessFeature('marketing_dashboard') || 
                              (user.purchasedFeatures && 
                                (user.purchasedFeatures.includes('basic_analytics') || 
                                 user.purchasedFeatures.includes('advanced_analytics')));
  
  return (
    <Card className="glass-morphism border-purple-400/10">
      <CardHeader>
        <CardTitle className="text-lg font-royal flex items-center">
          <Award size={18} className="text-purple-400 mr-2" />
          Profile Marketing Impact
        </CardTitle>
        <CardDescription>
          Your marketing reach scales with your rank
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Eye size={16} className="text-purple-400 mr-2" />
                <span className="font-medium">Profile Views</span>
              </div>
              <span className="font-bold">{viewCount}</span>
            </div>
            <div className="text-sm text-white/70">
              <p>Higher rank = increased visibility and views</p>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400" 
                  style={{ width: '28%' }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <LinkIcon size={16} className="text-purple-400 mr-2" />
                <span className="font-medium">Link Clicks</span>
              </div>
              <span className="font-bold">{clickCount}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Button variant="outline" size="sm" className="text-xs" onClick={handleShare}>
                Share Profile
              </Button>
              
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                {clickCount > 0 ? `${Math.round((clickCount / viewCount) * 100)}% CTR` : 'No clicks yet'}
              </Badge>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Users size={16} className="text-purple-400 mr-2" />
                <span className="font-medium">Outreach Potential</span>
              </div>
              <span className="font-bold">{user.rank ? `${Math.floor(1000 / Math.max(user.rank, 20))}x` : '1x'}</span>
            </div>
            <p className="text-sm text-white/70 mb-2">
              Your marketing potential grows as your rank improves:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                <span>Top 100: 8x boost</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                <span>Top 10: 20x boost</span>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Clock size={16} className="text-purple-400 mr-2" />
                <span className="font-medium">Weekly Events</span>
              </div>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                {user.subscription?.tier && user.subscription.tier !== 'free' ? 'Available' : 'Upgrade to Access'}
              </Badge>
            </div>
            <p className="text-sm text-white/70 mb-2">
              Participate in weekly spotlight events for additional visibility boosts.
            </p>
            
            {!hasAdvancedMarketing && (
              <div className="mt-2 p-2 bg-black/20 rounded text-xs">
                <div className="flex items-center text-white/80 mb-1">
                  <ShoppingBag size={12} className="mr-1 text-purple-400" />
                  <span>Enhance your marketing with advanced features</span>
                </div>
                <Button
                  size="sm"
                  variant="link"
                  className="text-purple-400 p-0 h-auto text-xs"
                  asChild
                >
                  <Link to="/marketing-shop">Shop Marketing Features</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button 
              className="w-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 hover:opacity-90 text-white"
              onClick={onBoostProfile}
            >
              <Zap size={16} className="mr-2" />
              Boost Profile
            </Button>
            
            <Button 
              className="w-full bg-gradient-to-r from-royal-gold-dark to-royal-gold hover:opacity-90 text-black"
              onClick={() => window.location.href = '/deposit'}
            >
              <DollarSign size={16} className="mr-2" />
              Increase Rank
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketingProfile;
