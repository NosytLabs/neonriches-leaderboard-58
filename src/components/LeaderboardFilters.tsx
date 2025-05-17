
import React from 'react';
import { LeaderboardFilters as FilterOptions } from '@/types/leaderboard-unified';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

interface LeaderboardFiltersProps {
  filter: FilterOptions;
  onFilterChange: (newFilters: Partial<FilterOptions>) => void;
}

const LeaderboardFilters: React.FC<LeaderboardFiltersProps> = ({ filter, onFilterChange }) => {
  const teams = ['all', 'red', 'green', 'blue', 'gold'];
  const tiers = ['all', 'basic', 'standard', 'premium', 'elite', 'royal'];
  const timeframes = ['day', 'week', 'month', 'year', 'all-time'];

  return (
    <div className="flex flex-wrap gap-3 bg-black/20 p-3 rounded-lg">
      <Select
        value={filter.team as string || 'all'}
        onValueChange={(value) => onFilterChange({ team: value })}
      >
        <SelectTrigger className="w-[140px] bg-black/40">
          <SelectValue placeholder="Select Team" />
        </SelectTrigger>
        <SelectContent>
          {teams.map((team) => (
            <SelectItem key={team} value={team} className="capitalize">
              {team === 'all' ? 'All Teams' : team}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filter.tier as string || 'all'}
        onValueChange={(value) => onFilterChange({ tier: value })}
      >
        <SelectTrigger className="w-[140px] bg-black/40">
          <SelectValue placeholder="Select Tier" />
        </SelectTrigger>
        <SelectContent>
          {tiers.map((tier) => (
            <SelectItem key={tier} value={tier} className="capitalize">
              {tier === 'all' ? 'All Tiers' : tier}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filter.timeframe as string || 'all-time'}
        onValueChange={(value) => onFilterChange({ timeframe: value })}
      >
        <SelectTrigger className="w-[140px] bg-black/40">
          <SelectValue placeholder="Select Timeframe" />
        </SelectTrigger>
        <SelectContent>
          {timeframes.map((time) => (
            <SelectItem key={time} value={time} className="capitalize">
              {time === 'all-time' ? 'All Time' : time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onFilterChange({
          sortDirection: filter.sortDirection === 'asc' ? 'desc' : 'asc'
        })}
        className="bg-black/40 border-white/20"
      >
        <ArrowUpDown className="h-4 w-4 mr-2" />
        {filter.sortDirection === 'asc' ? 'Ascending' : 'Descending'}
      </Button>
    </div>
  );
};

export default LeaderboardFilters;
