
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, User, Users, Crown, Scroll, Tomato, Egg, BadgeMinus, Music } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/components/mockery/hooks/useMockery';
import MedievalIcon from '@/components/ui/medieval-icon';

const MockeryPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('actions');

  return (
    <DashboardLayout
      title="Royal Mockery"
      subtitle="Where the peasants pay to make fun of their betters, and the betters pay even more to make fun of their peers."
      icon={<Tomato size={32} className="text-royal-crimson" />}
    >
      <Helmet>
        <title>Royal Mockery Festival | SpendThrone</title>
      </Helmet>

      <div className="mb-6">
        <Tabs defaultValue="actions" onValueChange={setSelectedTab}>
          <div className="border-b border-white/10 mb-6">
            <TabsList className="justify-start -mb-px">
              <TabsTrigger value="actions" className="data-[state=active]:border-royal-crimson">
                <Tomato className="h-4 w-4 mr-2" />
                Mockery Actions
              </TabsTrigger>
              <TabsTrigger value="protection" className="data-[state=active]:border-royal-gold">
                <Shield className="h-4 w-4 mr-2" />
                Protection Plans
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:border-royal-navy">
                <Scroll className="h-4 w-4 mr-2" />
                Mockery History
              </TabsTrigger>
              <TabsTrigger value="effects" className="data-[state=active]:border-royal-purple">
                <Crown className="h-4 w-4 mr-2" />
                Active Effects
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="actions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tomatoes Card */}
              <Card className="glass-morphism border-white/10 hover:border-royal-crimson/30 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Tomato className="h-5 w-5 text-red-500" />
                    <CardTitle>Throw Tomatoes</CardTitle>
                  </div>
                  <CardDescription>$0.50 per use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Splatter someone's profile with tomatoes for 24 hours, showing the world your disapproval of their rank.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-red-800 hover:bg-red-700">
                    Choose Target
                  </Button>
                </CardFooter>
              </Card>

              {/* Eggs Card */}
              <Card className="glass-morphism border-white/10 hover:border-yellow-500/30 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Egg className="h-5 w-5 text-yellow-400" />
                    <CardTitle>Throw Eggs</CardTitle>
                  </div>
                  <CardDescription>$0.75 per use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Shower someone's profile with eggs for 24 hours. It's messy, it's humiliating, it's perfect.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-yellow-800 hover:bg-yellow-700">
                    Choose Target
                  </Button>
                </CardFooter>
              </Card>

              {/* Stocks Card */}
              <Card className="glass-morphism border-white/10 hover:border-amber-500/30 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BadgeMinus className="h-5 w-5 text-amber-500" />
                    <CardTitle>Put in Stocks</CardTitle>
                  </div>
                  <CardDescription>$1.00 per use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lock someone in the medieval stocks for all to see. Nothing says "I paid money to shame you" quite like this classic.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-amber-800 hover:bg-amber-700">
                    Choose Target
                  </Button>
                </CardFooter>
              </Card>

              {/* Silence Card */}
              <Card className="glass-morphism border-white/10 hover:border-gray-400/30 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Music className="h-5 w-5 text-gray-400" />
                    <CardTitle>Royal Silence</CardTitle>
                  </div>
                  <CardDescription>$2.00 per use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Impose royal silence on someone for 24 hours. They'll be unable to comment while they contemplate their inadequacy.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-gray-700 hover:bg-gray-600">
                    Choose Target
                  </Button>
                </CardFooter>
              </Card>

              {/* Court Jester Card */}
              <Card className="glass-morphism border-white/10 hover:border-purple-500/30 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Crown className="h-5 w-5 text-purple-400" />
                    <CardTitle>Court Jester</CardTitle>
                  </div>
                  <CardDescription>$3.00 per use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Turn someone into the royal court's laughingstock for 24 hours. They'll be displayed with a jester hat and bells.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-purple-800 hover:bg-purple-700">
                    Choose Target
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4 royal-gradient">Mockery Bundles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Peasant's Bundle */}
                <Card className="glass-morphism border-white/10 border-l-4 border-l-gray-400">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MedievalIcon name="shield" size="sm" color="bronze" className="mr-2" />
                      Peasant's Bundle
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg font-bold">$2.50</span>
                      <span className="text-muted-foreground ml-1">/ 5 uses</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      A simple collection of mockery tools for the common folk.
                    </p>
                    <div className="flex items-center space-x-2 mb-2">
                      <Tomato className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Throw Tomatoes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Egg className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">Throw Eggs</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full bg-gray-700 hover:bg-gray-600">
                      Purchase Bundle
                    </Button>
                  </CardFooter>
                </Card>

                {/* Noble's Arsenal */}
                <Card className="glass-morphism border-white/10 border-l-4 border-l-amber-600">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MedievalIcon name="sword" size="sm" color="bronze" className="mr-2" />
                      Noble's Arsenal
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg font-bold">$7.50</span>
                      <span className="text-muted-foreground ml-1">/ 10 uses</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      A refined selection of mockery options for the distinguished nobility.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Tomato className="h-4 w-4 text-red-500" />
                        <span className="text-sm">Tomatoes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Egg className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm">Eggs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BadgeMinus className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Stocks</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Music className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Silence</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full bg-amber-800 hover:bg-amber-700">
                      Purchase Bundle
                    </Button>
                  </CardFooter>
                </Card>

                {/* Royal Humiliation */}
                <Card className="glass-morphism border-white/10 border-l-4 border-l-royal-gold">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MedievalIcon name="crown" size="sm" color="gold" animate="glow" className="mr-2" />
                      Royal Humiliation
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg font-bold">$20.00</span>
                      <span className="text-muted-foreground ml-1">/ 20 uses</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      The ultimate arsenal of mockery fit for kings and queens.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Tomato className="h-4 w-4 text-red-500" />
                        <span className="text-sm">Tomatoes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Egg className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm">Eggs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BadgeMinus className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Stocks</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Music className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Silence</span>
                      </div>
                      <div className="flex items-center space-x-2 col-span-2">
                        <Crown className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Court Jester</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full bg-gradient-to-r from-royal-gold-dark to-royal-gold text-black hover:opacity-90">
                      Purchase Bundle
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="protection" className="space-y-6">
            <p className="text-lg text-white/70 mb-6">
              Shield yourself from mockery with our royal protection plans. The higher your protection tier, the more mockery types you'll be immune to.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Protection */}
              <Card className="glass-morphism border-white/10 border-t-4 border-t-gray-400">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-gray-400" />
                    <CardTitle>Basic Protection</CardTitle>
                  </div>
                  <CardDescription>
                    <span className="text-lg font-bold">$2.00</span>
                    <span className="text-muted-foreground ml-1">/ month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    Basic protection for the commoners who wish to avoid the most basic forms of ridicule.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Tomatoes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-muted-foreground line-through">No protection from Eggs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-muted-foreground line-through">No protection from Stocks</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-gray-700 hover:bg-gray-600">
                    Activate Protection
                  </Button>
                </CardFooter>
              </Card>

              {/* Advanced Protection */}
              <Card className="glass-morphism border-white/10 border-t-4 border-t-amber-600">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-amber-500" />
                    <CardTitle>Advanced Protection</CardTitle>
                  </div>
                  <CardDescription>
                    <span className="text-lg font-bold">$5.00</span>
                    <span className="text-muted-foreground ml-1">/ month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    Enhanced protection for nobles who deserve respect and wish to maintain their dignity.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Tomatoes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Eggs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Stocks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-muted-foreground line-through">No protection from Silence</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-amber-800 hover:bg-amber-700">
                    Activate Protection
                  </Button>
                </CardFooter>
              </Card>

              {/* Royal Protection */}
              <Card className="glass-morphism border-white/10 border-t-4 border-t-royal-gold relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-royal-gold/20 rounded-full blur-xl"></div>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-royal-gold animate-pulse-slow" />
                    <CardTitle>Royal Protection</CardTitle>
                  </div>
                  <CardDescription>
                    <span className="text-lg font-bold">$10.00</span>
                    <span className="text-muted-foreground ml-1">/ month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-4">
                    The ultimate protection, fit for royalty. No peasant shall dare mock you again.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Tomatoes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Eggs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Stocks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Silence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Protection from Court Jester</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Crown className="h-4 w-4 text-royal-gold" />
                    <span className="text-sm font-medium text-royal-gold">Royal Status Indicator</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-gradient-to-r from-royal-gold-dark to-royal-gold text-black hover:opacity-90">
                    Activate Protection
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Mockery History</CardTitle>
                <CardDescription>A record of your mockery activities and those who dared mock you.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-12">
                  Your mockery history will appear here once you've participated in the Royal Mockery Festival.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="effects">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Active Effects</CardTitle>
                <CardDescription>Current mockery effects applied to you and by you.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-12">
                  You don't have any active mockery effects at the moment.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MockeryPage;
