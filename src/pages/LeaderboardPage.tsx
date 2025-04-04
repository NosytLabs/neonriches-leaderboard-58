
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LeaderboardPage: React.FC = () => {
  // Mock data for the leaderboard
  const leaderboardData = [
    { id: 1, username: 'RoyalSpender', rank: 1, spent: 25000, team: 'gold' },
    { id: 2, username: 'MoneyKing', rank: 2, spent: 18500, team: 'purple' },
    { id: 3, username: 'StatusSeeker', rank: 3, spent: 15200, team: 'red' },
    { id: 4, username: 'EliteUser', rank: 4, spent: 12800, team: 'blue' },
    { id: 5, username: 'LuxuryLife', rank: 5, spent: 10500, team: 'green' },
    { id: 6, username: 'RichRoyal', rank: 6, spent: 9800, team: 'gold' },
    { id: 7, username: 'WealthyOne', rank: 7, spent: 8700, team: 'purple' },
    { id: 8, username: 'BigSpender', rank: 8, spent: 7600, team: 'red' },
    { id: 9, username: 'GoldMember', rank: 9, spent: 6400, team: 'blue' },
    { id: 10, username: 'TopTier', rank: 10, spent: 5200, team: 'green' },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Global Spending Leaderboard</h1>
          
          <Card className="glass-morphism border-white/10 mb-8">
            <CardHeader>
              <CardTitle>Top Spenders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4">Rank</th>
                      <th className="text-left py-3 px-4">User</th>
                      <th className="text-left py-3 px-4">Team</th>
                      <th className="text-right py-3 px-4">Amount Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((user) => (
                      <tr 
                        key={user.id} 
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <span className={`font-bold ${
                            user.rank === 1 ? 'text-yellow-400' : 
                            user.rank === 2 ? 'text-gray-300' : 
                            user.rank === 3 ? 'text-amber-700' : ''
                          }`}>
                            #{user.rank}
                          </span>
                        </td>
                        <td className="py-3 px-4">{user.username}</td>
                        <td className="py-3 px-4 capitalize">{user.team}</td>
                        <td className="py-3 px-4 text-right font-medium">
                          ${user.spent.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center text-sm text-white/50">
                <p>Leaderboard updates in real-time based on user spending</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <p className="text-lg mb-4">Want to rise in the ranks?</p>
            <button className="bg-royal-gold hover:bg-royal-gold/90 text-black font-bold py-2 px-6 rounded">
              Deposit Now
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LeaderboardPage;
