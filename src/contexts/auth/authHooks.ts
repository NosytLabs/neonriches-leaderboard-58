import { useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { UserProfile } from '@/types/user';
import { ProfileBoost } from '@/types/user';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { addProfileBoostWithDays, addCosmeticByCategoryString } from './authUtils';
import { ensureTotalSpent } from '@/utils/userTypes';
import { adaptUserProfile, createUserSubscription } from '@/utils/typeAdapters';

export const useAuthState = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  return {
    user,
    setUser,
    session,
    setSession,
    isLoading,
    setIsLoading,
    error,
    setError,
    isAuthModalOpen,
    setIsAuthModalOpen
  };
};

export const useAuthMethods = (
  user: UserProfile | null, 
  setUser: (user: UserProfile | null) => void,
  setIsLoading: (loading: boolean) => void,
  setError: (error: Error | null) => void
) => {
  const { toast } = useToast();

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      // User data will be set by the auth state listener
    } catch (error) {
      console.error('Sign in error:', error);
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            tier: 'basic',
            team: 'none',
            gender: 'none',
          },
        }
      });
      
      if (error) throw error;
      
      // User data will be set by the auth state listener
      toast({
        title: "Registration successful!",
        description: "Welcome to SpendThrone",
      });
      
    } catch (error) {
      console.error('Sign up error:', error);
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // User data will be cleared by the auth state listener
    } catch (error) {
      console.error('Logout error:', error);
      setError(error as Error);
      throw error;
    }
  };

  const updateUserProfile = async (userData: Partial<UserProfile>): Promise<boolean> => {
    try {
      // Ensure all required fields are present
      const adaptedUserData = adaptUserProfile({
        ...user,
        ...userData,
        // Make sure settings is provided since it's required
        settings: userData.settings || user?.settings || {
          profileVisibility: 'public',
          allowProfileLinks: true,
          theme: 'dark',
          notifications: true,
          emailNotifications: false,
          marketingEmails: false,
          showRank: true,
          darkMode: true,
          soundEffects: true,
          showBadges: true,
          showTeam: true,
          showSpending: true
        },
        // Make sure displayName is provided
        displayName: userData.displayName || user?.displayName || userData.username || user?.username || '',
        // Make sure totalSpent is provided
        totalSpent: userData.totalSpent || user?.totalSpent || 0
      });
      
      // Update user metadata in Supabase Auth
      const { error: authUpdateError } = await supabase.auth.updateUser({
        data: {
          username: adaptedUserData.username,
          display_name: adaptedUserData.displayName,
          avatar_url: adaptedUserData.profileImage,
          team: adaptedUserData.team,
          tier: adaptedUserData.tier,
          gender: adaptedUserData.gender,
        }
      });
      
      if (authUpdateError) throw authUpdateError;
      
      // Update additional user data in the profiles table
      const { error: profileUpdateError } = await supabase
        .from('users')
        .update({
          username: adaptedUserData.username,
          display_name: adaptedUserData.displayName,
          profile_image: adaptedUserData.profileImage,
          bio: adaptedUserData.bio,
          team: adaptedUserData.team,
          tier: adaptedUserData.tier,
          gender: adaptedUserData.gender,
        })
        .eq('id', user.id);
      
      if (profileUpdateError) throw profileUpdateError;
      
      // Update local state with ensured displayName and totalSpent
      const newUser = { 
        ...adaptedUserData, 
        ...userData, 
        totalSpent: adaptedUserData.totalSpent || adaptedUserData.amountSpent || 0,
        displayName: adaptedUserData.displayName || adaptedUserData.username
      };
      
      setUser(newUser);
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully",
      });
    } catch (error) {
      console.error('Update profile error:', error);
      setError(error as Error);
      
      toast({
        title: "Update Failed",
        description: (error as Error).message || "Failed to update profile",
        variant: "destructive"
      });
      
      throw error;
    }
  };

  const boostProfile = async (days: number = 1, level: number = 1): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Convert days to string for the API
      const daysStr = String(days);
      
      // Ensure user has displayName and required fields
      const userWithRequiredFields = {
        ...user,
        displayName: user.displayName || user.username,
        totalSpent: user.totalSpent || user.amountSpent || 0,
        walletBalance: user.walletBalance || 0 // Add walletBalance
      };
      
      const newBoosts = addProfileBoostWithDays(userWithRequiredFields, days, level);
      
      // Create a properly typed updated user object
      const updatedUser: UserProfile = {
        ...userWithRequiredFields,
        profileBoosts: newBoosts
      };
      
      setUser(updatedUser);
      
      // Update profile boosts in database
      const { error } = await supabase
        .from('profile_boosts')
        .insert({
          user_id: user.id,
          level,
          start_date: new Date().toISOString(),
          end_date: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString(),
        });
      
      if (error) {
        console.error('Error adding profile boost:', error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Boost profile error:', error);
      setError(error as Error);
      return false;
    }
  };

  const awardCosmetic = async (
    cosmeticId: string, 
    category: string, 
    rarity: string, 
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Ensure user has displayName
      const userWithDisplayName = {
        ...user,
        displayName: user.displayName || user.username
      };
      
      const updatedCosmetics = addCosmeticByCategoryString(userWithDisplayName, cosmeticId, category);
      
      const updatedUser = {
        ...userWithDisplayName,
        cosmetics: updatedCosmetics,
      };
      
      setUser(updatedUser);
      
      // Record cosmetic award in database
      const { error } = await supabase
        .from('user_cosmetics')
        .insert({
          user_id: user.id,
          cosmetic_id: cosmeticId,
          category,
          rarity,
          source,
          awarded_at: new Date().toISOString(),
        });
      
      if (error) {
        console.error('Error adding cosmetic:', error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      setError(error as Error);
      return false;
    }
  };

  const updateSubscription = async (subscriptionData: Partial<UserSubscription>): Promise<boolean> => {
    try {
      // Create a full UserSubscription with required fields
      const subscription = createUserSubscription(
        subscriptionData.planId || 'default',
        subscriptionData.nextBillingDate || new Date().toISOString(),
        subscriptionData.status || 'active',
        subscriptionData.tier || 'basic'
      );
      
      // Use adaptUserProfile to ensure all required fields are present
      const updatedUser = adaptUserProfile({
        ...user,
        subscription,
        // Make sure required fields are always set
        displayName: user?.displayName || user?.username || '',
        totalSpent: user?.totalSpent || 0
      });
      
      setUser(updatedUser);
      
      // Update subscription in database
      const { error } = await supabase
        .from('subscriptions')
        .update({
          plan_id: subscription.planId,
          next_billing_date: subscription.nextBillingDate,
          status: subscription.status,
          tier: subscription.tier
        })
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error updating subscription:', error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Update subscription error:', error);
      setError(error as Error);
      return false;
    }
  };

  return {
    login,
    register,
    logout,
    updateUserProfile,
    boostProfile,
    awardCosmetic,
    updateSubscription,
  };
};
