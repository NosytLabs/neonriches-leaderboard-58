
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile, SocialLink } from '@/types/user';
import { ExternalLink, Users, Calendar, ArrowUpRight, Share2, Trophy, Sparkles } from 'lucide-react';
import React from 'react';

export interface ProfileBillboardProps {
  user: UserProfile;
  isOwnProfile: boolean;
}

const ProfileBillboard: React.FC<ProfileBillboardProps> = ({ user, isOwnProfile }) => {
  const formattedJoinDate = user.joinedAt 
    ? new Date(user.joinedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Unknown';
  
  const socialIcons: Record<string, React.ReactNode> = {
    twitter: <span className="text-blue-400">𝕏</span>,
    instagram: <span className="text-pink-500">📸</span>,
    facebook: <span className="text-blue-600">ⓕ</span>,
    youtube: <span className="text-red-500">▶</span>,
    twitch: <span className="text-purple-500">🎮</span>,
    tiktok: <span className="text-black">🎵</span>,
    linkedin: <span className="text-blue-700">in</span>,
    github: <span className="text-gray-800">🐙</span>,
    default: <ExternalLink size={14} />
  };

  return (
    <Card className="glass-morphism border-royal-gold/30 relative overflow-hidden">
      {/* Background pattern/effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/5 to-transparent pointer-events-none opacity-30" />
      
      {/* Rank display */}
      <div className="absolute top-4 right-4">
        <Badge variant="outline" className="border-royal-gold bg-royal-gold/10 text-royal-gold font-bold px-3 py-1">
          <Trophy className="w-4 h-4 mr-1" /> 
          Rank #{user.rank}
        </Badge>
      </div>
      
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          {/* Profile Image */}
          <Avatar className="h-20 w-20 rounded-lg border-2 border-royal-gold/50 shadow-royal">
            <AvatarImage src={user.profileImage} alt={user.displayName} />
            <AvatarFallback className="bg-royal-gold/20 text-white">
              {user.displayName?.substring(0, 2) || user.username.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          
          {/* Profile Info */}
          <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                {user.displayName || user.username}
                {user.isVerified && (
                  <Badge className="bg-royal-gold h-5 w-5 p-0 flex items-center justify-center rounded-full">
                    <Sparkles className="h-3 w-3 text-black" />
                  </Badge>
                )}
              </h2>
              
              {user.activeTitle && (
                <span className="text-white/70 text-sm font-medium italic">
                  {user.activeTitle}
                </span>
              )}
            </div>
            
            <p className="text-white/70 mt-1">@{user.username}</p>
            
            {user.bio && (
              <p className="mt-2 text-sm text-white/80 line-clamp-2">
                {user.bio}
              </p>
            )}
            
            {/* Stats and Join Date */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
              {user.followers !== undefined && (
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{user.followers.toLocaleString()} followers</span>
                </div>
              )}
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Joined {formattedJoinDate}</span>
              </div>
              {user.totalSpent !== undefined && (
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1" />
                  <span>${user.totalSpent.toLocaleString()} contributed</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-4 sm:mt-0 flex flex-col sm:items-end gap-2">
            {!isOwnProfile && (
              <Button className="bg-royal-gold hover:bg-royal-gold/90 text-black border-none">
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </Button>
            )}
            
            {isOwnProfile && (
              <Button variant="outline" className="border-royal-gold/30 hover:bg-royal-gold/10">
                Edit Billboard
              </Button>
            )}
          </div>
        </div>
        
        {/* Social Links */}
        {user.socialLinks && user.socialLinks.length > 0 && (
          <div className="mt-5 pt-5 border-t border-white/10">
            <h3 className="text-sm font-medium mb-3">Connect with {isOwnProfile ? 'me' : user.displayName || user.username}</h3>
            <div className="flex flex-wrap gap-2">
              {user.socialLinks.map((link, index) => (
                <a 
                  key={link.id || index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md text-sm flex items-center transition-colors duration-200"
                >
                  {socialIcons[link.platform] || socialIcons.default}
                  <span className="ml-2">{link.platform}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProfileBillboard;
