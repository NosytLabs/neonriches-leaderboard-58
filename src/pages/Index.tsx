
import React from 'react';
import { Shell } from '@/components/ui/shell';
import RoyalHero from '@/components/RoyalHero';
import HeroShowcase from '@/components/HeroShowcase';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trophy, DollarSign, Shield, Crown, ChevronRight, AlertTriangle } from 'lucide-react';
import { RoyalSection } from '@/components/ui/theme-components';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <Shell hideFooter={false}>
      <RoyalHero />
      
      <HeroShowcase />
      
      <RoyalSection
        title="The Noble's Path To Prestige"
        description="Follow these steps to establish thy dominance in our kingdom of monetary excess"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                <Crown className="h-7 w-7 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Create Thy Noble Identity</h3>
              <p className="text-white/70 mb-4">
                Register for an account and personalize thy coat of arms (profile) to establish thy presence in the court. No actual nobility required – just a functioning payment method!
              </p>
              <Link to="/signup">
                <Button variant="outline" className="border-white/20 hover:border-royal-gold/30">
                  <span>Establish Thy Lineage</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                <DollarSign className="h-7 w-7 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contribute To Thy Rank</h3>
              <p className="text-white/70 mb-4">
                Make "generous contributions" (completely frivolous payments) to increase thy standing in our aristocratic hierarchy. Remember: your worth is directly proportional to your expenditure!
              </p>
              <Link to="/pay/fiat">
                <Button variant="outline" className="border-white/20 hover:border-royal-gold/30">
                  <span>Fund Thy Noble Status</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="glass-morphism p-6 rounded-lg border border-white/10 hover:border-royal-gold/20 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join A Noble House</h3>
              <p className="text-white/70 mb-4">
                Pledge thy allegiance to House Red, Green, or Blue and compete for thy house's collective prestige. Just like political tribes, but with more honesty about the pay-to-win mechanics!
              </p>
              <Link to="/teams">
                <Button variant="outline" className="border-white/20 hover:border-royal-gold/30">
                  <span>Choose Thy Banner</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link to="/features">
            <Button variant="royal" size="lg" className="px-6">
              <Trophy className="mr-2 h-5 w-5" />
              <span>Explore All Noble Features</span>
            </Button>
          </Link>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <Card className="glass-morphism border-royal-gold/20 bg-gradient-to-r from-royal-gold/5 to-royal-purple/5">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="h-5 w-5 text-royal-gold mr-2" />
                <p className="text-royal-gold text-sm font-medium">ROYAL TREASURY NOTICE</p>
              </div>
              <p className="text-white/70 text-sm italic">
                All funds contributed to SpendThrone go directly to our developers' exotic coffee habits and mechanical keyboard collections. This is a social experiment, not a charity – though our developers' spouses might disagree when they see our office setup!
              </p>
            </CardContent>
          </Card>
        </div>
      </RoyalSection>
      
      <RoyalDivider variant="ornate" color="gold" />
      
      <RoyalSection
        title="Royal Testimonials"
        description="Hear from our distinguished nobles who have traded real currency for imaginary status"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-morphism border border-white/10 p-6 rounded-lg relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-royal-crimson flex items-center justify-center border-2 border-royal-crimson/50">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <p className="italic text-white/80 mb-4">
              "I've spent thousands on designer shoes that sit unworn in my closet, so why not spend a few hundred on completely virtual status? At least here I'm honest about my materialism! Plus, I can market my business through my profile, which almost makes it a legitimate business expense... almost."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src="/throne-assets/avatars/noble-1.jpg" alt="Noble testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold">Lady Goldencoin</div>
                <div className="text-royal-gold text-sm">#4 on Leaderboard</div>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border border-white/10 p-6 rounded-lg relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-royal-navy flex items-center justify-center border-2 border-royal-navy/50">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <p className="italic text-white/80 mb-4">
              "After years of trying to climb the corporate ladder through actual work and skill development, I discovered I could just buy my way to the top here! It's like nepotism but without needing to be related to anyone important. My marketing ROI from promoting on my high-ranked profile has been surprisingly effective!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src="/throne-assets/avatars/noble-2.jpg" alt="Noble testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold">Duke Digitalworth</div>
                <div className="text-royal-gold text-sm">#7 on Leaderboard</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-white/50 italic max-w-lg mx-auto">
          <p>* These testimonials are from actual users, though we've taken the liberty of enhancing their eloquence. Your experience may vary, though your money will definitely be gone regardless.</p>
        </div>
      </RoyalSection>
    </Shell>
  );
};

export default Index;
