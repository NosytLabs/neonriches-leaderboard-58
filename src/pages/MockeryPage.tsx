
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Crown, AlertTriangle, Target, Shield } from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import { normalizeMockeryAction } from '@/utils/mockeryNormalizer';
import MockeryComponent from '@/components/mockery/MockeryComponent';
import MockeryEffectsShowcase from '@/components/mockery/MockeryEffectsShowcase';
import MockeryEffect from '@/components/mockery/MockeryEffect';
import { useToast } from '@/hooks/use-toast';

const MockeryPage: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('deploy');
  const [showMockeryEffect, setShowMockeryEffect] = useState<boolean>(false);
  const [activeMockery, setActiveMockery] = useState<MockeryAction | null>(null);
  
  const handleMockerySelect = (action: MockeryAction) => {
    // Ensure the action is normalized before using it
    const normalizedAction = normalizeMockeryAction(action as string) as MockeryAction;
    
    // Preview the mockery effect
    setActiveMockery(normalizedAction);
    setShowMockeryEffect(true);
    
    // Display a toast message
    toast({
      title: 'Mockery Selected',
      description: `You have selected the ${normalizedAction} mockery effect.`,
    });
    
    // Reset the demo after it completes
    setTimeout(() => {
      setShowMockeryEffect(false);
      setActiveMockery(null);
    }, 3000);
  };
  
  const highlightedMockeries: MockeryAction[] = [
    'tomato', 
    'egg'
  ];
  
  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">Royal Mockery Chamber</h1>
      <p className="text-center text-white/70 mb-8">Humble your rivals with medieval-style mockery</p>
      
      {showMockeryEffect && activeMockery && (
        <MockeryEffect 
          username="DemoUser"
          action={activeMockery}
          isActive={showMockeryEffect}
          onComplete={() => setShowMockeryEffect(false)}
        />
      )}
      
      <Card className="glass-morphism border-white/5 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            Featured Mockeries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlightedMockeries.map((mockery) => (
              <Card 
                key={mockery}
                className="glass-morphism border-royal-gold/20 overflow-hidden cursor-pointer hover:border-royal-gold/40 transition-colors"
                onClick={() => handleMockerySelect(mockery)}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                  <div className="p-4 relative z-10">
                    <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold border-royal-gold/30 mb-2">
                      Featured
                    </Badge>
                    <h3 className="text-xl font-bold">
                      {mockery === 'tomato' ? 'Tomato Assault' : 'Egg Barrage'}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      {mockery === 'tomato' 
                        ? 'Launch rotten tomatoes at your target for public humiliation.' 
                        : 'Pelt your rivals with eggs for maximum embarrassment.'}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="p-3 rounded-lg bg-royal-crimson/10 border border-royal-crimson/20 mt-6">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-royal-crimson mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/80">
                Note: Mockery effects are for entertainment purposes only and have no direct impact on user rankings or spending.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="deploy" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="deploy" className="flex items-center">
            <Target className="h-4 w-4 mr-2" />
            Deploy Mockery
          </TabsTrigger>
          <TabsTrigger value="effects" className="flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Effect Gallery
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="deploy" className="py-4">
          <MockeryComponent />
        </TabsContent>
        
        <TabsContent value="effects" className="py-4">
          <MockeryEffectsShowcase onSelectMockery={handleMockerySelect} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MockeryPage;
