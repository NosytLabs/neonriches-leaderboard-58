
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { AuthContextType, AuthProviderProps, AuthState, AuthAction } from './auth/types';
import { authReducer } from './auth/authReducer';
import { 
  fetchUserProfile, 
  loginWithEmail, 
  registerWithEmail, 
  logoutUser,
  updateUserData,
  awardCosmeticItem 
} from './auth/authService';
import { UserProfile } from '@/types/user';

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  signIn: async () => false,
  login: async () => false,
  logout: () => {},
  signOut: () => {},
  register: async () => false,
  updateUser: async () => false,
  updateUserProfile: async () => false,
  awardCosmetic: async () => false,
});

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      dispatch({ type: 'AUTH_START' });
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const userData = await fetchUserProfile();
          if (userData) {
            dispatch({ 
              type: 'AUTH_SUCCESS', 
              payload: userData 
            });
          } else {
            localStorage.removeItem('authToken');
            dispatch({ type: 'AUTH_FAIL' });
          }
        } else {
          dispatch({ type: 'AUTH_FAIL' });
        }
      } catch (error) {
        console.error('Authentication error:', error);
        dispatch({ type: 'AUTH_FAIL' });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await loginWithEmail(email, password);
      if (response.success && response.user) {
        dispatch({ 
          type: 'AUTH_SUCCESS', 
          payload: {
            ...response.user,
            lastLogin: new Date().toISOString()
          } 
        });
        return true;
      } else {
        dispatch({ 
          type: 'AUTH_FAIL', 
          payload: response.error || 'Login failed' 
        });
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch({ 
        type: 'AUTH_FAIL', 
        payload: 'Login failed. Please try again.' 
      });
      return false;
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await registerWithEmail(username, email, password);
      if (response.success && response.user) {
        dispatch({ 
          type: 'AUTH_SUCCESS', 
          payload: response.user 
        });
        return true;
      } else {
        dispatch({ 
          type: 'AUTH_FAIL', 
          payload: response.error || 'Registration failed' 
        });
        return false;
      }
    } catch (error) {
      console.error('Registration error:', error);
      dispatch({ 
        type: 'AUTH_FAIL', 
        payload: 'Registration failed. Please try again.' 
      });
      return false;
    }
  };

  const logout = () => {
    logoutUser();
    dispatch({ type: 'AUTH_LOGOUT' });
  };

  const updateUser = async (userData: Partial<UserProfile>): Promise<boolean> => {
    if (!state.user) return false;
    
    try {
      const updatedUser = await updateUserData({
        ...state.user,
        ...userData
      });
      
      if (updatedUser) {
        dispatch({ 
          type: 'UPDATE_USER', 
          payload: updatedUser 
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    }
  };

  const awardCosmetic = async (category: string, itemId: string, notify = true): Promise<boolean> => {
    if (!state.user) return false;
    
    try {
      const success = await awardCosmeticItem(state.user.id, category, itemId, notify);
      
      if (success) {
        // Update the local user state with the new cosmetic
        const updatedCosmetics = { 
          ...state.user.cosmetics
        };
        
        // Make sure the category exists and is an array
        if (!updatedCosmetics[category]) {
          updatedCosmetics[category] = [];
        }
        
        // Add the item if it doesn't already exist
        if (Array.isArray(updatedCosmetics[category]) && 
            !updatedCosmetics[category].includes(itemId)) {
          updatedCosmetics[category] = [...updatedCosmetics[category], itemId];
        }
        
        dispatch({
          type: 'UPDATE_USER',
          payload: {
            ...state.user,
            cosmetics: updatedCosmetics
          }
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };

  const contextValue: AuthContextType = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    signIn: login,
    login,
    logout,
    signOut: logout,
    register,
    updateUser,
    updateUserProfile: updateUser,
    awardCosmetic,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
