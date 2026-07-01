/**
 * Toast Molecule
 */

import { useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { Icon, Icons, type IconName } from '@/shared/icons';
import type { AppThemeColors, SpacingToken, RadiusToken, ElevationToken } from '@/theme';

export type ToastVariant = 'default' | 'success' | 'error';

interface ToastProps {
  message: string;
  variant?: ToastVariant;
  onDismiss?: () => void;
  accessibilityLabel?: string;
}

const variantIcons: Record<ToastVariant, IconName | null> = {
  default: null,
  success: Icons.checkCircle,
  error: Icons.error,
};

export function Toast({
  message,
  variant = 'default',
  onDismiss,
  accessibilityLabel,
}: ToastProps) {
  const { colors, spacing, radius, elevation, zIndex } = useTheme();
  const styles = useMemo(
    () => createStyles(colors, spacing, radius, elevation),
    [colors, spacing, radius, elevation]
  );
  const icon = variantIcons[variant];

  return (
    <View
      style={[styles.container, { zIndex: zIndex.toast }]}
      accessibilityRole="alert"
      accessibilityLabel={accessibilityLabel ?? message}
      accessibilityLiveRegion="polite"
    >
      {icon && (
        <Icon
          name={icon}
          size="sm"
          color={variant === 'success' ? colors.success : colors.error}
        />
      )}
      <Text variant="body" size="sm" color="textInverse" style={styles.message}>
        {message}
      </Text>
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss} accessibilityRole="button" accessibilityLabel="Cerrar">
          <Icon name={Icons.close} size="sm" color={colors.textInverse} />
        </TouchableOpacity>
      )}
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
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.onBackground,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: radius.large,
      gap: spacing.sm,
      ...elevation[4],
      maxWidth: '90%',
    },
    message: { flex: 1 },
  });
}
