
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockeryTierColors } from '@/utils/mockeryActionUtils';
import { Badge } from '@/components/ui/badge';

// Export the component as the default export
const RoyalEncyclopedia: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Royal Encyclopedia</CardTitle>
        <CardDescription>
          Learn about the world of cash monarchy and royal status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="mockery">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="mockery">Mockery</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="ranks">Ranks</TabsTrigger>
            <TabsTrigger value="terms">Royal Terms</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mockery" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Mockery Tiers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md bg-white/5">
                  <div className="flex items-center mb-2">
                    <Badge className={mockeryTierColors.common}>Common</Badge>
                  </div>
                  <p className="text-sm">
                    Basic mockery actions available to all users. 
                    Limited impact but affordable.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-white/5">
                  <div className="flex items-center mb-2">
                    <Badge className={mockeryTierColors.uncommon}>Uncommon</Badge>
                  </div>
                  <p className="text-sm">
                    Slightly more powerful mockery actions.
                    Moderate impact and cost.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-white/5">
                  <div className="flex items-center mb-2">
                    <Badge className={mockeryTierColors.rare}>Rare</Badge>
                  </div>
                  <p className="text-sm">
                    Powerful mockery actions with significant visibility.
                    Higher cost but more impactful.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-white/5">
                  <div className="flex items-center mb-2">
                    <Badge className={mockeryTierColors.epic}>Epic</Badge>
                  </div>
                  <p className="text-sm">
                    Very powerful mockery actions that can significantly impact reputation.
                    High cost with substantial effect.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-white/5">
                  <div className="flex items-center mb-2">
                    <Badge className={mockeryTierColors.legendary}>Legendary</Badge>
                  </div>
                  <p className="text-sm">
                    The most powerful mockery actions available.
                    Extremely high cost but maximum impact.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Mockery Rules</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  1. Mockery actions cost coins which contribute to your total spent.
                </li>
                <li>
                  2. You can protect yourself from mockery by purchasing protection.
                </li>
                <li>
                  3. Higher tier users have access to more powerful mockery actions.
                </li>
                <li>
                  4. Mockery is public and visible on leaderboards and profiles.
                </li>
                <li>
                  5. Team members can receive discounts when mocking rival teams.
                </li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="teams" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Royal Teams</h3>
              <p className="mb-4">
                Teams compete for glory and rewards on the royal leaderboard.
                Your spending contributes to your team's rank.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md bg-red-500/10 border border-red-500/20">
                  <h4 className="font-medium text-red-400 mb-1">Red Team</h4>
                  <p className="text-sm">Known for aggressive mockery and competitive spirit.</p>
                </div>
                <div className="p-4 rounded-md bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-medium text-blue-400 mb-1">Blue Team</h4>
                  <p className="text-sm">Strategic and methodical in their approach to spending.</p>
                </div>
                <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
                  <h4 className="font-medium text-green-400 mb-1">Green Team</h4>
                  <p className="text-sm">Balanced approach with strong community support.</p>
                </div>
                <div className="p-4 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                  <h4 className="font-medium text-yellow-400 mb-1">Gold Team</h4>
                  <p className="text-sm">Prestigious team with high-spending members.</p>
                </div>
                <div className="p-4 rounded-md bg-purple-500/10 border border-purple-500/20">
                  <h4 className="font-medium text-purple-400 mb-1">Purple Team</h4>
                  <p className="text-sm">Creative and unpredictable in their royal tactics.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ranks" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Royal Ranks</h3>
              <p className="mb-4">
                Your rank is determined by your total spending on the platform.
                Higher ranks grant more privileges and respect in the royal court.
              </p>
              
              <div className="space-y-3">
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="outline" className="mr-3 bg-zinc-800">Commoner</Badge>
                  <span className="text-sm">New users with minimal spending</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="outline" className="mr-3 bg-zinc-700">Peasant</Badge>
                  <span className="text-sm">Users who have begun their spending journey</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="outline" className="mr-3 bg-blue-900">Noble</Badge>
                  <span className="text-sm">Regular spenders with moderate total spend</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="outline" className="mr-3 bg-purple-900">Knight</Badge>
                  <span className="text-sm">Dedicated members with substantial spending</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="outline" className="mr-3 bg-red-900">Baron</Badge>
                  <span className="text-sm">High-spending members who command respect</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="outline" className="mr-3 bg-amber-700">Duke</Badge>
                  <span className="text-sm">Elite members with very high spending totals</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="outline" className="mr-3 bg-yellow-600">Prince/Princess</Badge>
                  <span className="text-sm">Exceptional spenders near the top of the leaderboard</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 flex items-center">
                  <Badge variant="royal" className="mr-3">King/Queen</Badge>
                  <span className="text-sm">The highest spending members who rule the leaderboard</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="terms" className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Royal Glossary</h3>
              <dl className="space-y-3">
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Cash Throne</dt>
                  <dd className="text-sm text-white/70">The position of highest rank on the leaderboard</dd>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Royal Court</dt>
                  <dd className="text-sm text-white/70">The top 10 users on the leaderboard</dd>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Public Shaming</dt>
                  <dd className="text-sm text-white/70">Using mockery actions against other users</dd>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Spend Streak</dt>
                  <dd className="text-sm text-white/70">Consecutive days of platform spending</dd>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Royal Protection</dt>
                  <dd className="text-sm text-white/70">Item that prevents you from being mocked</dd>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Rank Change</dt>
                  <dd className="text-sm text-white/70">Movement up or down the leaderboard</dd>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Wishing Well</dt>
                  <dd className="text-sm text-white/70">Feature allowing contribution of coins for special rewards</dd>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <dt className="font-medium">Royal Decree</dt>
                  <dd className="text-sm text-white/70">Announcement or action taken by a member of the royal court</dd>
                </div>
              </dl>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Export the component
export default RoyalEncyclopedia;
