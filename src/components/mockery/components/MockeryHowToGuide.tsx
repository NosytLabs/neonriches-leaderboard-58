
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, ThumbsDown, Crown, Shield, Flame, Feather, Bomb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MockeryAction, ExtendedMockeryAction } from '@/types/mockery-types';

const MockeryHowToGuide: React.FC = () => {
  // Sample mockery actions for the guide, using our proper types
  const sampleActions: (MockeryAction | ExtendedMockeryAction)[] = [
    'tomatoes',
    'eggs',
    'stocks',
    'dunce',
    'jester',
    'troll',
    'smokeBomb',
    'glitterBomb'
  ];
  
  const getIconForAction = (action: MockeryAction | ExtendedMockeryAction) => {
    switch (action) {
      case 'tomatoes':
      case 'eggs':
        return <Target className="h-4 w-4" />;
      case 'stocks':
      case 'dunce':
        return <ThumbsDown className="h-4 w-4" />;
      case 'jester':
        return <Feather className="h-4 w-4" />;
      case 'troll':
        return <Flame className="h-4 w-4" />;
      case 'smokeBomb':
      case 'glitterBomb':
        return <Bomb className="h-4 w-4" />;
      default:
        return <Crown className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10 rounded-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            How the Royal Mockery Festival Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-white/70">
            The Royal Mockery Festival allows you to apply purely cosmetic effects to other users' profiles.
            These effects are entirely visual and have no impact on rankings or functionality.
          </p>
          
          <div className="bg-black/20 p-4 rounded-md space-y-3">
            <h3 className="font-semibold text-white flex items-center">
              <Target className="mr-2 h-4 w-4" />
              Mockery Types
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {sampleActions.map((action) => (
                <div 
                  key={action} 
                  className="glass-morphism border-white/5 p-2 rounded-md flex items-center space-x-2"
                >
                  {getIconForAction(action)}
                  <span className="text-sm">{action.charAt(0).toUpperCase() + action.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-black/20 p-4 rounded-md space-y-3">
            <h3 className="font-semibold text-white flex items-center">
              <Shield className="mr-2 h-4 w-4" />
              Protection
            </h3>
            <p className="text-sm text-white/70">
              Don't want to be mocked? Purchase Royal Protection to shield your profile from mockery for 7 days.
            </p>
            <Badge variant="outline" className="bg-royal-navy/30">
              Royal Protection: $50.00
            </Badge>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/features#mockery-section">
              <Button className="bg-royal-purple hover:bg-royal-purple/90">
                View Complete Mockery Guide
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(MockeryHowToGuide);
