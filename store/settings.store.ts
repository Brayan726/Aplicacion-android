/**
 * Settings Store
 * Manages application settings and preferences
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Settings types
export interface AppSettings {
  // Display
  language: 'es' | 'en';
  dateFormat: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';
  timeFormat: '24h' | '12h';
  startDayOfWeek: 'monday' | 'sunday';

  // Notifications
  notificationsEnabled: boolean;
  trainingReminders: boolean;
  competitionReminders: boolean;
  attendanceReminders: boolean;

  // Data
  autoSync: boolean;
  syncOverWifiOnly: boolean;

  // Privacy
  analyticsEnabled: boolean;
  crashReportsEnabled: boolean;

  // Appearance
  compactMode: boolean;
  showAvatars: boolean;
}

interface SettingsState extends AppSettings {
  // Actions
  updateSettings: (settings: Partial<AppSettings>) => void;
  resetToDefaults: () => void;
}

const defaultSettings: AppSettings = {
  // Display
  language: 'es',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: '24h',
  startDayOfWeek: 'monday',

  // Notifications
  notificationsEnabled: true,
  trainingReminders: true,
  competitionReminders: true,
  attendanceReminders: true,

  // Data
  autoSync: true,
  syncOverWifiOnly: false,

  // Privacy
  analyticsEnabled: true,
  crashReportsEnabled: true,

  // Appearance
  compactMode: false,
  showAvatars: true,
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...defaultSettings,

      updateSettings: (newSettings) => {
        set((state) => ({
          ...state,
          ...newSettings,
        }));
      },

      resetToDefaults: () => {
        set(defaultSettings);
      },
    }),
    {
      name: 'linces-settings-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
