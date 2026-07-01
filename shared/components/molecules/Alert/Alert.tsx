/**
 * Alert Molecule
 */

import { useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { Icon, Icons, type IconName } from '@/shared/icons';
import type { AppThemeColors, SpacingToken, RadiusToken } from '@/theme';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  title?: string;
  message: string;
  variant?: AlertVariant;
  onDismiss?: () => void;
  action?: { label: string; onPress: () => void };
  accessibilityLabel?: string;
}

const variantIcons: Record<AlertVariant, IconName> = {
  info: Icons.info,
  success: Icons.success,
  warning: Icons.warning,
  error: Icons.error,
};

export function Alert({
  title,
  message,
  variant = 'info',
  onDismiss,
  action,
  accessibilityLabel,
}: AlertProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);
  const variantColors = getVariantColors(variant, colors);

  return (
    <View
      style={[styles.container, { backgroundColor: variantColors.bg, borderColor: variantColors.border }]}
      accessibilityRole="alert"
      accessibilityLabel={accessibilityLabel ?? title ?? message}
    >
      <Icon name={variantIcons[variant]} size="md" color={variantColors.icon} />
      <View style={styles.content}>
        {title && (
          <Text variant="title" size="sm" style={{ color: variantColors.text }}>
            {title}
          </Text>
        )}
        <Text variant="body" size="sm" style={{ color: variantColors.text }}>
          {message}
        </Text>
        {action && (
          <TouchableOpacity onPress={action.onPress} accessibilityRole="button" accessibilityLabel={action.label}>
            <Text variant="label" size="lg" style={{ color: variantColors.icon, marginTop: spacing.sm }}>
              {action.label}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss} accessibilityRole="button" accessibilityLabel="Cerrar alerta">
          <Icon name={Icons.close} size="sm" color={variantColors.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

function getVariantColors(variant: AlertVariant, colors: AppThemeColors) {
  const map: Record<AlertVariant, { bg: string; border: string; icon: string; text: string }> = {
    info: { bg: colors.infoContainer, border: colors.info, icon: colors.info, text: colors.onInfoContainer },
    success: { bg: colors.successContainer, border: colors.success, icon: colors.success, text: colors.onSuccessContainer },
    warning: { bg: colors.warningContainer, border: colors.warning, icon: colors.warning, text: colors.onWarningContainer },
    error: { bg: colors.errorContainer, border: colors.error, icon: colors.error, text: colors.onErrorContainer },
  };
  return map[variant];
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken, radius: RadiusToken) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: spacing.lg,
      borderRadius: radius.large,
      borderWidth: 1,
      gap: spacing.md,
    },
    content: { flex: 1, gap: spacing.xxs },
  });
}
