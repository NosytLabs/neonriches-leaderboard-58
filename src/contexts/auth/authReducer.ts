
import { AuthState, AuthAction } from '@/types/auth-context';

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
    case 'LOGIN_START':
    case 'REGISTER_START':
    case 'REFRESH_USER_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };
      
    case 'AUTH_SUCCESS':
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
    case 'REFRESH_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
      
    case 'AUTH_FAIL':
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
    case 'REFRESH_USER_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'Authentication failed'
      };
      
    case 'UPDATE_USER':
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        user: action.payload
      };
      
    case 'LOGOUT':
    case 'AUTH_LOGOUT':
      return {
        ...initialAuthState
      };
      
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      };
      
    default:
      return state;
  }
};

export default authReducer;
