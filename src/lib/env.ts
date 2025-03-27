
/**
 * Environment variables for the application.
 * 
 * This module provides a type-safe way to access environment variables.
 * In production, these would come from actual environment variables.
 * For local development, they can be set in a .env file (not committed to version control).
 */

interface EnvVariables {
  STRIPE_PUBLIC_KEY: string;
  API_URL: string;
  AUTH_DOMAIN: string;
}

// Default values for development - REPLACE THESE IN PRODUCTION!
const devDefaults: EnvVariables = {
  STRIPE_PUBLIC_KEY: "pk_test_replace_with_your_key",
  API_URL: "https://api.spendthrone.com",
  AUTH_DOMAIN: "auth.spendthrone.com",
};

/**
 * Returns environment variables with fallbacks to development defaults.
 * In production, these would be set as actual environment variables.
 */
export const getEnv = (): EnvVariables => {
  if (import.meta.env.MODE === 'production') {
    return {
      STRIPE_PUBLIC_KEY: import.meta.env.VITE_STRIPE_PUBLIC_KEY || devDefaults.STRIPE_PUBLIC_KEY,
      API_URL: import.meta.env.VITE_API_URL || devDefaults.API_URL,
      AUTH_DOMAIN: import.meta.env.VITE_AUTH_DOMAIN || devDefaults.AUTH_DOMAIN,
    };
  }
  
  return devDefaults;
};

// Export environment variables for use throughout the application
export const env = getEnv();

/**
 * Security note: This file only exposes public keys that are safe to include in client-side code.
 * Secret keys should NEVER be included here and should only be used in server-side code.
 */
