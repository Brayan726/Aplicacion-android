/**
 * ListItem Molecule
 */

import { useMemo } from 'react';
import { TouchableOpacity, View, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { Icon, Icons, type IconName } from '@/shared/icons';
import { ACCESSIBILITY } from '@/shared/utils/accessibility';
import type { AppThemeColors, SpacingToken } from '@/theme';

interface ListItemProps {
  title: string;
  subtitle?: string;
  description?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  showChevron?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export function ListItem({
  title,
  subtitle,
  description,
  left,
  right,
  showChevron = false,
  onPress,
  disabled = false,
  style,
  accessibilityLabel,
  accessibilityHint,
}: ListItemProps) {
  const { colors, spacing } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing), [colors, spacing]);

  const content = (
    <>
      {left && <View style={styles.left}>{left}</View>}
      <View style={styles.content}>
        <Text variant="body" size="md" color="textPrimary" numberOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text variant="body" size="sm" color="textSecondary" numberOfLines={1}>
            {subtitle}
          </Text>
        )}
        {description && (
          <Text variant="caption" size="lg" color="textTertiary" numberOfLines={2}>
            {description}
          </Text>
        )}
      </View>
      {right && <View style={styles.right}>{right}</View>}
      {showChevron && (
        <Icon name={Icons.chevronRight} size="sm" color={colors.textTertiary} />
      )}
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityHint={accessibilityHint}
        accessibilityState={{ disabled }}
        style={[styles.container, disabled && styles.disabled, style]}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[styles.container, style]}
      accessibilityLabel={accessibilityLabel ?? title}
    >
      {content}
    </View>
  );
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      minHeight: ACCESSIBILITY.minTouchTarget,
      gap: spacing.md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.divider,
    },
    left: { flexShrink: 0 },
    content: { flex: 1, gap: spacing.xxs },
    right: { flexShrink: 0 },
    disabled: { opacity: 0.5 },
  });
}

export type { ListItemProps };
