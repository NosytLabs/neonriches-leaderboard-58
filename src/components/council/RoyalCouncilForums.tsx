
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, MessageCircle, TrendingUp, Users, Pin, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { SocialLink } from '@/types/social-links';
import { ProfileBoost } from '@/types/profile-boost';
import { UserProfile } from '@/types/user';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorImage?: string;
  createdAt: string;
  likes: number;
  replies: number;
  isPinned?: boolean;
  isAnnouncement?: boolean;
  tags?: string[];
}

interface Thread {
  id: string;
  title: string;
  posts: Post[];
  createdAt: string;
  updatedAt: string;
  authorId: string;
  authorName: string;
  views: number;
  lastPostAt: string;
  lastPostAuthor: string;
  isPinned?: boolean;
  isLocked?: boolean;
  category: string;
}

const MOCK_THREADS: Thread[] = [
  {
    id: 'thread-1',
    title: 'Official Announcement: New Spending Throne Features',
    posts: [],
    createdAt: '2023-02-15T12:00:00Z',
    updatedAt: '2023-02-15T12:00:00Z',
    authorId: 'admin-1',
    authorName: 'RoyalAdministrator',
    views: 1342,
    lastPostAt: '2023-02-17T15:30:00Z',
    lastPostAuthor: 'LordCashington',
    isPinned: true,
    isLocked: false,
    category: 'announcements'
  },
  {
    id: 'thread-2',
    title: 'Spending Strategies for Rapid Rank Ascension',
    posts: [],
    createdAt: '2023-02-14T09:15:00Z',
    updatedAt: '2023-02-14T09:15:00Z',
    authorId: 'user-123',
    authorName: 'CountessWealth',
    views: 876,
    lastPostAt: '2023-02-17T10:20:00Z',
    lastPostAuthor: 'DukeSpender',
    isPinned: false,
    isLocked: false,
    category: 'strategies'
  },
  {
    id: 'thread-3',
    title: 'Petition: Seasonal Team Competition Rewards',
    posts: [],
    createdAt: '2023-02-13T14:30:00Z',
    updatedAt: '2023-02-13T14:30:00Z',
    authorId: 'user-456',
    authorName: 'BaronBankrupt',
    views: 512,
    lastPostAt: '2023-02-16T19:45:00Z',
    lastPostAuthor: 'ViscountVault',
    isPinned: false,
    isLocked: false,
    category: 'suggestions'
  },
  {
    id: 'thread-4',
    title: 'The Great Red vs Blue Debate - Which Team Reigns Supreme?',
    posts: [],
    createdAt: '2023-02-12T17:20:00Z',
    updatedAt: '2023-02-12T17:20:00Z',
    authorId: 'user-789',
    authorName: 'MarchionessMoney',
    views: 1024,
    lastPostAt: '2023-02-17T08:10:00Z',
    lastPostAuthor: 'PrincePayment',
    isPinned: false,
    isLocked: false,
    category: 'teams'
  },
  {
    id: 'thread-5',
    title: 'Royal Certificate Collection Showcase - Post Your Finest!',
    posts: [],
    createdAt: '2023-02-10T11:05:00Z',
    updatedAt: '2023-02-10T11:05:00Z',
    authorId: 'user-101',
    authorName: 'DuchessDiamonds',
    views: 742,
    lastPostAt: '2023-02-17T12:25:00Z',
    lastPostAuthor: 'EarlExpense',
    isPinned: false,
    isLocked: false,
    category: 'showcase'
  }
];

const MOCK_RECENT_POSTS: Post[] = [
  {
    id: 'post-1',
    title: 'New Spending Throne Features',
    content: 'I\'m absolutely thrilled with the new profile customization options! The gold border around my profile makes me feel like true royalty. My spending has never felt so rewarding!',
    authorId: 'user-202',
    authorName: 'LordCashington',
    authorImage: '/avatars/lord-cashington.jpg',
    createdAt: '2023-02-17T15:30:00Z',
    likes: 24,
    replies: 7
  },
  {
    id: 'post-2',
    title: 'Spending Strategies Discussion',
    content: 'Has anyone tried the "Royal Flush" strategy? I\'ve been allocating 20% of my spending to team contributions and seeing great results in both personal rank and team standing.',
    authorId: 'user-303',
    authorName: 'DukeSpender',
    authorImage: '/avatars/duke-spender.jpg',
    createdAt: '2023-02-17T10:20:00Z',
    likes: 18,
    replies: 12
  },
  {
    id: 'post-3',
    title: 'Team Competition Rewards',
    content: 'The seasonal team competitions need better rewards! I suggest exclusive team cosmetics that can only be earned through team victories. Who agrees?',
    authorId: 'user-404',
    authorName: 'ViscountVault',
    authorImage: '/avatars/viscount-vault.jpg',
    createdAt: '2023-02-16T19:45:00Z',
    likes: 42,
    replies: 15,
    isPinned: true
  }
];

