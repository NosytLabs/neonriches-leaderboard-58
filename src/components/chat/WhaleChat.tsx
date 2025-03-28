
import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '@/contexts/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { Smile, Send, Crown, Users, ArrowUp, ChevronsUp } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { UserProfile } from '@/types/user';

interface Message {
  id: string;
  user_id: string;
  username: string;
  profile_image?: string;
  content: string;
  created_at: string;
  rank?: number;
  tier?: string;
}

interface WhaleChatProps {
  minRank?: number;
  title?: string;
  description?: string;
  teamFilter?: 'red' | 'green' | 'blue' | null;
}

const WhaleChat: React.FC<WhaleChatProps> = ({
  minRank = 0,
  title = "Whale Chat",
  description = "Exclusive chat for top-ranked nobles",
  teamFilter = null
}) => {
  const { user, isAuthenticated } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [canAccess, setCanAccess] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Check if user has access
  useEffect(() => {
    if (user) {
      const hasAccess = (user.rank || 999) <= minRank;
      setCanAccess(hasAccess);
    } else {
      setCanAccess(false);
    }
  }, [user, minRank]);
  
  // Load initial messages
  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        let query = supabase
          .from('chat_messages')
          .select('*, profiles:user_id(username, profile_image, rank, tier)')
          .order('created_at', { ascending: false })
          .limit(50);
          
        if (teamFilter) {
          query = query.eq('team', teamFilter);
        }
        
        if (minRank > 0) {
          // Only get messages from users with rank <= minRank
          query = query.lte('profiles.rank', minRank);
        }
        
        const { data, error } = await query;
        
        if (error) {
          console.error('Error loading messages:', error);
          return;
        }
        
        // Transform data to match Message interface
        const formattedMessages = data.map(msg => ({
          id: msg.id,
          user_id: msg.user_id,
          username: msg.profiles?.username || 'Unknown User',
          profile_image: msg.profiles?.profile_image,
          content: msg.content,
          created_at: msg.created_at,
          rank: msg.profiles?.rank,
          tier: msg.profiles?.tier
        })).reverse();
        
        setMessages(formattedMessages);
      } catch (err) {
        console.error('Error loading messages:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (isAuthenticated && canAccess) {
      loadMessages();
    }
  }, [isAuthenticated, canAccess, teamFilter, minRank]);
  
  // Set up real-time subscription
  useEffect(() => {
    if (!isAuthenticated || !canAccess) return;
    
    // Subscribe to new messages
    const channel = supabase
      .channel('chat_messages_channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        },
        async (payload) => {
          // Fetch user details for the new message
          const { data: userData, error: userError } = await supabase
            .from('profiles')
            .select('username, profile_image, rank, tier')
            .eq('id', payload.new.user_id)
            .single();
            
          if (userError) {
            console.error('Error fetching user data:', userError);
            return;
          }
          
          const newMsg: Message = {
            id: payload.new.id,
            user_id: payload.new.user_id,
            username: userData?.username || 'Unknown User',
            profile_image: userData?.profile_image,
            content: payload.new.content,
            created_at: payload.new.created_at,
            rank: userData?.rank,
            tier: userData?.tier
          };
          
          // Only add message if it meets the rank requirement
          if (!minRank || (userData?.rank && userData.rank <= minRank)) {
            setMessages(prev => [...prev, newMsg]);
            scrollToBottom();
          }
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAuthenticated, canAccess, minRank]);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user) return;
    
    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert({
          user_id: user.id,
          content: newMessage.trim(),
          team: teamFilter || user.team || 'none'
        });
        
      if (error) {
        console.error('Error sending message:', error);
        return;
      }
      
      setNewMessage('');
      inputRef.current?.focus();
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  if (!isAuthenticated) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-10">
          <p>You must be logged in to access the royal chat chambers.</p>
          <Button 
            className="royal-button mt-4" 
            onClick={() => {/* Open auth modal */}}
          >
            Enter the Court
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  if (!canAccess) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-10">
          <p>This royal chamber is reserved for nobles of rank #{minRank} or higher.</p>
          <p className="mt-2 text-sm opacity-70">Your current rank: #{user?.rank || 'Unknown'}</p>
          <Button 
            className="royal-button mt-4" 
            onClick={() => {/* Open deposit modal */}}
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Increase Your Standing
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10 flex flex-col h-[600px]">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center text-lg">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            {title}
          </CardTitle>
          <Badge variant="royal" className="royal-shadow">
            Top {minRank} Nobles
          </Badge>
        </div>
        <p className="text-white/60 text-sm">{description}</p>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-hidden p-0">
        <ScrollArea className="h-[450px] p-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <p>Loading royal conversations...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex justify-center items-center h-full text-center">
              <div>
                <p>No messages yet.</p>
                <p className="text-sm text-white/60 mt-2">Be the first to grace this chamber with your words.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  user={{
                    id: message.user_id,
                    username: message.username,
                    profileImage: message.profile_image,
                    rank: message.rank,
                    tier: message.tier as any
                  }}
                  message={message.content}
                  date={message.created_at}
                  isCurrentUser={message.user_id === user?.id}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </ScrollArea>
      </CardContent>
      
      <CardFooter className="border-t border-white/10 p-3">
        <div className="flex w-full items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-royal-gold">
            <Smile className="h-5 w-5" />
          </Button>
          <Input
            ref={inputRef}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your royal decree..."
            className="glass-morphism border-white/10"
          />
          <Button 
            className="royal-button" 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WhaleChat;
