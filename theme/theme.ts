/**
 * Theme Configuration
 * Unified theme types and token aggregation.
 */

import {
  spacing,
  radius,
  typography,
  elevation,
  opacity,
  animation,
  zIndex,
  breakpoints,
  containerMaxWidth,
  semanticColorsLight,
  semanticColorsDark,
  palette,
  type SemanticColors,
} from './tokens';

export const designTokens = {
  spacing,
  radius,
  typography,
  elevation,
  opacity,
  animation,
  zIndex,
  breakpoints,
  containerMaxWidth,
} as const;

export type DesignTokens = typeof designTokens;
export type { SemanticColors };

export interface AppThemeColors extends SemanticColors {
  elevation: {
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

export interface AppTheme {
  colors: AppThemeColors;
  roundness: number;
  tokens: DesignTokens;
  isDark: boolean;
}

export function createElevationLevels(isDark: boolean) {
  const semantic = isDark ? semanticColorsDark : semanticColorsLight;
  return {
    level0: semantic.background,
    level1: semantic.surface,
    level2: semantic.surfaceVariant,
    level3: semantic.cardElevated,
    level4: semantic.border,
    level5: semantic.borderDark,
  };
}

export { palette, semanticColorsLight, semanticColorsDark };
