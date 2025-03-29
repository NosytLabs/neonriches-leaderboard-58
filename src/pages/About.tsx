
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Info, 
  ShieldCheck, 
  Lightbulb, 
  Flame, 
  ArrowRight, 
  ThumbsUp, 
  Coffee, 
  History,
  BookOpen
} from 'lucide-react';

const About = () => {
  return (
    <>
      <PageSEO 
        title="About SpendThrone" 
        description="Learn about SpendThrone, the social experiment exploring digital status, wealth, and competition."
        canonicalUrl="/about"
      />
      
      <Container className="py-10">
        <h1 className="text-4xl font-bold mb-2 royal-gradient text-center">About SpendThrone</h1>
        <p className="text-white/70 text-center mb-8 max-w-3xl mx-auto">
          SpendThrone is a satirical exploration of digital status economics. We examine how wealth and competition manifest in the digital realm.
        </p>
        
        <Tabs defaultValue="concept" className="w-full">
          <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-6">
            <TabsTrigger value="concept">Concept</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="concept">
            <Card className="glass-morphism border-white/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-royal-gold" />
                  Core Concept
                </CardTitle>
                <CardDescription>
                  The fundamental premise behind SpendThrone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  SpendThrone is a persistent, ranked leaderboard where your position is determined solely by financial contribution. 
                  $1 spent equals 1 unit of rank. The leaderboard never resets, creating a perpetual status economy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Card className="flex-1 glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Flame className="mr-2 h-4 w-4 text-royal-crimson" />
                        Satirical Experiment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      SpendThrone embraces the "pay-to-win" concept with self-awareness, creating a satire of status-seeking behavior in digital economies.
                    </CardContent>
                  </Card>
                  
                  <Card className="flex-1 glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <History className="mr-2 h-4 w-4 text-royal-gold" />
                        Historical Reflection
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      Throughout history, wealth has been used to display status. SpendThrone simply makes this relationship explicit in the digital realm.
                    </CardContent>
                  </Card>
                  
                  <Card className="flex-1 glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Coffee className="mr-2 h-4 w-4 text-royal-navy" />
                        Social Dynamics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      Users form teams, create alliances, and engage in friendly competition, forming complex social hierarchies.
                    </CardContent>
                  </Card>
                </div>
                
                <Alert className="bg-royal-crimson/10 border-royal-crimson/20">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Interested in historical status symbols?</AlertTitle>
                  <AlertDescription>
                    Learn how SpendThrone reflects status displays throughout human history in our 
                    <Link to="/status-history" className="ml-1 text-royal-gold hover:text-royal-gold/80 underline">
                      Status Through History
                    </Link> section.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features">
            <Card className="glass-morphism border-white/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsUp className="mr-2 h-5 w-5 text-royal-gold" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  What makes SpendThrone unique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="text-royal-gold mr-2">01</span>
                      Dollar-Driven Rank
                    </h3>
                    <p className="text-white/70 text-sm">
                      A transparent leaderboard where rank is directly determined by spending. Filter by teams, individuals, or time periods.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="text-royal-gold mr-2">02</span>
                      Customizable Profiles
                    </h3>
                    <p className="text-white/70 text-sm">
                      Two-tiered profiles based on spending level. Higher spenders unlock more customization options and profile features.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="text-royal-gold mr-2">03</span>
                      Team Competition
                    </h3>
                    <p className="text-white/70 text-sm">
                      Join teams and compete collectively. Team rankings are determined by the total spending of all members.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium flex items-center">
                      <span className="text-royal-gold mr-2">04</span>
                      Royal Mockery
                    </h3>
                    <p className="text-white/70 text-sm">
                      Use spending power to apply cosmetic mockery effects to other profiles, creating a playful status dynamic.
                    </p>
                  </div>
                </div>
                
                <Alert className="bg-royal-navy/10 border-royal-navy/20">
                  <ShieldCheck className="h-4 w-4" />
                  <AlertTitle>Learn More About Mockery</AlertTitle>
                  <AlertDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span>Explore the detailed mockery options in our comprehensive guide.</span>
                    <Button asChild variant="outline" size="sm" className="whitespace-nowrap">
                      <Link to="/mockery-guide">
                        Mockery Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="philosophy">
            <Card className="glass-morphism border-white/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-royal-gold" />
                  Our Philosophy
                </CardTitle>
                <CardDescription>
                  The thinking behind SpendThrone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  SpendThrone exists as a mirror to contemporary digital status economies. By making the relationship between spending and status explicit, 
                  we invite users to reflect on how wealth and prestige operate in both digital and physical realms.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Card className="glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Self-Aware Satire</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      <p>
                        We approach the concept of "pay-to-win" with deliberate self-awareness. SpendThrone does not hide its mechanics 
                        behind elaborate systems - it is transparent about the direct relationship between spending and status.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Digital Anthropology</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      <p>
                        SpendThrone functions as a living experiment in digital anthropology, examining how humans create status hierarchies
                        in virtual spaces when given explicit mechanisms to do so.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Voluntary Participation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      <p>
                        All participation in SpendThrone is entirely voluntary. We believe in creating a transparent system where users
                        can choose their level of engagement with full knowledge of the mechanics.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-morphism border-white/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Meaningful Play</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      <p>
                        Despite its satirical nature, SpendThrone creates meaningful social interactions. The team dynamics, rivalries,
                        and friendships that form are authentic social experiences.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq">
            <Card className="glass-morphism border-white/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-royal-gold" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>
                  Common questions about SpendThrone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Is this serious?</h3>
                    <p className="text-white/70">
                      SpendThrone is a satirical social experiment that examines the relationship between spending and status. 
                      We approach the concept with self-awareness and a sense of humor.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">How does mockery work?</h3>
                    <p className="text-white/70">
                      Mockery allows users to spend money to apply purely cosmetic effects to other users' profiles. These effects are temporary
                      and do not affect functionality. It's a playful feature that adds an element of humor and social dynamics to the platform.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Do mockery effects impact leaderboard position?</h3>
                    <p className="text-white/70">
                      No, mockery effects are purely cosmetic and have no impact on a user's leaderboard position. In fact, money spent on 
                      mockery still counts toward your total rank.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">What happens to my rank if I stop spending?</h3>
                    <p className="text-white/70">
                      Your rank is based on your total spending, which never resets. If you stop spending, your position may decrease as others 
                      continue to spend, but your total spending amount remains.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Can I protect myself from mockery?</h3>
                    <p className="text-white/70">
                      Yes, you can purchase mockery immunity shields from the Royal Shop that protect your profile from mockery effects for a 
                      set period of time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
};

export default About;
