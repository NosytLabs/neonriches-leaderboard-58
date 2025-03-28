
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Crown, MessageSquare, PenSquare, ThumbsUp, Reply, Flag, ThumbsDown, Pin, Bookmark, Filter, TrendingUp, Calendar, Zap, Users } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { format, formatDistanceToNow } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorImage?: string;
  authorRank?: number;
  authorTier?: string;
  createdAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  views: number;
  commentCount: number;
  isPinned?: boolean;
  isAnnouncement?: boolean;
  isResolved?: boolean;
}

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  postCount: number;
  color: string;
}

const categories: ForumCategory[] = [
  {
    id: 'announcements',
    name: 'Announcements',
    description: 'Official announcements from the royal court',
    icon: <Crown className="h-4 w-4" />,
    postCount: 12,
    color: 'bg-royal-gold/20 text-royal-gold'
  },
  {
    id: 'suggestions',
    name: 'Suggestions',
    description: 'Propose new features and improvements',
    icon: <PenSquare className="h-4 w-4" />,
    postCount: 47,
    color: 'bg-royal-crimson/20 text-royal-crimson'
  },
  {
    id: 'discussions',
    name: 'Discussions',
    description: 'General discussions about the platform',
    icon: <MessageSquare className="h-4 w-4" />,
    postCount: 93,
    color: 'bg-royal-navy/20 text-royal-navy'
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Discussions about current and upcoming events',
    icon: <Calendar className="h-4 w-4" />,
    postCount: 28,
    color: 'bg-royal-purple/20 text-royal-purple-bright'
  },
  {
    id: 'strategies',
    name: 'Strategies',
    description: 'Share and discuss spending strategies',
    icon: <TrendingUp className="h-4 w-4" />,
    postCount: 51,
    color: 'bg-emerald-600/20 text-emerald-400'
  },
  {
    id: 'teams',
    name: 'Team Coordination',
    description: 'Coordinate activities with your team',
    icon: <Users className="h-4 w-4" />,
    postCount: 76,
    color: 'bg-amber-600/20 text-amber-400'
  }
];

// Mock posts data
const mockPosts: ForumPost[] = [
  {
    id: 'post1',
    title: 'New Profile Cosmetics Coming Soon!',
    content: 'We\'re excited to announce a new set of premium profile cosmetics coming next week. Stay tuned for animated backgrounds, interactive elements, and more!',
    authorId: 'admin1',
    authorName: 'Royal Steward',
    authorImage: '/images/avatars/admin.jpg',
    authorRank: 1,
    authorTier: 'admin',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'announcements',
    tags: ['cosmetics', 'profiles', 'premium'],
    upvotes: 42,
    downvotes: 2,
    views: 230,
    commentCount: 15,
    isPinned: true,
    isAnnouncement: true
  },
  {
    id: 'post2',
    title: 'Suggestion: Team Weekly Competitions',
    content: 'What if we had weekly mini-competitions between teams with bonus rewards? This could encourage more team coordination and friendly rivalry.',
    authorId: 'user1',
    authorName: 'Strategic Spender',
    authorImage: '/images/avatars/user1.jpg',
    authorRank: 8,
    authorTier: 'whale',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'suggestions',
    tags: ['teams', 'competition', 'rewards'],
    upvotes: 28,
    downvotes: 3,
    views: 114,
    commentCount: 9
  },
  {
    id: 'post3',
    title: 'How to maximize visibility with limited spending?',
    content: 'I\'m trying to make the most of my budget. What are the best cosmetics or features to invest in for maximum profile visibility?',
    authorId: 'user2',
    authorName: 'Budget Royal',
    authorImage: '/images/avatars/user2.jpg',
    authorRank: 76,
    authorTier: 'crab',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'strategies',
    tags: ['budget', 'visibility', 'tips'],
    upvotes: 15,
    downvotes: 0,
    views: 87,
    commentCount: 12
  },
  {
    id: 'post4',
    title: 'Red Team Coordination for Weekly Challenge',
    content: 'Hey Red Team! Let\'s coordinate our spending for this week\'s challenge. I suggest we focus our efforts on Friday evening for maximum impact.',
    authorId: 'user3',
    authorName: 'Red Captain',
    authorImage: '/images/avatars/user3.jpg',
    authorRank: 12,
    authorTier: 'dolphin',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    category: 'teams',
    tags: ['red team', 'coordination', 'challenge'],
    upvotes: 18,
    downvotes: 1,
    views: 64,
    commentCount: 7
  },
  {
    id: 'post5',
    title: 'Upcoming Mockery Festival Event',
    content: 'Get ready for our biggest mockery event yet! Double effects, half price, and special limited-time mockery actions will be available.',
    authorId: 'admin2',
    authorName: 'Event Manager',
    authorImage: '/images/avatars/admin2.jpg',
    authorRank: 3,
    authorTier: 'admin',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'events',
    tags: ['mockery', 'festival', 'limited-time'],
    upvotes: 35,
    downvotes: 4,
    views: 192,
    commentCount: 22,
    isPinned: true
  }
];

