
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Shell } from '@/components/ui/Shell';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PageSEO } from '@/components/SEO/PageSEO';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export default function SignInPage() {
  const { login, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    
    try {
      await login(values.email, values.password);
      toast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
      });
      navigate('/dashboard');
    } catch (err) {
      let errorMessage = 'Failed to sign in. Please check your credentials.';
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Authentication failed',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Shell className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-background/80 p-4">
      <PageSEO 
        title="Sign In | SpendThrone" 
        description="Sign in to SpendThrone to flaunt your spending power and climb the social hierarchy."
      />
      <div className="flex flex-col items-center space-y-4 w-full max-w-md">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">SpendThrone</h1>
          <CardDescription className="text-muted-foreground mt-1">Sign in to your account</CardDescription>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your royal account</CardDescription>
          </CardHeader>
          
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
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
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </Form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
            </div>
            <div className="text-center text-sm">
              <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
            </div>
          </CardFooter>
        </Card>
        
        <div className="text-center text-xs text-muted-foreground mt-8">
          <div className="mb-1">By signing in, you agree to our <Link to="/terms" className="hover:underline">Terms of Service</Link> and <Link to="/privacy" className="hover:underline">Privacy Policy</Link></div>
          <div>© {new Date().getFullYear()} SpendThrone. All rights reserved.</div>
        </div>
      </div>
    </Shell>
  );
}
