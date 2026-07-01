/**
 * useTheme Hook
 * Primary hook for consuming design tokens in components.
 */

import { useThemeStore } from '@/store';

export function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const activeTheme = useThemeStore((state) => state.activeTheme);
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return {
    theme,
    colors: theme.colors,
    tokens: theme.tokens,
    spacing: theme.tokens.spacing,
    radius: theme.tokens.radius,
    typography: theme.tokens.typography,
    elevation: theme.tokens.elevation,
    opacity: theme.tokens.opacity,
    animation: theme.tokens.animation,
    zIndex: theme.tokens.zIndex,
    breakpoints: theme.tokens.breakpoints,
    isDark: activeTheme === 'dark',
    activeTheme,
    mode,
    setMode,
    toggleTheme,
  };
}

export type ThemeContext = ReturnType<typeof useTheme>;
