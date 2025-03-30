import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Crown, Shield, Gem, Link as LucideLink, Rocket } from 'lucide-react';
import { useAuth } from '@/contexts';
import { calculateVisibilityScore, getFeaturedTimeAllocation, getMaxLinksAllowed, getMarketingPotentialText, formatProfileForMarketing } from '@/lib/marketingHelpers';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { SocialLink } from '@/types/user';

interface ProfileBillboardProps {
  userId: string;
}

const ProfileBillboard: React.FC<ProfileBillboardProps> = ({ userId }) => {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading profile...</p>;
  }

  const marketingData = formatProfileForMarketing(user);

  const renderSocialLink = (link: SocialLink) => {
    return (
      <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
        {link.platform}: {link.username}
      </a>
    );
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <div className="flex items-center">
          <Rocket className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Profile Billboard</CardTitle>
        </div>
        <CardDescription>
          Showcase your profile and attract more attention
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Avatar className="h-32 w-32 border-4 border-royal-gold">
            <AvatarImage src={user.profileImage} alt={user.username} />
            <AvatarFallback className="text-3xl">{user.username?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{user.displayName || user.username}</h2>
            <p className="text-white/70 mb-4">Joined {user.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : 'recently'}</p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
              <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <Crown className="h-4 w-4 text-royal-gold mr-2" />
                <span>Rank #{user.rank || 'N/A'}</span>
              </div>
              
              <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <Shield className="h-4 w-4 text-royal-purple mr-2" />
                <span>Team {user.team || 'None'}</span>
              </div>
              
              <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <Gem className="h-4 w-4 text-royal-crimson mr-2" />
                <span>Tier: {user.tier || 'Basic'}</span>
              </div>

              <div className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <LucideLink className="h-4 w-4 text-blue-400 mr-2" />
                <span>Links: {user.socialLinks ? Object.keys(user.socialLinks).length : 0}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {user.socialLinks?.map(link => renderSocialLink(link))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <h3 className="text-lg font-semibold mb-3">Marketing Potential</h3>
          <p className="text-white/70">{getMarketingPotentialText(user)}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="glass-morphism border-white/10 rounded-lg p-3">
              <h4 className="text-sm font-semibold mb-2">Visibility Score</h4>
              <p className="text-white/70">
                Your profile has a visibility score of {marketingData.visibilityScore}x.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-3">
              <h4 className="text-sm font-semibold mb-2">Featured Time</h4>
              <p className="text-white/70">
                You get {marketingData.featuredTime} hours of featured time per week.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-3">
              <h4 className="text-sm font-semibold mb-2">Max Links Allowed</h4>
              <p className="text-white/70">
                You can have up to {marketingData.maxLinks} links on your profile.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-3">
              <h4 className="text-sm font-semibold mb-2">Profile Stats</h4>
              <p className="text-white/70">
                Followers: {marketingData.followers}, Impressions: {marketingData.impressions}, CTR: {marketingData.ctr}%
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBillboard;
