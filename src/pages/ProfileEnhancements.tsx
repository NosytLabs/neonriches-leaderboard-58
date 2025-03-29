
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { RoyalSection } from '@/components/ui/theme-components';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles, Gem, Zap, Star, Info, Eye, Palette, Globe } from 'lucide-react';
import BoostEffectDemo from '@/components/profile/BoostEffectDemo';
import EnhancedCrownEffect from '@/components/animations/EnhancedCrownEffect';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import CrownEffectCanvas from '@/components/animations/CrownEffectCanvas';

// Sample profile boost effects
const sampleBoosts = [
  {
    id: 'gold-border',
    name: 'Royal Golden Border',
    description: 'Surround your profile with a shimmering golden aura that lets everyone know of your elevated status.',
    cssClass: 'boost-gold-border',
    type: 'appearance',
    tier: 'premium',
    price: 25,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/gold-border.jpg'
  },
  {
    id: 'crown-effect',
    name: 'Royal Crown Effect',
    description: 'A magnificent crown hovers above your profile, complete with sparkling particles and golden shine.',
    cssClass: 'boost-crown',
    type: 'effect',
    tier: 'royal',
    price: 50,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/crown-effect.jpg'
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow Aura',
    description: 'Surround your profile with a vibrant neon glow that pulses with energy.',
    cssClass: 'boost-neon-glow',
    type: 'appearance',
    tier: 'premium',
    price: 20,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/neon-glow.jpg'
  },
  {
    id: 'rgb-flow',
    name: 'RGB Flow Effect',
    description: 'A mesmerizing flow of RGB colors surrounds your profile, cycling through the spectrum.',
    cssClass: 'boost-rgb-flow',
    type: 'animation',
    tier: 'premium',
    price: 30,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/rgb-flow.jpg'
  },
  {
    id: 'royal-pulse',
    name: 'Royal Pulse',
    description: 'Your profile gently pulses with a royal energy, subtly drawing attention.',
    cssClass: 'boost-pulse',
    type: 'animation',
    tier: 'basic',
    price: 15,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/pulse.jpg'
  },
  {
    id: 'featured-placement',
    name: 'Featured Placement',
    description: 'Your profile receives priority placement in search results and leaderboards.',
    cssClass: 'boost-featured',
    type: 'visibility',
    tier: 'royal',
    price: 75,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/featured.jpg'
  },
  {
    id: 'priority-visibility',
    name: 'Priority Visibility',
    description: 'Increased visibility in all areas of the platform.',
    cssClass: 'boost-priority',
    type: 'visibility',
    tier: 'premium',
    price: 35,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/priority.jpg'
  },
  {
    id: 'royal-aura',
    name: 'Royal Aura',
    description: 'A majestic purple aura emanates from your profile, signifying your royal status.',
    cssClass: 'boost-royal-aura',
    type: 'effect',
    tier: 'royal',
    price: 60,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/royal-aura.jpg'
  }
];

