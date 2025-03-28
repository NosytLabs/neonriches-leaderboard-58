
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { UserSubscription } from '@/types/user';

const SubscriptionManagement = () => {
  const { user, updateUserProfile } = useAuth();
  const [selectedTier, setSelectedTier] = useState<'free' | 'pro'>(user?.subscription?.tier || 'free');
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>(
    (user?.subscription?.interval as 'monthly' | 'quarterly' | 'yearly') || 'monthly'
  );

  // Define tier prices based on billing cycle
  const tierPrices = {
    free: 0,
    pro: selectedBillingCycle === 'monthly' ? 9.99 : 
         selectedBillingCycle === 'quarterly' ? 24.99 : 89.99
  };

  // Define features for each tier
  const tierFeatures = {
    free: [
      'Basic profile',
      'One profile image',
      'One external link',
      'Basic text formatting'
    ],
    pro: [
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

  // Create subscription object
  const subscription: UserSubscription = {
    id: 'sub_123456',
    tier: selectedTier,
    status: 'active',
    startDate: new Date(),
    renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    paymentMethod: 'credit_card',
    autoRenew: true,
    price: tierPrices[selectedTier],
    interval: selectedBillingCycle === 'annual' ? 'yearly' : selectedBillingCycle,
    features: tierFeatures[selectedTier]
  };

  return (
    <div>
      {/* Subscription management component content */}
      <h2>Manage your subscription</h2>
      <p>Current tier: {selectedTier}</p>
    </div>
  );
};

// Make sure there's a default export
export default SubscriptionManagement;
