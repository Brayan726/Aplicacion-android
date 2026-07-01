/**
 * Screen Layout Components
 */

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/shared/hooks/useTheme';

interface BaseScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
}

function useScreenInsets(edges: BaseScreenProps['edges'] = ['top', 'bottom']) {
  const insets = useSafeAreaInsets();
  return {
    paddingTop: edges.includes('top') ? insets.top : 0,
    paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
    paddingLeft: edges.includes('left') ? insets.left : 0,
    paddingRight: edges.includes('right') ? insets.right : 0,
  };
}

export function SafeAreaScreen({ children, style, edges }: Omit<BaseScreenProps, 'contentContainerStyle'>) {
  const { colors } = useTheme();
  const padding = useScreenInsets(edges);

  return (
    <View style={[{ flex: 1, backgroundColor: colors.background }, padding, style]}>
      {children}
    </View>
  );
}

export function ScrollableScreen({
  children,
  style,
  contentContainerStyle,
  edges,
}: BaseScreenProps) {
  const { colors } = useTheme();
  const padding = useScreenInsets(edges);

  return (
    <View style={[{ flex: 1, backgroundColor: colors.background }, padding, style]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </View>
  );
}

export function KeyboardScreen({
  children,
  style,
  contentContainerStyle,
  edges,
  scrollable = false,
}: BaseScreenProps & { scrollable?: boolean }) {
  const { colors } = useTheme();
  const padding = useScreenInsets(edges);

  const inner = scrollable ? (
    <ScrollView
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.content, contentContainerStyle]}>{children}</View>
  );

  return (
    <KeyboardAvoidingView
      style={[{ flex: 1, backgroundColor: colors.background }, padding, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {inner}
    </KeyboardAvoidingView>
  );
}

/** @deprecated Use SafeAreaScreen, ScrollableScreen, or KeyboardScreen */
export function Screen({
  children,
  scrollable = false,
  keyboardAvoiding = false,
  style,
  contentContainerStyle,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}) {
  if (keyboardAvoiding) {
    return (
      <KeyboardScreen style={style} contentContainerStyle={contentContainerStyle} scrollable={scrollable}>
        {children}
      </KeyboardScreen>
    );
  }
  if (scrollable) {
    return (
      <ScrollableScreen style={style} contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollableScreen>
    );
  }
  return <SafeAreaScreen style={style}>{children}</SafeAreaScreen>;
}

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  content: { flex: 1 },
});
