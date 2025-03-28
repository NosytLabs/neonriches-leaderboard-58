
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Trophy, Medal, ArrowUp, ArrowDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/contexts/auth';
import MedievalIcon from '@/components/ui/medieval-icon';

const getMockeryTypeIcon = (type: string) => {
  switch (type) {
    case 'tomatoes':
      return <div className="text-red-500">🍅</div>;
    case 'eggs':
      return <div className="text-yellow-200">🥚</div>;
    case 'stocks':
      return <div className="text-amber-700">🔒</div>;
    default:
      return <div className="text-gray-400">🎭</div>;
  }
};

const MockeryLeaderboard = () => {
  const { user } = useAuth();
  
  // Mock data for the leaderboard
  const mockeryLeaderboard = [
    {
      id: 1,
      username: 'RoyalJester',
      mockeriesReceived: 24,
      mockeriesSent: 18,
      profileImage: '/avatars/avatar-1.jpg',
      change: 'up'
    },
    {
      id: 2,
      username: 'CourtFool',
      mockeriesReceived: 19,
      mockeriesSent: 22,
      profileImage: '/avatars/avatar-2.jpg',
      change: 'down'
    },
    {
      id: 3,
      username: 'LordMockery',
      mockeriesReceived: 15,
      mockeriesSent: 31,
      profileImage: '/avatars/avatar-3.jpg',
      change: 'up'
    },
    {
      id: 4,
      username: 'JestKing',
      mockeriesReceived: 12,
      mockeriesSent: 8,
      profileImage: '/avatars/avatar-4.jpg',
      change: 'same'
    },
    {
      id: 5,
      username: 'DuchessOfShame',
      mockeriesReceived: 10,
      mockeriesSent: 15,
      profileImage: '/avatars/avatar-5.jpg',
      change: 'down'
    }
  ];
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
          Mockery Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 pr-4">
          <div className="space-y-4">
            {mockeryLeaderboard.map((mockeryUser, index) => (
              <div 
                key={mockeryUser.id}
                className={`flex items-center p-3 rounded-lg ${
                  user && user.username === mockeryUser.username 
                    ? 'bg-white/10 border border-white/20' 
                    : 'bg-black/20'
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  {index === 0 ? (
                    <MedievalIcon name="crown" color="gold" size="md" />
                  ) : index === 1 ? (
                    <MedievalIcon name="crown" color="silver" size="md" />
                  ) : index === 2 ? (
                    <MedievalIcon name="crown" color="bronze" size="md" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                  )}
                </div>
                
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    {mockeryUser.profileImage ? (
                      <img 
                        src={mockeryUser.profileImage} 
                        alt={mockeryUser.username} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{mockeryUser.username.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center">
                    <span className="font-medium">{mockeryUser.username}</span>
                    {mockeryUser.change === 'up' && (
                      <ArrowUp className="ml-1 h-3 w-3 text-green-500" />
                    )}
                    {mockeryUser.change === 'down' && (
                      <ArrowDown className="ml-1 h-3 w-3 text-red-500" />
                    )}
                  </div>
                  <div className="text-xs text-white/60 flex space-x-4">
                    <span className="flex items-center">
                      <div className="text-red-500 mr-1">🍅</div>
                      Received: {mockeryUser.mockeriesReceived}
                    </span>
                    <span className="flex items-center">
                      <div className="text-yellow-200 mr-1">🥚</div>
                      Sent: {mockeryUser.mockeriesSent}
                    </span>
                  </div>
                </div>
                
                <div className="flex-shrink-0 text-center">
                  <div className="text-lg font-bold">{mockeryUser.mockeriesReceived + mockeryUser.mockeriesSent}</div>
                  <div className="text-xs text-white/60">Total</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MockeryLeaderboard;
