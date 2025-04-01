import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { SocialLink } from '@/types/user-consolidated';
import { formatCurrency } from '@/utils/formatters';
import { formatDate } from '@/utils/dateUtils';
import { getInitials } from '@/utils/stringUtils';
import { Clock, CreditCard, Share, Star, ThumbsUp, Users } from 'lucide-react';
import { safeToLocaleString } from '@/utils/stringUtils';

interface ProfileBillboardProps {
  user: UserProfile;
  onFollow?: () => void;
  isCurrentUser?: boolean;
}

const ProfileBillboard: React.FC<ProfileBillboardProps> = ({ user, onFollow, isCurrentUser = false }) => {
  const joinDate = user.joinedDate ? formatDate(user.joinedDate) : 'Unknown';
  const memberSince = user.joinedDate 
    ? new Date(user.joinedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
      })
    : 'Unknown';

  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <div className="relative h-32 md:h-40 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
      </div>
      
      <CardContent className="p-0">
        <div className="relative px-4 pb-4 -mt-12 md:-mt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            {/* Avatar and name section */}
            <div className="flex flex-col items-center md:items-start md:flex-row">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
                <AvatarImage 
                  src={user.profileImage || `/placeholder-avatar.png`}
                  alt={user.displayName || user.username}
                />
                <AvatarFallback className="text-2xl">
                  {getInitials(user.displayName || user.username)}
                </AvatarFallback>
              </Avatar>
              
              <div className="mt-3 md:mt-0 md:ml-4 text-center md:text-left mb-4 md:mb-0">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <h2 className="text-2xl font-bold">
                    {user.displayName || user.username}
                  </h2>
                  
                  {user.isVerified && (
                    <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/30 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      Verified
                    </Badge>
                  )}
                </div>
                
                <div className="text-lg text-muted-foreground">@{user.username}</div>
                
                {user.activeTitle && (
                  <div className="mt-1">
                    <Badge className="bg-royal-gold/20 text-royal-gold border-royal-gold/30">
                      {user.activeTitle}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
              {!isCurrentUser && (
                <Button 
                  variant="outline" 
                  className="glass-morphism border-white/10"
                  onClick={onFollow}
                >
                  {user.isFollowing ? (
                    <>
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Following
                    </>
                  ) : (
                    <>
                      <Users className="h-4 w-4 mr-2" />
                      Follow
                    </>
                  )}
                </Button>
              )}
              
              <Button variant="outline" className="glass-morphism border-white/10">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-morphism border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">
                #{user.rank || 'N/A'}
              </div>
              <div className="text-xs text-muted-foreground">Current Rank</div>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">
                ${safeToLocaleString(user.totalSpent || user.amountSpent || 0)} spent
              </div>
              <div className="text-xs text-muted-foreground">Total Spent</div>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">
                {user.followers && typeof user.followers === 'number' ? user.followers.toLocaleString() : '0'}
              </div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-3 text-center">
              <div className="text-lg font-bold capitalize">
                {user.tier}
              </div>
              <div className="text-xs text-muted-foreground">Status Tier</div>
            </div>
          </div>
          
          {/* Bio and social links */}
          <div className="mt-6">
            {user.bio && (
              <div className="mb-4">
                <p className="text-sm">{user.bio}</p>
              </div>
            )}
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>Member since {memberSince}</span>
              
              {user.team && (
                <Badge className="ml-3 bg-gray-500/20" variant="outline">
                  Team {user.team}
                </Badge>
              )}
            </div>
            
            {user.socialLinks && Array.isArray(user.socialLinks) && user.socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {user.socialLinks.map((link) => (
                  <Button key={link.id} size="sm" variant="outline" asChild className="h-8">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <span>{link.platform}</span>
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBillboard;
