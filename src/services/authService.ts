import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { UserProfile } from '@/types/user';
import { TeamColor } from '@/types/team';

const supabase = createClient();

export async function getSession() {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting session:", error);
      return { data: { session: null } };
    }
    return data;
  } catch (error) {
    console.error("Unexpected error getting session:", error);
    return { data: { session: null } };
  }
}

export async function getUserDetails(userId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error("Error fetching user details:", error);
      return null;
    }

    return data as UserProfile;
  } catch (error) {
    console.error("Unexpected error fetching user details:", error);
    return null;
  }
}

export async function loadClientSession() {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error loading client session:", error);
      return { session: null };
    }
    return data;
  } catch (error) {
    console.error("Unexpected error loading client session:", error);
    return { session: null };
  }
}

export async function accessProtected() {
  const { data } = await getSession();

  if (!data.session) {
    redirect('/sign-in');
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  }
}

export async function register(formData: FormData) {
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  const username = String(formData.get('username'));

  const { data: authData, error: authError } = await supabase.auth
    .signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
        shouldCreateUser: true,
      },
    });

  if (authError) {
    console.error("Authentication error during registration:", authError);
    return { success: false, error: authError.message };
  }

  if (authData.user?.id) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        username: username,
        email: email,
        displayName: username,
        joinedAt: new Date().toISOString(),
        walletBalance: 0,
        amountSpent: 0,
        totalSpent: 0,
        rank: 0,
        previousRank: 0,
        team: 'none',
        tier: 'free',
      });

    if (profileError) {
      console.error("Profile creation error:", profileError);
      return { success: false, error: profileError.message };
    }
  }

  return { success: true, data: authData };
}

export async function signIn(formData: FormData) {
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error signing in:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Fix missing joinedDate property in mock user
const mockUser = {
  id: "user123",
  username: "johndoe",
  displayName: "John Doe",
  email: "john@example.com",
  joinedAt: new Date().toISOString(),
  joinedDate: new Date().toISOString(), // Add this
  walletBalance: 1000,
  amountSpent: 500,
  totalSpent: 500,
  rank: 42,
  previousRank: 50,
  team: "blue" as TeamColor,
  tier: "premium",
  // ... include other required properties
};

export const mockAuthService = {
  login: async (email: string, password?: string): Promise<UserProfile | null> => {
    // Simulate successful login
    console.log(`Mock login attempt for email: ${email}`);
    return mockUser as UserProfile;
  },

  register: async (username: string, email: string, password?: string): Promise<UserProfile | null> => {
    // Simulate successful registration
    console.log(`Mock registration attempt for username: ${username}, email: ${email}`);
    return mockUser as UserProfile;
  },

  logout: async (): Promise<void> => {
    // Simulate successful logout
    console.log('Mock logout successful');
  },

  updateUser: async (updates: Partial<UserProfile>): Promise<UserProfile | null> => {
    // Simulate updating user profile
    console.log('Mock user update:', updates);
    return { ...mockUser, ...updates } as UserProfile;
  },

  getUser: async (id: string): Promise<UserProfile | null> => {
    // Simulate fetching user
    console.log(`Mock fetching user with ID: ${id}`);
    return mockUser as UserProfile;
  },
};
