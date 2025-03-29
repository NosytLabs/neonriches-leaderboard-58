
import React, { useState } from 'react';
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle, 
  CardFooter 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Scroll, Crown, MessageSquare, ThumbsUp, Flag, Clock,
  User, Shield, CheckCircle 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/auth';
import { UserProfile, UserTier } from '@/types/user';
import { formatDate } from '@/utils/formatters';

// Forum post type
interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: { id: string; username: string; tier: UserTier };
  createdAt: string;
  votes: number;
  replies: number;
  category: string;
  tags: string[];
  isPinned?: boolean;
  isLocked?: boolean;
  isAnswered?: boolean;
}

// Forum category
interface ForumCategory {
  id: string;
  name: string;
  description: string;
  postsCount: number;
  color: string;
  icon: React.ReactNode;
}

// Mock forum posts
const mockPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Official Welcome to the Royal Council Forums',
    content: 'Welcome to the exclusive Royal Council Forums, where the true elite of SpendThrone gather to discuss matters of importance.',
    author: {
      id: 'admin1',
      username: 'RoyalSteward',
      tier: 'royal' as UserTier
    },
    createdAt: '2023-04-15T10:00:00Z',
    votes: 124,
    replies: 45,
    category: 'announcements',
    tags: ['welcome', 'rules', 'official'],
    isPinned: true
  },
  {
    id: '2',
    title: 'Strategic Spending: Maximizing Your Rank',
    content: 'A discussion on the most effective spending strategies to climb the leaderboard ranks with minimal investment.',
    author: {
      id: 'user1',
      username: 'GoldDigger',
      tier: 'gold' as UserTier
    },
    createdAt: '2023-04-18T14:30:00Z',
    votes: 89,
    replies: 37,
    category: 'strategies',
    tags: ['spending', 'optimization', 'leaderboard'],
    isAnswered: true
  },
  {
    id: '3',
    title: 'Petition: More Premium Benefits for Council Members',
    content: 'I believe we deserve more exclusive benefits for our generous contributions to the throne.',
    author: {
      id: 'user2',
      username: 'DiamondHands',
      tier: 'diamond' as UserTier
    },
    createdAt: '2023-04-20T09:15:00Z',
    votes: 156,
    replies: 62,
    category: 'suggestions',
    tags: ['premium', 'benefits', 'exclusive']
  }
];

// Mock council members for right sidebar
const mockCouncilMembers = [
  {
    id: 'member1',
    username: 'TheHighestBidder',
    displayName: 'The Highest Bidder',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=member1',
    tier: 'premium' as UserTier,
    rank: 1,
    walletBalance: 5000,
    joinDate: '2023-01-10T00:00:00Z'
  },
  {
    id: 'member2',
    username: 'LordOfCoins',
    displayName: 'Lord Of Coins',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=member2',
    tier: 'premium' as UserTier,
    rank: 2,
    walletBalance: 4500,
    joinDate: '2023-01-15T00:00:00Z'
  },
  {
    id: 'member3',
    username: 'DuchessOfDiamonds',
    displayName: 'Duchess Of Diamonds',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=member3',
    tier: 'premium' as UserTier,
    rank: 3,
    walletBalance: 4200,
    joinDate: '2023-01-20T00:00:00Z'
  }
];

// Convert mock members to UserProfile (with required fields)
const mockMembersAsProfiles = mockCouncilMembers.map(member => ({
  ...member,
  id: member.id,
  username: member.username,
  displayName: member.displayName,
  team: null,
  totalSpent: 10000, // Adding required fields
  joinedAt: member.joinDate,
  tier: member.tier,
} as UserProfile));

// Forum categories
const forumCategories: ForumCategory[] = [
  {
    id: 'announcements',
    name: 'Royal Proclamations',
    description: 'Official announcements from the throne',
    postsCount: 12,
    color: 'from-purple-500 to-purple-800',
    icon: <Crown className="h-5 w-5 text-purple-400" />
  },
  {
    id: 'strategies',
    name: 'Strategic Chamber',
    description: 'Discussions on optimization and strategies',
    postsCount: 45,
    color: 'from-blue-500 to-blue-800',
    icon: <Shield className="h-5 w-5 text-blue-400" />
  },
  {
    id: 'suggestions',
    name: 'Council Suggestions',
    description: 'Ideas and feedback for the kingdom',
    postsCount: 78,
    color: 'from-green-500 to-green-800',
    icon: <MessageSquare className="h-5 w-5 text-green-400" />
  }
];

