
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollText, Crown, Trophy, Users, Heart, AlertCircle } from 'lucide-react';
import { mockeryTierLabels } from '@/utils/mockeryActionUtils';

const RoyalEncyclopedia = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <ScrollText className="h-6 w-6 mr-2 text-royal-gold" />
          Royal Encyclopedia
        </h1>
        
        <p className="text-white/70 mb-6">
          The complete guide to all things Royal in the Cash Kingdom.
        </p>
        
        <Tabs defaultValue="mockery" className="w-full">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="mockery" className="flex items-center">
              <Crown className="h-4 w-4 mr-2" />
              Mockery
            </TabsTrigger>
            <TabsTrigger value="ranks" className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              Ranks
            </TabsTrigger>
            <TabsTrigger value="teams" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Teams
            </TabsTrigger>
            <TabsTrigger value="titles" className="flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Titles
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              FAQ
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mockery">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Royal Mockery System</h2>
                <p className="mb-4">
                  The Royal Mockery System allows members of the Cash Kingdom to express their opinions of others through various forms of courtly ridicule. From simple tomato throwing to the elaborate Court Jester ceremony, each mockery type serves a specific purpose in the royal hierarchy.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Mockery Tiers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(mockeryTierLabels).slice(0, 6).map(([tier, label]) => (
                    <div key={tier} className="p-4 bg-black/20 rounded-lg border border-white/10">
                      <h4 className="font-medium mb-1 capitalize">{label}</h4>
                      <p className="text-sm text-white/70">
                        {tier === 'common' && 'Available to all users, inexpensive and playful.'}
                        {tier === 'uncommon' && 'Slightly more impactful mockeries with moderate cost.'}
                        {tier === 'rare' && 'Powerful mockeries that leave a lasting impression.'}
                        {tier === 'epic' && 'High-impact mockeries reserved for significant statements.'}
                        {tier === 'legendary' && 'The most powerful mockeries in the kingdom.'}
                        {tier === 'royal' && 'Reserved exclusively for Royal tier members.'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Mockery Types</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="font-medium mb-1">Tomato Throwing</h4>
                    <p className="text-sm text-white/70">
                      The classic expression of disapproval. Tomato throwing is a common mockery that leaves a temporary mark on the recipient's profile.
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-white/50">Cost: 5 coins</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">Common</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="font-medium mb-1">Crown Flipping</h4>
                    <p className="text-sm text-white/70">
                      A rare mockery that temporarily removes the crown from a Royal user's profile, causing momentary embarrassment in the court.
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-white/50">Cost: 100 coins</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">Rare</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="font-medium mb-1">Court Jester</h4>
                    <p className="text-sm text-white/70">
                      An epic mockery that designates someone as the Court Jester for 24 hours, adding a jester hat to their profile and announcements to their actions.
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-white/50">Cost: 30 coins</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">Epic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ranks">
            <div>
              <h2 className="text-2xl font-bold mb-4">Royal Rankings Explained</h2>
              <p className="mb-6">
                The Cash Kingdom operates on a strict hierarchy based on spending and contributions. Your rank determines your status, privileges, and respect within the royal court.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                  <h4 className="font-medium mb-1">Ranking System</h4>
                  <p className="text-sm text-white/70">
                    Rankings are updated hourly based on total spending. The top spender holds the #1 position, with others ranked in descending order. Your ranking history is preserved for all to see.
                  </p>
                </div>
                
                <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                  <h4 className="font-medium mb-1">Rank Benefits</h4>
                  <ul className="text-sm text-white/70 list-disc list-inside space-y-1">
                    <li>Top 10: Special crown icon and weekly bonus coins</li>
                    <li>Top 50: Access to exclusive events and custom profile frames</li>
                    <li>Top 100: Reduced costs for mockery actions</li>
                    <li>Top 500: Name highlighted in leaderboards</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                  <h4 className="font-medium mb-1">Rank Protection</h4>
                  <p className="text-sm text-white/70">
                    Royal members can purchase Rank Protection to prevent dropping more than 5 positions in a 24-hour period, ensuring stability in the royal hierarchy.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="teams">
            <div>
              <h2 className="text-2xl font-bold mb-4">Royal Teams</h2>
              <p className="mb-6">
                Teams represent different factions within the Cash Kingdom, each with their own philosophy, benefits, and culture.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-900/20 rounded-lg border border-red-900/40">
                  <h4 className="font-medium mb-1 text-red-400">Royal Order of Reckless Spending</h4>
                  <p className="text-sm text-white/70">
                    Founded on the principle that money exists to be spent lavishly and spectacularly. Members pride themselves on bold, impulsive purchases.
                  </p>
                  <div className="mt-2 text-xs text-white/50">Motto: "Spend First, Think Never"</div>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/40">
                  <h4 className="font-medium mb-1 text-blue-400">Cobalt Credit Cartel</h4>
                  <p className="text-sm text-white/70">
                    Masters of leveraging credit to maintain appearances. Members excel at maintaining a high spending profile through strategic use of credit.
                  </p>
                  <div className="mt-2 text-xs text-white/50">Motto: "Today's Purchases, Tomorrow's Problems"</div>
                </div>
                
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-900/40">
                  <h4 className="font-medium mb-1 text-green-400">Emerald Exchequer Cabaret</h4>
                  <p className="text-sm text-white/70">
                    Combines flamboyant spending with theatrical flair. Members celebrate each purchase as a performance art piece.
                  </p>
                  <div className="mt-2 text-xs text-white/50">Motto: "All Wealth's a Stage"</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="titles">Content for Titles</TabsContent>
          <TabsContent value="faq">Content for FAQ</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RoyalEncyclopedia;
