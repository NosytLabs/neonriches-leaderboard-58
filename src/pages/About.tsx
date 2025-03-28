
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { Helmet } from 'react-helmet-async';
import { Crown, DollarSign, Users, Scroll, CreditCard, Trophy, Siren } from 'lucide-react';
import RoyalFAQ from '@/components/RoyalFAQ';
import RoyalDivider from '@/components/ui/royal-divider';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>About SpendThrone | The Ultimate Pay-to-Win Social Experiment</title>
        <meta name="description" content="Learn about SpendThrone - a satirical pay-to-win social experiment where your status is determined solely by how much you spend." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <Container>
          <section className="mb-16">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold royal-gradient font-royal mb-4">About SpendThrone</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The world's most honest social hierarchy, where your worth is measured in dollars, not deeds.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 p-8 rounded-lg mb-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg">
                  SpendThrone is a satirical social experiment that brazenly explores the relationship between wealth and social status. In a world where money often speaks louder than merit, we've simply removed the pretense.
                </p>
                
                <p className="italic text-royal-gold/90">
                  "Why pretend that status isn't for sale when we all know it is? At SpendThrone, we've simply made the price tag visible."
                </p>
                
                <p>
                  Founded in 2023 by a team of disillusioned tech workers who grew tired of seeing people pretend that wealth and influence aren't directly correlated, SpendThrone stands as a mirror to society's uncomfortable relationship with money and prestige.
                </p>
                
                <p>
                  Our leaderboard never resets. Your investment in meaningless digital prestige is eternal, just like the real-world dynasties built on inherited wealth and privilege. The difference? We admit it's absurd.
                </p>
                
                <div className="my-8 flex flex-col sm:flex-row justify-between items-center gap-8">
                  <div className="glass-morphism border-white/10 p-6 rounded-lg flex-1">
                    <h3 className="text-lg font-bold royal-gradient mb-2">Our Noble Mission</h3>
                    <p className="text-white/80">
                      To create the world's most transparent status game, where the only skill required is the ability to spend money.
                    </p>
                  </div>
                  
                  <div className="glass-morphism border-white/10 p-6 rounded-lg flex-1">
                    <h3 className="text-lg font-bold royal-gradient mb-2">Our Royal Vision</h3>
                    <p className="text-white/80">
                      A digital kingdom where everyone knows exactly what their status cost, and the peasants can see precisely how much the nobility spent for their titles.
                    </p>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-royal-gold pl-4 italic my-8">
                  "In a world where influence is increasingly purchased rather than earned, we decided to skip the charade and create a platform where you literally pay for status. It's grotesque, absurd, and uncomfortably honest." 
                  <footer className="text-right text-royal-gold/80">— Lord Moneybags, Founder</footer>
                </blockquote>
              </div>
            </div>
          </section>
          
          <RoyalDivider variant="scroll" className="my-12" />
          
          <section id="how-it-works" className="mb-16">
            <h2 className="text-3xl font-bold royal-gradient text-center mb-8">How It Works</h2>
            <p className="text-center text-white/80 max-w-2xl mx-auto mb-10">
              The mechanics of our financial feudalism are delightfully straightforward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <DollarSign size={28} className="text-royal-gold mr-3" />
                  <h3 className="text-xl font-medium">Pay to Ascend</h3>
                </div>
                <p className="text-white/80">
                  $1 spent equals 1 unit of rank. No skills, talent, or contribution required. Just cold, hard cash transforming into arbitrary status points. Capitalism distilled to its essence.
                </p>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Trophy size={28} className="text-royal-gold mr-3" />
                  <h3 className="text-xl font-medium">Eternal Glory</h3>
                </div>
                <p className="text-white/80">
                  Our leaderboard never resets. Your investment in digital prestige is eternal, mimicking the way real-world wealth can establish dynasties that last generations.
                </p>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users size={28} className="text-royal-gold mr-3" />
                  <h3 className="text-xl font-medium">Noble Houses</h3>
                </div>
                <p className="text-white/80">
                  Join one of three teams: The Crimson Court (Red), The Golden Order (Green), or The Royal Navy (Blue). Your spending contributes to your team's standing.
                </p>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Scroll size={28} className="text-royal-gold mr-3" />
                  <h3 className="text-xl font-medium">Royal Events</h3>
                </div>
                <p className="text-white/80">
                  Weekly events add twists to the standard leaderboard mechanics. Pay to shame others, form alliances, or engage in temporary power struggles.
                </p>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <CreditCard size={28} className="text-royal-gold mr-3" />
                  <h3 className="text-xl font-medium">Lavish Profiles</h3>
                </div>
                <p className="text-white/80">
                  Basic members ($1+) get minimal customization. Pro members ($25+) unlock garish decorations, animations, and features to flaunt their superior spending.
                </p>
              </div>
              
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Siren size={28} className="text-royal-gold mr-3" />
                  <h3 className="text-xl font-medium">Public Shaming</h3>
                </div>
                <p className="text-white/80">
                  During special events, pay small amounts to temporarily lower others' ranks, throw digital tomatoes, or place rivals in the stocks for all to mock.
                </p>
              </div>
            </div>
            
            <div className="mt-12 glass-morphism border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold royal-gradient mb-4">A Word From Our Developers</h3>
              <p className="italic text-white/80">
                "We've created SpendThrone as a mirror to society's uncomfortable relationship with wealth and status. Is it any different from spending thousands on luxury brands, exclusive clubs, or artificially scarce digital assets? We simply removed the emperor's clothes and revealed what many systems are at their core: mechanisms for converting money into status."
              </p>
              <p className="text-right mt-2 text-white/60">
                — The development team, from their modest yacht
              </p>
            </div>
          </section>
          
          <RoyalDivider variant="crown" className="my-12" />
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
