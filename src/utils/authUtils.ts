
// Authentication utility functions and constants

// Default notifications configuration for new users
export const defaultNotifications = {
  email: true,
  push: true,
  in_app: true,
  rankChanges: true
};

// Update the notifications object to include in_app
export const updateNotifications = (notifications) => {
  return {
    ...notifications,
    in_app: notifications.in_app ?? true
  };
};

// User authentication states
export const AUTH_STATES = {
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
  LOADING: 'loading'
};

// Parse JWT token
export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

// Check if token is expired
export const isTokenExpired = (token) => {
  const decodedToken = parseJwt(token);
  if (!decodedToken) return true;
  
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

// Format display name from user data
export const formatDisplayName = (user) => {
  if (!user) return '';
  return user.displayName || user.username || 'Anonymous User';
};

// Get user initials for avatars
export const getUserInitials = (user) => {
  if (!user) return 'U';
  
  const displayName = formatDisplayName(user);
  return displayName
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};
