
// Mock authentication service for development
import { UserProfile } from '@/types/user-consolidated';

// Mock supabase client
const supabase = {
  auth: {
    signInWithPassword: async ({ email, password }: { email: string, password: string }) => {
      console.log("Sign in with password", { email, password });
      // Mock successful login
      return {
        data: {
          session: {
            user: {
              id: "mock-user-id",
              email
            }
          }
        },
        error: null
      };
    },
    signOut: async () => {
      console.log("Sign out");
      return { error: null };
    },
    getSession: async () => {
      // Return a mock session
      return {
        data: {
          session: {
            user: {
              id: "mock-user-id",
              email: "user@example.com"
            }
          }
        }
      };
    }
  },
  // Add other needed methods
  from: (table: string) => ({
    select: () => ({
      eq: (field: string, value: any) => ({
        single: () => ({
          data: getMockUser(),
          error: null
        })
      })
    }),
    update: () => ({
      eq: () => ({
        single: () => ({
          data: getMockUser(),
          error: null
        })
      })
    }),
    insert: () => ({
      single: () => ({
        data: getMockUser(),
        error: null
      })
    })
  })
};

// Mock user data
const getMockUser = (): UserProfile => ({
  id: "mock-user-id",
  username: "royaluser",
  displayName: "Royal User",
  email: "user@example.com",
  profileImage: "/images/avatars/default.jpg",
  bio: "Mock user for development",
  walletBalance: 1000,
  totalSpent: 2500,
  rank: 42,
  team: "blue",
  tier: "premium",
  joinDate: new Date().toISOString()
});

/**
 * Sign in with email and password
 */
export const signInWithPassword = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  // Return session data
  return data;
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    throw new Error(error.message);
  }
  
  return true;
};

/**
 * Get the current user profile
 */
export const getCurrentUser = async () => {
  // Get session
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    return null;
  }
  
  // Get user profile from profiles table
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', session.user.id)
    .single();
  
  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
  
  return data as UserProfile;
};

/**
 * Sign in with magic link via email
 */
export const signInWithEmail = async (email: string) => {
  // Mock implementation
  console.log("Sending magic link to:", email);
  return { success: true };
};

/**
 * Verify MFA code
 */
export const verifyMfaCode = async (code: string) => {
  // Mock implementation
  console.log("Verifying MFA code:", code);
  return { success: true };
};

/**
 * Sign in with Google OAuth
 */
export const signInWithGoogle = async () => {
  // Mock implementation
  console.log("Signing in with Google");
  return { success: true };
};

/**
 * Reset password
 */
export const resetPassword = async (email: string) => {
  // Mock implementation
  console.log("Resetting password for:", email);
  return { success: true };
};
