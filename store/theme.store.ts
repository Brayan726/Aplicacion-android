/**
 * Theme Store
 * Manages application theme state (light/dark mode)
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, type AppTheme } from '@/theme';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
  activeTheme: 'light' | 'dark';
  theme: AppTheme;
  isLoading: boolean;

  // Actions
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  setSystemTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'system',
      activeTheme: 'light',
      theme: lightTheme,
      isLoading: true,

      setMode: (mode) => {
        set((state) => {
          let activeTheme: 'light' | 'dark' = 'light';

          if (mode === 'dark') {
            activeTheme = 'dark';
          } else if (mode === 'light') {
            activeTheme = 'light';
          }
          // For 'system', we'll use the current activeTheme until setSystemTheme is called

          return {
            mode,
            activeTheme,
            theme: activeTheme === 'dark' ? darkTheme : lightTheme,
          };
        });
      },

      toggleTheme: () => {
        const currentTheme = get().activeTheme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        set({
          mode: newTheme,
          activeTheme: newTheme,
          theme: newTheme === 'dark' ? darkTheme : lightTheme,
        });
      },

      setSystemTheme: (isDark) => {
        const { mode } = get();
        if (mode === 'system') {
          const activeTheme = isDark ? 'dark' : 'light';
          set({
            activeTheme,
            theme: activeTheme === 'dark' ? darkTheme : lightTheme,
          });
        }
      },
    }),
    {
      name: 'linces-theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        mode: state.mode,
        activeTheme: state.activeTheme,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoading = false;
        }
      },
    }
  )
);
