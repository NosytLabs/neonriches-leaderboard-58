
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, Shield, Crown, Info, ExternalLink } from 'lucide-react';
import Layout from '@/components/layouts/Layout';
import { useToastContext } from '@/contexts/ToastContext';
import RoyalDivider from '@/components/ui/royal-divider';
import ThroneBackground from '@/components/ui/throne-background';
import RoyalDecoration from '@/components/ui/royal-decoration';

const TermsOfService = () => {
  const navigate = useNavigate();
  const { addToast } = useToastContext();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAccept = () => {
    if (!acceptedTerms) {
      addToast({
        title: "Terms Not Accepted",
        description: "You must accept the terms to continue your journey to nobility.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Store in localStorage that user has accepted terms
    localStorage.setItem('acceptedTerms', 'true');
    localStorage.setItem('termsAcceptedDate', new Date().toISOString());
    
    setTimeout(() => {
      addToast({
        title: "Royal Decree Accepted",
        description: "Welcome to SpendThrone! Your journey to purchased nobility awaits.",
      });
      
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <ThroneBackground variant="royal" animate={true} particles={true} />
      </div>
      
      <Layout disablePadding fullHeight transparentHeader>
        <div className="pt-24 pb-12 px-4 md:px-6">
          <div className="max-w-3xl mx-auto relative">
            <RoyalDecoration variant="corner-flourish" position="top-left" className="hidden md:block" />
            <RoyalDecoration variant="corner-flourish" position="top-right" className="hidden md:block" />
            
            <div className="text-center mb-8 animate-fade-in">
              <div className="inline-flex items-center justify-center mb-4">
                <Scroll size={40} className="text-royal-gold animate-crown-glow" />
              </div>
              <h1 className="text-4xl font-royal font-bold text-royal-gold mb-2">Terms of Service</h1>
              <p className="text-white/70">Please read and accept our terms to continue your path to nobility</p>
            </div>
            
            <Card className="glass-morphism border-royal-gold/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-royal text-royal-gold">
                  <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                  Terms of Service Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-4 text-white/80">
                  <p>
                    Welcome to SpendThrone, a satirical web application that parodies pay-to-win mechanics and wealth-based status. 
                    By using this service, you acknowledge:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>This is a <span className="text-royal-gold font-bold">SATIRICAL</span> service designed for entertainment.</li>
                    <li>All payments are <span className="text-royal-crimson font-bold">FINAL and NON-REFUNDABLE</span>.</li>
                    <li>Your purchased status has no real-world value (just like most luxury goods).</li>
                    <li>You will not post obscene, illegal, or harmful content.</li>
                    <li>We collect minimal information necessary to maintain your account.</li>
                    <li>Your leaderboard position is directly tied to how much money you give us, with no other considerations.</li>
                  </ul>

                  <RoyalDivider variant="line" className="my-4" />
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms" 
                      checked={acceptedTerms}
                      onCheckedChange={(checked) => setAcceptedTerms(!!checked)}
                      className="mt-1 data-[state=checked]:bg-royal-gold data-[state=checked]:border-royal-gold"
                    />
                    <label htmlFor="terms" className="text-sm">
                      I accept the <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-royal-gold underline inline-flex items-center">
                        full Terms of Service <ExternalLink className="h-3 w-3 ml-1" />
                      </a> and <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-royal-gold underline inline-flex items-center">
                        Privacy Policy <ExternalLink className="h-3 w-3 ml-1" />
                      </a> and understand this is a satirical platform.
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t border-royal-gold/20 pt-6">
                <Button 
                  variant="royal"
                  className="royal-button glass-morphism border-royal-gold/30 bg-royal-gold/90"
                  disabled={!acceptedTerms || isSubmitting}
                  onClick={handleAccept}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Accepting Royal Decree...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Accept & Continue</span>
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
            
            <div className="text-center text-white/50 text-sm mt-4">
              <p>By proceeding, you acknowledge that money spent here is purely for satirical entertainment and social commentary.</p>
              <p className="mt-1">
                <a href="/privacy" className="text-royal-gold/70 hover:text-royal-gold transition-colors">Privacy Policy</a> • 
                <a href="/terms" className="text-royal-gold/70 hover:text-royal-gold transition-colors ml-2">Full Terms</a> • 
                <a href="/faq" className="text-royal-gold/70 hover:text-royal-gold transition-colors ml-2">Royal FAQ</a>
              </p>
            </div>
            
            <RoyalDecoration variant="corner-flourish" position="bottom-left" className="hidden md:block" />
            <RoyalDecoration variant="corner-flourish" position="bottom-right" className="hidden md:block" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TermsOfService;
