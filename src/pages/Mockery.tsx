
import React from 'react';
import { Container } from '@/components/ui/container';
import PageSEO from '@/components/common/PageSEO';
import RoyalMockeryFestival from '@/components/mockery/RoyalMockeryFestival';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { Crown, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mockery = () => {
  const { user } = useAuth();
  
  return (
    <>
      <PageSEO 
        title="Royal Mockery Festival" 
        description="Participate in the Royal Mockery Festival. Pay to apply cosmetic mockery effects to other users - purely visual satire with no functional impact."
        canonicalUrl="https://spendthrone.com/mockery"
      />
      
      <Container className="py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 royal-gradient text-center">Royal Mockery Festival</h1>
          <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
            Pay to apply cosmetic mockery effects to other users. A satirical exploration of the digital status economy.
          </p>
          
          {user ? (
            <RoyalMockeryFestival />
          ) : (
            <div className="text-center py-20 glass-morphism border-white/10 rounded-lg">
              <Target className="h-20 w-20 text-royal-crimson mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6">
                To participate in the Royal Mockery Festival, you must be logged in. 
                Create an account or sign in to join the festivities.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/signin">
                    <Crown className="mr-2 h-5 w-5" />
                    Sign In
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/signup">
                    <Shield className="mr-2 h-5 w-5" />
                    Create Account
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Mockery;
