/**
 * Layout — Row, Column, Centered, Surface
 */

import { View, type ViewProps, type ViewStyle, StyleSheet } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import type { SpacingKey } from '@/theme';

interface FlexProps extends ViewProps {
  children: React.ReactNode;
  gap?: SpacingKey;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  wrap?: boolean;
  flex?: number;
  style?: ViewStyle;
}

export function Row({ children, gap, align = 'center', justify, wrap, flex, style, ...props }: FlexProps) {
  const { spacing } = useTheme();
  return (
    <View
      style={[
        { flexDirection: 'row', alignItems: align, justifyContent: justify, flex, flexWrap: wrap ? 'wrap' : 'nowrap' },
        gap ? { gap: spacing[gap] } : undefined,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export function Column({ children, gap, align, justify, wrap, flex, style, ...props }: FlexProps) {
  const { spacing } = useTheme();
  return (
    <View
      style={[
        { flexDirection: 'column', alignItems: align, justifyContent: justify, flex, flexWrap: wrap ? 'wrap' : 'nowrap' },
        gap ? { gap: spacing[gap] } : undefined,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export function Centered({ children, style, ...props }: ViewProps) {
  return (
    <View style={[styles.centered, style]} {...props}>
      {children}
    </View>
  );
}

interface SurfaceProps extends ViewProps {
  children: React.ReactNode;
  elevated?: boolean;
  style?: ViewStyle;
}

export function Surface({ children, elevated = false, style, ...props }: SurfaceProps) {
  const { colors, radius, elevation } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: colors.surface,
          borderRadius: radius.large,
        },
        elevated ? elevation[2] : undefined,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
