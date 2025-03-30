
// Mock authentication service

/**
 * Sign in with email and password
 */
export const signInWithEmail = async (email: string, password: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demonstration, always succeed except for specific test cases
  if (email === 'error@example.com') {
    return false;
  }
  
  return true;
};

/**
 * Sign up with email and password
 */
export const signUpWithEmail = async (email: string, password: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For demonstration, always succeed except for specific test cases
  if (email === 'taken@example.com') {
    return false;
  }
  
  return true;
};

/**
 * Reset password functionality
 */
export const resetPassword = async (email: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demonstration, always succeed
  return true;
};

/**
 * Sign out functionality
 */
export const signOut = async (): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Always succeed
  return true;
};

/**
 * Validate authentication token
 */
export const validateToken = async (token: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // For demonstration, always succeed except for specific test cases
  if (token === 'invalid-token') {
    return false;
  }
  
  return true;
};

