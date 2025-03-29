
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Shield, Send, Crown, MessageSquare } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { TeamBadge } from '@/components/ui/theme-components';
import { UserTeam } from '@/types/user';

interface TeamChatRoomProps {
  defaultTab?: string;
}

const TeamChatRoom: React.FC<TeamChatRoomProps> = ({ defaultTab = 'all' }) => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<UserTeam | 'all'>(defaultTab as UserTeam | 'all');
  const [message, setMessage] = useState('');
  
  const handleSendMessage = () => {
    // In a real app, this would send the message to the server
    if (message.trim()) {
      console.log(`Sending message to ${activeTab} team: ${message}`);
      setMessage('');
    }
  };
  
  const getTeamName = (team: UserTeam | 'all') => {
    if (team === 'red') return 'House Red';
    if (team === 'green') return 'House Green';
    if (team === 'blue') return 'House Blue';
    if (team === 'all') return 'Royal Court';
    return 'Unknown House';
  };
  
  const getTeamColor = (team: UserTeam | 'all') => {
    if (team === 'red') return 'text-team-red';
    if (team === 'green') return 'text-team-green';
    if (team === 'blue') return 'text-team-blue';
    if (team === 'all') return 'text-royal-gold';
    return '';
  };
  
  // Mock messages for demo
  const mockMessages = {
    all: [
      { id: 1, username: 'KingSpender', team: 'red', message: 'Behold my latest acquisition: a golden profile border that cost me $50 of real money!', timestamp: '10:30 AM' },
      { id: 2, username: 'DuchessOfDollars', team: 'blue', message: 'A mere trinket. I spent $100 on a virtual title that does absolutely nothing.', timestamp: '10:32 AM' },
      { id: 3, username: 'BaronVonBroke', team: 'green', message: 'I may have emptied my real bank account, but my digital prestige has never been higher!', timestamp: '10:35 AM' },
      { id: 4, username: 'CountCashula', team: 'red', message: 'Has anyone seen the new mockery features? I paid $75 to shame someone I've never met!', timestamp: '10:40 AM' },
    ],
    red: [
      { id: 1, username: 'KingSpender', team: 'red', message: 'Fellow red nobles! Our house must outspend the others this week.', timestamp: '10:25 AM' },
      { id: 2, username: 'CountCashula', team: 'red', message: 'I pledge 50 more gold pieces to our cause!', timestamp: '10:28 AM' },
      { id: 3, username: 'LadyLuxury', team: 'red', message: 'Our house shall reign supreme through sheer financial irresponsibility!', timestamp: '10:33 AM' },
    ],
    green: [
      { id: 1, username: 'BaronVonBroke', team: 'green', message: 'Green house strategy: spend consistently rather than in large bursts.', timestamp: '10:15 AM' },
      { id: 2, username: 'ViscountVerdant', team: 'green', message: 'Wise words. Small, frequent contributions will build our treasury.', timestamp: '10:18 AM' },
    ],
    blue: [
      { id: 1, username: 'DuchessOfDollars', team: 'blue', message: 'Blue house members, our spending should be calculated and strategic.', timestamp: '10:05 AM' },
      { id: 2, username: 'EarlOfExcess', team: 'blue', message: 'I've analyzed the optimal spending pattern to maximize our house ranking.', timestamp: '10:08 AM' },
      { id: 3, username: 'MarquessOfMoney', team: 'blue', message: 'My spreadsheet indicates we need 3 more members spending $50 each to overtake House Red.', timestamp: '10:12 AM' },
    ]
  };
  
  return (
    <Card className="glass-morphism border-white/10 h-full">
      <CardHeader className="border-b border-white/10">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-royal-gold" />
            <span>Royal Court Messenger</span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={(value) => setActiveTab(value as UserTeam | 'all')}>
          <TabsList className="w-full rounded-none border-b border-white/10 bg-black/20">
            <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-black/30">
              <Shield className="mr-2 h-4 w-4 text-royal-gold" />
              <span>All Houses</span>
            </TabsTrigger>
            
            <TabsTrigger value="red" className="flex-1 data-[state=active]:bg-black/30">
              <div className="w-2 h-2 rounded-full bg-royal-crimson mr-2"></div>
              <span>Red</span>
            </TabsTrigger>
            
            <TabsTrigger value="green" className="flex-1 data-[state=active]:bg-black/30">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
              <span>Green</span>
            </TabsTrigger>
            
            <TabsTrigger value="blue" className="flex-1 data-[state=active]:bg-black/30">
              <div className="w-2 h-2 rounded-full bg-royal-navy mr-2"></div>
              <span>Blue</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-black/30 to-black/20">
            <h3 className={`font-royal text-lg ${getTeamColor(activeTab)}`}>
              {getTeamName(activeTab)} Chat
            </h3>
            <p className="text-white/60 text-sm">
              {activeTab === 'all' 
                ? 'A court where all noble houses gather to compare their excessive spending and meaningless digital status.'
                : `Private chamber for House ${activeTab} members to strategize about wasting money together.`}
            </p>
          </div>
          
          <div className="h-[300px] overflow-y-auto p-4">
            {(mockMessages[activeTab as keyof typeof mockMessages] || []).map((msg) => (
              <div key={msg.id} className="mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {msg.username === 'KingSpender' && <Crown className="h-4 w-4 text-royal-gold" />}
                    {msg.username !== 'KingSpender' && (
                      <div className={`w-full h-full ${
                        msg.team === 'red' ? 'bg-royal-crimson' : 
                        msg.team === 'green' ? 'bg-emerald-500' : 
                        'bg-royal-navy'
                      }`}></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{msg.username}</span>
                      <TeamBadge team={msg.team as UserTeam} size="sm" />
                      <span className="text-white/40 text-xs">{msg.timestamp}</span>
                    </div>
                    <p className="text-white/80">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <Textarea 
                placeholder={`Send a message to ${getTeamName(activeTab)}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[80px] bg-black/20"
              />
              <Button 
                onClick={handleSendMessage} 
                className="self-end"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TeamChatRoom;
