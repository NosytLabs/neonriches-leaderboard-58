
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RouteExplanation from '@/components/docs/RouteExplanation';
import { Crown, DollarSign, Users, Trophy, ScrollText } from 'lucide-react';

const About = () => {
  return (
    <>
      <PageSEO
        title="About SpendThrone | The Satirical Status Game"
        description="Learn about SpendThrone - the satirical pay-to-win social experiment that explores status through spending."
        canonicalUrl="https://spendthrone.com/about"
      />
      
      <Container className="py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 royal-gradient">About SpendThrone</h1>
          <p className="text-xl text-white/80 mb-8">A satirical exploration of status through spending</p>
          
          <Tabs defaultValue="concept">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="concept">Concept</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="site-structure">Site Structure</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="concept">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                    The SpendThrone Concept
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    SpendThrone is a satirical social platform that explores the relationship between money and status through a simple premise: 
                    your rank is determined solely by how much you spend. $1 = 1 unit of rank, creating a transparent, if absurd, status hierarchy.
                  </p>
                  <p>
                    This digital social experiment serves as a mirror reflecting society's complex relationship with wealth, status, and consumption. 
                    By distilling status acquisition to its most nakedly transactional form, SpendThrone comments on how status is bought and sold in the modern world.
                  </p>
                  <p>
                    While the concept is satirical, the transactions are real - users actually spend money to increase their rank, making the stakes and 
                    psychology behind participation all the more fascinating.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-royal-gold" />
                      Dollar-Driven Rank
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The core mechanic: $1 spent equals 1 unit of rank. The leaderboard never resets, creating a persistent record of spending.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-royal-gold" />
                      Team Competition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Users can join teams to compete collectively, adding a layer of group identity and competition to individual spending.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
                      Profile Customization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Tiered profile customization options unlock with spending, from basic editing to animated effects and enhanced analytics.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ScrollText className="mr-2 h-5 w-5 text-royal-gold" />
                      Mockery System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>A playful feature allowing users to "mock" others, adding social dynamics and interaction beyond simple spending.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="site-structure">
              <RouteExplanation />
            </TabsContent>
            
            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">Is this for real?</h3>
                    <p className="text-white/80">
                      Yes and no. SpendThrone is a genuine platform where people spend real money to gain rank, but it's designed as satire - a commentary 
                      on status-seeking behavior and conspicuous consumption in modern society.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">What happens to the money I spend?</h3>
                    <p className="text-white/80">
                      Your money goes toward maintaining the platform, paying our development team, and server costs. A portion is also allocated 
                      to the team prize pools. See our Terms of Service for complete transparency.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">Can I get a refund?</h3>
                    <p className="text-white/80">
                      No. All payments to SpendThrone are final and non-refundable. The entire premise is that you're spending money purely for digital status, 
                      with full awareness of the absurdity of this transaction.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">Is this a game or a social network?</h3>
                    <p className="text-white/80">
                      It's a bit of both. SpendThrone has game-like elements (leaderboards, teams, ranks) but functions as a social platform where users 
                      interact, customize profiles, and participate in events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default About;
