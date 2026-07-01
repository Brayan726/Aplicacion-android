/**
 * Button Component
 * Primary interactive atom with full variant support.
 */

import { useMemo } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { ACCESSIBILITY } from '@/shared/utils/accessibility';
import type { AppThemeColors } from '@/theme';
import type { SpacingToken } from '@/theme';
import type { RadiusToken } from '@/theme';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'success';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  style,
  textStyle,
  accessibilityLabel,
  accessibilityHint,
}: ButtonProps) {
  const { colors, spacing, radius, opacity } = useTheme();
  const normalizedVariant = variant === 'outline' ? 'outlined' : variant;
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);

  const isDisabled = disabled || loading;
  const textColor = getTextColor(normalizedVariant, colors, isDisabled);
  const loaderColor =
    normalizedVariant === 'primary' || normalizedVariant === 'danger' || normalizedVariant === 'success'
      ? colors.onPrimary
      : colors.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={opacity.pressed + opacity.full}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={[
        styles.base,
        styles[`size_${size}`],
        styles[`variant_${normalizedVariant}`],
        isDisabled && styles.disabled,
        fullWidth && styles.fullWidth,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <View style={styles.content}>
          {icon && iconPosition === 'left' && icon}
          <Text
            variant="label"
            size={size === 'sm' ? 'md' : 'lg'}
            style={[{ color: textColor }, textStyle]}
          >
            {title}
          </Text>
          {icon && iconPosition === 'right' && icon}
        </View>
      )}
    </TouchableOpacity>
  );
}

function getTextColor(variant: ButtonVariant, colors: AppThemeColors, disabled: boolean): string {
  if (disabled) return colors.textDisabled;
  const map: Record<ButtonVariant, string> = {
    primary: colors.onPrimary,
    secondary: colors.textPrimary,
    outlined: colors.primary,
    ghost: colors.primary,
    danger: colors.onPrimary,
    success: colors.onPrimary,
  };
  return map[variant];
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken, radius: RadiusToken) {
  return StyleSheet.create({
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radius.large,
      minHeight: ACCESSIBILITY.minTouchTarget,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    size_sm: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      minHeight: ACCESSIBILITY.minTouchTargetSmall,
    },
    size_md: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
    },
    size_lg: {
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing['2xl'],
    },
    variant_primary: {
      backgroundColor: colors.primary,
    },
    variant_secondary: {
      backgroundColor: colors.surfaceVariant,
    },
    variant_outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: colors.primary,
    },
    variant_ghost: {
      backgroundColor: 'transparent',
    },
    variant_danger: {
      backgroundColor: colors.error,
    },
    variant_success: {
      backgroundColor: colors.success,
    },
    disabled: {
      opacity: 0.5,
    },
    fullWidth: {
      width: '100%',
    },
  });
}

// Backward compatibility alias
export type { ButtonVariant as ButtonVariantLegacy };
/** @deprecated Use 'outlined' instead */
export type ButtonVariantWithOutline = ButtonVariant | 'outline';
