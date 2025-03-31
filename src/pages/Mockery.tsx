
import React, { useState } from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import { motion } from 'framer-motion';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Target, 
  Laugh, 
  Shield, 
  BadgeInfo, 
  History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  getMockeryActionIcon, 
  getMockeryActionIconColor, 
  getMockeryName, 
  getMockeryDescription, 
  getMockeryTierColorClass 
} from '@/utils/mockeryUtils';
import { MockeryAction, MockeryTier } from '@/types/mockery';

const mockUsers = [
  {
    id: '1',
    username: 'GoldenKnight',
    displayName: 'Sir Spends-a-lot',
    profileImage: '',
    tier: 'royal',
    rank: 3
  },
  {
    id: '2',
    username: 'SilverQueen',
    displayName: 'Lady Moneywise',
    profileImage: '',
    tier: 'premium',
    rank: 7
  },
  {
    id: '3',
    username: 'BronzePeasant',
    displayName: 'Humble Contributor',
    profileImage: '',
    tier: 'basic',
    rank: 15
  },
  {
    id: '4',
    username: 'IronDuke',
    displayName: 'Duke of Ironforge',
    profileImage: '',
    tier: 'premium',
    rank: 12
  },
  {
    id: '5',
    username: 'CopperScribe',
    displayName: 'The Court Jester',
    profileImage: '',
    tier: 'basic',
    rank: 25
  }
];

const mockeryHistory = [
  {
    id: '1',
    targetUsername: 'GoldenKnight',
    appliedByUsername: 'SilverQueen',
    action: 'tomatoes' as MockeryAction,
    date: '2023-09-15T12:30:00Z',
    tier: 'basic' as MockeryTier
  },
  {
    id: '2',
    targetUsername: 'CopperScribe',
    appliedByUsername: 'IronDuke',
    action: 'eggs' as MockeryAction,
    date: '2023-09-14T09:15:00Z',
    tier: 'premium' as MockeryTier
  },
  {
    id: '3',
    targetUsername: 'SilverQueen',
    appliedByUsername: 'BronzePeasant',
    action: 'jester' as MockeryAction,
    date: '2023-09-13T14:45:00Z',
    tier: 'royal' as MockeryTier
  }
];

const availableMockeryActions: MockeryAction[] = [
  'tomatoes',
  'eggs',
  'shame',
  'jester',
  'crown'
];

