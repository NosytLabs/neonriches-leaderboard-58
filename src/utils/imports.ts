
// This file is used to re-export components with consistent casing to avoid errors

// UI Components with proper casing
// Fixed import with correct casing
export { Badge } from "@/components/ui/Badge";
export { Button } from "@/components/ui/button";
export { Input } from "@/components/ui/input";
export { Label } from "@/components/ui/label";
export { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
export { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
export { Switch } from "@/components/ui/switch";
export { Skeleton } from "@/components/ui/skeleton";
export { Separator } from "@/components/ui/separator";

// Hooks
export { useToast, useToastContext } from "@/hooks/use-toast";
export { useAuth } from "@/hooks/useAuth";
export { useSound } from "@/hooks/sounds/use-sound";
export { useLeaderboard } from "@/hooks/useLeaderboard";

// Utils
export { cn } from "@/lib/utils";
export { toTeamColor } from "@/utils/typeConverters";
export { formatCurrency, formatDate } from "@/utils/formatters";
export { getMockeryName, getMockeryDescription, getMockeryActionIcon, getMockeryTier, getMockeryCost } from "@/utils/mockery";

// Types
export type { TeamColor, UserTier, MockeryAction, MockeryTier } from "@/types/mockery-types";
export type { LeaderboardUser, LeaderboardFilter } from "@/types/leaderboard";
export type { UserProfile } from "@/types/user-consolidated";
