/**
 * Design System — Main Export
 * Centralized design tokens following Material 3 principles.
 */

export {
  palette,
  semanticColorsLight,
  semanticColorsDark,
  spacing,
  radius,
  typography,
  fontFamily,
  fontWeight,
  elevation,
  opacity,
  animation,
  zIndex,
  breakpoints,
  containerMaxWidth,
  type SemanticColors,
  type SpacingToken,
  type SpacingKey,
  type RadiusToken,
  type TypographyToken,
  type TypographyCategory,
  type TypographySize,
  type ElevationToken,
  type ElevationLevelKey,
  type OpacityToken,
  type AnimationToken,
  type ZIndexToken,
  type BreakpointKey,
} from './tokens';

export {
  designTokens,
  createElevationLevels,
  type AppTheme,
  type AppThemeColors,
  type DesignTokens,
} from './theme';

export { lightTheme } from './light';
export { darkTheme } from './dark';
export type { AppDarkTheme } from './dark';

/** @deprecated Use semantic colors via useTheme() instead of raw palette */
export { palette as colors } from './tokens/colors';

/** @deprecated Use radius from tokens */
export { radius as borderRadius } from './tokens/radius';

/** @deprecated Use elevation from tokens */
export { elevation as shadows } from './tokens/elevation';

/** @deprecated Use animation from tokens */
export { animation as animations } from './tokens/animation';

export type ColorToken = typeof import('./tokens/colors').palette;
export type ShadowToken = typeof import('./tokens/elevation').elevation;
export type BorderRadiusToken = typeof import('./tokens/radius').radius;
export type AnimationToken = typeof import('./tokens/animation').animation;
