
// This file serves as a central location for component imports to avoid casing issues
// Import from this file instead of directly from the component files to avoid casing conflicts

// Core UI components (with consistent casing)
export { Shell } from '@/components/ui/Shell';
export { Badge } from '@/components/ui/Badge';
export { Button } from '@/components/ui/button';
export { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
export { Input } from '@/components/ui/input';
export { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
export { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
export { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@/components/ui/dialog';
export { Alert, AlertDescription } from '@/components/ui/alert';
export { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
export { Skeleton } from '@/components/ui/skeleton';
export { ScrollArea } from '@/components/ui/scroll-area';
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Custom UI components
export { default as LeaderboardEntry } from '@/components/leaderboard/components/LeaderboardEntry';
export { default as LeaderboardList } from '@/components/leaderboard/LeaderboardList';
export { default as MockeryComponent } from '@/components/mockery/MockeryComponent';
export { default as MockeryIconComponent } from '@/components/mockery/MockeryIconComponent';
export { default as TeamSelector } from '@/components/teams/TeamSelector';
export { default as TeamBadge } from '@/components/ui/team/TeamBadge';
