/**
 * Application Constants
 * Centralized constants used throughout the app
 */

// App Information
export const APP_NAME = 'Club Deportivo Linces';
export const APP_VERSION = '1.0.0';
export const APP_SCHEMA = 'lincesclub';

// Database
export const DATABASE_NAME = 'linces_club.db';
export const DATABASE_VERSION = 1;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH: 'linces-auth-storage',
  THEME: 'linces-theme-storage',
  SETTINGS: 'linces-settings-storage',
  ONBOARDING: 'linces-onboarding-completed',
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  API: 'YYYY-MM-DD',
  TIME: 'HH:mm',
  DATETIME: 'DD/MM/YYYY HH:mm',
} as const;

// Roles
export const USER_ROLES = {
  COACH: 'coach',
  ASSISTANT: 'assistant',
  ADMIN: 'admin',
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

// Genders
export const GENDERS = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
} as const;

export type Gender = (typeof GENDERS)[keyof typeof GENDERS];

// Training Types
export const TRAINING_TYPES = {
  INDIVIDUAL: 'individual',
  GROUP: 'group',
  TEAM: 'team',
  FITNESS: 'fitness',
  TACTICAL: 'tactical',
  TECHNICAL: 'technical',
} as const;

export type TrainingType = (typeof TRAINING_TYPES)[keyof typeof TRAINING_TYPES];

// Attendance Status
export const ATTENDANCE_STATUS = {
  PRESENT: 'present',
  ABSENT: 'absent',
  LATE: 'late',
  EXCUSED: 'excused',
} as const;

export type AttendanceStatus = (typeof ATTENDANCE_STATUS)[keyof typeof ATTENDANCE_STATUS];

// Competition Types
export const COMPETITION_TYPES = {
  LEAGUE: 'league',
  TOURNAMENT: 'tournament',
  FRIENDLY: 'friendly',
  CHAMPIONSHIP: 'championship',
} as const;

export type CompetitionType = (typeof COMPETITION_TYPES)[keyof typeof COMPETITION_TYPES];

// Positions (for team sports)
export const POSITIONS = {
  GOALKEEPER: 'goalkeeper',
  DEFENDER: 'defender',
  MIDFIELDER: 'midfielder',
  FORWARD: 'forward',
} as const;

export type Position = (typeof POSITIONS)[keyof typeof POSITIONS];
