
import React from 'react';
import { Link } from 'react-router-dom';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown, Scroll, Coins, Shield, AlertTriangle, ArrowRight, FileText, Sparkles } from 'lucide-react';
import MedievalFrame from '@/components/ui/medieval-frame';
import { generateRandomAbsurdFact } from '@/utils/absurdityGenerator';
import usePageTracking from '@/hooks/usePageTracking';
import { Button } from '@/components/ui/button';
import RoyalButton from '@/components/ui/royal-button';

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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 royal-gradient">
              The Royal Manifesto of SpendThrone
            </h1>
            <p className="text-xl text-white/70 italic mb-6">
              A Brazenly Honest Declaration of Our Kingdom's Intentions
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/throne-assets/royal-seal.svg" 
                  alt="Royal Seal" 
                  className="w-32 h-32 animate-slow-spin" 
                />
                <div className="absolute top-12 right-7 text-2xl animate-wink">😉</div>
              </div>
            </div>
          </div>
          
          <RoyalDivider variant="crown" label="OUR MISSION" color="gold" />
          
          <div className="mt-12 mb-16">
            <MedievalFrame variant="royal" seal>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 royal-gradient text-center">The Satirical Vision of SpendThrone</h2>
                <p className="text-lg mb-5 leading-relaxed">
                  SpendThrone is a persistent, ranked leaderboard that fearlessly explores the dynamics of wealth and competition. Users ascend through the ranks, their position determined solely by their monetary contributions. It is a social experiment, a mirror reflecting the extremes of ambition and the allure of digital prestige.
                </p>
                <p className="text-lg mb-5 leading-relaxed">
                  Our platform embraces the "pay-to-win" concept with a self-aware, medieval-themed twist. We've created a transparent system where your rank is determined solely by how much money you spend - $1 spent equals 1 unit of rank.
                </p>
                <p className="text-lg leading-relaxed">
                  This audacious take on digital status serves as both entertainment and a mirror reflecting our complex relationship with wealth, competition, and online prestige in the most satirical and edgy way possible.
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
                  SpendThrone began as a thought experiment about the mechanics of online status. We noticed how many digital platforms implicitly equate status with spending power, while pretending otherwise.
                </p>
                <p>
                  We thought, "What if we just made the relationship between money and status explicit?" Like a medieval lord openly purchasing his title rather than claiming divine right - at least we're honest about it.
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
                    <span><strong>Radical Transparency:</strong> Your rank = your spending. No algorithms or hidden mechanics.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Satirical Self-Awareness:</strong> We embrace the absurdity of paying for digital status while poking fun at the entire concept.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Equal Opportunity Status:</strong> Anyone with money can climb our digital feudal system. Democracy of the wallet!</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Medieval Mockery:</strong> Our aesthetic and features draw from medieval status symbols to emphasize how little has changed.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <RoyalDivider variant="treasure" label="OUR APPROACH" color="gold" className="mb-12" />
          
          <div className="glass-morphism border-royal-gold/30 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4 royal-gradient text-center">
              The Coin-Operated Kingdom
            </h2>
            <h3 className="text-lg text-center text-white/70 italic mb-6">
              (Pay-to-Win Without The Pretense)
            </h3>
            
            <p className="mb-6">
              Each dollar spent equals one rank point. Think of it as tossing gold coins into our digital treasury for status. We'll deck you out with visual flair so everyone knows your spending level – like a medieval lord with an increasingly ornate hat.
            </p>
            
            <p className="mb-6">
              Join noble houses (teams) and collectively outspend rival factions for ultimate bragging rights. Our top-ranked users serve as the ultimate evidence of the relationship between digital status and spending.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg">
                <Coins className="h-10 w-10 text-royal-gold mb-2" />
                <span className="text-sm font-medium">$1 = 1 Rank Point</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg">
                <Crown className="h-10 w-10 text-royal-gold mb-2" />
                <span className="text-sm font-medium">Visual Status Symbols</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-black/20 rounded-lg">
                <Shield className="h-10 w-10 text-royal-gold mb-2" />
                <span className="text-sm font-medium">Team Competition</span>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-royal-crimson/30 p-6 rounded-lg mb-16">
            <div className="flex items-start">
              <AlertTriangle className="text-royal-crimson mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Royal Disclaimer: The "Please Don't Spend Your Rent Money" Notice</h3>
                <p className="mb-4">
                  SpendThrone is satire, folks. We're examining the relationship between money and digital status by making explicit what many platforms do implicitly. This isn't financial advice, and we're not responsible for your ramen noodle diet if you spend unwisely.
                </p>
                <p className="mb-4">
                  For the real, boring (but important) rules, check out our{" "}
                  <Link to="/terms" className="text-royal-gold hover:underline">
                    Terms of Service
                  </Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-royal-gold hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          
          <RoyalDivider variant="quill" label="HISTORICAL CONTEXT" color="gold" className="mb-12" />
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Status Economics Through History</h2>
            <p className="max-w-2xl mx-auto">
              The relationship between wealth and status is nothing new - from Roman patricians to Renaissance merchants to modern digital platforms, money has always bought influence and recognition.
            </p>
            <div className="mt-6">
              <Link to="/status-through-history" className="inline-flex items-center text-royal-gold hover:underline">
                <span>Explore Status Through History</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="glass-morphism border-royal-gold/20 p-8 rounded-lg mb-16 text-center">
            <h2 className="text-2xl font-bold mb-4 royal-gradient">Ready to Claim Your Place in the Hierarchy?</h2>
            <p className="text-xl italic mb-8">
              Free platforms where everyone pretends status is earned through "merit"? Please.<br />
              An honest one where spending equals status? At least we're transparent.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
              <Link to="/signup">
                <RoyalButton 
                  variant="royalGold" 
                  size="lg" 
                  className="px-8 py-6 text-lg font-bold"
                  icon={<Crown className="w-5 h-5" />}
                >
                  Claim Your Throne
                </RoyalButton>
              </Link>
              
              <Link to="/leaderboard">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-royal-gold/50 hover:bg-royal-gold/10 px-8 py-6 text-lg"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  View the Nobility
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <Link to="/privacy" className="flex items-center text-white/60 hover:text-white/80 transition-colors">
              <FileText className="mr-2 h-4 w-4" />
              Privacy Policy
            </Link>
            
            <div className="text-white/60 text-sm">
              <span className="text-royal-gold">⚜️</span> SpendThrone © {new Date().getFullYear()}
            </div>
            
            <Link to="/terms" className="flex items-center text-white/60 hover:text-white/80 transition-colors">
              <FileText className="mr-2 h-4 w-4" />
              Terms of Service
            </Link>
          </div>
          
          <div className="text-center mt-16">
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
