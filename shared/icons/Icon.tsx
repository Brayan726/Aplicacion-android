/**
 * Icon Component
 * Centralized MaterialCommunityIcons wrapper.
 */

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icons, type IconName } from './iconRegistry';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const iconSizes: Record<IconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

interface IconProps {
  name: IconName;
  size?: IconSize | number;
  color?: string;
  accessibilityLabel?: string;
}

export function Icon({ name, size = 'md', color, accessibilityLabel }: IconProps) {
  const resolvedSize = typeof size === 'number' ? size : iconSizes[size];

  return (
    <MaterialCommunityIcons
      name={name}
      size={resolvedSize}
      color={color}
      accessibilityLabel={accessibilityLabel ?? name}
      accessibilityRole="image"
    />
  );
}

export { Icons, type IconName };
