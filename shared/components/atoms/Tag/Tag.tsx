/**
 * Tag Atom
 * Non-interactive label tag.
 */

import { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import type { SpacingToken, RadiusToken, AppThemeColors } from '@/theme';

interface TagProps {
  label: string;
  color?: string;
  accessibilityLabel?: string;
}

export function Tag({ label, color, accessibilityLabel }: TagProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);

  return (
    <View
      style={[styles.base, color ? { backgroundColor: color } : undefined]}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? label}
    >
      <Text variant="label" size="sm" color="textSecondary">
        {label}
      </Text>
    </View>
  );
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken, radius: RadiusToken) {
  return StyleSheet.create({
    base: {
      backgroundColor: colors.surfaceVariant,
      borderRadius: radius.small,
      paddingVertical: spacing.xxs,
      paddingHorizontal: spacing.sm,
      alignSelf: 'flex-start',
    },
  });
}
