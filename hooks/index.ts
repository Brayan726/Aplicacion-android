/**
 * Custom Hooks Index
 * Export all custom hooks from a single entry point
 */

// Placeholder for custom hooks
// Future hooks will be added here

/*
Example hooks to be implemented:
- useDebounce: Debounce values
- useThrottle: Throttle values
- useAsync: Async state management
- useForm: Form state management
- useTheme: Theme context (wraps Zustand store)
- useAuth: Auth context (wraps Zustand store)
- useDatabase: Database connection
- useQuery: React Query wrapper
- useMutation: React Query wrapper
*/

export { useFrameworkReady } from './useFrameworkReady';
export { useTheme, useSystemTheme, useResponsive, type ThemeContext } from '@/shared/hooks';
