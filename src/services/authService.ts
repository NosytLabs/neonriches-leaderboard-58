import { UserProfile } from "@/types/user";
import { TeamColor } from "@/types/team";

export async function getSession() {
  try {
    const data = { session: null };
    return data;
  } catch (error) {
    console.error("Unexpected error getting session:", error);
    return { data: { session: null } };
  }
}

export async function getUserDetails(userId: string): Promise<UserProfile | null> {
  try {
    // Mock implementation
    return mockUser as UserProfile;
  } catch (error) {
    console.error("Unexpected error fetching user details:", error);
    return null;
  }
}

export async function loadClientSession() {
  try {
    return { session: null };
  } catch (error) {
    console.error("Unexpected error loading client session:", error);
    return { session: null };
  }
}

export async function accessProtected() {
  const { data } = await getSession();

  if (!data.session) {
    // Mock redirect
    console.log("Redirecting to sign-in page");
  }
}

export async function signOut() {
  console.log("Mock sign out");
}

export async function register(formData: FormData) {
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  const username = String(formData.get('username'));

  console.log(`Mock register: ${username}, ${email}`);

  return { success: true, data: { user: mockUser } };
}

export async function signIn(formData: FormData) {
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  console.log(`Mock sign in: ${email}`);

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
