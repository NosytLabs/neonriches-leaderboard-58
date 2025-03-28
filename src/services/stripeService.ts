
import { supabase } from "@/integrations/supabase/client";
import { UserProfile } from "@/types/user";
import { toast } from "@/hooks/use-toast";

// Function to create a checkout session for one-time payments
export const createCheckoutSession = async (
  amount: number,
  description: string,
  featureType: 'wallet' | 'boost' | 'cosmetic' | 'general' = 'general',
  productId?: string
): Promise<{ url: string; sessionId: string } | null> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    const customerId = user?.user?.id || null;

    const { data, error } = await supabase.functions.invoke('create-checkout-session', {
      body: {
        amount,
        description,
        featureType,
        productId,
        customerId
      }
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    toast({
      title: "Payment Error",
      description: "Could not initialize payment process. Please try again.",
      variant: "destructive"
    });
    return null;
  }
};

// Function to create a subscription
export const createSubscription = async (
  priceId: string,
  email?: string
): Promise<{ url: string; sessionId: string } | null> => {
  try {
    const { data: userData } = await supabase.auth.getUser();
    const customerId = userData?.user?.id || null;

    const { data, error } = await supabase.functions.invoke('create-subscription', {
      body: {
        priceId,
        customerId,
        email: email || userData?.user?.email
      }
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating subscription:', error);
    toast({
      title: "Subscription Error",
      description: "Could not initialize subscription. Please try again.",
      variant: "destructive"
    });
    return null;
  }
};

// Function to verify subscription status
export const verifySubscription = async (
  priceId?: string
): Promise<{
  hasActiveSubscription: boolean;
  activeFeatures: string[];
  subscriptions: any[];
} | null> => {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      return {
        hasActiveSubscription: false,
        activeFeatures: [],
        subscriptions: []
      };
    }

    const { data, error } = await supabase.functions.invoke('verify-subscription', {
      body: {
        customerId: userData.user.id,
        priceId
      }
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error verifying subscription:', error);
    return null;
  }
};

// Function to process wallet deposit via Stripe
export const depositToWalletViaStripe = async (
  user: UserProfile,
  amount: number,
  description: string = "Wallet deposit"
): Promise<boolean> => {
  try {
    const checkoutData = await createCheckoutSession(
      amount,
      description,
      'wallet'
    );
    
    if (!checkoutData?.url) {
      throw new Error("Failed to create checkout session");
    }
    
    // Redirect to Stripe checkout
    window.location.href = checkoutData.url;
    return true;
  } catch (error) {
    console.error('Error depositing to wallet:', error);
    toast({
      title: "Deposit Failed",
      description: error.message || "Could not process your deposit",
      variant: "destructive"
    });
    return false;
  }
};
