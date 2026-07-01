/**
 * Modal Organism
 */

import { useMemo } from 'react';
import {
  View,
  Modal as RNModal,
  TouchableWithoutFeedback,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/shared/hooks/useTheme';
import { Text } from '@/shared/components/atoms/Text';
import { IconButton } from '@/shared/components/atoms/IconButton';
import type { AppThemeColors, SpacingToken, RadiusToken, ElevationToken } from '@/theme';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  showClose?: boolean;
  accessibilityLabel?: string;
}

const sizeRatios: Record<ModalSize, number> = {
  sm: 0.5,
  md: 0.75,
  lg: 0.85,
  xl: 0.95,
  full: 1,
};

export function Modal({
  visible,
  onClose,
  title,
  children,
  size = 'md',
  showClose = true,
  accessibilityLabel,
}: ModalProps) {
  const { colors, spacing, radius, elevation, zIndex } = useTheme();
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = useWindowDimensions();
  const styles = useMemo(
    () => createStyles(colors, spacing, radius, elevation),
    [colors, spacing, radius, elevation]
  );

  const modalWidth = size === 'full' ? screenWidth : screenWidth * sizeRatios[size];

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      accessibilityViewIsModal
    >
      <TouchableWithoutFeedback onPress={onClose} accessibilityRole="button" accessibilityLabel="Cerrar modal">
        <View style={[styles.overlay, { zIndex: zIndex.modalBackdrop }]}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.container,
                {
                  width: modalWidth,
                  maxWidth: screenWidth - spacing.lg * 2,
                  paddingBottom: insets.bottom + spacing.lg,
                  zIndex: zIndex.modal,
                },
                size === 'full' && styles.full,
              ]}
              accessibilityLabel={accessibilityLabel ?? title}
            >
              {(title || showClose) && (
                <View style={styles.header}>
                  {title && (
                    <Text variant="title" size="md" color="textPrimary" style={styles.title}>
                      {title}
                    </Text>
                  )}
                  {showClose && (
                    <IconButton
                      icon="close"
                      onPress={onClose}
                      accessibilityLabel="Cerrar"
                    />
                  )}
                </View>
              )}
              <View style={styles.content}>{children}</View>
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
      backgroundColor: colors.overlay,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: colors.surface,
      borderRadius: radius['2xl'],
      ...elevation[5],
    },
    full: {
      flex: 1,
      borderRadius: radius.none,
      maxWidth: '100%',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.divider,
    },
    title: { flex: 1 },
    content: { padding: spacing.lg },
  });
}
