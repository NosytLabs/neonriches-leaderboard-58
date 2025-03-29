
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserProfile } from '@/types/user';
import { MessageSquare, Heart, Flag, Crown, Gem, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  userId: string;
  username: string;
  profileImage?: string;
  tier?: string;
  team?: string;
  content: string;
  timestamp: string;
  likes: number;
  hasLiked?: boolean;
}

interface ProfileFeedProps {
  user: UserProfile;
}

const ProfileFeed: React.FC<ProfileFeedProps> = ({ user }) => {
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      userId: 'user1',
      username: 'Lord Goldenpurse',
      profileImage: '/throne-assets/avatars/noble-1.jpg',
      tier: 'gold',
      team: 'red',
      content: 'Your contributions to the realm's treasury are most impressive. I shall endeavor to outspend you in the coming fortnight!',
      timestamp: '2023-12-01T10:00:00Z',
      likes: 3,
      hasLiked: false
    },
    {
      id: '2',
      userId: 'user2',
      username: 'Duchess Diamondhand',
      profileImage: '/throne-assets/avatars/noble-2.jpg',
      tier: 'platinum',
      team: 'blue',
      content: 'I witnessed thy ascent on the leaderboard. Most impressive waste of real currency, good noble!',
      timestamp: '2023-12-02T14:30:00Z',
      likes: 5,
      hasLiked: true
    }
  ]);
  const [newComment, setNewComment] = useState('');
  
  const handlePostComment = () => {
    if (!currentUser) {
      toast({
        title: "Thou Art Not Authenticated",
        description: "Only recognized nobles may leave their mark in the royal court.",
        variant: "destructive"
      });
      return;
    }
    
    if (!newComment.trim()) {
      toast({
        title: "Empty Proclamation",
        description: "Thy message scroll appears to be blank. The royal court requires substance!",
        variant: "destructive"
      });
      return;
    }
    
    const comment: Comment = {
      id: `temp-${Date.now()}`,
      userId: currentUser.id,
      username: currentUser.username,
      profileImage: currentUser.profileImage,
      tier: currentUser.tier,
      team: currentUser.team || undefined,
      content: newComment,
      timestamp: new Date().toISOString(),
      likes: 0,
      hasLiked: false
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
    
    toast({
      title: "Royal Decree Posted",
      description: "Thy words have been recorded in the annals of this noble's profile.",
      variant: "default"
    });
  };
  
  const handleLikeComment = (commentId: string) => {
    if (!currentUser) {
      toast({
        title: "Authentication Required",
        description: "Thou must be logged in to bestow favor upon comments.",
        variant: "destructive"
      });
      return;
    }
    
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.hasLiked ? comment.likes - 1 : comment.likes + 1,
          hasLiked: !comment.hasLiked
        };
      }
      return comment;
    }));
  };
  
  const handleReportComment = (commentId: string) => {
    toast({
      title: "Comment Reported to Royal Guards",
      description: "The court jesters will review this potentially treasonous statement.",
      variant: "default"
    });
  };
  
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    
    return date.toLocaleDateString();
  };
  
  const getTeamIcon = (team?: string) => {
    if (team === 'red') return <Shield className="h-3 w-3 text-red-500" />;
    if (team === 'green') return <Shield className="h-3 w-3 text-green-500" />;
    if (team === 'blue') return <Shield className="h-3 w-3 text-blue-500" />;
    return null;
  };
  
  const getTierIcon = (tier?: string) => {
    if (tier === 'gold' || tier === 'platinum' || tier === 'royal') {
      return <Crown className="h-3 w-3 text-royal-gold" />;
    }
    if (tier === 'silver' || tier === 'pro' || tier === 'premium') {
      return <Gem className="h-3 w-3 text-gray-300" />;
    }
    return null;
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="border-b border-white/10">
        <CardTitle className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-royal-gold" />
          Royal Court Comments
        </CardTitle>
        <CardDescription>
          Leave thy mark in this noble's court and engage in frivolous banter
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {currentUser && (
          <div className="mb-6 space-y-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={currentUser.profileImage || '/throne-assets/avatars/default.jpg'} 
                  alt={currentUser.username} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <Input 
                  placeholder="Inscribe thy noble message..." 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="bg-black/30 border-white/10"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button 
                onClick={handlePostComment}
                className="bg-gradient-to-r from-royal-gold/90 to-royal-gold-bright"
              >
                Post Royal Decree
              </Button>
            </div>
          </div>
        )}
        
        {!currentUser && (
          <div className="mb-6 p-4 rounded-lg border border-royal-gold/20 bg-royal-gold/5 text-center">
            <p className="text-white/80">
              Thou must be logged in to leave a comment in this noble's court.
            </p>
          </div>
        )}
        
        <div className="space-y-4">
          {comments.length === 0 ? (
            <div className="text-center py-8 text-white/60">
              <MessageSquare className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p>This royal court awaits its first decree</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={comment.profileImage || '/throne-assets/avatars/default.jpg'} 
                      alt={comment.username} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-bold">{comment.username}</span>
                      {getTierIcon(comment.tier) && (
                        <span className="ml-1.5">{getTierIcon(comment.tier)}</span>
                      )}
                      {getTeamIcon(comment.team) && (
                        <span className="ml-1.5">{getTeamIcon(comment.team)}</span>
                      )}
                    </div>
                    <p className="mt-1 text-white/90">{comment.content}</p>
                    <div className="mt-2 flex items-center text-xs text-white/60">
                      <span>{formatTimestamp(comment.timestamp)}</span>
                      <div className="flex ml-auto gap-3">
                        <button 
                          className={`flex items-center gap-1 ${comment.hasLiked ? 'text-pink-500' : 'hover:text-pink-400'}`}
                          onClick={() => handleLikeComment(comment.id)}
                        >
                          <Heart className="h-3.5 w-3.5" />
                          <span>{comment.likes}</span>
                        </button>
                        <button 
                          className="flex items-center gap-1 hover:text-red-400"
                          onClick={() => handleReportComment(comment.id)}
                        >
                          <Flag className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {comments.length > 0 && (
          <div className="mt-4 text-center">
            <Button variant="ghost" className="text-white/60 hover:text-white">
              Load More Decrees
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileFeed;
