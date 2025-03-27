
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Hourglass, ThumbsUp, ThumbsDown } from 'lucide-react';

interface WishHistoryProps {
  recentWishes: Array<{
    username: string;
    amount: number;
    result: string;
    timestamp: string;
  }>;
}

const WishHistory: React.FC<WishHistoryProps> = ({ recentWishes }) => {
  // If no wishes provided, use default examples
  const wishes = recentWishes.length > 0 ? recentWishes : [
    {
      username: "GoldenKing",
      amount: 50,
      result: "won 125 gold",
      timestamp: new Date(Date.now() - 5 * 60000).toISOString()
    },
    {
      username: "RichNoble",
      amount: 100,
      result: "won 320 gold",
      timestamp: new Date(Date.now() - 15 * 60000).toISOString()
    },
    {
      username: "DukeMoney",
      amount: 25,
      result: "lost",
      timestamp: new Date(Date.now() - 30 * 60000).toISOString()
    },
    {
      username: "LadyLuxury",
      amount: 75,
      result: "won 200 gold",
      timestamp: new Date(Date.now() - 45 * 60000).toISOString()
    },
    {
      username: "CountCash",
      amount: 10,
      result: "lost",
      timestamp: new Date(Date.now() - 60 * 60000).toISOString()
    }
  ];

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-white/70">Recent Wishes</h3>
      
      <ScrollArea className="h-40 rounded-md border border-white/10 bg-black/20 p-2">
        <div className="space-y-2">
          {wishes.map((wish, index) => {
            const isWin = wish.result.includes('won');
            
            return (
              <div 
                key={index} 
                className="flex items-center justify-between p-2 rounded-md bg-white/5 border border-white/5"
              >
                <div className="flex items-center">
                  {isWin ? (
                    <ThumbsUp size={14} className="text-green-400 mr-2" />
                  ) : (
                    <ThumbsDown size={14} className="text-red-400 mr-2" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{wish.username}</p>
                    <p className="text-xs text-white/50">
                      Wished ${wish.amount} • {formatTimeAgo(wish.timestamp)}
                    </p>
                  </div>
                </div>
                
                <div className={`text-xs ${isWin ? 'text-green-400' : 'text-red-400'}`}>
                  {isWin ? wish.result : 'No blessing'}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default WishHistory;
