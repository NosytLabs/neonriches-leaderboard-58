
  // Only changing the 'annual' to 'yearly' to match the expected type
  const subscription = {
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
