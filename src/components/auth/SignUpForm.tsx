
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import useNotificationSounds from '@/hooks/use-notification-sounds';

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  referralCode: z.string().optional(),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { signUp, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { playSound } = useNotificationSounds();
  
  // Extract referral code from URL if present
  const searchParams = new URLSearchParams(location.search);
  const referralCodeFromURL = searchParams.get('ref');
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      referralCode: referralCodeFromURL || "",
    },
  });
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Check if username is already taken
      const { data: existingUsers, error: userCheckError } = await supabase
        .from('users')
        .select('username')
        .eq('username', values.username)
        .limit(1);
      
      if (userCheckError) throw userCheckError;
      
      if (existingUsers && existingUsers.length > 0) {
        form.setError('username', { 
          type: 'manual', 
          message: 'This username is already taken'
        });
        playSound('error', 0.3);
        return;
      }
      
      // Process referral if provided
      let referralData = null;
      if (values.referralCode) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/process-referral`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
              },
              body: JSON.stringify({
                referralCode: values.referralCode,
                userId: '' // Will be updated after sign up
              })
            }
          );
          
          if (response.ok) {
            referralData = await response.json();
          } else {
            const errorData = await response.json();
            console.warn('Referral warning:', errorData);
            // Don't stop signup if referral processing fails
          }
        } catch (referralError) {
          console.warn('Referral processing error:', referralError);
          // Don't stop signup if referral processing fails
        }
      }
      
      // Sign up with Supabase Auth
      const result = await signUp(values.email, values.password, values.username);
      
      if (!result.success) {
        throw new Error(result.error || 'Sign up failed');
      }
      
      // If referral was processed earlier, update it with the new user ID
      if (referralData && result.userId) {
        try {
          await fetch(
            `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/process-referral`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
              },
              body: JSON.stringify({
                referralCode: values.referralCode,
                userId: result.userId
              })
            }
          );
        } catch (referralUpdateError) {
          console.warn('Referral update error:', referralUpdateError);
          // Don't stop signup if referral update fails
        }
      }
      
      playSound('success', 0.3);
      
      toast({
        title: "Account created",
        description: "Welcome to SpendThrone! Your journey to digital nobility begins.",
      });
      
      // Redirect to dashboard or onboarding
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign up error:', error);
      
      if (error instanceof Error) {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign up failed",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
      
      playSound('error', 0.3);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-morphism border-white/10 p-6 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Begin Your Noble Journey</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Create a password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="referralCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Referral Code (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter referral code if you have one" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-royal-gold text-black hover:bg-royal-gold/90" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></div>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        <span className="text-white/70">Already have an account? </span>
        <Link to="/login" className="text-royal-gold hover:underline">
          Sign In
        </Link>
      </div>
      <div className="mt-2 text-center text-xs text-white/50">
        By signing up, you agree to the noble terms of the realm.
      </div>
    </div>
  );
};

export default SignUpForm;
