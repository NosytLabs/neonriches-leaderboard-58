import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, Timer, TrendingUp, TrendingDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/Badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formatCurrency } from '@/utils/formatters';
import { createUserSubscription } from '@/utils/typeAdapters';

const formSchema = z.object({
  couponCode: z.string().optional(),
})

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  tier: string;
  isPopular?: boolean;
  benefits?: string[];
}

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({ plan }) => {
  return (
    <Card className="p-4 border-2 border-white/10 hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-2xl font-bold">{formatCurrency(plan.price)}</div>
        <ul className="list-disc pl-5 space-y-1">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const SubscriptionManagement = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [nextBillingDate, setNextBillingDate] = useState('July 22, 2024');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      couponCode: "",
    },
  })

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential features for getting started.',
      price: 9.99,
      features: ['Access to standard features', 'Limited support'],
      tier: 'basic',
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Advanced features for professional users.',
      price: 29.99,
      features: ['Access to premium features', 'Priority support', 'Exclusive content'],
      tier: 'premium',
      isPopular: true,
    },
    {
      id: 'royal',
      name: 'Royal',
      description: 'The ultimate experience with top-tier features.',
      price: 99.99,
      features: ['All premium features', 'Dedicated support', 'Early access to new features'],
      tier: 'royal',
    },
  ];

  const handleUpgrade = (plan: SubscriptionPlan) => {
    toast({
      title: "Upgrade Initiated",
      description: `Upgrading to ${plan.name} plan. Redirecting to payment...`,
    });
    setTimeout(() => {
      navigate('/payment');
    }, 1500);
  };

  const handleCancelSubscription = () => {
    toast({
      title: "Subscription Cancelled",
      description: "Your subscription has been cancelled. You will retain access until the end of the current billing cycle.",
    });
  };

  const handleApplyCoupon = (couponCode: string) => {
    if (couponCode === 'DISCOUNT20') {
      toast({
        title: "Coupon Applied",
        description: "Discount applied successfully!",
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is not valid.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const currentPlan = subscriptionPlans.find(plan => plan.tier === user.tier) || subscriptionPlans[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-black/20 border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Manage Subscription</CardTitle>
          <CardDescription>
            View your current plan, upgrade, or cancel your subscription.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Current Plan: {currentPlan.name}</h3>
              <p className="text-muted-foreground">
                Next billing date: {nextBillingDate}
              </p>
            </div>
            <Badge variant="secondary">{currentPlan.tier}</Badge>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subscriptionPlans.map((plan) => {
              const updatedSubscription = createUserSubscription(
                plan.id,
                nextBillingDate,
                'active',
                plan.tier
              );
              return (
                <SubscriptionPlanCard key={plan.id} plan={plan} billingInterval="monthly" />
              );
            })}
          </div>

          <Separator />

          <Form {...form}>
            <form onSubmit={form.handleSubmit((values) => handleApplyCoupon(values.couponCode || ''))} className="space-y-2">
              <FormField
                control={form.control}
                name="couponCode"
                render={({ field }) => (
                  <FormItem>
                    <Label>Coupon Code</Label>
                    <FormControl>
                      <Input placeholder="Enter coupon code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="sm">Apply Coupon</Button>
            </form>
          </Form>

          <Separator />

          <div className="flex justify-end space-x-2">
            <Button variant="destructive" onClick={handleCancelSubscription}>
              Cancel Subscription
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Upgrade Plan</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Upgrade Subscription</DialogTitle>
                  <DialogDescription>
                    Select a plan to upgrade your subscription.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {subscriptionPlans.map((plan) => (
                    <div key={plan.id} className="border p-4 rounded-md">
                      <h4 className="font-semibold">{plan.name}</h4>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                      <Button onClick={() => handleUpgrade(plan)} className="mt-2">
                        Upgrade to {plan.name}
                      </Button>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionManagement;
