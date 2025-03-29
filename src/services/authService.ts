
// Mock authentication service

/**
 * Sign in with email and password
 * @param email User email
 * @param password User password
 * @returns Success flag
 */
export const signInWithEmail = async (email: string, password: string): Promise<boolean> => {
  // In a real app, this would make an API call
  await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
  
  // Simple validation
  if (!email || !password) {
    return false;
  }
  
  if (password.length < 6) {
    return false;
  }
  
  // Always succeed in demo mode
  return true;
};

/**
 * Sign up with email and password
 * @param email User email
 * @param password User password
 * @returns Success flag
 */
export const signUpWithEmail = async (email: string, password: string): Promise<boolean> => {
  // In a real app, this would make an API call
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  
  // Simple validation
  if (!email || !password) {
    return false;
  }
  
  if (password.length < 6) {
    return false;
  }
  
  // Always succeed in demo mode
  return true;
};

/**
 * Sign out the current user
 */
export const signOut = async (): Promise<void> => {
  // In a real app, this would make an API call
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  
  // Clear any auth tokens from localStorage
  localStorage.removeItem('spendthrone_user');
};