const RoyalCouncilForums: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredThreads = MOCK_THREADS.filter(thread => 
    thread.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleNewThread = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to start a new thread.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Feature Coming Soon",
      description: "The ability to create new threads will be available in the next update!",
      variant: "default"
    });
  };
  
  const handleReply = (threadId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to reply to this thread.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Feature Coming Soon",
      description: "The ability to reply to threads will be available in the next update!",
      variant: "default"
    });
  };
  
  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (e) {
      return 'recently';
    }
  };
  
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'announcements':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/20">Announcement</Badge>;
      case 'strategies':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/20">Strategy</Badge>;
      case 'suggestions':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/20">Suggestion</Badge>;
      case 'teams':
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/20">Teams</Badge>;
      case 'showcase':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/20">Showcase</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/20">Discussion</Badge>;
    }
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Crown className="mr-2 h-6 w-6 text-royal-gold" />
            <CardTitle>Royal Council Forums</CardTitle>
          </div>
          <Button onClick={handleNewThread} className="bg-royal-purple hover:bg-royal-purple/90">
            Start New Thread
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Search threads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-input"
          />
        </div>
        
        <Tabs defaultValue="trending" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 glass-morphism border-white/10">
            <TabsTrigger value="trending" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Trending</span>
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Recent</span>
            </TabsTrigger>
            <TabsTrigger value="teams" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Teams</span>
            </TabsTrigger>
            <TabsTrigger value="announcements" className="flex items-center gap-1">
              <Pin className="h-4 w-4" />
              <span className="hidden sm:inline">Announcements</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending" className="mt-4">
            <ScrollArea className="h-[500px] pr-3">
              <div className="space-y-4">
                {filteredThreads.map((thread) => (
                  <div 
                    key={thread.id} 
                    className="p-4 rounded-lg glass-morphism border-white/10 hover:border-royal-gold/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {thread.isPinned && (
                            <Pin className="h-4 w-4 text-royal-gold" />
                          )}
                          <h3 className="font-semibold">{thread.title}</h3>
                        </div>
                        <div className="flex items-center text-sm text-white/60">
                          <span>By {thread.authorName}</span>
                          <span className="mx-2">•</span>
                          <span>{formatDate(thread.createdAt)}</span>
                        </div>
                      </div>
                      {getCategoryBadge(thread.category)}
                    </div>
                    
                    <div className="flex justify-between items-center mt-3 text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1 text-white/60" />
                          <span>{thread.posts.length || 0} posts</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-white/60" />
                          <span>{thread.views} views</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="glass-morphism border-white/10 hover:bg-white/5"
                        onClick={() => handleReply(thread.id)}
                      >
                        View Thread
                      </Button>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-white/10 text-sm text-white/60 flex items-center">
                      <span>Last post by {thread.lastPostAuthor}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(thread.lastPostAt)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="recent" className="mt-4">
            <ScrollArea className="h-[500px] pr-3">
              <div className="space-y-4">
                {MOCK_RECENT_POSTS.map((post) => (
                  <div 
                    key={post.id} 
                    className="p-4 rounded-lg glass-morphism border-white/10 hover:border-royal-gold/30 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="h-10 w-10 border-2 border-white/20">
                        <AvatarImage src={post.authorImage} alt={post.authorName} />
                        <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{post.authorName}</span>
                            <span className="text-sm text-white/60">{formatDate(post.createdAt)}</span>
                          </div>
                          {post.isPinned && (
                            <Pin className="h-4 w-4 text-royal-gold" />
                          )}
                        </div>
                        <h4 className="font-medium mt-1">{post.title}</h4>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-3">{post.content}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 h-7">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 h-7">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.replies}</span>
                        </Button>
                      </div>
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="glass-morphism border-white/10 hover:bg-white/5"
                        onClick={() => handleReply(post.id)}
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="teams" className="mt-4">
            <div className="flex items-center justify-center p-10">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-white/40" />
                <h3 className="text-lg font-medium mb-2">Team Discussions</h3>
                <p className="text-white/60 max-w-md">
                  Team-specific discussions will appear here once you join a team. 
                  Visit the Teams section to join a team and participate in team discussions.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="announcements" className="mt-4">
            <ScrollArea className="h-[500px] pr-3">
              <div className="space-y-4">
                {filteredThreads
                  .filter(thread => thread.category === 'announcements')
                  .map((thread) => (
                    <div 
                      key={thread.id} 
                      className="p-4 rounded-lg glass-morphism border-royal-crimson/20 hover:border-royal-crimson/40 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Crown className="h-4 w-4 text-royal-gold" />
                            <h3 className="font-semibold">{thread.title}</h3>
                          </div>
                          <div className="flex items-center text-sm text-white/60">
                            <span>By {thread.authorName}</span>
                            <span className="mx-2">•</span>
                            <span>{formatDate(thread.createdAt)}</span>
                          </div>
                        </div>
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/20">Official</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3 text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-royal-gold" />
                            <span>Important</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-white/60" />
                            <span>{thread.views} views</span>
                          </div>
                        </div>
                        
                        <Button 
                          size="sm" 
                          className="bg-royal-crimson hover:bg-royal-crimson/90"
                          onClick={() => handleReply(thread.id)}
                        >
                          View Announcement
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RoyalCouncilForums;
