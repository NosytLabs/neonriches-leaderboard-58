
import React, { useState } from 'react';
import Shell from '@/components/Shell';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ScrollText, 
  Crown, 
  Sparkles, 
  Zap, 
  ArrowRight,
  Star,
  Flame
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalDivider from '@/components/ui/royal-divider';
import P5CrownEffect from '@/components/animations/P5CrownEffect';
import BoostEffectDemo from '@/components/profile/BoostEffectDemo';
import SpendingDistributionChart from '@/components/visualizations/SpendingDistributionChart';
import profileBoostEffects from '@/data/profileBoostEffects';
import { BoostEffect } from '@/types/boostEffects';

const ProfileEnhancements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('visual');
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold royal-gradient mb-4 flex flex-col items-center">
            <Crown className="h-12 w-12 text-royal-gold mb-2 animate-crown-glow" />
            Profile Enhancements
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Elevate your digital presence with our exclusive profile enhancements.
            Dazzle the masses and assert your dominance on the leaderboard.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="glass-morphism border-royal-gold/20 transform transition-all duration-300 hover:scale-[1.02] hover:border-royal-gold/40">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-royal-gold" />
                <CardTitle>Visual Effects</CardTitle>
              </div>
              <CardDescription>
                Stand out with eye-catching visual enhancements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <Crown className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Crown Effects</h3>
                  <p className="text-sm text-white/70">A majestic crown floats above your profile</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <Zap className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Animated Auras</h3>
                  <p className="text-sm text-white/70">Surround your profile with dynamic auras</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <Flame className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Particle Effects</h3>
                  <p className="text-sm text-white/70">Add mesmerizing particles to your profile</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-royal-gold/20 transform transition-all duration-300 hover:scale-[1.02] hover:border-royal-gold/40">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-royal-gold" />
                <CardTitle>Special Ranks</CardTitle>
              </div>
              <CardDescription>
                Exclusive badges and titles to showcase your status.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <ScrollText className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Royal Titles</h3>
                  <p className="text-sm text-white/70">Exclusive titles to display your nobility</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <Badge className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Special Badges</h3>
                  <p className="text-sm text-white/70">Unique badges that showcase your achievements</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <Star className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Prestige Icons</h3>
                  <p className="text-sm text-white/70">Symbols of your elite status on the platform</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-royal-gold/20 transform transition-all duration-300 hover:scale-[1.02] hover:border-royal-gold/40">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <ArrowRight className="mr-2 h-5 w-5 text-royal-gold" />
                <CardTitle>Visibility Boosts</CardTitle>
              </div>
              <CardDescription>
                Increase your visibility across the platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <ArrowRight className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Priority Placement</h3>
                  <p className="text-sm text-white/70">Your profile appears at the top of lists</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <Sparkles className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Highlight Effects</h3>
                  <p className="text-sm text-white/70">Make your profile stand out in the crowd</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40">
                  <Zap className="h-6 w-6 text-royal-gold" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Featured Status</h3>
                  <p className="text-sm text-white/70">Get showcased in premium platform locations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <RoyalDivider label="ENHANCE YOUR PROFILE" variant="fancy" className="mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="glass-morphism border-royal-gold/20 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Crown className="mr-3 h-5 w-5 text-royal-gold" />
                    <CardTitle>Profile Enhancement Gallery</CardTitle>
                  </div>
                  <Badge className="bg-royal-gold/20 text-royal-gold border border-royal-gold/40">
                    Premium
                  </Badge>
                </div>
                <CardDescription>
                  Browse our collection of exclusive profile enhancements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="visual" value={activeCategory} onValueChange={setActiveCategory}>
                  <TabsList className="glass-morphism border-white/10 grid grid-cols-3 mb-6">
                    <TabsTrigger value="visual" className="flex items-center">
                      <Sparkles className="mr-1.5 h-4 w-4" />
                      Visual
                    </TabsTrigger>
                    <TabsTrigger value="rank" className="flex items-center">
                      <Crown className="mr-1.5 h-4 w-4" />
                      Ranks
                    </TabsTrigger>
                    <TabsTrigger value="visibility" className="flex items-center">
                      <Zap className="mr-1.5 h-4 w-4" />
                      Visibility
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="visual" className="space-y-4 m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profileBoostEffects
                        .filter(boost => boost.type === 'appearance' || boost.type === 'animation')
                        .map(boost => (
                          <EnhancementCard key={boost.id} boost={boost} />
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="rank" className="space-y-4 m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profileBoostEffects
                        .filter(boost => boost.type === 'effect')
                        .map(boost => (
                          <EnhancementCard key={boost.id} boost={boost} />
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="visibility" className="space-y-4 m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profileBoostEffects
                        .filter(boost => boost.type === 'visibility')
                        .map(boost => (
                          <EnhancementCard key={boost.id} boost={boost} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="flex flex-col gap-8">
              <BoostEffectDemo />
              <SpendingDistributionChart />
            </div>
          </div>
        </div>
        
        <RoyalDivider label="CROWN BOOST SHOWCASE" variant="line" className="mb-12" />
        
        <div className="mb-12">
          <Card className="glass-morphism border-royal-gold/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold royal-gradient mb-4">Royal Crown Effect</h3>
                  <p className="text-white/70 mb-6">
                    Our premium crown effect hovers majestically above your profile, 
                    letting everyone know of your royal status and spending prowess.
                    Created with advanced particle animations, this effect ensures you stand out
                    among the digital nobility.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Duration</span>
                      <span className="text-royal-gold">30 Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Tier Required</span>
                      <Badge className="bg-royal-purple/20 text-royal-purple border border-royal-purple/40">
                        Royal
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Price</span>
                      <span className="text-royal-gold font-bold">$50.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <P5CrownEffect width={400} height={400} color="#D4AF37" sparkleCount={100} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Shell>
  );
};

interface EnhancementCardProps {
  boost: BoostEffect;
}

const EnhancementCard: React.FC<EnhancementCardProps> = ({ boost }) => {
  return (
    <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-royal-gold/20 border border-royal-gold/40 mr-4">
            {boost.type === 'appearance' && <Sparkles className="h-6 w-6 text-royal-gold" />}
            {boost.type === 'animation' && <Zap className="h-6 w-6 text-royal-gold" />}
            {boost.type === 'effect' && <Crown className="h-6 w-6 text-royal-gold" />}
            {boost.type === 'visibility' && <ArrowRight className="h-6 w-6 text-royal-gold" />}
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold">{boost.name}</h3>
              <Badge 
                className={`
                  ${boost.tier === 'basic' ? 'bg-gray-700/50 text-gray-300 border-gray-600' : ''}
                  ${boost.tier === 'premium' ? 'bg-royal-gold/20 text-royal-gold border-royal-gold/40' : ''}
                  ${boost.tier === 'royal' ? 'bg-royal-purple/20 text-royal-purple border-royal-purple/40' : ''}
                `}
              >
                {boost.tier.charAt(0).toUpperCase() + boost.tier.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-white/70 mb-2">{boost.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span>${boost.price.toFixed(2)}</span>
              <span>{boost.durationDays} days</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileEnhancements;
