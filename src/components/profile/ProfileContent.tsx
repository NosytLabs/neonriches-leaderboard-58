
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Eye, MessageSquare, Shield, Edit, Settings, Graph, Clock, Trophy, ExternalLink } from 'lucide-react';
import { UserProfile, UserTier } from '@/types/user';
import { useToast } from '@/hooks/use-toast';
import ProfileMarketingFeatures from '../profile/ProfileMarketingFeatures';
import ProfileMarketingSettings from '../profile/ProfileMarketingSettings';
import FoundersPass from '../profile/FoundersPass';
import ProfileFeed from '../profile/ProfileFeed';
import RoyalFAQ, { profileFAQItems } from '../royal/RoyalFAQ';

export type ProfileTab = 'view' | 'edit' | 'marketing' | 'founders' | 'boost' | 'faq';

export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
}

export interface ProfileLink {
  id: string | number;
  url: string;
  label: string;
}

export interface ProfileData {
  bio: string;
  images: ProfileImage[];
  links: ProfileLink[];
  joinDate?: string;
  lastActive?: string;
  followers: number;
  following: number;
  views: number;
}

interface ProfileContentProps {
  tab: ProfileTab;
  viewOnly: boolean;
  user: UserProfile | null;
  profileUser: UserProfile;
  profileData: ProfileData;
  handleBoostProfile: () => void;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ 
  tab,
  viewOnly,
  user,
  profileUser,
  profileData,
  handleBoostProfile 
}) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<ProfileTab>(tab);
  
  const handleSaveMarketingSettings = (updates: Partial<UserProfile>) => {
    toast({
      title: "Settings Updated",
      description: "Your profile marketing settings have been saved.",
    });
  };
  
  // Check if user is a founder (for demonstration, we'll mock this)
  const isFounder = profileUser.badges?.includes('early_supporter') || profileUser.tier === 'royal' || profileUser.amountSpent >= 50;
  
  // Check if profile belongs to the logged-in user
  const isOwnProfile = user && user.id === profileUser.id;
  
  const tierColors = {
    'basic': 'text-purple-400',
    'bronze': 'text-amber-600',
    'silver': 'text-gray-300',
    'gold': 'text-royal-gold',
    'platinum': 'text-royal-gold-bright',
    'royal': 'text-royal-purple',
    'pro': 'text-royal-gold',
    'premium': 'text-royal-purple-light'
  };
  
  const getTierColor = (tier?: UserTier) => {
    if (!tier) return 'text-purple-400';
    return tierColors[tier] || 'text-purple-400';
  };
  
  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <Tabs value={activeTab} onValueChange={value => setActiveTab(value as ProfileTab)}>
      {!viewOnly ? (
        <TabsList className="glass-morphism border-white/10 mb-6">
          <TabsTrigger value="view" className="data-[state=active]:bg-black/30">
            <Eye className="mr-2 h-4 w-4" />
            <span>View</span>
          </TabsTrigger>
          <TabsTrigger value="edit" className="data-[state=active]:bg-black/30">
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </TabsTrigger>
          <TabsTrigger value="marketing" className="data-[state=active]:bg-black/30">
            <Graph className="mr-2 h-4 w-4" />
            <span>Marketing</span>
          </TabsTrigger>
          <TabsTrigger value="founders" className="data-[state=active]:bg-black/30">
            <Crown className="mr-2 h-4 w-4" />
            <span>Founders</span>
          </TabsTrigger>
          <TabsTrigger value="boost" className="data-[state=active]:bg-black/30">
            <Trophy className="mr-2 h-4 w-4" />
            <span>Boost</span>
          </TabsTrigger>
          <TabsTrigger value="faq" className="data-[state=active]:bg-black/30">
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>FAQ</span>
          </TabsTrigger>
        </TabsList>
      ) : (
        <div className="mt-6"></div>
      )}
      
      <TabsContent value="view" className="space-y-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold font-medieval flex items-center">
                  {profileUser.displayName || profileUser.username}
                  {profileUser.activeTitle && (
                    <span className="ml-2 text-sm text-white/60">{profileUser.activeTitle}</span>
                  )}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span>@{profileUser.username}</span>
                  {profileUser.tier && (
                    <Badge 
                      variant="outline" 
                      className={`${getTierColor(profileUser.tier)} bg-black/30 border-current/30`}
                    >
                      {profileUser.tier.charAt(0).toUpperCase() + profileUser.tier.slice(1)} Tier
                    </Badge>
                  )}
                  {profileUser.team && (
                    <Badge 
                      variant="outline" 
                      className={`bg-${profileUser.team}-500/10 text-${profileUser.team}-400 border-${profileUser.team}-500/30`}
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      Team {profileUser.team.charAt(0).toUpperCase() + profileUser.team.slice(1)}
                    </Badge>
                  )}
                </CardDescription>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="flex items-center mb-1">
                  <Crown className="h-4 w-4 text-royal-gold mr-1" />
                  <span className="text-royal-gold font-bold">#{profileUser.rank}</span>
                </div>
                <div className="text-sm text-white/60">
                  ${profileUser.amountSpent?.toLocaleString()} spent
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="py-2">
            <div className="space-y-4">
              <div className="max-w-none prose-sm prose-invert">
                <p className="text-white/80">{profileUser.bio || "This noble has not written a biography yet."}</p>
              </div>
              
              {profileData.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                  {profileData.images.map((image) => (
                    <div key={image.id} className="relative rounded-md overflow-hidden aspect-square">
                      <img
                        src={image.url}
                        alt={image.caption || "Profile image"}
                        className="w-full h-full object-cover"
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-xs text-white/80">
                          {image.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {profileData.links.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h3 className="text-sm font-semibold text-white/80">Royal Links</h3>
                  <div className="space-y-1.5">
                    {profileData.links.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-royal-gold hover:text-royal-gold-bright transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-wrap justify-between border-t border-white/10 pt-4">
            <div className="flex space-x-4 text-sm text-white/60">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Joined {formatDate(profileUser.joinDate)}</span>
              </div>
              
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{profileData.views} views</span>
              </div>
            </div>
            
            <div className="flex space-x-4 text-sm">
              <div className="text-white/80">
                <span className="font-bold">{profileData.followers}</span> followers
              </div>
              <div className="text-white/80">
                <span className="font-bold">{profileData.following}</span> following
              </div>
            </div>
          </CardFooter>
        </Card>
        
        {/* Profile Feed/Comments */}
        <ProfileFeed user={profileUser} />
        
        {!isOwnProfile && (
          <div className="flex justify-end mt-6">
            <Button 
              onClick={handleBoostProfile}
              className="bg-gradient-to-r from-royal-purple to-royal-purple-light hover:opacity-90"
            >
              <Trophy className="mr-2 h-4 w-4" />
              Boost This Noble's Profile
            </Button>
          </div>
        )}
      </TabsContent>
      
      <TabsContent value="edit" className="space-y-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>
              Edit Profile
            </CardTitle>
            <CardDescription>
              Update thy noble appearance in the royal court
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white/70">
              Edit profile form would go here. This would include fields for bio, images, links, etc.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="marketing" className="space-y-6">
        {profileUser.tier === 'pro' || profileUser.tier === 'royal' || profileUser.tier === 'platinum' ? (
          <ProfileMarketingSettings 
            user={profileUser} 
            onSave={handleSaveMarketingSettings} 
          />
        ) : (
          <ProfileMarketingFeatures 
            user={profileUser}
            onBoostProfile={handleBoostProfile}
          />
        )}
      </TabsContent>
      
      <TabsContent value="founders" className="space-y-6">
        <FoundersPass isFounder={isFounder} joinDate={profileUser.joinDate} />
      </TabsContent>
      
      <TabsContent value="boost" className="space-y-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>
              Boost Profile
            </CardTitle>
            <CardDescription>
              Increase thy visibility and prestige in the realm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white/70">
              Boost form would go here. This would include options to pay for increased visibility.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="faq" className="space-y-6">
        <RoyalFAQ 
          title="Profile & Features FAQ"
          description="Common inquiries about noble profiles and their adornments"
          items={profileFAQItems}
          variant="profile"
        />
      </TabsContent>
      
      {viewOnly && activeTab === 'view' && (
        <div className="flex justify-end mt-6">
          <Button 
            onClick={handleBoostProfile}
            className="bg-gradient-to-r from-royal-purple to-royal-purple-light hover:opacity-90"
          >
            <Trophy className="mr-2 h-4 w-4" />
            Boost This Noble's Profile
          </Button>
        </div>
      )}
    </Tabs>
  );
};

export default ProfileContent;
