/**
 * FloatingActionButton Molecule
 */

import { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Icon, type IconName } from '@/shared/icons';
import { Text } from '@/shared/components/atoms/Text';
import { ACCESSIBILITY } from '@/shared/utils/accessibility';
import type { AppThemeColors, SpacingToken, RadiusToken, ElevationToken } from '@/theme';

export type FABSize = 'sm' | 'md' | 'lg';

interface FloatingActionButtonProps {
  icon: IconName;
  onPress: () => void;
  label?: string;
  size?: FABSize;
  extended?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  accessibilityLabel: string;
  accessibilityHint?: string;
}

const sizeMap: Record<FABSize, number> = { sm: 48, md: 56, lg: 64 };

export function FloatingActionButton({
  icon,
  onPress,
  label,
  size = 'md',
  extended = false,
  disabled = false,
  style,
  accessibilityLabel,
  accessibilityHint,
}: FloatingActionButtonProps) {
  const { colors, spacing, radius, elevation } = useTheme();
  const styles = useMemo(
    () => createStyles(colors, spacing, radius, elevation, size, extended),
    [colors, spacing, radius, elevation, size, extended]
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      style={[styles.base, disabled && styles.disabled, style]}
    >
      <Icon name={icon} size="md" color={colors.onPrimary} />
      {extended && label && (
        <Text variant="label" size="lg" color="textInverse">
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

function createStyles(
  colors: AppThemeColors,
  spacing: SpacingToken,
  radius: RadiusToken,
  elevation: ElevationToken,
  size: FABSize,
  extended: boolean
) {
  const dimension = sizeMap[size];
  return StyleSheet.create({
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      borderRadius: extended ? radius.full : radius.full,
      height: dimension,
      minWidth: extended ? undefined : dimension,
      width: extended ? undefined : dimension,
      paddingHorizontal: extended ? spacing['2xl'] : 0,
      gap: extended ? spacing.sm : 0,
      ...elevation[4],
      minHeight: ACCESSIBILITY.minTouchTarget,
    },
    disabled: { opacity: 0.5 },
  });
}
