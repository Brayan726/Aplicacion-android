/**
 * Forgot Password Screen
 * Password recovery placeholder
 */

import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/shared/components/Screen';
import { Container } from '@/shared/components/Container';
import { colors, spacing } from '@/theme';

export default function ForgotPasswordScreen() {
  return (
    <Screen scrollable keyboardAvoiding>
      <Container size="lg" style={styles.container}>
        <Text style={styles.title}>Recuperar Contraseña</Text>
        <Text style={styles.subtitle}>Te enviaremos un email para restablecer tu contraseña</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Pendiente de implementación</Text>
        </View>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.neutral[900],
    marginBottom: spacing[2],
  },
  subtitle: {
    fontSize: 16,
    color: colors.neutral[500],
    marginBottom: spacing[8],
  },
  placeholder: {
    padding: spacing[6],
    backgroundColor: colors.neutral[100],
    borderRadius: 16,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: colors.neutral[400],
  },
});
