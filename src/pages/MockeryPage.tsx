
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryName, getMockeryDescription, getMockeryActionPrice, getMockeryActionIcon } from '@/utils/mockeryUtils';
import AppLayout from '@/layouts/AppLayout';

const MockeryPage = () => {
  const { username } = useParams<{ username: string }>();
  const [searchParams] = useSearchParams();
  const actionParam = searchParams.get('action');
  const { toast } = useToast();
  const { user } = useAuth() || { user: null };
  
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(
    actionParam as MockeryAction || null
  );
  
  const [targetUser, setTargetUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setTargetUser({
        id: 'user-1',
        username: username || 'User',
        displayName: username || 'Royal User',
        profileImage: '',
        rank: 42,
        tier: 'gold',
        team: 'royal',
        totalSpent: 5000
      });
      setLoading(false);
    }, 1000);
  }, [username]);
  
  const mockeryActions: MockeryAction[] = [
    'tomatoes',
    'eggs',
    'shame',
    'crown',
    'courtJester',
    'taunt'
  ];
  
  const handleApplyMockery = () => {
    if (!selectedAction || !targetUser) return;
    
    toast({
      title: 'Mockery Applied',
      description: `You have applied ${getMockeryName(selectedAction)} to ${targetUser.username}`,
      variant: 'default'
    });
    
    setSelectedAction(null);
  };
  
  if (loading) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              Loading user data...
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  }
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Apply Mockery to {username}</CardTitle>
          </CardHeader>
          <CardContent>
            {targetUser && (
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-white/20">
                    <AvatarFallback>{targetUser.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{targetUser.displayName}</h2>
                    <p className="text-sm text-white/60">@{targetUser.username}</p>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="mr-2">Rank #{targetUser.rank}</Badge>
                      <Badge variant="outline" className="bg-royal-gold/20 text-royal-gold">
                        {targetUser.tier}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Select a Mockery Action:</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mockeryActions.map((action) => {
                  const ActionIcon = getMockeryActionIcon(action);
                  return (
                    <Button
                      key={action}
                      variant={selectedAction === action ? "default" : "outline"}
                      className="flex flex-col h-auto p-4"
                      onClick={() => setSelectedAction(action)}
                    >
                      <ActionIcon className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{getMockeryName(action)}</span>
                      <span className="text-xs mt-1">${getMockeryActionPrice(action)}</span>
                    </Button>
                  );
                })}
              </div>
              
              {selectedAction && (
                <div className="mt-6 p-4 bg-black/20 rounded-lg border border-white/10">
                  <h4 className="font-medium mb-2">{getMockeryName(selectedAction)}</h4>
                  <p className="text-sm text-white/70 mb-4">{getMockeryDescription(selectedAction)}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cost: <span className="font-bold">${getMockeryActionPrice(selectedAction)}</span></span>
                    <Button onClick={handleApplyMockery}>
                      Apply Mockery
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default MockeryPage;
