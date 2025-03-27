
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentModal from '@/components/PaymentModal';
import { DollarSign, TrendingUp, Users, Award, CreditCard, Clock, BadgePercent, Zap } from 'lucide-react';

const mockSpendingData = [
  { week: 'Week 1', amount: 100 },
  { week: 'Week 2', amount: 150 },
  { week: 'Week 3', amount: 80 },
  { week: 'Week 4', amount: 200 },
  { week: 'Week 5', amount: 120 },
  { week: 'Week 6', amount: 0 },
  { week: 'Week 7', amount: 300 },
];

const mockTeamDistribution = [
  { name: 'Team Red', value: 45, color: '#FF0066' },
  { name: 'Team Green', value: 35, color: '#00FF8B' },
  { name: 'Team Blue', value: 20, color: '#00BFFF' },
];

const mockRankHistory = [
  { day: 'Mon', rank: 42 },
  { day: 'Tue', rank: 39 },
  { day: 'Wed', rank: 37 },
  { day: 'Thu', rank: 35 },
  { day: 'Fri', rank: 32 },
  { day: 'Sat', rank: 28 },
  { day: 'Sun', rank: 27 },
];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [suggestedAmount, setSuggestedAmount] = useState(100);

  if (!user) {
    // Redirect to login if not authenticated
    navigate('/auth');
    return null;
  }

  const handlePaymentSuccess = (amount: number) => {
    // In a real app, this would update the user's state with the new amount spent
    console.log(`Payment of $${amount} successful!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">Your Dashboard</h1>
            <p className="text-white/70">
              Track your spending, rank, and team contribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="glass-morphism border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-red/10">
                    <DollarSign size={20} className="text-team-red" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/70">Total Spent</p>
                    <p className="text-2xl font-bold">${user.amountSpent}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-green/10">
                    <TrendingUp size={20} className="text-team-green" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/70">Current Rank</p>
                    <p className="text-2xl font-bold">#{user.rank}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-blue/10">
                    <Users size={20} className="text-team-blue" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/70">Team</p>
                    <p className="text-2xl font-bold capitalize">{user.team || 'None'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/70">Tier</p>
                    <p className="text-2xl font-bold capitalize">{user.tier}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="glass-morphism border-white/10 lg:col-span-2">
              <CardHeader>
                <CardTitle>Weekly Spending</CardTitle>
                <CardDescription>Your contributions over the last 7 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockSpendingData} margin={{ top: 20, right: 30, left: 5, bottom: 20 }}>
                      <XAxis dataKey="week" stroke="#ffffff70" />
                      <YAxis stroke="#ffffff70" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
                        formatter={(value) => [`$${value}`, 'Amount']}
                      />
                      <Bar 
                        dataKey="amount" 
                        radius={[4, 4, 0, 0]}
                      >
                        {mockSpendingData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={index === mockSpendingData.length - 1 ? '#00FF8B' : '#9f9ea150'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Weekly Prize Pool</CardTitle>
                <CardDescription>Current prize: $12,450</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="glass-morphism border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <BadgePercent size={18} className="mr-2 text-team-green" />
                        <span className="font-medium">Sustenance Fund</span>
                      </div>
                      <span className="font-bold">$6,225</span>
                    </div>
                    <div className="text-sm text-white/70">
                      <p>Your potential share: $145</p>
                      <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-team-green to-team-blue" 
                          style={{ width: '28%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-morphism border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Award size={18} className="mr-2 text-team-red" />
                        <span className="font-medium">Whale Endowment</span>
                      </div>
                      <span className="font-bold">$6,225</span>
                    </div>
                    <div className="text-sm text-white/70">
                      <p>Current position: Not in Top 3</p>
                      <div className="mt-2 grid grid-cols-3 gap-1">
                        <div className="glass-morphism border-white/10 rounded p-2 text-center">
                          <div className="text-xs text-white/50">1st</div>
                          <div className="font-mono">$3,735</div>
                        </div>
                        <div className="glass-morphism border-white/10 rounded p-2 text-center">
                          <div className="text-xs text-white/50">2nd</div>
                          <div className="font-mono">$1,867</div>
                        </div>
                        <div className="glass-morphism border-white/10 rounded p-2 text-center">
                          <div className="text-xs text-white/50">3rd</div>
                          <div className="font-mono">$622</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
                    onClick={() => setSuggestedAmount(250)}
                  >
                    <Zap size={16} className="mr-2" />
                    Boost Your Chances
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Team Distribution</CardTitle>
                <CardDescription>Overall team contribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mockTeamDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {mockTeamDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
                        formatter={(value) => [`${value}%`, 'Contribution']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 flex justify-center space-x-4">
                  {mockTeamDistribution.map((team, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-1"
                        style={{ backgroundColor: team.color }}
                      ></div>
                      <span className="text-sm text-white/70">{team.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Rank Trajectory</CardTitle>
                <CardDescription>Your recent rank movement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockRankHistory}>
                      <XAxis dataKey="day" stroke="#ffffff70" />
                      <YAxis domain={['dataMax + 5', 'dataMin - 5']} reversed stroke="#ffffff70" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
                        formatter={(value) => [`#${value}`, 'Rank']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="rank" 
                        stroke="#00FF8B" 
                        strokeWidth={2}
                        dot={{ fill: '#00FF8B', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="text-center mt-4 text-sm text-white/70">
                  <p>You've climbed <span className="font-bold text-team-green">15 ranks</span> in the past week!</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Spend to Rank Up</CardTitle>
                <CardDescription>Get ahead of the competition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="glass-morphism border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <TrendingUp size={18} className="mr-2 text-team-red" />
                        <span className="font-medium">Current Rank</span>
                      </div>
                      <span className="font-bold">#{user.rank}</span>
                    </div>
                    <div className="text-sm text-white/70">
                      <p>You need <span className="font-bold">${50}</span> to overtake the user above you.</p>
                    </div>
                  </div>
                  
                  <div className="glass-morphism border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Clock size={18} className="mr-2 text-team-blue" />
                        <span className="font-medium">Spend Streak</span>
                      </div>
                      <span className="font-bold">{user.spendStreak} weeks</span>
                    </div>
                    <div className="text-sm text-white/70">
                      <p>Maintain your streak for prize pool multipliers!</p>
                      <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div 
                          className={`h-full ${user.spendStreak >= 12 ? 'bg-team-red' : user.spendStreak >= 8 ? 'bg-team-green' : 'bg-team-blue'}`} 
                          style={{ width: `${Math.min(user.spendStreak * 8.33, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs">
                        <span>4 weeks</span>
                        <span>8 weeks</span>
                        <span>12 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm">Suggested Contribution</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button 
                        variant="outline" 
                        className={`glass-morphism border-white/10 text-white hover:bg-white/10 ${suggestedAmount === 50 ? 'bg-white/10' : ''}`}
                        onClick={() => setSuggestedAmount(50)}
                      >$50</Button>
                      <Button 
                        variant="outline" 
                        className={`glass-morphism border-white/10 text-white hover:bg-white/10 ${suggestedAmount === 100 ? 'bg-white/10' : ''}`}
                        onClick={() => setSuggestedAmount(100)}
                      >$100</Button>
                      <Button 
                        variant="outline" 
                        className={`glass-morphism border-white/10 text-white hover:bg-white/10 ${suggestedAmount === 250 ? 'bg-white/10' : ''}`}
                        onClick={() => setSuggestedAmount(250)}
                      >$250</Button>
                    </div>
                    
                    <PaymentModal 
                      amount={suggestedAmount}
                      onSuccess={handlePaymentSuccess}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-team-red/10 via-team-green/10 to-team-blue/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold mb-2">Ready to climb higher?</h2>
                <p className="text-white/70 max-w-md">
                  Keep your spending streak alive and climb the leaderboard. Every dollar counts!
                </p>
              </div>
              
              <div className="flex space-x-2">
                <PaymentModal
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                />
                
                <Button className="bg-white/10 hover:bg-white/20 text-white">
                  <CreditCard size={16} className="mr-2" />
                  Manage Payments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
