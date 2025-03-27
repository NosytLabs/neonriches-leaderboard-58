
export type UserRole = 'user' | 'premium' | 'moderator' | 'admin';

export interface UserRolePermissions {
  canPoke: boolean;
  canChallenge: boolean; 
  canViewAnalytics: boolean;
  canModerateContent: boolean;
  canAccessAdminPanel: boolean;
  maxImages: number;
  maxLinks: number;
  customBorders: boolean;
  videoEmbeds: boolean;
}

export interface MfaSettings {
  enabled: boolean;
  method: 'app' | 'sms' | 'email';
  verified: boolean;
  lastVerified?: Date;
}

export interface UserSubscription {
  id: string;
  tier: 'free' | 'pro';
  status: 'active' | 'canceled' | 'expired';
  startDate: Date;
  endDate: Date;
  renewalDate?: Date;
  paymentMethod: 'credit_card' | 'crypto';
  autoRenew: boolean;
  price: number;
  interval: 'monthly' | 'quarterly' | 'annual';
  features: string[];
}

export interface AuthSession {
  id: string;
  userId: string;
  createdAt: Date;
  expiresAt: Date;
  lastActiveAt: Date;
  userAgent?: string;
  ipAddress?: string;
  isActive: boolean;
}

export interface PasswordResetToken {
  token: string;
  userId: string;
  createdAt: Date;
  expiresAt: Date;
  used: boolean;
}

// Helper functions for role-based permissions
export const getRolePermissions = (role: UserRole): UserRolePermissions => {
  switch (role) {
    case 'admin':
      return {
        canPoke: true,
        canChallenge: true,
        canViewAnalytics: true,
        canModerateContent: true,
        canAccessAdminPanel: true,
        maxImages: Infinity,
        maxLinks: Infinity,
        customBorders: true,
        videoEmbeds: true
      };
    case 'moderator':
      return {
        canPoke: true,
        canChallenge: true,
        canViewAnalytics: true,
        canModerateContent: true,
        canAccessAdminPanel: false,
        maxImages: 10,
        maxLinks: 10,
        customBorders: true,
        videoEmbeds: true
      };
    case 'premium':
      return {
        canPoke: true,
        canChallenge: true,
        canViewAnalytics: false,
        canModerateContent: false,
        canAccessAdminPanel: false,
        maxImages: 5,
        maxLinks: 5,
        customBorders: true,
        videoEmbeds: true
      };
    case 'user':
    default:
      return {
        canPoke: true,
        canChallenge: false,
        canViewAnalytics: false,
        canModerateContent: false,
        canAccessAdminPanel: false,
        maxImages: 1,
        maxLinks: 1,
        customBorders: false,
        videoEmbeds: false
      };
  }
};

// Helper function to check if a user has a specific permission
export const hasPermission = (
  userRole: UserRole,
  permission: keyof UserRolePermissions
): boolean => {
  const permissions = getRolePermissions(userRole);
  return permissions[permission] as boolean;
};
