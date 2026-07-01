/**
 * Application Configuration
 * Centralized app settings and constants
 */

import Constants from 'expo-constants';

// Environment
export const ENV = {
  DEV: 'development',
  STAGING: 'staging',
  PROD: 'production',
} as const;

type EnvType = (typeof ENV)[keyof typeof ENV];

// Detect environment
const getEnv = (): EnvType => {
  const env = Constants.expoConfig?.extra?.env || process.env.NODE_ENV;
  if (env === 'production') return ENV.PROD;
  if (env === 'staging') return ENV.STAGING;
  return ENV.DEV;
};

export const APP_CONFIG = {
  // App info
  name: Constants.expoConfig?.name || 'Club Deportivo Linces',
  version: Constants.expoConfig?.version || '1.0.0',
  slug: Constants.expoConfig?.slug || 'lincesclub',
  scheme: Constants.expoConfig?.scheme || 'lincesclub',

  // Environment
  env: getEnv(),
  isDev: getEnv() === ENV.DEV,
  isStaging: getEnv() === ENV.STAGING,
  isProd: getEnv() === ENV.PROD,

  // API Configuration (for future use)
  api: {
    baseUrl: process.env.EXPO_PUBLIC_API_URL || '',
    timeout: 30000,
    retries: 3,
  },

  // Features
  features: {
    auth: true,
    offline: true,
    pushNotifications: false, // Enable when ready
    analytics: false, // Enable when ready
  },

  // Defaults
  defaults: {
    pageSize: 20,
    maxPageSize: 100,
    debounceTime: 300,
  },

  // Debug
  debug: {
    enabled: getEnv() === ENV.DEV,
    showLogs: getEnv() === ENV.DEV,
    showPerformance: getEnv() === ENV.DEV,
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
