
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
              A Brazenly Honest Declaration of Our Kingdom's Intentions (Yeah, We're Talking to You)
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
                <h2 className="text-3xl font-bold mb-6 royal-gradient text-center">The Vision of SpendThrone</h2>
                <p className="text-lg mb-5 leading-relaxed">
                  To create the world's most transparent status hierarchy where wealth directly equals rank, with zero pretense about "merit" or "contribution." Come on, you know online status often boils down to who's spending the most anyway. SpendThrone just makes it hilariously obvious. See who's really calling the shots (with their wallets!)
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
                  SpendThrone began as a thought experiment, kind of like when you realize everyone's doing something but pretending they're not. We thought, "What if we just made it the point to buy status?"
                </p>
                <p>
                  Like a medieval lord upgrading his armor with gold – except here, your credit card is your royal decree. Welcome to the digital aristocracy where we're at least honest about what's for sale.
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
                    <span><strong>Radical Transparency:</strong> Your rank = your spending. No sneaky algorithms here.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Glorious Absurdity:</strong> We fully embrace the delightful ridiculousness of paying for online bragging rights.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Equal Opportunity:</strong> Anyone with the coin can climb our digital feudal system.</span>
                  </li>
                  <li className="flex">
                    <span className="text-royal-gold mr-2">⚜️</span>
                    <span><strong>Team Rivalry:</strong> Because humans love a good drama (and spending more to win).</span>
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
              (It's Simpler Than Understanding Crypto, Promise)
            </h3>
            
            <p className="mb-6">
              Each shilling spent equals one rank point. Think of it as tossing a coin into our virtual wishing well for status. We'll deck you out with visual flair so everyone knows your spending level – like a medieval lord with a really, really big hat.
            </p>
            
            <p className="mb-6">
              Join noble houses (your online crew) and collectively outspend the competition for ultimate bragging rights. Think of our top-ranked users as the ultimate endorsements – their digital spending speaks volumes (literally!).
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
                <h3 className="text-xl font-bold mb-2">Royal Disclaimer: The "Seriously Though, Don't Empty Your Piggy Bank" Legal Nudge</h3>
                <p className="mb-4">
                  SpendThrone is satire, folks. We're holding a mirror up to the internet's obsession with status and the role of money. This isn't financial advice, so please don't sell your actual kingdom for a digital one. We're not responsible for your instant noodle habit.
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
                  . Seriously, give 'em a peek.
                </p>
              </div>
            </div>
          </div>
          
          <RoyalDivider variant="quill" label="THE ROYAL COURT" color="gold" className="mb-12" />
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">The Minds Behind The Throne (Just Like You, Probably)</h2>
            <div className="max-w-2xl mx-auto glass-morphism border-royal-gold/20 p-6 rounded-lg">
              <p className="text-lg mb-6">
                We built SpendThrone as both entertainment and a bit of social commentary. We're just a bunch of internet folks who noticed the emperor had no clothes (or maybe just a really expensive skin).
              </p>
              <p className="italic">
                "We thought, 'Why not point it out and maybe collect a few shillings along the way?' Consider us the medieval jesters of the digital age."
              </p>
              <p className="mt-4 text-right text-royal-gold">— The Royal Chroniclers</p>
            </div>
          </div>
          
          <div className="glass-morphism border-royal-gold/20 p-8 rounded-lg mb-16 text-center">
            <h2 className="text-2xl font-bold mb-4 royal-gradient">One Last Thought (You Know You're Intrigued):</h2>
            <p className="text-xl italic mb-8">
              Free social network where everyone pretends status is earned? Cute.<br />
              Honest one where spending equals status? What are you waiting for?
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
