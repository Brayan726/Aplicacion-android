/**
 * Entity Types
 * Core domain entity interfaces
 */

// Athlete
export interface Athlete {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: 'male' | 'female' | 'other';
  email?: string;
  phone?: string;
  position?: string;
  jerseyNumber?: number;
  isActive: boolean;
  avatar?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Training Session
export interface TrainingSession {
  id: string;
  title: string;
  description?: string;
  date: string;
  startTime: string;
  endTime: string;
  type: 'individual' | 'group' | 'team';
  location?: string;
  coachId: string;
  athletes?: Athlete[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Attendance Record
export interface AttendanceRecord {
  id: string;
  trainingSessionId: string;
  athleteId: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Performance Metric
export interface PerformanceMetric {
  id: string;
  athleteId: string;
  name: string;
  value: number;
  unit: string;
  date: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Competition
export interface Competition {
  id: string;
  name: string;
  type: 'league' | 'tournament' | 'friendly' | 'championship';
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  results?: CompetitionResult[];
  createdAt: string;
  updatedAt: string;
}

// Competition Result
export interface CompetitionResult {
  id: string;
  competitionId: string;
  athleteId?: string;
  position?: number;
  score?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
