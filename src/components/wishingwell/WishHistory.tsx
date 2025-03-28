
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sparkles, Clock, User, Award } from 'lucide-react';

interface WishHistoryProps {
  recentWishes: Array<{
    username: string;
    amount: number;
    result: string;
    timestamp: string;
  }>;
}

const WishHistory: React.FC<WishHistoryProps> = ({ recentWishes }) => {
  // If no wishes provided, use mock data
  const wishes = recentWishes.length > 0 ? recentWishes : [
    {
      username: 'PurpleKing',
      amount: 50,
      result: 'Legendary Border',
      timestamp: '2 minutes ago'
    },
    {
      username: 'GemCollector',
      amount: 25,
      result: 'No reward',
      timestamp: '5 minutes ago'
    },
    {
      username: 'WealthyWizard',
      amount: 10,
      result: 'Rare Color',
      timestamp: '10 minutes ago'
    },
    {
      username: 'RoyalJester',
      amount: 5,
      result: 'Common Emoji',
      timestamp: '15 minutes ago'
    }
  ];

  return (
    <div className="mt-4">
      <div className="flex items-center mb-2">
        <Clock className="h-4 w-4 text-purple-400 mr-2" />
        <h4 className="text-sm font-medium">Recent Wishes</h4>
      </div>
      
      <ScrollArea className="h-36 rounded-md border border-white/10 p-2">
        <div className="space-y-2">
          {wishes.map((wish, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-2 rounded-md text-xs ${
                wish.result.includes('Legendary') 
                  ? 'bg-purple-700/20 border border-purple-600/30' 
                  : wish.result.includes('Rare') 
                    ? 'bg-purple-500/20 border border-purple-400/30'
                    : wish.result.includes('No reward')
                      ? 'bg-gray-700/20 border border-gray-600/30'
                      : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className="flex items-center">
                <User size={12} className="text-white/60 mr-1.5" />
                <span className="font-medium">{wish.username}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-white/60">${wish.amount}</span>
                
                <div className="h-3 w-px bg-white/20"></div>
                
                <div className="flex items-center">
                  {wish.result.includes('No reward') ? (
                    <span className="text-white/40">{wish.result}</span>
                  ) : (
                    <>
                      <Sparkles size={10} className={`${
                        wish.result.includes('Legendary') 
                          ? 'text-purple-400' 
                          : wish.result.includes('Rare')
                            ? 'text-indigo-400'
                            : 'text-gray-400'
                      } mr-1`} />
                      <span className={`${
                        wish.result.includes('Legendary') 
                          ? 'text-purple-400' 
                          : wish.result.includes('Rare')
                            ? 'text-indigo-400'
                            : 'text-gray-400'
                      }`}>
                        {wish.result}
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="text-white/40 text-[10px]">{wish.timestamp}</div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default WishHistory;
