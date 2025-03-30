import React from 'react';
import { UserProfile } from '@/types/user';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Crown, Eye, Link, Sparkles } from 'lucide-react';
import ProfileSocialLinks from './ProfileSocialLinks';
import { cn } from '@/lib/utils';
import { getTeamColor, getRankTextColorClass } from '@/lib/colors';

// Define ProfileData interface
export interface ProfileData {
  bio?: string;
  images?: { id: string; url: string; caption?: string }[];
  links?: { id: string | number; url: string; label: string }[];
  joinDate?: string;
  lastActive?: string;
  views?: number;
}

interface ProfileViewerProps {
  user: UserProfile;
  profileData: ProfileData;
}

const ProfileViewer: React.FC<ProfileViewerProps> = ({ user, profileData }) => {
  const { bio, images, links, joinDate, lastActive, views } = profileData;
  
  // Convert ProfileLink[] to SocialLink[] for compatibility with ProfileSocialLinks
  const convertedLinks = links ? links.map(link => ({
    id: typeof link.id === 'string' ? parseInt(link.id) : link.id,
    url: link.url,
    platform: link.label, // Use label from the original link object
    icon: '',
    label: link.label    // Add the missing 'label' property
  })) : [];
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="relative">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white/10">
                {user.profileImage ? (
                  <AvatarImage src={user.profileImage} alt={user.username} />
                ) : (
                  <AvatarFallback className="text-2xl">
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              
              {user.activeTitle && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-royal-purple/80 text-white text-xs rounded-full whitespace-nowrap">
                  {user.activeTitle}
                </div>
              )}
              
              {user.rank <= 3 && (
                <div className="absolute -bottom-2 -right-2">
                  <Crown 
                    size={24} 
                    className={cn(
                      "filter drop-shadow-glow",
                      user.rank === 1 ? "text-royal-gold animate-crown-glow" : 
                      user.rank === 2 ? "text-gray-300" : 
                      "text-amber-700"
                    )} 
                  />
                </div>
              )}
            </div>
            
            <div className="text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <h2 className="text-2xl font-bold">{user.displayName || user.username}</h2>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="outline" 
                    className={`font-medium ${getRankTextColorClass(user.rank)}`}
                  >
                    <Crown size={14} className="mr-1" /> Rank #{user.rank}
                  </Badge>
                  
                  {user.tier && (
                    <Badge className="bg-royal-gold/20 text-royal-gold border-royal-gold/30">
                      <Sparkles size={14} className="mr-1" /> {user.tier.charAt(0).toUpperCase() + user.tier.slice(1)} Tier
                    </Badge>
                  )}
                  
                  {user.team && (
                    <Badge 
                      variant="outline" 
                      className={getTeamColor(user.team)}
                    >
                      {user.team.toUpperCase()}
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-white/70">{bio || "No bio provided"}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-white/60">
                {joinDate && (
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>Joined {new Date(joinDate).toLocaleDateString()}</span>
                  </div>
                )}
                
                {views !== undefined && (
                  <div className="flex items-center">
                    <Eye size={14} className="mr-1" />
                    <span>{views.toLocaleString()} profile views</span>
                  </div>
                )}
                
                {lastActive && (
                  <div className="flex items-center">
                    <span>Last active {new Date(lastActive).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {links && links.length > 0 && (
        <Card className="glass-morphism border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Link size={18} className="mr-2 text-royal-gold" />
              <h3 className="text-lg font-semibold">Links</h3>
            </div>
            
            <ProfileSocialLinks links={convertedLinks} />
          </CardContent>
        </Card>
      )}
      
      {images && images.length > 0 && (
        <Card className="glass-morphism border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Sparkles size={18} className="mr-2 text-royal-gold" />
              <h3 className="text-lg font-semibold">Gallery</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative aspect-square overflow-hidden rounded-md glass-morphism border-white/10">
                  <img 
                    src={image.url} 
                    alt={image.caption || ''} 
                    className="w-full h-full object-cover"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm text-white text-sm">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProfileViewer;
