
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth';
import WhaleChat from '@/components/chat/WhaleChat';
import TeamChatRoom from '@/components/chat/TeamChatRoom';
import { Badge } from '@/components/ui/badge';
import { Crown, MessageSquare, Shield, Users, Trophy, Scroll, Lock } from 'lucide-react';
import { NotificationProvider } from '@/contexts/NotificationContext';

const ChatPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('team');

  return (
    <div className="container mx-auto p-4 pt-24">
      <div className="flex flex-col gap-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold royal-gradient mb-2 font-royal">
            Royal Communication Chambers
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Coordinate with fellow nobles, plot your ascension, and engage in witty banter with the court.
          </p>
        </div>
        
        <NotificationProvider>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6 w-full max-w-3xl mx-auto glass-morphism border-white/10">
              <TabsTrigger value="team" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <Shield className="h-4 w-4 text-royal-gold" />
                <span>Team Chat</span>
              </TabsTrigger>
              
              <TabsTrigger value="whale" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <Crown className="h-4 w-4 text-royal-gold" />
                <span>Whale Chat</span>
                {user && (user.rank || 999) > 10 && (
                  <Lock className="h-3 w-3 text-white/60" />
                )}
              </TabsTrigger>
              
              <TabsTrigger value="council" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <Scroll className="h-4 w-4 text-royal-gold" />
                <span>Council</span>
              </TabsTrigger>
              
              <TabsTrigger value="global" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-royal-gold" />
                <span>Global</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="team">
              <TeamChatRoom />
            </TabsContent>
            
            <TabsContent value="whale">
              <Card className="glass-morphism border-white/10 mb-6">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Crown className="h-5 w-5 text-royal-gold mr-2" />
                      Exclusive Whale Chats
                    </CardTitle>
                    
                    <Badge variant="royal" className="royal-shadow">
                      Elite Access
                    </Badge>
                  </div>
                  <CardDescription>
                    Private chambers reserved for the highest-ranking nobles in the court
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div>
                    <WhaleChat 
                      minRank={10} 
                      title="Top 10 Nobles"
                      description="Where the elites converse in private"
                    />
                  </div>
                  
                  <div>
                    <WhaleChat 
                      minRank={100} 
                      title="The Hundred"
                      description="Chat for the top hundred ranked nobles"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="council">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scroll className="h-5 w-5 text-royal-gold mr-2" />
                    Royal Council Chambers
                  </CardTitle>
                  <CardDescription>
                    Discuss important matters of the kingdom and influence royal decrees
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8 text-center">
                  <p className="text-white/70">Royal Council features coming soon...</p>
                  <p className="text-white/50 text-sm mt-2">
                    Share your opinion on kingdom matters and vote on upcoming decrees
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="global">
              <div className="max-w-4xl mx-auto">
                <WhaleChat 
                  minRank={999} 
                  title="Royal Court Public Chat"
                  description="Open to all members of the kingdom"
                />
              </div>
            </TabsContent>
          </Tabs>
        </NotificationProvider>
      </div>
    </div>
  );
};

export default ChatPage;
