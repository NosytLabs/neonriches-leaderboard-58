
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { mockeryActions } from '@/utils/mockeryUtils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MOCKERY_COSTS, MOCKERY_DESCRIPTIONS, MOCKERY_NAMES } from '@/utils/mockeryUtils';
import { MockeryTier, MockeryAction } from '@/types/mockery';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Crown, 
  Target, 
  ThumbsUp, 
  Shield, 
  Flame, 
  Egg,
  Cloud,
  Cake,
  Sparkles,
  Theater,
  AlertCircle
} from 'lucide-react';

const MockeryGuide = () => {
  // Group mockery actions by tier
  const mockeryByTier: Record<MockeryTier, MockeryAction[]> = {
    common: ['tomatoes', 'dunce'],
    uncommon: ['putridEggs', 'royalPie'],
    rare: ['stocks', 'jokeCrown'],
    epic: ['silence', 'glitterBomb', 'memeFrame'],
    legendary: ['courtJester', 'smokeBomb'],
    basic: [],
    premium: [],
    elite: []
  };
  
  const getActionIcon = (action: MockeryAction) => {
    switch(action) {
      case 'tomatoes': return <Flame className="h-5 w-5 text-red-500" />;
      case 'putridEggs': return <Egg className="h-5 w-5 text-yellow-500" />;
      case 'stocks': return <Target className="h-5 w-5 text-amber-700" />;
      case 'silence': return <AlertCircle className="h-5 w-5 text-purple-500" />;
      case 'courtJester': return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'smokeBomb': return <Cloud className="h-5 w-5 text-gray-400" />;
      case 'royalPie': return <Cake className="h-5 w-5 text-pink-400" />;
      case 'glitterBomb': return <Sparkles className="h-5 w-5 text-blue-400" />;
      case 'jokeCrown': return <Crown className="h-5 w-5 text-green-400" />;
      case 'memeFrame': return <Theater className="h-5 w-5 text-indigo-400" />;
      default: return <Target className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getTierColor = (tier: MockeryTier) => {
    switch(tier) {
      case 'common': return 'bg-gray-200/10 text-gray-200';
      case 'uncommon': return 'bg-green-500/10 text-green-400';
      case 'rare': return 'bg-blue-500/10 text-blue-400';
      case 'epic': return 'bg-purple-500/10 text-purple-400';
      case 'legendary': return 'bg-royal-gold/10 text-royal-gold';
      default: return 'bg-gray-200/10 text-gray-200';
    }
  };
  
  return (
    <>
      <PageSEO 
        title="Royal Mockery Guide" 
        description="Complete guide to the Royal Mockery Festival - learn about all mockery types, effects, and strategies."
        canonicalUrl="/mockery-guide"
      />
      
      <Container className="py-10">
        <h1 className="text-4xl font-bold mb-4 royal-gradient text-center">Royal Mockery Guide</h1>
        <p className="text-white/70 text-center mb-8 max-w-3xl mx-auto">
          Welcome to the comprehensive guide to the Royal Mockery Festival. Learn how to make the most of your mockery coins with this detailed breakdown of all mockery effects.
        </p>
        
        <div className="mb-10 glass-morphism border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3 flex items-center">
            <AlertCircle className="mr-2 h-5 w-5 text-royal-gold" />
            Important Notes
          </h2>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <ThumbsUp className="mr-2 h-5 w-5 mt-0.5 text-royal-gold" />
              <span>All mockery effects are <strong>purely cosmetic</strong> and have no impact on rankings or functionality.</span>
            </li>
            <li className="flex items-start">
              <Shield className="mr-2 h-5 w-5 mt-0.5 text-royal-gold" />
              <span>Any money spent on mockery still counts toward your total rank in the leaderboard.</span>
            </li>
            <li className="flex items-start">
              <Crown className="mr-2 h-5 w-5 mt-0.5 text-royal-gold" />
              <span>Mockery effects last for a limited time, ranging from 24 hours to 7 days depending on the effect.</span>
            </li>
            <li className="flex items-start">
              <Target className="mr-2 h-5 w-5 mt-0.5 text-royal-gold" />
              <span>You can purchase immunity shields from the Royal Shop to protect yourself from mockery.</span>
            </li>
          </ul>
        </div>
        
        <Tabs defaultValue="by-tier" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
            <TabsTrigger value="by-tier">By Tier</TabsTrigger>
            <TabsTrigger value="all-effects">All Effects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="by-tier">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {Object.entries(mockeryByTier)
                .filter(([_, actions]) => actions.length > 0)
                .map(([tier, actions]) => (
                <AccordionItem 
                  key={tier} 
                  value={tier}
                  className="glass-morphism border-white/10 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-2">
                    <div className="flex items-center">
                      <Badge className={getTierColor(tier as MockeryTier)}>
                        {tier.charAt(0).toUpperCase() + tier.slice(1)}
                      </Badge>
                      <span className="ml-2">
                        {actions.length} Mockery Effects
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {actions.map(action => (
                        <Card key={action} className="glass-morphism border-white/10">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="flex items-center text-base">
                                {getActionIcon(action)}
                                <span className="ml-2">{MOCKERY_NAMES[action]}</span>
                              </CardTitle>
                              <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold">
                                ${MOCKERY_COSTS[action]}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS[action]}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          <TabsContent value="all-effects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(MOCKERY_NAMES)
                .filter(([key]) => 
                  ["tomatoes", "putridEggs", "stocks", "silence", "courtJester", 
                   "jester", "dunce", "smokeBomb", "royalPie", "glitterBomb", 
                   "jokeCrown", "memeFrame"].includes(key)
                )
                .map(([action, name]) => (
                <Card key={action} className="glass-morphism border-white/10">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center text-base">
                        {getActionIcon(action as MockeryAction)}
                        <span className="ml-2">{name}</span>
                      </CardTitle>
                      <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold">
                        ${MOCKERY_COSTS[action as MockeryAction]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS[action as MockeryAction]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
};

export default MockeryGuide;
