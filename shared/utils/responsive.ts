/**
 * Responsive Utilities
 */

import { useWindowDimensions } from 'react-native';
import { breakpoints, containerMaxWidth, type BreakpointKey } from '@/theme';

export function getBreakpoint(width: number): BreakpointKey {
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
}

export function isTablet(width: number): boolean {
  return width >= breakpoints.md;
}

export function isLargeScreen(width: number): boolean {
  return width >= breakpoints.lg;
}

export function getContainerMaxWidth(width: number): number | string {
  const bp = getBreakpoint(width);
  if (bp === 'xl') return containerMaxWidth.xl;
  if (bp === 'lg') return containerMaxWidth.lg;
  if (bp === 'md') return containerMaxWidth.md;
  if (bp === 'sm') return containerMaxWidth.sm;
  return containerMaxWidth.full;
}

export function useResponsive() {
  const { width, height } = useWindowDimensions();
  const breakpoint = getBreakpoint(width);

  return {
    width,
    height,
    breakpoint,
    isTablet: isTablet(width),
    isLargeScreen: isLargeScreen(width),
    containerMaxWidth: getContainerMaxWidth(width),
  };
}
