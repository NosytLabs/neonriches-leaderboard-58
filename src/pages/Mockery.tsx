
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
  History, 
  ChevronsUp 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  getMockeryIcon, 
  getMockeryIconColor, 
  getMockeryActionTitle, 
  getMockeryActionDescription, 
  getMockeryTierColorClass 
} from '@/utils/mockery';
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Sample data - in a real app these would come from API/context
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
  'dunce',
  'crown',
  'laughing',
  'protection'
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
      description: `You have applied ${getMockeryActionTitle(selectedAction)} to ${targetUser?.displayName}`,
      variant: "success",
    });
    
    // Reset selections
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
            
            <TabsContent value="actions" className="mt-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Available Mockery Actions</CardTitle>
                  <CardDescription>
                    Select an action to apply to your chosen target
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {availableMockeryActions.map((action) => {
                      const ActionIcon = getMockeryIcon(action);
                      const iconColor = getMockeryIconColor(action);
                      const isSelected = selectedAction === action;
                      
                      return (
                        <motion.div
                          key={action}
                          whileHover={{ scale: 1.03 }}
                          className={`
                            p-4 rounded-lg cursor-pointer border 
                            ${isSelected 
                              ? 'border-royal-gold bg-royal-gold/10' 
                              : 'border-white/10 bg-black/20 hover:bg-black/30'
                            }
                          `}
                          onClick={() => setSelectedAction(action)}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 flex items-center justify-center mb-3">
                              {ActionIcon && <ActionIcon className={`h-10 w-10 ${iconColor}`} />}
                            </div>
                            <h3 className="font-semibold mb-1">{getMockeryActionTitle(action)}</h3>
                            <p className="text-xs text-white/70">{getMockeryActionDescription(action)}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      {selectedAction && (
                        <div className="flex items-center">
                          <span className="text-white/70 mr-2">Selected:</span>
                          <Badge className="bg-royal-gold/80">
                            {getMockeryActionTitle(selectedAction)}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <Button 
                      disabled={!selectedAction || !selectedUser} 
                      onClick={handleMockerySubmit}
                      className="bg-royal-gold hover:bg-royal-gold/90"
                    >
                      Apply Mockery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="targets" className="mt-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Select Your Target</CardTitle>
                  <CardDescription>
                    Choose a noble to receive your mockery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockUsers.map((user) => {
                      const isSelected = selectedUser === user.id;
                      
                      return (
                        <motion.div
                          key={user.id}
                          whileHover={{ scale: 1.01 }}
                          className={`
                            p-4 rounded-lg cursor-pointer border flex items-center justify-between
                            ${isSelected 
                              ? 'border-royal-gold bg-royal-gold/10' 
                              : 'border-white/10 bg-black/20 hover:bg-black/30'
                            }
                          `}
                          onClick={() => setSelectedUser(user.id)}
                        >
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage src={user.profileImage} alt={user.displayName} />
                              <AvatarFallback className="bg-royal-gold/30">
                                {user.displayName.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{user.displayName}</p>
                              <p className="text-sm text-white/70">@{user.username}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-4 text-right">
                              <Badge className={getMockeryTierColorClass(user.tier as MockeryTier)}>
                                {user.tier}
                              </Badge>
                              <p className="text-sm text-white/70 mt-1">Rank #{user.rank}</p>
                            </div>
                            {isSelected && (
                              <ChevronsUp className="h-5 w-5 text-royal-gold" />
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="flex justify-between items-center">
                    <div>
                      {selectedUser && (
                        <div className="flex items-center">
                          <span className="text-white/70 mr-2">Target:</span>
                          <Badge className="bg-royal-gold/80">
                            {mockUsers.find(u => u.id === selectedUser)?.displayName}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <Button 
                      disabled={!selectedAction || !selectedUser} 
                      onClick={handleMockerySubmit}
                      className="bg-royal-gold hover:bg-royal-gold/90"
                    >
                      Apply Mockery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Recent Mockery History</CardTitle>
                  <CardDescription>
                    Witness the latest public shamings in the kingdom
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockeryHistory.map((item) => {
                      const ActionIcon = getMockeryIcon(item.action);
                      const iconColor = getMockeryIconColor(item.action);
                      const date = new Date(item.date);
                      
                      return (
                        <div 
                          key={item.id}
                          className="p-4 rounded-lg border border-white/10 bg-black/20"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex items-center justify-center mr-4">
                                {ActionIcon && <ActionIcon className={`h-8 w-8 ${iconColor}`} />}
                              </div>
                              <div>
                                <p className="font-medium">
                                  <span className="text-royal-gold">@{item.appliedByUsername}</span>
                                  {" applied "}
                                  <span className="font-semibold">{getMockeryActionTitle(item.action)}</span>
                                  {" to "}
                                  <span className="text-royal-gold">@{item.targetUsername}</span>
                                </p>
                                <p className="text-sm text-white/70">
                                  {date.toLocaleDateString()} at {date.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                            <Badge className={getMockeryTierColorClass(item.tier)}>
                              {item.tier}
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
          
          <div className="p-6 rounded-lg glass-morphism border-white/10 max-w-3xl mx-auto">
            <p className="text-lg text-center text-white/90 italic">
              "In a world where social media platforms hide behind algorithms,
              at least we're honest about our pettiness."
            </p>
          </div>
        </motion.div>
      </div>
    </Shell>
  );
};

export default Mockery;
