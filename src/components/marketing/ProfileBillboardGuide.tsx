
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Link as LinkIcon, 
  BarChart3, 
  Share2, 
  Crown, 
  Target, 
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { calculateVisibilityScore } from '@/lib/marketingHelpers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { UserProfile, UserTier } from '@/types/user';

// Marketing table data
const visibilityData = [
  { rank: "1-10", boost: "20x", featured: "24 hrs/week", links: "Unlimited" },
  { rank: "11-50", boost: "10x", featured: "12 hrs/week", links: "20+" },
  { rank: "51-100", boost: "5x", featured: "6 hrs/week", links: "15+" },
  { rank: "101-500", boost: "2x", featured: "2 hrs/week", links: "10+" },
  { rank: "500+", boost: "1x", featured: "None", links: "5" }
];

const tierData = [
  { tier: 'Royal', boost: "20x", featured: "Daily", links: "Unlimited", analytics: "Full + AI" },
  { tier: 'Diamond', boost: "15x", featured: "3x weekly", links: "20", analytics: "Advanced" },
  { tier: 'Gold', boost: "8x", featured: "Weekly", links: "10", analytics: "Complete" },
  { tier: 'Silver', boost: "5x", featured: "Bi-weekly", links: "7", analytics: "Basic" },
  { tier: 'Basic', boost: "2x", featured: "None", links: "3", analytics: "Limited" },
  { tier: 'Free', boost: "1x", featured: "None", links: "1", analytics: "None" }
];

interface ProfileBillboardGuideProps {
  user?: UserProfile;
  className?: string;
}

