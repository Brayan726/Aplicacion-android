/**
 * Color Tokens
 * Internal palette used only for theme construction.
 * Components must consume semantic colors via useTheme().
 */

export const palette = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export const semanticColorsLight = {
  primary: palette.primary[600],
  primaryContainer: palette.primary[100],
  onPrimary: palette.white,
  onPrimaryContainer: palette.primary[900],

  secondary: palette.secondary[600],
  secondaryContainer: palette.secondary[100],
  onSecondary: palette.white,
  onSecondaryContainer: palette.secondary[900],

  surface: palette.white,
  surfaceVariant: palette.neutral[50],
  onSurface: palette.neutral[900],
  onSurfaceVariant: palette.neutral[600],

  background: palette.white,
  onBackground: palette.neutral[900],

  error: palette.error[500],
  errorContainer: palette.error[100],
  onError: palette.white,
  onErrorContainer: palette.error[900],

  success: palette.success[500],
  successContainer: palette.success[100],
  onSuccess: palette.white,
  onSuccessContainer: palette.success[900],

  warning: palette.warning[500],
  warningContainer: palette.warning[100],
  onWarning: palette.white,
  onWarningContainer: palette.warning[900],

  info: palette.info[500],
  infoContainer: palette.info[100],
  onInfo: palette.white,
  onInfoContainer: palette.info[900],

  textPrimary: palette.neutral[900],
  textSecondary: palette.neutral[600],
  textTertiary: palette.neutral[400],
  textDisabled: palette.neutral[300],
  textInverse: palette.white,

  border: palette.neutral[200],
  borderLight: palette.neutral[100],
  borderDark: palette.neutral[300],
  divider: palette.neutral[200],

  disabled: palette.neutral[300],
  disabledBackground: palette.neutral[100],
  placeholder: palette.neutral[400],

  overlay: 'rgba(0, 0, 0, 0.5)',
  scrim: 'rgba(0, 0, 0, 0.32)',
  backdrop: 'rgba(0, 0, 0, 0.4)',

  card: palette.white,
  cardElevated: palette.white,

  outline: palette.neutral[300],
  outlineVariant: palette.neutral[200],

  statusBar: 'dark' as const,
} as const;

export const semanticColorsDark = {
  primary: palette.primary[400],
  primaryContainer: palette.primary[900],
  onPrimary: palette.primary[950],
  onPrimaryContainer: palette.primary[100],

  secondary: palette.secondary[400],
  secondaryContainer: palette.secondary[900],
  onSecondary: palette.secondary[950],
  onSecondaryContainer: palette.secondary[100],

  surface: palette.neutral[900],
  surfaceVariant: palette.neutral[800],
  onSurface: palette.neutral[50],
  onSurfaceVariant: palette.neutral[300],

  background: palette.neutral[950],
  onBackground: palette.neutral[50],

  error: palette.error[400],
  errorContainer: palette.error[900],
  onError: palette.error[950],
  onErrorContainer: palette.error[100],

  success: palette.success[400],
  successContainer: palette.success[900],
  onSuccess: palette.success[950],
  onSuccessContainer: palette.success[100],

  warning: palette.warning[400],
  warningContainer: palette.warning[900],
  onWarning: palette.warning[950],
  onWarningContainer: palette.warning[100],

  info: palette.info[400],
  infoContainer: palette.info[900],
  onInfo: palette.info[950],
  onInfoContainer: palette.info[100],

  textPrimary: palette.neutral[50],
  textSecondary: palette.neutral[300],
  textTertiary: palette.neutral[500],
  textDisabled: palette.neutral[600],
  textInverse: palette.neutral[900],

  border: palette.neutral[800],
  borderLight: palette.neutral[900],
  borderDark: palette.neutral[700],
  divider: palette.neutral[800],

  disabled: palette.neutral[600],
  disabledBackground: palette.neutral[800],
  placeholder: palette.neutral[500],

  overlay: 'rgba(0, 0, 0, 0.7)',
  scrim: 'rgba(0, 0, 0, 0.8)',
  backdrop: 'rgba(0, 0, 0, 0.6)',

  card: palette.neutral[900],
  cardElevated: palette.neutral[800],

  outline: palette.neutral[700],
  outlineVariant: palette.neutral[800],

  statusBar: 'light' as const,
} as const;

export type SemanticColors = typeof semanticColorsLight;
export type Palette = typeof palette;
