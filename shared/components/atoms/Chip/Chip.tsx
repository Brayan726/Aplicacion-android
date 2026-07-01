/**
 * Chip Atom
 * Selectable filter/action chip.
 */

import { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { ACCESSIBILITY } from '@/shared/utils/accessibility';
import type { SpacingToken, RadiusToken, AppThemeColors } from '@/theme';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  accessibilityLabel?: string;
}

export function Chip({
  label,
  selected = false,
  onPress,
  icon,
  disabled = false,
  accessibilityLabel,
}: ChipProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || !onPress}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ selected, disabled }}
      style={[styles.base, selected ? styles.selected : styles.default, disabled && styles.disabled]}
    >
      <View style={styles.content}>
        {icon}
        <Text
          variant="label"
          size="md"
          color={selected ? 'primary' : 'textSecondary'}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken, radius: RadiusToken) {
  return StyleSheet.create({
    base: {
      borderRadius: radius.full,
      minHeight: ACCESSIBILITY.minTouchTargetSmall,
      justifyContent: 'center',
    },
    default: {
      backgroundColor: colors.surfaceVariant,
      borderWidth: 1,
      borderColor: colors.border,
    },
    selected: {
      backgroundColor: colors.primaryContainer,
      borderWidth: 1,
      borderColor: colors.primary,
    },
    disabled: { opacity: 0.5 },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
    },
  });
}
