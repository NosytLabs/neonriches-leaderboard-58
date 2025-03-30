
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import PasswordInput from './PasswordInput';
import FormError from './FormError';

const formSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type FormValues = z.infer<typeof formSchema>;

interface SignUpFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess, redirectTo }) => {
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const success = await register(data.username, data.email, data.password);
      
      if (success) {
        toast({
          title: 'Registration successful',
          description: 'Welcome to SpendThrone!',
        });
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {error && <FormError message={error} />}
      
      <div>
        <Input
          placeholder="Username"
          {...form.register('username')}
          className="glass-morphism border-white/10"
        />
        {form.formState.errors.username && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.username.message}</p>
        )}
      </div>
      
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...form.register('email')}
          className="glass-morphism border-white/10"
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      
      <div>
        <PasswordInput
          placeholder="Password"
          {...form.register('password')}
          className="glass-morphism border-white/10"
        />
        {form.formState.errors.password && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
        )}
      </div>
      
      <div>
        <PasswordInput
          placeholder="Confirm Password"
          {...form.register('confirmPassword')}
          className="glass-morphism border-white/10"
        />
        {form.formState.errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.confirmPassword.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Create account'}
      </Button>
    </form>
  );
};

export default SignUpForm;

