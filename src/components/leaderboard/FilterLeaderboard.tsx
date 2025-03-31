
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

interface FilterLeaderboardProps {
  onFilter: (filter: { tier: string; team: string; searchQuery: string }) => void;
}

const FilterLeaderboard: React.FC<FilterLeaderboardProps> = ({ onFilter }) => {
  const [tier, setTier] = useState('all');
  const [team, setTeam] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleTierChange = (value: string) => {
    setTier(value);
    onFilter({ tier: value, team, searchQuery });
  };
  
  const handleTeamChange = (value: string) => {
    setTeam(value);
    onFilter({ tier, team: value, searchQuery });
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilter({ tier, team, searchQuery: e.target.value });
  };
  
  const clearFilters = () => {
    setTier('all');
    setTeam('all');
    setSearchQuery('');
    onFilter({ tier: 'all', team: 'all', searchQuery: '' });
  };
  
  const hasActiveFilters = tier !== 'all' || team !== 'all' || searchQuery !== '';
  
  return (
    <div className="grid md:grid-cols-5 gap-4 mb-6">
      <div className="md:col-span-2 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search by username..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-10 bg-black/20 border-white/10"
        />
      </div>
      
      <div className="md:col-span-1">
        <Select value={tier} onValueChange={handleTierChange}>
          <SelectTrigger className="bg-black/20 border-white/10">
            <SelectValue placeholder="Tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tiers</SelectItem>
            <SelectItem value="royal">Royal</SelectItem>
            <SelectItem value="elite">Elite</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="basic">Basic</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="md:col-span-1">
        <Select value={team} onValueChange={handleTeamChange}>
          <SelectTrigger className="bg-black/20 border-white/10">
            <SelectValue placeholder="Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Teams</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="gold">Gold</SelectItem>
            <SelectItem value="purple">Purple</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="md:col-span-1 flex">
        <Button
          variant="outline"
          size="icon"
          onClick={clearFilters}
          disabled={!hasActiveFilters}
          className="w-full flex items-center justify-center ml-auto"
        >
          {hasActiveFilters ? (
            <>
              <X className="mr-2 h-4 w-4" />
              <span>Clear</span>
            </>
          ) : (
            <>
              <Filter className="mr-2 h-4 w-4" />
              <span>Filter</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default FilterLeaderboard;
