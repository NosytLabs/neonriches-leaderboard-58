
import React, { useState } from 'react';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardFilters from './LeaderboardFilters';
import LeaderboardTable from './LeaderboardTable';
import LeaderboardFooter from './LeaderboardFooter';
import { mockLeaderboardData } from './LeaderboardData';

const RoyalCourt = () => {
  const [leaderboardData, setLeaderboardData] = useState(mockLeaderboardData);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const handleSort = () => {
    const newDirection = sortDirection === 'desc' ? 'asc' : 'desc';
    setSortDirection(newDirection);
    
    const sortedData = [...leaderboardData].sort((a, b) => {
      return newDirection === 'desc' 
        ? b.amountSpent - a.amountSpent 
        : a.amountSpent - b.amountSpent;
    });
    
    setLeaderboardData(sortedData);
  };
  
  const handleFilter = (team: string | null) => {
    setActiveFilter(team);
    
    if (team === null) {
      setLeaderboardData(mockLeaderboardData);
      return;
    }
    
    const filteredData = mockLeaderboardData.filter(user => user.team === team);
    setLeaderboardData(filteredData);
  };
  
  return (
    <section id="leaderboard" className="w-full py-20 px-6 throne-bg">
      <div className="max-w-7xl mx-auto">
        <LeaderboardHeader />
        
        <div className="royal-card rounded-xl overflow-hidden mb-8">
          <LeaderboardFilters 
            activeFilter={activeFilter}
            sortDirection={sortDirection}
            onFilterChange={handleFilter}
            onSortChange={handleSort}
          />
          
          <LeaderboardTable leaderboardData={leaderboardData} />
        </div>
        
        <LeaderboardFooter />
      </div>
    </section>
  );
};

export default RoyalCourt;
