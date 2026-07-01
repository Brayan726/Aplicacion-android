/**
 * IconButton Atom
 */

import { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Icon, type IconName, type IconSize } from '@/shared/icons';
import { ACCESSIBILITY } from '@/shared/utils/accessibility';
import type { SpacingToken, RadiusToken, AppThemeColors } from '@/theme';

export type IconButtonVariant = 'default' | 'filled' | 'tonal' | 'outlined';
export type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps {
  icon: IconName;
  onPress: () => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  color?: string;
  style?: ViewStyle;
  accessibilityLabel: string;
  accessibilityHint?: string;
}

const sizeMap: Record<IconButtonSize, { container: number; icon: IconSize }> = {
  sm: { container: 36, icon: 'sm' },
  md: { container: 44, icon: 'md' },
  lg: { container: 52, icon: 'lg' },
};

export function IconButton({
  icon,
  onPress,
  variant = 'default',
  size = 'md',
  disabled = false,
  color,
  style,
  accessibilityLabel,
  accessibilityHint,
}: IconButtonProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);
  const dimensions = sizeMap[size];
  const iconColor = color ?? (variant === 'filled' ? colors.onPrimary : colors.textPrimary);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      style={[
        styles.base,
        styles[`variant_${variant}`],
        { width: dimensions.container, height: dimensions.container, borderRadius: radius.full },
        disabled && styles.disabled,
        style,
      ]}
    >
      <Icon name={icon} size={dimensions.icon} color={iconColor} />
    </TouchableOpacity>
  );
}

function createStyles(colors: AppThemeColors, _spacing: SpacingToken, _radius: RadiusToken) {
  return StyleSheet.create({
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: ACCESSIBILITY.minTouchTarget,
      minHeight: ACCESSIBILITY.minTouchTarget,
    },
    variant_default: { backgroundColor: 'transparent' },
    variant_filled: { backgroundColor: colors.primary },
    variant_tonal: { backgroundColor: colors.primaryContainer },
    variant_outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.border,
    },
    disabled: { opacity: 0.5 },
  });
}
