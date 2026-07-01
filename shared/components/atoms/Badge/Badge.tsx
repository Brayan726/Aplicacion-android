/**
 * Badge Atom
 */

import { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import type { AppThemeColors, SpacingToken, RadiusToken } from '@/theme';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  accessibilityLabel?: string;
}

export function Badge({
  label,
  variant = 'primary',
  size = 'md',
  accessibilityLabel,
}: BadgeProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(spacing, radius), [spacing, radius]);
  const colorPair = getVariantColors(variant, colors);

  return (
    <View
      style={[styles.base, styles[`size_${size}`], { backgroundColor: colorPair.bg }]}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? label}
    >
      <Text variant="label" size={size === 'sm' ? 'sm' : 'md'} style={{ color: colorPair.text }}>
        {label}
      </Text>
    </View>
  );
}

function getVariantColors(variant: BadgeVariant, colors: AppThemeColors) {
  const map: Record<BadgeVariant, { bg: string; text: string }> = {
    primary: { bg: colors.primaryContainer, text: colors.onPrimaryContainer },
    secondary: { bg: colors.secondaryContainer, text: colors.onSecondaryContainer },
    success: { bg: colors.successContainer, text: colors.onSuccessContainer },
    warning: { bg: colors.warningContainer, text: colors.onWarningContainer },
    error: { bg: colors.errorContainer, text: colors.onErrorContainer },
    info: { bg: colors.infoContainer, text: colors.onInfoContainer },
    neutral: { bg: colors.surfaceVariant, text: colors.textSecondary },
  };
  return map[variant];
}

function createStyles(spacing: SpacingToken, radius: RadiusToken) {
  return StyleSheet.create({
    base: { alignSelf: 'flex-start', borderRadius: radius.full },
    size_sm: { paddingVertical: spacing.xxs, paddingHorizontal: spacing.sm },
    size_md: { paddingVertical: spacing.xs, paddingHorizontal: spacing.md },
  });
}
