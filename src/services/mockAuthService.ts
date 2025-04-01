
// Mock auth service functions for the auth components
// This centralizes all mock auth functions in one place

/**
 * Sign in with email (magic link)
 */
export const signInWithEmail = async (email: string): Promise<boolean> => {
  console.log('Mock: Sign in with email', email);
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return true;
};

/**
 * Verify MFA code
 */
export const verifyMfaCode = async (code: string): Promise<boolean> => {
  console.log('Mock: Verifying MFA code', code);
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return code.length === 6;
};

/**
 * Sign in with Google
 */
export const signInWithGoogle = async (): Promise<boolean> => {
  console.log('Mock: Sign in with Google');
  // Simulate API call delay 
  await new Promise(resolve => setTimeout(resolve, 700));
  return true;
};

/**
 * Reset password
 */
export const resetPassword = async (email: string): Promise<boolean> => {
  console.log('Mock: Reset password', email);
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  return true;
};
