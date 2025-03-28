import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import { formatTimeFromNow } from '@/utils/timeUtils';
import { getTierBadgeColor } from '@/utils/tierUtils';
import { Badge } from '@/components/ui/badge';
import {
  MessageSquare,
  Send,
  ChevronRight,
  Users,
  Shield,
  Crown,
  Heart,
  MessageCircle,
  MoreHorizontal,
  AlertTriangle
} from 'lucide-react';
import { UserProfile } from '@/types/user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: UserProfile;
  createdAt: string;
  likes: number;
  comments: ForumComment[];
}

interface ForumComment {
  id: string;
  author: UserProfile;
  content: string;
  createdAt: string;
  likes: number;
}

const mockPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Royal Spending Habits',
    content: 'What are your favorite ways to spend your royal treasury?',
    author: {
      id: 'user1',
      username: 'RoyalSpender1',
      displayName: 'Lord Goldsworth',
      profileImage: '/images/avatars/avatar-1.jpg',
      tier: 'royal',
      rank: 5,
      walletBalance: 1200,
      joinDate: '2023-01-15T12:00:00Z'
    } as UserProfile,
    createdAt: '2024-01-20T10:00:00Z',
    likes: 42,
    comments: [
      {
        id: 'c1',
        author: {
          id: 'user2',
          username: 'LuxuryLover',
          displayName: 'Duchess Diamond',
          profileImage: '/images/avatars/avatar-2.jpg',
          tier: 'premium',
          rank: 12,
          walletBalance: 850,
          joinDate: '2023-03-22T14:30:00Z'
        } as UserProfile,
        content: 'I love buying limited edition cosmetics!',
        createdAt: '2024-01-20T11:15:00Z',
        likes: 8
      }
    ]
  },
  {
    id: '2',
    title: 'Team Challenges and Rewards',
    content: 'What kind of team challenges would you like to see?',
    author: {
      id: 'user3',
      username: 'TeamPlayer',
      displayName: 'Sir Knightly',
      profileImage: '/images/avatars/avatar-3.jpg',
      tier: 'premium',
      rank: 25,
      walletBalance: 600,
      joinDate: '2023-05-10T09:45:00Z'
    } as UserProfile,
    createdAt: '2024-01-18T15:30:00Z',
    likes: 28,
    comments: []
  }
];

const RoyalCouncilForums = () => {
  const [posts, setPosts] = useState<ForumPost[]>(mockPosts);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const { user } = useAuth();
  const { toast } = useToast();
  
  const handleCreatePost = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to create a post.",
        variant: "destructive"
      });
      return;
    }
    
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      toast({
        title: "Missing Content",
        description: "Please enter both a title and content for your post.",
        variant: "destructive"
      });
      return;
    }
    
    const newPost: ForumPost = {
      id: Date.now().toString(),
      title: newPostTitle,
      content: newPostContent,
      author: user,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: []
    };
    
    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    
    toast({
      title: "Post Created",
      description: "Your post has been added to the forum.",
    });
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-royal-gold" />
          Royal Council Forums
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {user && (
          <div className="glass-morphism border-white/10 p-4 rounded-lg space-y-3">
            <h3 className="text-lg font-medium">Create New Post</h3>
            <Input
              type="text"
              placeholder="Post Title"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              className="glass-morphism border-white/10"
            />
            <Input
              placeholder="Post Content"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className="glass-morphism border-white/10"
            />
            <Button onClick={handleCreatePost} className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black">
              Create Post
            </Button>
          </div>
        )}
        
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="glass-morphism border-white/10">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Report Post
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        View Author Profile
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={post.author.profileImage} alt={post.author.username} />
                    <AvatarFallback>{post.author.username.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">
                    {post.author.displayName || post.author.username}
                  </span>
                  <Badge variant="secondary" className={getTierBadgeColor(post.author.tier)}>
                    {post.author.tier}
                  </Badge>
                  <span className="ml-auto">{formatTimeFromNow(post.createdAt)}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    {post.likes} Likes
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {post.comments.length} Comments
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalCouncilForums;
