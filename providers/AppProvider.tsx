/**
 * App Provider
 * Root provider that combines all application providers
 */

import type { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryProvider } from './QueryProvider';
import { PaperProvider } from './PaperProvider';
import { ThemeProvider } from './ThemeProvider';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <ThemeProvider>
          <PaperProvider>{children}</PaperProvider>
        </ThemeProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
