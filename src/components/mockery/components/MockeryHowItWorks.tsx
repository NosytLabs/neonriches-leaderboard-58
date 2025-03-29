
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MOCKERY_DESCRIPTIONS, MOCKERY_NAMES, MOCKERY_COSTS } from '@/utils/mockeryUtils';
import { Button } from '@/components/ui/button';
import { Bomb, Flame, Egg, User, Crown, Lock, Cloud } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const MockeryHowItWorks = () => {
  return (
    <Card className="glass-morphism border-royal-purple/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Flame className="mr-2 h-5 w-5 text-royal-crimson" />
          Royal Mockery Festival: How It Works
        </CardTitle>
        <CardDescription>
          A satirical take on digital status that adds purely cosmetic effects to user profiles
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="p-4 glass-morphism border-white/10 rounded-lg space-y-4">
          <h3 className="font-medium text-lg">What is the Royal Mockery Festival?</h3>
          <p className="text-white/70">
            The Royal Mockery Festival is a satirical feature that lets you apply purely visual effects to other users' profiles. 
            These effects are entirely cosmetic and have <strong>no impact on leaderboard rankings or functionality</strong>. 
            It's simply a fun way to engage with the medieval theme of our digital status economy.
          </p>
          
          <div className="mt-4 p-3 bg-royal-crimson/10 border border-royal-crimson/20 rounded-md">
            <p className="text-sm flex items-start">
              <Flame className="h-4 w-4 text-royal-crimson mr-2 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Important:</strong> Mockery effects are purely visual and satirical. They do not affect a user's rank, abilities, or status in any way. They're designed as a lighthearted take on digital status.
              </span>
            </p>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="mockery-types">
            <AccordionTrigger className="text-md font-medium">Available Mockery Effects</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="glass-morphism border-royal-crimson/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Flame className="h-5 w-5 text-royal-crimson mr-2" />
                    <h4 className="font-medium">{MOCKERY_NAMES.tomatoes}</h4>
                    <Badge className="ml-auto">${MOCKERY_COSTS.tomatoes}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.tomatoes}</p>
                  <div className="mt-3 text-xs text-white/60 italic">
                    Example: "Lady Elizabeth pelted Sir William with rotten tomatoes after his boastful tournament display."
                  </div>
                </div>
                
                <div className="glass-morphism border-royal-gold/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Egg className="h-5 w-5 text-royal-gold mr-2" />
                    <h4 className="font-medium">{MOCKERY_NAMES.putridEggs}</h4>
                    <Badge className="ml-auto">${MOCKERY_COSTS.putridEggs}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.putridEggs}</p>
                  <div className="mt-3 text-xs text-white/60 italic">
                    Example: "The townspeople hurled putrid eggs at the tax collector as he made his unwelcome rounds."
                  </div>
                </div>
                
                <div className="glass-morphism border-royal-navy/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Lock className="h-5 w-5 text-royal-navy mr-2" />
                    <h4 className="font-medium">{MOCKERY_NAMES.stocks}</h4>
                    <Badge className="ml-auto">${MOCKERY_COSTS.stocks}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.stocks}</p>
                  <div className="mt-3 text-xs text-white/60 italic">
                    Example: "The baker was placed in the stocks for three days after selling underweight bread."
                  </div>
                </div>
                
                <div className="glass-morphism border-royal-purple/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <User className="h-5 w-5 text-royal-purple mr-2" />
                    <h4 className="font-medium">{MOCKERY_NAMES.silence}</h4>
                    <Badge className="ml-auto">${MOCKERY_COSTS.silence}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.silence}</p>
                  <div className="mt-3 text-xs text-white/60 italic">
                    Example: "The jester was silenced for a fortnight after his jokes offended the visiting dignitary."
                  </div>
                </div>
                
                <div className="glass-morphism border-royal-gold/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Crown className="h-5 w-5 text-royal-gold mr-2" />
                    <h4 className="font-medium">{MOCKERY_NAMES.courtJester}</h4>
                    <Badge className="ml-auto">${MOCKERY_COSTS.courtJester}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.courtJester}</p>
                  <div className="mt-3 text-xs text-white/60 italic">
                    Example: "After his failed attempt to impress the princess, Lord Reginald was appointed Court Jester for a week."
                  </div>
                </div>
                
                <div className="glass-morphism border-royal-gold/40 rounded-lg p-4 shadow-gold">
                  <div className="flex items-center mb-2">
                    <Cloud className="h-5 w-5 text-gray-400 mr-2" />
                    <h4 className="font-medium">{MOCKERY_NAMES.smokeBomb}</h4>
                    <Badge className="ml-auto bg-royal-gold text-black">NEW!</Badge>
                    <Badge className="ml-2">${MOCKERY_COSTS.smokeBomb}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{MOCKERY_DESCRIPTIONS.smokeBomb}</p>
                  <div className="mt-3 text-xs text-white/60 italic">
                    Example: "When the rival merchants were about to expose his low quality wares, Geoffrey deployed a smoke bomb and disappeared into the crowd."
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="protection">
            <AccordionTrigger className="text-md font-medium">Royal Protection</AccordionTrigger>
            <AccordionContent>
              <div className="p-4 glass-morphism border-royal-purple/20 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <Crown className="h-5 w-5 text-royal-purple mr-2" />
                  Royal Protection
                </h4>
                <p className="text-white/70 mb-4">
                  Purchase Royal Protection to shield yourself from mockery effects for 7 days. No one will be able to apply mockery effects to your profile while protected.
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="bg-royal-purple/20 text-royal-purple border-royal-purple/30">
                    ${MOCKERY_COSTS.protection} for 7 days
                  </Badge>
                  <Button variant="outline" size="sm" className="border-royal-purple text-royal-purple hover:bg-royal-purple/20">
                    Purchase Protection
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="examples">
            <AccordionTrigger className="text-md font-medium">Real-World Examples</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="p-4 glass-morphism border-white/10 rounded-lg">
                  <h4 className="font-medium mb-2">Corporate Roasting</h4>
                  <p className="text-white/70">
                    The marketing team at BigCorp uses the Royal Mockery Festival to playfully roast their sales team after losing a major deal. The VP of Sales proudly wears the "Court Jester" effect for a week, showing good humor about the situation.
                  </p>
                </div>
                
                <div className="p-4 glass-morphism border-white/10 rounded-lg">
                  <h4 className="font-medium mb-2">Friendly Competition</h4>
                  <p className="text-white/70">
                    Two friends who are competing for the top spot on the leaderboard use mockery effects to taunt each other. When one surpasses the other, they apply the "Tomatoes" effect to their friend's profile. It becomes a running joke within their social circle.
                  </p>
                </div>
                
                <div className="p-4 glass-morphism border-white/10 rounded-lg">
                  <h4 className="font-medium mb-2">Team Building</h4>
                  <p className="text-white/70">
                    A team uses the "Smoke Bomb" effect on their manager's profile on his birthday, making it a fun surprise that gives everyone a laugh when they visit his profile page throughout the day.
                  </p>
                </div>
                
                <div className="p-4 glass-morphism border-white/10 rounded-lg">
                  <h4 className="font-medium mb-2">Charity Fundraising</h4>
                  <p className="text-white/70">
                    A community organizer agrees to have the "Stocks" effect applied to their profile if a charity fundraising goal is met, motivating more donations. When the goal is reached, everyone enjoys seeing the organizer in the stocks, knowing it supported a good cause.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="faq">
            <AccordionTrigger className="text-md font-medium">Frequently Asked Questions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="border-b border-white/10 pb-3">
                  <h4 className="font-medium mb-1">Does mockery affect my ranking?</h4>
                  <p className="text-white/70 text-sm">
                    No, mockery effects are purely visual and have absolutely no impact on your leaderboard ranking, team status, or any functional aspect of the platform.
                  </p>
                </div>
                
                <div className="border-b border-white/10 pb-3">
                  <h4 className="font-medium mb-1">How long do mockery effects last?</h4>
                  <p className="text-white/70 text-sm">
                    Effects last for different durations based on the type: Tomatoes (24h), Putrid Eggs (48h), Stocks (72h), Silence (48h), Court Jester (7 days), and Smoke Bomb (8h).
                  </p>
                </div>
                
                <div className="border-b border-white/10 pb-3">
                  <h4 className="font-medium mb-1">Can I remove mockery effects from my profile?</h4>
                  <p className="text-white/70 text-sm">
                    Yes, you can purchase "Removal" to immediately clear any mockery effects from your profile, or you can wait for them to expire naturally.
                  </p>
                </div>
                
                <div className="border-b border-white/10 pb-3">
                  <h4 className="font-medium mb-1">What is the Smoke Bomb effect?</h4>
                  <p className="text-white/70 text-sm">
                    The Smoke Bomb is our premium mockery effect that completely covers the target's profile in thick smoke for 8 hours. Visitors can still access the profile but must peer through the fog to see it. It's purely visual and doesn't prevent any functionality.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Can I mock the same person repeatedly?</h4>
                  <p className="text-white/70 text-sm">
                    There are cooldown periods between mockery actions to prevent spam. You'll need to wait for the cooldown to expire before mocking the same person again.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="flex justify-center">
          <Button variant="default" className="bg-royal-purple hover:bg-royal-purple/90">
            <Bomb className="mr-2 h-4 w-4" />
            Visit the Royal Mockery Festival
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryHowItWorks;
