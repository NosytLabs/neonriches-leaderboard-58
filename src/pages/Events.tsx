import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentModal from '@/components/PaymentModal';
import { Calendar, Clock, Zap, DollarSign, Users, Trophy, ArrowUpRight, Award, Bell } from 'lucide-react';

// Mock events data
const currentEvent = {
  id: 1,
  name: 'Poke Party',
  description: 'Pay $0.50 to drop another user down one rank for 24 hours',
  startDate: new Date('2023-09-01'),
  endDate: new Date('2023-09-07'),
  progress: 65,
  image: 'https://picsum.photos/id/430/800/400'
};

const upcomingEvents = [
  {
    id: 2,
    name: 'Rank Multiplier',
    description: 'All contributions count double towards rank for 24 hours',
    startDate: new Date('2023-09-10'),
    endDate: new Date('2023-09-11'),
    image: 'https://picsum.photos/id/431/800/400'
  },
  {
    id: 3,
    name: 'Team Takeover',
    description: 'The team with the most contributions this week gets a special badge',
    startDate: new Date('2023-09-15'),
    endDate: new Date('2023-09-22'),
    image: 'https://picsum.photos/id/452/800/400'
  }
];

// Mock top users for the "Poke" target list
const topUsers = [
  { id: 1, username: 'NeonBoss', amountSpent: 1500, rank: 1, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, username: 'DigitalWhale', amountSpent: 1200, rank: 2, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, username: 'CryptoKing', amountSpent: 950, rank: 3, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, username: 'BlockchainQueen', amountSpent: 800, rank: 4, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, username: 'MetaverseRuler', amountSpent: 750, rank: 5, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=5' },
];

const getTeamColor = (team: string) => {
  switch (team) {
    case 'red': return 'team-red';
    case 'green': return 'team-green';
    case 'blue': return 'team-blue';
    default: return 'white';
  }
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const Events = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [pokeCooldown, setPokeCooldown] = useState<Record<number, boolean>>({});

  if (!user) {
    // Redirect to login if not authenticated
    navigate('/auth');
    return null;
  }

  const handlePoke = (targetId: number, targetName: string) => {
    if (pokeCooldown[targetId]) {
      toast({
        title: "Cooldown Active",
        description: `You've recently poked ${targetName}. Try again later.`,
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would call an API endpoint
    toast({
      title: "Poke Successful!",
        description: `You've knocked ${targetName} down one rank for 24 hours.`,
    });
    
    // Set cooldown
    setPokeCooldown({
      ...pokeCooldown,
      [targetId]: true
    });
    
    // Clear cooldown after 24 hours (or shorter for demo purposes)
    setTimeout(() => {
      setPokeCooldown(prevState => ({
        ...prevState,
        [targetId]: false
      }));
    }, 60000); // 1 minute cooldown for demo purposes
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">P2W Events</h1>
            <p className="text-white/70">
              Special time-limited events to shake up the leaderboard.
            </p>
          </div>
          
          {/* Current Event */}
          <Card className="glass-morphism border-white/10 mb-12 overflow-hidden">
            <div className="relative h-48 md:h-64">
              <img 
                src={currentEvent.image} 
                alt={currentEvent.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-team-red text-white text-xs px-2 py-1 rounded-full">
                    ACTIVE EVENT
                  </span>
                  <span className="text-xs text-white/80">
                    {formatDate(currentEvent.startDate)} - {formatDate(currentEvent.endDate)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">{currentEvent.name}</h2>
              </div>
            </div>
            
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <p className="text-white/70 mb-4 max-w-2xl">
                    {currentEvent.description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1.5 text-white/50" />
                      <span className="text-sm text-white/70">
                        {formatDate(currentEvent.startDate)} - {formatDate(currentEvent.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1.5 text-white/50" />
                      <span className="text-sm text-white/70">
                        {Math.floor((currentEvent.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-64">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-sm text-white/70">Event Progress</span>
                    <span className="text-sm font-medium">{currentEvent.progress}%</span>
                  </div>
                  <Progress value={currentEvent.progress} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-team-red via-team-green to-team-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Poke Party Feature */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gradient mb-2">Poke Party Targets</h2>
                <p className="text-white/70">
                  Pay $0.50 to knock someone down one rank for 24 hours. Choose your target wisely!
                </p>
              </div>
              
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70">
                  <Clock size={14} className="inline-block mr-1.5" />
                  24h effect duration
                </div>
                <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70">
                  <DollarSign size={14} className="inline-block mr-1.5" />
                  $0.50 per poke
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topUsers.map((targetUser) => (
                <Card key={targetUser.id} className="glass-morphism border-white/10 hover:border-white/20 transition-all">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full overflow-hidden border-2 border-${getTeamColor(targetUser.team)} mr-3`}>
                          <img src={targetUser.profileImage} alt={targetUser.username} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{targetUser.username}</h3>
                            <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                              Rank #{targetUser.rank}
                            </span>
                          </div>
                          <div className={`inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium bg-${getTeamColor(targetUser.team)}/10 text-${getTeamColor(targetUser.team)} border border-${getTeamColor(targetUser.team)}/30`}>
                            Team {targetUser.team.charAt(0).toUpperCase() + targetUser.team.slice(1)}
                          </div>
                        </div>
                      </div>
                      
                      <PaymentModal
                        amount={0.5}
                        title="Poke a User"
                        description={`Pay $0.50 to drop ${targetUser.username} down one rank for 24 hours.`}
                        onSuccess={() => handlePoke(targetUser.id, targetUser.username)}
                        trigger={
                          <Button 
                            className="bg-white/10 hover:bg-white/20 text-white"
                            disabled={pokeCooldown[targetUser.id]}
                          >
                            <Zap size={16} className="mr-2" />
                            {pokeCooldown[targetUser.id] ? 'Cooldown' : 'Poke - $0.50'}
                          </Button>
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gradient mb-6">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="glass-morphism border-white/10 overflow-hidden">
                  <div className="relative h-40">
                    <img 
                      src={event.image} 
                      alt={event.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                          UPCOMING
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{event.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="pt-4">
                    <p className="text-white/70 mb-3">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-white/50">
                      <Calendar size={14} className="mr-1.5" />
                      {formatDate(event.startDate)} - {formatDate(event.endDate)}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
                      <Bell size={16} className="mr-2" />
                      Get Notified
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-team-red/10 via-team-green/10 to-team-blue/10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Event Benefits</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Participating in events offers unique advantages and opportunities to climb the leaderboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-team-red/10 mb-4">
                  <Trophy size={24} className="text-team-red" />
                </div>
                <h3 className="font-medium mb-2">Exclusive Rewards</h3>
                <p className="text-sm text-white/70">
                  Event participants can earn special badges and profile features not available elsewhere.
                </p>
              </div>
              
              <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-team-green/10 mb-4">
                  <ArrowUpRight size={24} className="text-team-green" />
                </div>
                <h3 className="font-medium mb-2">Leaderboard Impact</h3>
                <p className="text-sm text-white/70">
                  Events create opportunities to boost your rank without massive spending.
                </p>
              </div>
              
              <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-team-blue/10 mb-4">
                  <Users size={24} className="text-team-blue" />
                </div>
                <h3 className="font-medium mb-2">Team Bonuses</h3>
                <p className="text-sm text-white/70">
                  Many events offer team-based rewards and multipliers for coordinated participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
