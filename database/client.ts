/**
 * Database Client
 * Expo SQLite configuration and connection management
 * Scaffolded for future implementation
 */

import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'linces_club.db';

let db: SQLite.SQLiteDatabase | null = null;

/**
 * Initialize the database connection
 */
export async function initDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (db) {
    return db;
  }

  db = await SQLite.openDatabaseAsync(DATABASE_NAME);
  return db;
}

/**
 * Get the database instance
 */
export function getDatabase(): SQLite.SQLiteDatabase {
  if (!db) {
    throw new Error('Database not initialized. Call initDatabase() first.');
  }
  return db;
}

/**
 * Close the database connection
 */
export async function closeDatabase(): Promise<void> {
  if (db) {
    await db.closeAsync();
    db = null;
  }
}

/**
 * Execute a SQL query with parameters
 */
export async function executeQuery<T = unknown>(
  query: string,
  params: SQLite.SQLiteBindValue[] = []
): Promise<T> {
  const database = getDatabase();
  const result = await database.runAsync(query, params as SQLite.SQLiteBindParams);
  return result as unknown as T;
}

/**
 * Execute a raw SQL query (for migrations, etc.)
 */
export async function executeRawQuery(query: string): Promise<void> {
  const database = getDatabase();
  await database.execAsync(query);
}

/**
 * Run a SELECT query and return all results
 */
export async function queryAll<T>(query: string, params: SQLite.SQLiteBindValue[] = []): Promise<T[]> {
  const database = getDatabase();
  return database.getAllAsync<T>(query, params as SQLite.SQLiteBindParams);
}

/**
 * Run a SELECT query and return first result
 */
export async function queryFirst<T>(query: string, params: SQLite.SQLiteBindValue[] = []): Promise<T | null> {
  const database = getDatabase();
  return database.getFirstAsync<T>(query, params as SQLite.SQLiteBindParams);
}

/**
 * Begin a transaction
 */
export async function beginTransaction(): Promise<void> {
  await executeRawQuery('BEGIN TRANSACTION;');
}

/**
 * Commit a transaction
 */
export async function commitTransaction(): Promise<void> {
  await executeRawQuery('COMMIT;');
}

/**
 * Rollback a transaction
 */
export async function rollbackTransaction(): Promise<void> {
  await executeRawQuery('ROLLBACK;');
}

/**
 * Reset the database (for development/testing)
 * WARNING: This will delete all data
 */
export async function resetDatabase(): Promise<void> {
  await closeDatabase();
  // Delete the database file (implementation depends on platform)
  db = null;
  await initDatabase();
}
