/**
 * Text Component (Typography Atom)
 * Applies design system typography tokens.
 */

import { Text as RNText, type TextProps as RNTextProps, type TextStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import type { TypographyCategory, TypographySize } from '@/theme';
import type { AppThemeColors } from '@/theme';

type TextColor = keyof Pick<
  AppThemeColors,
  | 'textPrimary'
  | 'textSecondary'
  | 'textTertiary'
  | 'textDisabled'
  | 'textInverse'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
>;

interface TextProps extends RNTextProps {
  variant?: TypographyCategory;
  size?: TypographySize;
  color?: TextColor;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
}

export function Text({
  variant = 'body',
  size = 'md',
  color = 'textPrimary',
  weight,
  align,
  style,
  children,
  accessibilityRole,
  ...props
}: TextProps) {
  const { colors, typography } = useTheme();
  const token = typography[variant][size];

  const fontWeight = weight ? typography.fontWeight[weight] : token.fontWeight;

  return (
    <RNText
      accessibilityRole={accessibilityRole}
      style={[
        {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          letterSpacing: token.letterSpacing,
          fontWeight,
          color: colors[color],
          textAlign: align,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

export type { TextProps, TextColor };
