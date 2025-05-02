
// React is already injected by Vite's jsxInject configuration
import { useContext } from 'react';
import { AuthContext, AuthProvider } from '@/contexts/auth/AuthProvider';

/**
 * Hook for accessing and managing authentication
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    console.warn('useAuth must be used within an AuthProvider');
    // Return a basic fallback to avoid crashing the app
    return {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: async () => false,
      logout: async () => {},
      register: async () => false,
    };
  }

  return context;
}

export { AuthProvider };
export default useAuth;
