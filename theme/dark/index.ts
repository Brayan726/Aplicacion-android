/**
 * Dark Theme Configuration
 * Material 3 + semantic design tokens
 */

import { MD3DarkTheme } from 'react-native-paper';
import {
  semanticColorsDark,
  spacing,
  radius,
  typography,
  elevation,
  opacity,
  animation,
  zIndex,
  breakpoints,
  containerMaxWidth,
} from '../tokens';
import { createElevationLevels, type AppTheme } from '../theme';

const semantic = semanticColorsDark;

export const darkTheme = {
  ...MD3DarkTheme,
  isDark: true,
  roundness: radius.large,
  tokens: {
    spacing,
    radius,
    typography,
    elevation,
    opacity,
    animation,
    zIndex,
    breakpoints,
    containerMaxWidth,
  },
  colors: {
    ...MD3DarkTheme.colors,
    primary: semantic.primary,
    primaryContainer: semantic.primaryContainer,
    onPrimary: semantic.onPrimary,
    onPrimaryContainer: semantic.onPrimaryContainer,
    secondary: semantic.secondary,
    secondaryContainer: semantic.secondaryContainer,
    onSecondary: semantic.onSecondary,
    onSecondaryContainer: semantic.onSecondaryContainer,
    error: semantic.error,
    errorContainer: semantic.errorContainer,
    onError: semantic.onError,
    onErrorContainer: semantic.onErrorContainer,
    background: semantic.background,
    onBackground: semantic.onBackground,
    surface: semantic.surface,
    surfaceVariant: semantic.surfaceVariant,
    onSurface: semantic.onSurface,
    onSurfaceVariant: semantic.onSurfaceVariant,
    outline: semantic.outline,
    outlineVariant: semantic.outlineVariant,
    elevation: createElevationLevels(true),
    success: semantic.success,
    successContainer: semantic.successContainer,
    onSuccess: semantic.onSuccess,
    onSuccessContainer: semantic.onSuccessContainer,
    warning: semantic.warning,
    warningContainer: semantic.warningContainer,
    onWarning: semantic.onWarning,
    onWarningContainer: semantic.onWarningContainer,
    info: semantic.info,
    infoContainer: semantic.infoContainer,
    onInfo: semantic.onInfo,
    onInfoContainer: semantic.onInfoContainer,
    textPrimary: semantic.textPrimary,
    textSecondary: semantic.textSecondary,
    textTertiary: semantic.textTertiary,
    textDisabled: semantic.textDisabled,
    textInverse: semantic.textInverse,
    border: semantic.border,
    borderLight: semantic.borderLight,
    borderDark: semantic.borderDark,
    divider: semantic.divider,
    disabled: semantic.disabled,
    disabledBackground: semantic.disabledBackground,
    placeholder: semantic.placeholder,
    overlay: semantic.overlay,
    scrim: semantic.scrim,
    backdrop: semantic.backdrop,
    card: semantic.card,
    cardElevated: semantic.cardElevated,
    statusBar: semantic.statusBar,
  },
} satisfies AppTheme;

export type AppDarkTheme = AppTheme;
