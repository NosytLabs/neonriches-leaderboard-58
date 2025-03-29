
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeatureShowcase from '@/components/ui/feature-showcase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { featuresData } from '@/data/featuresData';
import FaqComponent from '@/components/FaqComponent';
import { Eye, Paintbrush, Zap, Crown, DollarSign } from 'lucide-react';

const VisibilityFeatures = () => {
  // Filter features that are relevant to visibility
  const visualEnhancementFeatures = featuresData.filter(
    feature => feature.category === "Visual Enhancements"
  );
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Visibility & Visual Features | SpendThrone</title>
        <meta name="description" content="Enhance your profile's visibility and appearance with visual effects that make you stand out without affecting leaderboard rank." />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Profile Visibility & Visual Enhancements</h1>
          <p className="text-xl text-white/70">
            Stand out with visual effects that don't affect your leaderboard rank
          </p>
        </div>
        
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center gap-1.5">
              <Paintbrush className="h-4 w-4" />
              <span>Features</span>
            </TabsTrigger>
            <TabsTrigger value="pricing" className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" />
              <span>FAQ</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Visibility Without Rank</CardTitle>
                <CardDescription>
                  Make your profile stand out without spending a fortune
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  While your position on the SpendThrone leaderboard is determined solely by how much you've spent,
                  your profile's <strong>visual appearance</strong> and <strong>visibility</strong> can be enhanced
                  in other ways.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <div className="glass-morphism-highlight p-4 rounded-lg">
                    <div className="flex items-center text-royal-gold mb-2">
                      <Eye className="h-5 w-5 mr-2" />
                      <h3 className="font-bold">Visibility Boosts</h3>
                    </div>
                    <p className="text-sm text-white/70">
                      Temporary enhancements that increase your profile's visibility across the platform without affecting rank.
                    </p>
                  </div>
                  
                  <div className="glass-morphism-highlight p-4 rounded-lg">
                    <div className="flex items-center text-royal-gold mb-2">
                      <Paintbrush className="h-5 w-5 mr-2" />
                      <h3 className="font-bold">Visual Effects</h3>
                    </div>
                    <p className="text-sm text-white/70">
                      Eye-catching borders, glows, and styles that make your profile and leaderboard entry visually distinct.
                    </p>
                  </div>
                  
                  <div className="glass-morphism-highlight p-4 rounded-lg">
                    <div className="flex items-center text-royal-gold mb-2">
                      <Zap className="h-5 w-5 mr-2" />
                      <h3 className="font-bold">Animations</h3>
                    </div>
                    <p className="text-sm text-white/70">
                      Dynamic movement and effects that bring your profile to life and create a premium experience.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-2">How It Works</h3>
                  <p className="mb-4">
                    These visibility features operate on a separate system from the leaderboard rankings:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Your rank is determined by deposits only</p>
                        <p className="text-sm text-white/70">
                          Every $1 you deposit equals 1 rank point. This is the only way to climb the leaderboard.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Visual effects are purchased separately</p>
                        <p className="text-sm text-white/70">
                          Profile boosts and visual enhancements can be purchased as one-time boosts or through subscriptions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Effects are temporary or subscription-based</p>
                        <p className="text-sm text-white/70">
                          Individual boosts last for a specific duration (3-14 days). Subscription effects last as long as your subscription.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Combine effects for unique presentation</p>
                        <p className="text-sm text-white/70">
                          Mix and match different visual effects and boosts to create a unique profile presentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <FeatureShowcase 
              features={visualEnhancementFeatures} 
              showCategories={false} 
              maxColumns={2}
            />
          </TabsContent>
          
          <TabsContent value="pricing" className="mt-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle>Pricing Options</CardTitle>
                <CardDescription>
                  Choose the option that fits your visibility needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="glass-morphism p-6 rounded-lg border border-white/10">
                    <div className="flex items-center mb-4">
                      <Zap className="h-5 w-5 text-royal-gold mr-2" />
                      <h3 className="text-xl font-bold">Individual Boosts</h3>
                    </div>
                    
                    <p className="mb-4 text-white/70">
                      One-time purchases of specific visual effects and visibility enhancements.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span>Visibility Boosts</span>
                        <span className="font-mono">$5-10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Appearance Boosts</span>
                        <span className="font-mono">$3-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Animation Effects</span>
                        <span className="font-mono">$4-12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Special Effects</span>
                        <span className="font-mono">$9-20</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-white/60">
                      <strong>Boost duration:</strong> 3-14 days depending on the effect
                    </div>
                  </div>
                  
                  <div className="glass-morphism p-6 rounded-lg border border-royal-gold/20">
                    <div className="flex items-center mb-4">
                      <Crown className="h-5 w-5 text-royal-gold mr-2" />
                      <h3 className="text-xl font-bold">Subscription Plans</h3>
                    </div>
                    
                    <p className="mb-4 text-white/70">
                      Ongoing access to premium visual features and visibility enhancements.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span>Premium Tier</span>
                        <span className="font-mono">$15/month</span>
                      </div>
                      <div className="text-sm text-white/60 pl-4 mb-2">
                        • RGB borders and animations<br />
                        • 50% discount on all boosts<br />
                        • Monthly free 3-day boost<br />
                        • Access to premium effects
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Royal Tier</span>
                        <span className="font-mono">$30/month</span>
                      </div>
                      <div className="text-sm text-white/60 pl-4">
                        • Permanent profile boost<br />
                        • Exclusive animated effects<br />
                        • 75% discount on all boosts<br />
                        • Access to royal-tier effects
                      </div>
                    </div>
                    
                    <div className="text-sm text-white/60">
                      <strong>Note:</strong> Subscription benefits last as long as your subscription is active
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <FaqComponent 
              title="Visibility Features FAQ" 
              initialCategory="boosts"
              showSearch={true}
            />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisibilityFeatures;
