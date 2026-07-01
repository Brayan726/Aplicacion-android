/**
 * Progress Atoms — Linear, Circular, and unified Progress
 */

import { useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import type { AppThemeColors, RadiusToken } from '@/theme';

interface LinearProgressProps {
  value: number;
  max?: number;
  color?: string;
  trackColor?: string;
  height?: number;
  accessibilityLabel?: string;
}

export function LinearProgress({
  value,
  max = 100,
  color,
  trackColor,
  height = 4,
  accessibilityLabel,
}: LinearProgressProps) {
  const { colors, radius } = useTheme();
  const styles = useMemo(() => createLinearStyles(colors, radius, height), [colors, radius, height]);
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <View
      style={[styles.track, trackColor ? { backgroundColor: trackColor } : undefined]}
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel ?? `Progreso ${Math.round(percentage)}%`}
      accessibilityValue={{ min: 0, max, now: value }}
    >
      <View
        style={[
          styles.fill,
          { width: `${percentage}%` },
          color ? { backgroundColor: color } : undefined,
        ]}
      />
    </View>
  );
}

interface CircularProgressProps {
  size?: number;
  color?: string;
  accessibilityLabel?: string;
}

export function CircularProgress({
  size = 48,
  color,
  accessibilityLabel = 'Cargando',
}: CircularProgressProps) {
  const { colors } = useTheme();

  return (
    <ActivityIndicator
      size={size > 36 ? 'large' : 'small'}
      color={color ?? colors.primary}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

export function Progress(props: LinearProgressProps) {
  return <LinearProgress {...props} />;
}

function createLinearStyles(colors: AppThemeColors, radius: RadiusToken, height: number) {
  return StyleSheet.create({
    track: {
      height,
      backgroundColor: colors.surfaceVariant,
      borderRadius: radius.full,
      overflow: 'hidden',
      width: '100%',
    },
    fill: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: radius.full,
    },
  });
}
