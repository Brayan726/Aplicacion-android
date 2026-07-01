/**
 * Spacer Atom
 * Consistent spacing between elements.
 */

import { View } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import type { SpacingKey } from '@/theme';

interface SpacerProps {
  size?: SpacingKey;
  horizontal?: boolean;
}

export function Spacer({ size = 'lg', horizontal = false }: SpacerProps) {
  const { spacing } = useTheme();
  const value = spacing[size];

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={horizontal ? { width: value } : { height: value }}
    />
  );
}
