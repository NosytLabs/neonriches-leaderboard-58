
export type AppRoute = 
  | '/' 
  | '/dashboard' 
  | '/leaderboard' 
  | '/profile' 
  | '/events' 
  | '/settings'
  | '/about'
  | '/features';

export interface NavItem {
  name: string;
  href: AppRoute;
  icon?: React.ComponentType<{ className?: string }>;
  current?: boolean;
}

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'error' | 'success';
  link?: string;
}

export interface AppState {
  theme: 'light' | 'dark' | 'system';
  notifications: Notification[];
  hasNewNotifications: boolean;
  userMenuOpen: boolean;
  sidebarOpen: boolean;
}

export type AppAction = 
  | { type: 'SET_THEME'; payload: 'light' | 'dark' | 'system' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'MARK_NOTIFICATION_READ'; payload: string }
  | { type: 'MARK_ALL_NOTIFICATIONS_READ' }
  | { type: 'TOGGLE_USER_MENU' }
  | { type: 'TOGGLE_SIDEBAR' };
