/**
 * Themed Styles Utility
 * Factory for theme-aware StyleSheet creation.
 */

import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import type { AppThemeColors } from '@/theme';

export type ThemedStyleFactory<T extends StyleSheet.NamedStyles<T>> = (
  colors: AppThemeColors
) => T;

export function useThemedStyles<T extends StyleSheet.NamedStyles<T>>(
  factory: ThemedStyleFactory<T>
): T {
  const { colors } = useTheme();
  return useMemo(() => StyleSheet.create(factory(colors)), [colors, factory]);
}
