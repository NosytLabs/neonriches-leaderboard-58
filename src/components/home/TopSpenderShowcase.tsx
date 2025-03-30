
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, DollarSign, Star, Medal } from 'lucide-react';
import { User } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

interface TopSpenderShowcaseProps {
  highlightTop?: boolean;
}

const TopSpenderShowcase: React.FC<TopSpenderShowcaseProps> = ({ highlightTop = true }) => {
  // Mock data for top spenders
  const topSpenders: User[] = [
    {
      id: '1',
      username: 'JeffBezos',
      displayName: 'Lord Moneybags',
      profileImage: 'https://i.pravatar.cc/150?img=1',
      rank: 1,
      team: 'blue',
      tier: 'diamond',
      amountSpent: 1250000,
      walletBalance: 75000,
      joinedAt: '2023-01-15T00:00:00.000Z'
    },
    {
      id: '2',
      username: 'ElonTusk',
      displayName: 'The Rocket Baron',
      profileImage: 'https://i.pravatar.cc/150?img=2',
      rank: 2,
      team: 'red',
      tier: 'platinum',
      amountSpent: 980000,
      walletBalance: 45000,
      joinedAt: '2023-02-10T00:00:00.000Z'
    },
    {
      id: '3',
      username: 'WallStWolf',
      displayName: 'Duke of Dividends',
      profileImage: 'https://i.pravatar.cc/150?img=3',
      rank: 3,
      team: 'green',
      tier: 'platinum',
      amountSpent: 750000,
      walletBalance: 30000,
      joinedAt: '2023-01-22T00:00:00.000Z'
    }
  ];

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          The Royal Elite
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topSpenders.map((spender, index) => (
            <motion.div
              key={spender.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden ${
                index === 0 && highlightTop
                  ? 'md:col-span-3 lg:col-span-1 md:row-span-2'
                  : ''
              }`}
            >
              <div className={`
                absolute inset-0 opacity-30
                ${index === 0 ? 'bg-gradient-to-br from-royal-gold to-amber-600' : 
                  index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                  'bg-gradient-to-br from-amber-700 to-amber-900'}
              `}></div>
              
              <div className="relative p-4 flex flex-col h-full">
                <div className="absolute top-3 right-3">
                  {index === 0 ? (
                    <Crown className="h-8 w-8 text-royal-gold" />
                  ) : index === 1 ? (
                    <Medal className="h-8 w-8 text-gray-300" />
                  ) : (
                    <Medal className="h-8 w-8 text-amber-700" />
                  )}
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`h-16 w-16 rounded-full overflow-hidden border-2 ${
                    index === 0 ? 'border-royal-gold' : 
                    index === 1 ? 'border-gray-300' : 
                    'border-amber-700'
                  }`}>
                    <img
                      src={spender.profileImage}
                      alt={spender.displayName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{spender.displayName}</h3>
                    <p className="text-white/60">@{spender.username}</p>
                    <div className="flex items-center mt-1">
                      <div className={`h-2 w-2 rounded-full mr-1 ${
                        spender.team === 'red' ? 'bg-red-500' :
                        spender.team === 'green' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`}></div>
                      <span className="text-xs text-white/70 capitalize">{spender.team} Team</span>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  mt-2 p-3 rounded-md ${
                    index === 0 ? 'bg-royal-gold/20' : 
                    index === 1 ? 'bg-white/20' : 
                    'bg-amber-900/20'
                  }
                `}>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Total Spent:</span>
                    <span className="font-bold text-lg flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-royal-gold" />
                      {formatCurrency(spender.amountSpent).replace('$', '')}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white/70">Rank:</span>
                    <span className="font-bold">{spender.rank}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white/70">Tier:</span>
                    <span className="flex items-center capitalize">
                      <Star className="h-3 w-3 text-royal-gold mr-1" />
                      {spender.tier}
                    </span>
                  </div>
                </div>
                
                {index === 0 && highlightTop && (
                  <div className="mt-4 p-3 bg-black/30 rounded-md">
                    <p className="text-sm text-white/80 italic">
                      "I've spent more money on this platform than I'd care to admit, but seeing my name at the top 
                      of the leaderboard gives me a rush that my other investments just can't match."
                    </p>
                    <p className="text-right text-xs text-royal-gold mt-2">— {spender.displayName}</p>
                  </div>
                )}
                
                <div className="mt-auto pt-4">
                  <a 
                    href={`/profile/${spender.username}`}
                    className={`
                      text-sm flex items-center justify-center py-2 rounded-md
                      ${index === 0 ? 'text-black bg-royal-gold hover:bg-royal-gold/90' : 
                        'bg-white/10 hover:bg-white/20 text-white'}
                      transition-colors
                    `}
                  >
                    View Royal Profile
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSpenderShowcase;
