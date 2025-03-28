
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import RoyalCertificate from '@/components/certificates/RoyalCertificate';
import { UserProfile } from '@/types/user';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Award, Wallet, Trophy } from 'lucide-react';
import { RealTimeLeaderboard } from '@/components/solana';
import { TreasuryDashboard } from '@/components/solana';
import MedievalIcon from '@/components/ui/medieval-icon';
import { RoyalSection } from '@/components/ui/theme-components';

// Sample user for demonstration
const sampleUser: UserProfile = {
  id: '1',
  username: 'RoyalWhale',
  displayName: 'Duke of Digitalshire',
  email: 'royal@example.com',
  profileImage: 'https://api.dicebear.com/7.x/bottts/svg?seed=royal',
  walletAddress: 'GwPTauLnuAmLFMY8QsyHfWrFU7XeFCMqLJbJNGpKZ5eS',
  walletBalance: 25.5,
  team: 'red',
  tier: 'royal',
  spendStreak: 12,
  joinedAt: '2023-01-15T12:34:56Z',
  joinDate: '2023-01-15T12:34:56Z',
  rank: 1,
  previousRank: 2,
  amountSpent: 5000,
  bio: 'Royal court member since the beginning. I pay, therefore I am.',
  isVIP: true,
  isVerified: true,
  profileViews: 1250,
  followers: 42,
  following: 10,
  activeTitle: 'Royal Patron',
  cosmetics: {
    borders: ['gold', 'royal', 'premium'],
    colors: ['gold', 'red', 'blue'],
    fonts: ['medieval', 'royal'],
    emojis: ['crown', 'money'],
    titles: ['duke', 'baron'],
    backgrounds: ['castle', 'throne'],
    effects: ['glitter', 'shine'],
    badges: ['founder', 'whale'],
    themes: ['royal', 'dark'],
    foundersPass: true,
    activeBorder: 'gold',
    activeColor: 'gold',
    activeFont: 'royal',
    activeEmoji: 'crown',
    activeTheme: 'royal',
    activeBadge: 'founder'
  },
  settings: {
    showRank: true,
    showTeam: true,
    showSpending: true,
    publicProfile: true,
    allowMessages: true,
    emailNotifications: true,
    darkMode: true,
    soundEffects: true
  }
};

const CertificatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('certificate');
  const [hasNFT, setHasNFT] = useState(false);
  
  return (
    <RoyalSection title="Royal Blockchain Treasury" description="Track your noble status and the kingdom's wealth">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="glass-morphism border-white/10">
            <TabsTrigger value="certificate" className="flex items-center gap-2 px-4">
              <Award className="h-4 w-4" />
              Certificate
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2 px-4">
              <Trophy className="h-4 w-4" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="treasury" className="flex items-center gap-2 px-4">
              <Wallet className="h-4 w-4" />
              Treasury
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="certificate" className="w-full flex justify-center">
          <div className="max-w-2xl w-full">
            <Card className="glass-morphism border-white/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MedievalIcon name="certificate" color="gold" className="mr-2" />
                  Your Certificate of Nobility
                </CardTitle>
                <CardDescription>
                  Showcase your standing in the Royal Court with a shareable certificate or mint it as an NFT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RoyalCertificate 
                  user={sampleUser}
                  hasNFT={hasNFT}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard">
          <div className="max-w-4xl mx-auto">
            <RealTimeLeaderboard limit={10} />
          </div>
        </TabsContent>
        
        <TabsContent value="treasury">
          <div className="max-w-4xl mx-auto">
            <TreasuryDashboard />
          </div>
        </TabsContent>
      </Tabs>
    </RoyalSection>
  );
};

export default CertificatePage;
