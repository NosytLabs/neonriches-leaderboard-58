
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User as SupabaseUser } from '@supabase/supabase-js';
import { User, UserProfile } from '@/types/user';

export interface SignUpParams {
  username: string;
  email: string;
  password: string;
  referralCode?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserProfile | null;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (params: SignUpParams) => Promise<boolean>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const defaultContext: AuthContextType = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  session: null,
  signIn: async () => false,
  signUp: async () => false,
  signOut: async () => {},
  refreshUser: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Get session
        const { data: currentSession } = await supabase.auth.getSession();
        setSession(currentSession.session);
        
        // Set up auth state change listener
        const { data: { subscription } } = await supabase.auth.onAuthStateChange(
          (_event, newSession) => {
            setSession(newSession);
          }
        );
        
        // If we have a session, fetch the user profile
        if (currentSession.session) {
          await fetchUserProfile(currentSession.session.user);
        } else {
          setIsLoading(false);
        }
        
        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error initializing auth:', error);
        setIsLoading(false);
      }
    };
    
    initializeAuth();
  }, []);
  
  // Fetch user profile whenever session changes
  useEffect(() => {
    if (session?.user) {
      fetchUserProfile(session.user);
    } else {
      setUser(null);
      setIsLoading(false);
    }
  }, [session]);
  
  // Fetch the full user profile from the database
  const fetchUserProfile = async (authUser: SupabaseUser) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();
      
      if (error) {
        throw error;
      }
      
      if (data) {
        // Cast to UserProfile with required fields
        const userProfile: UserProfile = {
          id: data.id,
          username: data.username,
          email: data.email || authUser.email || '',
          profileImage: data.profile_image || '',
          amountSpent: data.amount_spent || 0,
          walletBalance: data.wallet_balance || 0,
          rank: data.rank || 0,
          joinedAt: data.created_at || new Date().toISOString(),
          tier: data.tier || 'basic',
          team: data.team || 'none',
          displayName: data.display_name || data.username,
          bio: data.bio || '',
        };
        
        setUser(userProfile);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Error signing in:', error.message);
        return false;
      }
      
      return !!data.session;
    } catch (error) {
      console.error('Error during sign in:', error);
      return false;
    }
  };
  
  const signUp = async (params: SignUpParams): Promise<boolean> => {
    const { username, email, password, referralCode } = params;
    
    try {
      // First register with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            referral_code: referralCode,
          },
        },
      });
      
      if (error) {
        console.error('Error signing up:', error.message);
        return false;
      }
      
      // If auth signup succeeded but session isn't available yet (email confirmation required)
      if (!data.session) {
        return true; // Signup succeeded but needs email confirmation
      }
      
      // Create user profile in the database
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: data.user?.id,
          username,
          email,
          created_at: new Date().toISOString(),
          referred_by: referralCode,
        });
      
      if (profileError) {
        console.error('Error creating user profile:', profileError.message);
        return false;
      }
      
      // Process referral if code was provided
      if (referralCode) {
        try {
          await supabase.functions.invoke('process-referral', {
            body: {
              referralCode,
              userId: data.user?.id,
            },
          });
        } catch (referralError) {
          console.error('Error processing referral:', referralError);
          // Continue even if referral processing fails
        }
      }
      
      return true;
    } catch (error) {
      console.error('Error during sign up:', error);
      return false;
    }
  };
  
  const signOut = async (): Promise<void> => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  const refreshUser = async (): Promise<void> => {
    if (session?.user) {
      await fetchUserProfile(session.user);
    }
  };
  
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!session,
        isLoading,
        user,
        session,
        signIn,
        signUp,
        signOut,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
