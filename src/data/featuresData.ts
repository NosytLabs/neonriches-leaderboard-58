
import { Feature } from "@/types/features";
import { Crown, Gem, Trophy, DollarSign, Shield, Target, Sparkles, Users, Eye, Zap, MessageSquare, Palette, ThumbsUp, Coins, BarChart, PiggyBank } from "lucide-react";

export const featuresData: Feature[] = [
  {
    id: "leaderboard",
    title: "Dollar-Driven Rank",
    description: "Our persistent leaderboard ranks users based solely on how much they've spent. $1 equals 1 unit of rank, creating a transparent hierarchy of expenditure.",
    icon: Trophy,
    color: "text-royal-gold",
    bgColor: "bg-royal-gold/10",
    details: [
      "Real-time updates reflect spending instantly",
      "Historical tracking of spending patterns",
      "Weekly, monthly, and all-time rankings",
      "Special visual indicators for top spenders",
      "Spotlight features for milestone achievements"
    ]
  },
  {
    id: "profiles",
    title: "Editable Profiles",
    description: "Customize your digital presence with our tiered profile system. More spending unlocks more customization options.",
    icon: Gem,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    details: [
      "Free Tier: Basic text and one image",
      "Pro Tier: Rich media support and animations",
      "Analytics dashboard for profile visitors",
      "Custom color schemes and themes",
      "Animated backgrounds and profile frames"
    ]
  },
  {
    id: "teams",
    title: "RGB Teams",
    description: "Join one of three competing factions—Red, Green, or Blue—and contribute to your team's collective standing.",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    details: [
      "Team leaderboards and statistics",
      "Team-exclusive chat channels",
      "Weekly team challenges and rewards",
      "Team-specific visual enhancements",
      "Strategic team spending initiatives"
    ]
  },
  {
    id: "animations",
    title: "Web3 Animations",
    description: "Experience cutting-edge visual effects with our blockchain-inspired animation system that reacts to your spending and status.",
    icon: Sparkles,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    details: [
      "Reactive animations tied to spending milestones",
      "Procedurally generated visual effects",
      "Profile-specific particle systems",
      "Animated transitions between site sections",
      "Status-based ambient animations"
    ]
  },
  {
    id: "analytics",
    title: "Traffic Analytics",
    description: "Track your profile's popularity and influence with detailed analytics about views, interactions, and more.",
    icon: BarChart,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    details: [
      "Profile view tracking and analysis",
      "Click-through rates on profile links",
      "Visitor demographic data (for paid tiers)",
      "Engagement metrics and trends",
      "Comparative analysis with similar profiles"
    ]
  },
  {
    id: "wallet",
    title: "Wallet Integration",
    description: "Connect your crypto wallet for seamless transactions and to display your Web3 credentials as part of your status.",
    icon: Coins,
    color: "text-royal-gold",
    bgColor: "bg-royal-gold/10",
    details: [
      "Solana wallet integration for payments",
      "NFT display capabilities",
      "Transaction history and records",
      "Secure payment processing",
      "Web3 authentication options"
    ]
  },
  {
    id: "payments",
    title: "Fiat Integration",
    description: "Use traditional payment methods to fuel your rise through the ranks with our secure, streamlined payment system.",
    icon: DollarSign,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    details: [
      "Multiple currency support",
      "Credit/debit card processing",
      "Subscription payment options",
      "Payment history and receipts",
      "Automated recurring contributions"
    ]
  },
  {
    id: "tone",
    title: "Satirical Tone",
    description: "Enjoy our platform's self-aware humor that pokes fun at the very concept of paying for digital status and recognition.",
    icon: ThumbsUp,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    details: [
      "Tongue-in-cheek notifications and alerts",
      "Humorous achievement badges",
      "Satirical 'royal decrees' and announcements",
      "Comedic user tutorials and guides",
      "Self-deprecating platform messaging"
    ]
  },
  {
    id: "design",
    title: "Modern Design",
    description: "Experience our visually striking design that combines neon aesthetics, dark themes, and luxury-inspired elements.",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    details: [
      "Responsive layouts for all devices",
      "Accessibility-conscious design choices",
      "Dynamic themes based on spending level",
      "Motion design and micro-interactions",
      "Premium visual language throughout"
    ]
  },
  {
    id: "mockery",
    title: "Mockery System",
    description: "Purchase the ability to publicly shame lower-ranked users with visual effects, creating a digital hierarchy of humiliation.",
    icon: Target,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    details: [
      "Multiple mockery action types (tomatoes, eggs, etc.)",
      "Tiered mockery effects based on spending",
      "Temporary profile disfigurements",
      "Protection purchases to remove effects",
      "Public mockery leaderboard and history"
    ]
  },
  {
    id: "visibility",
    title: "Profile Visibility",
    description: "Enhance your profile's reach and impact with paid visibility boosts that ensure more users see your digital presence.",
    icon: Eye,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    details: [
      "Featured profile placements",
      "Enhanced search result positioning",
      "Notification boosts to other users",
      "Increased visibility in team sections",
      "Special indicators for boosted profiles"
    ]
  },
  {
    id: "boosting",
    title: "Profile Boosting",
    description: "Purchase temporary enhancements that make your profile more visually impressive and noticeable across the platform.",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    details: [
      "Visual effect enhancements",
      "Special profile borders and backgrounds",
      "Animated elements and transitions",
      "Custom badges and indicators",
      "Time-limited exclusive features"
    ]
  },
  {
    id: "community",
    title: "Team Challenges",
    description: "Participate in team-based spending challenges that pit the three factions against each other in themed competitions.",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    details: [
      "Weekly rotating challenge themes",
      "Team-based rewards and recognition",
      "Challenge leaderboards and statistics",
      "Strategic spending opportunities",
      "Exclusive challenge-specific features"
    ]
  },
  {
    id: "financial",
    title: "Spending Analytics",
    description: "Track and analyze your spending patterns with detailed breakdowns of how you're converting real money into digital status.",
    icon: PiggyBank,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    details: [
      "Spending category breakdowns",
      "Historical spending patterns",
      "Comparative spending analysis",
      "ROI metrics for profile enhancements",
      "Projection tools for status goals"
    ]
  },
  {
    id: "social",
    title: "Status Chat",
    description: "Communicate with other users in our tiered chat system where message visibility and features are determined by rank.",
    icon: MessageSquare,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    details: [
      "Rank-based chat privileges",
      "Premium formatting options for higher ranks",
      "Private channels for elite spenders",
      "Enhanced message visibility for top users",
      "Special communication tools and emotes"
    ]
  },
  {
    id: "royal",
    title: "Royal Treatment",
    description: "Experience the ultimate in digital extravagance with our top-tier benefits package for the highest spenders.",
    icon: Crown,
    color: "text-royal-gold",
    bgColor: "bg-royal-gold/10",
    details: [
      "Exclusive visual indicators",
      "Priority customer support",
      "Early access to new features",
      "Custom profile development options",
      "Special recognition throughout platform"
    ]
  }
];