const Mockery: React.FC = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState('actions');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  
  const handleMockerySubmit = () => {
    if (!selectedUser || !selectedAction) {
      toast({
        title: "Selection Required",
        description: "You must select both a target and a mockery action.",
        variant: "destructive",
      });
      return;
    }
    
    const targetUser = mockUsers.find(user => user.id === selectedUser);
    
    toast({
      title: "Mockery Applied!",
      description: `You have applied ${getMockeryName(selectedAction)} to ${targetUser?.displayName}`,
      variant: "success",
    });
    
    setSelectedUser(null);
    setSelectedAction(null);
  };

  return (
    <Shell>
      <PageSEO 
        title="Royal Mockery Festival | SpendThrone" 
        description="Engage in the ancient tradition of mockery and status games in our medieval-themed digital kingdom."
      />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-royal-gold/20 text-white border-royal-gold/50 py-1 px-3">
              Premium Feature
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold royal-gradient mb-4 font-medieval">Royal Mockery Festival</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Embrace the medieval tradition of public mockery, where wit and wealth combine to create a uniquely satirical social experience.
            </p>
          </div>

          <Card className="glass-morphism border-white/10 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <BadgeInfo className="mr-2 h-6 w-6 text-royal-gold" />
                <span>The Art of Noble Mockery</span>
              </CardTitle>
              <CardDescription>
                A time-honored tradition in any respectable feudal society
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Throughout medieval times, public mockery was both entertainment and social control. SpendThrone brings this tradition to the digital age with our Mockery System.
              </p>
              <p className="mb-4">
                Apply humorous (and temporary) effects to other nobles, from the humble tomato toss to the prestigious crown of shame. Higher tiers of mockery require greater investment, ensuring only the truly committed can access the most impactful mockery actions.
              </p>
              <p className="italic text-white/70">
                Remember: Being mocked is a sign that you're noteworthy enough to attract attention. In SpendThrone, even negative attention is a form of status!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-royal-gold" />
                    Target Selection
                  </h3>
                  <p className="text-sm text-white/70">
                    Choose any noble who has reached at least rank 10 on the leaderboard.
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Laugh className="h-4 w-4 mr-2 text-royal-gold" />
                    Action Selection
                  </h3>
                  <p className="text-sm text-white/70">
                    Pick from dozens of mockery actions, each with unique visual effects.
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-royal-gold" />
                    Protection Options
                  </h3>
                  <p className="text-sm text-white/70">
                    Purchase protective measures to guard against unwanted mockery.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-16">
            <TabsList className="w-full grid grid-cols-3 bg-black/20">
              <TabsTrigger value="actions" className="flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Actions
              </TabsTrigger>
              <TabsTrigger value="targets" className="flex items-center">
                <Laugh className="h-4 w-4 mr-2" />
                Targets
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center">
                <History className="h-4 w-4 mr-2" />
                History
              </TabsTrigger>
            </TabsList>
            
            {/* Actions tab content */}
            <TabsContent value="actions">
              <Card>
                <CardHeader>
                  <CardTitle>Mockery Actions</CardTitle>
                  <CardDescription>Select an action to apply to your target</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {availableMockeryActions.map((action) => {
                      const IconComponent = getMockeryActionIcon(action);
                      const colorClass = getMockeryActionIconColor(action);
                      
                      return (
                        <Card 
                          key={action}
                          className={`cursor-pointer transition-all duration-300 ${selectedAction === action ? 'ring-2 ring-primary' : ''}`}
                          onClick={() => setSelectedAction(action)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              <IconComponent className={`h-5 w-5 mr-2 ${colorClass}`} />
                              <h3 className="font-medium">{getMockeryName(action)}</h3>
                            </div>
                            <p className="text-sm text-white/70">
                              {getMockeryDescription(action)}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Targets tab content */}
            <TabsContent value="targets">
              <Card>
                <CardHeader>
                  <CardTitle>Select Target</CardTitle>
                  <CardDescription>Choose a user to apply mockery to</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mockUsers.map((user) => (
                      <Card 
                        key={user.id}
                        className={`cursor-pointer transition-all duration-300 ${selectedUser === user.id ? 'ring-2 ring-primary' : ''}`}
                        onClick={() => setSelectedUser(user.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{user.displayName}</h3>
                              <p className="text-sm text-white/70">@{user.username}</p>
                            </div>
                            <Badge variant="outline">
                              Rank #{user.rank}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* History tab content */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Mockery History</CardTitle>
                  <CardDescription>Recent mockery events in the kingdom</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockeryHistory.map((history) => {
                      const IconComponent = getMockeryActionIcon(history.action);
                      const colorClass = getMockeryActionIconColor(history.action);
                      const tierColorClass = getMockeryTierColorClass(history.tier);
                      
                      return (
                        <div key={history.id} className="p-3 border border-white/10 rounded-lg">
                          <div className="flex items-center mb-2">
                            <IconComponent className={`h-5 w-5 mr-2 ${colorClass}`} />
                            <div>
                              <span className="font-medium">{history.appliedByUsername}</span>
                              <span className="text-white/70"> applied </span>
                              <span className={`font-medium ${colorClass}`}>{getMockeryName(history.action)}</span>
                              <span className="text-white/70"> to </span>
                              <span className="font-medium">{history.targetUsername}</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-white/50">
                              {new Date(history.date).toLocaleDateString()}
                            </span>
                            <Badge variant="outline" className={`${tierColorClass}`}>
                              {history.tier.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end">
            <Button 
              size="lg" 
              disabled={!selectedUser || !selectedAction}
              onClick={handleMockerySubmit}
            >
              Apply Mockery
            </Button>
          </div>
        </motion.div>
      </div>
    </Shell>
  );
};

export default Mockery;
