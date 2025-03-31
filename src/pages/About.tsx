
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, Crown, Coins, Trophy, Shield, Users, Laugh } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>About SpendThrone | The Ultimate Pay-to-Win Experience</title>
        <meta name="description" content="Learn about SpendThrone, the satirical social experiment that reflects on status, wealth, and the extremes of pay-to-win dynamics." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold royal-gradient mb-4 font-medieval">About Our Feudal Kingdom</h1>
            <p className="text-xl text-white/80">
              Where your wallet determines your worth and mockery is an art form.
            </p>
          </div>

          <Card className="glass-morphism border-white/10 mb-10">
            <CardHeader>
              <CardTitle className="text-2xl font-medieval text-center">Our Royal Manifesto</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-lg">
                <span className="text-royal-gold font-semibold">SpendThrone</span> is a satirical social experiment that brazenly explores the relationship between wealth and status in the digital age.
              </p>
              
              <p>
                In our medieval-themed kingdom, we've stripped away the pretense found on other social platforms. While Instagram influencers subtly flaunt wealth for status, and Twitter blue-checks pay for verification, we've created a transparent hierarchy where your standing is determined solely by how much you're willing to spend.
              </p>
              
              <div className="my-6 p-4 bg-black/30 border border-white/10 rounded-lg italic">
                <p className="text-royal-gold">
                  "SpendThrone: Where we've gamified capitalism to its logical extreme, and we're completely self-aware about it."
                </p>
              </div>
              
              <p>
                Each dollar spent translates directly to one unit of rank on our persistent leaderboard. There are no resets, no seasonal competitions — just a permanent record of financial devotion to digital status.
              </p>
              
              <p>
                Is it absurd? Absolutely. Is it any more absurd than spending thousands on virtual items in games, buying digital real estate, or dropping millions on procedurally generated profile pictures? That's for you to decide.
              </p>
              
              <p>
                Consider us a mirror reflecting the often uncomfortable reality of how status is bought and sold online. We're just honest enough to admit it.
              </p>
            </CardContent>
          </Card>
          
          <Separator className="my-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass-morphism border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scroll className="mr-2 h-6 w-6 text-royal-gold" />
                    <span>The Royal Charter</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">SpendThrone was founded on three core principles:</p>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-royal-gold mr-2">•</span>
                      <span>Complete transparency in our status mechanics</span>
                    </li>
                    <li className="flex">
                      <span className="text-royal-gold mr-2">•</span>
                      <span>A satirical lens on digital status-seeking</span>
                    </li>
                    <li className="flex">
                      <span className="text-royal-gold mr-2">•</span>
                      <span>Self-aware absurdity in everything we do</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-white/70 italic">
                    We're not just another social network — we're performance art with a database.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass-morphism border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Crown className="mr-2 h-6 w-6 text-royal-gold" />
                    <span>The Noble Truth</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Let's be honest: status has always been purchasable, from medieval indulgences to modern-day influencer culture. We've simply removed the middleman.
                  </p>
                  <p className="mt-4">
                    Every dollar you spend here is a conscious choice to participate in our kingdom's economy of attention. We don't hide behind algorithmic complexity or pretend that engagement is merit-based.
                  </p>
                  <p className="mt-4 text-white/70 italic">
                    In the words of our royal treasurer: "At least we tell you exactly how much your digital ego will cost."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Coins className="mr-2 h-5 w-5 text-royal-gold" />
                  <span>$1 = 1 Rank</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Simple, transparent mechanics. Your position is determined solely by how much you've spent.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
                  <span>Eternal Glory</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Our leaderboard never resets. Your investment in digital prestige is permanent, or at least until the heat death of our servers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Shield className="mr-2 h-5 w-5 text-royal-gold" />
                  <span>Noble Houses</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Join one of three feudal factions and contribute to your house's standing in our perpetual power struggle.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-morphism border-white/10 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="mr-2 h-6 w-6 text-royal-gold" />
                <span>Meet the Court Jesters</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                SpendThrone was conceived by a group of tech industry veterans who became increasingly fascinated by the intersection of wealth, status, and digital identity.
              </p>
              <p className="mb-4">
                Having witnessed the evolution of social platforms from genuine connection tools to sophisticated status marketplaces, we decided to create the most honest social network possible — one that doesn't pretend your worth isn't tied to your wallet.
              </p>
              <p className="italic text-white/70">
                We're not saying it's right. We're just saying it's real.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Laugh className="mr-2 h-6 w-6 text-royal-gold" />
                <span>The Fine Print (With a Wink)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                While we maintain a satirical tone, we want to be crystal clear: SpendThrone is entertainment, not investment. The money you spend here purchases digital status only, with no expectation of financial return.
              </p>
              <p className="mb-4">
                We operate with full transparency about our mechanics and don't employ psychological tricks to extract your money — beyond appealing to the very human desire for status, which we're openly lampooning.
              </p>
              <p className="mb-4">
                If you find the concept disturbing, congratulations! That's part of the point. We're holding up a mirror to digital status-seeking, not necessarily endorsing it.
              </p>
              <p className="italic text-white/70">
                And if you're wondering if this is all an elaborate performance art piece or a genuinely profitable business model — it might just be both.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
