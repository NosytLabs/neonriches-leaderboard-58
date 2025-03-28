
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Crown, Search, User, Star, Sparkles, Award, Shield, CheckCircle, XCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserProfile } from '@/types/user';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface KingmakerHighlight {
  id: string;
  kingmakerId: string;
  kingmakerName: string;
  targetUserId: string;
  targetUsername: string;
  targetDisplayName?: string;
  targetProfileImage?: string;
  effectType: 'border' | 'badge' | 'boost' | 'spotlight';
  effectStyle: string;
  message: string;
  expiresAt: string;
  createdAt: string;
  active: boolean;
}

// Mock user data
const mockUsers = [
  {
    id: 'user1',
    username: 'loyal_supporter',
    displayName: 'Loyal Supporter',
    profileImage: '/images/avatars/user1.jpg',
    rank: 15,
    amountSpent: 750
  },
  {
    id: 'user2',
    username: 'rising_star',
    displayName: 'Rising Star',
    profileImage: '/images/avatars/user2.jpg',
    rank: 32,
    amountSpent: 420
  },
  {
    id: 'user3',
    username: 'consistent_donor',
    displayName: 'Consistent Donor',
    profileImage: '/images/avatars/user3.jpg',
    rank: 48,
    amountSpent: 300
  },
  {
    id: 'user4',
    username: 'creative_profile',
    displayName: 'Creative Profile',
    profileImage: '/images/avatars/user4.jpg',
    rank: 74,
    amountSpent: 120
  },
  {
    id: 'user5',
    username: 'new_member',
    displayName: 'New Member',
    profileImage: '/images/avatars/user5.jpg',
    rank: 105,
    amountSpent: 75
  }
];

// Mock highlight data
const mockHighlights: KingmakerHighlight[] = [
  {
    id: 'highlight1',
    kingmakerId: 'kingmaker1',
    kingmakerName: 'Royal Patron',
    targetUserId: 'user2',
    targetUsername: 'rising_star',
    targetDisplayName: 'Rising Star',
    targetProfileImage: '/images/avatars/user2.jpg',
    effectType: 'spotlight',
    effectStyle: 'golden-aura',
    message: 'This user has been showing exceptional creativity and engagement!',
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    active: true
  },
  {
    id: 'highlight2',
    kingmakerId: 'kingmaker2',
    kingmakerName: 'Diamond Spender',
    targetUserId: 'user1',
    targetUsername: 'loyal_supporter',
    targetDisplayName: 'Loyal Supporter',
    targetProfileImage: '/images/avatars/user1.jpg',
    effectType: 'badge',
    effectStyle: 'chosen-one',
    message: 'A loyal supporter who consistently contributes to our community.',
    expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    active: true
  }
];

interface KingmakerFeatureProps {
  user: UserProfile | null;
}

