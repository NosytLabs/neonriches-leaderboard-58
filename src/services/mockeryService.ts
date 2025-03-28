
import { MockeryAction, MockeryEvent, UserMockeryStatus } from "@/types/mockery";
import { User } from "@/types/user";

export interface UseMockeryResult {
  mockUsers: (userId: string, action: MockeryAction, message?: string) => Promise<boolean>;
  protectUser: (userId: string, duration: number) => Promise<boolean>;
  isUserProtected: (userId: string) => Promise<boolean>;
  isUserShamed: (userId: string) => Promise<boolean>;
  canUserBeMocked: (userId: string) => Promise<boolean>;
  getUserMockeryStatus: (userId: string) => Promise<UserMockeryStatus | null>;
  getActiveMockeries: () => Promise<MockeryEvent[]>;
  mockUser: (targetId: string, action: MockeryAction, options?: { message?: string }) => Promise<boolean>;
}

// Mock user mockery statuses
const mockUserStatuses: Record<string, UserMockeryStatus> = {
  "user-1": {
    userId: "user-1",
    username: "kingmidas",
    displayName: "Royal Patron",
    profileImage: "/images/avatars/user1.jpg",
    activeMockeries: [],
    mockedCount: 0,
    activeProtection: {
      until: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      tier: "legendary"
    }
  },
  "user-2": {
    userId: "user-2",
    username: "jester_victim",
    displayName: "Court Fool",
    profileImage: "/images/avatars/user2.jpg",
    activeMockeries: [
      {
        id: "mockery-1",
        action: "courtJester",
        sourceUserId: "user-3",
        sourceUsername: "mockery_master",
        targetUserId: "user-2",
        targetUsername: "jester_victim",
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        isActive: true
      }
    ],
    mockedCount: 5,
    lastMocked: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
  }
};

// Mock active mockeries
const mockActiveMockeries: MockeryEvent[] = [
  {
    id: "mockery-1",
    action: "courtJester",
    sourceUserId: "user-3",
    sourceUsername: "mockery_master",
    targetUserId: "user-2",
    targetUsername: "jester_victim",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    isActive: true
  },
  {
    id: "mockery-2",
    action: "tomatoes",
    sourceUserId: "user-4",
    sourceUsername: "tomato_thrower",
    targetUserId: "user-5",
    targetUsername: "tomato_victim",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 18 * 60 * 60 * 1000).toISOString(),
    isActive: true
  }
];

// Mock implementation
export const useMockery = (currentUser?: User | null): UseMockeryResult => {
  // Mock user for tests
  const mockUsers = async (
    userId: string,
    action: MockeryAction,
    message?: string
  ): Promise<boolean> => {
    console.log(`Mocking user ${userId} with action ${action}`);
    return true;
  };

  const protectUser = async (
    userId: string,
    duration: number
  ): Promise<boolean> => {
    console.log(`Protecting user ${userId} for ${duration} hours`);
    return true;
  };

  const isUserProtected = async (userId: string): Promise<boolean> => {
    const userStatus = mockUserStatuses[userId];
    return Boolean(userStatus?.activeProtection);
  };

  const isUserShamed = async (userId: string): Promise<boolean> => {
    const userStatus = mockUserStatuses[userId];
    return userStatus?.activeMockeries.length > 0;
  };

  const canUserBeMocked = async (userId: string): Promise<boolean> => {
    const protected = await isUserProtected(userId);
    return !protected;
  };

  const getUserMockeryStatus = async (
    userId: string
  ): Promise<UserMockeryStatus | null> => {
    return mockUserStatuses[userId] || null;
  };

  const getActiveMockeries = async (): Promise<MockeryEvent[]> => {
    return mockActiveMockeries;
  };

  const mockUser = async (
    targetId: string,
    action: MockeryAction,
    options?: { message?: string }
  ): Promise<boolean> => {
    if (!currentUser) {
      console.error("Cannot mock: No current user");
      return false;
    }

    const canBeMocked = await canUserBeMocked(targetId);
    if (!canBeMocked) {
      console.error("Cannot mock: User is protected");
      return false;
    }

    // This would be an API call in a real application
    console.log(
      `User ${currentUser.id} mocking ${targetId} with ${action}`,
      options
    );
    return true;
  };

  return {
    mockUsers,
    protectUser,
    isUserProtected,
    isUserShamed,
    canUserBeMocked,
    getUserMockeryStatus,
    getActiveMockeries,
    mockUser
  };
};

export default useMockery;
