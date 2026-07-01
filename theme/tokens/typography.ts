/**
 * Typography Tokens
 * Material 3 type scale with custom font support.
 */

import type { TextStyle } from 'react-native';

export const fontFamily = {
  regular: 'Inter',
  medium: 'Inter-Medium',
  semibold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
  mono: 'JetBrains Mono',
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

type TypographyVariant = {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: TextStyle['fontWeight'];
};

const createVariant = (
  fontSize: number,
  lineHeight: number,
  letterSpacing: number,
  weight: TextStyle['fontWeight'] = fontWeight.regular
): TypographyVariant => ({
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight: weight,
});

export const typography = {
  fontFamily,
  fontWeight,

  display: {
    lg: createVariant(57, 64, -0.25, fontWeight.regular),
    md: createVariant(45, 52, 0, fontWeight.regular),
    sm: createVariant(36, 44, 0, fontWeight.regular),
  },

  headline: {
    lg: createVariant(32, 40, 0, fontWeight.semibold),
    md: createVariant(28, 36, 0, fontWeight.semibold),
    sm: createVariant(24, 32, 0, fontWeight.semibold),
  },

  title: {
    lg: createVariant(22, 28, 0, fontWeight.semibold),
    md: createVariant(18, 24, 0.15, fontWeight.semibold),
    sm: createVariant(16, 22, 0.1, fontWeight.medium),
  },

  body: {
    lg: createVariant(18, 28, 0.15, fontWeight.regular),
    md: createVariant(16, 24, 0.25, fontWeight.regular),
    sm: createVariant(14, 20, 0.25, fontWeight.regular),
  },

  label: {
    lg: createVariant(14, 20, 0.1, fontWeight.medium),
    md: createVariant(12, 16, 0.5, fontWeight.medium),
    sm: createVariant(11, 16, 0.5, fontWeight.medium),
  },

  caption: {
    lg: createVariant(12, 16, 0.4, fontWeight.regular),
    md: createVariant(11, 16, 0.4, fontWeight.regular),
    sm: createVariant(10, 14, 0.4, fontWeight.regular),
  },
} as const;

export type TypographyToken = typeof typography;
export type TypographyCategory = keyof Pick<
  TypographyToken,
  'display' | 'headline' | 'title' | 'body' | 'label' | 'caption'
>;
export type TypographySize = 'lg' | 'md' | 'sm';
