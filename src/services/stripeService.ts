
/**
 * Mock Stripe service for handling payments
 * In a real application, this would communicate with a backend API
 */

interface CheckoutSessionOptions {
  amount: number;
  title: string;
  featureType?: string;
  productId?: string;
}

interface CheckoutSessionResponse {
  id?: string;
  url?: string;
  error?: string;
}

export const createCheckoutSession = async (
  amount: number,
  title: string,
  featureType: string = 'general',
  productId?: string
): Promise<CheckoutSessionResponse> => {
  // In a real app, this would be an API call to your backend, which would then create a Stripe session
  console.log('Creating checkout session', { amount, title, featureType, productId });
  
  // Mock success response - simulate API latency
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return a mock checkout URL
  return {
    id: `cs_test_${Math.random().toString(36).substring(2, 15)}`,
    url: `/payment-success?amount=${amount}&title=${encodeURIComponent(title)}`
  };
};

export const verifyPaymentIntent = async (paymentIntentId: string): Promise<boolean> => {
  // In a real app, this would verify the payment intent with your backend
  console.log('Verifying payment intent', paymentIntentId);
  
  // Mock success
  return true;
};

// Add missing function
export const createSubscription = async (
  plan: string,
  interval: 'monthly' | 'yearly' = 'monthly'
): Promise<CheckoutSessionResponse> => {
  // In a real app, this would create a subscription with Stripe
  console.log(`Creating subscription for plan ${plan} with interval ${interval}`);
  
  // Mock API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return mock URL
  return {
    id: `sub_${Math.random().toString(36).substring(2, 15)}`,
    url: `/subscription-success?plan=${encodeURIComponent(plan)}&interval=${interval}`
  };
};
