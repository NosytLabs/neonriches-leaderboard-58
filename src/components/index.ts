
// Re-export main components for easier imports
export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Layout } from './layout/Layout';
export { default as Leaderboard } from './Leaderboard';
export { default as Loading } from './Loading';
export { default as ProfilePreview } from './ProfilePreview';
export { default as PaymentModal } from './PaymentModal';
export { default as ErrorFallback } from './ErrorFallback';

// UI Components
export { default as Button } from './ui/button';
export { default as Card } from './ui/card';
export { default as Badge } from './ui/badge-module';
export { default as Input } from './ui/input';
export { default as Tooltip } from './ui/tooltip';
export { default as Select } from './ui/select';
export { default as Avatar } from './ui/avatar';
export { default as EmptyState } from './ui/empty-state';
export { default as RoyalButton } from './ui/royal-button';
export { default as OptimizedImage } from './ui/optimized-image';

// Dashboard Components
export { default as DashboardLayout } from './dashboard/DashboardLayout';
export { default as DashboardStats } from './dashboard/DashboardStatsOverview';
export { default as UserStats } from './dashboard/UserStats';
export { default as DepositTracker } from './dashboard/DepositTracker';
export { default as NextRankCard } from './dashboard/NextRankCard';
export { default as RankStatusCard } from './dashboard/RankStatusCard';

// Leaderboard Components
export * from './leaderboard/components';
export { default as CombinedLeaderboard } from './leaderboard/CombinedLeaderboard';
export { default as PersistentLeaderboard } from './leaderboard/PersistentLeaderboard';
export { default as RealTimeLeaderboard } from './leaderboard/RealTimeLeaderboard';
export { default as RoyalCourt } from './leaderboard/RoyalCourt';

// Feature modules
export { default as RoyalShowcase } from './RoyalShowcase';
export { default as TeamSection } from './TeamSection';
export { default as FaqComponent } from './FaqComponent';
export { default as RoyalBadges } from './RoyalBadges';
export { default as HeroShowcase } from './HeroShowcase';
