import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Crown, Laugh, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { MockeryAction } from '@/types/mockery-types';

import MockeryAction from './actions/MockeryAction';
import MockeryPreview from './preview/MockeryPreview';
import MockeryTargetSearch from './search/MockeryTargetSearch';
import MockeryTargetList from './targets/MockeryTargetList';
import MockeryActionsList from './actions/MockeryActionsList';

interface MockeryTarget {
  id: string;
  username: string;
  displayName: string;
  rank: number;
  profileImage?: string;
  tier: string;
}

interface MockeryActionItem {
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
              
              <MockeryTargetSearch 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
              
              <MockeryTargetList 
                targets={filteredTargets}
                selectedTarget={selectedTarget}
                onSelectTarget={setSelectedTarget}
              />
            </div>
            
            {selectedTarget && (
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Laugh className="h-5 w-5 mr-2 text-royal-crimson" />
                  Choose Your Mockery
                </h3>
                
                <MockeryActionsList
                  selectedAction={selectedAction}
                  onActionSelect={setSelectedAction}
                  mockeryActions={mockeryActions}
                />
              </div>
            )}
            
            {selectedTarget && selectedAction && (
              <div className="mt-6">
                <MockeryPreview 
                  selectedTarget={selectedTarget}
                  selectedAction={selectedAction as MockeryAction}
                />
                
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
