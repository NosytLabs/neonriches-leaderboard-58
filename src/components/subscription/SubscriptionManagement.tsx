import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { UserProfile } from '@/types/user';

interface SubscriptionManagementProps {
  open: boolean;
  onClose: () => void;
}

const plans = [
  {
    id: 'basic-plan',
    name: 'Basic',
    price: 0,
    interval: 'monthly',
    description: 'Free plan with limited features',
    features: ['Limited access', 'Standard support'],
    color: 'text-gray-500',
    maxLinks: 5,
    maxProfiles: 1,
    analyticsAccess: false,
    customization: false,
    protectionDuration: 0,
    priceMonthly: 0,
    priceYearly: 0
  },
  {
    id: 'pro-plan',
    name: 'Pro',
    price: 19,
    interval: 'monthly',
    description: 'Professional plan with enhanced features',
    features: ['Unlimited access', 'Priority support', 'Advanced analytics'],
    color: 'text-blue-500',
    maxLinks: 50,
    maxProfiles: 5,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 7,
    priceMonthly: 19,
    priceYearly: 199
  },
  {
    id: 'royal-plan',
    name: 'Royal',
    price: 49,
    interval: 'monthly',
    description: 'Royal plan with exclusive benefits',
    features: ['Everything in Pro', 'Dedicated support', 'Exclusive content'],
    color: 'text-royal-gold',
    maxLinks: 100,
    maxProfiles: 10,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 30,
    priceMonthly: 49,
    priceYearly: 499
  }
];

const SubscriptionManagement: React.FC<SubscriptionManagementProps> = ({ open, onClose }) => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(plans.find(plan => plan.name.toLowerCase() === user?.tier) || plans[0]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user?.subscription?.planId) {
      const plan = plans.find(p => p.id === user.subscription?.planId);
      setSelectedPlan(plan || plans[0]);
    }
  }, [user?.subscription?.planId]);

  const filteredPlans = plans.filter((plan) => {
    return plan.name.toLowerCase().includes(search.toLowerCase());
  });

  const updateSubscription = async () => {
    try {
      setLoading(true);
    
      // Create a proper subscription object with all required fields
      await updateProfile({
        subscription: {
          id: user.subscription?.id || `sub-${Date.now()}`,
          planId: selectedPlan?.id || 'basic-plan',
          nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          tier: selectedPlan?.name.toLowerCase() || 'basic',
          status: 'active',
          startDate: new Date().toISOString()
        }
      });
    
      setLoading(false);
      toast({
        title: 'Subscription Updated',
        description: `You are now subscribed to the ${selectedPlan?.name} plan.`,
        variant: 'success'
      });
      onClose();
    } catch (error) {
      setLoading(false);
      console.error('Error updating subscription:', error);
      toast({
        title: 'Error',
        description: 'Failed to update subscription. Please try again.',
        variant: 'destructive'
      });
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'No user found. Please log in again.',
        variant: 'destructive'
      });
      return;
    }

    try {
      await updateUserProfile(updates);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to update profile. Please try again.',
        variant: 'destructive'
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Manage Subscription</DialogTitle>
          <DialogDescription>
            Choose a plan that fits your needs.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "glass-morphism border-white/10 cursor-pointer",
                selectedPlan.id === plan.id ? "ring-2 ring-primary" : "hover:bg-secondary/50"
              )}
              onClick={() => setSelectedPlan(plan)}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-2xl font-bold">
                  ${plan.price} <span className="text-sm text-muted-foreground">/{plan.interval}</span>
                </div>
                <ul className="list-disc pl-4 space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground">{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={updateSubscription} disabled={loading}>
            {loading ? "Updating..." : "Update Subscription"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionManagement;
