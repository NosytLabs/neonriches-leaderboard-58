import React from 'react';
import { Shell } from '@/components/ui/shell';
import PageHeader from '@/components/common/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FaqComponent from '@/components/FaqComponent';
import { RoyalEncyclopedia } from '@/components/help/RoyalEncyclopedia';

const HelpPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold font-royal mb-2 royal-gradient">Royal Encyclopedia</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            The definitive guide to P2W.FUN, including mockery effects, leaderboard rules, and feature explanations.
          </p>
        </header>
        
        <Tabs defaultValue="encyclopedia" className="w-full mb-10">
          <TabsList className="w-full grid grid-cols-4 mb-8">
            <TabsTrigger value="encyclopedia" className="flex items-center gap-2">
              <ScrollText className="h-4 w-4" /> Encyclopedia
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" /> FAQ
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Rules
            </TabsTrigger>
            <TabsTrigger value="updates" className="flex items-center gap-2">
              <Target className="h-4 w-4" /> Updates
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="encyclopedia">
            <RoyalEncyclopedia />
          </TabsContent>
          
          <TabsContent value="faq">
            <FaqComponent />
          </TabsContent>
          
          <TabsContent value="rules">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-royal-gold" />
                  Rules & Guidelines
                </CardTitle>
                <CardDescription>
                  The official rules of the kingdom
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="glass-morphism border-white/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-royal-gold">Content Guidelines</h3>
                    <p className="text-white/80 mb-4">
                      While P2W.FUN embraces satire and humor, we maintain some basic content standards:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>No offensive, hateful, or discriminatory content</li>
                      <li>No explicit sexual or excessively violent content</li>
                      <li>No illegal content or promotion of illegal activities</li>
                      <li>No impersonation of other users or staff</li>
                      <li>No spamming or disruptive behavior</li>
                    </ul>
                  </div>
                  
                  <div className="glass-morphism border-white/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-royal-gold">Mockery System Rules</h3>
                    <p className="text-white/80 mb-4">
                      The mockery system is designed for satirical entertainment, and follows these rules:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>All mockery effects are temporary and purely visual</li>
                      <li>Mockery has no impact on leaderboard position or functionality</li>
                      <li>Users can purchase protection from mockery</li>
                      <li>Mockery is subject to cooldown periods to prevent spam</li>
                      <li>Mockery content is subject to the same content guidelines as profiles</li>
                    </ul>
                  </div>
                  
                  <div className="glass-morphism border-white/10 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-royal-gold">Refund Policy</h3>
                    <p className="text-white/80">
                      Due to the nature of P2W.FUN as a satirical social experiment, all transactions are final and non-refundable.
                      This includes leaderboard contributions, mockery purchases, and profile upgrades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="updates">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-royal-gold" />
                  Recent Updates
                </CardTitle>
                <CardDescription>
                  The latest improvements to the kingdom
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 glass-morphism border-royal-purple/30 rounded-lg bg-royal-purple/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-royal-purple">Enhanced Mockery System</h3>
                      <span className="text-xs text-white/50">June 2023</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Consolidated mockery and shame systems</li>
                      <li>Added 12 new mockery types across 5 tiers</li>
                      <li>Implemented advanced visual effects and animations</li>
                      <li>Added mockery bundles and protection options</li>
                      <li>Created Hall of Shame leaderboard</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 glass-morphism border-royal-gold/30 rounded-lg bg-royal-gold/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-royal-gold">Royal Interface Update</h3>
                      <span className="text-xs text-white/50">May 2023</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Refined color scheme with more consistent royal theming</li>
                      <li>Improved card and button components</li>
                      <li>Enhanced animations and transitions</li>
                      <li>Added Royal Encyclopedia for help and documentation</li>
                      <li>Optimized code for better performance</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 glass-morphism border-royal-crimson/30 rounded-lg bg-royal-crimson/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-royal-crimson">Team System Expansion</h3>
                      <span className="text-xs text-white/50">April 2023</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      <li>Enhanced team competition mechanics</li>
                      <li>Added weekly team-based challenges</li>
                      <li>Implemented team chat and coordination features</li>
                      <li>Created team-specific visual effects and badges</li>
                      <li>Added team contribution analytics</li>
                    </ul>
                  </div>
                </div>
                
                <RoyalDivider variant="line" className="my-8" />
                
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-4 royal-gradient">Coming Soon</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 glass-morphism border-white/10 rounded-lg">
                      <Crown className="h-8 w-8 mx-auto mb-2 text-royal-gold" />
                      <h4 className="font-bold mb-1">Royal Decrees</h4>
                      <p className="text-sm text-white/70">
                        Site-wide proclamations and challenges
                      </p>
                    </div>
                    
                    <div className="p-4 glass-morphism border-white/10 rounded-lg">
                      <Shield className="h-8 w-8 mx-auto mb-2 text-royal-crimson" />
                      <h4 className="font-bold mb-1">Faction Warfare</h4>
                      <p className="text-sm text-white/70">
                        Enhanced team competitions with territory control
                      </p>
                    </div>
                    
                    <div className="p-4 glass-morphism border-white/10 rounded-lg">
                      <Users className="h-8 w-8 mx-auto mb-2 text-royal-navy" />
                      <h4 className="font-bold mb-1">Noble Alliances</h4>
                      <p className="text-sm text-white/70">
                        Form sub-groups within teams for additional bonuses
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HelpPage;
