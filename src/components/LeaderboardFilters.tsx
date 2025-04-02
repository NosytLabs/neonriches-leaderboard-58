
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { LeaderboardFilter, TeamColor } from '@/types/mockery-types';

interface LeaderboardFiltersProps {
  filter: LeaderboardFilter;
  onFilterChange: (filter: Partial<LeaderboardFilter>) => void;
}

const LeaderboardFilters: React.FC<LeaderboardFiltersProps> = ({
  filter,
  onFilterChange
}) => {
  // Team options
  const teamOptions = [
    { value: 'all', label: 'All Teams' },
    { value: 'red', label: 'Red Team' },
    { value: 'blue', label: 'Blue Team' },
    { value: 'green', label: 'Green Team' },
    { value: 'gold', label: 'Gold Team' },
    { value: 'purple', label: 'Purple Team' }
  ];
  
  // Tier options
  const tierOptions = [
    { value: 'all', label: 'All Tiers' },
    { value: 'basic', label: 'Basic' },
    { value: 'premium', label: 'Premium' },
    { value: 'elite', label: 'Elite' },
    { value: 'royal', label: 'Royal' }
  ];
  
  // Time frame options
  const timeFrameOptions = [
    { value: 'all-time', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' }
  ];
  
  // Sort options
  const sortOptions = [
    { value: 'rank', label: 'Rank' },
    { value: 'spent', label: 'Total Spent' },
    { value: 'username', label: 'Username' }
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ search: e.target.value });
  };
  
  return (
    <Card className="bg-black/20 border-white/10">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={filter.search || ''}
              onChange={handleSearchChange}
              className="pl-8 bg-black/40 border-white/10"
            />
          </div>
          
          <Select
            value={filter.team}
            onValueChange={(value: 'all' | TeamColor) => onFilterChange({ team: value })}
          >
            <SelectTrigger className="bg-black/40 border-white/10">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              {teamOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select
            value={filter.tier}
            onValueChange={(value) => onFilterChange({ tier: value })}
          >
            <SelectTrigger className="bg-black/40 border-white/10">
              <SelectValue placeholder="Tier" />
            </SelectTrigger>
            <SelectContent>
              {tierOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select
            value={filter.timeframe}
            onValueChange={(value: "all-time" | "today" | "week" | "month" | "year") => onFilterChange({ timeframe: value })}
          >
            <SelectTrigger className="bg-black/40 border-white/10">
              <SelectValue placeholder="Time Frame" />
            </SelectTrigger>
            <SelectContent>
              {timeFrameOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select
            value={filter.sortBy}
            onValueChange={(value: "rank" | "spent" | "username") => onFilterChange({ sortBy: value })}
          >
            <SelectTrigger className="bg-black/40 border-white/10">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardFilters;
