/**
 * BottomSheet Organism (structure only)
 */

import { useMemo } from 'react';
import {
  View,
  Modal as RNModal,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import type { AppThemeColors, SpacingToken, RadiusToken, ElevationToken } from '@/theme';

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  accessibilityLabel?: string;
}

export function BottomSheet({
  visible,
  onClose,
  title,
  children,
  accessibilityLabel,
}: BottomSheetProps) {
  const { colors, spacing, radius, elevation, zIndex } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(
    () => createStyles(colors, spacing, radius, elevation),
    [colors, spacing, radius, elevation]
  );

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      accessibilityViewIsModal
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay, { zIndex: zIndex.modalBackdrop }]}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.sheet,
                { paddingBottom: insets.bottom + spacing.lg, zIndex: zIndex.modal },
              ]}
              accessibilityLabel={accessibilityLabel ?? title}
            >
              <View style={styles.handle} accessibilityElementsHidden />
              {title && (
                <Text variant="title" size="sm" color="textPrimary" style={styles.title}>
                  {title}
                </Text>
              )}
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
}

function createStyles(
  colors: AppThemeColors,
  spacing: SpacingToken,
  radius: RadiusToken,
  elevation: ElevationToken
) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors.backdrop,
      justifyContent: 'flex-end',
    },
    sheet: {
      backgroundColor: colors.surface,
      borderTopLeftRadius: radius['2xl'],
      borderTopRightRadius: radius['2xl'],
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      ...elevation[5],
    },
    handle: {
      width: 36,
      height: 4,
      backgroundColor: colors.divider,
      borderRadius: radius.full,
      alignSelf: 'center',
      marginBottom: spacing.lg,
    },
    title: {
      marginBottom: spacing.lg,
    },
  });
}
