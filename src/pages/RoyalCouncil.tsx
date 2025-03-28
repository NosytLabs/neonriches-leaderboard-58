
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommunityVoting from '@/components/community/CommunityVoting';
import { Users, Shield, Feather, MessageCircle } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';
import MedievalIcon from '@/components/ui/medieval-icon';
import RoyalButton from '@/components/ui/royal-button';

const RoyalCouncil = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Royal Council | SpendThrone</title>
        <meta 
          name="description" 
          content="Join the SpendThrone Royal Council, vote on royal decrees, and help shape the future of our satirical social experiment." 
        />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <MedievalIcon name="crown" size="xl" color="gold" className="mx-auto mb-4 animate-crown-glow" />
            <h1 className="text-3xl md:text-4xl font-bold royal-gradient mb-4 font-medieval">The Royal Council</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join our council of spendthrift nobles to vote on royal decrees, suggest ventures, and help shape the future of our satirical kingdom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-morphism border-white/10 p-6 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-medieval">Council Votes</h3>
              <p className="text-white/70">
                Cast thy vote on which royal decrees shall be granted priority in our noble kingdom.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 p-6 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-royal-purple/20 flex items-center justify-center mx-auto mb-4">
                <Feather className="h-6 w-6 text-royal-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-medieval">Propose Decrees</h3>
              <p className="text-white/70">
                Hast thou a brilliant idea for the realm? Submit thy proposal for the council's consideration.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 p-6 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-royal-navy/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-royal-navy" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-medieval">Noble Discourse</h3>
              <p className="text-white/70">
                Engage with fellow nobles in discourse to refine ideas for the betterment of the realm.
              </p>
            </div>
          </div>
          
          <RoyalDivider variant="crown" label="COUNCIL MATTERS" color="gold" className="mb-8" />
          
          <CommunityVoting />
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg mt-16 text-center max-w-3xl mx-auto">
            <MedievalIcon name="seal" size="lg" color="gold" className="mx-auto mb-3" />
            <h3 className="text-xl font-bold royal-gradient mb-2 font-medieval">Join The Royal Discord Assembly</h3>
            <p className="text-white/70 mb-4">
              For more indepth court discussions, royal decree suggestions, and to connect with other nobles, join our Discord assembly.
            </p>
            <RoyalButton 
              variant="royalGold"
              shimmer={true}
              as="a" 
              href="https://discord.gg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3"
              icon={<Users className="mr-2 h-4 w-4" />}
            >
              Join Royal Assembly
            </RoyalButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoyalCouncil;
