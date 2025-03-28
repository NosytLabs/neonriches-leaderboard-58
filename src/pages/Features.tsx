
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
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import { motion } from 'framer-motion';
import { toBooleanSafe } from '@/utils/userAdapter';
import BrandIcon from '@/components/ui/brand-icon';
import FeatureShowcase, { FeatureInfo } from '@/components/ui/feature-showcase';
import TeamChat from '@/components/chat/TeamChat';
import KingmakerFeature from '@/components/kingmaker/KingmakerFeature';
import RoyalCouncilForums from '@/components/council/RoyalCouncilForums';

const Features = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  
  // Core features data for the showcase
  const coreFeatures: FeatureInfo[] = [
    {
      id: 'dollar-rank',
      title: 'Dollar-Driven Rank',
      description: 'Your rank is determined solely by how much you spend. $1 = 1 unit of rank. The more you spend, the higher you climb.',
      icon: <Coins className="h-5 w-5 text-royal-gold" />,
      isFree: true,
      category: 'Core Features',
      benefits: [
        'Direct correlation between spending and rank',
        'Real-time leaderboard updates',
        'Permanent ranking that never resets',
        'Detailed spending history and statistics'
      ],
      details: 'The fundamental principle of SpendThrone is simple yet powerful: every dollar you spend translates directly to one unit of rank. This creates a transparent and straightforward path to status - the more you contribute, the higher your position in our satirical hierarchy.',
      examples: [
        {
          title: 'Leaderboard Ranking',
          description: 'Watch your position rise in real-time as you spend more.',
          image: '/images/features/leaderboard-example.jpg',
        },
        {
          title: 'Spending Analytics',
          description: 'Track your spending history and see how it affects your rank over time.',
          image: '/images/features/analytics-example.jpg',
        }
      ]
    },
    {
      id: 'team-competition',
      title: 'Team Competition',
      description: 'Join one of three royal houses and contribute to your team\'s collective standing.',
      icon: <Users className="h-5 w-5 text-royal-gold" />,
      isFree: true,
      category: 'Core Features',
      benefits: [
        'Join Red, Green, or Blue teams',
        'Team-based leaderboards',
        'Weekly team challenges and rewards',
        'Team-exclusive chat channels'
      ],
      details: 'Foster camaraderie and friendly competition by joining one of three noble houses. Your spending contributes not only to your individual rank but also to your team\'s collective standing. Coordinate with teammates to dominate the weekly challenges and earn bonus rewards.',
      examples: [
        {
          title: 'Team Leaderboards',
          description: 'See which team is leading in total contributions.',
          image: '/images/features/team-leaderboard-example.jpg',
        },
        {
          title: 'Team Chat',
          description: 'Coordinate with your teammates in exclusive team chat channels.',
          image: '/images/features/team-chat-example.jpg',
        }
      ]
    },
    {
      id: 'royal-mockery',
      title: 'Royal Mockery',
      description: 'Spend to mock other users with visual effects that appear on their profiles.',
      icon: <Flame className="h-5 w-5 text-royal-gold" />,
      price: 0.50,
      category: 'Premium Features',
      benefits: [
        'Multiple mockery types with different visual effects',
        'Temporary profile modifications for targets',
        'Weekly featured mockery actions at discount prices',
        'Protection options to shield yourself from mockery'
      ],
      details: 'Add a playful element of competition by spending to temporarily modify other users\' profiles. From rotten tomatoes to court jester effects, mockery allows you to leave your mark on others while contributing to your rank.',
      examples: [
        {
          title: 'Rotten Tomatoes',
          description: 'Cover a user\'s profile with splattered tomatoes for 24 hours.',
          image: '/images/features/tomatoes-example.jpg',
        },
        {
          title: 'Court Jester',
          description: 'Make a user wear a jester outfit on their profile for 72 hours.',
          image: '/images/features/jester-example.jpg',
        }
      ]
    },
    {
      id: 'kingmaker',
      title: 'Kingmaker Feature',
      description: 'Top spenders can highlight other profiles they deem worthy of attention with special visual effects.',
      icon: <Crown className="h-5 w-5 text-royal-gold" />,
      price: 'Top 3 Rank',
      category: 'Premium Features',
      benefits: [
        'Ability to highlight deserving users',
        'Apply special visual effects to profiles',
        'Add customized messages of recommendation',
        'Boost visibility of chosen profiles'
      ],
      details: 'The top 3 spenders earn the prestigious ability to elevate others through the Kingmaker feature. This unique form of patronage allows you to highlight deserving users with special visual effects and custom messages, giving them increased visibility and prestige.',
      examples: [
        {
          title: 'Profile Spotlight',
          description: 'Profiles you highlight receive a golden aura and featured placement.',
          image: '/images/features/kingmaker-example.jpg',
        },
        {
          title: 'Kingmaker Badge',
          description: 'Users you select receive a special "Chosen One" badge on their profile.',
          image: '/images/features/kingmaker-badge-example.jpg',
        }
      ]
    },
    {
      id: 'certificates',
      title: 'Certificate of Nobility',
      description: 'Generate a personalized certificate showing your rank and status for social sharing.',
      icon: <Scroll className="h-5 w-5 text-royal-gold" />,
      price: 25,
      category: 'Premium Features',
      benefits: [
        'Personalized ornate certificates',
        'Digital downloads in multiple formats',
        'Social media integration for easy sharing',
        'Certificate gallery on your profile'
      ],
      details: 'Commemorate your spending milestones with beautifully designed certificates of nobility. These personalized documents showcase your rank, spending achievements, and status within our satirical hierarchy - perfect for sharing on social media.',
      examples: [
        {
          title: 'Noble Certificate',
          description: 'A beautifully designed certificate showing your rank and achievements.',
          image: '/images/features/certificate-example.jpg',
        },
        {
          title: 'Social Sharing',
          description: 'Share your certificate on social media to showcase your status.',
          image: '/images/features/certificate-share-example.jpg',
        }
      ]
    },
    {
      id: 'tier-badges',
      title: 'Tier Badges',
      description: 'Unlock exclusive badges that showcase your spending tier to all other users.',
      icon: <Shield className="h-5 w-5 text-royal-gold" />,
      price: '$50+',
      category: 'Premium Features',
      benefits: [
        'Automatic tier upgrades based on spending',
        'Unique badge designs for each tier',
        'Display badges on profile and in comments',
        'Badge collection showcase'
      ],
      details: 'As you reach different spending thresholds, you\'ll automatically unlock prestigious tier badges that visually communicate your status. From Crab to Whale tier, these badges are displayed prominently on your profile and next to your name throughout the platform.',
      examples: [
        {
          title: 'Tier Progression',
          description: 'View the complete tier ladder and track your progress toward the next level.',
          image: '/images/features/tier-progression-example.jpg',
        },
        {
          title: 'Badge Display',
          description: 'Your current tier badge appears next to your name throughout the platform.',
          image: '/images/features/badge-display-example.jpg',
        }
      ]
    }
  ];
  
  // Profile customization features
  const profileFeatures: FeatureInfo[] = [
    {
      id: 'animated-borders',
      title: 'Animated Borders',
      description: 'Add eye-catching animated RGB borders to your profile with customizable colors.',
      icon: <Palette className="h-5 w-5 text-royal-gold" />,
      price: 25,
      category: 'Profile Features',
      benefits: [
        'Multiple border animation styles',
        'Customizable colors and speed',
        'RGB color cycling options',
        'Exclusive premium border designs'
      ],
      details: 'Make your profile stand out with dynamic, eye-catching borders that pulse, glow, and shimmer. Choose from a variety of animation styles and customize colors to match your personal aesthetic.',
      examples: [
        {
          title: 'Rainbow Flow Border',
          description: 'A smoothly animated border that cycles through the color spectrum.',
          image: '/images/features/animated-border1-example.jpg',
        },
        {
          title: 'Golden Pulse Border',
          description: 'A premium border with pulsing golden effects and particle animations.',
          image: '/images/features/animated-border2-example.jpg',
        }
      ]
    },
    {
      id: 'extended-profile',
      title: 'Extended Profile',
      description: 'More text space, up to 5 images, and 5 links for enhanced presentation.',
      icon: <Image className="h-5 w-5 text-royal-gold" />,
      price: 25,
      category: 'Profile Features',
      benefits: [
        'Expanded character limit (1000 vs 200)',
        'Multiple image uploads (up to 5)',
        'Multiple link placements (up to 5)',
        'Rich text formatting options'
      ],
      details: 'Break free from the basic profile limitations with our extended profile options. Showcase more of your personality with additional text space, multiple images, and links to your external content or social media profiles.',
      examples: [
        {
          title: 'Image Gallery',
          description: 'Display multiple images in an interactive gallery on your profile.',
          image: '/images/features/gallery-example.jpg',
        },
        {
          title: 'Rich Text Formatting',
          description: 'Use formatting options like bold, italic, and headings in your bio.',
          image: '/images/features/rich-text-example.jpg',
        }
      ]
    },
    {
      id: 'custom-gradients',
      title: 'Custom Gradients',
      description: 'Design your own gradient backgrounds and text effects.',
      icon: <Sparkles className="h-5 w-5 text-royal-gold" />,
      price: 50,
      category: 'Profile Features',
      benefits: [
        'Custom background gradient generator',
        'Text gradient effects',
        'Animated gradient options',
        'Save multiple gradient presets'
      ],
      details: 'Create stunning visual effects with custom gradient backgrounds and text. Our gradient editor gives you complete control over colors, direction, and animation to create a truly unique profile aesthetic.',
      examples: [
        {
          title: 'Background Gradients',
          description: 'Apply custom color gradients to your profile background.',
          image: '/images/features/background-gradient-example.jpg',
        },
        {
          title: 'Text Gradient Effects',
          description: 'Add eye-catching gradient effects to your display name and headings.',
          image: '/images/features/text-gradient-example.jpg',
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Click Analytics',
      description: 'Track profile visits and link clicks with detailed statistics.',
      icon: <Rocket className="h-5 w-5 text-royal-gold" />,
      price: 100,
      category: 'Profile Features',
      benefits: [
        'Detailed visit statistics',
        'Link click tracking',
        'Visitor geographic data',
        'Interactive analytics dashboard'
      ],
      details: 'Gain valuable insights into your profile\'s performance with comprehensive analytics. Track visits, monitor which links receive the most engagement, and understand your audience better with geographic and temporal data.',
      examples: [
        {
          title: 'Profile Analytics Dashboard',
          description: 'View comprehensive statistics about your profile\'s performance.',
          image: '/images/features/analytics-dashboard-example.jpg',
        },
        {
          title: 'Link Performance',
          description: 'Track which of your profile links receive the most clicks.',
          image: '/images/features/link-analytics-example.jpg',
        }
      ]
    }
  ];
  
  // Events features
  const eventFeatures: FeatureInfo[] = [
    {
      id: 'poke-party',
      title: 'Poke Party',
      description: 'Pay to drop another user down one rank for 24 hours.',
      icon: <Swords className="h-5 w-5 text-royal-gold" />,
      price: 0.50,
      category: 'Event Features',
      benefits: [
        'Temporarily affect other users\' rankings',
        'Strategic competitive gameplay',
        'Protection options available',
        'Weekly poke party events with special rules'
      ],
      details: 'Add an element of strategic competition with Poke Party events. For a small fee, you can temporarily drop another user down in rank for 24 hours - unless they\'ve purchased protection, of course!',
      examples: [
        {
          title: 'Poke Party Interface',
          description: 'Select users to poke and watch their rank temporarily change.',
          image: '/images/features/poke-party-example.jpg',
        },
        {
          title: 'Protection Shield',
          description: 'Purchase protection to shield yourself from being poked during events.',
          image: '/images/features/protection-example.jpg',
        }
      ]
    },
    {
      id: 'team-tournaments',
      title: 'Team Tournaments',
      description: 'Weekly competitions between the three houses with bonus rewards.',
      icon: <Calendar className="h-5 w-5 text-royal-gold" />,
      isFree: true,
      category: 'Event Features',
      benefits: [
        'Weekly changing challenges',
        'Team-based bonus rewards',
        'Leaderboard for tournament results',
        'Special cosmetic prizes for winning teams'
      ],
      details: 'Participate in weekly team tournaments that pit the three houses against each other in various challenges. Coordinate with your teammates to achieve victory and earn exclusive rewards for your entire team.',
      examples: [
        {
          title: 'Tournament Challenge',
          description: 'Each week features a different team challenge with unique objectives.',
          image: '/images/features/tournament-example.jpg',
        },
        {
          title: 'Team Rewards',
          description: 'Winning teams receive exclusive cosmetics and bonuses.',
          image: '/images/features/team-rewards-example.jpg',
        }
      ]
    },
    {
      id: 'affluent-assembly',
      title: 'Affluent Assembly',
      description: 'A prize pool rewarding consistent spending and top-tier whale activity.',
      icon: <Gem className="h-5 w-5 text-royal-gold" />,
      isFree: true,
      category: 'Event Features',
      benefits: [
        'Automatic prize pool contributions',
        'Rewards for both consistency and high spending',
        'Multiple distribution tiers',
        'Weekly prize allocation'
      ],
      details: 'The Affluent Assembly is our satirical take on wealth distribution. A portion of each transaction goes into the prize pool, which is then distributed to reward both consistent spenders and top whales in a weekly ceremony.',
      examples: [
        {
          title: 'Prize Pool Distribution',
          description: 'View the current prize pool and distribution mechanics.',
          image: '/images/features/prize-pool-example.jpg',
        },
        {
          title: 'Winner Ceremony',
          description: 'Weekly ceremonies announce winners and distribute rewards.',
          image: '/images/features/winner-ceremony-example.jpg',
        }
      ]
    },
    {
      id: 'royal-decrees',
      title: 'Royal Decrees',
      description: 'Special limited-time offers and unique profile enhancements.',
      icon: <Scroll className="h-5 w-5 text-royal-gold" />,
      price: 'Varies',
      category: 'Event Features',
      benefits: [
        'Limited-time exclusive offers',
        'Surprise special events',
        'Unique cosmetic opportunities',
        'Early access to new features'
      ],
      details: 'Royal Decrees are surprise announcements that offer limited-time opportunities, special discounts, or exclusive features. Keep an eye on these announcements to take advantage of unique offers before they disappear!',
      examples: [
        {
          title: 'Special Offer Decree',
          description: 'Limited-time discounts on premium features through Royal Decrees.',
          image: '/images/features/decree-example.jpg',
        },
        {
          title: 'Exclusive Event Announcement',
          description: 'Royal Decrees often announce special limited-time events.',
          image: '/images/features/event-decree-example.jpg',
        }
      ]
    }
  ];
  
  // Social features
  const socialFeatures: FeatureInfo[] = [
    {
      id: 'whale-chat',
      title: 'Whale Chat',
      description: 'Exclusive chat room for the top 50 spenders to network and conspire.',
      icon: <MessageSquare className="h-5 w-5 text-royal-gold" />,
      price: 'Top 50 Rank',
      category: 'Social Features',
      benefits: [
        'Exclusive access based on leaderboard position',
        'Network with other top spenders',
        'Advanced chat features',
        'Direct messaging capabilities'
      ],
      details: 'Achieve a position in the top 50 of the leaderboard to gain access to the exclusive Whale Chat. This private chat room allows the platform\'s most generous contributors to network, coordinate, and enjoy enhanced communication features.',
      examples: [
        {
          title: 'Whale Chat Interface',
          description: 'The exclusive chat room only accessible to top 50 spenders.',
          image: '/images/features/whale-chat-example.jpg',
        },
        {
          title: 'Direct Messaging',
          description: 'Whale Chat includes private messaging capabilities between top users.',
          image: '/images/features/direct-message-example.jpg',
        }
      ]
    },
    {
      id: 'team-chat',
      title: 'Team Chat',
      description: 'Coordinate with your fellow team members in dedicated team chat channels.',
      icon: <Users className="h-5 w-5 text-royal-gold" />,
      isFree: true,
      category: 'Social Features',
      benefits: [
        'Real-time team communication',
        'Strategy coordination for team events',
        'Team announcements and updates',
        'Member directory'
      ],
      details: 'Connect with your teammates in real-time through dedicated team chat channels. Coordinate strategies for team events, share tips, and build camaraderie with fellow members of your house.',
      examples: [
        {
          title: 'Team Chat Channels',
          description: 'Each team has a dedicated chat channel for coordination.',
          image: '/images/features/team-chat-channels-example.jpg',
        },
        {
          title: 'Strategy Planning',
          description: 'Use team chat to plan coordinated spending for maximum impact.',
          image: '/images/features/strategy-chat-example.jpg',
        }
      ]
    },
    {
      id: 'royal-council',
      title: 'Royal Council',
      description: 'Forums for discussing platform features and future developments.',
      icon: <Scroll className="h-5 w-5 text-royal-gold" />,
      isFree: true,
      category: 'Social Features',
      benefits: [
        'Discussion forums for all users',
        'Feature suggestion platform',
        'Developer announcements',
        'Community voting on proposals'
      ],
      details: 'Participate in the Royal Council forums to discuss platform features, suggest improvements, and stay informed about upcoming developments. This community space allows all users to have a voice in shaping the future of the platform.',
      examples: [
        {
          title: 'Feature Discussion',
          description: 'Dedicated forum sections for discussing existing and proposed features.',
          image: '/images/features/forum-example.jpg',
        },
        {
          title: 'Suggestion Voting',
          description: 'Vote on community suggestions to help prioritize development.',
          image: '/images/features/voting-example.jpg',
        }
      ]
    }
  ];
  
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
        <div className="flex flex-col items-center">
          <BrandIcon size="lg" animated={true} className="mb-6" />
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mt-4">
            <RoyalBadge variant="outlineGold" size="md">Dollar-Driven Rank</RoyalBadge>
            <RoyalBadge variant="outlineGold" size="md">Profile Customization</RoyalBadge>
            <RoyalBadge variant="outlineGold" size="md">Royal Mockery</RoyalBadge>
            <RoyalBadge variant="outlineGold" size="md">Team Competition</RoyalBadge>
            <RoyalBadge variant="outlineGold" size="md">Exclusive Events</RoyalBadge>
          </div>
        </div>
      </HeroSection>
      
      <RoyalSection title="Feature Categories" className="py-16">
        <FeatureShowcase 
          features={[...coreFeatures, ...profileFeatures, ...eventFeatures, ...socialFeatures]}
          defaultCategory="Core Features"
        />
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
                    glow={true}
                    className="w-full"
                    onClick={() => {
                      toast({
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
      
      {/* Team Chat Demo */}
      <RoyalSection className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MedievalIcon name="message" size="lg" color="gold" animate="glow" className="mb-4 mx-auto" />
            <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">
              Team Communication
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Connect with your teammates, coordinate strategies, and access exclusive channels based on your rank.
            </p>
          </div>
          
          <TeamChat user={user} />
        </div>
      </RoyalSection>
      
      {/* Kingmaker Feature */}
      <RoyalSection className="py-16 bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MedievalIcon name="crown" size="lg" color="gold" animate="pulse" className="mb-4 mx-auto" />
            <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">
              Royal Kingmaker
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The top 3 spenders earn the prestigious ability to elevate others through special highlights and visual effects.
            </p>
          </div>
          
          <KingmakerFeature user={user} />
        </div>
      </RoyalSection>
      
      {/* Royal Council */}
      <RoyalSection className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MedievalIcon name="scroll" size="lg" color="gold" animate="glow" className="mb-4 mx-auto" />
            <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">
              Royal Council Forums
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join the discussion, suggest features, and coordinate with your team in our community forums.
            </p>
          </div>
          
          <RoyalCouncilForums user={user} />
        </div>
      </RoyalSection>
      
      {/* Profile Customization */}
      <RoyalSection className="py-16 bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
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
            <BrandIcon size="lg" animated={true} className="mx-auto mb-6" />
            
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
