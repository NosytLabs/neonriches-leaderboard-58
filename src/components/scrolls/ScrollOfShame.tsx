
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scroll, Crown, Calendar, User } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';
import { formatDistanceToNow } from 'date-fns';

export interface ShameRecord {
  id: string;
  targetUsername: string;
  action: string;
  timestamp: string;
  issuerUsername: string;
  isActive: boolean;
}

export interface ScrollOfShameProps {
  shameRecords: ShameRecord[];
}

export const ScrollOfShame: React.FC<ScrollOfShameProps> = ({ shameRecords }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('all');
  
  const filteredRecords = shameRecords.filter(record => {
    if (filter === 'all') return true;
    if (filter === 'active') return record.isActive;
    if (filter === 'expired') return !record.isActive;
    return true;
  });
  
  const getActionColor = (action: string): string => {
    switch (action) {
      case 'tomatoes':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'eggs':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'stocks':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'silence':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'courtJester':
      case 'jester':
        return 'bg-royal-gold/20 text-royal-gold border-royal-gold/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  const getActionText = (action: string): string => {
    switch (action) {
      case 'tomatoes':
        return 'Pelted with Tomatoes';
      case 'eggs':
        return 'Egged';
      case 'stocks':
        return 'Placed in Stocks';
      case 'silence':
        return 'Silenced';
      case 'courtJester':
      case 'jester':
        return 'Made Court Jester';
      default:
        return action;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scroll className="h-5 w-5 text-royal-crimson" />
          <h2 className="text-lg font-medieval">Scroll of Shame</h2>
        </div>
        
        <div className="flex gap-2">
          <Badge 
            className={`cursor-pointer ${filter === 'all' ? 'bg-royal-gold/20 text-royal-gold border-royal-gold/30' : 'bg-black/20 border-white/10'}`}
            onClick={() => setFilter('all')}
          >
            All
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-black/20 border-white/10'}`}
            onClick={() => setFilter('active')}
          >
            Active
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'expired' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-black/20 border-white/10'}`}
            onClick={() => setFilter('expired')}
          >
            Expired
          </Badge>
        </div>
      </div>
      
      {filteredRecords.length === 0 ? (
        <Card className="glass-morphism border-white/10 bg-black/20">
          <CardContent className="py-8 text-center">
            <Scroll className="h-12 w-12 mx-auto text-white/20 mb-3" />
            <p className="text-white/50">The scroll of shame is empty.</p>
            <p className="text-white/30 text-sm mt-2">Mockery actions against users will appear here.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredRecords.map((record) => (
            <Card key={record.id} className="glass-morphism border-white/10 bg-black/20 overflow-hidden">
              <div className="relative">
                {!record.isActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                      Expired
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-white/60" />
                        <span className="font-medium">{record.targetUsername}</span>
                      </div>
                      
                      <Badge className={`mt-2 ${getActionColor(record.action)}`}>
                        {getActionText(record.action)}
                      </Badge>
                      
                      <div className="mt-3 text-sm text-white/60 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDistanceToNow(new Date(record.timestamp), { addSuffix: true })}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-white/60 text-sm">
                        <span>By</span>
                        <Crown className="h-3 w-3 text-royal-gold" />
                        <span>{record.issuerUsername}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
          
          <div className="text-center pt-4">
            <RoyalButton variant="glass">
              View All Mockery History
            </RoyalButton>
            
            <div className="mt-4">
              <RoyalButton variant="goldOutline" size="sm">
                Restore Your Honor
              </RoyalButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
