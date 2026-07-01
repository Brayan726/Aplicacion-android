/**
 * Root Layout
 * Application root layout with providers
 */

import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { AppProvider } from '@/providers';
import { useThemeStore } from '@/store';

function RootNavigator() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={theme.colors.statusBar === 'light' ? 'light' : 'dark'} />
    </>
  );
}

export default function RootLayout() {
  useFrameworkReady();

  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
