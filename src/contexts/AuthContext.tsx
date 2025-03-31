
import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer } from './auth/authReducer';
import { AuthContextType, UserProfile } from '@/types/user-consolidated';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  signIn: async () => false,
  register: async () => false,
  logout: async () => {},
  signOut: async () => {},
  updateUser: async () => false,
  updateUserProfile: async () => false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for stored auth token on initial load
    const checkAuth = async () => {
      dispatch({ type: 'LOGIN_START' });
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // In a real app, this would validate the token with the server
          const userData = localStorage.getItem('userData');
          if (userData) {
            const user = JSON.parse(userData);
            dispatch({ 
              type: 'LOGIN_SUCCESS', 
              payload: user 
            });
          } else {
            dispatch({ type: 'LOGIN_FAILURE' });
          }
        } else {
          dispatch({ type: 'LOGIN_FAILURE' });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        dispatch({ type: 'LOGIN_FAILURE' });
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // This is a mock implementation - in a real app, you'd call an API
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login for demo
      if (email && password) {
        const mockUser: UserProfile = {
          id: '1',
          username: 'royalSpender',
          displayName: 'Royal Spender',
          email: email,
          rank: 1,
          tier: 'royal',
          team: 'red',
          totalSpent: 10000,
          joinDate: new Date().toISOString(),
          isVerified: true,
          profileImage: 'https://i.pravatar.cc/150?img=3'
        };
        
        localStorage.setItem('authToken', 'mock-token-xyz');
        localStorage.setItem('userData', JSON.stringify(mockUser));
        
        dispatch({ 
          type: 'LOGIN_SUCCESS', 
          payload: mockUser 
        });
        
        return true;
      }
      
      dispatch({ 
        type: 'LOGIN_FAILURE',
        payload: 'Invalid credentials'
      });
      
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      dispatch({ 
        type: 'LOGIN_FAILURE',
        payload: 'Login failed. Please try again.'
      });
      
      return false;
    }
  };

  // Register function
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });
    
    try {
      // This is a mock implementation - in a real app, you'd call an API
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration for demo
      if (username && email && password) {
        const mockUser: UserProfile = {
          id: '1',
          username,
          email,
          tier: 'free',
          joinDate: new Date().toISOString(),
          totalSpent: 0,
          rank: 999,
        };
        
        localStorage.setItem('authToken', 'mock-token-xyz');
        localStorage.setItem('userData', JSON.stringify(mockUser));
        
        dispatch({ 
          type: 'REGISTER_SUCCESS', 
          payload: mockUser 
        });
        
        return true;
      }
      
      dispatch({ 
        type: 'REGISTER_FAILURE',
        payload: 'Registration failed. Please try again.'
      });
      
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      dispatch({ 
        type: 'REGISTER_FAILURE',
        payload: 'Registration failed. Please try again.'
      });
      
      return false;
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    dispatch({ type: 'LOGOUT' });
  };

  // Update user function
  const updateUser = async (userData: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!state.user) return false;
      
      // In a real app, you'd call an API to update the user data
      const updatedUser = {
        ...state.user,
        ...userData
      };
      
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      
      dispatch({ 
        type: 'UPDATE_PROFILE_SUCCESS', 
        payload: updatedUser 
      });
      
      return true;
    } catch (error) {
      console.error('User update failed:', error);
      return false;
    }
  };

  // Create the context value object with all the functions and state
  const contextValue: AuthContextType = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    login,
    signIn: login,  // Alias for login
    register,
    logout,
    signOut: logout,  // Alias for logout
    updateUser,
    updateUserProfile: updateUser,  // Alias for updateUser
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
