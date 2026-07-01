/**
 * Login Screen
 * Authentication screen placeholder
 */

import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/shared/components/Screen';
import { Container } from '@/shared/components/Container';
import { colors, spacing } from '@/theme';

export default function LoginScreen() {
  return (
    <Screen scrollable keyboardAvoiding>
      <Container size="lg" style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoPlaceholder} />
          <Text style={styles.title}>Club Deportivo Linces</Text>
          <Text style={styles.subtitle}>Gestioná tu equipo profesionalmente</Text>
        </View>

        <View style={styles.formPlaceholder}>
          <Text style={styles.placeholderText}>
            Formulario de login
          </Text>
          <Text style={styles.noteText}>
            Pendiente de implementación
          </Text>
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
  header: {
    alignItems: 'center',
    marginBottom: spacing[8],
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary[600],
    marginBottom: spacing[4],
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
    textAlign: 'center',
  },
  formPlaceholder: {
    padding: spacing[6],
    backgroundColor: colors.neutral[100],
    borderRadius: 16,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.neutral[600],
    marginBottom: spacing[2],
  },
  noteText: {
    fontSize: 14,
    color: colors.neutral[400],
  },
});
