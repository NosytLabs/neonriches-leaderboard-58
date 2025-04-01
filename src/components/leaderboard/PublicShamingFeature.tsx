
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Egg, Crown, AlertCircle, Shield } from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { getMockeryName, getMockeryDescription, getMockeryTier, getMockeryTierColorClass } from '@/utils/mockeryUtils';

const PublicShamingFeature: React.FC = () => {
  const { toast } = useToast();
  const sound = useSound();
  const [selectedAction, setSelectedAction] = useState<MockeryAction>('tomatoes');
  
  const mockeryActions: MockeryAction[] = [
    'tomatoes',
    'eggs',
    'stocks',
    'jester',
    'crown'
  ];
  
  const handleSelectAction = (action: MockeryAction) => {
    setSelectedAction(action);
    sound.playSound('click');
  };
  
  const handleApplyShame = () => {
    toast({
      title: "Mockery Applied",
      description: `You've applied ${getMockeryName(selectedAction)} to the selected user.`,
    });
    sound.playSound('mockery');
  };
  
  const handleShield = () => {
    toast({
      title: "Protection Purchased",
      description: "You've purchased Royal Protection for 48 hours.",
    });
    sound.playSound('purchase');
  };
  
  // Generate popularity data for each mockery action
  const mockeryStats: Record<MockeryAction, number> = {
    tomatoes: 256,
    eggs: 189,
    stocks: 124,
    crown: 78,
    jester: 143,
    putridEggs: 52,
    silence: 31,
    courtJester: 20,
    smokeBomb: 45,
    shame: 15,
    protection: 67,
    challenge: 18,
    taunt: 42,
    mock: 96,
    joust: 30,
    duel: 12
  };
  
  return (
    <Card className="glass-morphism border-royal-crimson/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Egg className="h-5 w-5 text-royal-crimson mr-2" />
          Public Mockery
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-white/70 mb-4">
          Humiliate those who outrank you with these mockery options. Choose wisely!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {mockeryActions.map((action) => {
            const actionTier = getMockeryTier(action);
            const tierColorClass = getMockeryTierColorClass(actionTier);
            
            return (
              <div 
                key={action}
                className={`p-3 rounded-md border cursor-pointer transition-colors ${
                  selectedAction === action 
                    ? 'bg-royal-crimson/20 border-royal-crimson/40' 
                    : 'bg-background/50 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20'
                }`}
                onClick={() => handleSelectAction(action)}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm">{getMockeryName(action)}</span>
                  <Badge variant="outline" className={`text-xs ${tierColorClass}`}>
                    {actionTier}
                  </Badge>
                </div>
                <p className="text-xs text-white/60">{getMockeryDescription(action)}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-white/50">
                    Used {mockeryStats[action]} times
                  </span>
                  <span className="text-sm font-bold">${Math.floor(15 + Math.random() * 50)}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="p-3 rounded-lg bg-royal-crimson/10 border border-royal-crimson/20 mb-4">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-royal-crimson mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/80">
              Warning: Mockery is public and visible to all. The target will be notified, and they may retaliate.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Button 
            variant="default" 
            className="bg-royal-crimson hover:bg-royal-crimson/80"
            onClick={handleApplyShame}
          >
            Apply {getMockeryName(selectedAction)}
          </Button>
          
          <Button 
            variant="outline" 
            className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10"
            onClick={handleShield}
          >
            <Shield className="h-4 w-4 mr-2" />
            Buy Protection ($75)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicShamingFeature;
