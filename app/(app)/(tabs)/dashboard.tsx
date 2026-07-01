/**
 * Dashboard Screen
 * Main dashboard/home screen placeholder
 */

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Screen } from '@/shared/components/Screen';
import { Container } from '@/shared/components/Container';
import { Card } from '@/shared/components/Card';
import { colors, spacing } from '@/theme';

export default function DashboardScreen() {
  const features = [
    { title: 'Deportistas', subtitle: 'Gestión de jugadores', route: '/athletes' },
    { title: 'Entrenamientos', subtitle: 'Sesiones de práctica', route: '/training' },
    { title: 'Asistencia', subtitle: 'Control de presentismo', route: '/attendance' },
    { title: 'Rendimiento', subtitle: 'Métricas y estadísticas', route: '/performance' },
    { title: 'Competencias', subtitle: 'Torneos y partidos', route: '/competitions' },
    { title: 'Reportes', subtitle: 'Análisis y exportación', route: '/reports' },
  ];

  return (
    <Screen>
      <Container size="md">
        <View style={styles.header}>
          <View style={styles.logoPlaceholder} />
          <View>
            <Text style={styles.greeting}>Bienvenido, Entrenador</Text>
            <Text style={styles.subtitle}>Club Deportivo Linces</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <Card variant="filled" padding="md" style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Deportistas</Text>
          </Card>
          <Card variant="filled" padding="md" style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Entrenamientos</Text>
          </Card>
          <Card variant="filled" padding="md" style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Competencias</Text>
          </Card>
        </View>

        <Text style={styles.sectionTitle}>Accesos Rápidos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuresScroll}>
          {features.map((feature, index) => (
            <Card key={index} variant="outlined" padding="md" style={styles.featureCard}>
              <View style={styles.featurePlaceholder} />
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureSubtitle}>{feature.subtitle}</Text>
            </Card>
          ))}
        </ScrollView>

        <Card variant="outlined" padding="lg" style={styles.noticeCard}>
          <Text style={styles.noticeTitle}>Arquitectura Establecida</Text>
          <Text style={styles.noticeText}>
            La base del proyecto está lista. Los módulos de funcionalidad se implementarán en fases posteriores.
          </Text>
        </Card>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[6],
    gap: spacing[3],
  },
  logoPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary[600],
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.neutral[900],
  },
  subtitle: {
    fontSize: 14,
    color: colors.neutral[500],
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary[600],
  },
  statLabel: {
    fontSize: 12,
    color: colors.neutral[500],
    marginTop: spacing[1],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.neutral[800],
    marginBottom: spacing[3],
  },
  featuresScroll: {
    marginHorizontal: -spacing[4],
    marginBottom: spacing[6],
  },
  featureCard: {
    width: 140,
    marginHorizontal: spacing[1],
    alignItems: 'center',
  },
  featurePlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.primary[100],
    marginBottom: spacing[2],
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.neutral[800],
    textAlign: 'center',
  },
  featureSubtitle: {
    fontSize: 12,
    color: colors.neutral[500],
    textAlign: 'center',
    marginTop: spacing[0.5],
  },
  noticeCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary[600],
  },
  noticeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.neutral[800],
    marginBottom: spacing[2],
  },
  noticeText: {
    fontSize: 14,
    color: colors.neutral[600],
    lineHeight: 20,
  },
});
