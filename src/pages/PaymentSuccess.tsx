
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Home } from 'lucide-react';
import { useAuth } from '@/contexts/auth';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [paymentType, setPaymentType] = useState<'general' | 'subscription'>('general');
  
  // Parse URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');
    
    if (!sessionId) {
      // No session ID found, redirect back to home after a delay
      const timeout = setTimeout(() => navigate('/'), 5000);
      return () => clearTimeout(timeout);
    }
    
    // Determine payment type based on URL path
    const isSubscription = location.pathname.includes('subscription');
    setPaymentType(isSubscription ? 'subscription' : 'general');
    
    // In a real implementation, you would verify the payment status with Stripe here
    
  }, [location, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="max-w-md w-full glass-morphism border-royal-gold/20">
          <CardHeader className="pb-4">
            <div className="mx-auto mb-4 w-16 h-16 bg-royal-gold/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-royal-gold" />
            </div>
            <CardTitle className="text-center text-2xl">Payment Successful!</CardTitle>
            <CardDescription className="text-center">
              {paymentType === 'subscription' 
                ? 'Your subscription has been successfully activated.' 
                : 'Your payment has been processed successfully.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg text-center text-white/70">
              {paymentType === 'subscription' 
                ? 'You now have access to premium features. Enjoy your enhanced experience!' 
                : 'Thank you for your contribution. Your generosity raises your status in the royal court.'}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="flex-1 glass-morphism border-white/10 hover:bg-white/10"
                asChild
              >
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
              
              <Button 
                className="flex-1 bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90"
                asChild
              >
                <Link to={user ? `/profile/${user.username}` : "/auth"}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {user ? 'Go to Profile' : 'Sign In'}
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

export default PaymentSuccess;
