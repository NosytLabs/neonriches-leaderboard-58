
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import RoyalDivider from '@/components/ui/royal-divider';
import {
  Crown,
  Gem,
  Users,
  Shield,
  Trophy,
  Sparkles,
  Image,
  Link as LinkIcon,
  ExternalLink,
  Palette,
  Gauge,
  Check,
  AlertCircle,
  ChevronRight,
  Award,
  Star
} from 'lucide-react';

// Feature comparison data
const featureComparison = [
  {
    category: "Profile Customization",
    features: [
      { name: "Basic Profile Text", free: true, pro: true, founder: true },
      { name: "Profile Bio (200 chars)", free: true, pro: true, founder: true },
      { name: "Profile Bio (1000 chars)", free: false, pro: true, founder: true },
      { name: "Social Media Links (1)", free: true, pro: true, founder: true },
      { name: "Social Media Links (5)", free: false, pro: true, founder: true },
      { name: "External Image (1)", free: true, pro: true, founder: true },
      { name: "External Images (5)", free: false, pro: true, founder: true },
      { name: "Animated RGB Borders", free: false, pro: true, founder: true },
      { name: "Custom RGB Gradients", free: false, pro: true, founder: true },
      { name: "Video Embeds", free: false, pro: true, founder: true },
      { name: "Custom Hover Effects", free: false, pro: true, founder: true },
    ]
  },
  {
    category: "Analytics",
    features: [
      { name: "View Count", free: true, pro: true, founder: true },
      { name: "Link Click Tracking", free: false, pro: true, founder: true },
      { name: "Visitor Geography", free: false, pro: true, founder: true },
      { name: "Traffic Sources", free: false, pro: true, founder: true },
    ]
  },
  {
    category: "Promotion",
    features: [
      { name: "Homepage Showcase (Top Spender)", free: "If #1", pro: "If #1", founder: "If #1" },
      { name: "Certificate of Nobility", free: true, pro: true, founder: true },
      { name: "Priority in Leaderboard", free: false, pro: true, founder: true },
      { name: "Link Click Statistics", free: false, pro: true, founder: true },
    ]
  },
  {
    category: "Cosmetics & Badges",
    features: [
      { name: "Basic Team Badge", free: true, pro: true, founder: true },
      { name: "Spending Tier Badge", free: true, pro: true, founder: true },
      { name: "Animated Badges", free: false, pro: true, founder: true },
      { name: "Founders Badge", free: false, pro: false, founder: true },
      { name: "Custom Profile Themes", free: false, pro: true, founder: true },
    ]
  },
  {
    category: "Special Benefits",
    features: [
      { name: "Early Access to New Features", free: false, pro: false, founder: true },
      { name: "Recognition in Hall of Founders", free: false, pro: false, founder: true },
      { name: "Access to Founder-Only Events", free: false, pro: false, founder: true },
    ]
  }
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Basic profile customization",
    features: [
      "Basic profile text editing",
      "1 social media link",
      "1 external image (max 500KB)",
      "200 character bio",
      "View count statistics",
      "Certificate of Nobility"
    ],
    cta: "Get Started Free",
    link: "/auth",
    color: "blue"
  },
  {
    name: "Pro",
    price: "$25",
    description: "Enhanced customization and analytics",
    features: [
      "All Free features",
      "5 social media links with click tracking",
      "5 external images (max 2MB each)",
      "1000 character bio",
      "Animated RGB borders",
      "Custom gradients and hover effects",
      "Video embeds",
      "Advanced analytics"
    ],
    cta: "Upgrade to Pro",
    link: "/dashboard",
    color: "purple",
    highlighted: true
  },
  {
    name: "Founders Badge",
    price: "$100",
    description: "Exclusive permanent benefits",
    features: [
      "All Pro features",
      "Exclusive Founders Badge",
      "Permanent recognition",
      "Early access to new features",
      "Listed in Hall of Founders",
      "Access to Founders-only events",
      "Lifetime Pro benefits"
    ],
    cta: "Become a Founder",
    link: "/founder",
    color: "gold"
  }
];

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>SpendThrone Features | The Complete Overview</title>
        <meta 
          name="description" 
          content="Explore all features of SpendThrone, from basic profile customization to exclusive Founders perks. Learn about our profile advertising, tier benefits, and more."
        />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <Gem className="h-10 w-10 text-royal-gold mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold royal-gradient mb-4 font-royal">
              SpendThrone Features
            </h1>
            <p className="text-white/70 text-lg">
              A complete overview of all features, unlockables, and benefits available on SpendThrone.
              From basic profile customization to exclusive top-spender perks.
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-royal-gold/20">
                <Gem className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="tiers" className="data-[state=active]:bg-royal-gold/20">
                <Trophy className="h-4 w-4 mr-2" />
                Account Tiers
              </TabsTrigger>
              <TabsTrigger value="comparison" className="data-[state=active]:bg-royal-gold/20">
                <Check className="h-4 w-4 mr-2" />
                Feature Comparison
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Image className="h-5 w-5 mr-2 text-royal-gold" />
                      Profile Customization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Every SpendThrone user can customize their profile page. Think of it as your own personal web page
                      within the SpendThrone ecosystem - a billboard where you can showcase yourself or advertise anything you want.
                    </p>
                    
                    <div className="space-y-3 mt-4">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <h3 className="font-medium mb-1">Basic Features (All Users)</h3>
                        <ul className="space-y-1 text-sm text-white/70">
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-green-400" />
                            Basic profile text editing (200 characters)
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-green-400" />
                            One social media link
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-green-400" />
                            One external image (maximum 500KB)
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/5 p-3 rounded-lg">
                        <h3 className="font-medium mb-1">Pro Features</h3>
                        <ul className="space-y-1 text-sm text-white/70">
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                            Enhanced text editor (1000 characters)
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                            Up to 5 social media links with click tracking
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                            Up to 5 external images (maximum 2MB each)
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                            Animated RGB borders with customizable colors
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                            Video embeds (YouTube, Vimeo)
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                            Custom RGB gradients and hover effects
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                      Advertising & Promotion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Your profile page is essentially an advertisement. You can use it to promote your social media,
                      website, products, or simply build a digital persona. The more you spend, the more promotional
                      capabilities you unlock.
                    </p>
                    
                    <div className="space-y-3 mt-4">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <h3 className="font-medium mb-1">Top Spender Perks</h3>
                        <p className="text-sm text-white/70 mb-2">
                          The #1 ranked spender receives premium visibility on the SpendThrone homepage,
                          gaining maximum exposure for whatever they choose to promote.
                        </p>
                        <ul className="space-y-1 text-sm text-white/70">
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                            Featured on the homepage
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                            Promotional advertisement space
                          </li>
                          <li className="flex items-center">
                            <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                            Social media links showcased
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/5 p-3 rounded-lg">
                        <h3 className="font-medium mb-1">Certificate of Nobility</h3>
                        <p className="text-sm text-white/70 mb-2">
                          All users can generate a Certificate of Nobility showcasing their rank and spending achievements.
                          This shareable certificate can be posted on social media or your own website.
                        </p>
                        <div className="mt-2">
                          <Link to="/profile">
                            <Button size="sm" variant="outline" className="text-royal-gold border-royal-gold/30 hover:bg-royal-gold/10">
                              Generate Your Certificate
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-royal-gold" />
                      Teams & Competition
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Join one of three noble houses and contribute to your team's collective standing. Teams add an
                      extra dimension of competition and camaraderie to the SpendThrone experience.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center">
                        <Shield className="h-6 w-6 mx-auto mb-1 text-red-500" />
                        <h3 className="font-medium text-red-400">Red Team</h3>
                        <p className="text-xs text-white/70">House Crimson Dynasty</p>
                      </div>
                      
                      <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 text-center">
                        <Shield className="h-6 w-6 mx-auto mb-1 text-green-500" />
                        <h3 className="font-medium text-green-400">Green Team</h3>
                        <p className="text-xs text-white/70">Emerald Empire</p>
                      </div>
                      
                      <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 text-center">
                        <Shield className="h-6 w-6 mx-auto mb-1 text-blue-500" />
                        <h3 className="font-medium text-blue-400">Blue Team</h3>
                        <p className="text-xs text-white/70">Sapphire Sovereign</p>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <ul className="space-y-1 text-sm text-white/70">
                        <li className="flex items-start">
                          <Check className="h-3.5 w-3.5 mr-2 mt-0.5 text-royal-gold" />
                          Teams are ranked based on the collective spending of all members
                        </li>
                        <li className="flex items-start">
                          <Check className="h-3.5 w-3.5 mr-2 mt-0.5 text-royal-gold" />
                          Special team badges and cosmetic rewards for your profile
                        </li>
                        <li className="flex items-start">
                          <Check className="h-3.5 w-3.5 mr-2 mt-0.5 text-royal-gold" />
                          Team ranking displayed prominently on the leaderboard
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-royal-gold" />
                      Badges & Cosmetics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Unlock cosmetic enhancements that make your profile stand out. From team badges
                      to spending tier indicators, these visual elements showcase your status and achievements.
                    </p>
                    
                    <div className="space-y-3 mt-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="h-12 w-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-royal-gold to-amber-500 flex items-center justify-center">
                            <Star className="h-6 w-6 text-black" />
                          </div>
                          <h3 className="font-medium text-royal-gold text-sm">Pro Badge</h3>
                        </div>
                        
                        <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="h-12 w-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center animate-pulse-slow">
                            <Crown className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-medium text-purple-400 text-sm">Founders Badge</h3>
                        </div>
                        
                        <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="h-12 w-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                            <Shield className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-medium text-red-400 text-sm">Red Team</h3>
                        </div>
                        
                        <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="h-12 w-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Trophy className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-medium text-blue-400 text-sm">Top 10</h3>
                        </div>
                      </div>
                      
                      <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20">
                        <h3 className="font-medium mb-1 text-purple-400">Founders Badge</h3>
                        <p className="text-sm text-white/70">
                          The exclusive Founders Badge is a permanent mark of distinction that identifies you as an
                          early supporter. This limited-time offer includes all Pro features plus special benefits.
                        </p>
                        <div className="mt-2">
                          <Link to="/founder">
                            <Button size="sm" variant="outline" className="text-purple-400 border-purple-500/30 hover:bg-purple-500/10">
                              Learn More
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gauge className="h-5 w-5 mr-2 text-royal-gold" />
                    Analytics & Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Track the performance of your profile page with our analytics features. Basic analytics are
                    available to all users, while Pro and Founder accounts get access to comprehensive metrics.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center">
                        <Star className="h-4 w-4 mr-2 text-blue-400" />
                        Free Analytics
                      </h3>
                      <ul className="space-y-1 text-sm text-white/70">
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-blue-400" />
                          Profile view count
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-blue-400" />
                          Current rank tracking
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-blue-400" />
                          Basic team statistics
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="font-medium mb-2 flex items-center">
                        <Star className="h-4 w-4 mr-2 text-purple-400" />
                        Pro Analytics
                      </h3>
                      <ul className="space-y-1 text-sm text-white/70">
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                          All Free analytics
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                          Link click tracking
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                          Visitor geography
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                          Traffic sources
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-purple-400" />
                          Conversion statistics
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-royal-gold/10 p-4 rounded-lg border border-royal-gold/20">
                      <h3 className="font-medium mb-2 flex items-center">
                        <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                        Founder Analytics
                      </h3>
                      <ul className="space-y-1 text-sm text-white/70">
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                          All Pro analytics
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                          Advanced engagement metrics
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                          Historical data analysis
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                          Custom analytics dashboard
                        </li>
                        <li className="flex items-center">
                          <Check className="h-3.5 w-3.5 mr-2 text-royal-gold" />
                          Competitor comparison
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tiers" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tiers.map((tier, index) => (
                  <Card 
                    key={index} 
                    className={`glass-morphism ${
                      tier.highlighted 
                        ? 'border-purple-500/30 relative overflow-hidden' 
                        : tier.name === 'Founders Badge' 
                          ? 'border-royal-gold/30' 
                          : 'border-white/10'
                    }`}
                  >
                    {tier.highlighted && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-purple-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                          POPULAR
                        </div>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="text-center">
                        <CardTitle className={`text-xl font-bold ${
                          tier.name === 'Pro' 
                            ? 'text-purple-400' 
                            : tier.name === 'Founders Badge' 
                              ? 'royal-gradient' 
                              : ''
                        }`}>
                          {tier.name}
                        </CardTitle>
                        <div className="mt-2 font-bold text-3xl">
                          {tier.price}
                        </div>
                        <p className="text-sm text-white/60 mt-1">{tier.description}</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mt-4 mb-8">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className={`h-4 w-4 mr-2 mt-0.5 ${
                              tier.name === 'Pro' 
                                ? 'text-purple-400' 
                                : tier.name === 'Founders Badge' 
                                  ? 'text-royal-gold' 
                                  : 'text-blue-400'
                            }`} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to={tier.link}>
                        <Button 
                          className={`w-full ${
                            tier.name === 'Pro' 
                              ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                              : tier.name === 'Founders Badge' 
                                ? 'bg-royal-gold text-black hover:bg-royal-gold/90' 
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          {tier.name === 'Founders Badge' && <Crown className="h-4 w-4 mr-2" />}
                          {tier.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="glass-morphism border-white/10 mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-royal-gold" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-white/70">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                        <span>
                          <strong>This is satire:</strong> SpendThrone is a satirical social experiment. You are spending real money for purely cosmetic digital status.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                        <span>
                          <strong>No refunds:</strong> All transactions are final. There is no "real value" to what you're purchasing beyond the entertainment and social experiment.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                        <span>
                          <strong>Leaderboard ranking:</strong> Your rank is determined solely by how much you've spent. $1 = 1 unit of rank.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                        <span>
                          <strong>Limited time offers:</strong> The Founders Badge is a limited-time offer that may not be available in the future.
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="comparison" className="space-y-8">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Complete Feature Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4">Feature</th>
                          <th className="text-center py-3 px-4">Free</th>
                          <th className="text-center py-3 px-4 bg-purple-950/30">Pro</th>
                          <th className="text-center py-3 px-4 bg-royal-gold/10">Founders</th>
                        </tr>
                      </thead>
                      <tbody>
                        {featureComparison.map((category, categoryIndex) => (
                          <React.Fragment key={categoryIndex}>
                            <tr className="bg-white/5">
                              <td 
                                colSpan={4} 
                                className="py-2 px-4 font-medium"
                              >
                                {category.category}
                              </td>
                            </tr>
                            {category.features.map((feature, featureIndex) => (
                              <tr 
                                key={`${categoryIndex}-${featureIndex}`}
                                className={featureIndex % 2 === 0 ? "bg-transparent" : "bg-white/5"}
                              >
                                <td className="py-2 px-4 text-sm">{feature.name}</td>
                                <td className="py-2 px-4 text-center">
                                  {feature.free === true ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                  ) : feature.free === false ? (
                                    <AlertCircle className="h-5 w-5 text-red-500/50 mx-auto" />
                                  ) : (
                                    <span className="text-xs text-white/70">{feature.free}</span>
                                  )}
                                </td>
                                <td className="py-2 px-4 text-center bg-purple-950/30">
                                  {feature.pro === true ? (
                                    <Check className="h-5 w-5 text-purple-400 mx-auto" />
                                  ) : feature.pro === false ? (
                                    <AlertCircle className="h-5 w-5 text-red-500/50 mx-auto" />
                                  ) : (
                                    <span className="text-xs text-white/70">{feature.pro}</span>
                                  )}
                                </td>
                                <td className="py-2 px-4 text-center bg-royal-gold/10">
                                  {feature.founder === true ? (
                                    <Check className="h-5 w-5 text-royal-gold mx-auto" />
                                  ) : feature.founder === false ? (
                                    <AlertCircle className="h-5 w-5 text-red-500/50 mx-auto" />
                                  ) : (
                                    <span className="text-xs text-white/70">{feature.founder}</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <p className="text-white/60 mb-4">
                  Ready to enhance your digital nobility experience?
                </p>
                <div className="space-x-4">
                  <Link to="/dashboard">
                    <Button 
                      variant="default" 
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Upgrade to Pro
                    </Button>
                  </Link>
                  <Link to="/founder">
                    <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                      <Crown className="h-4 w-4 mr-2" />
                      Become a Founder
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <RoyalDivider variant="ornate" className="my-12" />
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold royal-gradient mb-4 font-royal">Ready to Join the Nobility?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Start your journey in our satirical social experiment. Spend real money for fake status,
              customize your profile, and climb the ranks of our meaningless digital hierarchy.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/leaderboard">
                <Button className="bg-white/10 hover:bg-white/20 transition-colors">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Leaderboard
                </Button>
              </Link>
              
              <Link to="/auth">
                <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                  <Crown className="h-4 w-4 mr-2" />
                  Create Your Noble Account
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
