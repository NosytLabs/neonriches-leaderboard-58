
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Zap, Award, Link as LinkIcon, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';

interface MarketingProfileProps {
  user: UserProfile;
  onBoostProfile: () => void;
}

const MarketingProfile: React.FC<MarketingProfileProps> = ({ user, onBoostProfile }) => {
  const { toast } = useToast();
  
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
  
  return (
    <Card className="glass-morphism border-purple-400/10">
      <CardHeader>
        <CardTitle className="text-lg font-royal flex items-center">
          <Award size={18} className="text-purple-400 mr-2" />
          Profile Visibility
        </CardTitle>
        <CardDescription>
          Boost your profile visibility and presence
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
              <p>Boost visibility to attract more profile views</p>
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
                <span className="font-medium">Followers</span>
              </div>
              <span className="font-bold">{followerCount}</span>
            </div>
            <p className="text-sm text-white/70 mb-2">
              More followers increases your profile's influence.
            </p>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 hover:opacity-90 text-white"
            onClick={onBoostProfile}
          >
            <Zap size={16} className="mr-2" />
            Boost Profile ($15)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketingProfile;
