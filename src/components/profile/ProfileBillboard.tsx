
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, TrendingUp, Users, Eye, BarChart3, Crown, Link as LinkIcon, Share2 } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { 
  calculateVisibilityScore, 
  getMarketingPotentialText,
  formatProfileForMarketing
} from '@/lib/marketingHelpers';
import { useToast } from '@/hooks/use-toast';

interface ProfileBillboardProps {
  user: UserProfile;
  isOwnProfile: boolean;
  onBoost?: () => void;
  className?: string;
}

const ProfileBillboard: React.FC<ProfileBillboardProps> = ({
  user,
  isOwnProfile,
  onBoost,
  className = ''
}) => {
  const { toast } = useToast();
  const marketingData = formatProfileForMarketing(user);
  
  const handleShareProfile = () => {
    const profileUrl = `${window.location.origin}/profile/${user.username}`;
    navigator.clipboard.writeText(profileUrl);
    
    toast({
      title: "Profile Link Copied",
      description: "Your profile URL has been copied to your clipboard. Share it to increase your visibility!",
      variant: "success",
    });
  };

  return (
    <Card className={`glass-morphism border-white/10 overflow-hidden ${className}`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl flex items-center">
              <LinkIcon className="h-5 w-5 text-royal-gold mr-2" />
              {isOwnProfile ? 'Your Virtual Billboard' : `${user.username}'s Billboard`}
            </CardTitle>
            <CardDescription>
              {isOwnProfile ? 
                `Your rank #${user.rank || '??'} profile reaches ${marketingData.visibilityScore}x more people` : 
                `Rank #${user.rank || '??'} profile with ${marketingData.visibilityScore}x visibility`}
            </CardDescription>
          </div>
          
          <Badge variant="royal" className="ml-auto">
            {user.tier || 'Basic'} Tier
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="stats">
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="reach">
              <Users className="h-4 w-4 mr-2" />
              Reach
            </TabsTrigger>
            <TabsTrigger value="links">
              <ExternalLink className="h-4 w-4 mr-2" />
              Links
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats" className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <Eye className="h-4 w-4 text-royal-gold mb-1" />
                <div className="text-xl font-bold">{user.profileViews?.toLocaleString() || '0'}</div>
                <div className="text-xs text-white/60">Billboard Views</div>
              </div>
              
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <ExternalLink className="h-4 w-4 text-royal-gold mb-1" />
                <div className="text-xl font-bold">{user.profileClicks?.toLocaleString() || '0'}</div>
                <div className="text-xs text-white/60">Link Clicks</div>
              </div>
              
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <BarChart3 className="h-4 w-4 text-royal-gold mb-1" />
                <div className="text-xl font-bold">
                  {marketingData.ctr}%
                </div>
                <div className="text-xs text-white/60">Click Rate</div>
              </div>
            </div>
            
            <p className="text-sm text-white/70 mt-4">
              {getMarketingPotentialText(user)}
            </p>
          </TabsContent>
          
          <TabsContent value="reach" className="pt-4">
            <div className="glass-morphism-highlight rounded-lg p-4">
              <h3 className="text-sm font-medium mb-2 flex items-center">
                <Crown className="h-4 w-4 text-royal-gold mr-2" />
                Rank-Based Visibility
              </h3>
              
              <div className="relative h-6 w-full bg-white/5 rounded-lg mb-3 overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-royal-gold/30 to-royal-gold" 
                     style={{ width: `${Math.min((marketingData.visibilityScore / 20) * 100, 100)}%` }}>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                  {marketingData.visibilityScore}x Visibility Boost
                </div>
              </div>
              
              <div className="space-y-2 text-xs text-white/70">
                <div className="flex justify-between">
                  <span>Featured Time:</span>
                  <span className="font-semibold">{marketingData.featuredTime} hrs/week</span>
                </div>
                <div className="flex justify-between">
                  <span>Followers:</span>
                  <span className="font-semibold">{marketingData.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Allowed External Links:</span>
                  <span className="font-semibold">{marketingData.maxLinks}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-white/70 mt-3">
              Higher rank = increased visibility and exposure for your content, links, and personal brand.
            </p>
          </TabsContent>
          
          <TabsContent value="links" className="pt-4">
            <div className="glass-morphism-highlight rounded-lg p-4 mb-3">
              <h3 className="text-sm font-medium mb-3">Your Promotional Links</h3>
              
              {user.socialLinks && Object.keys(user.socialLinks).length > 0 ? (
                <div className="space-y-2">
                  {Object.entries(user.socialLinks).map(([platform, url]) => (
                    <div key={platform} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2">
                          <LinkIcon className="h-4 w-4 text-royal-gold" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{platform}</div>
                          <div className="text-xs text-white/60 truncate max-w-[150px]">{url}</div>
                        </div>
                      </div>
                      <a href={url} target="_blank" rel="noopener noreferrer"
                         className="text-xs text-royal-gold hover:underline"
                      >
                        Visit
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-white/60">
                  {isOwnProfile ? 
                    "You haven't added any promotional links yet. Add links to increase your marketing reach." :
                    "This user hasn't added any promotional links yet."}
                </p>
              )}
              
              {isOwnProfile && (
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  Manage Billboard Links
                </Button>
              )}
            </div>
            
            <p className="text-sm text-white/70">
              Each click on your profile links is tracked for marketing analytics. 
              Add up to {marketingData.maxLinks} links with your current tier.
            </p>
          </TabsContent>
        </Tabs>
        
        <div className="flex gap-3 mt-4">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleShareProfile}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Billboard
          </Button>
          
          {isOwnProfile && (
            <Button 
              className="flex-1 bg-gradient-to-r from-royal-gold-dark to-royal-gold text-black"
              onClick={onBoost}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Boost Visibility
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBillboard;
