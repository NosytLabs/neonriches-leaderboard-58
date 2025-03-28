
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@14.21.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    });

    const { customerId, priceId } = await req.json();

    if (!customerId) {
      throw new Error('Customer ID is required');
    }

    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      price: priceId, // Optional: check for a specific price
      limit: 100,
    });

    // Get active features based on the subscriptions
    const activeFeatures = new Set();
    const subscriptionData = [];

    for (const subscription of subscriptions.data) {
      // Extract subscription details
      const subData = {
        id: subscription.id,
        status: subscription.status,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        items: subscription.items.data.map(item => ({
          priceId: item.price.id,
          productId: item.price.product,
        }))
      };
      
      subscriptionData.push(subData);
      
      // For each subscription item, get the product details to determine features
      for (const item of subscription.items.data) {
        const product = await stripe.products.retrieve(item.price.product as string);
        
        // Check metadata for features
        if (product.metadata && product.metadata.features) {
          try {
            const features = JSON.parse(product.metadata.features);
            features.forEach((feature: string) => activeFeatures.add(feature));
          } catch (e) {
            console.error('Error parsing features:', e);
          }
        }
        
        // Add the product name as a feature
        if (product.name) {
          activeFeatures.add(product.name.toLowerCase().replace(/\s+/g, '_'));
        }
      }
    }

    return new Response(
      JSON.stringify({
        hasActiveSubscription: subscriptions.data.length > 0,
        subscriptions: subscriptionData,
        activeFeatures: Array.from(activeFeatures),
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error verifying subscription:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
