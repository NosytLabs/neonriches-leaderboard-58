
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ArrowUp, ArrowDown, Filter, Crown, Award, Shield } from 'lucide-react';

const mockLeaderboardData = [
  { id: 1, username: 'SupremeOverlord', amountSpent: 1500, rank: 1, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=1', title: 'High King' },
  { id: 2, username: 'WealthyPatron', amountSpent: 1200, rank: 2, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=2', title: 'Grand Duke' },
  { id: 3, username: 'RoyalBenefactor', amountSpent: 950, rank: 3, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=3', title: 'Archduke' },
  { id: 4, username: 'NobleQueen', amountSpent: 800, rank: 4, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=4', title: 'Marquess' },
  { id: 5, username: 'OpulentRuler', amountSpent: 750, rank: 5, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=5', title: 'Earl' },
  { id: 6, username: 'CoffersMaster', amountSpent: 600, rank: 6, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=6', title: 'Viscount' },
  { id: 7, username: 'RegalPatroness', amountSpent: 550, rank: 7, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=7', title: 'Baron' },
  { id: 8, username: 'TreasureKeeper', amountSpent: 480, rank: 8, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=8', title: 'Baronet' },
  { id: 9, username: 'CrownServant', amountSpent: 420, rank: 9, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=9', title: 'Knight' },
  { id: 10, username: 'RoyalMerchant', amountSpent: 350, rank: 10, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=10', title: 'Squire' },
];

const getTeamColor = (team: string) => {
  switch (team) {
    case 'red': return 'royal-purple';
    case 'green': return 'royal-gold';
    case 'blue': return 'royal-blue';
    default: return 'white';
  }
};

const getTeamIcon = (team: string) => {
  switch (team) {
    case 'red': return <Crown size={14} className="mr-1.5" />;
    case 'green': return <Award size={14} className="mr-1.5" />;
    case 'blue': return <Shield size={14} className="mr-1.5" />;
    default: return null;
  }
};

const getTeamName = (team: string) => {
  switch (team) {
    case 'red': return 'Purple Dynasty';
    case 'green': return 'Gold Dominion';
    case 'blue': return 'Azure Order';
    default: return '';
  }
};

const Leaderboard = () => {
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
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Crown size={50} className="text-royal-gold animate-crown-glow mx-auto" />
          </div>
          <h2 className="text-4xl font-royal royal-gradient mb-4">The Royal Court</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-serif">
            Behold the noble hierarchy of our realm—where status is measured in gold, and contributions to the crown determine one's place in court.
          </p>
        </div>
        
        <div className="royal-card rounded-xl overflow-hidden mb-8">
          <div className="p-4 border-b border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
              <input 
                type="text" 
                placeholder="Search nobles..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline" 
                size="sm" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white ${activeFilter === null ? 'bg-white/10' : ''}`}
                onClick={() => handleFilter(null)}
              >
                All Courts
              </Button>
              <Button
                variant="outline" 
                size="sm" 
                className={`glass-morphism border-white/10 hover:bg-white/10 ${activeFilter === 'red' ? 'bg-white/10' : ''}`}
                style={{ color: '#9B26AF' }}
                onClick={() => handleFilter('red')}
              >
                <Crown size={14} className="mr-1.5" />
                Purple Dynasty
              </Button>
              <Button
                variant="outline" 
                size="sm" 
                className={`glass-morphism border-white/10 hover:bg-white/10 ${activeFilter === 'green' ? 'bg-white/10' : ''}`}
                style={{ color: '#FFD700' }}
                onClick={() => handleFilter('green')}
              >
                <Award size={14} className="mr-1.5" />
                Gold Dominion
              </Button>
              <Button
                variant="outline" 
                size="sm" 
                className={`glass-morphism border-white/10 hover:bg-white/10 ${activeFilter === 'blue' ? 'bg-white/10' : ''}`}
                style={{ color: '#0055A4' }}
                onClick={() => handleFilter('blue')}
              >
                <Shield size={14} className="mr-1.5" />
                Azure Order
              </Button>
              
              <Button
                variant="outline" 
                size="sm" 
                className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white"
                onClick={handleSort}
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
          
          <div className="max-h-[600px] overflow-y-auto scrollbar-none">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr className="text-left text-white/50 text-sm font-royal uppercase tracking-wider">
                  <th className="py-4 px-6 font-medium">Rank</th>
                  <th className="py-4 px-6 font-medium">Noble</th>
                  <th className="py-4 px-6 font-medium">Title</th>
                  <th className="py-4 px-6 font-medium">Dynasty</th>
                  <th className="py-4 px-6 font-medium text-right">Royal Contribution</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((user, index) => (
                  <tr 
                    key={user.id} 
                    className="text-left border-t border-white/5 hover:bg-white/5 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <span className="font-mono text-xl font-bold text-white/70">#{user.rank}</span>
                        {user.rank === 1 && (
                          <Crown size={16} className="ml-2 text-royal-gold animate-crown-glow" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full overflow-hidden border-2 border-${getTeamColor(user.team)} mr-3`}>
                          <img src={user.profileImage} alt={user.username} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-medium font-royal">{user.username}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-serif text-white/90">{user.title}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${getTeamColor(user.team)}/10 text-${getTeamColor(user.team)} border border-${getTeamColor(user.team)}/30`}>
                        {getTeamIcon(user.team)}
                        {getTeamName(user.team)}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-mono font-bold text-white">${user.amountSpent.toLocaleString()}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white font-royal uppercase tracking-wider">
            View More Nobles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
