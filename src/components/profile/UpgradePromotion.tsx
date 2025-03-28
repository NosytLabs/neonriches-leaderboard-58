
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Plus, Crown, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import PaymentModal from '@/components/PaymentModal';
import { UserSubscription } from '@/types/auth';
import { toast } from '@/hooks/use-toast';

const UpgradePromotion = () => {
  const { updateUserProfile } = useAuth();
  const [showDialog, setShowDialog] = useState(false);
  
  const handlePaymentSuccess = async (amount: number) => {
    try {
      // Create new subscription based on payment
      const newSubscription: UserSubscription = {
        id: `sub_${Math.random().toString(36).substring(2, 9)}`,
        tier: 'pro',
        status: 'active',
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        renewalDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        paymentMethod: 'credit_card',
        autoRenew: true,
        price: 9.99,
        interval: 'monthly',
        features: [
          'Extended text (1000 characters)',
          'Up to 5 images',
          'Up to 5 links',
          'Animated RGB borders',
          'Video embeds',
          'Custom RGB gradients',
          'Hover effects',
          'Click stats'
        ]
      };
      
      await updateUserProfile({ 
        subscription: newSubscription,
        tier: 'pro',
        role: 'premium' // This is now a valid property
      });
      
      toast({
        title: "Subscription Activated",
        description: "You are now a Pro member with monthly billing.",
      });
      
      setShowDialog(false);
    } catch (error) {
      toast({
        title: "Subscription Error",
        description: "Could not activate your subscription. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <div className="mt-8 glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-royal-purple/20 via-royal-gold/10 to-royal-purple/20">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="flex items-center">
              <Crown className="h-6 w-6 text-royal-gold mr-2" />
              <h2 className="text-xl font-bold">Upgrade to Pro Tier</h2>
            </div>
            <p className="text-white/70 mb-4 mt-2">
              Subscribe for just $9.99/month to unlock premium features and enhance your profile.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Extended text (1000 characters)</p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Up to 5 images</p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Up to 5 links</p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Animated RGB borders</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Video embeds</p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Custom RGB gradients</p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Hover effects</p>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-2">
                    <Plus size={14} className="text-royal-gold" />
                  </div>
                  <p className="text-sm">Click stats</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-64 lg:w-72 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center">
            <div className="glass-morphism border-white/10 p-4 rounded-lg mb-4 bg-gradient-to-br from-royal-purple/10 to-royal-gold/10">
              <div className="text-center">
                <span className="text-white/60 text-sm">Monthly Subscription</span>
                <div className="flex items-center justify-center my-2">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-white/60 ml-1">/month</span>
                </div>
                <div className="text-xs text-white/50">Billed monthly. Cancel anytime.</div>
              </div>
              
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center text-xs text-white/70">
                  <CheckCircle size={12} className="mr-1.5 text-royal-gold" />
                  <span>Instant access to all Pro features</span>
                </div>
                <div className="flex items-center text-xs text-white/70">
                  <CheckCircle size={12} className="mr-1.5 text-royal-gold" />
                  <span>Priority customer support</span>
                </div>
                <div className="flex items-center text-xs text-white/70">
                  <CheckCircle size={12} className="mr-1.5 text-royal-gold" />
                  <span>Premium profile badge</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
              onClick={() => setShowDialog(true)}
            >
              <Crown size={16} className="mr-2" />
              Subscribe Now
            </Button>
            
            <div className="text-center text-xs text-white/50 mt-2">
              Or see <button onClick={() => setShowDialog(true)} className="text-royal-gold underline">all subscription options</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upgrade Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upgrade to Pro</DialogTitle>
            <DialogDescription>
              Subscribe to unlock premium features for your profile
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="glass-morphism border-white/10 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">Royal Monthly</div>
                  <div className="text-white/60 text-sm">Monthly billing</div>
                </div>
                <div className="text-xl font-bold">$9.99</div>
              </div>
              
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center text-xs text-white/70">
                  <CheckCircle size={12} className="mr-1.5 text-royal-gold" />
                  <span>All Pro features included</span>
                </div>
                <div className="flex items-center text-xs text-white/70">
                  <CheckCircle size={12} className="mr-1.5 text-royal-gold" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            
            <PaymentModal 
              amount={9.99} 
              onSuccess={handlePaymentSuccess}
              title="Subscribe to Pro"
              description="Upgrade your profile with premium features"
              trigger={
                <Button className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white">
                  <CreditCard size={16} className="mr-2" />
                  Pay $9.99/month
                </Button>
              }
            />
          </div>
          
          <DialogFooter className="flex flex-col">
            <div className="text-center text-xs text-white/50 mt-2">
              Looking for more options? Visit your <a href="/profile" className="text-royal-gold">profile page</a> to see quarterly and annual plans
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpgradePromotion;
