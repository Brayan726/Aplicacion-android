/**
 * List Row Organisms — Mock data ready
 */

import { Avatar } from '@/shared/components/Avatar';
import { Badge } from '@/shared/components/atoms/Badge';
import { ListItem } from '@/shared/components/molecules/ListItem';
import { Text } from '@/shared/components/atoms/Text';
import { View } from 'react-native';
import { useTheme } from '@/shared/hooks/useTheme';

// Mock types for future entities
interface Athlete {
  id: string;
  name: string;
  sport?: string;
  avatarUrl?: string;
  status?: 'active' | 'inactive' | 'injured';
}

interface Session {
  id: string;
  title: string;
  date: string;
  time: string;
  athletesCount: number;
  status?: 'scheduled' | 'completed' | 'cancelled';
}

interface Competition {
  id: string;
  name: string;
  date: string;
  location: string;
  result?: string;
}

const athleteStatusLabels = {
  active: 'Activo',
  inactive: 'Inactivo',
  injured: 'Lesionado',
} as const;

const athleteStatusVariants = {
  active: 'success',
  inactive: 'neutral',
  injured: 'warning',
} as const;

const sessionStatusLabels = {
  scheduled: 'Programado',
  completed: 'Completado',
  cancelled: 'Cancelado',
} as const;

interface AthleteRowProps {
  athlete: Athlete;
  onPress?: () => void;
}

export function AthleteRow({ athlete, onPress }: AthleteRowProps) {
  const status = athlete.status ?? 'active';

  return (
    <ListItem
      title={athlete.name}
      subtitle={athlete.sport}
      left={<Avatar name={athlete.name} source={athlete.avatarUrl} size="md" />}
      right={
        <Badge
          label={athleteStatusLabels[status]}
          variant={athleteStatusVariants[status]}
          size="sm"
        />
      }
      showChevron={Boolean(onPress)}
      onPress={onPress}
      accessibilityLabel={`Deportista ${athlete.name}`}
      accessibilityHint="Ver detalle del deportista"
    />
  );
}

interface SessionRowProps {
  session: Session;
  onPress?: () => void;
}

export function SessionRow({ session, onPress }: SessionRowProps) {
  const status = session.status ?? 'scheduled';

  return (
    <ListItem
      title={session.title}
      subtitle={`${session.date} · ${session.time}`}
      description={`${session.athletesCount} deportistas`}
      right={
        <Badge label={sessionStatusLabels[status]} variant="primary" size="sm" />
      }
      showChevron={Boolean(onPress)}
      onPress={onPress}
      accessibilityLabel={`Sesión ${session.title}`}
      accessibilityHint="Ver detalle de la sesión"
    />
  );
}

interface CompetitionRowProps {
  competition: Competition;
  onPress?: () => void;
}

export function CompetitionRow({ competition, onPress }: CompetitionRowProps) {
  const { spacing } = useTheme();

  return (
    <ListItem
      title={competition.name}
      subtitle={competition.date}
      description={competition.location}
      right={
        competition.result ? (
          <View style={{ alignItems: 'flex-end', gap: spacing.xxs }}>
            <Text variant="label" size="md" color="primary">
              {competition.result}
            </Text>
          </View>
        ) : undefined
      }
      showChevron={Boolean(onPress)}
      onPress={onPress}
      accessibilityLabel={`Competición ${competition.name}`}
      accessibilityHint="Ver detalle de la competición"
    />
  );
}

export type { Athlete, Session, Competition };
