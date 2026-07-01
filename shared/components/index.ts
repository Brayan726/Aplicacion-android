/**
 * Design System — Component Barrel Export
 * Organized following Atomic Design principles.
 */

// ─── Atoms ───────────────────────────────────────────────
export { Text, type TextProps, type TextColor } from './atoms/Text';
export { Spacer } from './atoms/Spacer';
export { TextArea } from './atoms/TextArea';
export { Badge, type BadgeVariant, type BadgeSize } from './atoms/Badge';
export { Chip } from './atoms/Chip';
export { Tag } from './atoms/Tag';
export { IconButton, type IconButtonVariant, type IconButtonSize } from './atoms/IconButton';
export { LinearProgress, CircularProgress, Progress } from './atoms/Progress';

// ─── Molecules ───────────────────────────────────────────
export { SearchBar } from './molecules/SearchBar';
export { StatCard } from './molecules/StatCard';
export { ListItem, type ListItemProps } from './molecules/ListItem';
export { Alert, type AlertVariant } from './molecules/Alert';
export { Toast, type ToastVariant } from './molecules/Toast';
export { FloatingActionButton, type FABSize } from './molecules/FloatingActionButton';

// ─── Organisms ───────────────────────────────────────────
export { Section } from './organisms/Section';
export { BottomSheet } from './organisms/BottomSheet';
export {
  EmptyState,
  LoadingState,
  ErrorState,
  NoConnectionState,
  PermissionDeniedState,
  type LoadingSize,
} from './organisms/StateViews/StateViews';
export {
  AthleteRow,
  SessionRow,
  CompetitionRow,
  type Athlete,
  type Session,
  type Competition,
} from './organisms/ListRows';

// ─── Layout ──────────────────────────────────────────────
export {
  SafeAreaScreen,
  ScrollableScreen,
  KeyboardScreen,
  Screen,
} from './Screen';
export { Row, Column, Centered, Surface } from './layout/Flex';

// ─── Core Components (maintained paths) ──────────────────
export { Button, type ButtonVariant, type ButtonSize } from './Button';
export { Input, type InputSize } from './Input';
export { Card, type CardVariant, type CardPadding } from './Card';
export { Avatar, type AvatarSize } from './Avatar';
export { Divider, type DividerOrientation } from './Divider';
export { Header } from './Header';
export { Container, type ContainerSize } from './Container';
export { Modal, type ModalSize } from './Modal';

// ─── Backward Compatibility ──────────────────────────────
export { LoadingState as Loading } from './organisms/StateViews/StateViews';
