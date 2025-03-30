
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Coins, CreditCard, Scroll, Trophy, Users, Shield, Crown, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type TeamColor = 'red' | 'green' | 'blue';

interface TeamInfo {
  id: TeamColor;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
  motto: string;
  benefit: string;
  memberCount: number;
  totalSpent: number;
  absurdStat: string;
}

// Helper functions for team data
const getTeamMotto = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return '"Through Fire and Gold, We Reign Supreme!"';
    case 'green':
      return '"Our Wealth Grows Like the Ancient Forest!"';
    case 'blue':
      return '"Deep As the Ocean, Vast As Our Coffers!"';
    default:
      return '';
  }
};

const getTeamBenefit = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return '10% boost to all mockery effects and shame actions';
    case 'green':
      return '5% discount on all profile boost purchases';
    case 'blue':
      return 'Special team-colored profile frames and effects';
    default:
      return '';
  }
};

const getTeamAbsurdStat = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'Collectively burned 15,482 rival banners';
    case 'green':
      return 'Planted 8,241 money trees in the royal garden';
    case 'blue':
      return 'Filled 3 royal pools with gold coins for swimming';
    default:
      return '';
  }
};

// Team data
const teams: TeamInfo[] = [
  {
    id: 'red',
    name: 'House Crimson',
    icon: <Flame className="h-8 w-8" />,
    color: 'text-team-red',
    bgColor: 'bg-team-red',
    description: 'The house of ambition and aggression. Crimson nobles are competitive and fierce, always seeking to dominate the leaderboard through aggressive spending.',
    motto: getTeamMotto('red'),
    benefit: getTeamBenefit('red'),
    memberCount: 425,
    totalSpent: 280000,
    absurdStat: getTeamAbsurdStat('red')
  },
  {
    id: 'green',
    name: 'House Emerald',
    icon: <Shield className="h-8 w-8" />,
    color: 'text-team-green',
    bgColor: 'bg-team-green',
    description: 'The house of growth and prosperity. Emerald nobles value strategic spending and long-term investments in their royal status.',
    motto: getTeamMotto('green'),
    benefit: getTeamBenefit('green'),
    memberCount: 380,
    totalSpent: 240000,
    absurdStat: getTeamAbsurdStat('green')
  },
  {
    id: 'blue',
    name: 'House Sapphire',
    icon: <CreditCard className="h-8 w-8" />,
    color: 'text-team-blue',
    bgColor: 'bg-team-blue',
    description: 'The house of loyalty and tradition. Sapphire nobles are steadfast in their commitment to maintaining their noble status through consistent spending.',
    motto: getTeamMotto('blue'),
    benefit: getTeamBenefit('blue'),
    memberCount: 410,
    totalSpent: 260000,
    absurdStat: getTeamAbsurdStat('blue')
  }
];

interface TeamSelectionProps {
  teams: TeamInfo[];
  user?: any;
  onTeamSelect: (team: TeamColor) => Promise<boolean>;
}

