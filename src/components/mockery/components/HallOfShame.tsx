
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Calendar, Target } from 'lucide-react';
import { mockeryTierBg, mockeryTierBorder, mockeryTierText } from '@/utils/mockeryUtils';
import { MockUser } from '@/components/mockery/utils/mockeryUtils';
import { format } from 'date-fns';

export interface HallOfShameProps {
  shameRecords: MockUser[];
}

const HallOfShame: React.FC<HallOfShameProps> = ({ shameRecords }) => {
  return (
    <div className="space-y-4">
      <div className="bg-black/20 p-4 rounded-lg">
        <h3 className="text-lg font-bold flex items-center gap-2 mb-2">
          <Crown className="h-5 w-5 text-royal-gold" />
          <span>Hall of Royal Shame</span>
        </h3>
        <p className="text-sm text-white/70">
          Those who have been publicly mocked by multiple citizens are displayed here for all to see.
        </p>
      </div>
      
      {shameRecords.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shameRecords.map((record) => (
            <Card 
              key={record.id} 
              className={`glass-morphism ${mockeryTierBorder(record.tier || 'tomatoes')}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {record.profileImage ? (
                      <img 
                        src={record.profileImage} 
                        alt={record.username} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-lg font-bold text-white/80">
                          {record.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${mockeryTierBg(record.tier || 'tomatoes')} flex items-center justify-center text-white text-xs font-bold border ${mockeryTierBorder(record.tier || 'tomatoes')}`}>
                      {record.mockeryCount}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold">{record.displayName || record.username}</h4>
                    <div className="flex items-center text-xs text-white/60">
                      <Target className="h-3 w-3 mr-1" />
                      <span>{mockeryTierText(record.tier || 'tomatoes')}</span>
                    </div>
                    {record.lastMocked && (
                      <div className="flex items-center text-xs text-white/60 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Last mocked: {format(new Date(record.lastMocked), 'MMM d, yyyy')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-white/50 italic">
          No users have been shamed yet. Be the first to mock someone!
        </div>
      )}
    </div>
  );
};

export default HallOfShame;
