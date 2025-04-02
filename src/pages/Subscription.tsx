import React from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown, Sparkles, Gem, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SUBSCRIPTION_TIERS } from '@/config/subscriptions';
import RoyalDivider from '@/components/ui/royal-divider';

const Subscription = ({ pricingFilter }) => {
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

  const filteredTiers = Object.values(SUBSCRIPTION_TIERS)
    .filter(tier => !pricingFilter || tier.id === pricingFilter);

  return (
    <Container className="py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 royal-gradient">Choose Your Royal Status</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Upgrade your standing in the royal court and unlock premium features with our exclusive subscription plans.
        </p>
      </div>

      <div className="glass-morphism border-royal-gold/20 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-amber-500/20 flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Important: Subscriptions vs. Leaderboard Rank</h3>
            <p className="text-white/80 mb-4">
              Subscribing to SpendThrone will <span className="font-bold text-royal-gold">not</span> affect your position on the leaderboard. 
              Your leaderboard rank is determined solely by direct deposits ($1 = 1 rank point).
            </p>
            <p className="text-white/70">
              Subscriptions provide cosmetic enhancements and profile features, while deposits increase your standing in the royal hierarchy.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredTiers.map((tier) => (
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

      <RoyalDivider variant="fancy" className="my-8" />

      <div className="text-center mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Choose SpendThrone?</h2>
        <p className="text-white/70 mb-6">
          Our subscriptions offer unparalleled visibility in our digital kingdom. Enhance your profile with royal flair while maintaining your budget for leaderboard contributions.
        </p>
        <div className="glass-morphism border-royal-gold/20 p-6 rounded-lg">
          <p className="italic text-white/60">
            "All subscriptions are purely cosmetic - your rank is determined solely by your deposits. The more gold coins you contribute to the royal treasury, the higher you climb in the court. It's a simple yet effective demonstration of digital nobility."
          </p>
          <p className="mt-4 text-sm text-white/50">
            "Think of it as the medieval blockchain - permanently recording your wealth for all to see, but without all those pesky gas fees." — Court Historian
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
