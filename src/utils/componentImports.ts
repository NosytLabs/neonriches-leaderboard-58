
// This file provides consistent imports for components with casing issues
export { Badge, badgeVariants } from "@/components/ui/Badge";
export { Shell } from "@/components/ui/Shell";

// Export team utilities for consistent usage
export { 
  getTeamColor, 
  getTeamName, 
  getTeamTailwindColor,
  getTeamTailwindBgColor,
  toTeamColor as asTeamColor 
} from "@/utils/teamUtils";

// Export mockery utilities for consistent usage
export {
  getMockeryName,
  getMockeryDescription,
  getMockeryTier,
  getMockeryCost
} from "@/utils/mockeryUtils";

// Export mockery normalizer for consistent usage
export {
  normalizeMockeryAction,
  ensureTeamColor,
  ensureUserTier,
  ensureMockeryAction
} from "@/utils/mockeryNormalizer";
