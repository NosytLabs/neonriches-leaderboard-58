
import React from 'react';
import { Container } from '@/components/ui/container';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scroll, ShieldAlert, Crown } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SpendThrone</title>
        <meta name="description" content="Royal Decree: The official terms of service for SpendThrone - the satirical pay-to-win social experiment where money equals status." />
      </Helmet>
      
      <Header />
      
      <Container className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Scroll className="h-12 w-12 text-royal-gold mx-auto mb-4 animate-crown-glow" />
            <h1 className="text-3xl font-bold royal-gradient mb-2">Royal Decree: Terms of Service</h1>
            <p className="text-white/70 italic">
              (Or: "How We Legally Take Your Money for Absolutely Nothing of Value")
            </p>
          </div>
          
          <RoyalDivider variant="line" className="mb-10" />
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">1. The Noble Introduction</span>
              </h2>
              <p className="text-white/80">
                Welcome to SpendThrone, a satirical pay-to-win social experiment where your status is determined solely by how much money you give us. By accessing our platform, you agree to be bound by these absurd yet legally binding Terms of Service. We rule this digital kingdom with an iron fist and a golden money counter.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">2. The Royal Joke</span>
              </h2>
              <p className="text-white/80">
                SpendThrone is a satirical platform that parodies pay-to-win mechanics and society's obsession with wealth as a status symbol. While real money can (and should) be spent here, no actual value or services (beyond the entertainment value of watching numbers go up) are provided in exchange. That's the joke. You're literally paying for nothing but status, just like that $15,000 handbag that holds things exactly as well as a $50 one.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">3. The Treasury's Policies</span>
              </h2>
              <p className="text-white/80">
                All payments made to SpendThrone are final and non-refundable. By making a payment, you acknowledge that you are spending money purely for the satirical purpose of increasing your rank on a meaningless leaderboard. We will treat your money with the same respect you show it—we'll watch it disappear. The royal coffers thank you for your contribution.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">4. Noble Conduct</span>
              </h2>
              <p className="text-white/80">
                Even in our kingdom of absurdity, users are expected to maintain appropriate conduct. We reserve the right to moderate or remove content and banish users who engage in harmful, abusive, or illegal behavior. Our satire has standards—aim higher than the aristocracy of old.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">5. Royal Ownership</span>
              </h2>
              <p className="text-white/80">
                You retain ownership of content you create on SpendThrone, but grant us a license to use, display, and distribute that content as part of the platform. Unlike real aristocracy, we won't claim your creative outputs as our birthright—just the money you give us.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">6. The Royal Disclaimer</span>
              </h2>
              <p className="text-white/80">
                SpendThrone is provided "as is" without warranties of any kind. We do not guarantee that the platform will be uninterrupted, secure, or error-free. Much like real status symbols, your investment may occasionally fail to impress anyone at all.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">7. The Royal Decree on Liability</span>
              </h2>
              <p className="text-white/80">
                SpendThrone and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform. This includes any emotional distress caused by realizing you've spent actual money on fake status. The court jester finds your dismay amusing.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">8. Amendments to the Royal Charter</span>
              </h2>
              <p className="text-white/80">
                We may modify these terms at any time, with the same callous disregard that real nobility had for peasants' opinions. Your continued use of SpendThrone after changes indicates your acceptance of the revised terms. Unlike democracy, you don't actually get a vote—just like real aristocracy!
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Crown className="text-royal-gold mr-2 h-5 w-5" />
                <span className="royal-gradient">9. Contact the Royal Court</span>
              </h2>
              <p className="text-white/80">
                For questions about these terms, please contact our Royal Advisors at legal@spendthrone.com. Your message will be read with all the attention that the aristocracy historically gave to commoners' concerns.
              </p>
            </section>
            
            <div className="p-4 bg-royal-gold/5 border border-royal-gold/20 rounded-md mt-8">
              <h3 className="flex items-center text-royal-gold mb-2">
                <ShieldAlert className="mr-2 h-5 w-5" />
                Legal Reality Check
              </h3>
              <p className="text-sm text-white/70">
                Despite our satirical tone, these terms constitute a legally binding agreement. SpendThrone is a social commentary on wealth and status, and all payments are genuinely non-refundable. By using this site, you acknowledge that you are spending money on digital status with no tangible value. If this concerns you, perhaps consider how this reflects other status purchases in your life.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-white/60 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-1 italic">Signed and sealed with the Royal Wax of Absurdity</p>
          </div>
        </div>
      </Container>
      
      <Footer />
    </>
  );
};

export default Terms;
