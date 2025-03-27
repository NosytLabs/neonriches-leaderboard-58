
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, ShieldAlert, Scale, Crown, Coins, HandCoins, GemIcon, Feather, Gavel } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import RoyalDivider from '@/components/ui/royal-divider';
import ThroneBackground from '@/components/ui/throne-background';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import RoyalParchment from '@/components/ui/royal-parchment';

const TermsOfService = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedSatire, setAcceptedSatire] = useState(false);
  const [acceptedNoRefunds, setAcceptedNoRefunds] = useState(false);
  const [isSealing, setIsSealing] = useState(false);

  const handleAccept = () => {
    setIsSealing(true);
    
    // Play royal sound
    playSound('royalAnnouncement', 0.3);
    
    setTimeout(() => {
      // Store in localStorage that user has accepted terms
      localStorage.setItem('acceptedTerms', 'true');
      localStorage.setItem('termsAcceptedDate', new Date().toISOString());
      
      toast({
        title: "Royal Decree Acknowledged",
        description: "You have officially pledged fealty to the Crown and its terms.",
      });
      
      // Redirect user to dashboard or homepage
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-royal-crimson/10 filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-royal-gold/10 filter blur-[120px]"></div>
          <div className="absolute top-2/3 left-2/3 w-72 h-72 rounded-full bg-royal-navy/10 filter blur-[80px]"></div>
        </div>
        <ThroneBackground variant="royal" density="medium" animate={true} particles={true} />
      </div>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-4 bg-royal-gold/10 rounded-full blur-md animate-pulse-slow"></div>
                <Scroll size={40} className="text-royal-gold animate-crown-glow" />
                <div className="absolute -right-2 -bottom-2">
                  <Feather size={16} className="text-royal-gold/80" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-royal font-bold royal-gradient mb-2">Royal Terms of Service</h1>
            <p className="text-white/70">Official proclamation of rights, responsibilities, and royal satire</p>
          </div>
          
          <RoyalParchment className="mb-8 animate-fade-in" waxSeal={true}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-royal royal-gradient">
                <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                By Royal Decree: The Conditions of Your Servitude
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-6 text-white/80">
                <p className="italic text-white/60 text-sm">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <Crown className="mr-2 h-4 w-4" />
                    1. Introduction to the Realm
                  </h3>
                  <p>
                    Welcome to SpendThrone ("the Kingdom"), a satirical web application that parodies pay-to-win mechanics 
                    and social hierarchies. By accessing our Kingdom, you acknowledge that this is a <span className="text-royal-gold font-bold">SATIRICAL</span> service 
                    designed for entertainment purposes only, wherein wealth and worth are mockingly equated.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <Scroll className="mr-2 h-4 w-4" />
                    2. The Royal Satire Proclamation
                  </h3>
                  <p>
                    SpendThrone is an <span className="text-royal-gold font-bold">explicit satire</span> of pay-to-win mechanics, social status purchasing, and the concept 
                    of equating wealth with worth. All titles, ranks, and benefits are meaningless outside of our platform 
                    and are designed to humorously critique these real-world phenomena.
                  </p>
                  <div className="glass-morphism border-white/20 p-3 mt-2 bg-royal-gold/5 italic text-sm">
                    "In this most preposterous of kingdoms, we boldly proclaim that your wallet size determines your worth, a notion as ridiculous in our digital realm as it ought to be considered in the real world."
                  </div>
                </section>
                
                <RoyalDivider variant="ornate" label="TREASURY MATTERS" className="my-6" color="gold" />
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-crimson flex items-center">
                    <HandCoins className="mr-2 h-4 w-4" />
                    3. Royal Treasury (Payments & <span className="underline decoration-wavy">ABSOLUTE NO REFUNDS</span>)
                  </h3>
                  <div className="glass-morphism border-royal-crimson/30 rounded-lg p-4 bg-royal-crimson/5 my-3">
                    <div className="flex items-start">
                      <Gavel className="h-5 w-5 text-royal-crimson mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-royal-crimson/90 font-medium m-0 space-y-2">
                        <p className="font-bold text-lg uppercase tracking-wide">ABSOLUTE NO REFUNDS POLICY</p>
                        <p>
                          All contributions to the Royal Treasury (payments) are <span className="underline decoration-wavy">final and non-refundable</span>. 
                          In keeping with the satirical nature of our Kingdom, once you part with your gold, it becomes property of the Crown—forever. 
                        </p>
                        <p className="italic">
                          You hereby solemnly acknowledge that you are spending real currency for virtual, satirical status that has no actual value whatsoever, 
                          and that this transaction mimics the absurdity of certain real-world status purchases.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    4. Noble Conduct (User Behavior)
                  </h3>
                  <p>
                    While participating in the Kingdom's activities such as profile customization and public shaming features, 
                    you agree to comport yourself with a modicum of dignity becoming of your purchased station:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Not post obscene, illegal, or objectively harmful content</li>
                    <li>Take full responsibility for all content you post</li>
                    <li>Understand that all "shaming" features are satirical and not meant to cause actual harm</li>
                    <li>Refrain from using the platform to harass, threaten, or abuse other users</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <Scroll className="mr-2 h-4 w-4" />
                    5. Royal Data Collection
                  </h3>
                  <p>
                    We collect information necessary to maintain your account and provide our services. This includes the 
                    amount spent, profile information, and usage statistics. We do not sell your personal information to 
                    third parties, though we may satirically pretend to do so.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <Gavel className="mr-2 h-4 w-4" />
                    6. Banishment from the Realm
                  </h3>
                  <p>
                    We reserve the right to banish accounts that violate our terms, post inappropriate content, or otherwise 
                    disrupt the Kingdom. No refunds shall be provided upon banishment, in accordance with our strict No Refunds policy.
                    Even nobility can be exiled if they prove unworthy of their purchased status.
                  </p>
                </section>
                
                <RoyalDivider variant="crown" label="LEGAL DECLARATIONS" className="my-8" color="crimson" />
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <Scale className="mr-2 h-4 w-4" />
                    7. No Real Marketplace or Exchange
                  </h3>
                  <p>
                    SpendThrone does not function as a marketplace, investment, or exchange. The status gained from spending 
                    has no real-world value and cannot be exchanged, traded, or redeemed for currency or items of value.
                    It is as worthless as real-world status based solely on wealth.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    8. Disclaimer of Warranties
                  </h3>
                  <p className="uppercase font-bold text-sm">
                    THE KINGDOM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
                    WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                    THE CROWN MAKES NO GUARANTEES OF YOUR SATISFACTION WITH YOUR PURCHASED STATUS.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    9. Limitation of Liability
                  </h3>
                  <p className="uppercase font-bold text-sm">
                    IN NO EVENT SHALL SPENDTHRONE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                    OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, INCLUDING THE LOSS OF MONEY 
                    SPENT ON THE PLATFORM. YOUR REGRETS ABOUT WASTING MONEY ON DIGITAL STATUS ARE YOURS ALONE TO BEAR.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <Crown className="mr-2 h-4 w-4" />
                    10. Amendments to the Royal Decree
                  </h3>
                  <p>
                    We may update these terms at any time without notice, as is the sovereign right of the Crown. 
                    Your continued use of the Kingdom after changes constitutes acceptance of the new terms.
                  </p>
                </section>
                
                <section className="glass-morphism border-royal-gold/30 rounded-lg p-6 bg-royal-gold/5 my-6">
                  <h3 className="text-xl font-semibold font-royal text-royal-gold flex items-center justify-center mb-3">
                    <Crown className="mr-2 h-6 w-6 animate-crown-glow" />
                    The Complete Satire Disclosure
                  </h3>
                  <p className="text-white/90">
                    SpendThrone is a complete satire of societal mechanisms that equate wealth with worth. By participating, 
                    you acknowledge that:
                  </p>
                  <ul className="list-none pl-0 space-y-3 mt-4">
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold mr-3 mt-0.5">1</span>
                      <span>All ranks, titles, and privileges are meaningless outside this platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold mr-3 mt-0.5">2</span>
                      <span>Your spending confers no actual social status or real-world benefits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold mr-3 mt-0.5">3</span>
                      <span>The entire premise of the platform is to parody and critique wealth-based status systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-crimson/20 text-royal-crimson mr-3 mt-0.5">4</span>
                      <span className="font-bold">All payments made to the platform are final and non-refundable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-crimson/20 text-royal-crimson mr-3 mt-0.5">5</span>
                      <span className="font-bold">Participation is entirely voluntary and at your own financial risk</span>
                    </li>
                  </ul>
                </section>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4 border-t border-royal-gold/20 pt-6 mt-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(!!checked)}
                  className="mt-1 data-[state=checked]:bg-royal-gold data-[state=checked]:border-royal-gold"
                />
                <label htmlFor="terms" className="text-sm text-white/70">
                  I swear fealty to the Terms of Service and understand this is a satirical platform mocking the concept of purchased status.
                </label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="satire" 
                  checked={acceptedSatire}
                  onCheckedChange={(checked) => setAcceptedSatire(!!checked)}
                  className="mt-1 data-[state=checked]:bg-royal-gold data-[state=checked]:border-royal-gold"
                />
                <label htmlFor="satire" className="text-sm text-white/70">
                  I understand that SpendThrone is a satirical parody of pay-to-win mechanics and provides no actual value for money spent beyond digital mockery of wealth-based status systems.
                </label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="noRefunds" 
                  checked={acceptedNoRefunds}
                  onCheckedChange={(checked) => setAcceptedNoRefunds(!!checked)}
                  className="mt-1 data-[state=checked]:bg-royal-crimson data-[state=checked]:border-royal-crimson"
                />
                <label htmlFor="noRefunds" className="text-sm text-white/90 font-medium">
                  I acknowledge and accept that all payments are <span className="text-royal-crimson font-bold uppercase tracking-wider">absolutely non-refundable</span>, consistent with the satirical critique of wealth-based status.
                </label>
              </div>
              
              <Button 
                variant="royal"
                className={`w-full mt-6 h-12 royal-button ${isSealing ? 'bg-gradient-royal animate-pulse' : 'glass-morphism border-royal-gold/30 bg-royal-gold/5'}`}
                disabled={!acceptedTerms || !acceptedSatire || !acceptedNoRefunds || isSealing}
                onClick={handleAccept}
              >
                <div className="relative z-10 flex items-center">
                  {isSealing ? (
                    <>
                      <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Sealing Your Pledge...</span>
                    </>
                  ) : (
                    <>
                      <Crown className="mr-2 h-5 w-5 animate-crown-glow" />
                      <span>I Hereby Pledge My Fealty to These Royal Terms</span>
                    </>
                  )}
                </div>
              </Button>
              
              <p className="text-xs text-white/50 text-center mt-4 italic">
                "A fool and his money are soon parted, and in our Kingdom, that process is both transparent and satirical."
              </p>
            </CardFooter>
          </RoyalParchment>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
