/**
 * DTO Types
 * Data Transfer Objects for API and forms
 */

import type { Athlete, TrainingSession, AttendanceRecord, PerformanceMetric, Competition } from '../entities';

// Create DTOs
export interface CreateAthleteDTO extends Partial<Omit<Athlete, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface CreateTrainingDTO extends Partial<Omit<TrainingSession, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface CreateAttendanceDTO extends Partial<Omit<AttendanceRecord, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface CreatePerformanceDTO extends Partial<Omit<PerformanceMetric, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface CreateCompetitionDTO extends Partial<Omit<Competition, 'id' | 'createdAt' | 'updatedAt'>> {}

// Update DTOs
export interface UpdateAthleteDTO extends Partial<Omit<Athlete, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface UpdateTrainingDTO extends Partial<Omit<TrainingSession, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface UpdateAttendanceDTO extends Partial<Omit<AttendanceRecord, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface UpdatePerformanceDTO extends Partial<Omit<PerformanceMetric, 'id' | 'createdAt' | 'updatedAt'>> {}
export interface UpdateCompetitionDTO extends Partial<Omit<Competition, 'id' | 'createdAt' | 'updatedAt'>> {}

// Filter DTOs
export interface AthleteFilterDTO {
  search?: string;
  isActive?: boolean;
  position?: string;
}
export type TrainingFilterDTO = {
  startDate?: string;
  endDate?: string;
  type?: TrainingSession['type'];
};
export type AttendanceFilterDTO = {
  trainingId?: string;
  athleteId?: string;
  status?: AttendanceRecord['status'];
};
export type PerformanceFilterDTO = {
  athleteId?: string;
  metricName?: string;
  startDate?: string;
  endDate?: string;
};
export interface CompetitionFilterDTO {
  type?: Competition['type'];
  year?: number;
}

// Pagination DTOs
export interface PaginatedRequestDTO {
  page?: number;
  limit?: number;
}

export interface PaginatedResponseDTO<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
