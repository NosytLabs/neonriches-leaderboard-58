
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Link as LinkIcon, ExternalLink, Shield, Trophy, Calendar, Heart, Crown, Instagram, Twitter, Facebook, Linkedin, Globe } from 'lucide-react';
import { UserProfile, SocialLink } from '@/types/user';
import { getTeamBgColorClass, getTeamTextColorClass, getSpendingTier, getSpendingTierLabel } from '@/lib/colors';
import { getTitleById } from '@/types/medievalTitles';
import MedievalIcon from '@/components/ui/medieval-icon';

interface ProfileImage {
  id: number;
  url: string;
  caption: string;
}

interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

interface ProfileData {
  bio: string;
  images: ProfileImage[];
  links: ProfileLink[];
  joinDate?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  views?: number;
}

interface ProfileViewerProps {
  user: UserProfile;
  profileData: ProfileData;
}

const ProfileViewer = ({ user, profileData }: ProfileViewerProps) => {
  const teamBg = user.team ? getTeamBgColorClass(user.team) : 'bg-white/10';
  const teamText = user.team ? getTeamTextColorClass(user.team) : 'text-white/70';
  const spendingTier = getSpendingTier(user.amountSpent || 0);
  const spendingTierLabel = getSpendingTierLabel(spendingTier);
  
  // Calculate if this is the #1 spender (king)
  const isKing = user.rank === 1;
  
  // Get user's active title if they have one
  const activeTitle = user.activeTitle ? getTitleById(user.activeTitle) : null;
  const isFounder = user.cosmetics?.foundersPass === true;

  // Function to render social media icon
  const getSocialIcon = (platform: string) => {
    switch(platform) {
      case 'instagram': return <Instagram size={16} className="text-pink-400" />;
      case 'twitter': return <Twitter size={16} className="text-blue-400" />;
      case 'facebook': return <Facebook size={16} className="text-blue-600" />;
      case 'linkedin': return <Linkedin size={16} className="text-blue-700" />;
      case 'website': return <Globe size={16} className="text-gray-400" />;
      default: return <ExternalLink size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="royal-card-enhanced rounded-xl overflow-hidden">
      {/* Hero banner */}
      <div className="h-48 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://source.unsplash.com/random/?medieval,throne,castle)`,
            filter: 'brightness(0.6)'
          }}
        ></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        
        {/* King badge */}
        {isKing && (
          <div className="absolute top-4 right-4 flex items-center gap-2 royal-card animate-crown-glow px-3 py-1 rounded-full">
            <Crown className="h-4 w-4 text-royal-gold" />
            <span className="text-xs font-bold text-royal-gold">Current Ruler</span>
          </div>
        )}
        
        {/* Founder badge */}
        {isFounder && (
          <div className="absolute top-4 right-20 flex items-center gap-2 royal-card-enhanced px-3 py-1 rounded-full">
            <MedievalIcon name="seal" size="xs" color="gold" animate />
            <span className="text-xs font-bold text-royal-gold">Founder</span>
          </div>
        )}
        
        <Button variant="outline" size="sm" className="absolute top-4 left-4 glass-morphism border-white/20 text-white hover:bg-white/10">
          <Eye size={14} className="mr-1.5" />
          Public View
        </Button>
      </div>
      
      <div className="px-8 pb-8 relative">
        {/* Profile avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-background absolute -top-14 left-0">
            <img 
              src={user.profileImage || "https://i.pravatar.cc/200?img=12"} 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* User tier badge */}
          <div className={`absolute -top-10 left-24 px-3 py-1 rounded-full text-xs font-bold tier-${spendingTier}`}>
            {spendingTierLabel} Tier
          </div>
        </div>
        
        <div className="pt-16">
          <div className="flex items-start justify-between mb-4">
            <div>
              {/* Username with possible title prefix */}
              <h3 className="text-2xl font-bold">
                {activeTitle && (
                  <span className="font-medieval text-royal-gold mr-2">{activeTitle.name}</span>
                )}
                {user.username}
              </h3>
              <div className="flex items-center flex-wrap gap-2 mt-1">
                {user.team && (
                  <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${teamBg} ${teamText} border border-${teamText}/30`}>
                    <Shield size={12} className="mr-1" />
                    Team {user.team.charAt(0).toUpperCase() + user.team.slice(1)}
                  </div>
                )}
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                  <Trophy size={12} className="inline mr-1" /> 
                  Rank #{user.rank}
                </span>
                {profileData.joinDate && (
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                    <Calendar size={12} className="inline mr-1" />
                    Joined {profileData.joinDate}
                  </span>
                )}
              </div>
            </div>
            
            <div className="glass-morphism px-4 py-2 rounded-lg text-center">
              <div className="text-2xl font-bold text-royal-gold">${user.amountSpent?.toLocaleString()}</div>
              <div className="text-xs text-white/50">Total Tribute</div>
            </div>
          </div>
          
          {/* Bio section */}
          <div className="mb-6 medieval-border royal-corner-ornament">
            <p className="text-white/70 italic">
              {profileData.bio || "This noble has not written their story yet."}
            </p>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="glass-morphism rounded-lg p-3 text-center">
              <div className="text-xl font-bold">{profileData.views || 0}</div>
              <div className="text-xs text-white/50">Profile Views</div>
            </div>
            <div className="glass-morphism rounded-lg p-3 text-center">
              <div className="text-xl font-bold">{profileData.followers || 0}</div>
              <div className="text-xs text-white/50">Followers</div>
            </div>
            <div className="glass-morphism rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-royal-gold">{isKing ? 'King' : user.rank}</div>
              <div className="text-xs text-white/50">Court Rank</div>
            </div>
          </div>
          
          {/* Social Links */}
          {user.socialLinks && user.socialLinks.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medieval mb-3">
                <span className="royal-gradient">Royal Networks</span>
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {user.socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-morphism rounded-lg p-3 flex items-center hover:bg-white/5 transition-colors"
                  >
                    {getSocialIcon(link.platform)}
                    <span className="ml-2 text-sm">{link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}</span>
                    <ExternalLink size={12} className="ml-auto text-white/50" />
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* Images gallery */}
          {profileData.images.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medieval mb-3 flex items-center">
                <span className="royal-gradient">Royal Gallery</span>
                {isKing && <Crown size={16} className="ml-2 text-royal-gold" />}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {profileData.images.map(image => (
                  <div key={image.id} className="glass-morphism rounded-lg p-2 border border-white/10 group relative overflow-hidden">
                    <img src={image.url} alt={image.caption} className="rounded-lg w-full h-32 object-cover mb-2" />
                    <p className="text-sm text-white/50 text-center truncate">{image.caption}</p>
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" size="sm" className="glass-morphism border-white/20">
                        View Image
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Links section */}
          {profileData.links.length > 0 && (
            <div className="glass-morphism rounded-lg p-4 border border-white/10">
              <h4 className="font-medium mb-3 flex items-center">
                <LinkIcon size={16} className="text-royal-gold mr-2" />
                Royal Connections
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {profileData.links.map(link => (
                  <a 
                    key={link.id} 
                    href={link.url} 
                    className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors group"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className={`mr-2 ${teamText}`} />
                    <span className="text-sm flex-1">{link.label}</span>
                    <span className="text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">visit</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* Royal treatment for king */}
          {isKing && (
            <div className="mt-6 royal-card-enhanced border-royal-gold/20 rounded-lg animate-gold-dust">
              <div className="flex items-start">
                <Crown size={24} className="text-royal-gold mr-3 mt-1 animate-crown-glow" />
                <div>
                  <h3 className="text-lg font-medieval text-royal-gold mb-1">Royal Treatment</h3>
                  <p className="text-sm text-white/70">
                    As the current ruler of our digital kingdom, {user.username} enjoys exclusive profile customization 
                    privileges, premium exposure, and maximum visibility throughout the realm.
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="royal-button-enhanced border-royal-gold/30 text-royal-gold"
                >
                  <Heart size={14} className="mr-1.5" />
                  Show Respect
                </Button>
              </div>
            </div>
          )}
          
          {/* Founder treatment */}
          {isFounder && !isKing && (
            <div className="mt-6 royal-card-enhanced border-royal-gold/20 rounded-lg animate-pulse-slow">
              <div className="flex items-start">
                <MedievalIcon name="seal" size="sm" color="gold" animate className="mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-medieval text-royal-gold mb-1">Founder's Privileges</h3>
                  <p className="text-sm text-white/70">
                    As one of the founding patrons of our digital kingdom, {user.username} enjoys permanent enhanced 
                    profile customization and recognition throughout the realm.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Shame counter if present */}
          {user.shameCount && user.shameCount > 0 && (
            <div className="mt-6 glass-morphism rounded-lg p-4 border border-red-500/20">
              <div className="flex items-center">
                <div className="text-xl mr-2">🍅</div>
                <div>
                  <h3 className="text-base font-medium text-red-400">Public Shame Count</h3>
                  <p className="text-sm text-white/70">
                    This noble has been publicly shamed {user.shameCount} times.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileViewer;
