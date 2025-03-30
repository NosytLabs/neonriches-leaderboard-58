
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import RoyalFeatures from '@/components/RoyalFeatures';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Trophy, Sparkles, Shield, Coins, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Feature tier information
const tiers = [
  {
    name: 'Free',
    color: 'text-gray-400',
    bgColor: 'bg-gray-400/10',
    borderColor: 'border-gray-400/20',
    features: ['Basic profile', 'Leaderboard access', 'Limited cosmetics', 'Team selection']
  },
  {
    name: 'Bronze',
    color: 'text-amber-600',
    bgColor: 'bg-amber-600/10',
    borderColor: 'border-amber-600/20',
    features: ['All free features', 'Bronze profile badge', 'Basic mockery actions', 'Team chat access', 'Profile customization']
  },
  {
    name: 'Silver',
    color: 'text-gray-300',
    bgColor: 'bg-gray-300/10',
    borderColor: 'border-gray-300/20',
    features: ['All bronze features', 'Silver profile badge', 'Advanced mockery', 'Profile boosts', 'Custom titles']
  },
  {
    name: 'Gold',
    color: 'text-royal-gold',
    bgColor: 'bg-royal-gold/10',
    borderColor: 'border-royal-gold/20',
    features: ['All silver features', 'Gold profile badge', 'Premium mockery', 'Profile animations', 'Royal titles', 'Marketing tools']
  },
  {
    name: 'Platinum',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20',
    features: ['All gold features', 'Platinum badge', 'Ultimate mockery', 'Custom profile effects', 'Profile billboard', 'Exclusive events']
  },
  {
    name: 'Royal',
    color: 'text-royal-purple',
    bgColor: 'bg-royal-purple/10',
    borderColor: 'border-royal-purple/20',
    features: ['All platinum features', 'Royal badge', 'Ultimate mockery', 'Custom animations', 'Full marketing suite', 'Royal council access']
  }
];

// The main interactive features of the platform
const mainFeatures = [
  {
    title: "Pay-to-Win Leaderboard",
    icon: <Trophy className="h-10 w-10 text-royal-gold" />,
    description: "Your rank is directly proportional to your spending. $1 = 1 unit of rank. The leaderboard never resets, cementing your legacy forever.",
    imageUrl: "/images/features/leaderboard.jpg",
    color: "from-royal-gold to-amber-600"
  },
  {
    title: "Royal Houses",
    icon: <Shield className="h-10 w-10 text-royal-crimson" />,
    description: "Join one of three competing noble houses: Crimson (Fire), Emerald (Forest), or Sapphire (Ocean). Competition between houses drives collective spending.",
    imageUrl: "/images/features/houses.jpg",
    color: "from-royal-crimson to-red-800"
  },
  {
    title: "Profile Customization",
    icon: <Crown className="h-10 w-10 text-royal-purple" />,
    description: "Unlock exclusive cosmetics, profile enhancements, badges, titles, frames, and animations as you spend more on your rank.",
    imageUrl: "/images/features/profile.jpg",
    color: "from-royal-purple to-purple-800"
  },
  {
    title: "Royal Mockery",
    icon: <Sparkles className="h-10 w-10 text-royal-navy" />,
    description: "Apply satirical visual effects to other profiles with our Royal Mockery Festival - a playful take on medieval public mockery.",
    imageUrl: "/images/features/mockery.jpg",
    color: "from-royal-navy to-blue-800"
  },
  {
    title: "Marketing Tools",
    icon: <DollarSign className="h-10 w-10 text-royal-gold" />,
    description: "Higher-ranking nobles gain access to profile billboards, promotional tools, and visibility features to attract more followers.",
    imageUrl: "/images/features/marketing.jpg",
    color: "from-emerald-600 to-green-800"
  },
  {
    title: "Royal Treasury",
    icon: <Coins className="h-10 w-10 text-amber-500" />,
    description: "A portion of weekly spending goes to the royal treasury, with distributions to top spenders and consistent contributors.",
    imageUrl: "/images/features/treasury.jpg",
    color: "from-amber-500 to-yellow-700"
  },
];

