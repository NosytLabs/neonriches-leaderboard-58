import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Crown, 
  Users, 
  Scroll, 
  Info, 
  BookOpen, 
  Code, 
  Coffee, 
  Sparkles, 
  Download,
  ArrowRight,
  Share2,
  DollarSign,
  Trophy,
  Gem,
  Heart
} from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';
import TeamSection from '@/components/TeamSection';
import CertificateOfNobility from '@/components/certificates/CertificateOfNobility';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToastContext } from '@/contexts/ToastContext';
import { UserProfile } from '@/types/user';
import { Link } from 'react-router-dom';

const mockFounder: UserProfile = {
  id: 'founder',
  username: 'RoyalFounder',
  displayName: 'Sir Spends-A-Lot',
  profileImage: 'https://source.unsplash.com/random/300x300?portrait&royal',
  email: 'founder@spendthrone.com',
  amountSpent: 50000,
  spentAmount: 50000,
  walletBalance: 5000,
  rank: 0,
  tier: 'founder',
  team: 'all',
  joinDate: '2023-01-01T00:00:00Z',
  bio: 'Creating a platform where money literally buys you power was my lifelong dream. Now you too can experience the thrill of spending real money for completely meaningless digital prestige!',
  gender: 'king',
  socialLinks: undefined,
  createdAt: '2023-01-01T00:00:00Z'
};

