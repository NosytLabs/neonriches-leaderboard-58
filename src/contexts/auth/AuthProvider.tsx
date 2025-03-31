import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { AuthContext } from './index';
import { authReducer } from './authReducer';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile as firebaseUpdateProfile,
  sendPasswordResetEmail,
  applyActionCode,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { AuthProviderProps, AuthState, UserProfile } from './types';
import { useNavigate } from 'react-router-dom';
import { createUser, getUser, updateUser } from './authService';
import { generateRandomName } from '@/utils/nameGenerator';
import { getInitials } from '@/utils/stringUtils';
import { auth as firebaseAuth } from '@/lib/firebase';

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
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          dispatch({ type: 'AUTH_START' });
          const user = await getUser(firebaseUser.uid);

          if (user) {
            dispatch({ type: 'AUTH_SUCCESS', payload: user });
          } else {
            // User exists in Firebase but not in our database, create the user
            const newUser: UserProfile = {
              id: firebaseUser.uid,
              username: firebaseUser.displayName || generateRandomName(),
              displayName: firebaseUser.displayName || getInitials(firebaseUser.email || 'New User'),
              email: firebaseUser.email || '',
              profileImage: firebaseUser.photoURL || '',
              isVerified: firebaseUser.emailVerified,
            };
            const createdUser = await createUser(newUser);
            dispatch({ type: 'AUTH_SUCCESS', payload: createdUser });
          }
        } catch (error: any) {
          console.error("Authentication Error:", error);
          dispatch({ type: 'AUTH_FAIL', payload: error.message || 'Failed to authenticate' });
        } finally {
          dispatch({ type: 'CLEAR_ERROR' });
        }
      } else {
        dispatch({ type: 'AUTH_LOGOUT' });
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const firebaseUser = userCredential.user;
      const user = await getUser(firebaseUser.uid);

      if (user) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return true;
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'User not found in database' });
        return false;
      }
    } catch (error: any) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message || 'Login failed' });
      return false;
    } finally {
      dispatch({ type: 'CLEAR_ERROR' });
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const firebaseUser = userCredential.user;

      await firebaseUpdateProfile(firebaseUser, {
        displayName: username,
      });

      const newUser: UserProfile = {
        id: firebaseUser.uid,
        username: username,
        displayName: username,
        email: email,
        isVerified: firebaseUser.emailVerified,
      };

      const user = await createUser(newUser);

      if (user) {
        dispatch({ type: 'REGISTER_SUCCESS', payload: user });
        return true;
      } else {
        dispatch({ type: 'REGISTER_FAILURE', payload: 'Failed to create user in database' });
        return false;
      }
    } catch (error: any) {
      dispatch({ type: 'REGISTER_FAILURE', payload: error.message || 'Registration failed' });
      return false;
    } finally {
      dispatch({ type: 'CLEAR_ERROR' });
    }
  };

  const updateUserProfile = async (updates: Partial<UserProfile>): Promise<boolean> => {
    if (!state.user) return false;

    try {
      dispatch({ type: 'AUTH_START' });
      const updatedUser = await updateUser(state.user.id, updates);

      if (updatedUser) {
        dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: updatedUser });
        return true;
      } else {
        console.error("Update failed: User update returned null");
        dispatch({ type: 'AUTH_FAIL', payload: 'Failed to update profile' });
        return false;
      }
    } catch (error: any) {
      console.error("Update error:", error);
      dispatch({ type: 'AUTH_FAIL', payload: error.message || 'Failed to update profile' });
      return false;
    } finally {
      dispatch({ type: 'CLEAR_ERROR' });
    }
  };

  const updateUser = async (updates: Partial<UserProfile>): Promise<boolean> => {
    if (!state.user) return false;

    try {
      dispatch({ type: 'AUTH_START' });
      const updatedUser = await updateUser(state.user.id, updates);

      if (updatedUser) {
        dispatch({ type: 'UPDATE_USER', payload: updatedUser });
        return true;
      } else {
        console.error("Update failed: User update returned null");
        dispatch({ type: 'AUTH_FAIL', payload: 'Failed to update profile' });
        return false;
      }
    } catch (error: any) {
      console.error("Update error:", error);
      dispatch({ type: 'AUTH_FAIL', payload: error.message || 'Failed to update profile' });
      return false;
    } finally {
      dispatch({ type: 'CLEAR_ERROR' });
    }
  };

  const logout = async (): Promise<void> => {
    dispatch({ type: 'LOGOUT' });
    return Promise.resolve();
  };

  const signOut = async (): Promise<void> => {
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
        updateUser,
        updateUserProfile: updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
