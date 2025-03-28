
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Scroll, Shield, Swords, Coins, BookOpen } from 'lucide-react';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import RoyalButton from '@/components/ui/royal-button';
import MedievalIcon from '@/components/ui/medieval-icon';
import CertificateOfNobility from '@/components/certificates/CertificateOfNobility';
import ScrollOfShame from '@/components/scrolls/ScrollOfShame';
import { useToast } from '@/hooks/use-toast';
import { mockLeaderboardData } from '@/components/leaderboard/LeaderboardData';
import { UserProfile } from '@/types/user';

// Generate a mock user for preview purposes
const mockUser: UserProfile = {
  id: "mock-123",
  username: "NobleVisitor",
  email: "visitor@example.com",
  profileImage: "https://i.pravatar.cc/150?img=33",
  amountSpent: 750,
  walletBalance: 0,
  rank: 5,
  previousRank: 6,
  spendStreak: 4,
  tier: 'fish',
  team: 'blue',
  gender: 'noble',
  joinDate: new Date(2023, 5, 15).toISOString(),
  joinedAt: new Date(2023, 5, 15).toISOString(),
  cosmetics: {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: []
  },
  isVIP: true,
  socialLinks: []
};

// Mock shame records for preview
const mockShameRecords = [
  {
    id: "shame-1",
    targetUser: {
      ...mockUser,
      id: "user-2",
      username: "PennyPincher",
      rank: 7
    },
    reason: "Shamefully refused to increase their tribute to the Royal Treasury for three consecutive days!",
    issuedOn: new Date(2023, 6, 12),
    issuedBy: {
      ...mockUser,
      id: "user-1",
      username: "MoneyBags",
      rank: 1
    },
    shameType: 'tomatoes' as 'tomatoes'
  },
  {
    id: "shame-2",
    targetUser: {
      ...mockUser,
      id: "user-3",
      username: "FrugalKnight",
      rank: 9
    },
    reason: "Attempted to barter for position instead of paying the Royal fee. How uncouth!",
    issuedOn: new Date(2023, 6, 15),
    issuedBy: {
      ...mockUser,
      id: "user-4",
      username: "WealthyWizard",
      rank: 2
    },
    shameType: 'eggs' as 'eggs'
  }
];

