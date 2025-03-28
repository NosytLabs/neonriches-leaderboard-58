
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RoyalDivider from '@/components/ui/royal-divider';
import CommunityVoting from '@/components/community/CommunityVoting';
import SuggestionForm from '@/components/community/SuggestionForm';
import { Crown, MessageSquare, ShieldCheck, Sparkles, Users, Vote } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import RoyalButton from '@/components/ui/royal-button';

const RoyalCouncil = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>Royal Council | SpendThrone</title>
      
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-medieval mb-3 royal-gradient">
              <span className="inline-block mr-3">👑</span>
              The Royal Council
              <span className="inline-block ml-3">👑</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              The sacred halls of decree and discourse, where nobles gather to share wisdom, 
              vote on proposals, and shape the future of our digital kingdom.
            </p>
          </div>
          
          <RoyalDivider variant="crown" className="mb-10" />
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex justify-center mb-4">
              <TabsList className="glass-morphism">
                <TabsTrigger value="discussions" className="min-w-[120px]">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Discussions</span>
                </TabsTrigger>
                <TabsTrigger value="proposals" className="min-w-[120px]">
                  <Vote className="h-4 w-4 mr-2" />
                  <span>Proposals</span>
                </TabsTrigger>
                <TabsTrigger value="community" className="min-w-[120px]">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Community</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="discussions">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-royal-gold" />
                    Royal Discussions
                  </CardTitle>
                  <CardDescription>
                    Share your thoughts and engage with other nobles in the kingdom
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/20 rounded-lg p-6 text-center space-y-4">
                    <Sparkles className="h-8 w-8 text-royal-gold mx-auto" />
                    <h3 className="text-xl font-medieval">Coming Soon</h3>
                    <p className="text-white/70 max-w-lg mx-auto">
                      The royal scribes are preparing the discussion halls. 
                      Return soon to engage in noble discourse with your fellow aristocrats.
                    </p>
                    
                    <div className="pt-4">
                      <RoyalButton 
                        variant="royalGold"
                        href="https://discord.gg/spendthrone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto"
                        icon={<Crown className="mr-2 h-4 w-4" />}
                        shimmer
                      >
                        Join Our Discord
                      </RoyalButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="proposals">
              <CommunityVoting />
            </TabsContent>
            
            <TabsContent value="community">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShieldCheck className="mr-2 h-5 w-5 text-royal-gold" />
                      Suggest a Feature
                    </CardTitle>
                    <CardDescription>
                      Submit your ideas for royal consideration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SuggestionForm />
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-royal-gold" />
                      Community Links
                    </CardTitle>
                    <CardDescription>
                      Connect with the SpendThrone community
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="glass-morphism border-white/10 rounded-lg p-4 flex items-center space-x-4">
                      <div className="bg-royal-gold/10 p-3 rounded-full">
                        <Crown className="h-6 w-6 text-royal-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Official Discord</h3>
                        <p className="text-sm text-white/60">Join our royal court on Discord</p>
                      </div>
                      <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10" asChild>
                        <a href="https://discord.gg/spendthrone" target="_blank" rel="noopener noreferrer">
                          Join
                        </a>
                      </Button>
                    </div>
                    
                    <div className="glass-morphism border-white/10 rounded-lg p-4 flex items-center space-x-4">
                      <div className="bg-royal-gold/10 p-3 rounded-full">
                        <MessageSquare className="h-6 w-6 text-royal-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Twitter Community</h3>
                        <p className="text-sm text-white/60">Follow our royal decrees on Twitter</p>
                      </div>
                      <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10" asChild>
                        <a href="https://twitter.com/spendthrone" target="_blank" rel="noopener noreferrer">
                          Follow
                        </a>
                      </Button>
                    </div>
                    
                    <div className="glass-morphism border-white/10 rounded-lg p-4 flex items-center space-x-4">
                      <div className="bg-royal-gold/10 p-3 rounded-full">
                        <Users className="h-6 w-6 text-royal-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Subreddit</h3>
                        <p className="text-sm text-white/60">Discuss strategies and share stories</p>
                      </div>
                      <Button variant="outline" size="sm" className="glass-morphism border-white/10 hover:bg-white/10" asChild>
                        <a href="https://reddit.com/r/spendthrone" target="_blank" rel="noopener noreferrer">
                          Explore
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoyalCouncil;
