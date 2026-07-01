/**
 * SearchBar Molecule
 */

import { useMemo } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';
import { Icon } from '@/shared/icons';
import type { AppThemeColors, SpacingToken, RadiusToken } from '@/theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
  loading?: boolean;
  accessibilityLabel?: string;
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Buscar...',
  onClear,
  loading = false,
  accessibilityLabel = 'Barra de búsqueda',
}: SearchBarProps) {
  const { colors, spacing, radius } = useTheme();
  const styles = useMemo(() => createStyles(colors, spacing, radius), [colors, spacing, radius]);

  return (
    <View style={styles.container} accessibilityRole="search">
      <Icon name="search" size="sm" color={colors.textSecondary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        style={styles.input}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="search"
        returnKeyType="search"
      />
      {value.length > 0 && onClear && (
        <TouchableOpacity
          onPress={onClear}
          accessibilityRole="button"
          accessibilityLabel="Limpiar búsqueda"
        >
          <Icon name="close" size="sm" color={colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

function createStyles(colors: AppThemeColors, spacing: SpacingToken, radius: RadiusToken) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceVariant,
      borderRadius: radius.large,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      gap: spacing.sm,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colors.textPrimary,
      padding: 0,
    },
  });
}
