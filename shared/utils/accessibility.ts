/**
 * Accessibility Utilities
 * Minimum touch targets and contrast helpers.
 */

export const ACCESSIBILITY = {
  minTouchTarget: 44,
  minTouchTargetSmall: 36,
  focusRingWidth: 2,
} as const;

export interface AccessibilityProps {
  accessibilityLabel?: string;
  accessibilityRole?: string;
  accessibilityHint?: string;
  accessibilityState?: {
    disabled?: boolean;
    selected?: boolean;
    checked?: boolean | 'mixed';
    busy?: boolean;
    expanded?: boolean;
  };
}

export function mergeAccessibility(
  props: AccessibilityProps,
  defaults: AccessibilityProps
): AccessibilityProps {
  return {
    accessibilityLabel: props.accessibilityLabel ?? defaults.accessibilityLabel,
    accessibilityRole: props.accessibilityRole ?? defaults.accessibilityRole,
    accessibilityHint: props.accessibilityHint ?? defaults.accessibilityHint,
    accessibilityState: { ...defaults.accessibilityState, ...props.accessibilityState },
  };
}
