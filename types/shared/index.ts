/**
 * Shared Types
 * Common utility types
 */

// Async State
export interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

// Form State
export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
}

// List Item
export interface ListItem<T> {
  id: string;
  data: T;
}

// Select Option
export interface SelectOption {
  label: string;
  value: string | number;
}

// Date Range
export interface DateRange {
  startDate: string;
  endDate: string;
}

// Time Slot
export interface TimeSlot {
  startTime: string;
  endTime: string;
}

// Coordinates
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// Filter
export interface Filter {
  key: string;
  value: string | number | boolean;
  operator?: 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'contains' | 'startsWith' | 'endsWith';
}

// Sort
export interface Sort {
  key: string;
  direction: 'asc' | 'desc';
}
