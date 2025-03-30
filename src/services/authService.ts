
/**
 * Authentication service functions
 */
import { User } from '@/types/user';

/**
 * Sign in with email and password
 * @param email User email
 * @param password User password
 * @returns Authentication result
 */
export async function signInWithEmail(
  email: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    console.log('Signing in with email:', email);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful authentication
    if (email && password) {
      return {
        success: true,
        user: {
          id: 'mock-user-id',
          username: email.split('@')[0],
          displayName: email.split('@')[0],
          email,
          profileImage: 'https://i.pravatar.cc/150?img=3',
          joinedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          tier: 'premium',
          team: 'red',
          rank: 42,
          walletBalance: 1500,
          amountSpent: 5000,
        }
      };
    }
    
    return {
      success: false,
      error: 'Invalid credentials'
    };
  } catch (error) {
    console.error('Error signing in:', error);
    return {
      success: false,
      error: 'Authentication failed'
    };
  }
}

/**
 * Sign in with magic link sent to email
 * @param email User email
 * @returns Success status
 */
export async function signInWithMagicLink(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Sending magic link to:', email);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful magic link sending
    return {
      success: true
    };
  } catch (error) {
    console.error('Error sending magic link:', error);
    return {
      success: false,
      error: 'Failed to send magic link'
    };
  }
}

/**
 * Sign in with Google OAuth
 * @returns Authentication result
 */
export async function signInWithGoogle(): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    console.log('Signing in with Google');
    
    // Simulate API delay and OAuth popup
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock successful Google auth
    return {
      success: true,
      user: {
        id: 'google-user-id',
        username: 'googleuser',
        displayName: 'Google User',
        email: 'user@gmail.com',
        profileImage: 'https://i.pravatar.cc/150?img=5',
        joinedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        tier: 'premium',
        team: 'blue',
        rank: 37,
        walletBalance: 2500,
        amountSpent: 8000,
      }
    };
  } catch (error) {
    console.error('Error with Google sign in:', error);
    return {
      success: false,
      error: 'Google authentication failed'
    };
  }
}

/**
 * Sign up with email and password
 * @param email User email
 * @param password User password
 * @param username Desired username
 * @returns Registration result
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  username: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    console.log('Signing up with email:', email, 'username:', username);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock successful registration
    if (email && password && username) {
      return {
        success: true,
        user: {
          id: 'new-user-id',
          username,
          displayName: username,
          email,
          profileImage: 'https://i.pravatar.cc/150?img=7',
          joinedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          tier: 'free',
          team: 'green',
          rank: 0,
          walletBalance: 0,
          amountSpent: 0,
        }
      };
    }
    
    return {
      success: false,
      error: 'Invalid registration data'
    };
  } catch (error) {
    console.error('Error registering:', error);
    return {
      success: false,
      error: 'Registration failed'
    };
  }
}

/**
 * Verify MFA code
 * @param code MFA verification code
 * @param email User email
 * @returns Verification result
 */
export async function verifyMfaCode(
  code: string,
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Verifying MFA code for:', email);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock successful verification (accept any 6-digit code)
    if (code && code.length === 6 && /^\d+$/.test(code)) {
      return {
        success: true
      };
    }
    
    return {
      success: false,
      error: 'Invalid verification code'
    };
  } catch (error) {
    console.error('Error verifying code:', error);
    return {
      success: false,
      error: 'Verification failed'
    };
  }
}

/**
 * Reset user password
 * @param email User email
 * @returns Password reset result
 */
export async function resetPassword(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Requesting password reset for:', email);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful password reset request
    return {
      success: true
    };
  } catch (error) {
    console.error('Error requesting password reset:', error);
    return {
      success: false,
      error: 'Password reset failed'
    };
  }
}

export default {
  signInWithEmail,
  signInWithMagicLink,
  signInWithGoogle,
  signUpWithEmail,
  verifyMfaCode,
  resetPassword
};
