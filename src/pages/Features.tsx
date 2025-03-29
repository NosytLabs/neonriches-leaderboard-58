
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { RoyalSection } from '@/components/ui/theme-components';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { Link } from 'react-router-dom';
import {
  Crown,
  Shield,
  Users,
  DollarSign,
  Medal,
  Sparkles,
  MessageSquare,
  Zap,
  Layout,
  Image,
  Link as LinkIcon,
  BarChart,
  ScrollText,
  UserPlus,
  Flame,
  Target,
  ThumbsUp,
  Egg,
  Cloud
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { MOCKERY_COSTS, MOCKERY_DESCRIPTIONS, MOCKERY_NAMES } from '@/utils/mockeryUtils';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';

const Features = () => {
  const features = [
    {
      icon: <Crown className="h-8 w-8 text-royal-gold" />,
      title: "Royal Ranking",
      description: "Your position in our hierarchy is determined solely by your financial contributions. $1 spent = 1 unit of rank.",
      link: "/leaderboard"
    },
    {
      icon: <Layout className="h-8 w-8 text-royal-purple" />,
      title: "Noble Profiles",
      description: "Create and customize your royal profile page. Higher spending unlocks premium customization options.",
      link: "/profile"
    },
    {
      icon: <Shield className="h-8 w-8 text-royal-navy" />,
      title: "Noble Houses",
      description: "Join one of three competing noble houses: Red (fire), Green (forest), or Blue (water). Competition drives spending.",
      link: "/teams"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-royal-gold" />,
      title: "Profile Customization",
      description: "Unlock advanced profile features with premium tiers, including animated RGB borders, multiple images, and more.",
      link: "/profile/edit"
    },
    {
      icon: <BarChart className="h-8 w-8 text-royal-crimson" />,
      title: "Analytics Dashboard",
      description: "Track your profile views, engagement, and visitor demographics with our comprehensive analytics tools.",
      link: "/analytics"
    },
    {
      icon: <Flame className="h-8 w-8 text-royal-crimson" />,
      title: "Royal Mockery Festival",
      description: "A satirical feature that lets you apply purely cosmetic effects to other users' profiles.",
      link: "#mockery-section"
    }
  ];

  // Group mockery actions by tier for the mockery section
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
      case 'silence': return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case 'courtJester': return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'smokeBomb': return <Cloud className="h-5 w-5 text-gray-400" />;
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
        title="Features | SpendThrone" 
        description="Discover the exclusive features of SpendThrone - the satirical digital status platform where your spending determines your rank."
        canonicalUrl="/features"
      />
      
      <Shell>
        <RoyalSection className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold royal-gradient mb-4">Royal Features</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Discover the exclusive features that await those who contribute to the royal treasury.
              Our platform offers a satirical take on digital status economics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link}
                className="glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-gold/30 group"
              >
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center mb-4 group-hover:bg-black/40 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
          
          <RoyalDivider variant="ornate" color="gold" className="my-16" />
          
          <div id="mockery-section" className="scroll-mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold royal-gradient mb-4">Royal Mockery Festival</h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                Welcome to the comprehensive guide to the Royal Mockery Festival. Learn how to make the most of your mockery coins with this detailed breakdown of all mockery effects.
              </p>
            </div>
            
            <div className="mb-10 glass-morphism border-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center">
                <Flame className="mr-2 h-5 w-5 text-royal-gold" />
                Important Notes
              </h3>
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
            
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4">Ready to participate?</h3>
              <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white px-6 py-2">
                <Flame className="mr-2 h-5 w-5" />
                Visit the Royal Mockery Festival
              </Button>
            </div>
          </div>
          
          <RoyalDivider variant="ornate" color="gold" className="my-16" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold royal-gradient mb-4">Legal & Privacy</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              SpendThrone operates with transparency and integrity. Learn about our terms of service and privacy policy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ScrollText className="h-5 w-5 mr-2 text-royal-gold" />
                  Terms of Service
                </CardTitle>
                <CardDescription>Our rules and guidelines</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  By using SpendThrone, you agree to our terms of service which govern your use of the platform. 
                  We strive to maintain a playful yet respectful environment for all users.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/terms">
                  <Button variant="outline">Read Full Terms</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-royal-gold" />
                  Privacy Policy
                </CardTitle>
                <CardDescription>How we handle your data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Your privacy matters. Our privacy policy explains how we collect, use, and protect your personal information.
                  We are committed to maintaining the highest standards of data security.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/privacy">
                  <Button variant="outline">Read Privacy Policy</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </RoyalSection>
      </Shell>
    </>
  );
};

export default Features;
