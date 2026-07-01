/**
 * API Types
 * API response and request types
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface AuthResponseDTO {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

export interface RefreshTokenResponseDTO {
  token: string;
  expiresAt: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
  statusCode: number;
}
