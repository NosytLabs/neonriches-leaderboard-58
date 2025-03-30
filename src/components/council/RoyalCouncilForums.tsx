
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  MessageCircle,
  Crown,
  Calendar,
  Tag,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Filter,
  Search,
  PlusCircle,
  BookOpen,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Award
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/types/user';
import Link from '@/components/ui/link';

// Helper functions for badge formatting
const getPostStatusBadge = (status: string) => {
  switch (status) {
    case 'open':
      return <Badge className="bg-green-500">Open</Badge>;
    case 'closed':
      return <Badge className="bg-gray-500">Closed</Badge>;
    case 'resolved':
      return <Badge className="bg-blue-500">Resolved</Badge>;
    case 'pinned':
      return <Badge className="bg-yellow-500">Pinned</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const getCategoryBadge = (category: string) => {
  switch (category) {
    case 'announcement':
      return <Badge className="bg-purple-500">Announcement</Badge>;
    case 'suggestion':
      return <Badge className="bg-blue-500">Suggestion</Badge>;
    case 'discussion':
      return <Badge className="bg-green-500">Discussion</Badge>;
    case 'question':
      return <Badge className="bg-yellow-500">Question</Badge>;
    case 'bug':
      return <Badge className="bg-red-500">Bug</Badge>;
    default:
      return <Badge>Other</Badge>;
  }
};

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: UserProfile;
  category: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  dislikes: number;
  flags: number;
  comments: ForumComment[];
}

interface ForumComment {
  id: string;
  author: UserProfile;
  content: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  flags: number;
}

// Create simplified mock data for testing
const mockUser: UserProfile = {
  id: 'user-1',
  username: 'RoyalKnight',
  displayName: 'Sir Reginald',
  profileImage: 'https://i.pravatar.cc/150?img=7',
  email: 'reginald@example.com',
  joinedAt: new Date().toISOString(),
  tier: 'royal',
  team: 'red',
  rank: 15,
  walletBalance: 500,
  amountSpent: 2500,
  totalSpent: 2500,
  followers: 120,
  following: 85,
  gender: 'male',
  profileViews: 520,
  profileClicks: 75,
  activeTitle: 'Knight of the Realm',
  cosmetics: {
    borders: ['gold-border', 'silver-border'],
    colors: ['royal-blue', 'crimson-red'],
    fonts: ['royal-font', 'classic-font'],
    emojis: ['crown', 'sword'],
    titles: ['Knight of the Realm', 'Lord of the Manor'],
    backgrounds: ['castle-bg', 'forest-bg'],
    effects: ['sparkles', 'fireflies'],
    badges: ['vip-badge', 'loyal-badge'],
  },
  spendStreak: 22,
  subscription: {
    id: 'sub-123',
    tier: 'royal',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    cancelAtPeriodEnd: false,
    price: 29.99,
    interval: 'month',
  },
  socialLinks: [
    { 
      id: '1',
      platform: 'twitter',
      url: 'https://twitter.com/RoyalKnight',
      username: 'RoyalKnight',
      isVerified: false,
      isPublic: true
    },
    { 
      id: '2',
      platform: 'instagram',
      url: 'https://instagram.com/RoyalKnight',
      username: 'RoyalKnight',
      isVerified: false,
      isPublic: true
    }
  ],
  profileBoosts: [
    { 
      id: 'boost-1',
      userId: 'user-1',
      effectId: 'profile-boost',
      duration: 7 * 24 * 60 * 60 * 1000,
      level: 3,
      isActive: true,
      type: 'profile',
      appliedBy: 'system'
    }
  ],
};

const mockPosts: ForumPost[] = [
  {
    id: 'post-1',
    title: 'New Royal Decree: Spending Limits',
    content: 'The King has announced new spending limits for all citizens. What are your thoughts?',
    author: mockUser,
    category: 'announcement',
    status: 'open',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    likes: 55,
    dislikes: 5,
    flags: 0,
    comments: [
      {
        id: 'comment-1',
        author: mockUser,
        content: 'I think it\'s a great idea! We need to control spending.',
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        likes: 12,
        dislikes: 1,
        flags: 0,
      },
    ],
  },
  {
    id: 'post-2',
    title: 'Suggestion: More Gold Emotes',
    content: 'I think we need more gold emotes. They are the best!',
    author: mockUser,
    category: 'suggestion',
    status: 'open',
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    likes: 32,
    dislikes: 2,
    flags: 0,
    comments: [],
  },
  {
    id: 'post-3',
    title: 'Discussion: Is the Economy Rigged?',
    content: 'Is the economy rigged in favor of the rich? Let\'s discuss.',
    author: mockUser,
    category: 'discussion',
    status: 'open',
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    likes: 48,
    dislikes: 8,
    flags: 1,
    comments: [],
  },
];

const RoyalCouncilForums = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <div className="flex items-center">
          <MessageCircle className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Council Forums</CardTitle>
        </div>
        <CardDescription>Discuss matters of the realm</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recent" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="glass-morphism border-white/10">
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock size={16} />
              <span>Recent</span>
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-2">
              <ThumbsUp size={16} />
              <span>Popular</span>
            </TabsTrigger>
            <TabsTrigger value="my-posts" className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>My Posts</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="Search forums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-morphism border-white/10 mr-2"
              />
              <Button variant="outline" size="icon" className="glass-morphism border-white/10">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>

          <TabsContent value="recent" className="mt-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="glass-morphism border-white/10 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <Avatar className="mr-3 h-8 w-8">
                      <AvatarImage src={post.author.profileImage} alt={post.author.displayName} />
                      <AvatarFallback>{post.author.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Link to={`/profile/${post.author.username}`} className="font-medium hover:underline">
                        {post.author.displayName}
                      </Link>
                      <div className="text-sm text-white/60">
                        {post.author.activeTitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getPostStatusBadge(post.status)}
                    {getCategoryBadge(post.category)}
                  </div>
                </div>
                <Link to={`/forums/${post.id}`} className="block hover:underline">
                  <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
                </Link>
                <p className="text-white/70">{post.content.substring(0, 100)}...</p>
                <div className="flex justify-between items-center mt-3">
                  <div className="text-sm text-white/60">
                    <Calendar className="mr-1 inline-block h-4 w-4" />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      {post.likes}
                    </div>
                    <div className="flex items-center">
                      <ThumbsDown className="mr-1 h-4 w-4" />
                      {post.dislikes}
                    </div>
                    <div className="flex items-center">
                      <Flag className="mr-1 h-4 w-4" />
                      {post.flags}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="popular" className="mt-4">
            <p>Popular posts content goes here.</p>
          </TabsContent>

          <TabsContent value="my-posts" className="mt-4">
            <p>My posts content goes here.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RoyalCouncilForums;
