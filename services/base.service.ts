/**
 * Base Service
 * Base class for all services
 */

/**
 * Abstract base service with common functionality
 */
export abstract class BaseService {
  protected abstract name: string;

  constructor() {
    // Service initialization
  }

  protected log(message: string, ...args: unknown[]): void {
    console.log(`[${this.name}]`, message, ...args);
  }

  protected error(error: unknown): void {
    console.error(`[${this.name}] Error:`, error);
  }
}

/**
 * Service interface for dependency injection
 */
export interface Service {
  initialize(): Promise<void>;
  destroy(): Promise<void>;
}
