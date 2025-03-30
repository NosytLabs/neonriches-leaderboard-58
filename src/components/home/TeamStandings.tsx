
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Shield, CreditCard, Users, Trophy, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/formatters';

// Sample team data
const teamData = [
  {
    id: 'red',
    name: 'House Crimson',
    icon: <Flame className="h-6 w-6 text-team-red" />,
    color: 'text-team-red',
    bgColor: 'bg-team-red',
    borderColor: 'border-team-red/30',
    hoverBorderColor: 'hover:border-team-red',
    progressColor: 'bg-team-red',
    memberCount: 425,
    totalSpent: 280000,
    weeklyGoal: 350000,
    topSpender: {
      name: 'LordFirebrand',
      amount: 12450
    }
  },
  {
    id: 'green',
    name: 'House Emerald',
    icon: <Shield className="h-6 w-6 text-team-green" />,
    color: 'text-team-green',
    bgColor: 'bg-team-green',
    borderColor: 'border-team-green/30',
    hoverBorderColor: 'hover:border-team-green',
    progressColor: 'bg-team-green',
    memberCount: 380,
    totalSpent: 240000,
    weeklyGoal: 300000,
    topSpender: {
      name: 'EmberGardener',
      amount: 10800
    }
  },
  {
    id: 'blue',
    name: 'House Sapphire',
    icon: <CreditCard className="h-6 w-6 text-team-blue" />,
    color: 'text-team-blue',
    bgColor: 'bg-team-blue',
    borderColor: 'border-team-blue/30',
    hoverBorderColor: 'hover:border-team-blue',
    progressColor: 'bg-team-blue',
    memberCount: 410,
    totalSpent: 260000,
    weeklyGoal: 320000,
    topSpender: {
      name: 'OceanMonarch',
      amount: 11250
    }
  }
];

const TeamStandings: React.FC = () => {
  // Calculate the total spent by all teams
  const totalAllTeams = teamData.reduce((acc, team) => acc + team.totalSpent, 0);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {teamData.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className={cn(
              "glass-morphism overflow-hidden transition-all duration-300 h-full",
              team.borderColor,
              team.hoverBorderColor
            )}>
              <div className={cn("h-1", team.bgColor)}></div>
              <CardHeader className={cn("bg-black/20 border-b border-white/5")}>
                <div className="flex items-center space-x-3">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", `bg-${team.id === 'red' ? 'team-red' : team.id === 'green' ? 'team-green' : 'team-blue'}/20`)}>
                    {team.icon}
                  </div>
                  <div>
                    <CardTitle className={team.color}>{team.name}</CardTitle>
                    <CardDescription>{team.memberCount} members</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Total Spent:</span>
                  <span className={cn("text-xl font-bold", team.color)}>{formatCurrency(team.totalSpent)}</span>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-white/70">Weekly Goal:</span>
                    <span className="text-sm">{Math.round((team.totalSpent / team.weeklyGoal) * 100)}%</span>
                  </div>
                  <Progress value={(team.totalSpent / team.weeklyGoal) * 100} className="h-2" indicatorClassName={team.progressColor} />
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-1">
                    <Trophy className={cn("h-4 w-4", team.color)} />
                    <span>Top Spender:</span>
                  </div>
                  <span>{team.topSpender.name} ({formatCurrency(team.topSpender.amount)})</span>
                </div>
                
                <div className="pt-2">
                  <div className="text-center p-2 rounded-md bg-black/20 border border-white/5">
                    <p className={cn("text-sm font-medium", team.color)}>
                      {team.id === 'red' 
                        ? '"Through Fire and Gold, We Reign Supreme!"' 
                        : team.id === 'green' 
                          ? '"Our Wealth Grows Like the Ancient Forest!"' 
                          : '"Deep As the Ocean, Vast As Our Coffers!"'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="glass-morphism p-6 rounded-lg border-royal-gold/20 mb-8">
        <h3 className="text-xl font-bold mb-4 royal-gradient text-center">Current Kingdom Standings</h3>
        
        <div className="space-y-4">
          {teamData.sort((a, b) => b.totalSpent - a.totalSpent).map((team, index) => (
            <div key={team.id} className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center border border-white/10">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", `bg-${team.id === 'red' ? 'team-red' : team.id === 'green' ? 'team-green' : 'team-blue'}/20`)}>
                      {team.icon}
                    </div>
                    <span className={team.color}>{team.name}</span>
                  </div>
                </div>
                <span className="font-bold">{formatCurrency(team.totalSpent)}</span>
              </div>
              
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-black/20">
                  <div
                    style={{ width: `${(team.totalSpent / totalAllTeams) * 100}%` }}
                    className={cn("shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center", team.progressColor)}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-6 text-sm text-white/70">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>Total Members: {teamData.reduce((acc, team) => acc + team.memberCount, 0)}</span>
          </div>
          <div>
            Total Kingdom Wealth: {formatCurrency(totalAllTeams)}
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/teams">
          <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 group">
            <Shield className="mr-2 h-4 w-4" />
            Join a Royal House
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TeamStandings;