const ProfileEnhancements = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  
  // Filter boosts based on active tab and tier
  const getFilteredBoosts = () => {
    let filtered = [...sampleBoosts];
    
    if (activeTab !== 'all') {
      filtered = filtered.filter(boost => boost.type === activeTab);
    }
    
    if (selectedTier) {
      filtered = filtered.filter(boost => boost.tier === selectedTier);
    }
    
    return filtered;
  };
  
  const handleTierSelect = (tier: string) => {
    setSelectedTier(selectedTier === tier ? null : tier);
  };
  
  return (
    <Shell>
      <div className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-10 w-64 h-64 opacity-30 pointer-events-none">
          <EnhancedCrownEffect width={256} height={256} opacity={0.3} interactive={false} />
        </div>
        <div className="absolute bottom-40 right-10 w-64 h-64 opacity-30 pointer-events-none">
          <CrownEffectCanvas width={256} height={256} opacity={0.3} color="#8B5CF6" />
        </div>
        
        <RoyalSection
          title="Royal Profile Enhancements"
          description="Elevate your digital presence with exclusive visual boosts and effects"
          centered={true}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-morphism border-white/10 rounded-lg p-6 mb-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Sparkles className="w-20 h-20 text-royal-gold animate-pulse-slow" />
                <div className="absolute inset-0 bg-royal-gold/10 rounded-full filter blur-xl"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Why Enhance Your Profile?</h3>
                <p className="text-white/70 mb-3">
                  In the realm of SpendThrone, appearances are everything. Our exclusive profile enhancements allow you to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Stand out in the leaderboard with eye-catching visual effects</span>
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Gain increased visibility throughout the platform</span>
                  </li>
                  <li className="flex items-start">
                    <Crown className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Display your elite status with exclusive animations and effects</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">Attract more profile visitors with striking visual aesthetics</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedTier === 'basic' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleTierSelect('basic')}
              className="border-white/10"
            >
              <Zap className="h-4 w-4 mr-1" />
              Basic Tier
            </Button>
            <Button
              variant={selectedTier === 'premium' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleTierSelect('premium')}
              className="border-white/10"
            >
              <Gem className="h-4 w-4 mr-1" />
              Premium Tier
            </Button>
            <Button
              variant={selectedTier === 'royal' ? 'royal' : 'outline'}
              size="sm"
              onClick={() => handleTierSelect('royal')}
              className="border-white/10"
            >
              <Crown className="h-4 w-4 mr-1" />
              Royal Tier
            </Button>
            {selectedTier && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTier(null)}
              >
                Clear Filter
              </Button>
            )}
          </div>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 text-royal-gold mr-2" />
                Available Enhancements
              </CardTitle>
              <CardDescription>
                Browse our selection of profile boosts and visual effects
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="all" className="flex items-center gap-1.5">
                    <Star className="h-4 w-4" />
                    All Effects
                  </TabsTrigger>
                  <TabsTrigger value="appearance" className="flex items-center gap-1.5">
                    <Crown className="h-4 w-4" />
                    Appearance
                  </TabsTrigger>
                  <TabsTrigger value="animation" className="flex items-center gap-1.5">
                    <Zap className="h-4 w-4" />
                    Animation
                  </TabsTrigger>
                  <TabsTrigger value="visibility" className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    Visibility
                  </TabsTrigger>
                  <TabsTrigger value="effect" className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    Special
                  </TabsTrigger>
                </TabsList>
                
                <ScrollArea className="h-[600px] pr-4">
                  <TabsContent value={activeTab} className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {getFilteredBoosts().map((boost, index) => (
                        <motion.div
                          key={boost.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                          <BoostEffectDemo boost={boost} />
                        </motion.div>
                      ))}
                    </div>
                    
                    {getFilteredBoosts().length === 0 && (
                      <div className="text-center py-12">
                        <Info className="h-12 w-12 text-white/40 mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No boosts found</h3>
                        <p className="text-white/60">
                          Try adjusting your filters to see more options
                        </p>
                      </div>
                    )}
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </CardContent>
          </Card>
        </RoyalSection>
        
        <RoyalDivider variant="ornate" color="gold" className="my-12" />
        
        <RoyalSection
          title="Subscription Benefits"
          description="Unlock even more lavish enhancements with premium subscriptions"
          centered={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-morphism border-white/10 rounded-lg overflow-hidden transition-all hover:border-white/20"
            >
              <div className="p-6">
                <Badge variant="outline" className="mb-4">Basic</Badge>
                <h3 className="text-xl font-bold mb-2">Commoner</h3>
                <div className="text-3xl font-bold mb-4">$5<span className="text-sm text-white/50 font-normal">/month</span></div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-white/70">
                    <Zap className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Basic profile customization</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Zap className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to 3 basic boosts</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Zap className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>10% discount on all purchases</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full">Subscribe</Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-morphism border-royal-purple/30 rounded-lg overflow-hidden relative transform hover:scale-105 transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-royal-purple"></div>
              <div className="p-6">
                <Badge className="mb-4 bg-royal-purple text-white border-none">Premium</Badge>
                <h3 className="text-xl font-bold mb-2">Noble</h3>
                <div className="text-3xl font-bold mb-4">$25<span className="text-sm text-white/50 font-normal">/month</span></div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-white/70">
                    <Gem className="h-4 w-4 text-royal-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced profile customization</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Gem className="h-4 w-4 text-royal-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to all premium boosts</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Gem className="h-4 w-4 text-royal-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>25% discount on all purchases</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Gem className="h-4 w-4 text-royal-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority in leaderboards</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-royal-purple hover:bg-royal-purple/90">Subscribe</Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-morphism border-royal-gold/30 rounded-lg overflow-hidden relative transform hover:scale-105 transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-royal-gold"></div>
              <div className="p-6">
                <Badge className="mb-4 bg-royal-gold text-black border-none">Royal</Badge>
                <h3 className="text-xl font-bold mb-2">Monarch</h3>
                <div className="text-3xl font-bold mb-4">$50<span className="text-sm text-white/50 font-normal">/month</span></div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-white/70">
                    <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ultimate profile customization</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to all boosts, including Royal tier</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>50% discount on all purchases</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exclusive crown effects and animations</span>
                  </li>
                  <li className="flex items-start text-white/70">
                    <Crown className="h-4 w-4 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>Top priority in all platform features</span>
                  </li>
                </ul>
                
                <Button variant="royal" className="w-full">Subscribe</Button>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm italic">
              All subscription fees contribute directly to your leaderboard rank.
              <br />The more you pay, the higher you climb!
            </p>
          </div>
        </RoyalSection>
      </div>
    </Shell>
  );
};

export default ProfileEnhancements;
