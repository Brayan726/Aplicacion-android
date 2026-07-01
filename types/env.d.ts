/**
 * Environment Variable Types
 * TypeScript declarations for environment variables
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // App Environment
      NODE_ENV: 'development' | 'production' | 'test';
      EXPO_PUBLIC_API_URL?: string;

      // Firebase (for future use)
      EXPO_PUBLIC_FIREBASE_API_KEY?: string;
      EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN?: string;
      EXPO_PUBLIC_FIREBASE_PROJECT_ID?: string;
      EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET?: string;
      EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?: string;
      EXPO_PUBLIC_FIREBASE_APP_ID?: string;

      // Supabase (if used)
      EXPO_PUBLIC_SUPABASE_URL?: string;
      EXPO_PUBLIC_SUPABASE_ANON_KEY?: string;
    }
  }
}

export {};