interface RoyalCouncilForumsProps {
  user: UserProfile | null;
}

const RoyalCouncilForums: React.FC<RoyalCouncilForumsProps> = ({ user }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('');
  const [newPostTags, setNewPostTags] = useState('');
  
  const { toast } = useToast();
  
  const filteredPosts = mockPosts.filter(post => {
    // Filter by category
    if (activeCategory !== 'all' && post.category !== activeCategory) return false;
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.authorName.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return true;
  });
  
  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    // Always show pinned posts first
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    
    // Then sort by the selected criterion
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'popular':
        return b.upvotes - a.upvotes;
      case 'discussed':
        return b.commentCount - a.commentCount;
      default:
        return 0;
    }
  });
  
  const resetNewPostForm = () => {
    setNewPostTitle('');
    setNewPostContent('');
    setNewPostCategory('');
    setNewPostTags('');
    setIsNewPostOpen(false);
  };
  
  const handleCreatePost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim() || !newPostCategory) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally call an API to create the post
    toast({
      title: "Post Created",
      description: "Your post has been published to the Royal Council forums.",
    });
    
    resetNewPostForm();
  };
  
  const formatTimeAgo = (date: string) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };
  
  const handleVote = (postId: string, isUpvote: boolean) => {
    toast({
      title: isUpvote ? "Upvoted" : "Downvoted",
      description: `You have ${isUpvote ? 'upvoted' : 'downvoted'} this post.`,
      variant: isUpvote ? "default" : "destructive"
    });
  };
  
  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'admin':
        return 'bg-royal-gold/20 text-royal-gold';
      case 'whale':
        return 'bg-royal-purple/20 text-royal-purple-bright';
      case 'shark':
        return 'bg-royal-crimson/20 text-royal-crimson';
      case 'dolphin':
        return 'bg-royal-navy/20 text-royal-navy';
      case 'fish':
        return 'bg-blue-500/20 text-blue-400';
      case 'octopus':
        return 'bg-purple-500/20 text-purple-400';
      case 'crab':
        return 'bg-amber-600/20 text-amber-500';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  
  if (!user) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Council Forums
          </CardTitle>
          <CardDescription>
            Discuss strategies, suggest features, and coordinate with your team
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="text-center">
            <p className="text-white/70 mb-4">Please log in to access the Royal Council forums.</p>
            <Button>Log In</Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-royal-gold" />
              Royal Council Forums
            </CardTitle>
            <CardDescription>
              Discuss strategies, suggest features, and coordinate with your team
            </CardDescription>
          </div>
          <Button 
            onClick={() => setIsNewPostOpen(true)}
            className="sm:self-start"
          >
            <PenSquare className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {/* Search and filter */}
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <div className="relative flex-1">
              <Input
                placeholder="Search forums..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-morphism border-white/10 pl-9"
              />
              <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="discussed">Most Discussed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Categories and posts */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <ScrollArea className="w-full">
              <TabsList className="inline-flex w-auto mb-6 bg-transparent">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  All Categories
                </TabsTrigger>
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className={`data-[state=active]:${category.color}`}
                  >
                    <div className="flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
            
            <TabsContent value="all" className="m-0">
              <div className="space-y-4">
                {sortedPosts.length > 0 ? (
                  sortedPosts.map(post => (
                    <PostCard 
                      key={post.id} 
                      post={post} 
                      onVote={handleVote}
                      categoryInfo={categories.find(c => c.id === post.category)}
                    />
                  ))
                ) : (
                  <div className="text-center py-10 bg-black/20 rounded-lg">
                    <MessageSquare className="h-10 w-10 mx-auto text-white/20 mb-2" />
                    <p className="text-white/60">No posts found. Be the first to start a discussion!</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="m-0">
                <div className="space-y-4">
                  {sortedPosts.length > 0 ? (
                    sortedPosts.map(post => (
                      <PostCard 
                        key={post.id} 
                        post={post} 
                        onVote={handleVote}
                        categoryInfo={category}
                      />
                    ))
                  ) : (
                    <div className="text-center py-10 bg-black/20 rounded-lg">
                      <MessageSquare className="h-10 w-10 mx-auto text-white/20 mb-2" />
                      <p className="text-white/60">No posts found in this category.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </CardContent>
      
      {/* New Post Dialog */}
      <Dialog open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
        <DialogContent className="sm:max-w-[525px] glass-morphism">
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="title"
                placeholder="Post title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                className="glass-morphism border-white/10"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Select value={newPostCategory} onValueChange={setNewPostCategory}>
                <SelectTrigger id="category" className="glass-morphism border-white/10">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center">
                        {category.icon}
                        <span className="ml-2">{category.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Content
              </label>
              <div className="glass-morphism border border-white/10 rounded-md">
                <textarea
                  id="content"
                  rows={6}
                  placeholder="Write your post content here..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="w-full p-3 bg-transparent text-white/90 outline-none resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="tags" className="text-sm font-medium">
                Tags (comma separated)
              </label>
              <Input
                id="tags"
                placeholder="e.g., strategy, team, suggestion"
                value={newPostTags}
                onChange={(e) => setNewPostTags(e.target.value)}
                className="glass-morphism border-white/10"
              />
            </div>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={resetNewPostForm}>
              Cancel
            </Button>
            <Button onClick={handleCreatePost}>
              <PenSquare className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

interface PostCardProps {
  post: ForumPost;
  onVote: (postId: string, isUpvote: boolean) => void;
  categoryInfo?: ForumCategory;
}

const PostCard: React.FC<PostCardProps> = ({ post, onVote, categoryInfo }) => {
  return (
    <div className={`p-4 rounded-lg glass-morphism border ${post.isPinned ? 'border-royal-gold/30' : 'border-white/10'}`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold flex items-center">
            {post.isPinned && (
              <Pin className="h-3.5 w-3.5 text-royal-gold mr-1.5" />
            )}
            {post.title}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-white/60 mt-1">
            <span>by</span>
            <div className="flex items-center">
              <Avatar className="h-4 w-4 mr-1">
                <AvatarImage src={post.authorImage} />
                <AvatarFallback>{post.authorName[0]}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{post.authorName}</span>
            </div>
            {post.authorTier && (
              <Badge variant="outline" className={`px-1.5 py-0 h-4 text-[0.6rem] ${getTierBadgeColor(post.authorTier)}`}>
                {post.authorTier}
              </Badge>
            )}
            <span>•</span>
            <span>{formatTimeAgo(post.createdAt)}</span>
            
            {categoryInfo && (
              <>
                <span>•</span>
                <Badge 
                  variant="outline" 
                  className={`px-1.5 py-0 h-4 text-[0.6rem] ${categoryInfo.color}`}
                >
                  {categoryInfo.name}
                </Badge>
              </>
            )}
            
            {post.isAnnouncement && (
              <Badge className="bg-royal-crimson text-white px-1.5 py-0 h-4 text-[0.6rem]">
                Announcement
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex space-x-1">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 rounded-full hover:bg-royal-gold/10 hover:text-royal-gold"
            onClick={() => console.log('Bookmark post')}
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <p className="text-white/80 text-sm mt-2 mb-4 line-clamp-2">
        {post.content}
      </p>
      
      <div className="flex flex-wrap gap-1 mt-1 mb-3">
        {post.tags.map((tag, i) => (
          <Badge key={i} variant="outline" className="bg-black/30 text-white/70">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex justify-between items-center text-xs text-white/60 border-t border-white/10 pt-3">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-6 w-6 rounded-full hover:bg-green-800/20 hover:text-green-400 mr-1"
              onClick={() => onVote(post.id, true)}
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </Button>
            <span>{post.upvotes}</span>
          </div>
          
          <div className="flex items-center">
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-6 w-6 rounded-full hover:bg-red-800/20 hover:text-red-400 mr-1"
              onClick={() => onVote(post.id, false)}
            >
              <ThumbsDown className="h-3.5 w-3.5" />
            </Button>
            <span>{post.downvotes}</span>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <div className="flex items-center">
            <MessageSquare className="h-3.5 w-3.5 mr-1" />
            <span>{post.commentCount} comments</span>
          </div>
          
          <div className="flex items-center">
            <Zap className="h-3.5 w-3.5 mr-1" />
            <span>{post.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalCouncilForums;
