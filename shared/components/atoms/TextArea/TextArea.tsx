/**
 * TextArea Component
 * Multi-line text input built on Input tokens.
 */

import { useMemo, useState } from 'react';
import { View, TextInput, StyleSheet, type ViewStyle, type TextInputProps } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import type { AppThemeColors } from '@/theme';
import type { SpacingToken } from '@/theme';
import type { RadiusToken } from '@/theme';

interface TextAreaProps extends Omit<TextInputProps, 'style' | 'multiline'> {
  label?: string;
  error?: string;
  hint?: string;
  rows?: number;
  containerStyle?: ViewStyle;
  accessibilityLabel?: string;
}

export function TextArea({
  label,
  error,
  hint,
  rows = 4,
  containerStyle,
  editable = true,
  accessibilityLabel,
  ...textInputProps
}: TextAreaProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);
  const [isFocused, setIsFocused] = useState(false);
  const hasError = Boolean(error);
  const minHeight = rows * 24;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text variant="label" size="lg" color={hasError ? 'error' : 'textPrimary'} style={styles.label}>
          {label}
        </Text>
      )}
      <TextInput
        {...textInputProps}
        multiline
        editable={editable}
        accessibilityLabel={accessibilityLabel ?? label ?? textInputProps.placeholder}
        accessibilityRole="text"
        style={[
          styles.input,
          { minHeight, color: colors.textPrimary },
          isFocused && styles.focused,
          hasError && styles.errorWrapper,
          editable === false && styles.disabled,
        ]}
        placeholderTextColor={colors.placeholder}
        textAlignVertical="top"
        onFocus={(e) => {
          setIsFocused(true);
          textInputProps.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          textInputProps.onBlur?.(e);
        }}
      />
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
    input: {
      backgroundColor: colors.surfaceVariant,
      borderWidth: 1.5,
      borderColor: colors.border,
      borderRadius: radius.large,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      fontSize: 16,
      lineHeight: 24,
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
    helper: {
      marginTop: spacing.xs,
    },
  });
}
