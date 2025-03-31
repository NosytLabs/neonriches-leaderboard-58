
import React, { useState, useEffect, useReducer } from 'react';
import { AuthContext } from './index';
import { authReducer } from './authReducer';
import { AuthProviderProps, AuthState, UserProfile } from './types';
import { useNavigate } from 'react-router-dom';
import { 
  loginWithEmail, 
  registerWithEmail, 
  logoutUser, 
  updateUserData,
  fetchUserProfile 
} from './authService';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored auth token on initial load
    const checkAuth = async () => {
      dispatch({ type: 'AUTH_START' });
      
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const user = await fetchUserProfile();
          
          if (user) {
            dispatch({ 
              type: 'AUTH_SUCCESS', 
              payload: user 
            });
          } else {
            dispatch({ type: 'AUTH_LOGOUT' });
            localStorage.removeItem('authToken');
          }
        } else {
          dispatch({ type: 'AUTH_LOGOUT' });
        }
      } catch (error) {
        console.error("Authentication Error:", error);
        dispatch({ 
          type: 'AUTH_FAIL', 
          payload: error.message || 'Failed to authenticate'
        });
      } finally {
        dispatch({ type: 'CLEAR_ERROR' });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      const response = await loginWithEmail(email, password);
      
      if (response.success && response.user) {
        dispatch({ 
          type: 'LOGIN_SUCCESS', 
          payload: response.user 
        });
        return true;
      } else {
        dispatch({ 
          type: 'LOGIN_FAILURE', 
          payload: 'Invalid credentials' 
        });
        return false;
      }
    } catch (error: any) {
      console.error('Login error:', error);
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: error.message || 'Login failed' 
      });
      return false;
    } finally {
      dispatch({ type: 'CLEAR_ERROR' });
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });
    
    try {
      const response = await registerWithEmail(username, email, password);
      
      if (response.success && response.user) {
        dispatch({ 
          type: 'REGISTER_SUCCESS', 
          payload: response.user 
        });
        return true;
      } else {
        dispatch({ 
          type: 'REGISTER_FAILURE', 
          payload: 'Registration failed' 
        });
        return false;
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      dispatch({ 
        type: 'REGISTER_FAILURE', 
        payload: error.message || 'Registration failed' 
      });
      return false;
    } finally {
      dispatch({ type: 'CLEAR_ERROR' });
    }
  };

  const updateUserProfile = async (updates: Partial<UserProfile>): Promise<boolean> => {
    if (!state.user) return false;
    
    try {
      dispatch({ type: 'AUTH_START' });
      const updatedUser = await updateUserData({
        ...state.user,
        ...updates
      });
      
      dispatch({ 
        type: 'UPDATE_PROFILE_SUCCESS', 
        payload: updatedUser 
      });
      
      return true;
    } catch (error: any) {
      console.error('Profile update error:', error);
      dispatch({ 
        type: 'AUTH_FAIL', 
        payload: error.message || 'Failed to update profile' 
      });
      return false;
    } finally {
      dispatch({ type: 'CLEAR_ERROR' });
    }
  };

  const logout = async (): Promise<void> => {
    logoutUser();
    dispatch({ type: 'LOGOUT' });
    return Promise.resolve();
  };

  const signOut = async (): Promise<void> => {
    logoutUser();
    dispatch({ type: 'AUTH_LOGOUT' });
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        login,
        signIn: login,
        register,
        logout,
        signOut,
        updateUser: updateUserProfile,
        updateUserProfile: updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
