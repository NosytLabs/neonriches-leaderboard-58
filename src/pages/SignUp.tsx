
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RoyalDivider } from '@/components/ui/royal-divider';
import { useAuth } from '@/contexts/AuthContext';

const SignUp: React.FC = () => {
  const { signup } = useAuth();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-center royal-gradient">Join the Royal Court</CardTitle>
          <CardDescription className="text-center">
            Create an account to climb the royal leaderboard and mock the peasants
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-center text-white/70">
            Sign up functionality is currently being built by the royal engineers.
          </p>
          
          <RoyalDivider variant="fancy" />
          
          <div className="text-center">
            <p className="mb-4">Already have a royal account?</p>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button variant="link" asChild>
            <Link to="/">Return to the Royal Court</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
