/**
 * Divider Component
 */

import { View, type ViewStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import type { SpacingKey } from '@/theme';

export type DividerOrientation = 'horizontal' | 'vertical';

interface DividerProps {
  orientation?: DividerOrientation;
  color?: string;
  thickness?: number;
  spacing?: SpacingKey;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

export function Divider({
  orientation = 'horizontal',
  color,
  thickness = 1,
  spacing: spacingKey = 'lg',
  style,
  accessibilityLabel = 'Separador',
}: DividerProps) {
  const { colors, spacing } = useTheme();
  const dividerColor = color ?? colors.divider;
  const margin = spacing[spacingKey];

  const dividerStyle: ViewStyle = {
    backgroundColor: dividerColor,
  };

  if (orientation === 'horizontal') {
    dividerStyle.height = thickness;
    dividerStyle.marginVertical = margin;
    dividerStyle.width = '100%';
  } else {
    dividerStyle.width = thickness;
    dividerStyle.marginHorizontal = margin;
    dividerStyle.alignSelf = 'stretch';
  }

  return (
    <View
      style={[dividerStyle, style]}
      accessibilityRole="none"
      accessibilityLabel={accessibilityLabel}
    />
  );
}
