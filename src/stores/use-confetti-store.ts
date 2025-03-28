
import { create } from 'zustand';

interface ConfettiState {
  isActive: boolean;
  fire: () => void;
  stop: () => void;
}

export const useConfettiStore = create<ConfettiState>()((set) => ({
  isActive: false,
  fire: () => set({ isActive: true }),
  stop: () => set({ isActive: false })
}));
