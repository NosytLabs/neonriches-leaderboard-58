
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SettingsState {
  soundEffects: boolean;
  volume: number;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  toggleSoundEffects: () => void;
  setVolume: (volume: number) => void;
  setTheme: (theme: 'dark' | 'light' | 'system') => void;
  toggleNotifications: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      soundEffects: true,
      volume: 0.5,
      theme: 'dark',
      notifications: true,
      toggleSoundEffects: () => set((state) => ({ soundEffects: !state.soundEffects })),
      setVolume: (volume) => set({ volume }),
      setTheme: (theme) => set({ theme }),
      toggleNotifications: () => set((state) => ({ notifications: !state.notifications })),
    }),
    {
      name: 'spendthrone-settings',
    }
  )
);
