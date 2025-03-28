
import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Treasure {
  id: number;
  name: string;
  location: string;
  value: number;
  found: boolean;
  image?: string;
}

interface TreasureMapProps {
  treasures: Treasure[];
  onTreasureClick: (id: number) => void;
}

const TreasureMap: React.FC<TreasureMapProps> = ({ treasures, onTreasureClick }) => {
  // This is a simplified treasure map for the demo
  // In a real implementation, this would be a more interactive map with coordinate-based placement
  
  return (
    <div className="relative">
      <div className="relative w-full h-full bg-transparent">
        {/* Background map image */}
        <div className="w-full aspect-[16/10] overflow-hidden rounded-lg relative">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Kingdom Map" 
            className="w-full h-full object-cover opacity-40"
          />
          
          {/* Map overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
          
          {/* Map locations */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl mx-auto">
              <h2 className="text-2xl font-medieval text-center mb-8 royal-gradient">Royal Kingdom Map</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Leaderboard location */}
                <div className={`p-4 rounded-lg glass-morphism ${treasures.find(t => t.location === 'leaderboard')?.found ? 'border-royal-gold/50' : 'border-white/10'}`}>
                  <h3 className="font-bold mb-1 flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
                    Noble Rankings
                  </h3>
                  <p className="text-sm text-white/70 mb-3">The grand display of wealth and competition.</p>
                  
                  {treasures.find(t => t.location === 'leaderboard' && !t.found) && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full glass-morphism border-royal-gold/20 text-royal-gold"
                      onClick={() => onTreasureClick(treasures.find(t => t.location === 'leaderboard')?.id || 0)}
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      Search Area
                    </Button>
                  )}
                  
                  {treasures.find(t => t.location === 'leaderboard' && t.found) && (
                    <div className="text-xs text-royal-gold flex items-center justify-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      Royal Goblet Found!
                    </div>
                  )}
                </div>
                
                {/* Profile location */}
                <div className={`p-4 rounded-lg glass-morphism ${treasures.find(t => t.location === 'profile')?.found ? 'border-royal-gold/50' : 'border-white/10'}`}>
                  <h3 className="font-bold mb-1 flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-royal-purple" />
                    Royal Profiles
                  </h3>
                  <p className="text-sm text-white/70 mb-3">The personal domains of our kingdom's nobles.</p>
                  
                  {treasures.find(t => t.location === 'profile' && !t.found) && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full glass-morphism border-royal-purple/20 text-royal-purple"
                      onClick={() => onTreasureClick(treasures.find(t => t.location === 'profile')?.id || 0)}
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      Search Area
                    </Button>
                  )}
                  
                  {treasures.find(t => t.location === 'profile' && t.found) && (
                    <div className="text-xs text-royal-purple flex items-center justify-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      Crown Jewels Found!
                    </div>
                  )}
                </div>
                
                {/* FAQ location */}
                <div className={`p-4 rounded-lg glass-morphism ${treasures.find(t => t.location === 'faq')?.found ? 'border-royal-gold/50' : 'border-white/10'}`}>
                  <h3 className="font-bold mb-1 flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-royal-crimson" />
                    Knowledge Archives
                  </h3>
                  <p className="text-sm text-white/70 mb-3">The repository of royal wisdom and guidance.</p>
                  
                  {treasures.find(t => t.location === 'faq' && !t.found) && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full glass-morphism border-royal-crimson/20 text-royal-crimson"
                      onClick={() => onTreasureClick(treasures.find(t => t.location === 'faq')?.id || 0)}
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      Search Area
                    </Button>
                  )}
                  
                  {treasures.find(t => t.location === 'faq' && t.found) && (
                    <div className="text-xs text-royal-crimson flex items-center justify-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      Ancient Scroll Found!
                    </div>
                  )}
                </div>
                
                {/* Teams location */}
                <div className={`p-4 rounded-lg glass-morphism ${treasures.find(t => t.location === 'teams')?.found ? 'border-royal-gold/50' : 'border-white/10'}`}>
                  <h3 className="font-bold mb-1 flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-royal-navy" />
                    Faction Grounds
                  </h3>
                  <p className="text-sm text-white/70 mb-3">Where nobles pledge allegiance to their houses.</p>
                  
                  {treasures.find(t => t.location === 'teams' && !t.found) && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full glass-morphism border-royal-navy/20 text-royal-navy"
                      onClick={() => onTreasureClick(treasures.find(t => t.location === 'teams')?.id || 0)}
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      Search Area
                    </Button>
                  )}
                  
                  {treasures.find(t => t.location === 'teams' && t.found) && (
                    <div className="text-xs text-royal-navy flex items-center justify-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      Team Banner Found!
                    </div>
                  )}
                </div>
                
                {/* Spend location */}
                <div className={`p-4 rounded-lg glass-morphism ${treasures.find(t => t.location === 'spend')?.found ? 'border-royal-gold/50' : 'border-white/10'} md:col-span-2`}>
                  <h3 className="font-bold mb-1 flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
                    Royal Treasury
                  </h3>
                  <p className="text-sm text-white/70 mb-3">The center of commerce and power, where coin becomes status.</p>
                  
                  {treasures.find(t => t.location === 'spend' && !t.found) && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full glass-morphism border-royal-gold/20 text-royal-gold"
                      onClick={() => onTreasureClick(treasures.find(t => t.location === 'spend')?.id || 0)}
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      Search Area
                    </Button>
                  )}
                  
                  {treasures.find(t => t.location === 'spend' && t.found) && (
                    <div className="text-xs text-royal-gold flex items-center justify-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      Merchant's Chest Found!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureMap;
