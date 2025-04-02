
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockeryTierLabels } from '@/utils/mockeryActionUtils';
import { mockeryActionNames, mockeryActionCosts, mockeryActionDescriptions } from '@/utils/mockeryUtils';

interface RoyalEncyclopediaProps {
  className?: string;
}

const RoyalEncyclopedia: React.FC<RoyalEncyclopediaProps> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Royal Encyclopedia</h2>
      
      <Tabs defaultValue="mockery" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="mockery">Royal Mockery</TabsTrigger>
          <TabsTrigger value="teams">Royal Teams</TabsTrigger>
          <TabsTrigger value="tiers">Royal Tiers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mockery">
          <Card>
            <CardHeader>
              <CardTitle>Royal Mockery System</CardTitle>
              <CardDescription>
                Learn about the various mockery actions available to shame your rivals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Royal Mockery is the art of publicly shaming your rivals and asserting your dominance
                in the royal court. The more you spend, the more powerful mockery actions you can perform.
              </p>
              
              <h3 className="text-xl font-semibold mt-4">Mockery Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {Object.entries(mockeryActionNames).map(([key, name]) => (
                  <div key={key} className="p-3 bg-black/20 rounded-lg">
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-white/70">{mockeryActionDescriptions[key] || 'No description available'}</div>
                    <div className="mt-1 text-sm text-royal-gold">Cost: ${mockeryActionCosts[key] || 'Unknown'}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Royal Teams</CardTitle>
              <CardDescription>
                Learn about the various teams in the royal court
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Royal Teams represent different factions within the royal court, each with their
                own benefits, traits, and specialties. Joining a team connects you with like-minded
                royals and provides team-specific advantages.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-3 bg-red-950/20 rounded-lg">
                  <h4 className="font-semibold text-red-400">Red Team</h4>
                  <p className="text-sm">The aggressive spenders, known for dominating the leaderboards through sheer spending power.</p>
                </div>
                
                <div className="p-3 bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-400">Blue Team</h4>
                  <p className="text-sm">Strategic spenders who focus on maximizing value and efficiency.</p>
                </div>
                
                <div className="p-3 bg-green-950/20 rounded-lg">
                  <h4 className="font-semibold text-green-400">Green Team</h4>
                  <p className="text-sm">Community-focused spenders who gain strength in numbers and group benefits.</p>
                </div>
                
                <div className="p-3 bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-400">Gold Team</h4>
                  <p className="text-sm">The elite royals who focus on prestige and exclusive benefits.</p>
                </div>
                
                <div className="p-3 bg-purple-950/20 rounded-lg">
                  <h4 className="font-semibold text-purple-400">Purple Team</h4>
                  <p className="text-sm">Creative spenders who excel at mockery and public appearances.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tiers">
          <Card>
            <CardHeader>
              <CardTitle>Royal Tiers</CardTitle>
              <CardDescription>
                Learn about the various spending tiers and their benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                As you spend more in the royal court, you'll progress through various tiers,
                each with increasing prestige and benefits. Higher tiers unlock more powerful
                mockery actions and special privileges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {Object.entries(mockeryTierLabels).map(([key, label]) => (
                  <div key={key} className="p-3 bg-black/20 rounded-lg">
                    <h4 className="font-semibold">{label} Tier</h4>
                    <p className="text-sm">
                      {key === 'basic' && 'Entry level tier with basic mockery capabilities.'}
                      {key === 'premium' && 'Enhanced tier with more mockery actions and better leaderboard visibility.'}
                      {key === 'royal' && 'Elite tier with exclusive mockery actions and premium features.'}
                      {key === 'founder' && 'Exclusive tier for the earliest supporters with unique benefits.'}
                      {key === 'legendary' && 'The highest tier with ultimate mockery powers and royal status.'}
                      {!['basic', 'premium', 'royal', 'founder', 'legendary'].includes(key) && 'A specialized tier with unique benefits.'}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RoyalEncyclopedia;
