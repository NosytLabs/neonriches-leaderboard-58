
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Shield, AlertTriangle } from 'lucide-react';
import { 
  getMockeryName, 
  getMockeryDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon
} from '@/utils/mockeryUtils';
import { MockeryAction } from '@/types/mockery-types';
import { useToast } from '@/hooks/use-toast';

const MockeryComponent = () => {
  const { toast } = useToast();
  const mockeryActions: MockeryAction[] = [
    'tomato',  
    'egg',     
    'crown',
    'stocks',
    'jester'
  ];

  const handleMockery = (action: MockeryAction) => {
    toast({
      title: "Mockery Deployed!",
      description: `You have successfully deployed ${getMockeryName(action)}.`,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Mockery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 mb-6">
            Choose your method of mockery to humble nobles in the kingdom.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {mockeryActions.map((action) => {
              const name = getMockeryName(action);
              const tier = getMockeryTier(action);
              const price = getMockeryActionPrice(action);
              const tierColorClass = getMockeryTierColorClass(tier);
              const ActionIcon = getMockeryActionIcon(action);
              
              return (
                <div 
                  key={action}
                  className="p-3 rounded-md border cursor-pointer transition-colors bg-background/50 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20"
                  onClick={() => handleMockery(action)}
                >
                  <div className="flex items-center mb-2">
                    {React.createElement(ActionIcon, { className: "h-5 w-5 mr-2" })}
                    <span className="font-medium text-sm">{name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className={`${tierColorClass} text-xs`}>
                      {tier}
                    </Badge>
                    <span className="text-sm font-bold">${price}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="p-3 rounded-lg bg-royal-crimson/10 border border-royal-crimson/20 mb-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-royal-crimson mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/80">
                Warning: Mockery is public and visible to all users. Noble users may retaliate.
              </p>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-royal-gold/10 to-royal-gold/5 border border-royal-gold/20">
            <div className="flex items-center mb-2">
              <Shield className="h-5 w-5 text-royal-gold mr-2" />
              <h3 className="font-medium">Royal Protection</h3>
            </div>
            <p className="text-sm text-white/80 mb-3">
              Shield yourself from mockery by purchasing royal protection. Lasts for 48 hours.
            </p>
            <Button variant="outline" className="border-royal-gold/40 text-royal-gold hover:bg-royal-gold/10 w-full">
              Purchase Shield ($75)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MockeryComponent;
