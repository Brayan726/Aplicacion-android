/**
 * Section Organism
 */

import { View, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import type { SpacingToken } from '@/theme';

interface SectionProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

export function Section({
  title,
  subtitle,
  action,
  children,
  style,
  accessibilityLabel,
}: SectionProps) {
  const { spacing } = useTheme();
  const styles = createStyles(spacing);

  return (
    <View style={[styles.container, style]} accessibilityLabel={accessibilityLabel}>
      {(title || action) && (
        <View style={styles.header}>
          <View style={styles.headerText}>
            {title && (
              <Text variant="title" size="sm" color="textPrimary">
                {title}
              </Text>
            )}
            {subtitle && (
              <Text variant="caption" size="lg" color="textSecondary">
                {subtitle}
              </Text>
            )}
          </View>
          {action}
        </View>
      )}
      {children}
    </View>
  );
}

function createStyles(spacing: SpacingToken) {
  return StyleSheet.create({
    container: { marginBottom: spacing['2xl'] },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.md,
    },
    headerText: { flex: 1, gap: spacing.xxs },
  });
}
