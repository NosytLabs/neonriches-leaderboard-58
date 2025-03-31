
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MockeryAction } from '@/types/mockery';
import { getMockeryName, getMockeryDescription, getMockeryCost, getMockeryActionIcon } from '@/utils/mockery';
import { useToast } from '@/hooks/use-toast';

// Simplified to 4 core mockery actions
const MOCKERY_ACTIONS: MockeryAction[] = ['tomatoes', 'eggs', 'crown', 'stocks'];

const LightweightMockeryPanel = () => {
  const [username, setUsername] = useState('');
  const [selectedAction, setSelectedAction] = useState<MockeryAction>('tomatoes');
  const { toast } = useToast();
  
  const handleMockery = () => {
    if (!username) {
      toast({
        title: "Username required",
        description: "Please enter a username to mock",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Mockery Applied",
      description: `You've applied ${getMockeryName(selectedAction)} to ${username}`,
      variant: "default"
    });
  };
  
  return (
    <Card className="border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="mr-2 h-5 w-5 text-royal-crimson" />
          Royal Mockery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Target Username</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="bg-background/50"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1 block">Select Mockery Type</label>
            <div className="grid grid-cols-2 gap-2">
              {MOCKERY_ACTIONS.map(action => {
                const Icon = getMockeryActionIcon(action);
                return (
                  <Button
                    key={action}
                    type="button"
                    variant={selectedAction === action ? "default" : "outline"}
                    className="justify-start text-left h-auto py-2"
                    onClick={() => setSelectedAction(action)}
                  >
                    <div className="flex flex-col items-start">
                      <div className="flex items-center">
                        {Icon && <Icon className="h-4 w-4 mr-1" />}
                        <span className="text-sm font-medium">{getMockeryName(action)}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">${getMockeryCost(action)}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>
          
          <div className="bg-background/50 p-3 rounded-md text-sm">
            {getMockeryDescription(selectedAction)}
          </div>
          
          <Button 
            className="w-full" 
            onClick={handleMockery}
          >
            Apply Mockery
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LightweightMockeryPanel;
