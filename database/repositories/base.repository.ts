/**
 * Base Repository
 * Common database operations interface
 * Scaffolded for future implementation
 */

import type { SQLiteRunResult } from 'expo-sqlite';

export interface Repository<T> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
  count(): Promise<number>;
}

/**
 * Base repository class with common CRUD operations
 */
export abstract class BaseRepository<T> implements Repository<T> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  abstract findAll(): Promise<T[]>;
  abstract findById(id: string): Promise<T | null>;
  abstract create(data: Partial<T>): Promise<T>;
  abstract update(id: string, data: Partial<T>): Promise<T>;
  abstract delete(id: string): Promise<boolean>;

  async count(): Promise<number> {
    // Placeholder implementation
    return 0;
  }
}

export type { SQLiteRunResult };
