/**
 * useSystemTheme Hook
 * Syncs theme with OS color scheme when mode is 'system'.
 */

import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useThemeStore } from '@/store';

export function useSystemTheme() {
  const colorScheme = useColorScheme();
  const mode = useThemeStore((state) => state.mode);
  const setSystemTheme = useThemeStore((state) => state.setSystemTheme);

  useEffect(() => {
    if (mode === 'system') {
      setSystemTheme(colorScheme === 'dark');
    }
  }, [colorScheme, mode, setSystemTheme]);
}