const ProfileBillboardGuide: React.FC<ProfileBillboardGuideProps> = ({ 
  user, 
  className = '' 
}) => {
  const navigate = useNavigate();
  
  const visibilityScore = user ? calculateVisibilityScore(user.rank) : 1;
  const userTier = user?.tier || 'free';
  
  const getBillboardTierDescription = (tier: UserTier): string => {
    switch (tier) {
      case 'royal':
      case 'diamond':
      case 'platinum':
        return "Premium Digital Billboard - Maximum marketing reach across the platform with priority placement and advanced analytics.";
      case 'gold':
      case 'silver':
      case 'premium':
      case 'pro':
        return "Enhanced Digital Billboard - Great marketing reach with increased visibility and more promotional links.";
      case 'bronze':
      case 'basic':
        return "Standard Digital Billboard - Basic marketing opportunities with some featured placement.";
      default:
        return "Basic Digital Billboard - Limited marketing reach with minimal promotional opportunities.";
    }
  };

  return (
    <Card className={`glass-morphism border-white/10 overflow-hidden ${className}`}>
      <CardHeader className="bg-gradient-to-r from-royal-gold/20 to-royal-purple/20">
        <Badge variant="royal" className="w-fit mb-2">Marketing Guide</Badge>
        <CardTitle className="text-xl md:text-2xl">Your Profile Billboard</CardTitle>
        <CardDescription className="text-white/80">
          In SpendThrone, your profile functions as a powerful marketing billboard. 
          Higher ranks and better tiers give you expanded marketing reach and visibility.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        {user && (
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold flex items-center mb-3">
              <Crown className="h-5 w-5 text-royal-gold mr-2" />
              Your Billboard Status
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center glass-morphism p-3 rounded-lg">
                <TrendingUp className="h-5 w-5 text-royal-gold mb-1" />
                <div className="text-xl font-bold">{visibilityScore}x</div>
                <div className="text-xs text-white/60">Visibility Boost</div>
              </div>
              
              <div className="flex flex-col items-center glass-morphism p-3 rounded-lg">
                <Eye className="h-5 w-5 text-royal-gold mb-1" />
                <div className="text-xl font-bold">{user.profileViews || 0}</div>
                <div className="text-xs text-white/60">Billboard Views</div>
              </div>
              
              <div className="flex flex-col items-center glass-morphism p-3 rounded-lg">
                <LinkIcon className="h-5 w-5 text-royal-gold mb-1" />
                <div className="text-xl font-bold">{user.socialLinks ? Object.keys(user.socialLinks).length : 0}</div>
                <div className="text-xs text-white/60">Active Links</div>
              </div>
              
              <div className="flex flex-col items-center glass-morphism p-3 rounded-lg">
                <Target className="h-5 w-5 text-royal-gold mb-1" />
                <div className="text-xl font-bold">
                  {user.profileViews && user.profileClicks 
                    ? Math.round((user.profileClicks / user.profileViews) * 100) 
                    : 0}%
                </div>
                <div className="text-xs text-white/60">Click Rate</div>
              </div>
            </div>
            
            <div className="mt-4 p-3 rounded-lg bg-black/30">
              <h4 className="text-md font-medium mb-1 flex items-center">
                <Globe className="h-4 w-4 text-royal-gold mr-2" />
                Your Billboard Tier
              </h4>
              <p className="text-sm text-white/80">{getBillboardTierDescription(userTier as UserTier)}</p>
            </div>
          </div>
        )}
        
        <Tabs defaultValue="rank">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="rank">Rank-Based Benefits</TabsTrigger>
            <TabsTrigger value="tier">Tier-Based Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rank" className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-black/40">
                    <th className="p-2 text-left border-b border-white/10">Rank Range</th>
                    <th className="p-2 text-left border-b border-white/10">Visibility</th>
                    <th className="p-2 text-left border-b border-white/10">Featured Time</th>
                    <th className="p-2 text-left border-b border-white/10">Max Links</th>
                  </tr>
                </thead>
                <tbody>
                  {visibilityData.map((row, index) => (
                    <tr 
                      key={`rank-${index}`} 
                      className={
                        index === 0 
                          ? "bg-royal-gold/20" 
                          : index % 2 === 0 
                            ? "bg-black/20" 
                            : "bg-black/10"
                      }
                    >
                      <td className="p-2 border-b border-white/10">{row.rank}</td>
                      <td className="p-2 border-b border-white/10">{row.boost}</td>
                      <td className="p-2 border-b border-white/10">{row.featured}</td>
                      <td className="p-2 border-b border-white/10">{row.links}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-white/70 mt-3">
              Your rank is determined by your total spending on the platform.
              Higher ranks automatically grant your profile significantly more visibility.
            </p>
          </TabsContent>
          
          <TabsContent value="tier" className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-black/40">
                    <th className="p-2 text-left border-b border-white/10">Tier</th>
                    <th className="p-2 text-left border-b border-white/10">Visibility</th>
                    <th className="p-2 text-left border-b border-white/10">Features</th>
                    <th className="p-2 text-left border-b border-white/10">Links</th>
                    <th className="p-2 text-left border-b border-white/10">Analytics</th>
                  </tr>
                </thead>
                <tbody>
                  {tierData.map((row, index) => (
                    <tr 
                      key={`tier-${index}`} 
                      className={
                        index === 0 
                          ? "bg-royal-gold/20" 
                          : index % 2 === 0 
                            ? "bg-black/20" 
                            : "bg-black/10"
                      }
                    >
                      <td className="p-2 border-b border-white/10">{row.tier}</td>
                      <td className="p-2 border-b border-white/10">{row.boost}</td>
                      <td className="p-2 border-b border-white/10">{row.featured}</td>
                      <td className="p-2 border-b border-white/10">{row.links}</td>
                      <td className="p-2 border-b border-white/10">{row.analytics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-white/70 mt-3">
              Subscription tiers provide additional marketing benefits and tools
              to maximize your profile's reach and promotional effectiveness.
            </p>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <h3 className="text-md font-semibold flex items-center mb-2">
              <Eye className="h-4 w-4 text-royal-gold mr-2" />
              Visibility Benefits
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Higher ranks appear more frequently in the leaderboard and search results</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Premium tiers get featured in special sections of the site with high traffic</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Royal tier profiles may appear in promotional emails and platform announcements</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <h3 className="text-md font-semibold flex items-center mb-2">
              <LinkIcon className="h-4 w-4 text-royal-gold mr-2" />
              Promotional Links
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Add links to your social media accounts, websites, and other platforms</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Higher tiers can add more links with custom labels and thumbnails</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>All clicks are tracked for detailed analytics and conversion data</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <h3 className="text-md font-semibold flex items-center mb-2">
              <BarChart3 className="h-4 w-4 text-royal-gold mr-2" />
              Marketing Analytics
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Track profile views, link clicks, and conversion rates</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Premium tiers get visitor demographics and engagement metrics</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                <span>Royal tier includes AI-powered insights and optimization suggestions</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button 
            className="flex-1 bg-gradient-to-r from-royal-gold-dark to-royal-gold text-black"
            onClick={() => navigate('/deposit')}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Increase Rank
          </Button>
          
          <Button 
            className="flex-1"
            variant="outline"
            onClick={() => navigate('/subscription')}
          >
            <Crown className="h-4 w-4 mr-2" />
            Upgrade Tier
          </Button>
          
          <Button 
            className="flex-1"
            variant="secondary"
            onClick={() => navigate('/profile')}
          >
            <Share2 className="h-4 w-4 mr-2" />
            View My Billboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBillboardGuide;
