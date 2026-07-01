/**
 * Spacing Tokens
 * 8px base scale — never use raw numbers in components.
 */

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
  '7xl': 80,
  '8xl': 96,

  /** @deprecated Use semantic keys (xs, sm, md, lg, etc.) */
  0: 0,
  /** @deprecated Use semantic keys */
  px: 1,
  /** @deprecated Use xxs */
  0.5: 2,
  /** @deprecated Use xs */
  1: 4,
  /** @deprecated Use semantic keys */
  1.5: 6,
  /** @deprecated Use sm */
  2: 8,
  /** @deprecated Use semantic keys */
  2.5: 10,
  /** @deprecated Use md */
  3: 12,
  /** @deprecated Use semantic keys */
  3.5: 14,
  /** @deprecated Use lg */
  4: 16,
  /** @deprecated Use xl */
  5: 20,
  /** @deprecated Use 2xl */
  6: 24,
  /** @deprecated Use semantic keys */
  7: 28,
  /** @deprecated Use 3xl */
  8: 32,
  /** @deprecated Use semantic keys */
  9: 36,
  /** @deprecated Use 4xl */
  10: 40,
  /** @deprecated Use semantic keys */
  11: 44,
  /** @deprecated Use 5xl */
  12: 48,
  /** @deprecated Use semantic keys */
  14: 56,
  /** @deprecated Use 6xl */
  16: 64,
  /** @deprecated Use 7xl */
  20: 80,
  /** @deprecated Use 8xl */
  24: 96,
} as const;

export type SpacingToken = typeof spacing;
export type SpacingKey = keyof SpacingToken;