const KingmakerFeature: React.FC<KingmakerFeatureProps> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [effectType, setEffectType] = useState<'border' | 'badge' | 'boost' | 'spotlight'>('spotlight');
  const [effectStyle, setEffectStyle] = useState('golden-aura');
  const [message, setMessage] = useState('');
  const [duration, setDuration] = useState('7');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('create');
  const [currentHighlights, setCurrentHighlights] = useState<KingmakerHighlight[]>(mockHighlights);
  
  const { toast } = useToast();
  
  const filteredUsers = mockUsers.filter(u => {
    const searchLower = searchTerm.toLowerCase();
    return (
      u.username.toLowerCase().includes(searchLower) ||
      (u.displayName && u.displayName.toLowerCase().includes(searchLower))
    );
  });
  
  const isUserKingmaker = () => {
    // In a real app, this would check if the user is in the top 3 or has the kingmaker permission
    return user && user.rank <= 3;
  };
  
  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
    setSearchTerm('');
  };
  
  const handleCreateHighlight = () => {
    if (!selectedUser || !message.trim() || !isUserKingmaker()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newHighlight: KingmakerHighlight = {
        id: `highlight-${Date.now()}`,
        kingmakerId: user!.id,
        kingmakerName: user!.displayName || user!.username,
        targetUserId: selectedUser.id,
        targetUsername: selectedUser.username,
        targetDisplayName: selectedUser.displayName,
        targetProfileImage: selectedUser.profileImage,
        effectType,
        effectStyle,
        message,
        expiresAt: new Date(Date.now() + parseInt(duration) * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString(),
        active: true
      };
      
      setCurrentHighlights(prev => [newHighlight, ...prev]);
      setSelectedUser(null);
      setMessage('');
      setEffectType('spotlight');
      setEffectStyle('golden-aura');
      setDuration('7');
      setIsLoading(false);
      
      toast({
        title: "Highlight Created",
        description: `You have successfully highlighted ${selectedUser.displayName || selectedUser.username}.`,
      });
    }, 1000);
  };
  
  const handleRemoveHighlight = (highlightId: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setCurrentHighlights(prev => prev.filter(h => h.id !== highlightId));
      setIsLoading(false);
      
      toast({
        title: "Highlight Removed",
        description: "The highlight has been removed successfully.",
      });
    }, 500);
  };
  
  const getEffectTypeIcon = (type: string) => {
    switch (type) {
      case 'border': return <Shield className="h-4 w-4" />;
      case 'badge': return <Award className="h-4 w-4" />;
      case 'boost': return <Star className="h-4 w-4" />;
      case 'spotlight': return <Sparkles className="h-4 w-4" />;
      default: return <Sparkles className="h-4 w-4" />;
    }
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  };
  
  const getDaysRemaining = (expiryDate: string) => {
    const now = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  if (!user) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Kingmaker
          </CardTitle>
          <CardDescription>
            Elevate deserving members with your royal influence
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <div className="text-center">
            <p className="text-white/70 mb-4">Please log in to access Kingmaker features.</p>
            <Button>Log In</Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (!isUserKingmaker()) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Kingmaker
          </CardTitle>
          <CardDescription>
            Elevate deserving members with your royal influence
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <Crown className="h-16 w-16 text-royal-gold/50 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Reserved for Royalty</h3>
          <p className="text-white/70 text-center max-w-md mb-6">
            The Kingmaker ability is reserved for the top 3 spenders on the leaderboard. 
            Continue your generous contributions to unlock this prestigious power.
          </p>
          <div className="bg-black/20 p-4 rounded-lg text-white/80 text-sm w-full max-w-md">
            <p className="font-semibold mb-2">Current Kingmakers:</p>
            <ul className="space-y-2">
              {[
                { name: "Royal Patron", rank: 1 },
                { name: "Diamond Spender", rank: 2 },
                { name: "Platinum Benefactor", rank: 3 }
              ].map((kingmaker, index) => (
                <li key={index} className="flex items-center">
                  <Crown className={`h-4 w-4 mr-2 ${index === 0 ? 'text-royal-gold' : index === 1 ? 'text-royal-silver' : 'text-royal-bronze'}`} />
                  <span>{kingmaker.name} (Rank #{kingmaker.rank})</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Royal Kingmaker
        </CardTitle>
        <CardDescription>
          Use your royal influence to elevate deserving members
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 px-6">
          <TabsTrigger value="create">Create Highlight</TabsTrigger>
          <TabsTrigger value="manage">Manage Highlights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="p-0">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-white/90">Select a User to Highlight</h3>
                  {selectedUser && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-xs"
                      onClick={() => setSelectedUser(null)}
                    >
                      <XCircle className="h-3.5 w-3.5 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>
                
                {selectedUser ? (
                  <div className="flex items-center p-3 bg-black/20 rounded-lg">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={selectedUser.profileImage} />
                      <AvatarFallback>{selectedUser.displayName?.[0] || selectedUser.username[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedUser.displayName || selectedUser.username}</p>
                      <p className="text-sm text-white/60">Rank #{selectedUser.rank} • ${selectedUser.amountSpent} spent</p>
                    </div>
                    <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                  </div>
                ) : (
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-white/50" />
                    <Input
                      placeholder="Search for a user..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 glass-morphism border-white/10"
                    />
                    
                    {searchTerm && (
                      <div className="absolute z-10 w-full mt-1 bg-black/90 border border-white/10 rounded-md shadow-lg max-h-60 overflow-auto">
                        {filteredUsers.length > 0 ? (
                          <ScrollArea className="max-h-60">
                            {filteredUsers.map((user) => (
                              <div
                                key={user.id}
                                className="p-2 hover:bg-white/10 cursor-pointer flex items-center"
                                onClick={() => handleUserSelect(user)}
                              >
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarImage src={user.profileImage} />
                                  <AvatarFallback>{user.displayName?.[0] || user.username[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{user.displayName || user.username}</p>
                                  <p className="text-xs text-white/60">Rank #{user.rank}</p>
                                </div>
                              </div>
                            ))}
                          </ScrollArea>
                        ) : (
                          <div className="p-3 text-center text-white/60">
                            No users found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-white/90">Highlight Type</h3>
                <ToggleGroup type="single" value={effectType} onValueChange={(value) => value && setEffectType(value as any)}>
                  <ToggleGroupItem value="spotlight" aria-label="Spotlight Effect">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Spotlight
                  </ToggleGroupItem>
                  <ToggleGroupItem value="badge" aria-label="Badge Effect">
                    <Award className="h-4 w-4 mr-2" />
                    Badge
                  </ToggleGroupItem>
                  <ToggleGroupItem value="border" aria-label="Border Effect">
                    <Shield className="h-4 w-4 mr-2" />
                    Border
                  </ToggleGroupItem>
                  <ToggleGroupItem value="boost" aria-label="Boost Effect">
                    <Star className="h-4 w-4 mr-2" />
                    Boost
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-white/90">Effect Style</h3>
                <Select value={effectStyle} onValueChange={setEffectStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="golden-aura">Golden Aura</SelectItem>
                    <SelectItem value="royal-shimmer">Royal Shimmer</SelectItem>
                    <SelectItem value="chosen-one">The Chosen One</SelectItem>
                    <SelectItem value="rising-star">Rising Star</SelectItem>
                    <SelectItem value="patron-blessing">Patron's Blessing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-white/90">Duration</h3>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-white/90">Highlight Message</h3>
                <Input
                  placeholder="Why are you highlighting this user?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="glass-morphism border-white/10"
                />
                <p className="text-xs text-white/60">
                  This message will be displayed on their profile.
                </p>
              </div>
              
              <div className="bg-black/20 p-3 rounded-lg">
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  <Crown className="h-4 w-4 text-royal-gold mr-2" />
                  Preview
                </h3>
                <div className="border border-white/10 rounded p-3 bg-black/30">
                  <div className="flex items-center mb-2">
                    <div className="bg-royal-gold/20 text-royal-gold text-xs px-2 py-0.5 rounded-full flex items-center">
                      {getEffectTypeIcon(effectType)}
                      <span className="ml-1">
                        {effectType.charAt(0).toUpperCase() + effectType.slice(1)}
                      </span>
                    </div>
                    <span className="text-xs text-white/60 ml-auto">
                      {duration} days duration
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm text-white/90 italic">
                        "{message || "This user has been highlighted by a top spender!"}"
                      </p>
                      {selectedUser && (
                        <p className="text-xs text-royal-gold mt-1">
                          — Highlighted by You
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="border-t border-white/10 pt-4">
            <Button
              onClick={handleCreateHighlight}
              disabled={!selectedUser || !message.trim() || isLoading}
              className="w-full"
            >
              <Crown className="h-4 w-4 mr-2" />
              {isLoading ? "Creating..." : "Create Highlight"}
            </Button>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="manage" className="p-0">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white/90">Your Active Highlights</h3>
              
              {currentHighlights.length > 0 ? (
                <ScrollArea className="max-h-[400px]">
                  <div className="space-y-3">
                    {currentHighlights.map(highlight => (
                      <div key={highlight.id} className="glass-morphism border-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={highlight.targetProfileImage} />
                              <AvatarFallback>
                                {(highlight.targetDisplayName || highlight.targetUsername)[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">
                                {highlight.targetDisplayName || highlight.targetUsername}
                              </p>
                              <div className="flex items-center text-xs text-white/60">
                                <div className="bg-royal-gold/20 text-royal-gold px-2 py-0.5 rounded-full flex items-center mr-2">
                                  {getEffectTypeIcon(highlight.effectType)}
                                  <span className="ml-1">{highlight.effectStyle}</span>
                                </div>
                                <span>
                                  Expires in {getDaysRemaining(highlight.expiresAt)} days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-white/80 italic my-2">
                          "{highlight.message}"
                        </p>
                        
                        <div className="flex justify-between items-center text-xs text-white/60 mt-3 pt-2 border-t border-white/10">
                          <span>Created on {formatDate(highlight.createdAt)}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            onClick={() => handleRemoveHighlight(highlight.id)}
                            disabled={isLoading}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 bg-black/20 rounded-lg">
                  <Crown className="h-12 w-12 text-white/20 mb-3" />
                  <p className="text-white/60 text-center">You haven't created any highlights yet.</p>
                </div>
              )}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default KingmakerFeature;
