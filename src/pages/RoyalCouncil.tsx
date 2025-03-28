
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CommunityVoting } from '@/components/community/CommunityVoting';
import { SuggestionForm } from '@/components/community/SuggestionForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollText, Crown, MessageSquare, Users, ThumbsUp, Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MedievalIcon from '@/components/ui/medieval-icon';
import RoyalButton from '@/components/ui/royal-button';

const RoyalCouncil = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Royal Council | SpendThrone</title>
        <meta name="description" content="Join the Royal Council to suggest features, vote on proposals, and help shape the future of SpendThrone." />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-10 pt-24">
        <div className="flex items-center mb-6">
          <Crown className="h-8 w-8 text-royal-gold mr-3" />
          <h1 className="text-3xl font-bold font-medieval">The Royal Council</h1>
        </div>
        
        <div className="mb-8 max-w-3xl">
          <p className="text-lg text-white/80">
            Welcome to the Royal Council, where the nobles of SpendThrone gather to discuss matters of importance, suggest new features, and vote on the future direction of the realm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
              <TabsList className="glass-morphism bg-transparent border-white/10 w-full">
                <TabsTrigger value="discussions" className="data-[state=active]:bg-white/10">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Discussions
                </TabsTrigger>
                <TabsTrigger value="voting" className="data-[state=active]:bg-white/10">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Voting
                </TabsTrigger>
                <TabsTrigger value="suggestions" className="data-[state=active]:bg-white/10">
                  <ScrollText className="h-4 w-4 mr-2" />
                  Suggestions
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="discussions" className="mt-6">
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle>Royal Discussions</CardTitle>
                    <CardDescription>
                      Engage in conversations with other nobles about the SpendThrone kingdom.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <MedievalIcon name="scroll" size="2xl" className="mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">The Council Chambers Await</h3>
                      <p className="text-white/70 mb-4">
                        Discussions will be available once the royal scribe has prepared the chambers.
                      </p>
                      <Button variant="outline" className="glass-morphism border-white/10">
                        Receive Notification When Ready
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="voting" className="mt-6">
                <CommunityVoting />
              </TabsContent>
              
              <TabsContent value="suggestions" className="mt-6">
                <SuggestionForm />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-royal-gold" />
                  Council Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-white/70 mb-4">
                  <p>Active nobles with voting rights in the royal council.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 glass-morphism border-white/5 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-royal-gold/20 flex items-center justify-center mr-2">
                        <MedievalIcon name="crown" size="sm" />
                      </div>
                      <span>KingSpender</span>
                    </div>
                    <div className="text-royal-gold text-xs">Founder</div>
                  </div>
                  <div className="flex items-center justify-between p-2 glass-morphism border-white/5 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-royal-gold/20 flex items-center justify-center mr-2">
                        <MedievalIcon name="seal" size="sm" />
                      </div>
                      <span>GoldHoarder</span>
                    </div>
                    <div className="text-royal-gold text-xs">Royal</div>
                  </div>
                  <div className="flex items-center justify-between p-2 glass-morphism border-white/5 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-royal-navy/20 flex items-center justify-center mr-2">
                        <MedievalIcon name="shield" size="sm" color="navy" />
                      </div>
                      <span>SpendQueen</span>
                    </div>
                    <div className="text-royal-navy text-xs">Pro</div>
                  </div>
                </div>
                <div className="mt-4">
                  <RoyalButton 
                    variant="royalGold" 
                    shimmer={true} 
                    className="w-full"
                    icon={<Gift size={16} />}
                  >
                    Upgrade to Join Council
                  </RoyalButton>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MedievalIcon name="scroll" className="mr-2" />
                  Council Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-royal-gold mr-2">•</span>
                    <span>Be respectful to fellow council members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-royal-gold mr-2">•</span>
                    <span>Only Pro tier and above can create proposals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-royal-gold mr-2">•</span>
                    <span>Royal tier members get weighted votes (3x)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-royal-gold mr-2">•</span>
                    <span>Founders get final veto power on all decisions</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://docs.spendthrone.com/governance" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-royal-gold text-sm hover:underline"
                  >
                    Read full governance documentation →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoyalCouncil;
