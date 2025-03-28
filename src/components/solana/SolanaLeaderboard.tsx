
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BarChart3, ArrowUpRight, Crown } from 'lucide-react';
import { formatAddress } from '@/utils/solanaUtils';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface LeaderboardEntry {
  rank: number;
  address: string;
  username?: string;
  amount: number;
  timestamp: string;
}

interface SolanaLeaderboardProps {
  entries?: LeaderboardEntry[];
  title?: string;
  loading?: boolean;
}

const SolanaLeaderboard: React.FC<SolanaLeaderboardProps> = ({
  entries = sampleLeaderboardData,
  title = "On-Chain Leaderboard",
  loading = false
}) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <BarChart3 className="mr-2 h-5 w-5 text-royal-gold" />
          {title}
          <Badge variant="outline" className="ml-2 bg-white/10 text-xs">
            Solana
          </Badge>
        </CardTitle>
        <Button variant="ghost" size="sm">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="glass-morphism border-white/10 p-3 rounded-md animate-pulse">
                <div className="w-full h-6 bg-white/10 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.address}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass-morphism border-white/10 p-3 rounded-md flex items-center justify-between group hover:bg-white/5 transition-all"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-royal-gold/30 to-royal-crimson/30 mr-3">
                    {entry.rank === 1 ? (
                      <Crown className="h-4 w-4 text-royal-gold" />
                    ) : (
                      <span className="text-sm font-bold">{entry.rank}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-medium">
                      {entry.username || formatAddress(entry.address)}
                    </div>
                    <div className="text-xs text-white/50">
                      {!entry.username && (
                        <span className="text-xs text-white/60 font-mono">
                          {formatAddress(entry.address, 6)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-right">
                    <div className="font-bold">${entry.amount.toFixed(2)}</div>
                    <div className="text-xs text-white/50">
                      {new Date(entry.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 ml-2 text-white/30 group-hover:text-white/80 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
        <div className="mt-4 text-center">
          <Button variant="outline" className="text-xs" size="sm">
            View All On-Chain Data
            <ExternalLink className="h-3 w-3 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Sample data for demonstration
const sampleLeaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    address: '8YLKoCu5knFvCTSdSXe3xVQxA8xndGpAbqNWCtK9XkS9',
    username: 'RoyalWhale',
    amount: 5000,
    timestamp: '2023-09-15T12:30:00Z'
  },
  {
    rank: 2,
    address: '5yKLcpRxZU2S7uLkHRFNQZnSoNMm9ZUHsyVaaDXJHnEW',
    username: 'CrownCollector',
    amount: 3750,
    timestamp: '2023-09-14T14:22:10Z'
  },
  {
    rank: 3,
    address: '3GQYpxEfZPuHPLwE9UbCy2EwR1Xp4CaqwKdyuXzL8Fty',
    amount: 2250,
    timestamp: '2023-09-13T09:11:45Z'
  },
  {
    rank: 4,
    address: '7Rqvn1ntgx9LhATtYzPDKNEk5JUnYWtZY4jgYJJf8AoD',
    username: 'SolSpender',
    amount: 1800,
    timestamp: '2023-09-12T18:05:30Z'
  },
  {
    rank: 5,
    address: '9ZNkaDU3EJ5H5yYrggZoMjDLTqKetJ9sfj4Fd8oiB6ic',
    amount: 1250,
    timestamp: '2023-09-11T22:47:15Z'
  }
];

export default SolanaLeaderboard;
