import React from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown, Scroll, Coins, Star, Shield, AlertTriangle } from 'lucide-react';
import MedievalFrame from '@/components/ui/medieval-frame';
import { generateRandomAbsurdFact } from '@/utils/absurdityGenerator';
import usePageTracking from '@/hooks/usePageTracking';

const About = () => {
  usePageTracking();
  const randomFact = generateRandomAbsurdFact();
  
  return (
    <Shell>
      <PageSEO 
        title="The Royal Manifesto - Our Absurd Mission" 
        description="Discover the satirical ethos behind SpendThrone - the digital kingdom where status is purchased, nobility is for sale, and your wallet determines your worth."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 royal-gradient text-center">
            The Royal Manifesto
          </h1>
          <p className="text-xl text-white/70 text-center mb-8">
            A brazenly honest declaration of our kingdom's intentions
          </p>
          
          <RoyalDivider variant="crown" label="OUR MISSION" color="gold" />
          
          <div className="mt-12 mb-16">
            <MedievalFrame variant="royal" seal>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 royal-gradient">The Vision of SpendThrone</h2>
                <p className="text-xl mb-8 leading-relaxed">
                  To create the world's most transparent status hierarchy where wealth directly equals rank, 
                  with zero pretense about "merit" or "contribution."
                </p>
                <p className="italic text-white/80">
                  "In a world obsessed with purchasing status while pretending not to, 
                  we remove the charade and embrace the absurdity."
                </p>
              </div>
            </MedievalFrame>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Crown className="mr-2 text-royal-gold" />
                Our Noble Origins
              </h2>
              <div className="glass-morphism p-6 rounded-lg h-full">
                <p className="mb-4">
                  SpendThrone began as a satirical thought experiment: What if we created a social platform where 
                  people could simply <em>buy</em> their status, rather than pretending various subscription models, 
                  luxury goods, and conspicuous consumption weren't already doing exactly that?
                </p>
                <p>
                  We quickly realized that by making the transaction explicit rather than implicit, we'd created 
                  the most honest social network in history. Welcome to the digital aristocracy, where at least 
                  we admit what we're selling.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Scroll className="mr-2 text-royal-gold" />
                Our Core Values
              </h2>
              <div className="glass-morphism p-6 rounded-lg h-full">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Radical Transparency:</strong> Your rank is exactly equal to your spending. No hidden algorithms.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Glorious Absurdity:</strong> We embrace the inherent ridiculousness of spending money for digital status.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Equal Opportunity:</strong> Anyone can rise to nobility—it just depends on your credit limit.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Team Rivalry:</strong> Because tribalism makes spending even more compelling.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <RoyalDivider variant="treasure" label="OUR APPROACH" color="gold" className="mb-12" />
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass-morphism border-royal-gold/30 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  <Star className="h-8 w-8 text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">The Simple Exchange</h3>
              <p className="text-center text-white/70">
                Each dollar spent equals one point of rank. No complex formulas, no hidden modifiers. Pure, simple, and brazenly transparent.
              </p>
            </div>
            
            <div className="glass-morphism border-royal-gold/30 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  <Coins className="h-8 w-8 text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">The Visual Display</h3>
              <p className="text-center text-white/70">
                Cosmetics, effects, and visual distinctions ensure everyone knows exactly how much you've spent at a glance.
              </p>
            </div>
            
            <div className="glass-morphism border-royal-gold/30 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">The Team Rivalry</h3>
              <p className="text-center text-white/70">
                Join one of our noble houses and compete for collective glory, encouraging ever-more-enthusiastic spending.
              </p>
            </div>
          </div>
          
          <div className="glass-morphism border-royal-crimson/30 p-6 rounded-lg mb-16">
            <div className="flex items-start">
              <AlertTriangle className="text-royal-crimson mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Royal Disclaimer</h3>
                <p>
                  SpendThrone is a satirical social experiment exploring how wealth and spending behavior affect perceived status 
                  and social dynamics in digital spaces. We're holding a mirror to society's often-unspoken relationships 
                  with money, status, and the purchasing of social capital.
                </p>
                <p className="mt-4 italic">
                  Please spend responsibly. No refunds for buyer's remorse or existential crises.
                </p>
              </div>
            </div>
          </div>
          
          <RoyalDivider variant="quill" label="THE ROYAL COURT" color="gold" className="mb-12" />
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">The Minds Behind The Throne</h2>
            <div className="max-w-2xl mx-auto glass-morphism border-royal-gold/20 p-6 rounded-lg">
              <p className="italic">
                "We built SpendThrone as both entertainment and social commentary. If you find yourself 
                outraged by the concept, we invite you to consider why a transparent pay-for-status 
                system feels more offensive than the countless opaque ones we participate in daily."
              </p>
              <p className="mt-4 text-right text-royal-gold">— The Royal Chroniclers</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="glass-morphism border-white/10 py-6 px-8 rounded-lg inline-block">
              <h3 className="text-xl mb-4">Royal Absurdity Archives</h3>
              <p className="text-white/70 mb-6">A randomly selected fact from our royal historians:</p>
              <p className="italic text-lg text-royal-gold">{randomFact}</p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default About;
