
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Scroll, Shield, Target, Crown, Cloud, Bomb, Flame, Egg, Lock, Ban, MessageSquareOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MOCKERY_DESCRIPTIONS, MOCKERY_NAMES, MOCKERY_COSTS } from '@/utils/mockeryUtils';
import MockeryHowItWorks from '@/components/mockery/components/MockeryHowItWorks';

const MockeryGuide = () => {
  return (
    <>
      <PageSEO 
        title="Royal Mockery Guide - How It Works" 
        description="Learn all about the Royal Mockery Festival - a satirical feature that adds purely cosmetic effects to user profiles without affecting their ranking."
        canonicalUrl="https://spendthrone.com/mockery-guide"
      />
      
      <Container className="py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 royal-gradient text-center">Royal Mockery Guide</h1>
          <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
            A comprehensive guide to the satirical Royal Mockery Festival - understanding medieval-inspired mockery features
          </p>
          
          <Tabs defaultValue="overview">
            <TabsList className="glass-morphism border-white/10 w-full grid grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Scroll size={16} />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="effects" className="flex items-center gap-2">
                <Target size={16} />
                <span>Mockery Effects</span>
              </TabsTrigger>
              <TabsTrigger value="protection" className="flex items-center gap-2">
                <Shield size={16} />
                <span>Protection</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <Crown size={16} />
                <span>FAQ</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <Card className="glass-morphism border-royal-purple/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scroll className="mr-2 h-5 w-5 text-royal-purple" />
                    What is the Royal Mockery Festival?
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="p-4 glass-morphism border-white/10 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">A Medieval-Inspired Satirical Feature</h3>
                    <p className="text-white/70 mb-4">
                      The Royal Mockery Festival is a satirical feature inspired by medieval public shaming practices, reimagined for the digital age. It allows users to apply purely cosmetic effects to other users' profiles for a limited time.
                    </p>
                    <p className="text-white/70">
                      These mockery effects are entirely visual and have <strong>absolutely no impact on leaderboard rankings, functionality, or status</strong>. They're designed as a playful commentary on digital status economies, adding a layer of medieval-themed humor to the platform.
                    </p>
                  </div>
                  
                  <div className="p-4 glass-morphism border-white/10 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Key Principles</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Target className="h-5 w-5 text-royal-crimson mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Purely Cosmetic</p>
                          <p className="text-white/70 text-sm">All mockery effects are 100% visual and have no functional impact on the platform or rankings.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <Crown className="h-5 w-5 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Temporary Effects</p>
                          <p className="text-white/70 text-sm">All mockery effects are temporary, lasting from 8 hours to 7 days depending on the type.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-royal-purple mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Optional Protection</p>
                          <p className="text-white/70 text-sm">Users can purchase Royal Protection to prevent mockery effects from being applied to their profiles.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <Bomb className="h-5 w-5 text-royal-navy mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Satirical Commentary</p>
                          <p className="text-white/70 text-sm">The entire feature is a satirical take on digital status economies, reimagined through a medieval lens.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button asChild>
                      <Link to="/mockery">
                        <Target className="mr-2 h-4 w-4" />
                        Visit the Royal Mockery Festival
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="effects" className="mt-6">
              <Card className="glass-morphism border-royal-crimson/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-royal-crimson" />
                    Mockery Effects & Visual Impacts
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="p-4 glass-morphism border-white/10 rounded-lg">
                    <h3 className="font-medium text-lg mb-4">Available Mockery Effects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="glass-morphism border-royal-crimson/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Flame className="h-5 w-5 text-royal-crimson mr-2" />
                          <h4 className="font-medium">{MOCKERY_NAMES.tomatoes}</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.tomatoes}</Badge>
                        </div>
                        <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.tomatoes}</p>
                        <div className="mt-2 text-xs text-white/60">Duration: 24 hours</div>
                      </div>
                      
                      <div className="glass-morphism border-royal-gold/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Egg className="h-5 w-5 text-royal-gold mr-2" />
                          <h4 className="font-medium">{MOCKERY_NAMES.putridEggs}</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.putridEggs}</Badge>
                        </div>
                        <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.putridEggs}</p>
                        <div className="mt-2 text-xs text-white/60">Duration: 48 hours</div>
                      </div>
                      
                      <div className="glass-morphism border-royal-navy/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Lock className="h-5 w-5 text-royal-navy mr-2" />
                          <h4 className="font-medium">{MOCKERY_NAMES.stocks}</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.stocks}</Badge>
                        </div>
                        <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.stocks}</p>
                        <div className="mt-2 text-xs text-white/60">Duration: 72 hours</div>
                      </div>
                      
                      <div className="glass-morphism border-royal-purple/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <MessageSquareOff className="h-5 w-5 text-royal-purple mr-2" />
                          <h4 className="font-medium">{MOCKERY_NAMES.silence}</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.silence}</Badge>
                        </div>
                        <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.silence}</p>
                        <div className="mt-2 text-xs text-white/60">Duration: 48 hours</div>
                      </div>
                      
                      <div className="glass-morphism border-royal-gold/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Crown className="h-5 w-5 text-royal-gold mr-2" />
                          <h4 className="font-medium">{MOCKERY_NAMES.courtJester}</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.courtJester}</Badge>
                        </div>
                        <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.courtJester}</p>
                        <div className="mt-2 text-xs text-white/60">Duration: 7 days</div>
                      </div>
                      
                      <div className="glass-morphism border-royal-gold/40 rounded-lg p-4 shadow-gold">
                        <div className="flex items-center mb-2">
                          <Cloud className="h-5 w-5 text-gray-400 mr-2" />
                          <h4 className="font-medium">{MOCKERY_NAMES.smokeBomb}</h4>
                          <Badge className="ml-2 bg-royal-gold text-black">NEW!</Badge>
                          <Badge className="ml-auto">${MOCKERY_COSTS.smokeBomb}</Badge>
                        </div>
                        <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.smokeBomb}</p>
                        <div className="mt-2 text-xs text-white/60">Duration: 8 hours</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 glass-morphism border-royal-gold/20 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Cloud className="h-5 w-5 text-gray-400 mr-2" />
                      <h3 className="font-medium text-lg">Spotlight: Royal Smoke Bomb</h3>
                      <Badge className="ml-2 bg-royal-gold text-black">NEW!</Badge>
                    </div>
                    
                    <p className="text-white/70 mb-4">
                      Our premium mockery effect completely covers the target's profile in thick, dramatic smoke for 8 hours. Their profile is still fully accessible, but visitors must peer through the royal fog to see it!
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-center">Visual Effect</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                          <li className="flex items-start">
                            <Ban className="h-4 w-4 text-white/40 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Blurs profile content with animated smoke overlay</span>
                          </li>
                          <li className="flex items-start">
                            <Ban className="h-4 w-4 text-white/40 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Adds floating smoke emoji animations</span>
                          </li>
                          <li className="flex items-start">
                            <Ban className="h-4 w-4 text-white/40 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Reduces contrast and applies smoky filter</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-center">Perfect For</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                          <li className="flex items-start">
                            <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span>Making a dramatic statement on high-profile users</span>
                          </li>
                          <li className="flex items-start">
                            <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span>Birthday surprises for friends and colleagues</span>
                          </li>
                          <li className="flex items-start">
                            <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span>Lighthearted team competition and banter</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Button asChild className="bg-royal-gold hover:bg-royal-gold/90 text-black">
                        <Link to="/mockery">
                          <Cloud className="mr-2 h-4 w-4" />
                          Try the Royal Smoke Bomb
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="protection" className="mt-6">
              <Card className="glass-morphism border-royal-purple/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-royal-purple" />
                    Royal Protection & Immunity
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="p-4 glass-morphism border-white/10 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Protecting Your Digital Nobility</h3>
                    <p className="text-white/70 mb-4">
                      While mockery effects are purely cosmetic and don't affect functionality, some users may prefer to maintain a pristine profile appearance. Royal Protection allows you to shield your profile from all mockery attempts.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="glass-morphism border-royal-purple/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-royal-purple mr-2" />
                          <h4 className="font-medium">Royal Protection</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.protection}</Badge>
                        </div>
                        <p className="text-sm text-white/70">
                          Purchase Royal Protection to shield your profile from all mockery attempts for 7 days. No one will be able to apply mockery effects to you during this period.
                        </p>
                        <div className="mt-2 text-xs text-white/60">Duration: 7 days</div>
                      </div>
                      
                      <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Crown className="h-5 w-5 text-royal-gold mr-2" />
                          <h4 className="font-medium">Royal Immunity</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.immune}</Badge>
                        </div>
                        <p className="text-sm text-white/70">
                          Purchase Royal Immunity for the ultimate protection. This premium option shields your profile from all mockery attempts for a full 30 days, ensuring your digital nobility remains unblemished.
                        </p>
                        <div className="mt-2 text-xs text-white/60">Duration: 30 days</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 glass-morphism border-white/10 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Mockery Removal</h3>
                    <p className="text-white/70 mb-4">
                      If you find yourself subject to a mockery effect and wish to remove it before its natural expiration, you have options:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="glass-morphism border-royal-crimson/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Ban className="h-5 w-5 text-royal-crimson mr-2" />
                          <h4 className="font-medium">Mockery Removal</h4>
                          <Badge className="ml-auto">${MOCKERY_COSTS.removal}</Badge>
                        </div>
                        <p className="text-sm text-white/70">
                          Purchase an immediate removal of any active mockery effects on your profile. This is a one-time cleansing that returns your profile to its unblemished state.
                        </p>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Clock className="h-5 w-5 text-white/60 mr-2" />
                          Natural Expiration
                        </h4>
                        <p className="text-sm text-white/70">
                          All mockery effects automatically expire after their designated duration. If you prefer not to pay for removal, you can simply wait for the effect to disappear naturally.
                        </p>
                        <div className="mt-3 text-xs text-white/60">Cost: Free</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button asChild className="bg-royal-purple hover:bg-royal-purple/90">
                      <Link to="/mockery">
                        <Shield className="mr-2 h-4 w-4" />
                        Purchase Royal Protection
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-6">
              <MockeryHowItWorks />
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 text-center">
            <p className="text-white/60 mb-4">Ready to experience the Royal Mockery Festival?</p>
            <Button asChild size="lg">
              <Link to="/mockery">
                <Target className="mr-2 h-5 w-5" />
                Visit the Royal Mockery Festival
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MockeryGuide;
