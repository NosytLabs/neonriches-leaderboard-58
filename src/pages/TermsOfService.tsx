
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, ShieldAlert, Scale, Crown, Coins, HandCoins, GemIcon } from 'lucide-react';
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

  const handleAccept = () => {
    // Play royal sound
    playSound('royalAnnouncement', 0.2);
    
    // Store in localStorage that user has accepted terms
    localStorage.setItem('acceptedTerms', 'true');
    localStorage.setItem('termsAcceptedDate', new Date().toISOString());
    
    toast({
      title: "Royal Decree Acknowledged",
      description: "You have officially pledged allegiance to the Crown and its terms.",
    });
    
    // Redirect user to dashboard or homepage
    navigate('/dashboard');
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
                <Scroll size={40} className="text-royal-gold animate-royal-pulse" />
                <div className="absolute -inset-4 bg-royal-gold/10 rounded-full blur-md"></div>
              </div>
            </div>
            <h1 className="text-4xl font-royal font-bold royal-gradient mb-2">Royal Terms of Service</h1>
            <p className="text-white/70">Official proclamation of rights, responsibilities, and royal satire</p>
          </div>
          
          <RoyalParchment className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-royal royal-gradient">
                <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                Official Royal Proclamation
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-6 text-white/80">
                <p className="italic text-white/60 text-sm">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">1. Introduction to the Kingdom</h3>
                  <p>
                    Welcome to SpendThrone ("the Kingdom"), a satirical web application that parodies pay-to-win mechanics 
                    and social hierarchies. By accessing our Kingdom, you acknowledge that this is a <span className="text-royal-gold font-bold">SATIRICAL</span> service 
                    designed for entertainment purposes only.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">2. The Royal Satire Disclaimer</h3>
                  <p>
                    SpendThrone is an <span className="text-royal-gold">explicit satire</span> of pay-to-win mechanics, social status purchasing, and the concept 
                    of equating wealth with worth. All titles, ranks, and benefits are meaningless outside of our platform 
                    and are designed to humorously critique these real-world phenomena.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">3. Royal Treasury (Payments & Refunds)</h3>
                  <div className="glass-morphism border-royal-crimson/30 rounded-lg p-4 bg-royal-crimson/5 my-3">
                    <div className="flex items-start">
                      <HandCoins className="h-5 w-5 text-royal-crimson mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-royal-crimson/90 font-medium m-0">
                        <span className="font-bold">ABSOLUTE NO REFUNDS POLICY:</span> All contributions to the Royal Treasury (payments) are final and non-refundable. 
                        In keeping with the satirical nature of our Kingdom, once you part with your gold, it becomes property of the Crown. 
                        You acknowledge that you are spending real currency for virtual, satirical status that has no actual value whatsoever.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">4. Noble Conduct (User Behavior)</h3>
                  <p>
                    While participating in the Kingdom's activities such as profile customization and public shaming features, 
                    you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Not post obscene, illegal, or objectively harmful content</li>
                    <li>Take full responsibility for all content you post</li>
                    <li>Understand that all "shaming" features are satirical and not meant to cause actual harm</li>
                    <li>Refrain from using the platform to harass, threaten, or abuse other users</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">5. Royal Data Collection</h3>
                  <p>
                    We collect information necessary to maintain your account and provide our services. This includes the 
                    amount spent, profile information, and usage statistics. We do not sell your personal information to 
                    third parties, though we may satirically pretend to do so.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">6. Cancellation of Noble Status</h3>
                  <p>
                    We reserve the right to terminate accounts that violate our terms, post inappropriate content, or otherwise 
                    disrupt the Kingdom. No refunds shall be provided upon termination, in accordance with our strict No Refunds policy.
                  </p>
                </section>
                
                <RoyalDivider variant="crown" label="LEGAL DECLARATIONS" className="my-8" />
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">7. No Real Marketplace or Exchange</h3>
                  <p>
                    SpendThrone does not function as a marketplace, investment, or exchange. The status gained from spending 
                    has no real-world value and cannot be exchanged, traded, or redeemed for currency or items of value.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">8. Disclaimer of Warranties</h3>
                  <p className="uppercase font-bold text-sm">
                    THE KINGDOM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
                    WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">9. Limitation of Liability</h3>
                  <p className="uppercase font-bold text-sm">
                    IN NO EVENT SHALL SPENDTHRONE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                    OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, INCLUDING THE LOSS OF MONEY 
                    SPENT ON THE PLATFORM.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">10. Amendments to the Royal Decree</h3>
                  <p>
                    We may update these terms at any time without notice. Your continued use of the Kingdom after changes 
                    constitutes acceptance of the new terms.
                  </p>
                </section>
                
                <section className="glass-morphism border-royal-gold/30 rounded-lg p-4 bg-royal-gold/5 my-6">
                  <h3 className="text-lg font-semibold text-royal-gold flex items-center">
                    <Coins className="mr-2 h-5 w-5" />
                    The Complete Satire Disclosure
                  </h3>
                  <p className="text-white/90">
                    SpendThrone is a complete satire of societal mechanisms that equate wealth with worth. By participating, 
                    you acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>All ranks, titles, and privileges are meaningless outside this platform</li>
                    <li>Your spending confers no actual social status or real-world benefits</li>
                    <li>The entire premise of the platform is to parody and critique wealth-based status systems</li>
                    <li>All payments made to the platform are final and non-refundable</li>
                    <li>Participation is entirely voluntary and at your own financial risk</li>
                  </ul>
                </section>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(!!checked)}
                  className="mt-1 data-[state=checked]:bg-royal-gold data-[state=checked]:border-royal-gold"
                />
                <label htmlFor="terms" className="text-sm text-white/70">
                  I agree to the Terms of Service and understand this is a satirical platform.
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
                  I understand that SpendThrone is a satirical parody of pay-to-win mechanics and does not provide actual value for money spent.
                </label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="noRefunds" 
                  checked={acceptedNoRefunds}
                  onCheckedChange={(checked) => setAcceptedNoRefunds(!!checked)}
                  className="mt-1 data-[state=checked]:bg-royal-gold data-[state=checked]:border-royal-gold"
                />
                <label htmlFor="noRefunds" className="text-sm text-white/90 font-medium">
                  I acknowledge that all payments are final and <span className="text-royal-crimson font-bold">NON-REFUNDABLE</span>, as befits a satire of wealth-based status.
                </label>
              </div>
              
              <Button 
                variant="royal"
                className="w-full mt-4 royal-button animate-pulse-slow"
                disabled={!acceptedTerms || !acceptedSatire || !acceptedNoRefunds}
                onClick={handleAccept}
              >
                <Crown className="mr-2 h-4 w-4" />
                I Solemnly Swear Allegiance to These Terms
              </Button>
            </CardFooter>
          </RoyalParchment>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
