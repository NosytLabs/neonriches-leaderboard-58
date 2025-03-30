
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { AuthContextType } from '@/types/auth-context';

// Create the context with a default value
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  register: async () => false,
  logout: async () => {},
});

// Create a provider component
export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        if (currentSession) {
          fetchUserProfile(currentSession.user);
        } else {
          setUser(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      if (currentSession) {
        fetchUserProfile(currentSession.user);
      }
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchUserProfile = async (authUser: User) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();
      
      if (error) {
        console.error('Error fetching user profile:', error);
        return;
      }
      
      // Transform to UserProfile format
      if (data) {
        const userProfile: UserProfile = {
          id: data.id,
          email: authUser.email || '',
          username: data.username,
          displayName: data.display_name,
          walletBalance: data.wallet_balance || 0,
          rank: data.rank || 0,
          team: data.team || 'none',
          tier: data.tier || 'basic',
          totalSpent: data.total_spent || 0,
          profileImage: data.profile_image,
          joinedAt: new Date(data.joined_at)
        };
        
        setUser(userProfile);
      } else {
        console.log('No user profile found');
      }
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('Login error:', error.message);
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
        return false;
      }
      
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      
      return true;
    } catch (error) {
      console.error('Unexpected login error:', error);
      toast({
        title: "Login failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // First, register the user with Supabase Auth
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username
          }
        }
      });
      
      if (signUpError) {
        console.error('Registration error:', signUpError.message);
        toast({
          title: "Registration failed",
          description: signUpError.message,
          variant: "destructive",
        });
        return false;
      }
      
      // If the user is created, create a profile in the users table
      if (data.user) {
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: data.user.id,
              username,
              email,
              display_name: username,
              tier: 'basic',
              joined_at: new Date().toISOString()
            }
          ]);
          
        if (profileError) {
          console.error('Profile creation error:', profileError);
          toast({
            title: "Profile creation failed",
            description: "Your account was created but we couldn't set up your profile",
            variant: "destructive",
          });
        }
      }
      
      toast({
        title: "Registration successful",
        description: "Welcome to SpendThrone!",
      });
      
      return true;
    } catch (error) {
      console.error('Unexpected registration error:', error);
      toast({
        title: "Registration failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Logout error:', error.message);
        toast({
          title: "Logout failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      
      setUser(null);
      setSession(null);
      
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    } catch (error) {
      console.error('Unexpected logout error:', error);
      toast({
        title: "Logout failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    try {
      if (!user || !session) {
        toast({
          title: "Profile update failed",
          description: "You must be logged in to update your profile",
          variant: "destructive",
        });
        return;
      }
      
      // Transform UserProfile updates to database format
      const dbUpdates = {
        username: updates.username,
        display_name: updates.displayName,
        profile_image: updates.profileImage,
        team: updates.team,
        tier: updates.tier,
        // Add other fields as needed
      };
      
      // Remove undefined values
      Object.keys(dbUpdates).forEach(key => {
        if (dbUpdates[key] === undefined) {
          delete dbUpdates[key];
        }
      });
      
      if (Object.keys(dbUpdates).length > 0) {
        const { error } = await supabase
          .from('users')
          .update(dbUpdates)
          .eq('id', user.id);
          
        if (error) {
          console.error('Profile update error:', error);
          toast({
            title: "Profile update failed",
            description: error.message,
            variant: "destructive",
          });
          return;
        }
        
        // Update local state
        setUser({ ...user, ...updates });
        
        toast({
          title: "Profile updated",
          description: "Your profile has been successfully updated",
        });
      }
    } catch (error) {
      console.error('Unexpected profile update error:', error);
      toast({
        title: "Profile update failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!session,
        isLoading,
        login,
        register,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
