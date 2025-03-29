import React from 'react';
import { 
  Trophy, 
  Crown, 
  Users, 
  Sparkles, 
  DollarSign, 
  BarChart, 
  MessageSquare, 
  Globe, 
  Image, 
  Link as LinkIcon, 
  Flame, 
  Shield,
  Eye,
  Paintbrush,
  Zap
} from 'lucide-react';

export interface FeatureExample {
  title: string;
  description: string;
  image?: string;
  link?: {
    url: string;
    label: string;
  };
}

export interface FeatureInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string | number;
  isFree?: boolean;
  category: string;
  examples?: FeatureExample[];
  benefits?: string[];
  details?: string;
  comingSoon?: boolean;
}

export const featuresData: FeatureInfo[] = [
  // Leaderboard Features
  {
    id: "dollar-driven-rank",
    title: "Dollar-Driven Rank",
    description: "Your position in the hierarchy is determined solely by your financial contributions",
    icon: <Trophy className="h-5 w-5 text-royal-gold" />,
    isFree: true,
    category: "Leaderboard",
    details: "The SpendThrone leaderboard is the core of our satirical social experiment. Every $1 deposited equals 1 point on the leaderboard. Your rank is calculated based on total deposits made, creating a transparent (if absurd) meritocracy based purely on spending.",
    benefits: [
      "Permanent recognition for your financial contributions",
      "Increased visibility across the platform as you rise in rank",
      "The satisfaction of literally buying status",
      "No skills or talents required - just a payment method"
    ],
    examples: [
      {
        title: "Overtaking Rivals",
        description: "If a user is ranked #3 with $100 in deposits, and #1 has $150, they need to deposit $51 more to claim the top spot.",
        image: "/throne-assets/leaderboard-example.jpg"
      },
      {
        title: "Team Contribution",
        description: "Individual deposits also contribute to team standings, creating a collective competitive element.",
        image: "/throne-assets/team-leaderboard.jpg"
      }
    ]
  },
  {
    id: "profile-visibility",
    title: "Enhanced Profile Visibility",
    description: "Higher ranked users receive more exposure across the platform",
    icon: <Globe className="h-5 w-5 text-royal-gold" />,
    isFree: true,
    category: "Leaderboard",
    details: "As you climb the ranks through deposits, your profile gains increasing visibility throughout SpendThrone. Top-ranked users appear more prominently in showcases, receive larger display elements, and enjoy automatic promotion of their profiles.",
    benefits: [
      "Top-ranked users appear in the royal showcase on the homepage",
      "Higher visibility in search results and browsing features",
      "Profile enhancement effects increase with rank",
      "Standing out from the crowd through financial might"
    ]
  },
  
  // Profile Features
  {
    id: "basic-profile",
    title: "Basic Profile Customization",
    description: "Express yourself with text, images and links",
    icon: <Users className="h-5 w-5 text-royal-purple" />,
    price: 1,
    category: "Profile",
    details: "Every noble who has deposited at least $1 receives a basic profile where they can showcase their digital identity. While modest compared to premium options, it provides essential functionality for establishing your presence in the realm.",
    benefits: [
      "200 character biography text",
      "One profile image (externally hosted)",
      "One external link",
      "Basic profile statistics"
    ]
  },
  {
    id: "premium-profile",
    title: "Premium Profile Enhancement",
    description: "Stand out with advanced customization options",
    icon: <Sparkles className="h-5 w-5 text-royal-gold" />,
    price: 25,
    category: "Profile",
    details: "Premium subscribers enjoy significantly enhanced profile capabilities, allowing for richer self-expression and promotional opportunities. Your profile transforms from a simple listing to an eye-catching digital billboard.",
    benefits: [
      "1000 character rich text biography with formatting",
      "Up to 5 image gallery (externally hosted)",
      "Up to 5 promotional links with tracking",
      "Animated RGB borders and effects",
      "Custom color schemes and themes",
      "Profile visit analytics and metrics"
    ],
    examples: [
      {
        title: "RGB Border Effects",
        description: "Customize eye-catching animated borders that make your profile pop with color and movement.",
        image: "/throne-assets/rgb-border-example.jpg"
      },
      {
        title: "Analytics Dashboard",
        description: "Track who visits your profile and which links they click for better promotional insights.",
        image: "/throne-assets/analytics-example.jpg"
      }
    ]
  },
  {
    id: "royal-profile",
    title: "Royal Profile Presence",
    description: "Command attention with the ultimate profile package",
    icon: <Crown className="h-5 w-5 text-royal-purple-light" />,
    price: 100,
    category: "Profile",
    details: "Royal profiles represent the pinnacle of digital opulence within SpendThrone. These profiles receive prime placement, maximum customization options, and special privileges that ensure maximum visibility and impact.",
    benefits: [
      "Unlimited biography length with advanced formatting",
      "Up to 10 image gallery with slideshow capability",
      "Up to 10 promotional links with priority placement",
      "Exclusive animated effects unavailable to lower tiers",
      "Featured placement across the platform",
      "Complete profile analytics with demographic data",
      "Royal certificate NFT minting capability"
    ]
  },
  
  // Visual Enhancement Features
  {
    id: "profile-visibility-boost",
    title: "Profile Visibility Boost",
    description: "Temporarily enhance your profile's visibility across the platform",
    icon: <Eye className="h-5 w-5 text-royal-gold" />,
    price: "Various",
    category: "Visual Enhancements",
    details: "Profile visibility boosts temporarily increase your profile's prominence across the platform without affecting your leaderboard ranking. These affordable enhancements make your profile more noticeable to other users for a limited time.",
    benefits: [
      "Featured placement in profile browsing sections",
      "Priority placement in search results",
      "Increased profile view statistics",
      "Enhanced visibility on team rosters",
      "Short-term visibility without long-term cost"
    ],
    examples: [
      {
        title: "Featured Profile",
        description: "Your profile appears in featured sections across the platform for 3 days.",
        image: "/throne-assets/boosts/featured-preview.jpg"
      },
      {
        title: "Priority Placement",
        description: "Your profile receives priority placement in search results and browsing for 7 days.",
        image: "/throne-assets/boosts/priority-preview.jpg"
      }
    ]
  },
  
  {
    id: "profile-appearance-boost",
    title: "Profile Appearance Boost",
    description: "Add visual flair to your profile and leaderboard entries",
    icon: <Paintbrush className="h-5 w-5 text-royal-gold" />,
    price: "Various",
    category: "Visual Enhancements",
    details: "Appearance boosts add visual elements to your profile and leaderboard entries to make them stand out from the crowd. These cosmetic enhancements are purely visual and don't affect your actual leaderboard position.",
    benefits: [
      "Eye-catching borders and frames around your content",
      "Distinctive visual elements for your leaderboard entry",
      "Customizable color accents and effects",
      "Affordable alternative to subscription tiers",
      "Mix and match different visual effects"
    ],
    examples: [
      {
        title: "Gold Border",
        description: "Adds a shimmering gold border to your profile and leaderboard entry for 7 days.",
        image: "/throne-assets/boosts/gold-border-preview.jpg"
      },
      {
        title: "Neon Glow",
        description: "Makes your profile glow with a vibrant neon effect for 7 days.",
        image: "/throne-assets/boosts/neon-glow-preview.jpg"
      }
    ]
  },
  
  {
    id: "profile-animation-boost",
    title: "Profile Animation Effects",
    description: "Add dynamic animated effects to your profile",
    icon: <Zap className="h-5 w-5 text-royal-gold" />,
    price: "Various",
    category: "Visual Enhancements",
    details: "Animation boosts add dynamic movement and effects to your profile, making it more engaging and memorable. These temporary enhancements catch the eye and create a premium feel without affecting your actual rank.",
    benefits: [
      "Dynamic animations that respond to user interaction",
      "Eye-catching movement to attract profile visitors",
      "Premium visual effects at an affordable price point",
      "Customizable intensity and style options",
      "Range from subtle to spectacular effects"
    ],
    examples: [
      {
        title: "Sparkle Effect",
        description: "Adds subtle sparkles that animate around your profile for 7 days.",
        image: "/throne-assets/boosts/sparkle-preview.jpg"
      },
      {
        title: "RGB Flow",
        description: "Flowing RGB color effects across your profile elements for 10 days.",
        image: "/throne-assets/boosts/rgb-flow-preview.jpg"
      }
    ]
  },
  
  {
    id: "profile-special-effects",
    title: "Special Profile Effects",
    description: "Add unique visual status symbols to your profile",
    icon: <Crown className="h-5 w-5 text-royal-gold" />,
    price: "Various",
    category: "Visual Enhancements",
    details: "Special effects add unique visual elements to your profile that signal status and prestige. These eye-catching additions create a memorable impression without affecting your actual leaderboard rank.",
    benefits: [
      "Distinctive symbols and iconography for your profile",
      "Special visual indicators beside your username",
      "Attention-grabbing effects for visitors",
      "Status symbols without long-term financial commitment",
      "Perfect for special occasions and celebrations"
    ],
    examples: [
      {
        title: "Crown Icon",
        description: "Displays a royal crown icon next to your name for 7 days.",
        image: "/throne-assets/boosts/crown-preview.jpg"
      },
      {
        title: "Profile Fireworks",
        description: "Occasional fireworks animation plays when users view your profile for 14 days.",
        image: "/throne-assets/boosts/fireworks-preview.jpg"
      }
    ]
  },
  
  // Team Features
  {
    id: "team-allegiance",
    title: "Team Allegiance",
    description: "Join one of three houses and contribute to collective glory",
    icon: <Shield className="h-5 w-5 text-royal-gold" />,
    isFree: true,
    category: "Teams",
    details: "Upon joining SpendThrone, all nobles must declare allegiance to one of three royal houses: Red (neon fire), Green (lime zap), or Blue (cool pulse). Your deposits contribute to both your personal rank and your team's collective standing.",
    benefits: [
      "Contribute to team rankings through your deposits",
      "Access team-specific chat channels and forums",
      "Participate in team tournaments and events",
      "Earn team-specific badges and recognition",
      "Special bonuses when your team holds the top position"
    ],
    examples: [
      {
        title: "Team Dashboard",
        description: "View your team's performance metrics, top contributors, and current standing.",
        image: "/throne-assets/team-dashboard.jpg"
      },
      {
        title: "Team Events",
        description: "Participate in special team-based spending challenges for collective rewards.",
        image: "/throne-assets/team-event.jpg"
      }
    ]
  },
  {
    id: "team-leadership",
    title: "Team Leadership",
    description: "Rise to a position of influence within your house",
    icon: <Users className="h-5 w-5 text-royal-gold" />,
    price: "Royal tier",
    category: "Teams",
    details: "Royal tier subscribers have the opportunity to become team leaders, gaining special privileges and responsibilities within their chosen house. Team leaders enjoy enhanced visibility and the ability to coordinate team activities.",
    benefits: [
      "Special leadership badge and profile indicators",
      "Ability to pin messages in team channels",
      "Organize and schedule team events",
      "Welcome messages for new team members",
      "Monthly leadership bonuses and recognition"
    ],
    comingSoon: true
  },
  
  // Marketing Features
  {
    id: "profile-analytics",
    title: "Profile Analytics",
    description: "Track the performance of your digital presence",
    icon: <BarChart className="h-5 w-5 text-royal-gold" />,
    price: "Premium tier",
    category: "Marketing",
    details: "Premium and Royal subscribers gain access to detailed analytics about their profile's performance. Monitor views, engagement, and conversion rates to optimize your digital presence and marketing efforts.",
    benefits: [
      "Track profile views and unique visitors",
      "Monitor link click-through rates",
      "View visitor demographics and interests",
      "Analyze visit duration and engagement metrics",
      "Export data for external analysis"
    ],
    examples: [
      {
        title: "Traffic Dashboard",
        description: "Visualize your profile's traffic patterns and engagement metrics over time.",
        image: "/throne-assets/analytics-dashboard.jpg"
      }
    ]
  },
  {
    id: "profile-boost",
    title: "Profile Boost",
    description: "Temporarily increase your profile's visibility",
    icon: <Flame className="h-5 w-5 text-royal-crimson" />,
    price: 15,
    category: "Marketing",
    details: "Purchase a profile boost to temporarily increase your profile's visibility across the platform. Your profile will appear in featured sections, search results, and recommendations for the duration of the boost.",
    benefits: [
      "3-day visibility boost across the platform",
      "Featured placement in the Royal Showcase",
      "Priority position in search results",
      "Notification to all followers about your activity",
      "Special visual indicators during boost period"
    ],
    comingSoon: true
  },
  {
    id: "external-promotion",
    title: "External Link Promotion",
    description: "Drive traffic to your external sites and social media",
    icon: <LinkIcon className="h-5 w-5 text-royal-gold" />,
    price: "Premium tier",
    category: "Marketing",
    details: "Transform your SpendThrone profile into a promotional hub by adding trackable external links. Drive traffic to your business, social media, or other projects while monitoring performance.",
    benefits: [
      "Add up to 5 external links (Premium) or 10 (Royal)",
      "Customizable link display and call-to-action text",
      "Click tracking and conversion analytics",
      "A/B testing capabilities for optimal performance",
      "Integration with major analytics platforms"
    ]
  },
  
  // Social Features
  {
    id: "mockery-system",
    title: "Royal Mockery",
    description: "Pay to apply visual effects to other users' profiles",
    icon: <Flame className="h-5 w-5 text-royal-crimson" />,
    price: "Various",
    category: "Social",
    details: "SpendThrone's unique mockery system allows you to spend wallet funds to apply humorous visual effects to other users' profiles. From digital tomatoes to virtual stocks, it's a satirical take on social media interactions.",
    benefits: [
      "Apply temporary visual effects to other profiles",
      "Multiple tiers of mockery with increasing visibility",
      "Notification system for mockery interactions",
      "Mockery history and statistics tracking",
      "Protection options available for premium users"
    ],
    examples: [
      {
        title: "Tomato Throwing",
        description: "The classic mockery option - splatter a user's profile with digital tomatoes for all to see.",
        image: "/throne-assets/tomato-mockery.jpg"
      },
      {
        title: "Royal Roast",
        description: "Premium mockery option that places animated flames around a user's profile picture.",
        image: "/throne-assets/royal-roast.jpg"
      }
    ]
  },
  {
    id: "profile-comments",
    title: "Profile Comments",
    description: "Enable interaction through public comments on your profile",
    icon: <MessageSquare className="h-5 w-5 text-royal-gold" />,
    price: "Premium tier",
    category: "Social",
    details: "Premium and Royal subscribers can enable a comments section on their profile, allowing other users to leave public messages. Moderate the conversation and engage with your admirers or rivals.",
    benefits: [
      "Public comment thread on your profile page",
      "Moderation controls for comment approval",
      "Rich text formatting for comments",
      "Notification system for new comments",
      "Comment analytics and engagement metrics"
    ],
    comingSoon: true
  },
  {
    id: "founders-pass",
    title: "Founder's Pass",
    description: "Exclusive benefits for early supporters",
    icon: <Crown className="h-5 w-5 text-royal-gold" />,
    price: 50,
    category: "Special",
    details: "The Founder's Pass is available exclusively to the first 100 users who deposit at least $50. This limited-time offer grants permanent special privileges and recognition as an early supporter of our satirical experiment.",
    benefits: [
      "Permanent 'Founder' badge on your profile",
      "Exclusive profile decorations and effects",
      "25% discount on all mockery actions",
      "Access to the private Founder's Chat channel",
      "One free immunity shield per month",
      "On-chain Founder's Certificate"
    ],
    examples: [
      {
        title: "Founder's Badge",
        description: "A distinctive badge that permanently marks your profile as one of our first 100 supporters.",
        image: "/throne-assets/founders-badge.jpg"
      }
    ]
  },
  {
    id: "nft-certificate",
    title: "Royal Certificate NFT",
    description: "On-chain proof of your conspicuous consumption",
    icon: <Sparkles className="h-5 w-5 text-royal-purple-light" />,
    price: "Royal tier",
    category: "Special",
    details: "Royal tier subscribers can mint official SpendThrone certificates as NFTs, providing permanent blockchain proof of their spending achievements and rank milestones. A perfect digital trophy for your portfolio.",
    benefits: [
      "Mint on-chain certificates of your spending milestones",
      "Customizable certificate design and content",
      "Transferable proof of your digital status",
      "Integration with major NFT marketplaces",
      "Special certificate designs for significant achievements"
    ],
    comingSoon: true
  }
];
