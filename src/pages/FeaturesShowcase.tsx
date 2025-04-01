import React from 'react';
import { Shell } from '@/components/ui/shell';
import PageHeader from '@/components/common/PageHeader';
import PageSEO from '@/components/common/PageSEO';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, ArrowRight, Check } from 'lucide-react';
import featuresData from '@/data/featuresData';
import { cn } from '@/lib/utils';

const FeaturesShowcase: React.FC = () => {
  return (
    <Shell>
      <PageSEO 
        title="Royal Features | SpendThrone"
        description="Discover the full suite of royal features that will help you assert your dominance and flaunt your wealth."
      />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <PageHeader
          title="Royal Features"
          description="Discover the full suite of royal features that will help you assert your dominance and flaunt your wealth."
          size="default"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuresData.map((feature) => (
            <Card 
              key={feature.id as React.Key} 
              className="border-white/10 glass-morphism hover:border-royal-gold/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{feature.title as string}</h3>
                    <Badge variant="outline" className="royal-gradient-text">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <p className="text-white/70 mb-6">{feature.description as React.ReactNode}</p>
                  
                  <div className="mt-auto">
                    <Button variant="link" className="p-0 text-royal-gold" asChild>
                      <a href={feature.link}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator 
          className="my-24" 
          variant="fancy" 
          color="gold"
        />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Premium Royal Features</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            For those who truly wish to assert their dominance, our premium features offer unparalleled ways to showcase your wealth and status.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-royal-gold/10 p-3 rounded-full">
                <Crown className="h-6 w-6 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Royal Profile Badges</h3>
                <p className="text-white/70">
                  Exclusive badges that showcase your spending tier and royal status to all who view your profile.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-royal-gold/10 p-3 rounded-full">
                <Crown className="h-6 w-6 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enhanced Visibility</h3>
                <p className="text-white/70">
                  Your profile and comments will be highlighted and prioritized across the platform.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-royal-gold/10 p-3 rounded-full">
                <Crown className="h-6 w-6 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Exclusive Chat Rooms</h3>
                <p className="text-white/70">
                  Access to private chat rooms where only the highest spenders can communicate.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-royal-gold/10 p-3 rounded-full">
                <Crown className="h-6 w-6 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Profile Themes</h3>
                <p className="text-white/70">
                  Personalize your profile with exclusive themes that reflect your royal status.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-royal-gold/10 p-3 rounded-full">
                <Crown className="h-6 w-6 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-white/70">
                  Detailed insights into your spending patterns and how they compare to other nobles.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-royal-gold/10 p-3 rounded-full">
                <Crown className="h-6 w-6 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Royal Announcements</h3>
                <p className="text-white/70">
                  Your major expenditures will be announced to all users with special fanfare.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator 
          className="my-24" 
          variant="fancy" 
          color="gold"
        />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Pricing Tiers</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choose the level of opulence that best suits your desire to flaunt your wealth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-white/10 glass-morphism">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Noble</h3>
                <div className="text-3xl font-bold mt-2">$10</div>
                <p className="text-white/70 mt-1">per month</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Basic profile customization</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Noble badge</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Access to team chats</span>
                </div>
              </div>
              
              <Button className="w-full mt-8">Select Plan</Button>
            </CardContent>
          </Card>
          
          <Card className="border-royal-gold/30 glass-morphism relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-royal-gold text-black px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Royal</h3>
                <div className="text-3xl font-bold mt-2">$50</div>
                <p className="text-white/70 mt-1">per month</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>All Noble features</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Royal badge and profile effects</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Exclusive royal chat rooms</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Enhanced visibility</span>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-royal-gold text-black hover:bg-royal-gold/80">Select Plan</Button>
            </CardContent>
          </Card>
          
          <Card className="border-white/10 glass-morphism">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Emperor</h3>
                <div className="text-3xl font-bold mt-2">$200</div>
                <p className="text-white/70 mt-1">per month</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>All Royal features</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Emperor badge and animations</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Platform-wide announcements</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-royal-gold mr-2" />
                  <span>Personal spending advisor</span>
                </div>
              </div>
              
              <Button className="w-full mt-8">Select Plan</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Shell>
  );
};

export default FeaturesShowcase;
