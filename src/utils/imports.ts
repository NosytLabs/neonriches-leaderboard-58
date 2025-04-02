
// This file centralizes and re-exports commonly used components and utilities
// to reduce import statements throughout the application

// UI Components
export * from '@/components/ui';

// Hooks
export { useToast } from '@/hooks/use-toast';
export { useUser } from '@/hooks/useUser';
export { useAuth } from '@/hooks/useAuth';
export { useLocalStorage } from '@/hooks/useLocalStorage';
export { useMockLeaderboard } from '@/hooks/useMockLeaderboard';
export { useCertificate } from '@/hooks/useCertificate';

// Utils
export { cn } from '@/lib/utils';
export { 
  formatDollarAmount, 
  formatTimeAgo, 
  truncateAddress, 
  formatNumber, 
  formatCurrency,
  formatDate,
  formatFileSize
} from '@/utils/formatters';
export { toTeamColor } from '@/utils/typeConverters';
export { getMockeryName, getMockeryDescription } from '@/utils/mockeryUtils';

// Contexts
export { AuthProvider } from '@/contexts/auth';

// Exported types
export type { 
  UserProfile,
  TeamColor,
  UserTier
} from '@/types/user';

