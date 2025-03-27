
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, Filter, RefreshCw, Scroll } from 'lucide-react';
import PublicShamingFeature from '@/components/leaderboard/PublicShamingFeature';

const LeaderboardActions: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-4 justify-between items-center">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
          <Filter className="mr-2 h-3 w-3" />
          Filter
        </Button>
        
        <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
          <ArrowUp className="mr-2 h-3 w-3" />
          Ascending
        </Button>
        
        <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
          <ArrowDown className="mr-2 h-3 w-3" />
          Descending
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
          <RefreshCw className="mr-2 h-3 w-3" />
          Refresh
        </Button>
        
        <PublicShamingFeature 
          trigger={
            <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10">
              <Scroll className="mr-2 h-3 w-3" />
              Public Shaming
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default LeaderboardActions;
