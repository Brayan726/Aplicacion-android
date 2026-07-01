/**
 * StatCard Molecule
 */

import { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { Card } from '@/shared/components/Card';
import { Icon, type IconName } from '@/shared/icons';
import type { SpacingToken } from '@/theme';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: IconName;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  accessibilityLabel?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  accessibilityLabel,
}: StatCardProps) {
  const { colors, spacing } = useTheme();
  const styles = useMemo(() => createStyles(spacing), [spacing]);

  const trendColor =
    trend === 'up' ? colors.success : trend === 'down' ? colors.error : colors.textSecondary;

  return (
    <Card variant="elevated" padding="md" accessibilityLabel={accessibilityLabel ?? `${title}: ${value}`}>
      <View style={styles.header}>
        <Text variant="label" size="md" color="textSecondary">
          {title}
        </Text>
        {icon && <Icon name={icon} size="sm" color={colors.primary} />}
      </View>
      <Text variant="headline" size="sm" color="textPrimary" style={styles.value}>
        {value}
      </Text>
      {(subtitle || trendValue) && (
        <View style={styles.footer}>
          {trendValue && (
            <Text variant="caption" size="lg" style={{ color: trendColor }}>
              {trend === 'up' ? '↑' : trend === 'down' ? '↓' : ''} {trendValue}
            </Text>
          )}
          {subtitle && (
            <Text variant="caption" size="lg" color="textTertiary">
              {subtitle}
            </Text>
          )}
        </View>
      )}
    </Card>
  );
}

function createStyles(spacing: SpacingToken) {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.sm,
    },
    value: { marginBottom: spacing.xs },
    footer: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
  });
}
