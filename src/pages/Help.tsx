
import React from 'react';
import { Shell } from '@/utils/componentImports';
import RoyalEncyclopedia from '@/components/help/RoyalEncyclopedia';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-8">SpendThrone Help Center</h1>
        
        <Tabs defaultValue="encyclopedia" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="encyclopedia">Royal Encyclopedia</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
          </TabsList>
          
          <TabsContent value="encyclopedia">
            <RoyalEncyclopedia />
          </TabsContent>
          
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Common questions about SpendThrone and royal mockery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is SpendThrone?</AccordionTrigger>
                    <AccordionContent>
                      SpendThrone is a satirical platform that gamifies spending and status. 
                      It's designed as a tongue-in-cheek commentary on consumption culture, allowing users 
                      to compete for status through their spending habits.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I rise in rank?</AccordionTrigger>
                    <AccordionContent>
                      Your rank is determined by your total amount spent on the platform. 
                      The more you spend, the higher your rank will become. You can also receive temporary 
                      rank boosts through profile boosts.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What are Mockery Actions?</AccordionTrigger>
                    <AccordionContent>
                      Mockery Actions allow you to publicly shame other users on the platform. 
                      Different actions have different costs and effects. They're a core part of the 
                      SpendThrone experience and represent the social competition aspect.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What are Teams?</AccordionTrigger>
                    <AccordionContent>
                      Teams are factions you can join within SpendThrone. Each team has its own 
                      leaderboard, benefits, and community. Teams compete against each other for 
                      dominance on the global leaderboard.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I get Certificates?</AccordionTrigger>
                    <AccordionContent>
                      Certificates are awarded for reaching certain spending milestones, achieving 
                      high ranks, or participating in special events. They serve as proof of your 
                      status and achievements on the platform.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle>Guides & Tutorials</CardTitle>
                <CardDescription>
                  Learn how to make the most of your royal experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-black/20">
                    <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                    <p className="text-white/70 mb-4">
                      Your first steps into the royal court of SpendThrone
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Setting up your royal profile</li>
                      <li>Understanding the leaderboard</li>
                      <li>Making your first mockery</li>
                      <li>Joining a team</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-black/20">
                    <h3 className="text-xl font-semibold mb-2">Advanced Mockery</h3>
                    <p className="text-white/70 mb-4">
                      Master the art of publicly shaming your rivals
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Strategic mockery timing</li>
                      <li>Combining mockery actions</li>
                      <li>Defending against mockery</li>
                      <li>Team mockery tactics</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-black/20">
                    <h3 className="text-xl font-semibold mb-2">Team Strategies</h3>
                    <p className="text-white/70 mb-4">
                      Maximize your team's performance and benefits
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Coordinating with team members</li>
                      <li>Team-specific advantages</li>
                      <li>Inter-team rivalries</li>
                      <li>Team events participation</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-black/20">
                    <h3 className="text-xl font-semibold mb-2">Royal Customization</h3>
                    <p className="text-white/70 mb-4">
                      Stand out in the royal court with unique customizations
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Unlocking premium cosmetics</li>
                      <li>Profile aesthetic themes</li>
                      <li>Royal titles and badges</li>
                      <li>Certificate customization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default Help;
