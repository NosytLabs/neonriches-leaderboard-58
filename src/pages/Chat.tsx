
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { HeadingText } from '@/components/ui/heading-text';
import TeamChatRoom from '@/components/chat/TeamChatRoom';
import ChatHeader from '@/components/chat/ChatHeader';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Crown, Info } from 'lucide-react';
import { useAuth } from '@/contexts/auth';

const Chat: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <Shell className="glass-morphism border-white/10 p-4 md:p-6" withBrandIcon>
      <div className="space-y-6">
        <ChatHeader activeUsers={26} />
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
                <Info className="h-5 w-5 text-royal-purple" />
                <p className="text-sm text-white/70">
                  Team chat allows you to communicate with fellow nobles from your team. Join a team to participate in team-specific discussions and events.
                </p>
              </div>
              
              <TeamChatRoom user={user} />
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center text-white/50 text-sm mt-8">
          <p>
            All chat messages are moderated according to our Community Guidelines and Terms of Service.
          </p>
        </div>
      </div>
    </Shell>
  );
};

export default Chat;
