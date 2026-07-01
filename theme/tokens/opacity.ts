/**
 * Opacity Tokens
 */

export const opacity = {
  transparent: 0,
  disabled: 0.38,
  hover: 0.08,
  focus: 0.12,
  pressed: 0.12,
  dragged: 0.16,
  medium: 0.6,
  high: 0.87,
  overlay: 0.5,
  full: 1,
} as const;

export type OpacityToken = typeof opacity;
