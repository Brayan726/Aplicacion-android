/**
 * Athletes Screen
 * Athletes management placeholder
 */

import { View, Text, StyleSheet } from 'react-native';
import { Screen } from '@/shared/components/Screen';
import { Container } from '@/shared/components/Container';
import { EmptyState } from '@/shared/components/EmptyState';
import { colors, spacing } from '@/theme';
import { Users } from 'lucide-react-native';

export default function AthletesScreen() {
  return (
    <Screen>
      <Container size="md">
        <View style={styles.header}>
          <Text style={styles.title}>Deportistas</Text>
          <Text style={styles.subtitle}>Gestión de jugadores del club</Text>
        </View>

        <EmptyState
          icon={<Users size={48} color={colors.primary[400]} />}
          title="Sin deportistas"
          description="Agregá deportistas al club para comenzar a gestionarlos"
          actionLabel="Agregar deportista"
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
