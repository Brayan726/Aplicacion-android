/**
 * Training Screen
 * Training sessions management placeholder
 */

import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/shared/components/Screen';
import { Container } from '@/shared/components/Container';
import { EmptyState } from '@/shared/components/EmptyState';
import { colors, spacing } from '@/theme';
import { Calendar } from 'lucide-react-native';

export default function TrainingScreen() {
  return (
    <Screen>
      <Container size="md">
        <View style={styles.header}>
          <Text style={styles.title}>Entrenamientos</Text>
          <Text style={styles.subtitle}>Sesiones de práctica</Text>
        </View>

        <EmptyState
          icon={<Calendar size={48} color={colors.primary[400]} />}
          title="Sin entrenamientos"
          description="Creá sesiones de entrenamiento para tu equipo"
          actionLabel="Nuevo entrenamiento"
          onAction={() => {}}
        />
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing[4],
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.neutral[900],
  },
  subtitle: {
    fontSize: 16,
    color: colors.neutral[500],
    marginTop: spacing[1],
  },
});
