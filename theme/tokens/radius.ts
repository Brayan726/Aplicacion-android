/**
 * Border Radius Tokens
 */

export const radius = {
  none: 0,
  small: 4,
  medium: 8,
  large: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
} as const;

export type RadiusToken = typeof radius;
export type RadiusKey = keyof RadiusToken;
