import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { AuthState, AuthAction, AuthContextType } from './types';
import { UserProfile } from '@/types/user-consolidated';
import { showSuccessToast, showErrorToast } from '@/utils/toastUtils';
import { createDemoUserProfile } from './authUtils';

export const AuthContext = createContext<AuthContextType | null>(null);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };

    case 'AUTH_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'Authentication check failed'
      };

    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'Login failed'
      };

    case 'REGISTER_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };

    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'Registration failed'
      };

    case 'LOGOUT':
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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const checkAuth = async () => {
      dispatch({ type: 'AUTH_START' });
      
      try {
        const savedAuth = localStorage.getItem('auth');
        
        if (savedAuth) {
          const authData = JSON.parse(savedAuth);
          
          if (authData && authData.user) {
            const demoUser: UserProfile = {
              id: authData.user.id || 'demo-123',
              username: authData.user.username || 'demouser',
              displayName: authData.user.displayName || 'Demo User',
              email: authData.user.email || 'demo@example.com',
              profileImage: authData.user.profileImage || 'https://source.unsplash.com/random/300x300/?portrait',
              bio: authData.user.bio || 'This is a demo user account.',
              joinedDate: authData.user.joinedDate || new Date().toISOString(),
              isVerified: authData.user.isVerified || false,
              team: authData.user.team || 'blue',
              tier: authData.user.tier || 'basic',
              rank: authData.user.rank || 0,
              previousRank: authData.user.previousRank || 0,
              totalSpent: authData.user.totalSpent || 0,
              amountSpent: authData.user.amountSpent || 0,
              walletBalance: authData.user.walletBalance || 0,
              settings: authData.user.settings || {
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
              following: authData.user.following || [],
              followers: authData.user.followers || [],
              spendStreak: authData.user.spendStreak || 0
            };
            
            dispatch({ type: 'AUTH_SUCCESS', payload: demoUser });
          } else {
            dispatch({ type: 'AUTH_FAIL' });
            localStorage.removeItem('auth');
          }
        } else {
          dispatch({ type: 'AUTH_FAIL' });
        }
      } catch (error) {
        console.error("Auth check error:", error);
        dispatch({ type: 'AUTH_FAIL', payload: 'Authentication check failed' });
        localStorage.removeItem('auth');
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
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
      showSuccessToast('Login successful!');
      return true;
    } catch (error) {
      console.error("Login error:", error);
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
      showErrorToast('Login failed. Please try again.');
      return false;
    }
  };

  const signIn = login;

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });
    
    try {
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
      showSuccessToast('Registration successful!');
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
      showErrorToast('Registration failed. Please try again.');
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      localStorage.removeItem('auth');
      dispatch({ type: 'LOGOUT' });
      showSuccessToast('Logged out successfully');
    } catch (error) {
      console.error("Logout error:", error);
      showErrorToast('Logout failed. Please try again.');
    }
  };

  const signOut = logout;

  const updateUser = async (updates: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!state.user) {
        showErrorToast('User not found');
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
      showErrorToast('Failed to update user');
      return false;
    }
  };

  const updateUserProfile = updateUser;

  const awardCosmetic = async (category: string, itemId: string, notify: boolean = true): Promise<boolean> => {
    try {
      if (!state.user || !state.user.cosmetics) {
        return false;
      }
      
      const categoryKey = category as keyof UserProfile['cosmetics'];
      const items = state.user.cosmetics[categoryKey] as string[] || [];
      
      if (items.includes(itemId)) {
        return false;
      }
      
      const updatedCosmetics = {
        ...state.user.cosmetics,
        [category]: [...items, itemId]
      };
      
      await updateUser({ cosmetics: updatedCosmetics });
      
      if (notify) {
        showSuccessToast(`New ${category} cosmetic unlocked!`);
      }
      
      return true;
    } catch (error) {
      console.error("Award cosmetic error:", error);
      return false;
    }
  };

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
