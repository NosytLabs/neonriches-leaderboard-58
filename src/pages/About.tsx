
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Crown, Users, Scroll, Heart, Info, BookOpen, Code, Coffee, Sparkles, Download } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';
import TeamSection from '@/components/TeamSection';
import CertificateOfNobility from '@/components/certificates/CertificateOfNobility';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToastContext } from '@/contexts/ToastContext';
import { UserProfile, UserTier } from '@/types/user';

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
    tier: 'whale' as UserTier,
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
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="concept" className="data-[state=active]:bg-royal-gold/20">
                <BookOpen className="h-4 w-4 mr-2" />
                The Concept
              </TabsTrigger>
              <TabsTrigger value="mechanics" className="data-[state=active]:bg-royal-gold/20">
                <Code className="h-4 w-4 mr-2" />
                How It Works
              </TabsTrigger>
              <TabsTrigger value="philosophy" className="data-[state=active]:bg-royal-gold/20">
                <Coffee className="h-4 w-4 mr-2" />
                Our Philosophy
              </TabsTrigger>
            </TabsList>
            
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
                    SpendThrone is a satirical social platform that parodies the relationship between wealth and status in modern society. 
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
            
            <TabsContent value="mechanics" className="space-y-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scroll className="h-5 w-5 mr-2 text-royal-gold" />
                    The Royal Mechanics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    SpendThrone operates on a simple principle: your rank is directly proportional to how much money you've spent on the platform.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Ranking System</h3>
                      <p className="text-sm text-white/70">
                        $1 = 1 rank point. The more you spend, the higher your rank. It's that simple. 
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
                      <h3 className="font-bold mb-2">Cosmetic Rewards</h3>
                      <p className="text-sm text-white/70">
                        Unlock purely cosmetic profile enhancements as you spend more. 
                        These have no functional value but look impressive to others.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h3 className="font-bold mb-2">Top Spender Perks</h3>
                      <p className="text-sm text-white/70">
                        The #1 ranked spender gets exclusive advertising space on the homepage and special privileges.
                        These perks shift in real-time as rankings change.
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
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-base">Royal Events</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-bold text-sm">Weekly Events</h3>
                      <p className="text-sm text-white/70">
                        Participate in weekly events like public shaming festivals where you can drop other users in rank.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-sm">Fire Sales</h3>
                      <p className="text-sm text-white/70">
                        Every third month, cosmetic items go on sale with 30-70% discounts. A perfect opportunity to enhance your nobility.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-sm">Prize Pool</h3>
                      <p className="text-sm text-white/70">
                        15% of all spending goes into a prize pool that rewards consistent spenders and top whales in our community.
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
                      By participating, you acknowledge that you're spending real money for digital status as part of a social experiment.
                    </p>
                    
                    <p className="text-sm text-white/70">
                      A portion of proceeds goes to maintaining the platform, with the remainder donated to charitable causes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="philosophy" className="space-y-6">
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
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 mt-4">
                    <h3 className="text-lg font-bold mb-2 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-royal-gold" />
                      The Meme Economy
                    </h3>
                    <p>
                      SpendThrone is both a critique and a celebration of internet culture, where attention is currency and absurdity is content.
                      It's a living meme that evolves through participation, a mirror reflecting our digital society's values back at itself.
                    </p>
                  </div>
                  
                  <p className="mt-4">
                    Our team consists of developers, designers, and writers who are fascinated by the intersection of technology, 
                    economics, and social dynamics. We've created this platform not just as satire, but as a genuine social experiment 
                    that might reveal something meaningful about human behavior in digital spaces.
                  </p>
                  
                  <p>
                    Whether you're participating ironically, genuinely seeking digital status, or just here to observe the spectacle,
                    you're contributing to a unique moment in internet culture history.
                  </p>
                </CardContent>
              </Card>
              
              <TeamSection />
            </TabsContent>
          </Tabs>
          
          <RoyalDivider variant="ornate" className="my-12" />
          
          <div className="text-center">
            <h2 className="text-2xl font-bold royal-gradient mb-4 font-royal">Join Our Royal Court</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Ready to participate in our satirical social experiment? Join SpendThrone today and begin your ascent through the ranks of digital nobility.
            </p>
            
            <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
              <Crown className="h-4 w-4 mr-2" />
              Begin Your Noble Journey
            </Button>
          </div>
        </div>
      </main>
      
      {certificateVisible && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <CertificateOfNobility
            user={demoUser}
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
