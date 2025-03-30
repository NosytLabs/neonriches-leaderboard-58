import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, User, Flame } from 'lucide-react';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import LeaderboardTable from './LeaderboardTable';
import { generateMockLeaderboard } from '@/utils/mockData';
import { cn } from '@/lib/utils';

interface PersistentLeaderboardProps {
  users?: LeaderboardUser[];
}

const PersistentLeaderboard: React.FC<PersistentLeaderboardProps> = ({ users }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [filter, setFilter] = useState<LeaderboardFilter>({
    timeFrame: "all",
    timespan: "all",
    sortBy: "rank",
    sortDirection: "asc",
    team: undefined
  });
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>(users || []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isTeamFilterActive, setIsTeamFilterActive] = useState(false);
  
  useEffect(() => {
    const mockData = generateMockLeaderboard(50);
    setLeaderboardData(mockData);
  }, []);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term) {
      setSearchParams({ search: term });
      setIsSearchActive(true);
    } else {
      setSearchParams({});
      setIsSearchActive(false);
    }
  };
  
  const handleFilterChange = (newFilter: Partial<LeaderboardFilter>) => {
    setFilter(prevFilter => ({ ...prevFilter, ...newFilter }));
  };
  
  const filteredLeaderboard = leaderboardData.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Court Leaderboard
          </CardTitle>
          <CardDescription>
            Track the realm's most influential nobles and their royal tributes
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search noble..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="glass-morphism border-white/10 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Select onValueChange={(value) => handleFilterChange({ sortBy: value })}>
                <SelectTrigger className="w-[180px] glass-morphism border-white/10">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rank">Rank</SelectItem>
                  <SelectItem value="amountSpent">Amount Spent</SelectItem>
                  <SelectItem value="joinDate">Join Date</SelectItem>
                  <SelectItem value="username">Username</SelectItem>
                </SelectContent>
              </Select>
              
              <Select onValueChange={(value) => handleFilterChange({ sortDirection: value as "asc" | "desc" })}>
                <SelectTrigger className="w-[150px] glass-morphism border-white/10">
                  <SelectValue placeholder="Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <ScrollArea className="h-[600px] rounded-md">
            <LeaderboardTable users={filteredLeaderboard} currentFilter={searchTerm} />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersistentLeaderboard;
