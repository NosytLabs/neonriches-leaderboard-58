
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { RoyalSection } from '@/components/ui/theme-components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, Star, Zap, Eye, Award, ArrowRight } from 'lucide-react';
import { profileBoostEffects, getBoostsByType } from '@/data/boostEffects';
import BoostEffectDemo from '@/components/profile/BoostEffectDemo';
import ThreeDBoostShowcase from '@/components/animations/ThreeDBoostShowcase';
import { subscriptionTiers } from '@/components/profile/UpgradePromotion';

const VisibilityFeatures = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedBoostType, setSelectedBoostType] = useState<string>('appearance');
  
  const boostsByType = getBoostsByType(selectedBoostType);
  
  return (
    <Shell>
      <div className="relative py-12">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-royal-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-royal-purple/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-royal animate-royal-entrance">
              <span className="royal-gradient">Profile Visibility</span> & <span className="royal-gradient">Visual Enhancements</span>
            </h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Elevate your digital presence with our visual enhancements – purely cosmetic upgrades that make your profile shine without affecting your leaderboard rank.
            </p>
          </div>
          
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-royal-gold/20">
                <Crown className="mr-2 h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="boost-showcase" className="data-[state=active]:bg-royal-gold/20">
                <Sparkles className="mr-2 h-4 w-4" />
                Boost Effects
              </TabsTrigger>
              <TabsTrigger value="subscription" className="data-[state=active]:bg-royal-gold/20">
                <Star className="mr-2 h-4 w-4" />
                Subscription Tiers
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Stand Out Without Spending More</h2>
                  <p className="text-white/70 mb-6">
                    Profile visibility features allow you to enhance your presence on SpendThrone without needing to increase your spending rank. These purely cosmetic upgrades add visual flair to your profile, making it more noticeable and personalized.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 p-2 rounded-full bg-royal-gold/10">
                        <Eye className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium">Enhanced Visibility</h3>
                        <p className="text-sm text-white/70">Your profile appears more prominently in search results and browsing.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 p-2 rounded-full bg-royal-gold/10">
                        <Sparkles className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium">Visual Effects</h3>
                        <p className="text-sm text-white/70">Add borders, glows, animations, and other visual elements to your profile.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 p-2 rounded-full bg-royal-gold/10">
                        <Award className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium">Special Badges</h3>
                        <p className="text-sm text-white/70">Display special badges and icons next to your name.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button onClick={() => setActiveTab('boost-showcase')} className="gap-2">
                      <Zap className="h-4 w-4" />
                      Explore Boost Effects
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ThreeDBoostShowcase />
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-white/70 max-w-3xl mx-auto">
                  Our profile boosts and visibility features are designed to enhance your digital presence without affecting the fundamental pay-to-win mechanics.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-14 h-14 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-royal-gold" />
                      <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-60 bg-royal-gold/20"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Temporary Boosts</h3>
                    <p className="text-white/70">
                      Purchase temporary profile boosts that last for a specific duration, adding visual effects and enhanced visibility.
                    </p>
                  </div>
                </div>
                
                <div className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-14 h-14 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-royal-gold" />
                      <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-60 bg-royal-gold/20"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Subscription Perks</h3>
                    <p className="text-white/70">
                      Subscribe to Premium or Royal tiers to unlock permanent visual enhancements and discounts on boost purchases.
                    </p>
                  </div>
                </div>
                
                <div className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-14 h-14 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                      <Crown className="h-6 w-6 text-royal-gold" />
                      <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-60 bg-royal-gold/20"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Exclusive Effects</h3>
                    <p className="text-white/70">
                      Unlock increasingly prestigious visual effects as you progress through subscription tiers and purchase exclusive boosts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/profile/me">
                  <Button variant="outline" className="border-royal-gold/30 hover:bg-royal-gold/10">
                    Try on Your Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="boost-showcase" className="animate-fade-in">
              <RoyalSection
                title="Profile Boost Effects"
                description="Enhance your digital presence with these temporary visual boosts"
                centered={true}
              >
                <div className="mb-8">
                  <TabsList className="inline-flex p-1 rounded-md bg-background/50 border border-white/10">
                    <TabsTrigger 
                      value="appearance" 
                      onClick={() => setSelectedBoostType('appearance')}
                      className={selectedBoostType === 'appearance' ? 'bg-royal-gold/20 text-white' : ''}
                    >
                      <Crown className="mr-2 h-4 w-4" />
                      Appearance
                    </TabsTrigger>
                    <TabsTrigger 
                      value="animation" 
                      onClick={() => setSelectedBoostType('animation')}
                      className={selectedBoostType === 'animation' ? 'bg-royal-gold/20 text-white' : ''}
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Animation
                    </TabsTrigger>
                    <TabsTrigger 
                      value="visibility" 
                      onClick={() => setSelectedBoostType('visibility')}
                      className={selectedBoostType === 'visibility' ? 'bg-royal-gold/20 text-white' : ''}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Visibility
                    </TabsTrigger>
                    <TabsTrigger 
                      value="effect" 
                      onClick={() => setSelectedBoostType('effect')}
                      className={selectedBoostType === 'effect' ? 'bg-royal-gold/20 text-white' : ''}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Special
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {boostsByType.map((boost) => (
                    <BoostEffectDemo key={boost.id} boost={boost} />
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/dashboard">
                    <Button variant="royal" size="lg">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Boost Your Profile
                    </Button>
                  </Link>
                </div>
              </RoyalSection>
            </TabsContent>
            
            <TabsContent value="subscription" className="animate-fade-in">
              <RoyalSection
                title="Subscription Tiers & Visual Benefits"
                description="Unlock permanent visual enhancements with our subscription plans"
                centered={true}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {subscriptionTiers.map((tier) => (
                    <div 
                      key={tier.id}
                      className={`glass-morphism p-6 rounded-lg border ${
                        tier.recommended 
                          ? 'border-royal-gold animate-border-glow' 
                          : 'border-white/10 hover:border-white/30'
                      } transition-all relative`}
                    >
                      {tier.recommended && (
                        <div className="absolute -top-3 -right-3 bg-royal-gold text-black px-3 py-1 text-xs font-bold rounded-full">
                          RECOMMENDED
                        </div>
                      )}
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-full ${
                          tier.id === 'basic' 
                            ? 'bg-gray-700/40' 
                            : tier.id === 'premium' 
                              ? 'bg-royal-purple/20' 
                              : 'bg-royal-gold/20'
                        } flex items-center justify-center mb-4`}>
                          {tier.id === 'basic' ? (
                            <Star className="h-8 w-8 text-gray-300" />
                          ) : tier.id === 'premium' ? (
                            <Crown className="h-8 w-8 text-royal-purple" />
                          ) : (
                            <Crown className="h-8 w-8 text-royal-gold animate-crown-glow" />
                          )}
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          tier.id === 'royal' ? 'text-royal-gold' : ''
                        }`}>{tier.name}</h3>
                        <p className="text-white/70 mb-2">{tier.description}</p>
                        <div className="text-2xl font-bold mb-6">${tier.price}<span className="text-sm font-normal text-white/50">/month</span></div>
                        
                        <ul className="text-left space-y-2 mb-6 min-h-[300px]">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-2 mt-1 text-royal-gold">
                                <Sparkles className="h-4 w-4" />
                              </div>
                              <span className="text-sm text-white/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          variant={tier.id === 'royal' ? 'royal' : tier.recommended ? 'default' : 'outline'} 
                          size="lg"
                          className={tier.id === 'royal' ? 'w-full' : 'w-full'}
                        >
                          {tier.id === 'royal' ? (
                            <>
                              <Crown className="mr-2 h-4 w-4" />
                              Claim Royal Status
                            </>
                          ) : (
                            <>
                              Subscribe Now
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </RoyalSection>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Shell>
  );
};

export default VisibilityFeatures;
