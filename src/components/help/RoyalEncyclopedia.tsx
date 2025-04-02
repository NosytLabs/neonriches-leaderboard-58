
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockeryTierLabel } from '@/utils/mockeryActionUtils';
import { getMockeryTierLabel } from './mockeryHelpers';

export const RoyalEncyclopedia: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Royal Encyclopedia</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tiers">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="tiers">Tiers</TabsTrigger>
            <TabsTrigger value="mockery">Mockery</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tiers">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Royal Tiers</h3>
              <p className="text-white/70">
                Users in the kingdom are divided into tiers based on their spending and contributions.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-black/20 rounded-lg">
                  <h4 className="font-medium">Common Tier</h4>
                  <p className="text-sm text-white/70">Basic privileges in the kingdom.</p>
                </div>
                <div className="p-3 bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-400">Uncommon Tier</h4>
                  <p className="text-sm text-white/70">Enhanced privileges with minor cosmetic bonuses.</p>
                </div>
                <div className="p-3 bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-400">Rare Tier</h4>
                  <p className="text-sm text-white/70">Special privileges with unique cosmetic options.</p>
                </div>
                <div className="p-3 bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-400">Epic Tier</h4>
                  <p className="text-sm text-white/70">Elite privileges with exclusive mockery options.</p>
                </div>
                <div className="p-3 bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-400">Legendary Tier</h4>
                  <p className="text-sm text-white/70">Highest privileges with all features unlocked.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mockery">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Royal Mockery</h3>
              <p className="text-white/70">
                Mockery is a playful feature allowing nobles to tease each other.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-black/20 rounded-lg">
                  <h4 className="font-medium">Tomato Throw</h4>
                  <p className="text-sm text-white/70">Throw a tomato at a user, marking them for 24 hours.</p>
                </div>
                <div className="p-3 bg-black/20 rounded-lg">
                  <h4 className="font-medium">Egg Throw</h4>
                  <p className="text-sm text-white/70">Throw an egg at a user, marking them for 48 hours.</p>
                </div>
                <div className="p-3 bg-black/20 rounded-lg">
                  <h4 className="font-medium">Royal Taunt</h4>
                  <p className="text-sm text-white/70">Send a royal taunt message to a user.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="teams">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Kingdom Teams</h3>
              <p className="text-white/70">
                Users can join teams to compete for collective glory.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-red-900/20 rounded-lg">
                  <h4 className="font-medium text-red-400">Red Team</h4>
                  <p className="text-sm text-white/70">The passionate and aggressive team.</p>
                </div>
                <div className="p-3 bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-400">Blue Team</h4>
                  <p className="text-sm text-white/70">The calm and strategic team.</p>
                </div>
                <div className="p-3 bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-400">Green Team</h4>
                  <p className="text-sm text-white/70">The growth-focused and ambitious team.</p>
                </div>
                <div className="p-3 bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium text-yellow-400">Gold Team</h4>
                  <p className="text-sm text-white/70">The wealthy and prestigious team.</p>
                </div>
                <div className="p-3 bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-400">Purple Team</h4>
                  <p className="text-sm text-white/70">The creative and royal team.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RoyalEncyclopedia;
