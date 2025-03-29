
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shield, Send, MessageSquare, User, Crown } from 'lucide-react';
import { UserTeam } from '@/types/user';

interface Message {
  id: string;
  userId: string;
  username: string;
  profileImage?: string;
  team: UserTeam;
  content: string;
  timestamp: string;
}

interface TeamChatRoomProps {
  team: UserTeam;
  isAuthenticated?: boolean;
}

const TeamChatRoom: React.FC<TeamChatRoomProps> = ({ team, isAuthenticated = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      userId: 'user1',
      username: 'Duke Spendington',
      profileImage: '/throne-assets/avatars/team-red-1.jpg',
      team: 'red',
      content: 'My fellow red nobles, our team must outspend the others! I have just contributed 50 gold pieces to our cause.',
      timestamp: '2023-12-04T14:30:00Z'
    },
    {
      id: '2',
      userId: 'user2',
      username: 'Baron Cashburner',
      profileImage: '/throne-assets/avatars/team-red-2.jpg',
      team: 'red',
      content: 'Magnificent gesture, Duke! I shall match your contribution and add 10 more. Let us show those green peasants what real nobility looks like!',
      timestamp: '2023-12-04T14:35:00Z'
    },
    {
      id: '3',
      userId: 'user3',
      username: 'Lady Goldpurse',
      profileImage: '/throne-assets/avatars/team-red-3.jpg',
      team: 'red',
      content: 'We must coordinate our spending for the weekly challenge. If we all contribute at exactly noon tomorrow, we shall overwhelm the leaderboard!',
      timestamp: '2023-12-04T15:10:00Z'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  
  const handleSendMessage = () => {
    if (!newMessage.trim() || !isAuthenticated) return;
    
    const message: Message = {
      id: `temp-${Date.now()}`,
      userId: 'currentUser',
      username: 'Your Royal Self',
      profileImage: '/throne-assets/avatars/default.jpg',
      team,
      content: newMessage,
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    
    return date.toLocaleDateString();
  };
  
  const getTeamColor = (team: UserTeam) => {
    switch (team) {
      case 'red':
        return 'text-red-500';
      case 'green':
        return 'text-green-500';
      case 'blue':
        return 'text-blue-500';
      default:
        return 'text-white';
    }
  };
  
  const getTeamName = (team: UserTeam) => {
    switch (team) {
      case 'red':
        return 'Red';
      case 'green':
        return 'Green';
      case 'blue':
        return 'Blue';
      default:
        return 'Unknown';
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10 h-full flex flex-col">
      <CardHeader className={`border-b border-white/10 bg-${team}-500/20`}>
        <CardTitle className="flex items-center">
          <Shield className={`h-5 w-5 mr-2 text-${team}-500`} />
          House {getTeamName(team)} War Room
        </CardTitle>
        <CardDescription>
          Coordinate with thy fellow nobles to outspend rival houses
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 p-0 flex flex-col">
        <ScrollArea className="flex-1 max-h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={message.profileImage || '/throne-assets/avatars/default.jpg'} 
                    alt={message.username} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className={`font-bold ${getTeamColor(message.team)}`}>{message.username}</span>
                    {message.userId === 'user1' && (
                      <span className="ml-2">
                        <Crown className="h-3 w-3 text-royal-gold" />
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-white/90">{message.content}</p>
                  <div className="mt-1 text-xs text-white/60">
                    {formatTimestamp(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t border-white/10">
          {isAuthenticated ? (
            <div className="flex gap-2">
              <Input 
                placeholder="Write thy message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="bg-black/30 border-white/10"
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                onClick={handleSendMessage}
                className={`bg-${team}-500 hover:bg-${team}-600`}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="text-center py-3 text-white/60">
              <User className="h-5 w-5 mx-auto mb-2" />
              Thou must be logged in to participate in thy team's war room
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamChatRoom;
