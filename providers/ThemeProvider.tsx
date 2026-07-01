/**
 * Theme Provider
 * Connects OS color scheme to Zustand theme store.
 */

import type { ReactNode } from 'react';
import { useSystemTheme } from '@/shared/hooks/useSystemTheme';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useSystemTheme();
  return children;
}
