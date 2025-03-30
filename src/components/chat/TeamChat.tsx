import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, MessageSquare, Send, ChevronRight, Users, Shield, Crown } from 'lucide-react';
import { TeamColor } from '@/types/user';
import { UserProfile } from '@/types/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { format } from 'date-fns';

interface ChatMessage {
  id: string;
  text: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  team: TeamColor | null;
  timestamp: string;
  isSystem?: boolean;
}

type TeamString = 'red' | 'green' | 'blue' | 'gold' | 'top';

interface TeamChatProps {
  user: UserProfile | null;
  limit?: number;
}

const TeamChat: React.FC<TeamChatProps> = ({ user, limit = 50 }) => {
  const [activeTab, setActiveTab] = useState<TeamString>(user?.team as TeamString || 'red');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Record<TeamString, ChatMessage[]>>({
    red: [],
    green: [],
    blue: [],
    gold: [],
    top: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<Record<TeamString, number>>({
    red: 0,
    green: 0,
    blue: 0,
    gold: 0,
    top: 0
  });
  const [isJoined, setIsJoined] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  useEffect(() => {
    const mockMessages: Record<TeamString, ChatMessage[]> = {
      red: [
        {
          id: 'r1',
          text: 'Welcome to the Red Team chat!',
          userId: 'system',
          username: 'System',
          displayName: 'Royal Announcer',
          team: 'red',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          isSystem: true
        },
        {
          id: 'r2',
          text: 'Remember, our goal is to outspend the other teams this week!',
          userId: 'red-leader',
          username: 'RedLeader',
          displayName: 'Crimson King',
          profileImage: '/images/avatars/red-leader.jpg',
          team: 'red',
          timestamp: new Date(Date.now() - 1800000).toISOString()
        },
        {
          id: 'r3',
          text: 'I just spent $50 to boost our team ranking! Who can match me?',
          userId: 'red-knight',
          username: 'RedKnight',
          displayName: 'Ruby Warrior',
          profileImage: '/images/avatars/red-knight.jpg',
          team: 'red',
          timestamp: new Date(Date.now() - 900000).toISOString()
        }
      ],
      green: [
        {
          id: 'g1',
          text: 'Welcome to the Green Team chat!',
          userId: 'system',
          username: 'System',
          displayName: 'Royal Announcer',
          team: 'green',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          isSystem: true
        },
        {
          id: 'g2',
          text: 'Our team strategy this week: focus on group spending!',
          userId: 'green-leader',
          username: 'GreenLeader',
          displayName: 'Emerald Emperor',
          profileImage: '/images/avatars/green-leader.jpg',
          team: 'green',
          timestamp: new Date(Date.now() - 1500000).toISOString()
        }
      ],
      blue: [
        {
          id: 'b1',
          text: 'Welcome to the Blue Team chat!',
          userId: 'system',
          username: 'System',
          displayName: 'Royal Announcer',
          team: 'blue',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          isSystem: true
        },
        {
          id: 'b2',
          text: 'Blue team is currently in third place. Let\'s work together to change that!',
          userId: 'blue-leader',
          username: 'BlueLeader',
          displayName: 'Sapphire Sovereign',
          profileImage: '/images/avatars/blue-leader.jpg',
          team: 'blue',
          timestamp: new Date(Date.now() - 2100000).toISOString()
        }
      ],
      gold: [
        {
          id: 'g1',
          text: 'Welcome to the Gold Team chat!',
          userId: 'system',
          username: 'System',
          displayName: 'Royal Announcer',
          team: 'gold',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          isSystem: true
        },
        {
          id: 'g2',
          text: 'Gold team is the most elite team!',
          userId: 'gold-leader',
          username: 'GoldLeader',
          displayName: 'Golden Sovereign',
          profileImage: '/images/avatars/gold-leader.jpg',
          team: 'gold',
          timestamp: new Date(Date.now() - 2100000).toISOString()
        }
      ],
      top: [
        {
          id: 't1',
          text: 'Welcome to the Top Spenders chat! Only the top 50 spenders have access to this exclusive channel.',
          userId: 'system',
          username: 'System',
          displayName: 'Royal Announcer',
          team: null,
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          isSystem: true
        },
        {
          id: 't2',
          text: 'I\'m surprised more people haven\'t found this hidden easter egg in the site.',
          userId: 'whale-1',
          username: 'Whale1',
          displayName: 'Platinum Patron',
          profileImage: '/images/avatars/whale-1.jpg',
          team: 'red',
          timestamp: new Date(Date.now() - 1200000).toISOString()
        },
        {
          id: 't3',
          text: 'Has anyone unlocked the legendary cosmetic yet? Trying to decide if it\'s worth the investment.',
          userId: 'whale-2',
          username: 'Whale2',
          displayName: 'Gold Guardian',
          profileImage: '/images/avatars/whale-2.jpg',
          team: 'green',
          timestamp: new Date(Date.now() - 600000).toISOString()
        }
      ]
    };
    
    setMessages(mockMessages);
    
    setOnlineUsers({
      red: 23,
      green: 17,
      blue: 19,
      gold: 12,
      top: 8
    });
    
    const timer = setTimeout(() => {
      setIsJoined(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeTab]);
  
  const isUserInTop50 = () => {
    return user && user.rank !== undefined && user.rank <= 50;
  };
  
  const handleSendMessage = () => {
    if (!message.trim() || !user) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      const newMessage: ChatMessage = {
        id: `msg-${Date.now()}`,
        text: message,
        userId: user.id,
        username: user.username,
        displayName: user.displayName || user.username,
        profileImage: user.profileImage,
        team: user.team && ['red', 'green', 'blue', 'gold'].includes(user.team as string) ? user.team as TeamColor : null,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], newMessage]
      }));
      
      setMessage('');
      setIsLoading(false);
      playSound('message');
    }, 300);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const formatMessageTime = (timestamp: string) => {
    return format(new Date(timestamp), 'h:mm a');
  };
  
  const canAccessChannel = (channel: TeamString) => {
    if (channel === 'top') {
      return isUserInTop50();
    }
    
    if (['red', 'green', 'blue', 'gold'].includes(channel)) {
      if (!user || !user.team) return false;
      return user.team === channel || (user.amountSpent || 0) > 1000;
    }
    
    return false;
  };
  
  const handleTabChange = (value: TeamString) => {
    if (value === 'top' && !isUserInTop50()) {
      toast({
        title: "Access Restricted",
        description: "Only the top 50 spenders have access to this exclusive channel.",
        variant: "destructive"
      });
      return;
    }
    
    if (['red', 'green', 'blue', 'gold'].includes(value) && user?.team !== value && (user?.amountSpent || 0) <= 1000) {
      toast({
        title: "Team Restricted",
        description: `Only members of the ${value.charAt(0).toUpperCase() + value.slice(1)} Team can access this channel.`,
        variant: "destructive"
      });
      return;
    }
    
    setActiveTab(value);
    playSound('click');
  };
  
  const getTeamColor = (team: TeamColor | null) => {
    switch (team) {
      case 'red': return 'text-royal-crimson';
      case 'green': return 'text-royal-gold';
      case 'blue': return 'text-royal-navy';
      case 'gold': return 'text-yellow-500';
      default: return 'text-white';
    }
  };
  
  const getTeamBadge = (team: TeamColor | null) => {
    switch (team) {
      case 'red': return <Shield className="h-3 w-3 text-royal-crimson" />;
      case 'green': return <Shield className="h-3 w-3 text-royal-gold" />;
      case 'blue': return <Shield className="h-3 w-3 text-royal-navy" />;
      case 'gold': return <Shield className="h-3 w-3 text-yellow-500" />;
      default: return null;
    }
  };
  
  const joinChat = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to join the chat.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsJoined(true);
      setIsLoading(false);
      
      const userTeam = user.team && ['red', 'green', 'blue', 'gold'].includes(user.team as string) ? user.team as TeamColor : null;
      
      const joinMessage: ChatMessage = {
        id: `join-${Date.now()}`,
        text: `${user.displayName || user.username} has joined the chat.`,
        userId: 'system',
        username: 'System',
        displayName: 'Royal Announcer',
        team: userTeam,
        timestamp: new Date().toISOString(),
        isSystem: true
      };
      
      setMessages(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], joinMessage]
      }));
      
      toast({
        title: "Chat Joined",
        description: "You have successfully joined the chat.",
      });
      
      playSound('notification');
    }, 800);
  };
  
  if (!user) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Chat
          </CardTitle>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/70 mb-4">You must be logged in to view the chat.</p>
            <Button>Log In</Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Chat
          </div>
          <div className="flex items-center text-xs text-white/60">
            <Users className="h-4 w-4 mr-1" />
            <span>{onlineUsers[activeTab]} online</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid grid-cols-5 bg-transparent">
          <TabsTrigger 
            value="red" 
            disabled={!canAccessChannel('red')}
            className="data-[state=active]:text-royal-crimson data-[state=active]:bg-royal-crimson/20"
          >
            Red Team
          </TabsTrigger>
          <TabsTrigger 
            value="green" 
            disabled={!canAccessChannel('green')}
            className="data-[state=active]:text-royal-gold data-[state=active]:bg-royal-gold/20"
          >
            Green Team
          </TabsTrigger>
          <TabsTrigger 
            value="blue" 
            disabled={!canAccessChannel('blue')}
            className="data-[state=active]:text-royal-navy data-[state=active]:bg-royal-navy/20"
          >
            Blue Team
          </TabsTrigger>
          <TabsTrigger 
            value="gold" 
            disabled={!canAccessChannel('gold')}
            className="data-[state=active]:text-yellow-500 data-[state=active]:bg-yellow-500/20"
          >
            Gold Team
          </TabsTrigger>
          <TabsTrigger 
            value="top" 
            disabled={!isUserInTop50()}
            className="data-[state=active]:text-royal-purple data-[state=active]:bg-royal-purple/20"
          >
            <Crown className="h-3 w-3 mr-1" />
            <span>Top 50</span>
          </TabsTrigger>
        </TabsList>
        
        {(Object.keys(messages) as TeamString[]).map((team) => (
          <TabsContent key={team} value={team} className="m-0">
            <div className="h-80 flex flex-col">
              <ScrollArea className="flex-1 p-4">
                {messages[team].length > 0 ? (
                  <div className="space-y-4">
                    {messages[team].map((msg) => (
                      <div 
                        key={msg.id} 
                        className={`flex ${msg.userId === user.id ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.userId !== user.id && !msg.isSystem && (
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={msg.profileImage} alt={msg.displayName || msg.username} />
                            <AvatarFallback className={getTeamColor(msg.team)}>
                              {(msg.displayName || msg.username).charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        
                        <div 
                          className={`max-w-[80%] rounded-lg p-3 
                            ${msg.isSystem 
                              ? 'bg-royal-gold/10 text-royal-gold text-center w-full' 
                              : msg.userId === user.id 
                                ? 'bg-royal-gold/20 text-white' 
                                : 'bg-black/20 text-white'
                            }`}
                        >
                          {!msg.isSystem && (
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center">
                                <span className={`text-xs font-medium ${getTeamColor(msg.team)}`}>
                                  {msg.displayName || msg.username}
                                </span>
                                {getTeamBadge(msg.team)}
                              </div>
                              <span className="text-xs text-white/50">
                                {formatMessageTime(msg.timestamp)}
                              </span>
                            </div>
                          )}
                          <div className={msg.isSystem ? 'text-sm' : 'text-sm text-white/90'}>
                            {msg.text}
                          </div>
                        </div>
                        
                        {msg.userId === user.id && !msg.isSystem && (
                          <Avatar className="h-8 w-8 ml-2">
                            <AvatarImage src={user.profileImage} alt={user.displayName || user.username} />
                            <AvatarFallback className={getTeamColor(user.team as TeamColor)}>
                              {(user.displayName || user.username).charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-white/50">
                    No messages yet
                  </div>
                )}
              </ScrollArea>
              
              {!isJoined ? (
                <div className="p-4 border-t border-white/10 flex justify-center">
                  <Button 
                    onClick={joinChat} 
                    disabled={isLoading}
                    className="w-full"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    {isLoading ? 'Joining...' : 'Join Chat'}
                  </Button>
                </div>
              ) : (
                <div className="p-4 border-t border-white/10">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={isLoading}
                      className="glass-morphism border-white/10"
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      disabled={isLoading || !message.trim()}
                      size="icon"
                      className="bg-royal-gold text-black hover:bg-royal-gold/80"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};

export default TeamChat;
