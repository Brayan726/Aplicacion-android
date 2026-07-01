/**
 * Avatar Component
 */

import { useMemo } from 'react';
import { View, Image, StyleSheet, type ImageStyle } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import type { AppThemeColors } from '@/theme';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeDimensions: Record<AvatarSize, number> = {
  xs: 32,
  sm: 40,
  md: 48,
  lg: 64,
  xl: 96,
};

const textSizeMap: Record<AvatarSize, 'sm' | 'md' | 'lg'> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'lg',
};

interface AvatarProps {
  source?: string | null;
  name?: string;
  size?: AvatarSize;
  accessibilityLabel?: string;
}

export function Avatar({ source, name, size = 'md', accessibilityLabel }: AvatarProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const dimension = sizeDimensions[size];

  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase();
  };

  const label = accessibilityLabel ?? (name ? `Avatar de ${name}` : 'Avatar');

  if (source) {
    const imageStyle: ImageStyle = {
      width: dimension,
      height: dimension,
      borderRadius: dimension / 2,
      backgroundColor: colors.surfaceVariant,
    };
    return (
      <Image
        source={{ uri: source }}
        style={imageStyle}
        accessibilityLabel={label}
        accessibilityRole="image"
      />
    );
  }

  return (
    <View
      style={[styles.placeholder, { width: dimension, height: dimension, borderRadius: dimension / 2 }]}
      accessibilityLabel={label}
      accessibilityRole="image"
    >
      <Text variant="label" size={textSizeMap[size]} color="primary">
        {name ? getInitials(name) : '?'}
      </Text>
    </View>
  );
}

function createStyles(colors: AppThemeColors) {
  return StyleSheet.create({
    placeholder: {
      backgroundColor: colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
