
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Crown,
  Coins,
  Users,
  Trophy,
  ChevronRight,
  Star,
  Sparkles,
  Shield,
  Sword,
  Flame,
  Gift,
  DollarSign,
  LineChart,
  Medal,
  BarChart,
  Heart,
  PieChart,
  Zap
} from "lucide-react";
import { Link } from 'react-router-dom';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';
import BrandIcon from '@/components/ui/brand-icon';
import { cn } from "@/lib/utils";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tier: 'free' | 'pro' | 'royal';
  comingSoon?: boolean;
  popular?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  tier,
  comingSoon = false,
  popular = false
}) => {
  const tierLabel = {
    'free': { label: 'Free', color: 'bg-gray-200 text-gray-800' },
    'pro': { label: 'Pro Tier', color: 'bg-royal-gold/20 text-royal-gold' },
    'royal': { label: 'Royal Tier', color: 'bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black' }
  };

  return (
    <Card className={cn(
      "glass-morphism border-white/10 h-full transition-all duration-300 hover:border-white/20",
      popular && "ring-2 ring-royal-gold/30"
    )}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="p-2 rounded-lg bg-white/5 mb-2">
            {icon}
          </div>
          <div className="flex space-x-2">
            {popular && (
              <Badge variant="secondary" className="bg-royal-gold/20 text-royal-gold border-royal-gold/30">
                Popular
              </Badge>
            )}
            {comingSoon && (
              <Badge variant="outline" className="border-white/20">
                Coming Soon
              </Badge>
            )}
            <Badge className={tierLabel[tier].color}>
              {tierLabel[tier].label}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

const FeatureCategorySection: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  features: FeatureCardProps[];
}> = ({ title, description, icon, features }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-white/5">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </div>
);

const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  tier: 'free' | 'pro' | 'royal';
  popular?: boolean;
  buttonText?: string;
}> = ({ title, price, description, features, tier, popular = false, buttonText = "Choose Plan" }) => {
  const tierColors = {
    'free': 'border-white/10 hover:border-white/20',
    'pro': 'border-royal-gold/30 hover:border-royal-gold/50',
    'royal': 'border-purple-500/30 hover:border-purple-500/50'
  };
  
  const buttonColors = {
    'free': 'bg-white/10 text-white hover:bg-white/20',
    'pro': 'bg-royal-gold text-black hover:bg-royal-gold/90',
    'royal': 'bg-gradient-to-r from-royal-gold to-royal-purple text-black hover:opacity-90'
  };
  
  return (
    <Card className={cn(
      "glass-morphism", 
      tierColors[tier],
      popular && "ring-2 ring-royal-gold"
    )}>
      <CardHeader>
        {popular && (
          <Badge className="w-fit mb-2 bg-royal-gold/20 text-royal-gold border-royal-gold/30">
            Most Popular
          </Badge>
        )}
        <CardTitle className="text-xl flex items-center">
          {tier === 'royal' && <Crown className="mr-2 h-5 w-5 text-royal-gold" />}
          {title}
        </CardTitle>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-white/70 ml-1">USD</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className={cn("w-full mt-4", buttonColors[tier])}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const ComparisonTable: React.FC = () => (
  <div className="glass-morphism border-white/10 rounded-lg p-6 overflow-x-auto">
    <table className="w-full min-w-[800px]">
      <thead>
        <tr className="border-b border-white/10">
          <th className="py-4 px-4 text-left">Feature</th>
          <th className="py-4 px-4 text-center">Free</th>
          <th className="py-4 px-4 text-center">Pro ($25+)</th>
          <th className="py-4 px-4 text-center">Royal ($100+)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Basic Profile</td>
          <td className="py-4 px-4 text-center">✅</td>
          <td className="py-4 px-4 text-center">✅</td>
          <td className="py-4 px-4 text-center">✅</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Text Limit</td>
          <td className="py-4 px-4 text-center">200 chars</td>
          <td className="py-4 px-4 text-center">1000 chars</td>
          <td className="py-4 px-4 text-center">Unlimited</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Images</td>
          <td className="py-4 px-4 text-center">1 (500KB max)</td>
          <td className="py-4 px-4 text-center">5 (2MB each)</td>
          <td className="py-4 px-4 text-center">Unlimited (5MB each)</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Links</td>
          <td className="py-4 px-4 text-center">1</td>
          <td className="py-4 px-4 text-center">5</td>
          <td className="py-4 px-4 text-center">Unlimited</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">RGB Border Animation</td>
          <td className="py-4 px-4 text-center">❌</td>
          <td className="py-4 px-4 text-center">✅</td>
          <td className="py-4 px-4 text-center">✅ (Premium)</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Video Embeds</td>
          <td className="py-4 px-4 text-center">❌</td>
          <td className="py-4 px-4 text-center">✅</td>
          <td className="py-4 px-4 text-center">✅</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Custom Themes</td>
          <td className="py-4 px-4 text-center">❌</td>
          <td className="py-4 px-4 text-center">3 themes</td>
          <td className="py-4 px-4 text-center">All themes</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Analytics</td>
          <td className="py-4 px-4 text-center">Basic</td>
          <td className="py-4 px-4 text-center">Advanced</td>
          <td className="py-4 px-4 text-center">Premium</td>
        </tr>
        <tr className="border-b border-white/10">
          <td className="py-4 px-4">Team Bonuses</td>
          <td className="py-4 px-4 text-center">❌</td>
          <td className="py-4 px-4 text-center">✅</td>
          <td className="py-4 px-4 text-center">✅ (Double)</td>
        </tr>
        <tr>
          <td className="py-4 px-4">Prize Pool Share</td>
          <td className="py-4 px-4 text-center">Base</td>
          <td className="py-4 px-4 text-center">+25%</td>
          <td className="py-4 px-4 text-center">+100%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const FeaturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all-features");
  
  const coreFeatures = [
    {
      title: "Dollar-Driven Rank",
      description: "Your rank is directly tied to your spending. $1 spent equals 1 unit of rank in our persistent leaderboard.",
      icon: <DollarSign className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const,
      popular: true
    },
    {
      title: "Profile Customization",
      description: "Create and customize your royal profile with text, images, links, and more based on your tier.",
      icon: <Users className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const
    },
    {
      title: "Team Competition",
      description: "Join one of three teams (Red, Green, or Blue) and compete for team dominance and rewards.",
      icon: <Shield className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const
    }
  ];
  
  const premiumFeatures = [
    {
      title: "Enhanced Profile",
      description: "Unlock premium profile features including RGB borders, more images, videos, and custom themes.",
      icon: <Sparkles className="h-6 w-6 text-royal-gold" />,
      tier: "pro" as const,
      popular: true
    },
    {
      title: "Advanced Analytics",
      description: "Track profile views, clicks, and conversion rates with detailed statistics and insights.",
      icon: <LineChart className="h-6 w-6 text-royal-gold" />,
      tier: "pro" as const
    },
    {
      title: "Profile Boosts",
      description: "Temporarily boost your profile's visibility and appearance with special effects.",
      icon: <Zap className="h-6 w-6 text-royal-gold" />,
      tier: "pro" as const
    }
  ];
  
  const eventFeatures = [
    {
      title: "Weekly Events",
      description: "Participate in weekly pay-to-win events with unique twists and temporary effects.",
      icon: <Gift className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const
    },
    {
      title: "Public Mockery",
      description: "Pay to shame other users with a variety of effects that appear on their profile.",
      icon: <Sword className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const,
      popular: true
    },
    {
      title: "Fire Sales",
      description: "Take advantage of limited-time discounts on special items and profile upgrades.",
      icon: <Flame className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const
    }
  ];
  
  const rewardFeatures = [
    {
      title: "Prize Pool",
      description: "Top spenders receive rewards from the Affluent Assembly prize pool shared weekly.",
      icon: <Trophy className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const,
      popular: true
    },
    {
      title: "Spend Streak Rewards",
      description: "Get multipliers on your prize pool share by maintaining consistent spending.",
      icon: <Coins className="h-6 w-6 text-royal-gold" />,
      tier: "free" as const
    },
    {
      title: "Royal Certificate",
      description: "Earn a digital certificate of nobility based on your spending and rank.",
      icon: <Medal className="h-6 w-6 text-royal-gold" />,
      tier: "royal" as const
    }
  ];
  
  const comingSoonFeatures = [
    {
      title: "NFT Badges",
      description: "Mint your achievements as NFTs on the Solana blockchain to show off your status.",
      icon: <Star className="h-6 w-6 text-royal-gold" />,
      tier: "royal" as const,
      comingSoon: true
    },
    {
      title: "Royal Council",
      description: "Top spenders gain access to the exclusive Royal Council with governance powers.",
      icon: <Crown className="h-6 w-6 text-royal-gold" />,
      tier: "royal" as const,
      comingSoon: true
    },
    {
      title: "Whale Chat",
      description: "Private chat room exclusively for top spenders to network and strategize.",
      icon: <MessageCircle className="h-6 w-6 text-royal-gold" />,
      tier: "royal" as const,
      comingSoon: true
    }
  ];

  const pricingTiers = [
    {
      title: "Free",
      price: "$0",
      description: "Basic access to the SpendThrone realm.",
      features: [
        "Basic profile customization",
        "Participate in leaderboard",
        "Join a team",
        "1 profile image (500KB max)",
        "1 external link",
        "Base prize pool eligibility"
      ],
      tier: "free" as const,
      buttonText: "Start Free"
    },
    {
      title: "Pro Tier",
      price: "$25+",
      description: "Enhanced profile and features for serious contenders.",
      features: [
        "Everything in Free tier",
        "Enhanced profile editor",
        "RGB animated borders",
        "5 profile images (2MB each)",
        "5 external links",
        "Video embeds",
        "Advanced analytics",
        "+25% prize pool bonus"
      ],
      tier: "pro" as const,
      popular: true,
      buttonText: "Upgrade to Pro"
    },
    {
      title: "Royal Tier",
      price: "$100+",
      description: "The ultimate experience for those who crave power and prestige.",
      features: [
        "Everything in Pro tier",
        "Unlimited images (5MB each)",
        "Unlimited links",
        "Premium RGB effects",
        "Custom profile themes",
        "Premium analytics",
        "Top-tier certificate",
        "+100% prize pool bonus",
        "Exclusive Royal Cosmetics"
      ],
      tier: "royal" as const,
      buttonText: "Claim Royal Status"
    }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 pt-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-royal-entrance">
            <div className="flex justify-center mb-4">
              <BrandIcon size="lg" variant="fancy" animated className="animate-royal-float" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 royal-gradient">
              <span className="royal-gradient">SpendThrone Features</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore the unique features that make SpendThrone the ultimate pay-to-win social experience where your wealth determines your worth.
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <DollarSign className="h-6 w-6 text-royal-gold mb-1" />
                <div className="text-lg font-bold">$1 = 1 Rank</div>
              </div>
              
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <Users className="h-6 w-6 text-royal-gold mb-1" />
                <div className="text-lg font-bold">3 Teams</div>
              </div>
              
              <div className="glass-morphism-highlight rounded-lg p-3 flex flex-col items-center">
                <Trophy className="h-6 w-6 text-royal-gold mb-1" />
                <div className="text-lg font-bold">Weekly Prizes</div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all-features" value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="glass-morphism border-white/10 bg-transparent">
              <TabsTrigger value="all-features" className="data-[state=active]:bg-white/10">
                All Features
              </TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-white/10">
                Pricing Tiers
              </TabsTrigger>
              <TabsTrigger value="comparison" className="data-[state=active]:bg-white/10">
                Feature Comparison
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all-features" className="space-y-16 mt-8 animate-fade-in">
              <FeatureCategorySection
                title="Core Features"
                description="The fundamental mechanics that drive the SpendThrone experience"
                icon={<Crown className="h-6 w-6 text-royal-gold" />}
                features={coreFeatures}
              />
              
              <Separator className="border-white/10" />
              
              <FeatureCategorySection
                title="Premium Profile Features"
                description="Enhanced customization options available with Pro tier and higher"
                icon={<Sparkles className="h-6 w-6 text-royal-gold" />}
                features={premiumFeatures}
              />
              
              <Separator className="border-white/10" />
              
              <FeatureCategorySection
                title="Events & Interactions"
                description="Special events and ways to interact with other nobles"
                icon={<Flame className="h-6 w-6 text-royal-gold" />}
                features={eventFeatures}
              />
              
              <Separator className="border-white/10" />
              
              <FeatureCategorySection
                title="Rewards & Recognition"
                description="Benefits and rewards for your spending and participation"
                icon={<Trophy className="h-6 w-6 text-royal-gold" />}
                features={rewardFeatures}
              />
              
              <Separator className="border-white/10" />
              
              <FeatureCategorySection
                title="Coming Soon"
                description="Exciting features on the royal roadmap"
                icon={<Star className="h-6 w-6 text-royal-gold" />}
                features={comingSoonFeatures}
              />
              
              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Experience SpendThrone?</h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Join the ranks of the nobility and prove your worth through your wealth.
                </p>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-bright text-black hover:opacity-90 px-8 py-6 h-auto text-lg">
                    Join the Realm Now
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="space-y-12 mt-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Choose Your Royal Status</h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Select the tier that matches your ambition in the SpendThrone realm.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <PricingCard key={index} {...tier} />
                ))}
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-royal-gold" />
                  Important Notes
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">
                      Spending is cumulative - you don't need to spend the full tier amount at once
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">
                      Benefits unlock immediately when you reach the spending threshold
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">
                      All spending contributes to your rank position on the leaderboard
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">
                      Prize pool rewards are distributed weekly based on multiple factors including tier status
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="comparison" className="mt-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Feature Comparison</h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Detailed breakdown of features available in each tier.
                </p>
              </div>
              
              <ComparisonTable />
              
              <div className="mt-12 text-center">
                <Link to="/register">
                  <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 px-8">
                    Join SpendThrone
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 glass-morphism border-white/10 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Progress Chart</h2>
                <p className="text-white/70 mb-6">
                  Track your journey through the different spending tiers and unlock more features.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-white/70">Basic ($0)</span>
                      <span className="text-sm text-white/70">$25</span>
                    </div>
                    <Progress value={0} className="h-2 bg-white/10" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-white/70">Pro ($25)</span>
                      <span className="text-sm text-white/70">$100</span>
                    </div>
                    <Progress value={0} className="h-2 bg-white/10" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-white/70">Royal ($100)</span>
                      <span className="text-sm text-white/70">$500</span>
                    </div>
                    <Progress value={0} className="h-2 bg-white/10" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-white/70">Whale ($500)</span>
                      <span className="text-sm text-white/70">$10,000</span>
                    </div>
                    <Progress value={0} className="h-2 bg-white/10" />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Spending Benefits</h2>
                <p className="text-white/70 mb-6">
                  The more you spend, the more prestigious benefits you unlock.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Higher Prize Pool Share</h4>
                      <p className="text-sm text-white/70">
                        Earn up to 3x multiplier on your share of the weekly prize pool.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Exclusive Cosmetics</h4>
                      <p className="text-sm text-white/70">
                        Unlock limited-edition profile decorations based on your tier.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <PieChart className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Team Rewards Multiplier</h4>
                      <p className="text-sm text-white/70">
                        Boost rewards for your entire team based on your spending.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Mockery Protection</h4>
                      <p className="text-sm text-white/70">
                        High spenders become immune to cheaper forms of public mockery.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// Import MessageCircle and Info icon components
import { MessageCircle, Info } from 'lucide-react';

export default FeaturesPage;
