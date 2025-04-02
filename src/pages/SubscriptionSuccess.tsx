
import React from 'react';
import { Shell } from '@/components/ui/shell/Shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Confetti } from '@/components/ui/confetti';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscriptionSuccess = () => {
  // Mocked subscription plans benefits
  const planBenefits = {
    analytics: {
      free: 'Basic analytics',
      basic: 'Enhanced analytics',
      premium: 'Advanced analytics',
      royal: 'Comprehensive analytics'
    },
    links: {
      free: '3 social links',
      basic: '5 social links',
      premium: '10 social links',
      royal: 'Unlimited social links'
    },
    visibility: {
      free: 'Standard visibility',
      basic: 'Improved visibility',
      premium: 'High visibility',
      royal: 'Maximum visibility'
    },
    marketing: {
      free: 'No marketing tools',
      basic: 'Basic marketing tools',
      premium: 'Advanced marketing tools',
      royal: 'Premium marketing suite'
    },
    protection: {
      free: 'No protection',
      basic: '24h protection',
      premium: '48h protection',
      royal: '72h protection'
    }
  };

  // You would normally get this from the subscription response
  const subscribedPlan = 'premium';
  const planLabel = subscribedPlan.charAt(0).toUpperCase() + subscribedPlan.slice(1);

  return (
    <Shell>
      <Confetti />
      <div className="container py-10 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Subscription Activated!</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Thank you for subscribing to the {planLabel} Plan
          </p>
        </div>

        <Card className="shadow-lg border-success/20 bg-card">
          <CardHeader className="pb-4 border-b">
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <Check className="h-5 w-5 text-white" />
              </div>
              Your {planLabel} Plan is Active
            </CardTitle>
            <CardDescription>
              Your subscription has been successfully processed and your account has been upgraded.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Your Premium Benefits</h3>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <span>{planBenefits.analytics[subscribedPlan as keyof typeof planBenefits.analytics]}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <span>{planBenefits.links[subscribedPlan as keyof typeof planBenefits.links]}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <span>{planBenefits.visibility[subscribedPlan as keyof typeof planBenefits.visibility]}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <span>{planBenefits.marketing[subscribedPlan as keyof typeof planBenefits.marketing]}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <span>{planBenefits.protection[subscribedPlan as keyof typeof planBenefits.protection]}</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/dashboard">
                  Go to Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/settings">
                  Manage Subscription
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
};

export default SubscriptionSuccess;
