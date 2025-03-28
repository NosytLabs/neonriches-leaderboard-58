
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { UserProfile } from '@/types/user';
import { useToast } from '@/hooks/use-toast';
import { useAuthState, useAuthMethods } from './authHooks';
import { AuthContextType } from '@/types/auth-context';

// Create the context
export const AuthContext = createContext<AuthContextType | null>(null);

// Create the provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { 
    user, 
    setUser, 
    isLoading, 
    setIsLoading, 
    error, 
    setError,
    isAuthModalOpen,
    setIsAuthModalOpen,
    session,
    setSession
  } = useAuthState();

  const { toast } = useToast();

  const {
    login,
    register,
    logout,
    updateUserProfile,
    boostProfile,
    awardCosmetic
  } = useAuthMethods(user, setUser, setIsLoading, setError);

  // Initialize auth state
  useEffect(() => {
    // First set up the auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log('Auth state changed:', event);
        setSession(newSession);
        setUser(newSession?.user ? mapUserData(newSession.user) : null);
        
        // For sign out events, ensure we clean up properly
        if (event === 'SIGNED_OUT') {
          setUser(null);
          localStorage.removeItem('p2w_user');
        }
      }
    );

    // Then check for existing session
    const initializeAuth = async () => {
      setIsLoading(true);
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);
        
        if (currentSession?.user) {
          setUser(mapUserData(currentSession.user));
        }
      } catch (err) {
        console.error('Error initializing auth:', err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Clean up subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Map Supabase user to our app's user format
  const mapUserData = (supabaseUser: User): UserProfile => {
    // In a real implementation, you would fetch additional user data
    // from a profiles table here
    return {
      id: supabaseUser.id,
      username: supabaseUser.user_metadata?.username || 'Anonymous User',
      email: supabaseUser.email || '',
      displayName: supabaseUser.user_metadata?.display_name,
      profileImage: supabaseUser.user_metadata?.avatar_url,
      role: supabaseUser.user_metadata?.role || 'user',
      status: 'active',
      walletBalance: 0,
      totalSpent: 0, // Ensure required property is added
      joinDate: supabaseUser.created_at || new Date().toISOString(),
      team: supabaseUser.user_metadata?.team || 'none',
      tier: supabaseUser.user_metadata?.tier || 'basic',
      rank: 0, // Will be updated from leaderboard data
      cosmetics: {
        borders: [],
        colors: [],
        fonts: [],
        emojis: [],
        titles: [],
        backgrounds: [],
        effects: [],
        badges: [],
        themes: []
      },
      profileViews: 0,
      profileClicks: 0,
      followers: 0,
      subscription: {
        status: 'active',
        tier: 'basic',
        interval: 'monthly',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        autoRenew: true,
        features: ['Basic Profile', 'Leaderboard Entry'],
      },
      profileBoosts: []
    };
  };

  // Create the auth context value
  const authContextValue: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    updateUserProfile,
    login,
    register,
    logout,
    // Keep signOut as an alias for logout for backward compatibility
    signOut: logout,
    openAuthModal: () => setIsAuthModalOpen(true),
    closeAuthModal: () => setIsAuthModalOpen(false),
    boostProfile,
    awardCosmetic,
    refreshUser: async () => {
      // Fetch updated user data from database
      if (user?.id) {
        try {
          const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (error) {
            console.error('Error refreshing user:', error);
            return;
          }
          
          if (data) {
            setUser({
              ...user,
              ...data,
              totalSpent: data.amountSpent || data.spentAmount || 0 // Ensure required property is included
            });
          }
        } catch (err) {
          console.error('Error refreshing user profile:', err);
        }
      }
    },
    sendPasswordResetEmail: async (email: string) => {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`
        });
        
        if (error) throw error;
        
        toast({
          title: "Password Reset Link Sent",
          description: "Check your email for password reset instructions",
        });
        
        return true;
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to send password reset email",
          variant: "destructive"
        });
        
        return false;
      }
    },
    confirmPasswordReset: async (token: string, newPassword: string) => {
      try {
        const { error } = await supabase.auth.updateUser({
          password: newPassword
        });
        
        if (error) throw error;
        
        toast({
          title: "Password Updated",
          description: "Your password has been reset successfully",
        });
        
        return true;
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to reset password",
          variant: "destructive"
        });
        
        return false;
      }
    }
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
