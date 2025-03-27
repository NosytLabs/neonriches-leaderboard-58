
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, ShieldAlert, Scale, Crown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import RoyalDivider from '@/components/ui/royal-divider';
import ThroneBackground from '@/components/ui/throne-background';

const TermsOfService = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedSatire, setAcceptedSatire] = useState(false);
  const [acceptedNoRefunds, setAcceptedNoRefunds] = useState(false);

  const handleAccept = () => {
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
        <ThroneBackground variant="royal" density="medium" animate={true} particles={false} />
      </div>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <Scroll size={40} className="text-royal-gold animate-royal-pulse" />
            </div>
            <h1 className="text-4xl font-royal font-bold royal-gradient mb-2">Royal Terms of Service</h1>
            <p className="text-white/70">Official proclamation of rights, responsibilities, and royal satire</p>
          </div>
          
          <Card className="glass-morphism border-white/10 shadow-xl mb-8">
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
                    and social hierarchies. By accessing our Kingdom, you acknowledge that this is a satirical service 
                    designed for entertainment purposes only.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">2. The Royal Satire Disclaimer</h3>
                  <p>
                    SpendThrone is an explicit satire of pay-to-win mechanics, social status purchasing, and the concept 
                    of equating wealth with worth. All titles, ranks, and benefits are meaningless outside of our platform 
                    and are designed to humorously critique these real-world phenomena.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">3. Royal Treasury (Payments & Refunds)</h3>
                  <p>
                    All contributions to the Royal Treasury (payments) are final. No refunds shall be provided, as the purpose 
                    of the Kingdom is to satirically part willing nobles from their gold. You acknowledge that you are spending 
                    real currency for virtual, satirical status that has no actual value.
                  </p>
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
                    disrupt the Kingdom. No refunds shall be provided upon termination.
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
                  <p>
                    THE KINGDOM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
                    WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-royal-gold">9. Limitation of Liability</h3>
                  <p>
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
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(!!checked)}
                  className="mt-1"
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
                  className="mt-1"
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
                  className="mt-1"
                />
                <label htmlFor="noRefunds" className="text-sm text-white/70">
                  I acknowledge that all payments are final and non-refundable, as befits a satire of wealth-based status.
                </label>
              </div>
              
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy"
                disabled={!acceptedTerms || !acceptedSatire || !acceptedNoRefunds}
                onClick={handleAccept}
              >
                <ShieldAlert className="mr-2 h-4 w-4" />
                I Solemnly Swear Allegiance to These Terms
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