const TeamSelection: React.FC<TeamSelectionProps> = ({ teams, user, onTeamSelect }) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamColor | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSelectTeam = async () => {
    if (!selectedTeam) return;
    
    setIsLoading(true);
    try {
      const success = await onTeamSelect(selectedTeam);
      if (success) {
        toast({
          title: `Welcome to House ${selectedTeam === 'red' ? 'Crimson' : selectedTeam === 'green' ? 'Emerald' : 'Sapphire'}!`,
          description: `You have successfully joined your new royal house.`,
          variant: "success",
        });
        setIsConfirmOpen(false);
      }
    } catch (error) {
      toast({
        title: "Failed to join team",
        description: "There was an error joining the team. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold royal-gradient mb-3">Choose Your Royal House</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Pledge your allegiance to one of three noble houses, each with their own unique benefits and collective goals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <motion.div
            key={team.id}
            className={cn(
              "glass-morphism border rounded-xl overflow-hidden transition-all duration-300",
              selectedTeam === team.id 
                ? `border-${team.id === 'red' ? 'team-red' : team.id === 'green' ? 'team-green' : 'team-blue'}/70` 
                : "border-white/10 hover:border-white/30"
            )}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={cn(
              "h-2",
              team.id === 'red' ? 'bg-team-red' : team.id === 'green' ? 'bg-team-green' : 'bg-team-blue'
            )} />
            
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  team.id === 'red' ? 'bg-team-red/20' : team.id === 'green' ? 'bg-team-green/20' : 'bg-team-blue/20'
                )}>
                  {team.icon}
                </div>
                <div>
                  <CardTitle className={cn(
                    team.id === 'red' ? 'text-team-red' : team.id === 'green' ? 'text-team-green' : 'text-team-blue'
                  )}>
                    {team.name}
                  </CardTitle>
                  <CardDescription>
                    {team.memberCount} members
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p>{team.description}</p>
              
              <div className="bg-black/30 p-3 rounded-lg">
                <p className={cn(
                  "italic font-semibold",
                  team.id === 'red' ? 'text-team-red' : team.id === 'green' ? 'text-team-green' : 'text-team-blue'
                )}>
                  {team.motto}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Team Benefits:</h4>
                <p className="text-sm text-white/70">{team.benefit}</p>
              </div>
              
              <div className="text-sm text-white/50 italic">
                {team.absurdStat}
              </div>
              
              <Button 
                className={cn(
                  "w-full",
                  team.id === 'red' 
                    ? 'bg-team-red hover:bg-team-red/90' 
                    : team.id === 'green' 
                      ? 'bg-team-green hover:bg-team-green/90' 
                      : 'bg-team-blue hover:bg-team-blue/90'
                )}
                onClick={() => setSelectedTeam(team.id)}
                disabled={user?.team === team.id}
              >
                {user?.team === team.id ? 'Current House' : 'Select House'}
              </Button>
            </CardContent>
          </motion.div>
        ))}
      </div>
      
      {selectedTeam && (
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            onClick={() => setIsConfirmOpen(true)}
            className={cn(
              "px-8 py-6",
              selectedTeam === 'red' 
                ? 'bg-team-red hover:bg-team-red/90' 
                : selectedTeam === 'green' 
                  ? 'bg-team-green hover:bg-team-green/90' 
                  : 'bg-team-blue hover:bg-team-blue/90'
            )}
          >
            <Crown className="mr-2 h-5 w-5" />
            Join House {selectedTeam === 'red' ? 'Crimson' : selectedTeam === 'green' ? 'Emerald' : 'Sapphire'}
          </Button>
          
          <p className="mt-4 text-white/60 text-sm">
            Note: You can only change your house once every 30 days
          </p>
        </div>
      )}
      
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="glass-morphism border border-white/10 p-6 rounded-xl max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Your Allegiance</h3>
            <p className="mb-6">
              Are you sure you want to join House {selectedTeam === 'red' ? 'Crimson' : selectedTeam === 'green' ? 'Emerald' : 'Sapphire'}? This choice will affect your profile appearance and team benefits.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" className="w-full" onClick={() => setIsConfirmOpen(false)}>
                Cancel
              </Button>
              <Button 
                className={cn(
                  "w-full",
                  selectedTeam === 'red' 
                    ? 'bg-team-red hover:bg-team-red/90' 
                    : selectedTeam === 'green' 
                      ? 'bg-team-green hover:bg-team-green/90' 
                      : 'bg-team-blue hover:bg-team-blue/90'
                )}
                onClick={handleSelectTeam}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Confirm'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TeamLeaderboard = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold royal-gradient mb-3">House Leaderboard</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          The ongoing battle between royal houses for supremacy and glory.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="glass-morphism border-team-red/30">
          <CardHeader className="bg-team-red/10 border-b border-team-red/20">
            <div className="flex items-center space-x-3">
              <div className="bg-team-red/20 w-10 h-10 rounded-full flex items-center justify-center">
                <Flame className="text-team-red h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-team-red">House Crimson</CardTitle>
                <CardDescription>425 members</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Total Spent:</span>
              <span className="text-xl font-bold text-team-red">$280,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Avg. Per Member:</span>
              <span>$658.82</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Top Spender:</span>
              <span>LordFirebrand ($12,450)</span>
            </div>
            <div className="p-3 bg-black/30 rounded-lg mt-4">
              <p className="text-team-red font-semibold text-center italic">
                "Through Fire and Gold, We Reign Supreme!"
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-team-green/30">
          <CardHeader className="bg-team-green/10 border-b border-team-green/20">
            <div className="flex items-center space-x-3">
              <div className="bg-team-green/20 w-10 h-10 rounded-full flex items-center justify-center">
                <Shield className="text-team-green h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-team-green">House Emerald</CardTitle>
                <CardDescription>380 members</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Total Spent:</span>
              <span className="text-xl font-bold text-team-green">$240,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Avg. Per Member:</span>
              <span>$631.58</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Top Spender:</span>
              <span>EmberGardener ($10,800)</span>
            </div>
            <div className="p-3 bg-black/30 rounded-lg mt-4">
              <p className="text-team-green font-semibold text-center italic">
                "Our Wealth Grows Like the Ancient Forest!"
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-team-blue/30">
          <CardHeader className="bg-team-blue/10 border-b border-team-blue/20">
            <div className="flex items-center space-x-3">
              <div className="bg-team-blue/20 w-10 h-10 rounded-full flex items-center justify-center">
                <CreditCard className="text-team-blue h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-team-blue">House Sapphire</CardTitle>
                <CardDescription>410 members</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Total Spent:</span>
              <span className="text-xl font-bold text-team-blue">$260,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Avg. Per Member:</span>
              <span>$634.15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Top Spender:</span>
              <span>OceanMonarch ($11,250)</span>
            </div>
            <div className="p-3 bg-black/30 rounded-lg mt-4">
              <p className="text-team-blue font-semibold text-center italic">
                "Deep As the Ocean, Vast As Our Coffers!"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10">
          <Trophy className="mr-2 h-4 w-4" />
          View Detailed House Statistics
        </Button>
      </div>
    </div>
  );
};

