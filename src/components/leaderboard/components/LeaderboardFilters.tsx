
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowDown, ArrowUp, Scroll, Shield, Crown } from 'lucide-react';

interface LeaderboardFiltersProps {
  searchQuery: string;
  teamFilter: 'all' | 'red' | 'green' | 'blue';
  sortDirection: 'asc' | 'desc';
  onSearchChange: (query: string) => void;
  onTeamFilterChange: (team: 'all' | 'red' | 'green' | 'blue') => void;
  onSortChange: () => void;
}

const LeaderboardFilters: React.FC<LeaderboardFiltersProps> = ({
  searchQuery,
  teamFilter,
  sortDirection,
  onSearchChange,
  onTeamFilterChange,
  onSortChange
}) => {
  return (
    <div className="p-4 border-b border-white/10 space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
          <Input
            placeholder="Search for nobles..."
            className="pl-10 glass-morphism border-white/10"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex rounded-md overflow-hidden">
            <Button
              size="sm"
              variant={teamFilter === 'all' ? 'default' : 'outline'}
              className={`text-xs h-8 ${teamFilter === 'all' ? 'bg-white/20' : 'glass-morphism border-white/10'}`}
              onClick={() => onTeamFilterChange('all')}
            >
              <Scroll size={14} className="mr-1.5" />
              All Courts
            </Button>
            <Button
              size="sm"
              variant={teamFilter === 'red' ? 'default' : 'outline'}
              className={`text-xs h-8 ${teamFilter === 'red' ? 'bg-royal-crimson/30' : 'glass-morphism border-white/10'}`}
              onClick={() => onTeamFilterChange('red')}
            >
              <Shield size={14} className="mr-1.5 text-royal-crimson" />
              Crimson Court
            </Button>
            <Button
              size="sm"
              variant={teamFilter === 'green' ? 'default' : 'outline'}
              className={`text-xs h-8 ${teamFilter === 'green' ? 'bg-royal-gold/30' : 'glass-morphism border-white/10'}`}
              onClick={() => onTeamFilterChange('green')}
            >
              <Crown size={14} className="mr-1.5 text-royal-gold" />
              Golden Order
            </Button>
            <Button
              size="sm"
              variant={teamFilter === 'blue' ? 'default' : 'outline'}
              className={`text-xs h-8 ${teamFilter === 'blue' ? 'bg-royal-navy/30' : 'glass-morphism border-white/10'}`}
              onClick={() => onTeamFilterChange('blue')}
            >
              <Shield size={14} className="mr-1.5 text-royal-navy" />
              Royal Navy
            </Button>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="glass-morphism border-white/10"
            onClick={onSortChange}
          >
            {sortDirection === 'desc' ? (
              <ArrowDown size={14} className="text-white/70" />
            ) : (
              <ArrowUp size={14} className="text-white/70" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardFilters;