const FeatureItem: React.FC<{
  feature: typeof mainFeatures[0];
  index: number;
}> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Card className="glass-morphism border-white/10 overflow-hidden hover:border-royal-gold/30 transition-all duration-300 group">
        <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
        
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center">
              {feature.icon}
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TierFeatures: React.FC = () => {
  return (
    <div className="space-y-6">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold royal-gradient mb-4">Royal Tiers & Privileges</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          As you ascend through the noble ranks, you'll unlock increasingly exclusive features and benefits.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <motion.div 
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className={cn("glass-morphism border-white/10 overflow-hidden transition-all duration-300", tier.borderColor)}>
              <div className={cn("h-1", tier.bgColor)}></div>
              <CardContent className="p-6">
                <h3 className={cn("text-xl font-bold mb-4", tier.color)}>{tier.name} Tier</h3>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={cn("rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-2", tier.bgColor)}>
                        <span className={cn("text-xs", tier.color)}>✓</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className={cn("w-full border", tier.borderColor, tier.color, `hover:bg-${tier.bgColor}`)}
                  >
                    View Requirements
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const MockeryFeatures: React.FC = () => {
  return (
    <div className="space-y-6">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold royal-gradient mb-4">Royal Mockery Festival</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          A satirical take on medieval public mockery, allowing nobles to apply visual effects to other profiles.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-morphism border border-royal-crimson/20 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-4 text-royal-crimson">Mock Thy Rivals</h3>
          <p className="mb-4">
            Apply humorous visual effects to other profiles with our Royal Mockery actions. From jester hats to dunce caps, express your noble disdain in style.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-royal-crimson mr-2">•</span>
              <span>Dunce Cap - Make thy rival look foolish</span>
            </li>
            <li className="flex items-start">
              <span className="text-royal-crimson mr-2">•</span>
              <span>Jester Hat - Turn thy opponent into court entertainment</span>
            </li>
            <li className="flex items-start">
              <span className="text-royal-crimson mr-2">•</span>
              <span>Glitter Bomb - Cover thy rival's profile in sparkles</span>
            </li>
            <li className="flex items-start">
              <span className="text-royal-crimson mr-2">•</span>
              <span>Royal Pie - Splatter a cream pie on their royal visage</span>
            </li>
          </ul>
          <Button variant="outline" className="border-royal-crimson/50 text-royal-crimson hover:bg-royal-crimson/10">
            <Sparkles className="mr-2 h-4 w-4" />
            Browse Mockery Options
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-morphism border border-royal-navy/20 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-4 text-royal-navy">Royal Protection</h3>
          <p className="mb-4">
            Higher tier nobles can purchase protection from mockery or even gain immunity to certain effects. Defend your royal dignity!
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-royal-navy mr-2">•</span>
              <span>Basic Shield - Protection from basic mockery</span>
            </li>
            <li className="flex items-start">
              <span className="text-royal-navy mr-2">•</span>
              <span>Royal Immunity - Complete protection from all mockery</span>
            </li>
            <li className="flex items-start">
              <span className="text-royal-navy mr-2">•</span>
              <span>Counter Mockery - Return mockery to sender</span>
            </li>
            <li className="flex items-start">
              <span className="text-royal-navy mr-2">•</span>
              <span>Mock Reflection - Reflect mockery back with increased effect</span>
            </li>
          </ul>
          <Button variant="outline" className="border-royal-navy/50 text-royal-navy hover:bg-royal-navy/10">
            <Shield className="mr-2 h-4 w-4" />
            View Protection Options
          </Button>
        </motion.div>
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/mockery">
          <Button className="bg-gradient-to-r from-royal-crimson to-royal-navy text-white">
            <Crown className="mr-2 h-4 w-4" />
            Visit The Royal Mockery Festival
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold royal-gradient mb-6">Royal Features & Privileges</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Welcome to SpendThrone's lavish feature collection, where your status is determined by your spending,
            and every dollar contributes to your position in our satirical nobility.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {mainFeatures.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
        
        <Separator className="my-16 bg-white/10" />
        
        <Tabs defaultValue="tiers" className="max-w-5xl mx-auto">
          <TabsList className="w-full mb-8">
            <TabsTrigger value="tiers">
              <Trophy className="h-4 w-4 mr-2" />
              Royal Tiers
            </TabsTrigger>
            <TabsTrigger value="mockery">
              <Sparkles className="h-4 w-4 mr-2" />
              Mockery Festival
            </TabsTrigger>
            <TabsTrigger value="all">
              <Crown className="h-4 w-4 mr-2" />
              All Features
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tiers">
            <TierFeatures />
          </TabsContent>
          
          <TabsContent value="mockery">
            <MockeryFeatures />
          </TabsContent>
          
          <TabsContent value="all">
            <RoyalFeatures />
          </TabsContent>
        </Tabs>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6">Ready to Ascend the Ranks?</h2>
          <Link to="/signup">
            <Button className="bg-royal-gold hover:bg-royal-gold/90 text-black px-8 py-6 text-lg shadow-lg shadow-royal-gold/20">
              Start Your Royal Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-white/60 max-w-md mx-auto">
            Remember, in the world of SpendThrone, it's not about what you know,
            it's about what you spend.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Features;
