
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { QuestionCircle, Info, Crown, Coins, Shield, Bell, Calendar, Search, Users, Gem } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from '@/components/layouts/Layout';
import RoyalDivider from '@/components/ui/royal-divider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import RoyalDecoration from '@/components/ui/royal-decoration';
import MedievalIcon from '@/components/ui/medieval-icon';

const FAQ = () => {
  return (
    <Layout
      title="Royal Archives FAQ"
      description="Answers to the most pressing questions about SpendThrone, the pay-to-win social experiment."
      fullHeight
    >
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-10">
          <div className="inline-flex mb-4">
            <MedievalIcon name="scroll" size="lg" color="gold" className="animate-crown-glow" />
          </div>
          <h1 className="text-4xl font-bold royal-gradient mb-3 font-royal">Royal Archives: FAQ</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Answers to the most pressing questions about our satirical kingdom
          </p>
        </div>
        
        <RoyalDivider variant="ornate" className="mb-10" />
        
        <div className="space-y-8">
          <Card className="glass-morphism border-white/10 p-6">
            <h2 className="text-2xl font-royal text-royal-gold mb-4 flex items-center">
              <Search className="mr-2 h-5 w-5" />
              About SpendThrone
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="what-is-spendthrone" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  What exactly is SpendThrone?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  SpendThrone is a satirical social experiment that parodies pay-to-win mechanics and society's obsession with wealth as a status symbol. On our platform, your ranking is determined solely by how much money you spend. We're a commentary on conspicuous consumption and digital status, presented with royal theming because, well, what better metaphor for arbitrary privilege than monarchy?
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="is-this-real" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  Wait, do people actually pay real money for this?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Yes! And that's the point. People pay real money for entirely digital, ultimately meaningless status symbols all the time. We're just more honest about it. Whether it's designer NFTs, virtual goods in games, or a blue checkmark, humans love spending money to feel special online. We're just cutting out the middleman and saying "pay us directly to be ranked higher than others."
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="is-this-a-joke" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  Is this all just an elaborate joke?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  It's satire, which means it's a joke with a point. We're creating a mirror that reflects the absurdity of how we assign value and status in society. When someone pays thousands for a digital item or a designer bag primarily for status, how different is that from just paying directly for a rank? Not very, we'd argue. The joke is on all of us, really.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          
          <Card className="glass-morphism border-white/10 p-6">
            <h2 className="text-2xl font-royal text-royal-gold mb-4 flex items-center">
              <Coins className="mr-2 h-5 w-5" />
              Money & Rankings
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how-rankings-work" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  How exactly do the rankings work?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  It's beautifully simple: $1 = 1 point on the leaderboard. Spend more, rank higher. This is the most honest status system ever created. No pretending that skill, talent, looks, charm, or any other quality matters. Just cold, hard cash—much like many aspects of actual society, but without the polite fiction that money isn't the deciding factor.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="money-refund" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  Can I get a refund if I change my mind?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  No. All payments are final and non-refundable. Consider this another layer of our satire: you're literally paying for nothing but a number next to your name, and once it's gone, it's gone. Just like when you buy that $14 cocktail that's mostly ice, that $200 dinner that's forgotten by morning, or that subscription service you barely use.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="what-do-i-get" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  But what do I actually GET for my money?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  A higher rank, profile customization options depending on your spending tier, and the ability to participate in exclusive features like team competitions and events. But in the larger sense, you get exactly what people get from most status purchases: the satisfaction of seeing a number go up and knowing others can see it too. It's essentially the distilled essence of social media clout and consumer status anxiety, bottled for your convenience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          
          <Card className="glass-morphism border-white/10 p-6">
            <h2 className="text-2xl font-royal text-royal-gold mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Teams & Social Features
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="team-explanation" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  What are the RGB Teams about?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Our RGB Teams (Red, Green, and Blue) allow you to join a collective identity while still celebrating individual wealth. It's our satirical take on how humans love to form tribal groups even within status hierarchies. Team rankings are simply the combined spending of all members, adding a cooperative element to our otherwise individualistic status race. Choose based on your favorite color, your mood, or whichever team is winning—just like people often pick sports teams!
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="mockery-systems" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  How does the Mockery system work?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  For a small fee (because everything here costs money, that's the point), you can temporarily "shame" other users with visual effects like tomato splats, rotten eggs, or placing them in stocks. It's our satirical take on how status systems always include mechanisms for public shaming and ridicule. These effects are purely cosmetic and temporary, lasting 24 hours, because even our mockery isn't free from capitalism.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="events-explanation" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  What are the Weekly Events?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Weekly events add temporary twists to our core mechanics and give you even more ways to spend money! Events like "Poke Party" let you pay to temporarily drop another user down in rank. These events parody how real-world status systems constantly invent new rules and expectations to keep participants engaged and spending. It's FOMO (Fear Of Missing Out) distilled into a feature.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          
          <Card className="glass-morphism border-white/10 p-6">
            <h2 className="text-2xl font-royal text-royal-gold mb-4 flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Privacy & Security
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="privacy-question" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  How is my personal information protected?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  We take privacy seriously, even in our satire. We collect only the information necessary to run the platform, and all payments are processed through secure third-party providers. We never store your full payment details. For complete information, please see our <Link to="/privacy" className="text-royal-gold hover:underline">Privacy Policy</Link>.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="is-this-legit" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  Is this site legitimate/legal?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Yes! SpendThrone is a legitimate satirical art project and social experiment. We operate transparently, with clear terms of service and privacy policies. Our satirical nature is explicitly stated throughout the site. We comply with all relevant laws regarding online commerce, data privacy, and content moderation. Remember though, all payments are non-refundable as clearly stated in our <Link to="/terms" className="text-royal-gold hover:underline">Terms of Service</Link>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          
          <Card className="glass-morphism border-white/10 p-6">
            <h2 className="text-2xl font-royal text-royal-gold mb-4 flex items-center">
              <Gem className="mr-2 h-5 w-5" />
              Philosophy & Purpose
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="what-is-point" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  What's the actual point of all this?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  The point is to make visible what is often invisible: the direct relationship between money and status in modern society. By creating a system where status is explicitly and solely tied to spending, we highlight how many real-world status systems function similarly but less honestly. It's satire that asks: If you'd pay for a rank here, what other meaningless status symbols are you paying for elsewhere? And why?
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="charity-question" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  Does any of this money go to charity?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  A portion of the prize pool is satirically allocated to "charity" as part of our commentary on how the wealthy often use charitable giving as another status symbol. In reality, we do donate a percentage of profits to organizations addressing wealth inequality and providing essential services to those in need. We just don't think charity should be a status-enhancing performance, which is why we don't emphasize it in our royal branding.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="creator-question" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-royal-gold">
                  Who created SpendThrone and why?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  SpendThrone was created by a small team of developers, artists, and social commentators who became fascinated with how digital status works in the age of social media, NFTs, and virtual goods. We were inspired by examining the increasingly blurry line between satire and reality in how people spend money online. Our goal is to create a mirror that's amusing to look into but also reveals uncomfortable truths about value, worth, and status in the digital age.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
        
        <div className="text-center mt-10 text-white/50 text-sm">
          <p>
            Have more questions? Contact the Royal Court at <span className="text-royal-gold">help@spendthrone.com</span>
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button variant="outline" asChild>
              <Link to="/terms" className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                <span>Terms of Service</span>
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/privacy" className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                <span>Privacy Policy</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
