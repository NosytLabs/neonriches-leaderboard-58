
import { User, UserProfile } from '@/types/user';
import { toast } from '@/hooks/use-toast';

interface StripePrice {
  id: string;
  name: string;
  amount: number;
  currency: string;
  interval?: string;
  description?: string;
}

interface StripeSession {
  id: string;
  url: string;
}

export const createCheckoutSession = async (
  user: User | UserProfile,
  priceId: string,
  quantity: number = 1,
  metadata: Record<string, string> = {}
): Promise<StripeSession | null> => {
  try {
    // Mock implementation - in a real app, this would make an API call
    console.log(`Creating checkout session for ${user.username} with price ${priceId}, quantity ${quantity}`);
    
    // Return a mock session
    return {
      id: `cs_${Math.random().toString(36).substring(2, 15)}`,
      url: `https://checkout.stripe.com/mock-session/${priceId}`,
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    toast({
      title: 'Error',
      description: 'Could not create checkout session',
      variant: 'destructive',
    });
    return null;
  }
};

export const getPrices = async (): Promise<StripePrice[]> => {
  // Mock implementation - in a real app, this would make an API call
  return [
    {
      id: 'price_royal_tier_monthly',
      name: 'Royal Tier',
      amount: 9.99,
      currency: 'USD',
      interval: 'month',
      description: 'Full access to all premium features',
    },
    {
      id: 'price_premium_tier_monthly',
      name: 'Premium Tier',
      amount: 4.99,
      currency: 'USD',
      interval: 'month',
      description: 'Enhanced features and customizations',
    },
    {
      id: 'one_time_10',
      name: '$10 Credit',
      amount: 10,
      currency: 'USD',
      description: 'Add $10 to your account',
    },
    {
      id: 'one_time_50',
      name: '$50 Credit',
      amount: 50,
      currency: 'USD',
      description: 'Add $50 to your account',
    },
    {
      id: 'one_time_100',
      name: '$100 Credit',
      amount: 100,
      currency: 'USD',
      description: 'Add $100 to your account',
    },
  ];
};

export default {
  createCheckoutSession,
  getPrices,
};
