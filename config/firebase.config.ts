/**
 * Firebase Configuration
 * Firebase services setup (placeholder for future implementation)
 */

import { APP_CONFIG } from './app.config';

export const FIREBASE_CONFIG = {
  enabled: false, // Disable until Firebase is configured

  // API Keys should be stored securely
  // Use environment variables for production
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || '',

  // Features
  features: {
    auth: false,
    analytics: false,
    crashlytics: false,
    messaging: false,
    storage: false,
  },
};

export const isFirebaseEnabled = (): boolean => {
  return FIREBASE_CONFIG.enabled && FIREBASE_CONFIG.apiKey.length > 0;
};
