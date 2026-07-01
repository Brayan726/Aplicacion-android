/**
 * Container Layout Component
 */

import { View, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { useResponsive } from '@/shared/utils/responsive';
import type { SpacingToken } from '@/theme';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl';

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  centered?: boolean;
  style?: ViewStyle;
}

export function Container({ children, size = 'md', centered = false, style }: ContainerProps) {
  const { spacing } = useTheme();
  const { containerMaxWidth } = useResponsive();
  const styles = createStyles(spacing);

  return (
    <View
      style={[
        styles.container,
        styles[size],
        centered && { maxWidth: containerMaxWidth, alignSelf: 'center' },
        style,
      ]}
    >
      {children}
    </View>
  );
}

function createStyles(spacing: SpacingToken) {
  return StyleSheet.create({
    container: { width: '100%' },
    sm: { paddingHorizontal: spacing.md, paddingVertical: spacing.md },
    md: { paddingHorizontal: spacing.lg, paddingVertical: spacing.lg },
    lg: { paddingHorizontal: spacing['2xl'], paddingVertical: spacing['2xl'] },
    xl: { paddingHorizontal: spacing['3xl'], paddingVertical: spacing['3xl'] },
  });
}
