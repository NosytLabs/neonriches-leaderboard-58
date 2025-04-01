
import React from 'react';
import { Shell } from '@/components/ui/shell';
import PageSEO from '@/components/common/PageSEO';
import TeamChatRoom from '@/components/chat/TeamChatRoom';
import ChatHeader from '@/components/chat/ChatHeader';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Info } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import usePageTracking from '@/hooks/usePageTracking';

const Chat: React.FC = () => {
  const { user } = useAuth();
  usePageTracking();
  
  return (
    <Shell>
      <PageSEO 
        title="Royal Court Chat | SpendThrone"
        description="Engage in discussions with fellow nobles and flaunt your wealth in our satirical chat rooms."
      />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold royal-gradient">Royal Court Gossip Chamber</h1>
            <p className="text-white/70 mt-2">Where nobles brag about their spending and pretend it matters</p>
          </div>
          
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
                
                <TeamChatRoom team={user?.team || 'none'} user={user} />
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-white/50 text-sm mt-8">
            <p>
              All chat messages are moderated according to our Community Guidelines and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Chat;
