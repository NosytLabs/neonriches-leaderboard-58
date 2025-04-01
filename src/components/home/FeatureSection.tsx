
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Shield, Gem, TrendingUp, Swords, PiggyBank } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <PiggyBank className="h-8 w-8 text-royal-gold" />,
      title: "Strategic Spending",
      description: "Every dollar spent increases your rank. The leaderboard never resets, making each contribution a permanent mark on history."
    },
    {
      icon: <Crown className="h-8 w-8 text-royal-gold" />,
      title: "Royal Prestige",
      description: "Climb the ranks to earn noble titles, exclusive privileges, and the respect of your peers."
    },
    {
      icon: <Shield className="h-8 w-8 text-royal-crimson" />,
      title: "Team Alliances",
      description: "Join a faction and contribute to collective glory. Team rankings showcase the most influential alliances."
    },
    {
      icon: <Gem className="h-8 w-8 text-royal-purple" />,
      title: "Noble Certificates",
      description: "Earn ornate certificates commemorating your achievements and status within the kingdom."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-500" />,
      title: "Spending Analysis",
      description: "Track your spending patterns and see how they compare to historical nobles and contemporaries."
    },
    {
      icon: <Swords className="h-8 w-8 text-amber-500" />,
      title: "Public Mockery",
      description: "Challenge rivals and engage in medieval-style mockery to establish dominance on the leaderboard."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Royal Features</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Experience the medieval pay-to-win social experiment with these prestigious features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-morphism border-white/10 transition-all duration-300 hover:border-royal-gold/30">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Feature content can be expanded later */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
