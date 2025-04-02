
import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/Shell';
import SubscriptionPlanCard from '@/components/subscription/SubscriptionPlanCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/Badge';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Crown, Gift, Sparkles, Users } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { useAuth } from '@/hooks/useAuth';

// Define the local SubscriptionPlan type to avoid conflicts
interface LocalSubscriptionPlan {
  id: string;
  name: string;
  tier: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  popular?: boolean;
  cta?: string;
}

const SubscriptionPage = () => {
  const { user } = useAuth();
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>(user?.tier || 'basic');
  
  useEffect(() => {
    if (user?.tier) {
      setSelectedPlan(user.tier);
    }
  }, [user]);
  
  const handlePlanSelect = (plan: LocalSubscriptionPlan) => {
    setSelectedPlan(plan.id);
    // In a real app, you would handle subscription changes here
    console.log(`Selected plan: ${plan.id} with billing interval: ${billingInterval}`);
  };
  
  const toggleBillingInterval = () => {
    setBillingInterval(billingInterval === 'monthly' ? 'yearly' : 'monthly');
  };
  
  const yearlyDiscount = 20; // 20% discount for yearly billing
  
  const subscriptionPlans: LocalSubscriptionPlan[] = [
    {
      id: 'basic',
      tier: 'basic',
      name: 'Basic Throne',
      description: 'Essential features for casual spenders',
      price: {
        monthly: 0,
        yearly: 0
      },
      features: [
        'Basic profile customization',
        'Access to public leaderboards',
        'Standard certificate designs',
        'Basic mockery actions'
      ]
    },
    {
      id: 'silver',
      tier: 'silver',
      name: 'Silver Throne',
      description: 'Enhanced visibility for active spenders',
      price: {
        monthly: 9.99,
        yearly: 95.90
      },
      features: [
        'Silver profile badge',
        '3x rank visibility boost',
        'Enhanced profile customization',
        'Access to 5 exclusive certificate designs',
        'Silver tier mockery actions',
        'Team benefits'
      ],
      popular: true
    },
    {
      id: 'gold',
      tier: 'gold',
      name: 'Gold Throne',
      description: 'Premium features for serious spenders',
      price: {
        monthly: 19.99,
        yearly: 191.90
      },
      features: [
        'Gold profile badge',
        '5x rank visibility boost',
        'Full profile customization',
        'Access to all certificate designs',
        'Gold tier mockery actions',
        'Enhanced team benefits',
        'Priority customer support'
      ]
    },
    {
      id: 'royal',
      tier: 'royal',
      name: 'Royal Throne',
      description: 'Ultimate status for elite spenders',
      price: {
        monthly: 49.99,
        yearly: 479.90
      },
      features: [
        'Royal profile badge and aura',
        '10x rank visibility boost',
        'Full customization with animated effects',
        'Access to all certificate designs including Royal exclusives',
        'Royal tier mockery actions',
        'Comprehensive team benefits',
        'VIP customer support',
        'Early access to new features'
      ],
      cta: 'Ascend to Royalty'
    }
  ];
  
  const getReferralPlanName = (numberOfReferrals: number) => {
    if (numberOfReferrals >= 20) return 'Royal';
    if (numberOfReferrals >= 10) return 'Gold';
    if (numberOfReferrals >= 5) return 'Silver';
    return 'Basic';
  };
  
  const getTeamPlanName = (numberOfTeamMembers: number) => {
    if (numberOfTeamMembers >= 100) return 'Royal';
    if (numberOfTeamMembers >= 50) return 'Gold';
    if (numberOfTeamMembers >= 20) return 'Silver';
    return 'Basic';
  };
  
  return (
    <Shell className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upgrade Your Royal Status</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance your presence in the kingdom with premium features, increased visibility, and exclusive powers.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-2 mb-8">
          <span className={billingInterval === 'monthly' ? 'font-medium' : 'text-muted-foreground'}>Monthly</span>
          <Switch checked={billingInterval === 'yearly'} onCheckedChange={toggleBillingInterval} />
          <span className={billingInterval === 'yearly' ? 'font-medium flex items-center' : 'text-muted-foreground flex items-center'}>
            Yearly <Badge variant="outline" className="ml-2">Save {yearlyDiscount}%</Badge>
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {subscriptionPlans.map((plan) => (
            <SubscriptionPlanCard
              key={plan.id}
              plan={plan}
              onSelect={() => handlePlanSelect(plan)}
              isActive={selectedPlan === plan.id}
              billingInterval={billingInterval}
            />
          ))}
        </div>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
              Special Offers
            </CardTitle>
            <CardDescription>
              Exclusive opportunities to enhance your royal status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="referral">
              <TabsList className="mb-6">
                <TabsTrigger value="referral">
                  <Users className="h-4 w-4 mr-2" />
                  Referral Program
                </TabsTrigger>
                <TabsTrigger value="lifetime">
                  <Crown className="h-4 w-4 mr-2" />
                  Lifetime Pass
                </TabsTrigger>
                <TabsTrigger value="team">
                  <Users className="h-4 w-4 mr-2" />
                  Team Packages
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="referral">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border border-gray-200 dark:border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-lg">Silver Pass</CardTitle>
                      <CardDescription>Refer 5 new members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Refer 5 friends who sign up and you'll earn a free Silver subscription for 3 months.
                      </p>
                      <Button className="w-full">
                        <Gift className="mr-2 h-4 w-4" />
                        Start Referring
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200 dark:border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-lg">Gold Pass</CardTitle>
                      <CardDescription>Refer 10 new members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Refer 10 friends who sign up and you'll earn a free Gold subscription for 3 months.
                      </p>
                      <Button className="w-full">
                        <Gift className="mr-2 h-4 w-4" />
                        Start Referring
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200 dark:border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-lg">Royal Pass</CardTitle>
                      <CardDescription>Refer 20 new members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Refer 20 friends who sign up and you'll earn a free Royal subscription for 3 months.
                      </p>
                      <Button className="w-full">
                        <Gift className="mr-2 h-4 w-4" />
                        Start Referring
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="lifetime">
                <Card className="border border-white/10 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-black">Exclusive Offer</Badge>
                    <CardTitle>Lifetime Royal Pass</CardTitle>
                    <CardDescription>One-time payment, endless royal benefits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">{formatCurrency(599)}</span>
                      <span className="text-sm text-muted-foreground ml-2">one-time payment</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>Permanent Royal tier status</span>
                      </li>
                      <li className="flex items-center">
                        <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>All Royal features forever</span>
                      </li>
                      <li className="flex items-center">
                        <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>Early access to all future features</span>
                      </li>
                      <li className="flex items-center">
                        <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>Exclusive Lifetime Royalty badge</span>
                      </li>
                      <li className="flex items-center">
                        <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>Priority customer support for life</span>
                      </li>
                    </ul>
                    
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 text-black hover:from-yellow-500 hover:to-amber-700">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Become Lifetime Royalty
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="team">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border border-gray-200 dark:border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-lg">Team Silver Pass</CardTitle>
                      <CardDescription>For teams with 20+ members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline mb-4">
                        <span className="text-2xl font-bold">{formatCurrency(7.99)}</span>
                        <span className="text-sm text-muted-foreground ml-2">per member/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Perfect for small to medium teams looking to enhance their collective status in the kingdom.
                      </p>
                      <Button className="w-full">
                        Contact for Team Pricing
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200 dark:border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-lg">Team Gold Pass</CardTitle>
                      <CardDescription>For teams with 50+ members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline mb-4">
                        <span className="text-2xl font-bold">{formatCurrency(15.99)}</span>
                        <span className="text-sm text-muted-foreground ml-2">per member/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ideal for larger teams looking to dominate the kingdom with premium status and features.
                      </p>
                      <Button className="w-full">
                        Contact for Team Pricing
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Need help choosing a plan?</h2>
          <p className="text-muted-foreground mb-4">
            Our royal advisors are ready to assist you in selecting the perfect plan for your spending habits.
          </p>
          <Button variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </Shell>
  );
};

export default SubscriptionPage;
