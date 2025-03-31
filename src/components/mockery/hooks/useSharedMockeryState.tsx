
import { create } from 'zustand';
import { MockeryAction } from '@/types/mockery-types';

interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration?: number;
}

interface MockeryState {
  selectedAction: MockeryAction | null;
  targetUser: string | null;
  showEffect: boolean;
  effectData: MockeryEffectData;
  setSelectedAction: (action: MockeryAction | null) => void;
  setTargetUser: (username: string | null) => void;
  showMockeryEffect: (username: string, action: MockeryAction) => void;
  hideMockeryEffect: () => void;
}

export const useSharedMockeryState = create<MockeryState>((set) => ({
  selectedAction: null,
  targetUser: null,
  showEffect: false,
  effectData: {
    username: '',
    action: 'tomatoes'
  },
  
  setSelectedAction: (action) => set({ selectedAction: action }),
  setTargetUser: (username) => set({ targetUser: username }),
  
  showMockeryEffect: (username, action) => set({
    showEffect: true,
    effectData: {
      username,
      action
    }
  }),
  
  hideMockeryEffect: () => set({ showEffect: false })
}));

export default useSharedMockeryState;
