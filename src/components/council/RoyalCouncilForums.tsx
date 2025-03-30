
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Crown, MessageSquare, Users, Sparkles, Clock, Calendar, User, Heart, ThumbsUp, ThumbsDown, Badge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { UserProfile, SocialLink, ProfileBoost } from '@/types/user';

interface RoyalCouncilForumsProps {
  user: UserProfile;
}

const RoyalCouncilForums: React.FC<RoyalCouncilForumsProps> = ({ user }) => {
  // Mock forum data
  const forumSections = [
    {
      id: 'general',
      name: 'General Discussion',
      description: 'Talk about anything related to SpendThrone',
      threads: 32,
      messages: 156,
      lastActive: '2 hours ago'
    },
    {
      id: 'strategy',
      name: 'Spending Strategy',
      description: 'Discuss spending tactics and rank optimization',
      threads: 28,
      messages: 203,
      lastActive: '35 minutes ago'
    },
    {
      id: 'teams',
      name: 'Team Tactics',
      description: 'Coordinate with your team members',
      threads: 45,
      messages: 312,
      lastActive: '1 hour ago'
    },
    {
      id: 'royal',
      name: 'Royal Court',
      description: 'Exclusive discussion for top 100 members',
      threads: 19,
      messages: 98,
      lastActive: '3 hours ago',
      restricted: true
    }
  ];
  
  const featuredUsers = [
    {
      id: '1',
      username: 'EliteSpender',
      displayName: 'Lord Moneybags',
      tier: 'royal',
      rank: 3,
      amountSpent: 15000,
      profileImage: 'https://i.pravatar.cc/100?img=1'
    },
    {
      id: '2',
      username: 'Golden_Throne',
      displayName: 'Master Goldcoins',
      tier: 'diamond',
      rank: 7,
      amountSpent: 12300,
      profileImage: 'https://i.pravatar.cc/100?img=2'
    },
    {
      id: '3',
      username: 'RoyalPurse',
      displayName: 'Spender Supreme',
      tier: 'royal',
      rank: 12,
      amountSpent: 9800,
      profileImage: 'https://i.pravatar.cc/100?img=3'
    }
  ];
  
  const recentThreads = [
    {
      id: '1',
      title: 'Strategies for breaking into the top 20',
      author: 'RankClimber',
      replies: 23,
      views: 145,
      lastReply: '1 hour ago',
      isHot: true
    },
    {
      id: '2',
      title: 'How team coordination can maximize visibility',
      author: 'TeamPlayer',
      replies: 17,
      views: 93,
      lastReply: '3 hours ago',
      isHot: false
    },
    {
      id: '3',
      title: 'Is spending more at once better than small consistent amounts?',
      author: 'StrategyGuru',
      replies: 42,
      views: 287,
      lastReply: '20 minutes ago',
      isHot: true
    }
  ];
  
  const announcements = [
    {
      id: '1',
      title: 'Team competition week starts Monday',
      content: 'Get ready for our biggest team event yet with double rewards and special recognition.',
      authorName: 'Royal Admin',
      postedAt: '1 day ago',
      isPinned: true
    },
    {
      id: '2',
      title: 'New profile features coming soon',
      content: 'We\'re adding exciting new ways to customize your profile and show off your status.',
      authorName: 'Royal Admin',
      postedAt: '3 days ago',
      isPinned: true
    }
  ];
  
  // Mock user forum profile
  const forumProfile = {
    joinDate: '2023-05-15',
    lastActive: '2023-08-21',
    posts: 37,
    reactions: 142,
    subscription: {
      id: 'sub_123',
      tier: 'premium',
      status: 'active',
      startDate: '2023-06-01',
      endDate: '2024-06-01',
      plan: 'yearly',
      interval: 'monthly',
      price: 19.99,
      features: ['Forum access', 'Private messaging', 'Signature'],
      paymentMethod: 'credit_card',
      autoRenew: true,
      cancelAtPeriodEnd: false
    },
    badges: ['early-supporter', 'top-contributor', 'team-leader'],
    socialLinks: [
      {
        platform: 'twitter',
        url: 'https://twitter.com/username',
        username: 'username',
        icon: 'twitter',
        id: 'twt1',
        isVerified: true,
        isPublic: true
      },
      {
        platform: 'discord',
        url: 'https://discord.gg/username',
        username: 'username#1234',
        icon: 'discord',
        id: 'dis1',
        isVerified: true,
        isPublic: true
      }
    ],
    profileBoosts: [
      {
        id: 'boost-1',
        effectId: 'spotlight',
        userId: user.id,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        type: 'visibility',
        strength: 3,
        level: 2,
        status: 'active',
        isActive: true,
        appliedBy: user.id
      }
    ]
  };
  
  const canAccessForums = () => {
    // In a real app, check membership status, tier, etc.
    return true;
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="h-5 w-5 mr-2 text-royal-gold" />
          Royal Council Forums
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="forums">
          <TabsList className="glass-morphism mb-6">
            <TabsTrigger value="forums" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Forums
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Members
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Forum Profile
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="forums">
            <div className="mb-6 glass-morphism border-white/10 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-royal-gold">Announcements</h3>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 text-royal-gold mr-2" />
                        <h4 className="font-medium">{announcement.title}</h4>
                      </div>
                      <Badge variant="outline" className="bg-royal-gold/10 border-royal-gold/20 text-royal-gold text-xs">
                        Pinned
                      </Badge>
                    </div>
                    <p className="mt-2 text-white/70 text-sm">{announcement.content}</p>
                    <div className="flex items-center mt-2 text-xs text-white/50">
                      <span>{announcement.authorName}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{announcement.postedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {forumSections.map((section) => (
                <div 
                  key={section.id} 
                  className={`glass-morphism border-white/10 p-4 rounded-lg ${
                    section.restricted ? 'opacity-80' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-bold">{section.name}</h3>
                        {section.restricted && (
                          <Badge className="ml-2 bg-royal-gold/20 border-royal-gold/30 text-royal-gold text-xs">
                            Restricted
                          </Badge>
                        )}
                      </div>
                      <p className="text-white/70 text-sm mt-1">{section.description}</p>
                    </div>
                    
                    <div className="text-right text-sm text-white/60">
                      <div>
                        <span className="font-medium">{section.threads}</span> Threads
                      </div>
                      <div>
                        <span className="font-medium">{section.messages}</span> Messages
                      </div>
                      <div className="text-xs mt-1">
                        <Clock className="inline h-3 w-3 mr-1" />
                        {section.lastActive}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button 
                      variant="outline"
                      className="text-sm"
                      disabled={section.restricted && (user?.rank || 999) > 100}
                    >
                      <MessageSquare className="h-3 w-3 mr-1" />
                      View Threads
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 glass-morphism border-white/10 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Recent Discussions</h3>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-4">
                  {recentThreads.map((thread) => (
                    <div key={thread.id} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">{thread.title}</h4>
                            {thread.isHot && (
                              <Badge className="ml-2 bg-red-500/20 border-red-500/30 text-red-400 text-xs">
                                Hot
                              </Badge>
                            )}
                          </div>
                          <div className="text-xs text-white/60 mt-1">
                            <span>by {thread.author}</span>
                          </div>
                        </div>
                        
                        <div className="text-right text-xs text-white/60">
                          <div>
                            <MessageSquare className="inline h-3 w-3 mr-1" />
                            {thread.replies} replies
                          </div>
                          <div>
                            <Users className="inline h-3 w-3 mr-1" />
                            {thread.views} views
                          </div>
                          <div className="mt-1">
                            <Clock className="inline h-3 w-3 mr-1" />
                            {thread.lastReply}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="members">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Featured Members</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredUsers.map((member) => (
                  <div 
                    key={member.id} 
                    className="glass-morphism border-white/10 p-4 rounded-lg flex flex-col items-center"
                  >
                    <Avatar className="h-16 w-16 mb-3">
                      <AvatarImage src={member.profileImage} alt={member.displayName} />
                      <AvatarFallback className="bg-royal-gold/20">
                        {member.displayName.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h4 className="font-bold">{member.displayName}</h4>
                    <p className="text-white/60 text-sm">@{member.username}</p>
                    
                    <div className="flex items-center mt-2 space-x-2">
                      <Badge className="bg-royal-gold/20 border-royal-gold/30 text-royal-gold text-xs">
                        #{member.rank}
                      </Badge>
                      <Badge className="bg-purple-500/20 border-purple-500/30 text-purple-400 text-xs capitalize">
                        {member.tier}
                      </Badge>
                    </div>
                    
                    <Button variant="outline" className="mt-4 text-xs w-full">
                      <User className="h-3 w-3 mr-1" />
                      View Profile
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Online Members</h3>
                <div className="text-sm text-white/70">
                  <Users className="inline h-4 w-4 mr-1" />
                  {Math.floor(Math.random() * 50) + 10} members online
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {[...Array(8)].map((_, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center glass-morphism border-white/10 px-3 py-2 rounded-lg"
                  >
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={`https://i.pravatar.cc/100?img=${idx + 4}`} />
                      <AvatarFallback className="text-xs">U{idx}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">User{idx + 1}</span>
                    <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <div className="glass-morphism border-white/10 p-4 rounded-lg mb-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={user.profileImage} alt={user.displayName} />
                      <AvatarFallback className="bg-royal-gold/20 text-lg">
                        {user.displayName?.substring(0, 2) || user.username.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-xl font-bold">{user.displayName || user.username}</h3>
                    <p className="text-white/60 text-sm">@{user.username}</p>
                    
                    {user.activeTitle && (
                      <Badge className="mt-2 bg-royal-gold/20 border-royal-gold/30 text-royal-gold">
                        {user.activeTitle}
                      </Badge>
                    )}
                    
                    <div className="flex items-center mt-4 space-x-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Heart className="h-3 w-3 mr-1" />
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-3">Forum Stats</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Join Date:</span>
                      <span>
                        <Calendar className="inline h-3 w-3 mr-1" />
                        {new Date(forumProfile.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Last Active:</span>
                      <span>
                        <Clock className="inline h-3 w-3 mr-1" />
                        {formatDistanceToNow(new Date(forumProfile.lastActive), { addSuffix: true })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Posts:</span>
                      <span>
                        <MessageSquare className="inline h-3 w-3 mr-1" />
                        {forumProfile.posts}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Reactions:</span>
                      <span>
                        <ThumbsUp className="inline h-3 w-3 mr-1" />
                        {forumProfile.reactions}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 space-y-6">
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-3">Forum Badges</h4>
                  <div className="flex flex-wrap gap-3">
                    {forumProfile.badges.map((badge, index) => (
                      <Badge 
                        key={index} 
                        className="bg-purple-500/20 border-purple-500/30 text-purple-400 px-3 py-1"
                      >
                        <Badge className="h-3 w-3 mr-1" />
                        {badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-3">Recent Activity</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-md">
                      <div className="flex items-start">
                        <MessageSquare className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">You replied to</span>
                            <span className="text-royal-gold ml-1">How to maximize spending impact?</span>
                          </p>
                          <p className="text-xs text-white/60 mt-1">
                            <Clock className="inline h-3 w-3 mr-1" />
                            2 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded-md">
                      <div className="flex items-start">
                        <ThumbsUp className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">You liked</span>
                            <span className="text-royal-gold ml-1">Team Red strategy discussion</span>
                          </p>
                          <p className="text-xs text-white/60 mt-1">
                            <Clock className="inline h-3 w-3 mr-1" />
                            1 day ago
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded-md">
                      <div className="flex items-start">
                        <MessageSquare className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">You created a new thread</span>
                            <span className="text-royal-gold ml-1">Tips for new spenders</span>
                          </p>
                          <p className="text-xs text-white/60 mt-1">
                            <Clock className="inline h-3 w-3 mr-1" />
                            3 days ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism border-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-3">Subscription Status</h4>
                  <div className="p-3 bg-white/5 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium capitalize">{forumProfile.subscription.plan} Plan</p>
                        <p className="text-sm text-white/60">
                          {forumProfile.subscription.status === 'active' ? 'Active' : 'Inactive'} - Renews {
                            forumProfile.subscription.autoRenew ? 'automatically' : 'manually'
                          }
                        </p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Active
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <h5 className="text-sm font-medium mb-2">Features Included:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {forumProfile.subscription.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Check className="h-3 w-3 mr-1 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {!canAccessForums() && (
          <div className="mt-6 glass-morphism border-white/10 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Access Restricted</h3>
            <p className="text-white/70 mb-4">
              Forum access is available to members with an active subscription.
            </p>
            <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
              Upgrade Membership
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoyalCouncilForums;
