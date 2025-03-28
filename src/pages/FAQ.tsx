
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/container';
import { Helmet } from 'react-helmet-async';
import RoyalFAQ from '@/components/RoyalFAQ';
import { ShieldQuestion, MessageCircle } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Frequently Asked Questions | SpendThrone</title>
        <meta name="description" content="Get answers to common questions about SpendThrone, the satirical pay-to-win social experiment where your status is determined by how much you spend." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <Container>
          <div className="text-center mb-10">
            <ShieldQuestion size={48} className="text-royal-gold inline-block mb-4 animate-crown-glow" />
            <h1 className="text-4xl font-bold royal-gradient font-royal mb-4">Royal Inquiries</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Common questions from the commoners about our noble enterprise
            </p>
          </div>
          
          <RoyalDivider variant="crown" className="mb-12" />
          
          <RoyalFAQ />
          
          <div className="mt-16 glass-morphism border-white/10 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold royal-gradient mb-4">Still Have Questions?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our royal advisors stand ready to assist with any inquiries not covered above. Your confusion amuses the court.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a 
                href="mailto:inquiries@spendthrone.com" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-royal-gold/10 hover:bg-royal-gold/20 text-royal-gold transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Royal Support
              </a>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
