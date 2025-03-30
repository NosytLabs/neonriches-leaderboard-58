
/**
 * Mock authentication service
 */

// Simulated user storage
const users: Record<string, { email: string; password: string }> = {
  'user@example.com': { email: 'user@example.com', password: 'password123' }
};

/**
 * Sign in with email and password
 */
export const signInWithEmail = async (email: string, password: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Check if user exists and password matches
  const user = users[email];
  if (user && user.password === password) {
    return true;
  }
  
  return false;
};

/**
 * Sign up with email and password
 */
export const signUpWithEmail = async (email: string, password: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Check if user already exists
  if (users[email]) {
    return false;
  }
  
  // Create new user
  users[email] = { email, password };
  return true;
};

/**
 * Sign out the current user
 */
export const signOut = async (): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return true;
};

/**
 * Reset password for a user
 */
export const resetPassword = async (email: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Check if user exists
  return !!users[email];
};

/**
 * Update user profile
 */
export const updateUserProfile = async (userId: string, userData: any): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return true;
};

/**
 * Verify email address
 */
export const verifyEmail = async (token: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return true;
};

export default {
  signInWithEmail,
  signUpWithEmail,
  signOut,
  resetPassword,
  updateUserProfile,
  verifyEmail
};