const RoyalCouncilForums: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  
  const isCouncilMember = user && ['gold', 'platinum', 'diamond', 'royal', 'premium'].includes(user.tier as string);
  
  const getPostStatusBadge = (post: ForumPost) => {
    if (post.isPinned) {
      return (
        <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30">
          <Scroll className="h-3 w-3 mr-1" />
          Pinned
        </Badge>
      );
    }
    
    if (post.isLocked) {
      return (
        <Badge className="bg-red-500/20 text-red-300 border border-red-500/30">
          <Shield className="h-3 w-3 mr-1" />
          Locked
        </Badge>
      );
    }
    
    if (post.isAnswered) {
      return (
        <Badge className="bg-green-500/20 text-green-300 border border-green-500/30">
          <CheckCircle className="h-3 w-3 mr-1" />
          Answered
        </Badge>
      );
    }
    
    return null;
  };
  
  const getCategoryBadge = (categoryId: string) => {
    const category = forumCategories.find(c => c.id === categoryId);
    
    if (!category) return null;
    
    return (
      <Badge 
        className={`bg-gradient-to-r ${category.color} border-none py-0.5 text-white`}
      >
        {category.icon}
        <span className="ml-1">{category.name}</span>
      </Badge>
    );
  };
  
  const filteredPosts = mockPosts.filter(post => {
    if (!searchQuery) return true;
    
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Main content */}
      <div className="lg:col-span-3 space-y-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                  Royal Council Forums
                </CardTitle>
                <CardDescription>
                  Exclusive discussions for the kingdom's high spenders
                </CardDescription>
              </div>
              
              <Input 
                placeholder="Search discussions..." 
                className="max-w-xs bg-black/20 border-white/10"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Tabs defaultValue="popular" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="glass-morphism border-white/10">
                <TabsTrigger value="popular">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Popular
                </TabsTrigger>
                <TabsTrigger value="recent">
                  <Clock className="h-4 w-4 mr-1" />
                  Recent
                </TabsTrigger>
                <TabsTrigger value="categories">
                  <Scroll className="h-4 w-4 mr-1" />
                  Categories
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="popular" className="mt-4">
                <div className="space-y-4">
                  {filteredPosts.sort((a, b) => b.votes - a.votes).map(post => (
                    <ForumPostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="recent" className="mt-4">
                <div className="space-y-4">
                  {filteredPosts.sort((a, b) => 
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                  ).map(post => (
                    <ForumPostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="categories" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {forumCategories.map(category => (
                    <Card key={category.id} className="glass-morphism border-white/10 overflow-hidden">
                      <div className={`h-1 w-full bg-gradient-to-r ${category.color}`}></div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center">
                          {category.icon}
                          <CardTitle className="text-lg ml-2">{category.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-sm text-white/70 mb-2">{category.description}</p>
                        <div className="flex justify-between text-xs text-white/60">
                          <span>{category.postsCount} posts</span>
                          <Button variant="link" size="sm" className="p-0 h-auto">
                            View All
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {isCouncilMember ? (
              <div>
                <h3 className="text-lg font-medium mb-3">Create New Discussion</h3>
                <Card className="glass-morphism border-white/10">
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <Input 
                        placeholder="Discussion title" 
                        className="bg-black/20 border-white/10"
                      />
                      <Textarea 
                        placeholder="Share your thoughts with the Royal Council..." 
                        className="min-h-[120px] bg-black/20 border-white/10"
                      />
                      <div className="flex flex-wrap gap-2">
                        {forumCategories.map(category => (
                          <Badge 
                            key={category.id}
                            className="bg-black/30 hover:bg-black/40 cursor-pointer"
                          >
                            {category.name}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                          Post Discussion
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="glass-morphism border-royal-gold/20 bg-gradient-to-br from-black/40 to-royal-gold/10">
                <CardContent className="p-4 text-center">
                  <Crown className="h-8 w-8 text-royal-gold mx-auto mb-2 opacity-70" />
                  <h3 className="text-lg font-medium text-royal-gold mb-1">
                    Premium Members Only
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    Upgrade your tier to unlock exclusive forum posting privileges
                  </p>
                  <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                    Upgrade Now
                  </Button>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Sidebar */}
      <div className="space-y-6">
        {/* Council Members */}
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Crown className="h-4 w-4 mr-2 text-royal-gold" />
              Council Members
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockMembersAsProfiles.slice(0, 3).map((member, idx) => (
              <div key={member.id} className="flex items-center">
                <div className="flex-shrink-0 relative">
                  <Avatar>
                    <AvatarImage src={member.profileImage} alt={member.username} />
                    <AvatarFallback className="bg-gradient-to-br from-royal-gold/50 to-royal-gold/20">
                      {member.username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black flex items-center justify-center text-[10px] font-semibold text-royal-gold border border-royal-gold/50">
                    {idx + 1}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="font-medium">{member.displayName}</div>
                  <div className="text-xs text-white/60">@{member.username}</div>
                </div>
              </div>
            ))}
            
            <Button variant="outline" size="sm" className="w-full glass-morphism">
              <User className="h-4 w-4 mr-1.5" />
              View All Members
            </Button>
          </CardContent>
        </Card>
        
        {/* Forum Stats */}
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Forum Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Total Discussions:</span>
                <span className="font-medium">135</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Total Posts:</span>
                <span className="font-medium">1,246</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Active Members:</span>
                <span className="font-medium">42</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Newest Member:</span>
                <span className="font-medium text-royal-gold">GoldenSpender</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Forum Rules */}
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Scroll className="h-4 w-4 mr-2 text-royal-gold" />
              Council Etiquette
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 text-royal-gold">1.</div>
                <div className="text-white/80">Respect fellow members of the Royal Council.</div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 text-royal-gold">2.</div>
                <div className="text-white/80">Discussions should remain civil and constructive.</div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 text-royal-gold">3.</div>
                <div className="text-white/80">No solicitation of off-platform transactions.</div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 text-royal-gold">4.</div>
                <div className="text-white/80">Council decisions are binding and final.</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Forum post card component
const ForumPostCard: React.FC<{ post: ForumPost }> = ({ post }) => {
  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-royal-gold/50 to-royal-gold/20">
                {post.author.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-lg mb-1">{post.title}</h3>
                
                <div className="flex items-center text-xs text-white/60 mb-2">
                  <span>{post.author.username}</span>
                  <span className="mx-1">•</span>
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>
              
              {getPostStatusBadge(post)}
            </div>
            
            <p className="text-white/80 text-sm mb-3 line-clamp-2">{post.content}</p>
            
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center text-xs">
                  <ThumbsUp className="h-3.5 w-3.5 mr-1 text-royal-gold" />
                  {post.votes}
                </span>
                <span className="flex items-center text-xs">
                  <MessageSquare className="h-3.5 w-3.5 mr-1 text-royal-gold" />
                  {post.replies}
                </span>
                <div className="hidden sm:block">
                  {getCategoryBadge(post.category)}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-[10px] h-5 px-1.5 bg-black/30">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalCouncilForums;
