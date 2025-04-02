
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Crown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { TeamColor } from '@/types/team';
import { toTeamColor } from '@/utils/typeConverters';

// Temporary types until we implement real chat functionality
interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  text: string;
  timestamp: string;
  team: TeamColor;
  isRoyal: boolean;
}

const Chat: React.FC = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  
  useEffect(() => {
    // Mock chat messages for demo
    const mockMessages: ChatMessage[] = [
      {
        id: '1',
        userId: '2',
        username: 'kingspender',
        displayName: 'King Spender',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        text: 'Welcome to the Royal Chat!',
        timestamp: new Date(Date.now() - 60000).toISOString(),
        team: toTeamColor('gold'), // Use toTeamColor to ensure it's a valid TeamColor
        isRoyal: true
      },
      {
        id: '2',
        userId: '3',
        username: 'queenofcash',
        displayName: 'Queen of Cash',
        profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        text: 'Hello everyone! Who's ready to spend today?',
        timestamp: new Date(Date.now() - 30000).toISOString(),
        team: toTeamColor('purple'),
        isRoyal: true
      },
      {
        id: '3',
        userId: '4',
        username: 'spendthrifty',
        displayName: 'Spendthrifty',
        profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
        text: 'Just bought my premium membership! Feeling royal already.',
        timestamp: new Date(Date.now() - 15000).toISOString(),
        team: toTeamColor('blue'),
        isRoyal: false
      }
    ];
    
    setMessages(mockMessages);
  }, []);
  
  const handleSendMessage = () => {
    if (!message.trim() || !user) return;
    
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      userId: user.id,
      username: user.username,
      displayName: user.displayName || user.username,
      profileImage: user.profileImage,
      text: message,
      timestamp: new Date().toISOString(),
      team: toTeamColor(user.team) as TeamColor,
      isRoyal: user.tier === 'royal'
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
  };
  
  // Handle Enter key to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-6 h-[calc(100vh-4rem)]">
      <Card className="h-full flex flex-col bg-black/20 border-white/10">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold">Royal Court Chat</h2>
          <div className="text-sm text-white/60">{messages.length} messages</div>
        </div>
        
        <ScrollArea className="flex-grow p-4">
          <div className="space-y-4">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex items-start gap-3 ${msg.userId === user?.id ? 'justify-end' : ''}`}
              >
                {msg.userId !== user?.id && (
                  <Avatar className="h-8 w-8 relative">
                    <AvatarImage src={msg.profileImage} />
                    <AvatarFallback>{msg.displayName.charAt(0)}</AvatarFallback>
                    {msg.isRoyal && (
                      <span className="absolute -top-1 -right-1 bg-royal-gold text-black rounded-full p-0.5">
                        <Crown className="h-3 w-3" />
                      </span>
                    )}
                  </Avatar>
                )}
                
                <div 
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.userId === user?.id 
                      ? 'bg-blue-600 text-white' 
                      : msg.isRoyal 
                        ? 'bg-royal-gold/20 border border-royal-gold/30' 
                        : 'bg-white/10'
                  }`}
                >
                  {msg.userId !== user?.id && (
                    <div className="flex items-center gap-1 mb-1">
                      <span className="font-bold">{msg.displayName}</span>
                      <span className={`h-2 w-2 rounded-full ${
                        msg.team === 'red' ? 'bg-red-500' :
                        msg.team === 'blue' ? 'bg-blue-500' :
                        msg.team === 'green' ? 'bg-green-500' :
                        msg.team === 'gold' ? 'bg-yellow-500' :
                        msg.team === 'purple' ? 'bg-purple-500' :
                        'bg-gray-500'
                      }`}></span>
                    </div>
                  )}
                  <p>{msg.text}</p>
                  <div className="text-xs text-white/60 mt-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                
                {msg.userId === user?.id && (
                  <Avatar className="h-8 w-8 relative">
                    <AvatarImage src={msg.profileImage} />
                    <AvatarFallback>{msg.displayName.charAt(0)}</AvatarFallback>
                    {msg.isRoyal && (
                      <span className="absolute -top-1 -right-1 bg-royal-gold text-black rounded-full p-0.5">
                        <Crown className="h-3 w-3" />
                      </span>
                    )}
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="bg-white/5"
            />
            <Button onClick={handleSendMessage} disabled={!message.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Chat;
