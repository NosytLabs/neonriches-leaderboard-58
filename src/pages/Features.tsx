
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, 
  Coins, 
  Users, 
  Scroll, 
  Shield, 
  Sparkles, 
  Flame, 
  Palette, 
  Image, 
  MessageSquare,
  Trophy,
  Calendar,
  Settings,
  Gem,
  ArrowRight,
  Swords,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layouts/Layout';
import HeroSection from '@/components/sections/HeroSection';
import { RoyalSection, RoyalCard, RoyalBadge } from '@/components/ui/theme-components';
import MedievalIcon from '@/components/ui/medieval-icon';
import RoyalButton from '@/components/ui/royal-button';
import RoyalDivider from '@/components/ui/royal-divider';
import { useToastContext } from '@/contexts/ToastContext';
import { useAuth } from '@/contexts/auth';
import { motion } from 'framer-motion';
import { stringToBoolean } from '@/utils/booleanUtils';

const Features = () => {
  const { addToast } = useToastContext();
  const { user } = useAuth();
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  
  // Feature categories data
  const categories = [
    {
      id: 'core',
      name: 'Core Features',
      description: 'The fundamental mechanics of SpendThrone',
    },
    {
      id: 'premium',
      name: 'Premium Features',
      description: 'Exclusive benefits for serious spenders',
    },
    {
      id: 'profile',
      name: 'Profile Customization',
      description: 'Make your royal presence unique',
    },
    {
      id: 'events',
      name: 'Events & Tournaments',
      description: 'Special limited-time activities',
    },
    {
      id: 'social',
      name: 'Social Features',
      description: 'Interact with other royals',
    },
  ];
  
  // Features data
  const features = {
    core: [
      {
        title: 'Dollar-Driven Rank',
        description: 'Your rank is determined solely by how much you spend. $1 = 1 unit of rank. The more you spend, the higher you climb.',
        icon: <Coins className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
      {
        title: 'Team Competition',
        description: 'Join one of three royal houses and contribute to your team\'s collective standing.',
        icon: <Users className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
      {
        title: 'Leaderboard',
        description: 'See who\'s spending the most in real-time with our constantly updated leaderboard.',
        icon: <Trophy className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
      {
        title: 'Basic Profile',
        description: 'Customize your profile with a display name, avatar, and basic information.',
        icon: <Settings className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
    ],
    premium: [
      {
        title: 'Royal Mockery',
        description: 'Spend to mock other users with visual effects that appear on their profiles.',
        icon: <Flame className="h-5 w-5 text-royal-gold" />,
        cost: '$0.50+',
      },
      {
        title: 'Tier Badges',
        description: 'Unlock exclusive badges that showcase your spending tier to all other users.',
        icon: <Shield className="h-5 w-5 text-royal-gold" />,
        cost: '$50+',
      },
      {
        title: 'Certificate of Nobility',
        description: 'Generate a personalized certificate showing your rank and status for social sharing.',
        icon: <Scroll className="h-5 w-5 text-royal-gold" />,
        cost: '$25',
      },
      {
        title: 'Top Spender Spotlight',
        description: 'The #1 ranked spender gets featured on the homepage and special promotion privileges.',
        icon: <Crown className="h-5 w-5 text-royal-gold" />,
        cost: 'Rank #1',
      },
    ],
    profile: [
      {
        title: 'Animated Borders',
        description: 'Add eye-catching animated RGB borders to your profile with customizable colors.',
        icon: <Palette className="h-5 w-5 text-royal-gold" />,
        cost: '$25+',
      },
      {
        title: 'Extended Profile',
        description: 'More text space, up to 5 images, and 5 links for enhanced presentation.',
        icon: <Image className="h-5 w-5 text-royal-gold" />,
        cost: '$25+',
      },
      {
        title: 'Custom Gradients',
        description: 'Design your own gradient backgrounds and text effects.',
        icon: <Sparkles className="h-5 w-5 text-royal-gold" />,
        cost: '$50+',
      },
      {
        title: 'Click Analytics',
        description: 'Track profile visits and link clicks with detailed statistics.',
        icon: <Rocket className="h-5 w-5 text-royal-gold" />,
        cost: '$100+',
      },
    ],
    events: [
      {
        title: 'Poke Party',
        description: 'Pay to drop another user down one rank for 24 hours.',
        icon: <Swords className="h-5 w-5 text-royal-gold" />,
        cost: '$0.50 per poke',
      },
      {
        title: 'Team Tournaments',
        description: 'Weekly competitions between the three houses with bonus rewards.',
        icon: <Calendar className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
      {
        title: 'Affluent Assembly',
        description: 'A prize pool rewarding consistent spending and top-tier whale activity.',
        icon: <Gem className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
      {
        title: 'Royal Decrees',
        description: 'Special limited-time offers and unique profile enhancements.',
        icon: <Scroll className="h-5 w-5 text-royal-gold" />,
        cost: 'Varies',
      },
    ],
    social: [
      {
        title: 'Whale Chat',
        description: 'Exclusive chat room for the top 10 spenders to network and conspire.',
        icon: <MessageSquare className="h-5 w-5 text-royal-gold" />,
        cost: 'Top 10 Rank',
      },
      {
        title: 'Team Chat',
        description: 'Coordinate with your fellow team members in dedicated team chat channels.',
        icon: <Users className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
      {
        title: 'Kingmaker Feature',
        description: 'Top spenders can highlight other profiles they deem worthy of attention.',
        icon: <Crown className="h-5 w-5 text-royal-gold" />,
        cost: 'Top 3 Rank',
      },
      {
        title: 'Royal Council',
        description: 'Forums for discussing platform features and future developments.',
        icon: <Scroll className="h-5 w-5 text-royal-gold" />,
        isFree: true,
      },
    ],
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <Layout
      title="Features & Benefits"
      description="Explore the unique features of SpendThrone, where your status is determined solely by how much you spend."
      fullHeight={true}
      transparentHeader={true}
      disablePadding={true}
    >
      <HeroSection
        title="Royal Features"
        subtitle="Explore the unique mechanics and benefits of our satirical platform"
        background="gradient"
        fullHeight={false}
        wave={true}
        actions={
          <>
            <Link to={user ? "/dashboard" : "/auth"}>
              <Button 
                size="lg" 
                className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced"
              >
                <Crown className="h-5 w-5 mr-2" />
                {user ? "View Your Benefits" : "Claim Your Title"}
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
              >
                <Scroll className="h-5 w-5 mr-2" />
                Learn Our Philosophy
              </Button>
            </Link>
          </>
        }
      >
        <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mt-4">
          <RoyalBadge variant="outlineGold" size="md">Dollar-Driven Rank</RoyalBadge>
          <RoyalBadge variant="outlineGold" size="md">Profile Customization</RoyalBadge>
          <RoyalBadge variant="outlineGold" size="md">Royal Mockery</RoyalBadge>
          <RoyalBadge variant="outlineGold" size="md">Team Competition</RoyalBadge>
          <RoyalBadge variant="outlineGold" size="md">Exclusive Events</RoyalBadge>
        </div>
      </HeroSection>
      
      <RoyalSection title="Feature Categories" className="py-16">
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full md:grid-cols-5 mb-8 bg-transparent gap-2">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="glass-morphism data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(features).map(([categoryId, categoryFeatures]) => (
            <TabsContent key={categoryId} value={categoryId} className="pt-4">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  {categories.find(c => c.id === categoryId)?.name}
                </h3>
                <p className="text-white/70">
                  {categories.find(c => c.id === categoryId)?.description}
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {categoryFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    className="h-full"
                    onMouseEnter={() => setHoveredFeature(`${categoryId}-${index}`)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <RoyalCard 
                      hover="scale"
                      className={`h-full transition-all duration-300 ${hoveredFeature === `${categoryId}-${index}` ? 'border-royal-gold/50' : ''}`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start mb-4">
                          <div className="mr-4 flex-shrink-0 h-10 w-10 rounded-full bg-royal-gold/10 flex items-center justify-center">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                            <div>
                              {feature.isFree ? (
                                <RoyalBadge variant="purple" size="sm">Free</RoyalBadge>
                              ) : (
                                <RoyalBadge variant="gold" size="sm">{feature.cost}</RoyalBadge>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-white/70 mb-4 flex-grow">{feature.description}</p>
                        
                        <div className="mt-auto pt-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-royal-gold hover:bg-royal-gold/10 hover:text-royal-gold px-0"
                            onClick={() => {
                              addToast({
                                title: "Feature Info",
                                description: `Learn more about ${feature.title} in our royal documentation.`,
                                variant: "default",
                              });
                            }}
                          >
                            Learn more
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </RoyalCard>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </RoyalSection>
      
      <RoyalDivider variant="royal" className="my-0" />
      
      {/* Featured highlight: Tier System */}
      <RoyalSection className="py-16 bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MedievalIcon name="crown" size="lg" color="gold" animate={true} className="mb-4 mx-auto" />
            <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">
              Royal Tier System
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              As you spend more, you'll ascend through our prestigious tiers, each with its own exclusive benefits and visual distinctions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Whale',
                amount: '$25,000+',
                icon: '🐋',
                color: 'bg-royal-purple/20 border-royal-purple/40 text-royal-purple',
                benefits: [
                  'All Premium Features',
                  'Whale Chat Access',
                  'Kingmaker Powers',
                  'Custom Profile Theme',
                  'Weekly Spotlight Rotation',
                  'Advanced Analytics',
                ]
              },
              {
                name: 'Shark',
                amount: '$10,000+',
                icon: '🦈',
                color: 'bg-royal-crimson/20 border-royal-crimson/40 text-royal-crimson',
                benefits: [
                  'All Premium Features',
                  'Shark Badge',
                  'Royal Council Access',
                  'Advanced Profile Effects',
                  'Enhanced Link Tracking',
                  'Weekly Team Bonuses',
                ]
              },
              {
                name: 'Dolphin',
                amount: '$5,000+',
                icon: '🐬',
                color: 'bg-royal-navy/20 border-royal-navy/40 text-royal-navy',
                benefits: [
                  'Extended Profile',
                  'Animated Borders',
                  'Custom RGB Effects',
                  'Certificate of Nobility',
                  'Email Notifications',
                  'Royal Decree Discounts',
                ]
              },
              {
                name: 'Fish',
                amount: '$1,000+',
                icon: '🐠',
                color: 'bg-blue-500/20 border-blue-500/40 text-blue-400',
                benefits: [
                  'Extended Profile',
                  'Basic RGB Effects',
                  'Certificate of Nobility',
                  'Link Tracking',
                  'Team Chat Access',
                  'Event Participation',
                ]
              },
              {
                name: 'Octopus',
                amount: '$250+',
                icon: '🐙',
                color: 'bg-purple-500/20 border-purple-500/40 text-purple-400',
                benefits: [
                  'Extended Profile',
                  'Multiple Images',
                  'Multiple Links',
                  'Certificate of Nobility',
                  'Profile Stats',
                  'Poke Protection',
                ]
              },
              {
                name: 'Crab',
                amount: '$0+',
                icon: '🦀',
                color: 'bg-amber-600/20 border-amber-600/40 text-amber-500',
                benefits: [
                  'Basic Profile',
                  'Single Image',
                  'Single Link',
                  'Team Selection',
                  'Leaderboard Visibility',
                  'Event Participation',
                ]
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`glass-morphism rounded-lg p-6 border ${tier.color}`}>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{tier.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{tier.name} Tier</h3>
                      <p className="text-royal-gold">{tier.amount}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2" />
                        <span className="text-white/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <RoyalButton
                    variant={
                      index === 0 ? 'royalPurple' : 
                      index === 1 ? 'royalCrimson' : 
                      index === 2 ? 'royalNavy' : 
                      'glass'
                    }
                    shimmer={true}
                    className="w-full"
                    onClick={() => {
                      addToast({
                        title: `${tier.name} Tier`,
                        description: `Learn more about the ${tier.name} tier benefits in our royal documentation.`,
                        variant: "default",
                      });
                    }}
                  >
                    View Details
                  </RoyalButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RoyalSection>
      
      {/* Profile Customization */}
      <RoyalSection className="py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <MedievalIcon name="user" size="lg" color="gold" animate="glow" className="mb-4 mx-auto" />
            <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">
              Royal Profile Customization
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Make your profile stand out with exclusive customization options. The more you spend, the more unique your presence becomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-morphism rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <RoyalBadge variant="outlineSilver" className="mr-2">Free</RoyalBadge>
                Basic Profile
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-black/20 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 text-white/80">Profile Content</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-2" />
                      <span className="text-white/70">Basic text (200 characters max)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-2" />
                      <span className="text-white/70">One profile image (max 500KB)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-2" />
                      <span className="text-white/70">One social/web link</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-black/20 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 text-white/80">Visual Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-2" />
                      <span className="text-white/70">Basic profile card</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-2" />
                      <span className="text-white/70">Team badge</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-2" />
                      <span className="text-white/70">Rank display</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link to={user ? "/profile" : "/auth"}>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    {user ? "View Your Profile" : "Get Started"}
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="glass-morphism rounded-lg p-6 border border-royal-gold/30">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <RoyalBadge variant="gold" className="mr-2">Premium</RoyalBadge>
                Pro Profile
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-royal-gold/10 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 text-royal-gold">Premium Content</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Extended text (1000 characters)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Up to 5 images (max 2MB each)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Up to 5 social/web links</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Video embeds (YouTube, Vimeo)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-royal-gold/10 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 text-royal-gold">Premium Visual Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Animated RGB borders</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Custom background gradients</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Hover effects & animations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-2 mr-2" />
                      <span className="text-white/70">Click & view statistics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced">
                    <Crown className="h-4 w-4 mr-2" />
                    {user ? "Upgrade to Pro" : "Get Premium"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RoyalSection>
      
      <RoyalDivider variant="ornate" className="my-0" />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-royal-purple-dark/50 via-bg-dark to-royal-navy-dark/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(106,13,173,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(106,13,173,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }} />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MedievalIcon name="crown" size="lg" color="gold" animate="glow" className="mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-royal royal-gradient mb-6">
              Ready to Claim Your Royal Status?
            </h2>
            
            <p className="text-xl text-white/70 mb-10">
              Join SpendThrone today and begin your journey to the top of our satirical hierarchy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={user ? "/dashboard" : "/auth"}>
                <Button 
                  size="lg" 
                  className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced"
                >
                  <Crown className="h-5 w-5 mr-2" />
                  {user ? "Enter Your Royal Court" : "Claim Your Title"}
                </Button>
              </Link>
              
              <Link to="/leaderboard">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
                >
                  <Coins className="h-5 w-5 mr-2" />
                  View Current Hierarchy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