const TeamActivities = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold royal-gradient mb-3">House Activities</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Participate in royal activities and events to earn glory for your house.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Flame className="h-5 w-5 mr-2 text-royal-gold" />
              Royal House Wars
            </CardTitle>
            <CardDescription>Starts in 3 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>A week-long competition where houses battle to contribute the most to the royal treasury.</p>
            <div className="flex items-center space-x-3 text-sm text-white/70">
              <Users className="h-4 w-4" />
              <span>42 participants registered</span>
            </div>
            <Button className="w-full">Register for Battle</Button>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scroll className="h-5 w-5 mr-2 text-royal-gold" />
              Royal Decree Challenge
            </CardTitle>
            <CardDescription>Ongoing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Complete royal tasks and challenges to earn bonus points for your house.</p>
            <div className="flex items-center space-x-3 text-sm text-white/70">
              <Users className="h-4 w-4" />
              <span>128 active participants</span>
            </div>
            <Button className="w-full">View Challenges</Button>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-royal-gold" />
              Weekly House Tournaments
            </CardTitle>
            <CardDescription>Every Sunday</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Represent your house in weekly spending tournaments to win exclusive rewards.</p>
            <div className="flex items-center space-x-3 text-sm text-white/70">
              <Users className="h-4 w-4" />
              <span>Last winner: House Crimson</span>
            </div>
            <Button className="w-full">View Tournament Schedule</Button>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coins className="h-5 w-5 mr-2 text-royal-gold" />
              House Contribution Bonus
            </CardTitle>
            <CardDescription>Daily</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Receive bonus rank points for contributing to your house's daily spending goal.</p>
            <div className="flex items-center space-x-3 text-sm text-white/70">
              <Users className="h-4 w-4" />
              <span>Today's bonus: 5% extra points</span>
            </div>
            <Button className="w-full">Contribute Now</Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10">
          <Scroll className="mr-2 h-4 w-4" />
          View All House Activities
        </Button>
      </div>
    </div>
  );
};

const Teams: React.FC = () => {
  const { user } = useAuth();
  
  const handleTeamSelect = async (team: TeamColor): Promise<boolean> => {
    // This would typically call an API to update the user's team
    // For now, we'll just simulate a successful response
    return Promise.resolve(true);
  };
  
  return (
    <Layout title="Royal Houses">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold royal-gradient mb-4">Royal Houses of SpendThrone</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join one of our three noble houses and compete for collective glory, prestige, and special rewards.
          </p>
        </motion.div>
        
        <Tabs defaultValue="houses" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full mb-8">
            <TabsTrigger value="houses" className="text-sm md:text-base">
              <Shield className="h-4 w-4 mr-2 md:inline-block" />
              <span className="hidden md:inline">Royal</span> Houses
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="text-sm md:text-base">
              <Trophy className="h-4 w-4 mr-2 md:inline-block" />
              <span className="hidden md:inline">House</span> Leaderboard
            </TabsTrigger>
            <TabsTrigger value="activities" className="text-sm md:text-base">
              <Flame className="h-4 w-4 mr-2 md:inline-block" />
              <span className="hidden md:inline">House</span> Activities
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="houses">
            <TeamSelection teams={teams} user={user} onTeamSelect={handleTeamSelect} />
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <TeamLeaderboard />
          </TabsContent>
          
          <TabsContent value="activities">
            <TeamActivities />
          </TabsContent>
        </Tabs>
        
        <motion.div 
          className="glass-morphism border border-royal-gold/20 p-6 rounded-xl max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-3 royal-gradient">Royal House Lore</h3>
          <p className="text-white/80 mb-4">
            Legend has it that SpendThrone's three royal houses were founded by ancient nobility who discovered that true power comes not from wisdom or strength, but from the size of one's treasury.
          </p>
          <p className="text-white/80 mb-4">
            House Crimson was established by the fierce Lord Goldflame, who believed that wealth should be flaunted with dramatic flair.
            House Emerald was founded by Lady Moneyleaf, who viewed spending as an art form that should grow organically over time.
            House Sapphire came from Sir Coinwave, who believed in the steady current of consistent spending to maintain one's status.
          </p>
          <p className="text-white/80">
            To this day, these houses continue their absurd traditions, competing to see which philosophy of wasteful spending will ultimately prevail.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Teams;
