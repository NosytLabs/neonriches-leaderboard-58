
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, ArrowUp, ArrowDown, Scroll, Crown, Award, Shield } from 'lucide-react';

interface LeaderboardFiltersProps {
  activeFilter: string | null;
  sortDirection: 'asc' | 'desc';
  onFilterChange: (team: string | null) => void;
  onSortChange: () => void;
}

const LeaderboardFilters = ({ 
  activeFilter, 
  sortDirection, 
  onFilterChange, 
  onSortChange 
}: LeaderboardFiltersProps) => {
  return (
    <div className="p-4 border-b border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="relative w-full md:w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
        <input 
          type="text" 
          placeholder="Search nobles..." 
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-royal-gold/50"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 items-center">
        <Button
          variant="outline" 
          size="sm" 
          className={`glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white ${activeFilter === null ? 'bg-white/10' : ''}`}
          onClick={() => onFilterChange(null)}
        >
          <Scroll size={14} className="mr-1.5" />
          All Courts
        </Button>
        <Button
          variant="outline" 
          size="sm" 
          className={`glass-morphism border-white/10 hover:bg-white/10 ${activeFilter === 'red' ? 'bg-white/10' : ''}`}
          style={{ color: '#9B26AF' }}
          onClick={() => onFilterChange('red')}
        >
          <Crown size={14} className="mr-1.5" />
          Purple Dynasty
        </Button>
        <Button
          variant="outline" 
          size="sm" 
          className={`glass-morphism border-white/10 hover:bg-white/10 ${activeFilter === 'green' ? 'bg-white/10' : ''}`}
          style={{ color: '#FFD700' }}
          onClick={() => onFilterChange('green')}
        >
          <Award size={14} className="mr-1.5" />
          Gold Dominion
        </Button>
        <Button
          variant="outline" 
          size="sm" 
          className={`glass-morphism border-white/10 hover:bg-white/10 ${activeFilter === 'blue' ? 'bg-white/10' : ''}`}
          style={{ color: '#0055A4' }}
          onClick={() => onFilterChange('blue')}
        >
          <Shield size={14} className="mr-1.5" />
          Azure Order
        </Button>
        
        <Button
          variant="outline" 
          size="sm" 
          className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white"
          onClick={onSortChange}
        >
          <span className="mr-1">Sort</span>
          {sortDirection === 'desc' ? (
            <ArrowDown size={14} />
          ) : (
            <ArrowUp size={14} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default LeaderboardFilters;