const About = () => {
  const [certificateVisible, setCertificateVisible] = useState(false);
  const { playSound } = useNotificationSounds();
  const { addToast } = useToastContext();
  
  // Demo user for certificate
  const demoUser: UserProfile = {
    id: '1',
    username: 'LordMoneybags',
    displayName: 'Lord Moneybags',
    profileImage: 'https://source.unsplash.com/random/?royal,portrait',
    email: 'noble@example.com',
    amountSpent: 5000,
    spentAmount: 5000,
    walletBalance: 1000,
    rank: 1,
    tier: 'pro',
    team: 'red',
    gender: 'king',
    joinDate: new Date().toISOString(),
    joinedAt: new Date().toISOString(),
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    },
    socialLinks: []
  };
  
  const handleShowCertificate = () => {
    setCertificateVisible(true);
    playSound('parchmentUnfurl');
  };
  
  const handleCertificateVerify = () => {
    addToast({
      title: "Certificate Verified",
      description: "This certificate of nobility has been authenticated by the royal treasury.",
      variant: "success",
      duration: 5000
    });
  };

  const handleCertificateDownload = () => {
    addToast({
      title: "Certificate Downloaded",
      description: "Your certificate of nobility has been saved to your royal archives.",
      variant: "success",
      duration: 5000
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>About SpendThrone | The Ultimate Pay-to-Win Social Experiment</title>
        <meta 
          name="description" 
          content="Learn about SpendThrone, the satirical social platform where your rank is determined solely by how much money you spend."
        />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold royal-gradient mb-4 font-royal">About SpendThrone</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              A satirical social experiment where status is purchased, not earned
            </p>
          </div>
          
          <Tabs defaultValue="concept" className="mb-12">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="concept" className="data-[state=active]:bg-royal-gold/20">
                <BookOpen className="h-4 w-4 mr-2" />
                The Concept
              </TabsTrigger>
              <TabsTrigger value="how-it-works" className="data-[state=active]:bg-royal-gold/20">
                <Code className="h-4 w-4 mr-2" />
                How It Works
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-royal-gold/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Community & Culture
              </TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-royal-gold/20">
                <Users className="h-4 w-4 mr-2" />
                Our Team
              </TabsTrigger>
            </TabsList>
            
            {/* Concept Tab */}
            <TabsContent value="concept" className="space-y-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                    The Royal Satire
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    SpendThrone is a satirical social platform that parodies the relationship between wealth and status. 
                    We've created a digital kingdom where your rank is determined solely by how much money you spend.
                  </p>
                  <p>
                    $1 = 1 unit of rank. No skills required. No achievements necessary. Just pure, unadulterated spending.
                  </p>
                  <p>
                    Our platform serves as a mirror to real-world dynamics where wealth often translates to influence and status, 
                    but we've stripped away all pretense. Here, we're completely transparent about the transaction: 
                    you give us money, we give you a higher rank and meaningless digital prestige.
                  </p>
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 mt-4">
                    <h3 className="text-lg font-bold mb-2 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-royal-gold" />
                      Our Mission
                    </h3>
                    <p>
                      To create a thought-provoking social experiment that encourages reflection on how we assign value and status in society, 
                      while providing entertainment through absurdist humor and community interaction.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-royal-gold" />
                      Satire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70">
                      We're poking fun at status games, conspicuous consumption, and the sometimes absurd relationship between wealth and social standing.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center">
                      <Users className="h-5 w-5 mr-2 text-royal-gold" />
                      Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70">
                      Despite the satirical premise, we're building a real community of people who appreciate the humor and enjoy the absurdity together.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-royal-gold" />
                      Transparency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70">
                      We're completely upfront about what you're getting: digital status with no practical value, in exchange for real money.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* How It Works Tab */}
            <TabsContent value="how-it-works" className="space-y-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scroll className="h-5 w-5 mr-2 text-royal-gold" />
                    The Royal Mechanics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80">
                    SpendThrone operates on a simple principle: your rank is directly proportional to 
                    how much money you've spent on the platform.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Ranking System</h3>
                      <p className="text-sm text-white/70">
                        $1 = 1 rank point. The more you spend, the higher your rank. 
                        The leaderboard is sorted by total amount spent, with the highest spender at the top.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Teams & Competition</h3>
                      <p className="text-sm text-white/70">
                        Join one of three royal houses and contribute to your team's standing. 
                        Team rankings are determined by the collective spending of all members.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Profile Enhancement</h3>
                      <p className="text-sm text-white/70">
                        Unlock cosmetic profile enhancements as you spend more. Basic users start with limited 
                        features, while Pro users gain access to advanced customization options.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Top Spender Perks</h3>
                      <p className="text-sm text-white/70">
                        The #1 ranked spender gets exclusive advertising space on the homepage and special privileges
                        to promote their own content, websites, or social media.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={handleShowCertificate}
                      className="bg-royal-gold text-black hover:bg-royal-gold/90"
                    >
                      <Crown className="h-4 w-4 mr-2" />
                      View Sample Certificate of Nobility
                    </Button>
                    <Link to="/features">
                      <Button 
                        variant="outline"
                        className="ml-4 border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
                      >
                        <Gem className="h-4 w-4 mr-2" />
                        View All Features
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-base">Profile Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-bold text-sm">Basic Profile (All Users)</h3>
                      <p className="text-sm text-white/70">
                        Every user can customize their profile with text, upload images, add social links,
                        and create a personalized bio.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-sm">Pro Features</h3>
                      <p className="text-sm text-white/70">
                        Pro users unlock enhanced customization like animated RGB borders, custom gradients,
                        advanced analytics, and more ways to make their profile stand out.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-sm">Certificate of Nobility</h3>
                      <p className="text-sm text-white/70">
                        Generate your personalized Certificate of Nobility to share on social media,
                        showcasing your rank and spending achievements.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-base">Understanding Your Investment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-white/70">
                      SpendThrone is a satirical platform. All transactions are final. 
                      Your contributions purchase digital status with no practical value or utility.
                    </p>
                    
                    <p className="text-sm text-white/70">
                      We maintain complete transparency about the nature of the platform. 
                      By participating, you acknowledge that you're spending real money for digital status 
                      as part of a social experiment.
                    </p>
                    
                    <p className="text-sm text-white/70">
                      A portion of proceeds goes to maintaining the platform, with the remainder donated to charitable causes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Community & Culture Tab */}
            <TabsContent value="community" className="space-y-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-royal-gold" />
                    The Meme Economy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    SpendThrone is both a critique and a celebration of internet culture, where attention is currency 
                    and absurdity is content. It's a living meme that evolves through participation, a mirror reflecting 
                    our digital society's values back at itself.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Digital Prestige</h3>
                      <p className="text-sm text-white/70">
                        Badges, custom borders, animated effects - all these purely cosmetic features serve as
                        visual indicators of your spending power. They have no functional value, but they look impressive
                        to others.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Social Dynamics</h3>
                      <p className="text-sm text-white/70">
                        Watch as users form alliances, compete for status, and create narratives around their spending.
                        The psychology of digital prestige unfolds in real-time.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Advertising as Status</h3>
                      <p className="text-sm text-white/70">
                        Your profile page becomes your own personal billboard. As you spend more, you gain the ability
                        to customize it extensively and promote whatever you want.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Meme Value</h3>
                      <p className="text-sm text-white/70">
                        The true value is in the story you can tell. "I'm ranked #5 on a website where people pay real money for fake status"
                        becomes its own form of social currency - albeit an ironic one.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-royal-gold/5 p-6 rounded-lg border border-royal-gold/20">
                    <h3 className="text-xl font-bold royal-gradient mb-3 font-royal">The Founders Badge</h3>
                    <p className="text-white/80 mb-4">
                      Early supporters can obtain the exclusive Founders Badge - a permanent mark of distinction
                      that identifies you as part of the original community. This limited-time offer includes:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
                        <span>Permanent profile distinction</span>
                      </li>
                      <li className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
                        <span>All Pro features included</span>
                      </li>
                      <li className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
                        <span>Early access to new features</span>
                      </li>
                      <li className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-royal-gold" />
                        <span>Recognition in our "Hall of Founders"</span>
                      </li>
                    </ul>
                    <div className="mt-4 text-center">
                      <Link to="/founder">
                        <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                          <Crown className="h-4 w-4 mr-2" />
                          Become a Founder
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coffee className="h-5 w-5 mr-2 text-royal-gold" />
                    The SpendThrone Philosophy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    SpendThrone emerged from a simple question: What if we created a social hierarchy based entirely on money spent, 
                    with absolutely no pretense about skill, merit, or contribution?
                  </p>
                  
                  <p>
                    In the real world, wealth often confers status, but this relationship is obscured by various justifications and complexities. 
                    We've stripped away these layers to create a pure, distilled version of pay-to-win status dynamics.
                  </p>
                  
                  <p>
                    Our experiment asks: How do people behave when the rules are completely transparent? 
                    What happens when status is explicitly purchasable? Who participates, and why?
                  </p>
                  
                  <p className="mt-4">
                    Whether you're participating ironically, genuinely seeking digital status, or just here to observe the spectacle,
                    you're contributing to a unique moment in internet culture history.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Team Tab */}
            <TabsContent value="team" className="space-y-6">
              <TeamSection />
            </TabsContent>
          </Tabs>
          
          <RoyalDivider variant="ornate" className="my-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gem className="h-5 w-5 mr-2 text-royal-gold" />
                  Premium Features & Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Unlock advanced customization options and exclusive benefits by upgrading your account.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-royal-gold/10 flex items-center justify-center mr-3">
                      <Sparkles className="h-4 w-4 text-royal-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium">Enhanced Profile Customization</h4>
                      <p className="text-sm text-white/60">Animated borders, custom colors, and more</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-royal-gold/10 flex items-center justify-center mr-3">
                      <Share2 className="h-4 w-4 text-royal-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium">Advanced Link Tracking</h4>
                      <p className="text-sm text-white/60">Analytics for profile visitors and clicks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-royal-gold/10 flex items-center justify-center mr-3">
                      <Trophy className="h-4 w-4 text-royal-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium">Exclusive Badges</h4>
                      <p className="text-sm text-white/60">Showcase your premium status</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/features">
                  <Button className="w-full mt-4 bg-royal-gold/10 text-royal-gold hover:bg-royal-gold/20 border border-royal-gold/30">
                    View All Premium Features
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Share2 className="h-5 w-5 mr-2 text-royal-gold" />
                  Certificate of Nobility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Each noble receives a personalized Certificate of Nobility displaying their rank, 
                  spending amount, and achievements - perfect for sharing on social media.
                </p>
                
                <div className="relative h-48 overflow-hidden rounded-lg glass-morphism border-white/10 flex items-center justify-center cursor-pointer" onClick={handleShowCertificate}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                  <img 
                    src="https://source.unsplash.com/random/?parchment,scroll" 
                    alt="Certificate Preview" 
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="ghost" className="bg-black/30 text-white hover:bg-black/50">
                      <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                      Preview Certificate
                    </Button>
                  </div>
                </div>
                
                <div className="text-center mt-2">
                  <p className="text-sm text-white/60">
                    Generate your own certificate to showcase your digital nobility status and share with friends
                  </p>
                  
                  <Link to="/profile">
                    <Button className="mt-4 bg-royal-gold/10 text-royal-gold hover:bg-royal-gold/20 border border-royal-gold/30">
                      Generate Your Certificate
                      <Download className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold royal-gradient mb-4 font-royal">Join Our Royal Court</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Ready to participate in our satirical social experiment? Join SpendThrone today and begin your ascent through the ranks of digital nobility.
            </p>
            
            <Link to="/leaderboard">
              <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 mr-4">
                <Crown className="h-4 w-4 mr-2" />
                View Current Rankings
              </Button>
            </Link>
            
            <Link to="/auth">
              <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                <Crown className="h-4 w-4 mr-2" />
                Begin Your Noble Journey
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      {certificateVisible && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <CertificateOfNobility
            user={mockFounder}
            certificateId="NOB-12345-ABCDE"
            onVerify={() => handleCertificateVerify()}
            onDismiss={() => setCertificateVisible(false)}
            onDownload={() => handleCertificateDownload()}
          />
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default About;
