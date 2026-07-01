/**
 * State Components
 */

import { useMemo } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { Button } from '@/shared/components/Button';
import { Icon, Icons } from '@/shared/icons';
import type { SpacingToken } from '@/theme';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  accessibilityLabel?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  accessibilityLabel,
}: EmptyStateProps) {
  const { colors, spacing } = useTheme();
  const styles = useMemo(() => createStateStyles(spacing), [spacing]);

  return (
    <View style={styles.container} accessibilityLabel={accessibilityLabel ?? title}>
      <View style={[styles.iconCircle, { backgroundColor: colors.surfaceVariant }]}>
        {icon ?? <Icon name={Icons.empty} size="xl" color={colors.textTertiary} />}
      </View>
      <Text variant="title" size="md" color="textPrimary" align="center" style={styles.title}>
        {title}
      </Text>
      {description && (
        <Text variant="body" size="md" color="textSecondary" align="center" style={styles.description}>
          {description}
        </Text>
      )}
      {actionLabel && onAction && (
        <Button title={actionLabel} onPress={onAction} variant="primary" style={styles.action} />
      )}
    </View>
  );
}

export type LoadingSize = 'sm' | 'md' | 'lg';

interface LoadingStateProps {
  size?: LoadingSize;
  message?: string;
  fullScreen?: boolean;
  accessibilityLabel?: string;
}

export function LoadingState({
  size = 'md',
  message,
  fullScreen = false,
  accessibilityLabel = 'Cargando',
}: LoadingStateProps) {
  const { colors, spacing } = useTheme();
  const styles = useMemo(() => createStateStyles(spacing), [spacing]);
  const indicatorSize = size === 'lg' ? 'large' : 'small';

  const content = (
    <View style={[styles.loadingContainer, fullScreen && styles.fullScreen]}>
      <ActivityIndicator size={indicatorSize} color={colors.primary} accessibilityLabel={accessibilityLabel} />
      {message && (
        <Text variant="body" size="sm" color="textSecondary" style={styles.loadingMessage}>
          {message}
        </Text>
      )}
    </View>
  );

  if (fullScreen) {
    return <View style={[styles.overlay, { backgroundColor: colors.background }]}>{content}</View>;
  }
  return content;
}

export const Loading = LoadingState;

interface ErrorStateProps {
  title?: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  accessibilityLabel?: string;
}

export function ErrorState({
  title = 'Error',
  message,
  actionLabel,
  onAction,
  accessibilityLabel,
}: ErrorStateProps) {
  const { colors, spacing } = useTheme();
  const styles = useMemo(() => createStateStyles(spacing), [spacing]);

  return (
    <View style={styles.container} accessibilityLabel={accessibilityLabel ?? title}>
      <View style={[styles.iconCircle, { backgroundColor: colors.errorContainer }]}>
        <Icon name={Icons.error} size="xl" color={colors.error} />
      </View>
      <Text variant="title" size="md" color="textPrimary" align="center" style={styles.title}>
        {title}
      </Text>
      <Text variant="body" size="md" color="textSecondary" align="center" style={styles.description}>
        {message}
      </Text>
      {actionLabel && onAction && (
        <Button title={actionLabel} onPress={onAction} variant="outlined" style={styles.action} />
      )}
    </View>
  );
}

export function NoConnectionState({ onRetry, accessibilityLabel }: { onRetry?: () => void; accessibilityLabel?: string }) {
  const { colors } = useTheme();
  return (
    <EmptyState
      icon={<Icon name={Icons.wifiOff} size="xl" color={colors.textTertiary} />}
      title="Sin conexión"
      description="Verifica tu conexión a internet e intenta de nuevo."
      actionLabel={onRetry ? 'Reintentar' : undefined}
      onAction={onRetry}
      accessibilityLabel={accessibilityLabel ?? 'Sin conexión a internet'}
    />
  );
}

export function PermissionDeniedState({
  title = 'Permiso denegado',
  description = 'Necesitas otorgar permisos para usar esta función.',
  onOpenSettings,
  accessibilityLabel,
}: {
  title?: string;
  description?: string;
  onOpenSettings?: () => void;
  accessibilityLabel?: string;
}) {
  const { colors } = useTheme();
  return (
    <EmptyState
      icon={<Icon name={Icons.permission} size="xl" color={colors.textTertiary} />}
      title={title}
      description={description}
      actionLabel={onOpenSettings ? 'Abrir configuración' : undefined}
      onAction={onOpenSettings}
      accessibilityLabel={accessibilityLabel ?? title}
    />
  );
}

function createStateStyles(spacing: SpacingToken) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing['3xl'],
    },
    iconCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.lg,
    },
    title: { marginBottom: spacing.sm },
    description: { maxWidth: 280, marginBottom: spacing['2xl'] },
    action: { minWidth: 160 },
    loadingContainer: { alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
    fullScreen: { flex: 1 },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingMessage: { marginTop: spacing.md },
  });
}