const AboutPage = () => {
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  useEffect(() => {
    playSound('pageTransition', 0.3);
    
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Royal Historian",
        description: "Welcome to the chronicles of our noble kingdom, where money buys status and satire is our currency!",
        duration: 5000,
      });
    }, 1000);
  }, [toast, playSound]);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-medieval royal-gradient mb-4">About Our Royal Domain</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Welcome to the most satirical digital realm where your worth is measured not by your character, 
          but by your tribute to our lavish treasury.
        </p>
      </motion.div>
      
      {/* Kingdom Overview */}
      <section className="mb-16">
        <div className="glass-morphism border-white/10 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-5">
            <Crown size={160} />
          </div>
          
          <h2 className="text-2xl font-medieval royal-gradient mb-6 flex items-center">
            <BookOpen className="mr-2 h-6 w-6 text-royal-gold" />
            The Royal Charter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-medieval mb-3 text-white/90">Our Noble Premise</h3>
              <p className="text-white/70 mb-4">
                In the grand tradition of medieval satire, we've created a digital fiefdom where status is 
                purchased rather than earned. A testament to the absurdity of materialism, where nobles climb 
                ranks by emptying their coffers.
              </p>
              <p className="text-white/70">
                Our leaderboard never resets, creating a persistent nobility where one dollar equals one unit of prestige. 
                The ultimate social experiment on the intersection of wealth and digital status.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medieval mb-3 text-white/90">Royal Values</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>We proudly embrace the satirical nature of our kingdom, using humor to critique the excess of modern materialism.</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>We maintain a humorous, self-aware tone about the inherent ridiculousness of paying for digital status.</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-royal-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>We are transparent about transactions and treat our noble patrons with the appropriate level of medieval deference.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-medieval royal-gradient text-center mb-8">Royal Institutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-morphism border-white/10 rounded-xl p-5 relative overflow-hidden hover:border-royal-gold/30 transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
              <Crown className="h-6 w-6 text-royal-gold" />
            </div>
            <h3 className="text-lg font-medieval mb-2">The Royal Court</h3>
            <p className="text-white/70 text-sm">
              Our persistent leaderboard where nobles are ranked by their financial contributions. Climb the social ladder through the time-honored tradition of spending money!
            </p>
            <div className="absolute bottom-2 right-2 opacity-5">
              <Crown size={60} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-morphism border-white/10 rounded-xl p-5 relative overflow-hidden hover:border-royal-crimson/30 transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-royal-crimson/10 flex items-center justify-center mb-4">
              <Scroll className="h-6 w-6 text-royal-crimson" />
            </div>
            <h3 className="text-lg font-medieval mb-2">The Royal Scrolls</h3>
            <p className="text-white/70 text-sm">
              Nobles can create customized profile pages with levels of opulence determined by their spending. More money means more elaborate decorations and self-expression.
            </p>
            <div className="absolute bottom-2 right-2 opacity-5">
              <Scroll size={60} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-morphism border-white/10 rounded-xl p-5 relative overflow-hidden hover:border-royal-navy/30 transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-royal-navy/10 flex items-center justify-center mb-4">
              <Swords className="h-6 w-6 text-royal-navy" />
            </div>
            <h3 className="text-lg font-medieval mb-2">Royal Tournaments</h3>
            <p className="text-white/70 text-sm">
              Weekly events add twists to our usual order, from the "Poke Party" where users pay to drop others in rank, to team challenges that test collective spending power.
            </p>
            <div className="absolute bottom-2 right-2 opacity-5">
              <Swords size={60} />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Certificate Preview */}
      <section className="mb-16">
        <h2 className="text-2xl font-medieval royal-gradient text-center mb-1">Certificate of Nobility</h2>
        <p className="text-white/70 text-center mb-8">Behold, the parchment that validates your purchased prestige!</p>
        
        <CertificateOfNobility 
          user={mockUser}
          issuedOn={new Date(2023, 6, 20)}
          rankAtIssuance={5}
          amountSpentAtIssuance={750}
          certificateId="ROYAL-5F7D3"
          onVerify={() => {
            toast({
              title: "Certificate Verified",
              description: "The Royal Scribes have authenticated this certificate of nobility.",
              duration: 3000,
            });
          }}
          onDismiss={() => {
            toast({
              title: "Certificate Dismissed",
              description: "You have cast aside this recognition of purchased status.",
              duration: 3000,
            });
          }}
        />
      </section>
      
      {/* Scroll of Shame Preview */}
      <section className="mb-16">
        <h2 className="text-2xl font-medieval royal-gradient text-center mb-1">Scroll of Shame</h2>
        <p className="text-white/70 text-center mb-8">Public ridicule for those who fail to properly support the kingdom.</p>
        
        <ScrollOfShame 
          shameRecords={mockShameRecords}
          previewMode={true}
          onView={(record) => {
            console.log("Viewing shame record:", record);
          }}
          onHide={(record) => {
            console.log("Hiding shame record:", record);
          }}
        />
      </section>
      
      {/* Call to Action */}
      <section className="text-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-morphism border-white/10 rounded-xl p-8 max-w-2xl mx-auto"
        >
          <MedievalIcon name="crown" size="xl" color="gold" className="mb-4" />
          <h2 className="text-2xl font-medieval royal-gradient mb-4">Join Our Noble Ranks</h2>
          <p className="text-white/70 mb-6">
            Ready to trade your real money for completely meaningless digital status? Our kingdom awaits your contribution to our entirely arbitrary hierarchy!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <RoyalButton
              variant="royalGold"
              icon={<Coins className="h-5 w-5" />}
              onClick={() => {
                playSound('coinDrop');
                toast({
                  title: "Royal Treasurer",
                  description: "The Royal Treasury awaits your generous contribution!",
                  duration: 3000,
                });
              }}
            >
              Contribute to the Treasury
            </RoyalButton>
            <RoyalButton
              variant="glass"
              icon={<Crown className="h-5 w-5" />}
              onClick={() => {
                playSound('pageTransition');
                window.location.href = '/profile/create';
              }}
            >
              Create Your Noble Profile
            </RoyalButton>
          </div>
          <p className="text-white/50 text-xs mt-6 italic">
            "Remember, in our kingdom, the size of your payment directly validates your self-worth!"
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
