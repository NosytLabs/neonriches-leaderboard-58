
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getMockeryTierColor, getMockeryTierLabel } from './mockeryHelpers';
import { MockeryTier } from '@/types/mockery';

const RoyalEncyclopedia = () => {
  // Map of valid MockeryTier values
  const mockeryTiers: MockeryTier[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Royal Encyclopedia</CardTitle>
        <CardDescription>
          A guide to the terms and concepts used throughout the SpendThrone realm
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] rounded-md pr-4">
          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-bold">Mockery Tiers</h2>
              <p className="text-sm text-white/70">
                Mockery tiers represent the rarity and potency of a mockery action.
              </p>
              <div className="space-y-3">
                {mockeryTiers.map((tier) => {
                  // Helper function to safely access properties from possibly nested objects
                  const safeAccess = (obj: any, property: string, defaultValue: any = '') => {
                    if (!obj) return defaultValue;
                    if (typeof obj === 'object' && property in obj) {
                      return obj[property];
                    }
                    return defaultValue;
                  };

                  // When using getMockeryTierColor, use safeAccess:
                  const tierColors = getMockeryTierColor(tier);
                  return (
                    <div 
                      key={tier}
                      className={`p-3 rounded-lg ${safeAccess(tierColors, 'bg', 'bg-gray-800/60')} ${safeAccess(tierColors, 'border', 'border-gray-600')} border`}
                    >
                      <span className={`font-semibold ${safeAccess(tierColors, 'text', 'text-white/80')}`}>
                        {getMockeryTierLabel(tier)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
            
            <section>
              <h2 className="text-lg font-bold">Spending Streaks</h2>
              <p className="text-sm text-white/70">
                A measure of consecutive weeks a noble has spent money in the kingdom.
              </p>
              <p className="text-sm text-white/50 italic">
                "Maintaining a streak shows dedication to the throne and earns favor."
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-bold">Royal Titles</h2>
              <p className="text-sm text-white/70">
                Titles bestowed upon nobles based on their actions and contributions.
              </p>
              <p className="text-sm text-white/50 italic">
                "A title reflects your standing and is purely cosmetic."
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RoyalEncyclopedia;
