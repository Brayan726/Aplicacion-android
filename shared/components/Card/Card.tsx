/**
 * Card Component
 */

import { useMemo } from 'react';
import { View, TouchableOpacity, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import type { AppThemeColors, SpacingToken, RadiusToken, ElevationToken } from '@/theme';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'filled';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  onPress,
  style,
  accessibilityLabel,
}: CardProps) {
  const { colors, spacing, radius, elevation } = useTheme();
  const styles = useMemo(
    () => createStyles(colors, spacing, radius, elevation),
    [colors, spacing, radius, elevation]
  );

  const cardStyle = [
    styles.base,
    styles[`variant_${variant}`],
    styles[`padding_${padding}`],
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        style={cardStyle}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={cardStyle} accessibilityLabel={accessibilityLabel}>
      {children}
    </View>
  );
}

function createStyles(
  colors: AppThemeColors,
  spacing: SpacingToken,
  radius: RadiusToken,
  elevation: ElevationToken
) {
  return StyleSheet.create({
    base: {
      borderRadius: radius.xl,
      backgroundColor: colors.card,
      overflow: 'hidden',
    },
    variant_default: {},
    variant_outlined: {
      borderWidth: 1,
      borderColor: colors.border,
    },
    variant_elevated: {
      ...elevation[3],
      backgroundColor: colors.cardElevated,
    },
    variant_filled: {
      backgroundColor: colors.surfaceVariant,
    },
    padding_none: {},
    padding_sm: { padding: spacing.md },
    padding_md: { padding: spacing.lg },
    padding_lg: { padding: spacing['2xl'] },
  });
}

// Backward compatibility
export type { CardVariant as CardVariantLegacy };
/** @deprecated Use 'outlined' | 'elevated' | 'filled' */
export type CardVariantOld = CardVariant | 'elevated';
