
import React, { useState } from 'react';
import { Map, Compass, Sparkles, Award, Scroll, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RoyalDivider from '@/components/ui/royal-divider';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import TreasureMap from './components/TreasureMap';
import { ScrollArea } from '@/components/ui/scroll-area';

// Treasure hunt clues and riddles
const TREASURES = [
  {
    id: 1,
    name: "Royal Goblet",
    clue: "Where nobles gather to toast their wealth, a golden chalice awaits the stealthy.",
    hint: "Look at the site's celebration section, where spending milestones are honored.",
    location: "leaderboard",
    value: 25,
    found: false,
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Crown Jewels",
    clue: "The highest spender's profile holds a secret, embedded within their royal display.",
    hint: "Visit the profile of the current king or queen and examine their achievements section.",
    location: "profile",
    value: 50,
    found: false,
    image: "https://images.unsplash.com/photo-1594733421224-6839b3a109b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Ancient Scroll",
    clue: "Knowledge of the kingdom's rules will lead you to this parchment of wisdom.",
    hint: "FAQ sections often contain valuable information for treasure hunters.",
    location: "faq",
    value: 15,
    found: false,
    image: "https://images.unsplash.com/photo-1587653263995-422546a7a569?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Team Banner",
    clue: "Choose your allegiance wisely, for your faction's stronghold guards a precious relic.",
    hint: "The team selection page contains more than just team information.",
    location: "teams",
    value: 30,
    found: false,
    image: "https://images.unsplash.com/photo-1551732998-9573f695fdbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    name: "Merchant's Chest",
    clue: "Where coins are exchanged for status, a hidden chest awaits the discerning eye.",
    hint: "Look carefully at the spending page for a clickable treasure icon.",
    location: "spend",
    value: 35,
    found: false,
    image: "https://images.unsplash.com/photo-1551625170-9ea39ea1b6a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const TreasureHuntEvent = () => {
  const { toast } = useToast();
  const [treasures, setTreasures] = useState(() => {
    // Load treasure hunt progress from localStorage
    const savedTreasures = localStorage.getItem('treasure-hunt-progress');
    if (savedTreasures) {
      return JSON.parse(savedTreasures);
    }
    return TREASURES;
  });
  
  const [activeClue, setActiveClue] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);
  
  // Calculate progress
  const foundTreasures = treasures.filter((t) => t.found).length;
  const progressPercent = (foundTreasures / treasures.length) * 100;
  const totalValue = treasures.reduce((sum, t) => t.found ? sum + t.value : sum, 0);
  
  // Mark a treasure as found
  const markTreasureFound = (id: number) => {
    const updatedTreasures = treasures.map(t => 
      t.id === id ? { ...t, found: true } : t
    );
    setTreasures(updatedTreasures);
    
    // Save progress to localStorage
    localStorage.setItem('treasure-hunt-progress', JSON.stringify(updatedTreasures));
    
    const foundTreasure = treasures.find(t => t.id === id);
    
    toast({
      title: `Treasure Found!`,
      description: `You've discovered the ${foundTreasure?.name} worth $${foundTreasure?.value}.`,
    });
  };
  
  // Use a hint (would cost in a real implementation)
  const useHint = (id: number) => {
    const treasure = treasures.find(t => t.id === id);
    
    toast({
      title: `Hint for ${treasure?.name}`,
      description: treasure?.hint,
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold royal-gradient mb-2 flex items-center">
            <Map size={20} className="text-royal-gold mr-2 animate-pulse-slow" />
            Royal Treasure Hunt
          </h2>
          <p className="text-white/70">
            Search the kingdom for hidden treasures! Solve riddles and follow clues to find valuable items scattered throughout the site.
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-royal-purple/20 transition-all">
            <Trophy size={14} className="inline-block mr-1.5 text-royal-purple" />
            {foundTreasures}/{treasures.length} found
          </div>
          <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-royal-gold/20 transition-all">
            <Sparkles size={14} className="inline-block mr-1.5 text-royal-gold" />
            ${totalValue} earned
          </div>
        </div>
      </div>
      
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg font-medieval">
            <Compass className="h-5 w-5 text-royal-gold mr-3 animate-spin-slow" />
            Treasure Hunt Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/70">Hunt Progress</span>
              <span className="text-royal-gold">{Math.round(progressPercent)}%</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Button
                variant="outline"
                className="glass-morphism border-royal-gold/30 hover:bg-royal-gold/10"
                onClick={() => setShowMap(true)}
              >
                <Map className="mr-2 h-4 w-4" />
                Open Map
              </Button>
              
              <Button
                variant="outline"
                className="glass-morphism border-white/10 hover:bg-white/10"
                onClick={() => {
                  toast({
                    title: "Treasure Hunt Help",
                    description: "Search for hidden treasures throughout the site. Click on treasure icons when you find them!",
                  });
                }}
              >
                <Scroll className="mr-2 h-4 w-4" />
                Instructions
              </Button>
              
              <Button
                variant="default"
                className="bg-gradient-to-r from-royal-purple to-royal-gold text-white hover:opacity-90"
                onClick={() => {
                  toast({
                    title: "Rewards Claimed!",
                    description: `You've claimed $${totalValue} in rewards from your found treasures.`,
                  });
                }}
                disabled={totalValue === 0}
              >
                <Award className="mr-2 h-4 w-4" />
                Claim Rewards
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="clues" className="w-full">
        <TabsList className="w-full grid grid-cols-2 bg-transparent glass-morphism border-white/10 mb-6">
          <TabsTrigger value="clues" className="data-[state=active]:bg-royal-gold/10 data-[state=active]:text-royal-gold">
            <Scroll className="h-4 w-4 mr-2" />
            Treasure Clues
          </TabsTrigger>
          <TabsTrigger value="found" className="data-[state=active]:bg-royal-purple/10 data-[state=active]:text-royal-purple">
            <Trophy className="h-4 w-4 mr-2" />
            Found Treasures
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="clues" className="space-y-4 animate-fade-in">
          {treasures.filter(t => !t.found).map((treasure) => (
            <Card 
              key={treasure.id} 
              className="glass-morphism border-white/10 transition-all hover:border-royal-gold/30 cursor-pointer"
              onClick={() => setActiveClue(treasure.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 rounded-full glass-morphism border-royal-gold/20">
                      <Scroll className="h-5 w-5 text-royal-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold">{treasure.name}</h3>
                      <p className="text-sm text-white/70">Value: ${treasure.value}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="h-8 w-8 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      useHint(treasure.id);
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-royal-gold" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {treasures.filter(t => !t.found).length === 0 && (
            <div className="text-center p-8">
              <Award className="h-16 w-16 mx-auto text-royal-gold opacity-20 mb-4" />
              <h3 className="text-xl font-bold royal-gradient mb-2">All Treasures Found!</h3>
              <p className="text-white/70">Congratulations, you've discovered all the hidden treasures.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="found" className="space-y-4 animate-fade-in">
          {treasures.filter(t => t.found).map((treasure) => (
            <Card key={treasure.id} className="glass-morphism border-royal-gold/30 overflow-hidden">
              <div className="md:flex">
                <div className="relative h-32 md:h-auto md:w-1/3">
                  <img 
                    src={treasure.image} 
                    alt={treasure.name} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-royal-gold text-black font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    ${treasure.value}
                  </div>
                </div>
                <CardContent className="p-4 md:w-2/3">
                  <h3 className="font-bold flex items-center">
                    <Trophy className="h-4 w-4 text-royal-gold mr-2" />
                    {treasure.name}
                  </h3>
                  <p className="text-sm text-white/70 mt-1">{treasure.clue}</p>
                  <div className="text-royal-gold text-xs mt-2 flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Found in the {treasure.location} area
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
          
          {treasures.filter(t => t.found).length === 0 && (
            <div className="text-center p-8">
              <Map className="h-16 w-16 mx-auto text-white/20 mb-4" />
              <h3 className="text-xl font-bold mb-2">No Treasures Found Yet</h3>
              <p className="text-white/70">Solve the clues to discover hidden treasures throughout the site.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Active clue dialog */}
      {activeClue && (
        <Dialog open={!!activeClue} onOpenChange={() => setActiveClue(null)}>
          <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="royal-gradient">
                {treasures.find(t => t.id === activeClue)?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="p-4 glass-morphism border-royal-gold/20 rounded-lg">
                <Scroll className="h-5 w-5 text-royal-gold mb-2" />
                <p className="text-white/90 italic font-medieval">
                  "{treasures.find(t => t.id === activeClue)?.clue}"
                </p>
              </div>
              
              <div className="flex justify-between gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 glass-morphism border-white/10"
                  onClick={() => useHint(activeClue)}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Use Hint
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-royal-purple to-royal-gold text-white"
                  onClick={() => {
                    markTreasureFound(activeClue);
                    setActiveClue(null);
                  }}
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Found It!
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Map dialog */}
      <Dialog open={showMap} onOpenChange={() => setShowMap(false)}>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="royal-gradient flex items-center">
              <Map className="h-5 w-5 mr-2 text-royal-gold" />
              Treasure Map
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh]">
            <TreasureMap treasures={treasures} onTreasureClick={markTreasureFound} />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TreasureHuntEvent;
