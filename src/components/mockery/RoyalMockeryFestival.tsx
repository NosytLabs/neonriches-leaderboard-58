
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Target, Crown, Egg, Search, Shield, Info, AlertTriangle } from 'lucide-react';
import { TomatoIcon } from '@/utils/mockeryUtils';
import { useToast } from '@/hooks/use-toast';
import { getMockeryActionIcon, getMockeryName, getMockeryDescription, getMockeryCost, getMockeryTier, getMockeryTierColorClass } from '@/utils/mockeryUtils';

interface MockeryTarget {
  id: string;
  username: string;
  displayName: string;
  rank: number;
  profileImage?: string;
  tier: string;
}

interface MockeryAction {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: string;
}

const RoyalMockeryFestival = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTarget, setSelectedTarget] = useState<MockeryTarget | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  
  const mockeryTargets: MockeryTarget[] = [
    { id: '1', username: 'lordgold', displayName: 'Lord Gold', rank: 3, tier: 'royal' },
    { id: '2', username: 'duchessdiamond', displayName: 'Duchess Diamond', rank: 7, tier: 'premium' },
    { id: '3', username: 'baronbronze', displayName: 'Baron Bronze', rank: 15, tier: 'basic' },
    { id: '4', username: 'countcopper', displayName: 'Count Copper', rank: 22, tier: 'basic' },
    { id: '5', username: 'ladysilver', displayName: 'Lady Silver', rank: 9, tier: 'premium' }
  ];
  
  const mockeryActions = [
    'tomatoes',
    'eggs',
    'crown',
    'stocks',
    'jester',
    'shame',
    'target'
  ];
  
  const handleMockery = () => {
    if (!selectedTarget || !selectedAction) return;
    
    toast({
      title: "Mockery Deployed!",
      description: `You have successfully mocked ${selectedTarget.displayName} with ${getMockeryName(selectedAction as any)}.`,
    });
    
    setSelectedAction(null);
  };
  
  const filteredTargets = searchTerm 
    ? mockeryTargets.filter(target => 
        target.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
        target.displayName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mockeryTargets;
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5 text-royal-crimson" />
            Royal Mockery Festival
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 mb-6">
            Humble a noble by subjecting them to public mockery. Choose your target and your method of mockery wisely.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                Select Your Target
              </h3>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input
                  placeholder="Search nobles by name..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {filteredTargets.length > 0 ? (
                  filteredTargets.map((target) => (
                    <div 
                      key={target.id}
                      className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                        selectedTarget?.id === target.id 
                          ? 'bg-royal-crimson/20 border-royal-crimson/40' 
                          : 'bg-background/50 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20'
                      }`}
                      onClick={() => setSelectedTarget(target)}
                    >
                      <Avatar className="h-10 w-10 mr-3 border border-white/20">
                        <AvatarImage src={target.profileImage} alt={target.username} />
                        <AvatarFallback>{target.displayName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="font-medium">{target.displayName}</h4>
                          {target.tier === 'royal' && (
                            <Badge className="ml-2 bg-royal-gold/20 text-royal-gold border-royal-gold/30">
                              Royal
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-white/60">@{target.username} • Rank #{target.rank}</p>
                      </div>
                      {selectedTarget?.id === target.id && (
                        <Target className="h-5 w-5 text-royal-crimson" />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-white/60">
                    No targets found with that name
                  </div>
                )}
              </div>
            </div>
            
            {selectedTarget && (
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Egg className="h-5 w-5 mr-2 text-royal-crimson" />
                  Choose Your Mockery
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {mockeryActions.map((action) => {
                    const IconComponent = getMockeryActionIcon(action as any);
                    const name = getMockeryName(action as any);
                    const tier = getMockeryTier(action as any);
                    const price = getMockeryCost(action as any);
                    const tierColorClass = getMockeryTierColorClass(tier);
                    
                    return (
                      <div 
                        key={action}
                        className={`p-3 rounded-md border cursor-pointer transition-colors ${
                          selectedAction === action 
                            ? 'bg-royal-crimson/20 border-royal-crimson/40' 
                            : 'bg-background/50 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20'
                        }`}
                        onClick={() => setSelectedAction(action)}
                      >
                        <div className="flex items-center mb-2">
                          {IconComponent && (
                            <IconComponent className="h-5 w-5 mr-2" />
                          )}
                          <h4 className="font-medium text-sm">{name}</h4>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className={`${tierColorClass} border-${tierColorClass}/30 text-xs`}>
                            {tier}
                          </Badge>
                          <span className="text-sm font-bold">${price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {selectedTarget && selectedAction && (
              <div className="mt-6">
                <div className="p-4 rounded-lg bg-black/20 border border-white/10 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Info className="h-5 w-5 mr-2 text-white/70" />
                      <h3 className="font-medium">Mockery Details</h3>
                    </div>
                    <Badge variant="outline" className="bg-royal-crimson/20 text-royal-crimson border-royal-crimson/40">
                      Preview
                    </Badge>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Avatar className="h-10 w-10 mr-3 border border-white/20">
                      <AvatarFallback>{selectedTarget.displayName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedTarget.displayName}</p>
                      <p className="text-xs text-white/60">Rank #{selectedTarget.rank}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded bg-black/30 mb-3">
                    <p className="text-sm">{getMockeryDescription(selectedAction as any)}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Cost</span>
                    <span className="font-bold">${getMockeryCost(selectedAction as any)}</span>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-royal-crimson/10 border border-royal-crimson/20 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-royal-crimson mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">
                      Warning: Mockery is public and visible to all users. Noble users may retaliate with more powerful mockery.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setSelectedTarget(null);
                      setSelectedAction(null);
                    }}
                  >
                    Cancel
                  </Button>
                  
                  <Button 
                    className="flex-1 bg-gradient-to-r from-royal-crimson to-royal-purple text-white"
                    onClick={handleMockery}
                  >
                    Deploy Mockery
                  </Button>
                </div>
              </div>
            )}
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 border border-royal-gold/20 mt-4">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-royal-gold mr-2" />
                <h3 className="font-medium">Royal Protection</h3>
              </div>
              <p className="text-sm text-white/80 mb-3">
                Shield yourself from mockery by purchasing royal protection. Lasts for 48 hours.
              </p>
              <Button variant="outline" className="border-royal-gold/40 text-royal-gold hover:bg-royal-gold/10 w-full">
                Purchase Shield ($5)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoyalMockeryFestival;
