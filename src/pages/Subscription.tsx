// Update the subscription plan interface to include "recommended" property
import { useEffect, useState } from 'react';
import { SubscriptionPlanCard } from '@/components/subscription/SubscriptionPlanCard';
import { useAuth } from '@/hooks/useAuth';
import { UserProfile } from '@/types/user-consolidated';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  color: string;
  maxLinks: number;
  maxProfiles: number;
  analyticsAccess: boolean;
  customization: boolean;
  protectionDuration: number;
  priceMonthly: number;
  priceYearly: number;
  recommended?: boolean;
}

export default function Subscription() {
  const { user } = useAuth();
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  
  useEffect(() => {
    // In a real app, these would be fetched from an API
    const subscriptionPlans: SubscriptionPlan[] = [
      {
        id: 'basic',
        name: 'Basic',
        price: 9.99,
        interval: 'month',
        description: 'For casual users looking to enhance their visibility',
        features: [
          'Basic profile customization',
          'Up to 3 social links',
          'Limited access to exclusive events',
          'Basic analytics',
          'Standard customer support'
        ],
        color: 'bg-gray-500',
        maxLinks: 3,
        maxProfiles: 1,
        analyticsAccess: false,
        customization: false,
        protectionDuration: 0,
        priceMonthly: 9.99,
        priceYearly: 99.99
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 19.99,
        interval: 'month',
        description: 'For serious users who want to boost their presence',
        features: [
          'Advanced profile customization',
          'Up to 7 social links',
          'Priority in leaderboards',
          'Advanced analytics',
          'Priority customer support',
          '3-day mockery protection'
        ],
        color: 'bg-royal-gold',
        maxLinks: 7,
        maxProfiles: 2,
        analyticsAccess: true,
        customization: true,
        protectionDuration: 3,
        priceMonthly: 19.99,
        priceYearly: 199.99,
        recommended: true
      },
      {
        id: 'royal',
        name: 'Royal',
        price: 49.99,
        interval: 'month',
        description: 'For the elite who demand the ultimate experience',
        features: [
          'Full profile customization',
          'Unlimited social links',
          'Guaranteed top 10% visibility',
          'Comprehensive analytics',
          '24/7 VIP customer support',
          '7-day mockery protection',
          'Exclusive Royal badge',
          'Access to all exclusive events'
        ],
        color: 'bg-purple-700',
        maxLinks: Infinity,
        maxProfiles: 5,
        analyticsAccess: true,
        customization: true,
        protectionDuration: 7,
        priceMonthly: 49.99,
        priceYearly: 499.99
      },
      {
        id: 'founder',
        name: 'Founder',
        price: 199.99,
        interval: 'month',
        description: 'For the true royalty of our platform',
        features: [
          'Everything in Royal tier',
          'Founder badge',
          'Team leader capabilities',
          'Create custom events',
          'Personal concierge',
          'Permanent mockery immunity',
          'Input on platform features',
          'Revenue sharing'
        ],
        color: 'bg-black',
        maxLinks: Infinity,
        maxProfiles: Infinity,
        analyticsAccess: true,
        customization: true,
        protectionDuration: 30,
        priceMonthly: 199.99,
        priceYearly: 1999.99
      }
    ];
    
    setPlans(subscriptionPlans);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Subscription Plans</h1>
      
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-l-md ${billingInterval === 'monthly' ? 'bg-royal-gold text-black' : 'bg-gray-700 text-white'}`}
          onClick={() => setBillingInterval('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r-md ${billingInterval === 'yearly' ? 'bg-royal-gold text-black' : 'bg-gray-700 text-white'}`}
          onClick={() => setBillingInterval('yearly')}
        >
          Yearly
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <SubscriptionPlanCard
            key={plan.id}
            plan={plan}
            billingInterval={billingInterval}
          />
        ))}
      </div>
    </div>
  );
}
