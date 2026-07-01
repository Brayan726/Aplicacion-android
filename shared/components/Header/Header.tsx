/**
 * Header Organism
 */

import { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { IconButton } from '@/shared/components/atoms/IconButton';
import { ACCESSIBILITY } from '@/shared/utils/accessibility';
import type { AppThemeColors, SpacingToken } from '@/theme';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  accessibilityLabel?: string;
}

export function Header({
  title,
  subtitle,
  showBack = false,
  onBack,
  rightAction,
  accessibilityLabel,
}: HeaderProps) {
  const { colors, spacing } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(colors, spacing), [colors, spacing]);

  return (
    <View
      style={[styles.container, { paddingTop: insets.top + spacing.md }]}
      accessibilityRole="header"
      accessibilityLabel={accessibilityLabel ?? title}
    >
      <View style={styles.content}>
        <View style={styles.side}>
          {showBack && onBack && (
            <IconButton
              icon="chevronLeft"
              onPress={onBack}
              accessibilityLabel="Volver"
              accessibilityHint="Regresa a la pantalla anterior"
            />
          )}
        </View>
        <View style={styles.center}>
          <Text variant="title" size="md" color="textPrimary" numberOfLines={1} align="center">
            {title}
          </Text>
          {subtitle && (
            <Text variant="caption" size="lg" color="textSecondary" numberOfLines={1} align="center">
              {subtitle}
            </Text>
          )}
        </View>
        <View style={styles.side}>{rightAction}</View>
      </View>
    </View>
  );
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken) {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.divider,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.md,
      minHeight: ACCESSIBILITY.minTouchTarget,
    },
    side: {
      minWidth: ACCESSIBILITY.minTouchTarget,
      alignItems: 'flex-start',
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
