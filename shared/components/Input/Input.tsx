/**
 * Input Component
 * Professional text input with validation and icon support.
 */

import { useMemo, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  type ViewStyle,
  type TextInputProps,
} from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { Icon } from '@/shared/icons';
import type { AppThemeColors } from '@/theme';
import type { SpacingToken } from '@/theme';
import type { RadiusToken } from '@/theme';

export type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  hint?: string;
  size?: InputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  containerStyle?: ViewStyle;
  accessibilityLabel?: string;
}

export function Input({
  label,
  error,
  hint,
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  containerStyle,
  secureTextEntry,
  editable = true,
  accessibilityLabel,
  ...textInputProps
}: InputProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isDisabled = editable === false;
  const isSecure = secureTextEntry && !isPasswordVisible;
  const hasError = Boolean(error);

  const fontSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          variant="label"
          size="lg"
          color={hasError ? 'error' : 'textPrimary'}
          style={styles.label}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputWrapper,
          styles[`size_${size}`],
          isFocused && styles.focused,
          hasError && styles.errorWrapper,
          isDisabled && styles.disabled,
        ]}
      >
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        <TextInput
          {...textInputProps}
          editable={editable && !loading}
          secureTextEntry={isSecure}
          accessibilityLabel={accessibilityLabel ?? label ?? textInputProps.placeholder}
          accessibilityRole="text"
          accessibilityState={{ disabled: isDisabled }}
          style={[
            styles.input,
            { fontSize, color: colors.textPrimary },
            leftIcon ? styles.inputWithLeftIcon : undefined,
            (rightIcon || secureTextEntry || loading) ? styles.inputWithRightIcon : undefined,
          ]}
          placeholderTextColor={colors.placeholder}
          onFocus={(e) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
        />
        {loading && (
          <ActivityIndicator size="small" color={colors.primary} style={styles.iconRight} />
        )}
        {!loading && secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((v) => !v)}
            style={styles.iconRight}
            accessibilityRole="button"
            accessibilityLabel={isPasswordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            <Icon
              name={isPasswordVisible ? 'eyeOff' : 'eye'}
              size="sm"
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        )}
        {!loading && !secureTextEntry && rightIcon && (
          <View style={styles.iconRight}>{rightIcon}</View>
        )}
      </View>
      {(error || hint) && (
        <Text variant="caption" size="lg" color={hasError ? 'error' : 'textSecondary'} style={styles.helper}>
          {error ?? hint}
        </Text>
      )}
    </View>
  );
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken, radius: RadiusToken) {
  return StyleSheet.create({
    container: {
      marginBottom: spacing.lg,
    },
    label: {
      marginBottom: spacing.xs,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceVariant,
      borderWidth: 1.5,
      borderColor: colors.border,
      borderRadius: radius.large,
    },
    size_sm: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
    },
    size_md: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
    },
    size_lg: {
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.xl,
    },
    focused: {
      borderColor: colors.primary,
      backgroundColor: colors.surface,
    },
    errorWrapper: {
      borderColor: colors.error,
      backgroundColor: colors.errorContainer,
    },
    disabled: {
      backgroundColor: colors.disabledBackground,
      opacity: 0.6,
    },
    input: {
      flex: 1,
    },
    inputWithLeftIcon: {
      marginLeft: spacing.sm,
    },
    inputWithRightIcon: {
      marginRight: spacing.sm,
    },
    iconLeft: {
      marginRight: spacing.xs,
    },
    iconRight: {
      marginLeft: spacing.xs,
    },
    helper: {
      marginTop: spacing.xs,
    },
  });
}
