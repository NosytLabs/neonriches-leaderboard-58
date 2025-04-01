import React, { useState } from 'react';
import { Shell } from '@/components/ui/Shell';
import { RoyalSection } from '@/components/ui/theme-components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeatureShowcase from '@/components/ui/feature-showcase';
import { featuresData } from '@/data/featuresData';
import { Search, Info, ArrowRight, Crown, Shield, Users, BarChart, MessageSquare } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const FeaturesShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter features based on search and category
  const filteredFeatures = featuresData.filter(feature => {
    const matchesSearch = feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || feature.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });
  
  // Group features by category
  const categories = ['all', ...Array.from(new Set(featuresData.map(f => f.category.toLowerCase())))];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <Shell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RoyalSection
          title="Royal Features Showcase"
          description="Explore the myriad ways to waste thy money in our digital kingdom"
          centered={true}
          className="mt-8"
        >
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <Input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-white/10 focus:border-royal-gold/50"
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-8">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="pt-4">
              <FeatureShowcase features={filteredFeatures} showCategories={false} maxColumns={3} />
            </TabsContent>
          </Tabs>
        </RoyalSection>
      </motion.div>
      
      <RoyalDivider variant="ornate" color="gold" className="my-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <RoyalSection
          title="How It Works"
          description="A comprehensive guide to our ridiculous status economy"
          centered={true}
        >
          <div className="max-w-5xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="glass-morphism border-white/10 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-royal-gold to-royal-gold-bright"></div>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-royal-gold/20 mx-auto mb-4">
                    <span className="text-xl font-bold text-royal-gold">1</span>
                  </div>
                  <CardTitle className="text-center">Deposit Funds</CardTitle>
                  <CardDescription className="text-center">
                    Add real money to your SpendThrone wallet
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-morphism-highlight rounded-lg p-4">
                    <h4 className="font-bold text-sm mb-2 flex items-center">
                      <Crown className="h-4 w-4 text-royal-gold mr-2" />
                      Key Point
                    </h4>
                    <p className="text-sm text-white/70">
                      Every $1 you deposit equals 1 point on the leaderboard. This is the <span className="text-royal-gold font-semibold">only way</span> to increase your rank.
                    </p>
                  </div>
                  
                  <div className="glass-morphism-highlight rounded-lg p-4">
                    <h4 className="font-bold text-sm mb-2 flex items-center">
                      <Info className="h-4 w-4 text-royal-gold mr-2" />
                      Remember
                    </h4>
                    <p className="text-sm text-white/70">
                      Deposits are cumulative and permanent. If you deposit $10 today and $15 next week, your total contribution is $25.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 2 */}
              <Card className="glass-morphism border-white/10 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-royal-gold to-royal-gold-bright"></div>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-royal-gold/20 mx-auto mb-4">
                    <span className="text-xl font-bold text-royal-gold">2</span>
                  </div>
                  <CardTitle className="text-center">Climb the Ranks</CardTitle>
                  <CardDescription className="text-center">
                    Watch your position rise on the leaderboard
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-morphism-highlight rounded-lg p-4">
                    <h4 className="font-bold text-sm mb-2 flex items-center">
                      <Shield className="h-4 w-4 text-royal-gold mr-2" />
                      Team Impact
                    </h4>
                    <p className="text-sm text-white/70">
                      Your deposits also contribute to your team's collective ranking, creating friendly competition between houses.
                    </p>
                  </div>
                  
                  <div className="glass-morphism-highlight rounded-lg p-4">
                    <h4 className="font-bold text-sm mb-2 flex items-center">
                      <Users className="h-4 w-4 text-royal-gold mr-2" />
                      Visibility
                    </h4>
                    <p className="text-sm text-white/70">
                      Higher ranks receive more prominent placement and visibility across the platform. Top 10 users appear in the royal showcase.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 3 */}
              <Card className="glass-morphism border-white/10 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-royal-gold to-royal-gold-bright"></div>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-royal-gold/20 mx-auto mb-4">
                    <span className="text-xl font-bold text-royal-gold">3</span>
                  </div>
                  <CardTitle className="text-center">Enhance & Interact</CardTitle>
                  <CardDescription className="text-center">
                    Use your wallet balance for features & actions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-morphism-highlight rounded-lg p-4">
                    <h4 className="font-bold text-sm mb-2 flex items-center">
                      <BarChart className="h-4 w-4 text-royal-gold mr-2" />
                      Subscribe
                    </h4>
                    <p className="text-sm text-white/70">
                      Purchase subscription tiers to unlock enhanced profile features, analytics, and special abilities.
                    </p>
                  </div>
                  
                  <div className="glass-morphism-highlight rounded-lg p-4">
                    <h4 className="font-bold text-sm mb-2 flex items-center">
                      <MessageSquare className="h-4 w-4 text-royal-gold mr-2" />
                      Engage
                    </h4>
                    <p className="text-sm text-white/70">
                      Spend your balance on mockery actions, profile boosts, and social interactions with other nobles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 bg-black/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center">
                <Info className="h-5 w-5 text-royal-gold mr-2" />
                Important Distinction
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-morphism border-royal-gold/30 p-5 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 text-royal-gold flex items-center">
                    <Badge className="mr-2 bg-royal-gold text-black">Deposits</Badge>
                    Affect Rank
                  </h4>
                  <p className="text-white/70 mb-3">
                    Money added to your account directly increases your leaderboard position at a rate of $1 = 1 point.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2 mt-1.5" />
                      <span>Permanently increase your leaderboard rank</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2 mt-1.5" />
                      <span>Contribute to team standings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2 mt-1.5" />
                      <span>Cannot be refunded or transferred</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-morphism border-royal-purple/30 p-5 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 text-royal-purple-light flex items-center">
                    <Badge className="mr-2 bg-royal-purple text-white">Purchases</Badge>
                    Affect Features
                  </h4>
                  <p className="text-white/70 mb-3">
                    Spending your wallet balance on subscriptions, mockery, or other features does not affect your rank.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-purple-light mr-2 mt-1.5" />
                      <span>Use your balance for subscriptions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-purple-light mr-2 mt-1.5" />
                      <span>Pay for mockery and social actions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-purple-light mr-2 mt-1.5" />
                      <span>Purchase profile enhancements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/leaderboard">
                <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                  View Current Hierarchy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </RoyalSection>
      </motion.div>
      
      <RoyalDivider variant="simple" color="purple" className="my-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <RoyalSection
          title="SpendThrone Encyclopedia"
          description="A scholarly compendium of our satirical status economy"
          centered={true}
        >
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-center">The Royal Encyclopedia</CardTitle>
                <CardDescription className="text-center">
                  A comprehensive guide to the terms, concepts, and mechanisms of our kingdom
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] rounded-md pr-4">
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-lg font-bold text-royal-gold">Nobility Ranks</h2>
                      <p className="text-sm text-white/70 mb-4">
                        Within SpendThrone, your standing in society is determined solely by your financial contributions.
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-royal-navy/20 border border-royal-navy/40">
                          <span className="font-semibold text-royal-navy-bright">Common Noble (Under $100)</span>
                          <p className="text-xs text-white/70 mt-1">
                            The entry level of nobility. Commoners have made their initial contributions but have yet to demonstrate true financial commitment.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-royal-gold/20 border border-royal-gold/40">
                          <span className="font-semibold text-royal-gold">Distinguished Noble ($100-$499)</span>
                          <p className="text-xs text-white/70 mt-1">
                            Those who have demonstrated meaningful financial contributions. Distinguished nobles enjoy enhanced visibility and respect.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-royal-crimson/20 border border-royal-crimson/40">
                          <span className="font-semibold text-royal-crimson-bright">Exalted Noble ($500-$999)</span>
                          <p className="text-xs text-white/70 mt-1">
                            The upper echelon of nobility. These individuals have shown substantial dedication to conspicuous consumption.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-royal-purple/20 border border-royal-purple/40">
                          <span className="font-semibold text-royal-purple-bright">Royal Elite ($1000+)</span>
                          <p className="text-xs text-white/70 mt-1">
                            The pinnacle of status within our realm. Royal Elites have demonstrated extraordinary commitment to digital prestige.
                          </p>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h2 className="text-lg font-bold text-royal-gold">The Three Houses</h2>
                      <p className="text-sm text-white/70 mb-4">
                        All nobles must pledge allegiance to one of three royal houses, each with its own philosophy and aesthetic.
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-royal-crimson/20 border border-royal-crimson/40">
                          <span className="font-semibold text-royal-crimson-bright">House Crimson (Red)</span>
                          <p className="text-xs text-white/70 mt-1">
                            Bold, ambitious, and passionate. House Crimson nobles believe in flaunting wealth openly and aggressively.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-emerald-600/20 border border-emerald-600/40">
                          <span className="font-semibold text-emerald-400">House Verdant (Green)</span>
                          <p className="text-xs text-white/70 mt-1">
                            Strategic, growth-focused, and competitive. House Verdant nobles treat spending as an investment in status.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-royal-navy/20 border border-royal-navy/40">
                          <span className="font-semibold text-royal-navy-bright">House Azure (Blue)</span>
                          <p className="text-xs text-white/70 mt-1">
                            Sophisticated, thoughtful, and precise. House Azure nobles appreciate the subtle art of strategic spending.
                          </p>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h2 className="text-lg font-bold text-royal-gold">Mockery System</h2>
                      <p className="text-sm text-white/70 mb-4">
                        SpendThrone's unique social interaction system allowing nobles to spend wallet funds to apply visual effects to other profiles.
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-gray-700/40 border border-gray-600">
                          <span className="font-semibold text-white/80">Common Mockery</span>
                          <p className="text-xs text-white/70 mt-1">
                            Basic visual effects like digital tomatoes. Low cost, temporary, and mildly embarrassing.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-blue-700/20 border border-blue-600/40">
                          <span className="font-semibold text-blue-400">Uncommon Mockery</span>
                          <p className="text-xs text-white/70 mt-1">
                            Enhanced effects like jester hats. Moderate cost with longer duration and more noticeable impact.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-purple-700/20 border border-purple-600/40">
                          <span className="font-semibold text-purple-400">Rare Mockery</span>
                          <p className="text-xs text-white/70 mt-1">
                            Significant effects like virtual stocks. High cost with extended duration and substantial visual impact.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-amber-700/20 border border-amber-600/40">
                          <span className="font-semibold text-amber-400">Epic Mockery</span>
                          <p className="text-xs text-white/70 mt-1">
                            Major effects like profile inversions. Very costly with long duration and platform-wide notification.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-royal-gold/20 border border-royal-gold/40">
                          <span className="font-semibold text-royal-gold">Legendary Mockery</span>
                          <p className="text-xs text-white/70 mt-1">
                            The ultimate mockery. Extremely expensive with persistent effects and historical documentation.
                          </p>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h2 className="text-lg font-bold text-royal-gold">Royal Titles</h2>
                      <p className="text-sm text-white/70 mb-4">
                        Honorific titles bestowed upon nobles based on their spending patterns and achievements.
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg glass-morphism">
                          <span className="font-semibold text-royal-gold">The Consistent</span>
                          <p className="text-xs text-white/70 mt-1">
                            Awarded to nobles who maintain a spending streak of at least 10 consecutive weeks.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg glass-morphism">
                          <span className="font-semibold text-royal-gold">The Impulsive</span>
                          <p className="text-xs text-white/70 mt-1">
                            Granted to those who make large, sporadic deposits rather than regular contributions.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg glass-morphism">
                          <span className="font-semibold text-royal-gold">The Provocateur</span>
                          <p className="text-xs text-white/70 mt-1">
                            Given to nobles who are particularly active in the mockery system.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg glass-morphism">
                          <span className="font-semibold text-royal-gold">The Resilient</span>
                          <p className="text-xs text-white/70 mt-1">
                            Bestowed upon those who consistently reclaim their rank after being overtaken.
                          </p>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h2 className="text-lg font-bold text-royal-gold">Special Events</h2>
                      <p className="text-sm text-white/70 mb-4">
                        Periodic activities and challenges that add dynamism to the SpendThrone experience.
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg glass-morphism">
                          <span className="font-semibold text-royal-gold">Double Deposit Weekend</span>
                          <p className="text-xs text-white/70 mt-1">
                            Special events where deposits count for double rank points for a limited time.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg glass-morphism">
                          <span className="font-semibold text-royal-gold">House Tournament</span>
                          <p className="text-xs text-white/70 mt-1">
                            Monthly competitions where houses compete for total deposits with special rewards.
                          </p>
                        </div>
                        
                        <div className="p-3 rounded-lg glass-morphism">
                          <span className="font-semibold text-royal-gold">Royal Challenge</span>
                          <p className="text-xs text-white/70 mt-1">
                            Weekly spending challenges with specific goals and exclusive rewards.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link to="/faq">
                  <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10">
                    <Info className="mr-2 h-4 w-4" />
                    View Frequently Asked Questions
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </RoyalSection>
      </motion.div>
    </Shell>
  );
};

export default FeaturesShowcase;
