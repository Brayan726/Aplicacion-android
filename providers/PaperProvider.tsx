/**
 * Paper Provider
 * React Native Paper theme configuration
 */

import { PaperProvider as RNPaperProvider } from 'react-native-paper';
import type { ReactNode } from 'react';
import { useThemeStore } from '@/store';

interface PaperProviderProps {
  children: ReactNode;
}

export function PaperProvider({ children }: PaperProviderProps) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <RNPaperProvider theme={theme}>
      {children}
    </RNPaperProvider>
  );
}
