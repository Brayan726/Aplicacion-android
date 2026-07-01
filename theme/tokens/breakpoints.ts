/**
 * Breakpoint Tokens
 * Responsive design thresholds for tablets and large screens.
 */

export const breakpoints = {
  xs: 0,
  sm: 360,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export type BreakpointToken = typeof breakpoints;
export type BreakpointKey = keyof BreakpointToken;

export const containerMaxWidth = {
  sm: 480,
  md: 640,
  lg: 768,
  xl: 1024,
  full: '100%',
} as const;

export type ContainerMaxWidth = typeof containerMaxWidth;
