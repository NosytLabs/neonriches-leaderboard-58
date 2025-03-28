
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, ArrowLeft, Check } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { FEATURE_METADATA } from '@/config/subscriptions';

const SubscriptionSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // Parse URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');
    
    if (!sessionId) {
      // No session ID found, redirect back to home after a delay
      const timeout = setTimeout(() => navigate('/'), 5000);
      return () => clearTimeout(timeout);
    }
    
    // In a real implementation, you would verify the subscription status with Stripe here
    
  }, [location, navigate]);
  
  // List of standard features unlocked with subscription
  const unlockedFeatures = [
    'premium_profile',
    'analytics',
    'profile_boost',
    'custom_themes'
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="max-w-md w-full glass-morphism border-royal-gold/20">
          <CardHeader className="pb-4">
            <div className="mx-auto mb-4 w-16 h-16 bg-royal-gold/10 rounded-full flex items-center justify-center">
              <Crown className="h-10 w-10 text-royal-gold" />
            </div>
            <CardTitle className="text-center text-2xl">Welcome to Royalty!</CardTitle>
            <CardDescription className="text-center">
              Your subscription has been successfully activated
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-royal-gold font-medium mb-2">Unlocked Features:</h3>
              <ul className="space-y-2">
                {unlockedFeatures.map(feature => (
                  <li key={feature} className="flex items-start text-sm">
                    <Check size={16} className="mr-2 mt-0.5 text-royal-gold" />
                    <div>
                      <p className="font-medium">{FEATURE_METADATA[feature]?.name || feature}</p>
                      <p className="text-white/60 text-xs">{FEATURE_METADATA[feature]?.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="flex-1 glass-morphism border-white/10 hover:bg-white/10"
                asChild
              >
                <Link to="/">
                  <Crown className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              
              <Button 
                className="flex-1 bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90"
                asChild
              >
                <Link to={user ? `/profile/${user.username}` : "/auth"}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {user ? 'Customize Profile' : 'Sign In'}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionSuccess;
