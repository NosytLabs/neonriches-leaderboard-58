
import React, { useReducer, useEffect, useMemo } from 'react';
import { AuthState, AuthAction, AuthContextType, AuthProviderProps } from '@/types/auth-context';
import { UserProfile } from '@/types/user-consolidated';
import { AuthContext } from './index';

// Initial state for the auth reducer
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
};

// Auth reducer function
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'AUTH_START':
    case 'REGISTER_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    
    case 'LOGIN_SUCCESS':
    case 'AUTH_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    
    case 'LOGIN_FAILURE':
    case 'AUTH_FAIL':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'Authentication failed'
      };
    
    case 'LOGOUT':
    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      };
    
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload
      };
    
    default:
      return state;
  }
};

/**
 * Mock function to create a demo user profile
 */
const createDemoUserProfile = (id: string, username: string): UserProfile => ({
  id,
  username,
  displayName: username.charAt(0).toUpperCase() + username.slice(1),
  email: `${username}@example.com`,
  profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
  bio: `Demo user account for ${username}`,
  joinedDate: new Date().toISOString(),
  isVerified: false,
  team: 'blue',
  tier: 'basic',
  rank: Math.floor(Math.random() * 100) + 1,
  previousRank: Math.floor(Math.random() * 100) + 1,
  totalSpent: Math.floor(Math.random() * 1000),
  amountSpent: Math.floor(Math.random() * 1000),
  walletBalance: Math.floor(Math.random() * 500),
  settings: {
    profileVisibility: 'public',
    allowProfileLinks: true,
    theme: 'dark',
    notifications: true,
    emailNotifications: false,
    marketingEmails: false,
    showRank: true,
    darkMode: true,
    soundEffects: true,
    showBadges: true
  },
  following: [],
  followers: [],
  spendStreak: Math.floor(Math.random() * 5)
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      dispatch({ type: 'AUTH_START' });
      
      try {
        const savedAuth = localStorage.getItem('auth');
        
        if (savedAuth) {
          const authData = JSON.parse(savedAuth);
          
          if (authData && authData.user) {
            dispatch({ type: 'AUTH_SUCCESS', payload: authData.user });
          } else {
            dispatch({ type: 'AUTH_FAIL' });
            localStorage.removeItem('auth');
          }
        } else {
          dispatch({ type: 'AUTH_FAIL' });
        }
      } catch (error) {
        console.error("Auth check error:", error);
        dispatch({ type: 'AUTH_FAIL' });
        localStorage.removeItem('auth');
      }
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Mock login - in a real app, this would call an API
      const demoUser = await new Promise<UserProfile>((resolve) => {
        setTimeout(() => {
          const user = createDemoUserProfile('user-123', email.split('@')[0]);
          resolve(user);
        }, 1000);
      });
      
      localStorage.setItem('auth', JSON.stringify({
        user: demoUser,
        token: 'demo-token-xyz'
      }));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: demoUser });
      return true;
    } catch (error) {
      console.error("Login error:", error);
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
      return false;
    }
  };

  // Alternative name for login
  const signIn = login;

  // Register function
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });
    
    try {
      // Mock registration - in a real app, this would call an API
      const demoUser = await new Promise<UserProfile>((resolve) => {
        setTimeout(() => {
          const user = createDemoUserProfile('new-user-' + Date.now(), username);
          resolve(user);
        }, 1500);
      });
      
      localStorage.setItem('auth', JSON.stringify({
        user: demoUser,
        token: 'demo-token-new-xyz'
      }));
      
      dispatch({ type: 'REGISTER_SUCCESS', payload: demoUser });
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
      return false;
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    try {
      localStorage.removeItem('auth');
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Alternative name for logout
  const signOut = logout;

  // Update user function
  const updateUser = async (updates: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!state.user) {
        return false;
      }
      
      const updatedUser = {
        ...state.user,
        ...updates
      };
      
      const savedAuth = localStorage.getItem('auth');
      if (savedAuth) {
        const authData = JSON.parse(savedAuth);
        authData.user = updatedUser;
        localStorage.setItem('auth', JSON.stringify(authData));
      }
      
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
      return true;
    } catch (error) {
      console.error("Update user error:", error);
      return false;
    }
  };

  // Alternative name for updateUser
  const updateUserProfile = updateUser;

  // Award cosmetic function
  const awardCosmetic = async (category: string, itemId: string, notify: boolean = true): Promise<boolean> => {
    try {
      if (!state.user || !state.user.cosmetics) {
        return false;
      }
      
      const categoryKey = category as keyof typeof state.user.cosmetics;
      const items = (state.user.cosmetics[categoryKey] as string[]) || [];
      
      if (items.includes(itemId)) {
        return false;
      }
      
      const updatedCosmetics = {
        ...state.user.cosmetics,
        [category]: [...items, itemId]
      };
      
      await updateUser({ cosmetics: updatedCosmetics });
      return true;
    } catch (error) {
      console.error("Award cosmetic error:", error);
      return false;
    }
  };

  // Create a memoized value of the context
  const contextValue = useMemo<AuthContextType>(() => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    login,
    signIn,
    register,
    logout,
    signOut,
    updateUser,
    updateUserProfile,
    awardCosmetic
  }), [state]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
