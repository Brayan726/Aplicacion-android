/**
 * More Screen
 * Additional navigation and settings placeholder
 */

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Screen } from '@/shared/components/Screen';
import { Container } from '@/shared/components/Container';
import { Card } from '@/shared/components/Card';
import { colors, spacing } from '@/theme';
import {
  ClipboardCheck,
  TrendingUp,
  Trophy,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react-native';

const menuItems = [
  { icon: ClipboardCheck, title: 'Asistencia', subtitle: 'Control de presentismo', route: '/attendance' },
  { icon: TrendingUp, title: 'Rendimiento', subtitle: 'Métricas y estadísticas', route: '/performance' },
  { icon: Trophy, title: 'Competencias', subtitle: 'Torneos y partidos', route: '/competitions' },
  { icon: FileText, title: 'Reportes', subtitle: 'Análisis y exportación', route: '/reports' },
  { icon: Settings, title: 'Configuración', subtitle: 'Ajustes de la app', route: '/settings' },
];

export default function MoreScreen() {
  return (
    <Screen>
      <Container size="md">
        <View style={styles.header}>
          <Text style={styles.title}>Más opciones</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} variant="outlined" padding="md" style={styles.menuCard}>
                <Pressable style={styles.menuItem}>
                  <View style={styles.iconContainer}>
                    <Icon size={24} color={colors.primary[600]} />
                  </View>
                  <View style={styles.menuText}>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                  </View>
                </Pressable>
              </Card>
            );
          })}

          <Card variant="outlined" padding="md" style={[styles.menuCard, styles.logoutCard]}>
            <Pressable style={styles.menuItem}>
              <View style={[styles.iconContainer, styles.logoutIcon]}>
                <LogOut size={24} color={colors.error[500]} />
              </View>
              <View style={styles.menuText}>
                <Text style={[styles.menuTitle, styles.logoutText]}>Cerrar sesión</Text>
              </View>
            </Pressable>
          </Card>
        </View>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing[6],
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.neutral[900],
  },
  menuContainer: {
    gap: spacing[3],
  },
  menuCard: {
    borderWidth: 0,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    marginLeft: spacing[3],
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.neutral[800],
  },
  menuSubtitle: {
    fontSize: 14,
    color: colors.neutral[500],
    marginTop: spacing[0.5],
  },
  logoutCard: {
    marginTop: spacing[4],
  },
  logoutIcon: {
    backgroundColor: colors.error[50],
  },
  logoutText: {
    color: colors.error[600],
  },
});
