/**
 * Authentication Store
 * Manages authentication state (user, session, tokens)
 * Currently scaffolded - to be implemented with actual auth
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types for authentication
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'coach' | 'assistant' | 'admin';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Session {
  id: string;
  userId: string;
  token: string;
  refreshToken: string;
  expiresAt: string;
  createdAt: string;
}

interface AuthState {
  // State
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
  setUser: (user: User) => void;
  clearError: () => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      session: null,
      isAuthenticated: false,
      isLoading: false,
      isInitialized: false,
      error: null,

      // Actions - to be implemented with actual auth service
      login: async (_email: string, _password: string) => {
        set({ isLoading: true, error: null });
        try {
          // TODO: Implement actual login logic
          // This will be connected to the auth service later
          throw new Error('Authentication not implemented');
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false,
          });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          // TODO: Implement actual logout logic
          set({
            user: null,
            session: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Logout failed',
            isLoading: false,
          });
          throw error;
        }
      },

      refreshSession: async () => {
        const { session } = get();
        if (!session) return;

        try {
          // TODO: Implement session refresh logic
          throw new Error('Session refresh not implemented');
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Session refresh failed',
          });
          throw error;
        }
      },

      setUser: (user) => {
        set({
          user,
          isAuthenticated: !!user,
        });
      },

      clearError: () => {
        set({ error: null });
      },

      initialize: async () => {
        try {
          // TODO: Check for existing session
          set({ isInitialized: true });
        } catch {
          set({ isInitialized: true });
        }
      },
    }),
    {
      name: 'linces-auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
