
import React from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown, Sparkles, Gem } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SUBSCRIPTION_TIERS } from '@/config/subscriptions';

const Subscription = () => {
  const getTierIcon = (tierId: string) => {
    switch (tierId) {
      case 'standard':
        return <Gem className="h-5 w-5 text-royal-gold" />;
      case 'premium':
        return <Sparkles className="h-5 w-5 text-royal-purple" />;
      case 'royal':
        return <Crown className="h-5 w-5 text-royal-gold" />;
      default:
        return null;
    }
  };

  const getCardClass = (tierId: string) => {
    switch (tierId) {
      case 'standard':
        return 'border-royal-gold/30';
      case 'premium':
        return 'border-royal-purple/40 ring-2 ring-royal-purple/20';
      case 'royal':
        return 'border-royal-gold/50 ring-2 ring-royal-gold/30';
      default:
        return 'border-white/10';
    }
  };

  return (
    <Container className="py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 royal-gradient">Choose Your Throne</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Upgrade your status and unlock premium features with our exclusive subscription plans.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SUBSCRIPTION_TIERS.filter(tier => tier.id !== 'free').map((tier) => (
          <Card key={tier.id} className={`relative overflow-hidden glass-morphism ${getCardClass(tier.id)}`}>
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-royal-purple text-white text-xs font-medium px-2 py-0.5 rounded-bl">
                RECOMMENDED
              </div>
            )}
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-full ${
                  tier.id === 'standard' ? 'bg-royal-gold/20' : 
                  tier.id === 'premium' ? 'bg-royal-purple/20' : 'bg-royal-gold/30'
                }`}>
                  {getTierIcon(tier.id)}
                </div>
                <div>
                  <CardTitle className={tier.id === 'royal' ? 'royal-gradient' : ''}>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-3xl font-bold">
                  ${tier.priceMonthly}
                </span>
                <span className="text-white/60">
                  /month
                </span>
                <div className="mt-1">
                  <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold border-0">
                    Save 10% with annual billing
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${
                  tier.id === 'standard' ? 'bg-gradient-to-r from-slate-600 to-slate-700' : 
                  tier.id === 'premium' ? 'bg-gradient-to-r from-purple-700 to-purple-800' : 
                  'bg-gradient-to-r from-amber-500 to-yellow-600 text-black'
                } hover:opacity-90`}
              >
                Subscribe Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Choose SpendThrone?</h2>
        <p className="text-white/70 mb-6">
          Our premium subscriptions offer unparalleled visibility and status in our digital kingdom. Join the elite ranks of our most distinguished members and showcase your prestige.
        </p>
        <div className="glass-morphism border-royal-gold/20 p-6 rounded-lg">
          <p className="italic text-white/60">
            "All subscriptions are purely cosmetic - your rank is determined solely by your spending. The more you spend, the higher you climb. It's a simple yet effective demonstration of digital status."
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
