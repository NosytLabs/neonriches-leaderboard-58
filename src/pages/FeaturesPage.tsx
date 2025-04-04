
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Trophy, Users, Sparkles, Shield, Zap, Gift, Target, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Royal Decrees</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover the prestigious features of SpendThrone that set it apart from mere peasant platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Crown className="text-royal-gold h-6 w-6" />}
            title="Royal Leaderboard"
            description="Compete for the throne on our global spending leaderboard. The more you spend, the higher your rank."
          />
          
          <FeatureCard
            icon={<Trophy className="text-royal-gold h-6 w-6" />}
            title="Achievements"
            description="Unlock prestigious achievements based on your spending patterns and platform activity."
          />
          
          <FeatureCard
            icon={<Users className="text-royal-gold h-6 w-6" />}
            title="Noble Houses"
            description="Join a team and compete collectively. Your spending contributes to your team's overall ranking."
          />
          
          <FeatureCard
            icon={<Sparkles className="text-royal-gold h-6 w-6" />}
            title="Profile Enhancements"
            description="Purchase cosmetic upgrades to make your profile stand out with exclusive borders, backgrounds, and effects."
          />
          
          <FeatureCard
            icon={<Shield className="text-royal-gold h-6 w-6" />}
            title="Royal Titles"
            description="Progress through tiers from Bronze to Royal as you spend, unlocking new titles and privileges."
          />
          
          <FeatureCard
            icon={<Zap className="text-royal-gold h-6 w-6" />}
            title="Boost Your Rank"
            description="Purchase temporary rank boosts to jump ahead on the leaderboard for a limited time."
          />
          
          <FeatureCard
            icon={<Gift className="text-royal-gold h-6 w-6" />}
            title="Royal Events"
            description="Participate in time-limited spending tournaments with special rewards for the highest spenders."
          />
          
          <FeatureCard
            icon={<Target className="text-royal-gold h-6 w-6" />}
            title="Mockery"
            description="Spend to mock other users, temporarily reducing their rank as a display of your superiority."
          />
          
          <FeatureCard
            icon={<MessageSquare className="text-royal-gold h-6 w-6" />}
            title="Royal Council"
            description="Top spenders gain access to exclusive chat rooms and forums with other elites."
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="glass-morphism border-white/10 border-2 border-royal-gold/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-royal-gold flex items-center justify-center">
                <Crown className="mr-2 h-6 w-6" />
                Begin Your Royal Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-white/70">
                Create your royal account and start climbing the ranks of nobility. Your throne awaits.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg">
                  Join Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-white/50">
            SpendThrone is a satirical social experiment. All "spending" is for entertainment purposes only.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card className="glass-morphism border-white/10 hover:border-royal-gold/50 transition-all duration-300">
    <CardHeader>
      <div className="mb-2">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-white/70">{description}</p>
    </CardContent>
  </Card>
);

export default FeaturesPage;
