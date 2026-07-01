/**
 * Base Entity
 * Base class for all database entities
 * Empty placeholder for future implementation
 */

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface SoftDeletableEntity extends BaseEntity {
  deletedAt: string | null;
}

export interface Timestampable {
  createdAt: string;
  updatedAt: string;
}
